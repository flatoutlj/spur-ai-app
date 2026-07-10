import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const OWNER_CHAT_ID = process.env.TELEGRAM_OWNER_CHAT_ID
const NTFY_TOPIC = "spur-ai-lapoldeon"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function sendTelegramMessage(chatId: string | number, text: string) {
  if (!TELEGRAM_BOT_TOKEN) return
  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
  })
}

async function forwardToNtfy(chatId: string | number, from: string, text: string) {
  await fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
    method: "POST",
    body: `[Telegram @${from} (${chatId})]: ${text}`,
    headers: {
      Title: "Spur AI — Telegram Message",
      Priority: "high",
      Tags: "speech_balloon",
    },
  }).catch(() => {})
}

async function getStats() {
  const [{ count: users }, { count: posts }, { count: leads }] = await Promise.all([
    supabase.from("profiles").select("*", { count: "exact", head: true }),
    supabase.from("posts").select("*", { count: "exact", head: true }),
    supabase.from("email_captures").select("*", { count: "exact", head: true }),
  ])
  return { users: users ?? 0, posts: posts ?? 0, leads: leads ?? 0 }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const message = body.message || body.edited_message
    if (!message) return NextResponse.json({ ok: true })

    const chatId = message.chat.id
    const from = message.from?.username ?? message.from?.first_name ?? "unknown"
    const text = (message.text ?? "").trim()

    const isOwner = !OWNER_CHAT_ID || String(chatId) === String(OWNER_CHAT_ID)

    if (!isOwner) {
      await sendTelegramMessage(chatId, "This is a private bot.")
      return NextResponse.json({ ok: true })
    }

    await forwardToNtfy(chatId, from, text)

    if (text === "/start") {
      await sendTelegramMessage(
        chatId,
        `*Spur AI Founder OS* ready 🚀\n\nYour chat ID: \`${chatId}\`\n\nCommands:\n/stats — live metrics\n/tasks — your action items\n/mrr — revenue update\n/help — all commands`
      )
    } else if (text === "/stats") {
      const s = await getStats()
      await sendTelegramMessage(
        chatId,
        `*Spur AI — Live Metrics*\n\n💰 MRR: $0\n👥 Users: ${s.users}\n✍️ Posts Generated: ${s.posts}\n📧 Email Leads: ${s.leads}\n\nGoal: $1,000 MRR in 30 days`
      )
    } else if (text === "/mrr") {
      await sendTelegramMessage(chatId, `💰 MRR: $0\n\nNext milestone: First paying customer\nNeeded: ~7 Starter ($149/mo) or 4 Growth ($249/mo)`)
    } else if (text === "/tasks") {
      await sendTelegramMessage(
        chatId,
        `*Your Action Items*\n\n🔴 Set up Stripe → paste keys in Vercel\n🔴 Set Resend API key in Vercel\n🟡 Post Day 1 LinkedIn content\n🟡 Send 10 LinkedIn cold DMs today\n🟢 CEO dashboard: trispur.com/admin\n🟢 Telegram bot: active ✓`
      )
    } else if (text === "/help") {
      await sendTelegramMessage(
        chatId,
        `/stats — live metrics\n/tasks — action items\n/mrr — revenue status\n/help — this menu`
      )
    } else {
      await sendTelegramMessage(
        chatId,
        `Got it: "${text}"\n\nUse /help to see available commands, or message Claude Code directly if at your computer.`
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Telegram webhook error:", err)
    return NextResponse.json({ ok: true })
  }
}

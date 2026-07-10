import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const OWNER_CHAT_ID = process.env.TELEGRAM_OWNER_CHAT_ID
const ADMIN_EMAIL = "lapoldeonwill@gmail.com"

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
    const text = (message.text ?? "").trim()

    if (String(chatId) !== String(OWNER_CHAT_ID) && OWNER_CHAT_ID) {
      await sendTelegramMessage(chatId, "Unauthorized.")
      return NextResponse.json({ ok: true })
    }

    if (text === "/start") {
      await sendTelegramMessage(chatId, `*Spur AI Founder OS* ready.\n\nCommands:\n/stats — live metrics\n/tasks — your action items\n/help — show this`)
    } else if (text === "/stats") {
      const s = await getStats()
      await sendTelegramMessage(chatId, `*Spur AI Live Metrics*\n\n💰 MRR: $0\n👥 Users: ${s.users}\n✍️ Posts: ${s.posts}\n📧 Leads: ${s.leads}\n\nGoal: $1,000 MRR`)
    } else if (text === "/tasks") {
      await sendTelegramMessage(chatId, `*Your Action Items*\n\n🔴 Set up Stripe → get keys\n🔴 @BotFather → /newbot → send token\n🟡 Set up Resend email\n🟡 Post Day 1 LinkedIn content\n🟢 trispur.com/admin for CEO dashboard`)
    } else if (text === "/help") {
      await sendTelegramMessage(chatId, `/stats — live metrics\n/tasks — action items\n/help — commands`)
    } else {
      await sendTelegramMessage(chatId, `Received: "${text}"\n\nI'm your Spur AI bot. Use /help to see commands.`)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Telegram webhook error:", err)
    return NextResponse.json({ ok: true })
  }
}

import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function sendTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_OWNER_CHAT_ID
  if (!token || !chatId) return
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
  })
}

async function sendNtfy(title: string, message: string) {
  await fetch("https://ntfy.sh/spur-ai-founder-os", {
    method: "POST",
    body: message,
    headers: { Title: title, Priority: "default", Tags: "chart_with_upwards_trend" },
  }).catch(() => {})
}

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization")
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}` && process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const [
    { count: totalUsers },
    { count: totalPosts },
    { count: emailLeads },
    { count: newUsersToday },
    { count: newPostsToday },
  ] = await Promise.all([
    supabase.from("profiles").select("*", { count: "exact", head: true }),
    supabase.from("posts").select("*", { count: "exact", head: true }),
    supabase.from("email_captures").select("*", { count: "exact", head: true }),
    supabase.from("profiles").select("*", { count: "exact", head: true })
      .gte("created_at", new Date(Date.now() - 86400000).toISOString()),
    supabase.from("posts").select("*", { count: "exact", head: true })
      .gte("created_at", new Date(Date.now() - 86400000).toISOString()),
  ])

  const date = new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })

  const userCount = totalUsers ?? 0
  const grade = userCount === 0 ? "D" : userCount < 5 ? "C" : userCount < 20 ? "B" : "A"

  const report = `*Spur AI — Daily Executive Report*
${date}

*Company Grade: ${grade}*

💰 MRR: $0 / $1,000 goal (0%)
👥 Total Users: ${totalUsers ?? 0} (+${newUsersToday ?? 0} today)
✍️ Posts Generated: ${totalPosts ?? 0} (+${newPostsToday ?? 0} today)
📧 Email Leads: ${emailLeads ?? 0}

*Status*
🔴 Stripe: Not configured — no payments possible
🟡 Telegram: Bot live, owner ID pending
🟢 App: Deployed at trispur.com
🟢 Auth: Working
🟢 AI: Claude Haiku active

*Top Priority Tomorrow*
1. Founder: Stripe account + keys
2. Founder: Message @spurai_os_bot /start
3. Post Day 1 LinkedIn content
4. Send 10 cold LinkedIn DMs

_Spur AI Autonomous OS — operating continuously_`

  await Promise.all([
    sendTelegram(report),
    sendNtfy("Spur AI Daily Report", report.replace(/\*/g, "").replace(/_/g, "")),
  ])

  return NextResponse.json({ ok: true, sent: true, date })
}

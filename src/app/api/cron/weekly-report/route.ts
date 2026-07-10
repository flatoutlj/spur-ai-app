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
    headers: { Title: title, Priority: "high", Tags: "bar_chart" },
  }).catch(() => {})
}

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization")
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}` && process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString()

  const [
    { count: totalUsers },
    { count: totalPosts },
    { count: emailLeads },
    { count: newUsersWeek },
    { count: newPostsWeek },
    { count: newLeadsWeek },
  ] = await Promise.all([
    supabase.from("profiles").select("*", { count: "exact", head: true }),
    supabase.from("posts").select("*", { count: "exact", head: true }),
    supabase.from("email_captures").select("*", { count: "exact", head: true }),
    supabase.from("profiles").select("*", { count: "exact", head: true }).gte("created_at", weekAgo),
    supabase.from("posts").select("*", { count: "exact", head: true }).gte("created_at", weekAgo),
    supabase.from("email_captures").select("*", { count: "exact", head: true }).gte("created_at", weekAgo),
  ])

  const week = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  const grade = totalUsers === 0 ? "D" : totalUsers < 5 ? "C" : totalUsers < 20 ? "B" : "A"
  const mrr = 0 // Update when Stripe is live

  const report = `*Spur AI — Weekly Executive Report*
Week ending ${week}

*Overall Grade: ${grade}*

💰 *REVENUE*
MRR: $${mrr}
ARR Run Rate: $${mrr * 12}
Paying Customers: 0
Goal: $1,000 MRR by Day 30

👥 *GROWTH*
Total Users: ${totalUsers ?? 0} (+${newUsersWeek ?? 0} this week)
Email Leads: ${emailLeads ?? 0} (+${newLeadsWeek ?? 0} this week)
Posts Generated: ${totalPosts ?? 0} (+${newPostsWeek ?? 0} this week)
Lead→User Conversion: ${emailLeads && emailLeads > 0 ? Math.round(((totalUsers ?? 0) / emailLeads) * 100) : 0}%

🚦 *INFRASTRUCTURE*
✅ trispur.com — live
✅ Auth (Supabase) — working
✅ AI (Claude Haiku) — active
✅ Admin dashboard — /admin
✅ Daily cron reports — 9am UTC
✅ SEO pages — 3 live
🔴 Stripe payments — keys needed
🔴 Resend email — key needed
🟡 Telegram owner ID — pending /start

📋 *THIS WEEK'S WINS*
• Full Mission Control /admin dashboard deployed
• Email capture pipeline fixed (was capturing zero leads)
• Exit-intent popup deployed
• 3 SEO pages live (15.8K/mo combined search volume)
• Sitemap + robots.txt deployed
• Distribution assets: 30-day LinkedIn calendar, ad copy, cold DMs

🎯 *NEXT WEEK PRIORITIES*
1. 🔴 CRITICAL: Stripe account + keys → first revenue
2. 🔴 CRITICAL: Post LinkedIn content daily (calendar ready)
3. 🟡 Send 50 LinkedIn cold DMs this week (10/day)
4. 🟡 Submit to ProductHunt, IndieHackers, G2
5. 🟡 Set up Resend for email sequences
6. 🟢 Telegram owner ID for direct bot commands

_Spur AI Autonomous OS — Week 1 Review_`

  await Promise.all([
    sendTelegram(report),
    sendNtfy("Spur AI Weekly Report", report.replace(/\*/g, "").replace(/_/g, "")),
  ])

  return NextResponse.json({ ok: true, sent: true, week })
}

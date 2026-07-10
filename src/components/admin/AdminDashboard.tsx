"use client"

interface Metrics {
  totalUsers: number
  totalPosts: number
  emailCaptures: number
  mrr: number
}

interface RecentUser {
  id: string
  full_name: string | null
  niche: string | null
  created_at: string
}

interface RecentPost {
  id: string
  title: string | null
  created_at: string
}

interface Props {
  metrics: Metrics
  recentUsers: RecentUser[]
  recentPosts: RecentPost[]
}

export default function AdminDashboard({ metrics, recentUsers, recentPosts }: Props) {
  const cards = [
    { label: "MRR", value: `$${metrics.mrr.toLocaleString()}`, icon: "💰", color: "from-green-400 to-emerald-600", goal: "$1,000", progress: Math.min((metrics.mrr / 1000) * 100, 100) },
    { label: "Total Users", value: metrics.totalUsers.toString(), icon: "👥", color: "from-blue-400 to-indigo-600", goal: "100 users", progress: Math.min((metrics.totalUsers / 100) * 100, 100) },
    { label: "Posts Generated", value: metrics.totalPosts.toString(), icon: "✍️", color: "from-purple-400 to-violet-600", goal: "500 posts", progress: Math.min((metrics.totalPosts / 500) * 100, 100) },
    { label: "Email Leads", value: metrics.emailCaptures.toString(), icon: "📧", color: "from-orange-400 to-rose-500", goal: "200 leads", progress: Math.min((metrics.emailCaptures / 200) * 100, 100) },
  ]

  const distribution = [
    { channel: "LinkedIn (Organic)", status: "Active", note: "30-day calendar ready — post daily" },
    { channel: "LinkedIn (Paid Ads)", status: "Pending", note: "Ad copy ready — need $500 budget" },
    { channel: "Meta Ads", status: "Pending", note: "Ad creative ready — need account" },
    { channel: "Cold Outreach", status: "Ready", note: "DM 10 B2B consultants/day on LinkedIn" },
    { channel: "ProductHunt", status: "Planned", note: "Launch after 10 users" },
  ]

  const humanTasks = [
    { priority: "HIGH", task: "Set up Stripe account", action: "Get keys → paste in Vercel env vars", done: false },
    { priority: "HIGH", task: "Set up Telegram bot", action: "Message @BotFather → /newbot → share token", done: false },
    { priority: "MED", task: "Set up Resend email", action: "Create account → get API key", done: false },
    { priority: "MED", task: "Post Day 1 LinkedIn content", action: "Check /spur-ai/docs/LINKEDIN_30_DAY_CALENDAR.md", done: false },
    { priority: "LOW", task: "Set up Meta Ads account", action: "business.facebook.com", done: false },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Spur AI — CEO Dashboard</h1>
            <p className="text-gray-400 text-sm mt-1">Goal: $1,000 MRR in 30 days</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Live</span>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {cards.map((card) => (
            <div key={card.label} className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-400 text-sm">{card.label}</span>
                <span className="text-2xl">{card.icon}</span>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{card.value}</div>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>Goal: {card.goal}</span>
                <span>{Math.round(card.progress)}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full bg-gradient-to-r ${card.color}`}
                  style={{ width: `${card.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Human Tasks */}
        <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800 mb-6">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
            <span className="text-yellow-400">⚡</span> Your Action Items
          </h2>
          <div className="space-y-3">
            {humanTasks.map((t, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-800 rounded-xl p-3">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full mt-0.5 shrink-0 ${
                  t.priority === "HIGH" ? "bg-red-500/20 text-red-400" :
                  t.priority === "MED" ? "bg-yellow-500/20 text-yellow-400" :
                  "bg-gray-500/20 text-gray-400"
                }`}>
                  {t.priority}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium">{t.task}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Distribution Channels */}
        <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800 mb-6">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
            <span>📡</span> Distribution Channels
          </h2>
          <div className="space-y-2">
            {distribution.map((d, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-800 last:border-0">
                <span className={`w-2 h-2 rounded-full shrink-0 ${
                  d.status === "Active" ? "bg-green-400" :
                  d.status === "Ready" ? "bg-blue-400" :
                  "bg-gray-600"
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm">{d.channel}</p>
                  <p className="text-gray-500 text-xs">{d.note}</p>
                </div>
                <span className={`text-xs font-medium shrink-0 ${
                  d.status === "Active" ? "text-green-400" :
                  d.status === "Ready" ? "text-blue-400" :
                  "text-gray-500"
                }`}>
                  {d.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Users */}
        {recentUsers.length > 0 && (
          <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800 mb-6">
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span>👥</span> Recent Signups
            </h2>
            <div className="space-y-2">
              {recentUsers.map((u) => (
                <div key={u.id} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
                  <div>
                    <p className="text-white text-sm">{u.full_name ?? "Anonymous"}</p>
                    <p className="text-gray-500 text-xs">{u.niche ?? "No niche set"}</p>
                  </div>
                  <span className="text-gray-600 text-xs">
                    {new Date(u.created_at).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Links */}
        <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
          <h2 className="text-white font-semibold mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Supabase", url: "https://supabase.com/dashboard/project/ykpiwudgcoohzurjorhe" },
              { label: "Vercel", url: "https://vercel.com/dashboard" },
              { label: "Cloudflare DNS", url: "https://dash.cloudflare.com" },
              { label: "GitHub Repo", url: "https://github.com/flatoutlj/spur-ai-app" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gray-800 rounded-xl p-3 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
              >
                {link.label}
                <span className="text-gray-600">→</span>
              </a>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-700 text-xs mt-6">
          trispur.com/admin — Spur AI Founder OS
        </p>
      </div>
    </div>
  )
}

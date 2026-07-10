"use client"

// ─── Types ────────────────────────────────────────────────────────────────────

interface Metrics {
  totalUsers: number
  totalPosts: number
  emailCaptures: number
  trialUsers: number
  activatedCount: number
  mrr: number
  paidCustomers: number
}

interface RecentUser {
  id: string
  full_name: string | null
  niche: string | null
  created_at: string
  plan?: string | null
}

interface Props {
  metrics: Metrics
  recentUsers: RecentUser[]
}

// ─── Static data ──────────────────────────────────────────────────────────────

const SPRINT_TASKS = [
  { status: "DONE", label: "Domain trispur.com live" },
  { status: "DONE", label: "Supabase auth + DB deployed" },
  { status: "DONE", label: "Landing page with email capture" },
  { status: "DONE", label: "AI post generator" },
  { status: "DONE", label: "Topic ideas generator" },
  { status: "DONE", label: "Onboarding wizard" },
  { status: "DONE", label: "CEO Dashboard" },
  { status: "DONE", label: "Telegram bot @spurai_os_bot" },
  { status: "DONE", label: "Distribution assets written (30-day calendar, ad copy, cold DMs)" },
  { status: "IN PROGRESS", label: "Daily automated executive report (cron)" },
  { status: "IN PROGRESS", label: "SEO landing pages" },
  { status: "BLOCKED", label: "Stripe payments — needs founder keys" },
  { status: "BLOCKED", label: "Email sequences — needs Resend key" },
  { status: "BLOCKED", label: "Telegram owner binding — needs /start on @spurai_os_bot" },
] as const

const AGENTS = [
  { name: "CEO Agent", role: "Autonomous execution loop", task: "Initializing company OS", status: "Active" },
  { name: "Engineering Agent", role: "Code + deploy", task: "Mission Control rebuild", status: "Active" },
  { name: "SEO Agent", role: "Programmatic content", task: "Building keyword landing pages", status: "Active" },
  { name: "Growth Agent", role: "Distribution", task: "LinkedIn calendar ready, awaiting posting", status: "Ready" },
  { name: "Marketing Agent", role: "Ad copy", task: "LinkedIn + Meta ads written", status: "Ready" },
  { name: "Sales Agent", role: "Outreach", task: "Cold DM templates ready", status: "Ready" },
] as const

const ACTION_ITEMS = [
  { priority: "HIGH", task: "Stripe account → get keys → add to Vercel", detail: "stripe.com → Dashboard → API Keys → paste into Vercel env vars" },
  { priority: "HIGH", task: "Message @spurai_os_bot → /start → share chat ID", detail: "Open Telegram, message the bot, send /start, copy your chat ID" },
  { priority: "HIGH", task: "Post Day 1 LinkedIn content", detail: "Check /spur-ai/docs/LINKEDIN_30_DAY_CALENDAR.md for today's post" },
  { priority: "MED", task: "Send 10 LinkedIn cold DMs today", detail: "Target B2B consultants, coaches, agency owners" },
  { priority: "MED", task: "Set up Resend email (resend.com)", detail: "Create account → get API key → add RESEND_API_KEY to Vercel" },
  { priority: "LOW", task: "Set up Meta Ads account", detail: "business.facebook.com → create ad account" },
] as const

const DISTRIBUTION_CHANNELS = [
  { channel: "LinkedIn (Organic)", status: "Active", note: "30-day calendar ready — post daily" },
  { channel: "LinkedIn (Paid Ads)", status: "Pending", note: "Ad copy ready — need $500 budget activated" },
  { channel: "Meta Ads", status: "Pending", note: "Ad creative ready — needs Business account" },
  { channel: "Cold Outreach", status: "Ready", note: "DM 10 B2B consultants/day on LinkedIn" },
  { channel: "ProductHunt", status: "Planned", note: "Launch after 10 paying users" },
  { channel: "SEO / Blog", status: "In Progress", note: "Programmatic landing pages being built" },
] as const

const RECENT_ACTIVITY = [
  { time: "2026-07-10 14:02", event: "Engineering Agent: Mission Control dashboard rebuild initiated" },
  { time: "2026-07-10 13:45", event: "CEO Agent: Sprint tasks updated — 9 tasks marked DONE" },
  { time: "2026-07-10 13:30", event: "SEO Agent: Keyword research complete — 47 targets identified" },
  { time: "2026-07-10 13:10", event: "Growth Agent: 30-day LinkedIn calendar finalized" },
  { time: "2026-07-10 12:55", event: "Marketing Agent: LinkedIn + Meta ad copy written" },
  { time: "2026-07-10 12:40", event: "Sales Agent: Cold DM templates ready (3 variants)" },
  { time: "2026-07-10 12:20", event: "CEO Agent: Distribution strategy locked — 6 channels mapped" },
  { time: "2026-07-10 11:50", event: "Engineering Agent: Onboarding wizard deployed to production" },
  { time: "2026-07-10 11:30", event: "Engineering Agent: Telegram bot @spurai_os_bot deployed" },
  { time: "2026-07-10 10:00", event: "CEO Agent: Company OS initialized — Day 1 of 30 begins" },
] as const

const QUICK_LINKS = [
  { label: "Supabase", url: "https://supabase.com/dashboard/project/ykpiwudgcoohzurjorhe" },
  { label: "Vercel", url: "https://vercel.com/dashboard" },
  { label: "Cloudflare DNS", url: "https://dash.cloudflare.com" },
  { label: "GitHub Repo", url: "https://github.com/flatoutlj/spur-ai-app" },
  { label: "trispur.com", url: "https://trispur.com" },
] as const

// ─── Helpers ──────────────────────────────────────────────────────────────────

const LAUNCH_DATE = new Date("2026-07-10")

function getDayNumber(): number {
  const now = new Date()
  const diff = Math.floor((now.getTime() - LAUNCH_DATE.getTime()) / (1000 * 60 * 60 * 24))
  return Math.max(1, diff + 1)
}

function getLetterGrade(totalUsers: number): { grade: string; color: string; label: string } {
  if (totalUsers >= 10) return { grade: "A", color: "text-green-400", label: "Excellent" }
  if (totalUsers >= 5) return { grade: "B", color: "text-blue-400", label: "Good" }
  if (totalUsers >= 1) return { grade: "C", color: "text-yellow-400", label: "Early Stage" }
  return { grade: "D", color: "text-red-400", label: "Pre-Revenue" }
}

function mrrProgress(mrr: number): number {
  return Math.min((mrr / 1000) * 100, 100)
}

function activationRate(activated: number, total: number): number {
  if (total === 0) return 0
  return Math.round((activated / total) * 100)
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">{children}</h2>
  )
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-gray-900 border border-gray-800 rounded-2xl p-5 ${className}`}>
      {children}
    </div>
  )
}

function PulseDot({ color = "bg-green-400" }: { color?: string }) {
  return <span className={`inline-block w-2 h-2 rounded-full ${color} animate-pulse shrink-0`} />
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    DONE: "bg-green-500/15 text-green-400 border border-green-500/30",
    "IN PROGRESS": "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
    BLOCKED: "bg-red-500/15 text-red-400 border border-red-500/30",
    Active: "bg-green-500/15 text-green-400 border border-green-500/30",
    Ready: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
    "In Progress": "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
    Pending: "bg-gray-500/15 text-gray-400 border border-gray-700",
    Planned: "bg-gray-500/15 text-gray-500 border border-gray-700",
  }
  const cls = map[status] ?? "bg-gray-500/15 text-gray-400 border border-gray-700"
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${cls}`}>
      {status}
    </span>
  )
}

function PriorityBadge({ priority }: { priority: string }) {
  const map: Record<string, string> = {
    HIGH: "bg-red-500/15 text-red-400 border border-red-500/30",
    MED: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
    LOW: "bg-gray-500/15 text-gray-400 border border-gray-700",
  }
  const cls = map[priority] ?? "bg-gray-500/15 text-gray-400 border border-gray-700"
  return (
    <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${cls}`}>
      {priority}
    </span>
  )
}

function ProgressBar({ value, color = "bg-green-500" }: { value: number; color?: string }) {
  return (
    <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
      <div
        className={`h-1.5 rounded-full ${color} transition-all duration-500`}
        style={{ width: `${Math.max(value, value > 0 ? 2 : 0)}%` }}
      />
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AdminDashboard({ metrics, recentUsers }: Props) {
  const dayNumber = getDayNumber()
  const grade = getLetterGrade(metrics.totalUsers)
  const mrrPct = mrrProgress(metrics.mrr)
  const actRate = activationRate(metrics.activatedCount, metrics.totalUsers)
  const arr = metrics.mrr * 12
  const daysLeft = Math.max(0, 30 - dayNumber)

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">

        {/* ── Top Bar ─────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">Spur AI — Mission Control</h1>
            <p className="text-gray-500 text-sm mt-0.5">trispur.com · Founder OS · CEO Dashboard</p>
          </div>
          <div className="flex items-center gap-2">
            <PulseDot />
            <span className="text-green-400 text-sm font-medium">Live</span>
          </div>
        </div>

        {/* ── Section 1: Company Health Header ───────────────────────────── */}
        <Card>
          <SectionHeader>Company Health</SectionHeader>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            {/* Letter Grade */}
            <div className="flex flex-col items-center justify-center bg-gray-800 rounded-2xl w-20 h-20 shrink-0">
              <span className={`text-5xl font-black leading-none ${grade.color}`}>{grade.grade}</span>
              <span className="text-gray-500 text-xs mt-1">{grade.label}</span>
            </div>
            {/* MRR Progress */}
            <div className="flex-1 w-full">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-300 font-medium">MRR toward $1,000 goal</span>
                <span className="text-sm text-white font-bold">${metrics.mrr.toLocaleString()} / $1,000</span>
              </div>
              <ProgressBar value={mrrPct} color="bg-green-500" />
              <p className="text-gray-500 text-xs mt-2">{mrrPct.toFixed(1)}% complete</p>
            </div>
            {/* Day Counter */}
            <div className="shrink-0 text-right">
              <p className="text-3xl font-black text-white">Day {dayNumber}</p>
              <p className="text-gray-500 text-xs">of 30 · {daysLeft} days left</p>
            </div>
          </div>
        </Card>

        {/* ── Section 2: Revenue Metrics ──────────────────────────────────── */}
        <div>
          <SectionHeader>Revenue Metrics</SectionHeader>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* MRR */}
            <Card>
              <p className="text-gray-500 text-xs mb-1">MRR</p>
              <p className="text-2xl font-black text-white">${metrics.mrr.toLocaleString()}</p>
              <p className="text-gray-600 text-xs mb-2">Goal: $1,000</p>
              <ProgressBar value={mrrPct} color="bg-green-500" />
              <p className="text-gray-600 text-xs mt-1">{mrrPct.toFixed(1)}%</p>
            </Card>
            {/* ARR */}
            <Card>
              <p className="text-gray-500 text-xs mb-1">ARR</p>
              <p className="text-2xl font-black text-white">${arr.toLocaleString()}</p>
              <p className="text-gray-600 text-xs">MRR × 12</p>
            </Card>
            {/* Paid Customers */}
            <Card>
              <p className="text-gray-500 text-xs mb-1">Paid Customers</p>
              <p className="text-2xl font-black text-white">{metrics.paidCustomers}</p>
              <p className="text-gray-600 text-xs">Goal: 10</p>
            </Card>
            {/* Trial Users */}
            <Card>
              <p className="text-gray-500 text-xs mb-1">Trial Users</p>
              <p className="text-2xl font-black text-white">{metrics.trialUsers}</p>
              <p className="text-gray-600 text-xs">Free plan</p>
            </Card>
          </div>
        </div>

        {/* ── Section 3: Growth Metrics ───────────────────────────────────── */}
        <div>
          <SectionHeader>Growth Metrics</SectionHeader>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Total Users */}
            <Card>
              <p className="text-gray-500 text-xs mb-1">Total Users</p>
              <p className="text-2xl font-black text-white">{metrics.totalUsers}</p>
              <div className="mt-2">
                <ProgressBar value={Math.min((metrics.totalUsers / 100) * 100, 100)} color="bg-blue-500" />
              </div>
              <p className="text-gray-600 text-xs mt-1">Goal: 100</p>
            </Card>
            {/* Email Leads */}
            <Card>
              <p className="text-gray-500 text-xs mb-1">Email Leads</p>
              <p className="text-2xl font-black text-white">{metrics.emailCaptures}</p>
              <div className="mt-2">
                <ProgressBar value={Math.min((metrics.emailCaptures / 200) * 100, 100)} color="bg-purple-500" />
              </div>
              <p className="text-gray-600 text-xs mt-1">Goal: 200</p>
            </Card>
            {/* Posts Generated */}
            <Card>
              <p className="text-gray-500 text-xs mb-1">Posts Generated</p>
              <p className="text-2xl font-black text-white">{metrics.totalPosts}</p>
              <div className="mt-2">
                <ProgressBar value={Math.min((metrics.totalPosts / 500) * 100, 100)} color="bg-orange-500" />
              </div>
              <p className="text-gray-600 text-xs mt-1">Goal: 500</p>
            </Card>
            {/* Activation Rate */}
            <Card>
              <p className="text-gray-500 text-xs mb-1">Activation Rate</p>
              <p className="text-2xl font-black text-white">{actRate}%</p>
              <div className="mt-2">
                <ProgressBar value={actRate} color="bg-teal-500" />
              </div>
              <p className="text-gray-600 text-xs mt-1">{metrics.activatedCount} generated 1+ post</p>
            </Card>
          </div>
        </div>

        {/* ── Section 4: Current Sprint ───────────────────────────────────── */}
        <Card>
          <SectionHeader>Current Sprint — Week 1</SectionHeader>
          <div className="space-y-2">
            {SPRINT_TASKS.map((task, i) => (
              <div key={i} className="flex items-center gap-3 py-1.5 border-b border-gray-800/60 last:border-0">
                <StatusBadge status={task.status} />
                <span className={`text-sm flex-1 ${task.status === "DONE" ? "text-gray-400 line-through" : task.status === "BLOCKED" ? "text-red-300" : "text-white"}`}>
                  {task.label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-4 text-xs text-gray-500">
            <span>
              <span className="text-green-400 font-bold">{SPRINT_TASKS.filter(t => t.status === "DONE").length}</span> Done
            </span>
            <span>
              <span className="text-yellow-400 font-bold">{SPRINT_TASKS.filter(t => t.status === "IN PROGRESS").length}</span> In Progress
            </span>
            <span>
              <span className="text-red-400 font-bold">{SPRINT_TASKS.filter(t => t.status === "BLOCKED").length}</span> Blocked
            </span>
          </div>
        </Card>

        {/* ── Section 5: Active Agents ────────────────────────────────────── */}
        <div>
          <SectionHeader>Active Agents</SectionHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AGENTS.map((agent) => (
              <Card key={agent.name}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-white font-semibold text-sm">{agent.name}</p>
                    <p className="text-gray-500 text-xs">{agent.role}</p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                    <PulseDot color={agent.status === "Active" ? "bg-green-400" : "bg-blue-400"} />
                    <span className={`text-xs font-medium ${agent.status === "Active" ? "text-green-400" : "text-blue-400"}`}>
                      {agent.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{agent.task}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* ── Section 6: Action Items ─────────────────────────────────────── */}
        <Card>
          <SectionHeader>Action Items — Founder Only</SectionHeader>
          <div className="space-y-3">
            {ACTION_ITEMS.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-800/50 rounded-xl p-3">
                <PriorityBadge priority={item.priority} />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium leading-snug">{item.task}</p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* ── Section 7: Distribution Channels ───────────────────────────── */}
        <Card>
          <SectionHeader>Distribution Channels</SectionHeader>
          <div className="divide-y divide-gray-800/60">
            {DISTRIBUTION_CHANNELS.map((d, i) => (
              <div key={i} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${
                    d.status === "Active"
                      ? "bg-green-400 animate-pulse"
                      : d.status === "Ready" || d.status === "In Progress"
                      ? "bg-blue-400"
                      : "bg-gray-600"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium">{d.channel}</p>
                  <p className="text-gray-500 text-xs">{d.note}</p>
                </div>
                <StatusBadge status={d.status} />
              </div>
            ))}
          </div>
        </Card>

        {/* ── Section 8: Recent Activity ──────────────────────────────────── */}
        <Card>
          <SectionHeader>Recent Activity — Agent Log</SectionHeader>
          <div className="space-y-2">
            {RECENT_ACTIVITY.map((entry, i) => (
              <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-800/40 last:border-0">
                <span className="text-gray-600 text-xs font-mono shrink-0 pt-0.5 w-32">{entry.time.split(" ")[1]}</span>
                <p className="text-gray-300 text-xs leading-relaxed flex-1">{entry.event}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-xs mt-3">Last 10 entries from AGENT_LOG.md</p>
        </Card>

        {/* ── Section 9: Quick Links ──────────────────────────────────────── */}
        <Card>
          <SectionHeader>Quick Links</SectionHeader>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl px-4 py-3 text-sm text-gray-300 hover:text-white"
              >
                <span>{link.label}</span>
                <span className="text-gray-600 ml-2">→</span>
              </a>
            ))}
          </div>
        </Card>

        {/* ── Recent Signups (live data) ──────────────────────────────────── */}
        {recentUsers.length > 0 && (
          <Card>
            <SectionHeader>Recent Signups</SectionHeader>
            <div className="divide-y divide-gray-800/60">
              {recentUsers.map((u) => (
                <div key={u.id} className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
                  <div>
                    <p className="text-white text-sm font-medium">{u.full_name ?? "Anonymous"}</p>
                    <p className="text-gray-500 text-xs">{u.niche ?? "No niche set"}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 text-xs">{new Date(u.created_at).toLocaleDateString()}</p>
                    {u.plan && (
                      <span className="text-gray-500 text-xs capitalize">{u.plan}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        <p className="text-center text-gray-700 text-xs pb-4">
          trispur.com/admin · Spur AI Founder OS · Day {dayNumber} of 30
        </p>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"

const NICHES = [
  "Consulting",
  "Business coaching",
  "Marketing agency",
  "Sales coaching",
  "Executive coaching",
  "Finance / Accounting",
  "HR / Recruiting",
  "SaaS / Tech",
  "Real estate",
  "Legal services",
]

const FRAMEWORKS = [
  { id: "story", label: "Personal Story", emoji: "📖" },
  { id: "howto", label: "How-To Guide", emoji: "📋" },
  { id: "insight", label: "Contrarian Take", emoji: "💡" },
  { id: "list", label: "Numbered List", emoji: "🔢" },
  { id: "case_study", label: "Client Win", emoji: "🏆" },
  { id: "question", label: "Thought Question", emoji: "🤔" },
  { id: "mistake", label: "Common Mistake", emoji: "⚠️" },
  { id: "prediction", label: "Bold Prediction", emoji: "🔮" },
]

const WEEK_TEMPLATES: Record<string, { day: string; type: string; emoji: string; prompt: string }[]> = {
  Consulting: [
    { day: "Mon", type: "How-To Guide", emoji: "📋", prompt: "Share a process or framework you use with clients — something specific and actionable." },
    { day: "Wed", type: "Client Win", emoji: "🏆", prompt: "Share a specific result you got for a client (numbers if possible). What was the challenge? What changed?" },
    { day: "Fri", type: "Contrarian Take", emoji: "💡", prompt: "Challenge a common belief in your consulting niche. What do most people get wrong?" },
  ],
  "Business coaching": [
    { day: "Mon", type: "Personal Story", emoji: "📖", prompt: "A lesson you learned the hard way — something that changed how you coach." },
    { day: "Wed", type: "How-To Guide", emoji: "📋", prompt: "One specific mindset shift or tactical framework your coaching clients implement first." },
    { day: "Fri", type: "Thought Question", emoji: "🤔", prompt: "Ask your ideal coaching client a question that makes them reflect on their situation." },
  ],
  "Marketing agency": [
    { day: "Mon", type: "Client Win", emoji: "🏆", prompt: "A campaign or result you're proud of — specific numbers, specific industry." },
    { day: "Wed", type: "Contrarian Take", emoji: "💡", prompt: "What's the biggest lie in marketing right now? What are agencies selling that doesn't work?" },
    { day: "Fri", type: "How-To Guide", emoji: "📋", prompt: "One marketing tactic your agency uses that most clients haven't heard of yet." },
  ],
}

type CalendarWeek = {
  weekNum: number
  posts: { day: string; type: string; emoji: string; topic: string; hook: string }[]
}

const TOPIC_BANKS: Record<string, { topic: string; hook: string; type: string; emoji: string }[]> = {
  Consulting: [
    { topic: "Why I turned down a $50K contract", hook: "Last month I said no to $50K. Here's why that was the right call.", type: "Personal Story", emoji: "📖" },
    { topic: "The pricing mistake that cost clients $100K", hook: "87% of consultants underprice their services. Are you one of them?", type: "Common Mistake", emoji: "⚠️" },
    { topic: "How to qualify clients in the first 5 minutes", hook: "After 300+ discovery calls, I can tell in 5 minutes if someone will be a great client.", type: "How-To Guide", emoji: "📋" },
    { topic: "My exact proposal template", hook: "I've used this proposal structure to close $2.4M in consulting contracts.", type: "How-To Guide", emoji: "📋" },
    { topic: "Why retainers beat project work", hook: "Hot take: project-based consulting is the worst business model. Here's what to do instead.", type: "Contrarian Take", emoji: "💡" },
    { topic: "What clients actually want vs what they say they want", hook: "Clients say they want [X]. What they actually need is [Y].", type: "Insight", emoji: "💡" },
    { topic: "Client success story: 3x growth in 90 days", hook: "We helped [Client Type] go from [A] to [B] in 90 days. Here's exactly how.", type: "Client Win", emoji: "🏆" },
    { topic: "The question I ask every prospective client", hook: "I ask every prospect one question before we start working together. Their answer tells me everything.", type: "Personal Story", emoji: "📖" },
    { topic: "Why I stopped discounting my rates", hook: "I used to discount my rates to close deals. Then I tracked what happened to those projects.", type: "Personal Story", emoji: "📖" },
    { topic: "How to handle the 'you're too expensive' objection", hook: "When a prospect says you're too expensive, they're not saying what you think they're saying.", type: "How-To Guide", emoji: "📋" },
    { topic: "The 3 signs a client will be a nightmare", hook: "I can spot a bad client in the first call. Here are the 3 red flags I watch for.", type: "How-To Guide", emoji: "📋" },
    { topic: "Should you niche down? (my honest take)", hook: "Everyone says to niche down. Here's when it actually makes sense — and when it doesn't.", type: "Contrarian Take", emoji: "💡" },
  ],
  "Marketing agency": [
    { topic: "The campaign that 10x'd our client's leads", hook: "We ran a single campaign that generated $400K in pipeline for a B2B SaaS client.", type: "Client Win", emoji: "🏆" },
    { topic: "Why most agencies lose clients in month 3", hook: "The agency churn problem isn't about results. It's about communication.", type: "Common Mistake", emoji: "⚠️" },
    { topic: "How we onboard new clients in 14 days", hook: "Our client onboarding process took 90 days. Now it takes 14. Here's what changed.", type: "How-To Guide", emoji: "📋" },
    { topic: "The one metric that predicts client retention", hook: "We track one metric that tells us whether a client will renew 3 months before their contract ends.", type: "How-To Guide", emoji: "📋" },
    { topic: "Why we only work with B2B companies now", hook: "We said no to every B2C client for 18 months. Here's what happened to our revenue.", type: "Personal Story", emoji: "📖" },
    { topic: "The agency pricing model that doubled our profit margins", hook: "We switched from hourly to retainer to performance. The third model changed everything.", type: "Contrarian Take", emoji: "💡" },
    { topic: "What $10K/mo actually gets you from an agency", hook: "Here's what a $10K/mo marketing retainer should realistically include — and what it shouldn't.", type: "How-To Guide", emoji: "📋" },
    { topic: "3 questions to ask before hiring a marketing agency", hook: "If an agency can't answer these 3 questions, don't hire them.", type: "How-To Guide", emoji: "📋" },
    { topic: "Our client got 400% ROI in 6 months. Here's what we did.", hook: "We took a consulting firm from 2 inbound leads/month to 11. Here's the exact strategy.", type: "Client Win", emoji: "🏆" },
    { topic: "Why agencies should stop selling 'strategy'", hook: "Hot take: Most agencies charge $5,000 for a strategy deck that never gets implemented.", type: "Contrarian Take", emoji: "💡" },
    { topic: "The content types that generate the most B2B leads", hook: "I analyzed 3 years of content marketing data across 40 B2B clients. Here's what actually works.", type: "How-To Guide", emoji: "📋" },
    { topic: "How to raise your agency rates without losing clients", hook: "We raised our minimum retainer from $3K to $8K last year. Kept 90% of clients.", type: "Personal Story", emoji: "📖" },
  ],
}

const getTopics = (niche: string, count: number) => {
  const bank = TOPIC_BANKS[niche] || TOPIC_BANKS["Consulting"]
  const shuffled = [...bank].sort(() => Math.random() - 0.5)
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(shuffled[i % shuffled.length])
  }
  return result
}

export default function LinkedInContentCalendarClient() {
  const [niche, setNiche] = useState("")
  const [postsPerWeek, setPostsPerWeek] = useState(3)
  const [weeks, setWeeks] = useState(4)
  const [generated, setGenerated] = useState<CalendarWeek[]>([])
  const [copiedIdx, setCopiedIdx] = useState<string | null>(null)
  const [selectedWeek, setSelectedWeek] = useState(0)

  const generate = () => {
    if (!niche) return

    const days3 = ["Monday", "Wednesday", "Friday"]
    const days4 = ["Monday", "Tuesday", "Thursday", "Friday"]
    const days5 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

    const dayMap: Record<number, string[]> = { 3: days3, 4: days4, 5: days5 }
    const selectedDays = dayMap[postsPerWeek] || days3

    const totalPosts = postsPerWeek * weeks
    const topics = getTopics(niche, totalPosts)

    const calendar: CalendarWeek[] = []
    let topicIdx = 0

    for (let w = 0; w < weeks; w++) {
      const weekPosts = selectedDays.map((day) => {
        const t = topics[topicIdx % topics.length]
        topicIdx++
        return { day, type: t.type, emoji: t.emoji, topic: t.topic, hook: t.hook }
      })
      calendar.push({ weekNum: w + 1, posts: weekPosts })
    }

    setGenerated(calendar)
    setSelectedWeek(0)
  }

  const copyAll = async () => {
    const text = generated
      .map((week) => {
        const posts = week.posts
          .map((p) => `📅 ${p.day} — ${p.type}\nTopic: ${p.topic}\nHook: "${p.hook}"`)
          .join("\n\n")
        return `WEEK ${week.weekNum}\n${posts}`
      })
      .join("\n\n" + "─".repeat(40) + "\n\n")

    await navigator.clipboard.writeText(text)
    setCopiedIdx("all")
    setTimeout(() => setCopiedIdx(null), 2000)
  }

  const copyPost = async (hook: string, idx: string) => {
    await navigator.clipboard.writeText(hook)
    setCopiedIdx(idx)
    setTimeout(() => setCopiedIdx(null), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h2 className="font-semibold text-gray-900 text-lg mb-5">Generate your content calendar</h2>

        <div className="grid sm:grid-cols-3 gap-4 mb-5">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-2">Your niche *</label>
            <select
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select your niche</option>
              {NICHES.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-2">Posts per week</label>
            <div className="flex gap-2">
              {[3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => setPostsPerWeek(n)}
                  className={`flex-1 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                    postsPerWeek === n
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {n}x
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-2">Weeks to plan</label>
            <div className="flex gap-2">
              {[2, 4, 8].map((n) => (
                <button
                  key={n}
                  onClick={() => setWeeks(n)}
                  className={`flex-1 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                    weeks === n
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={generate}
          disabled={!niche}
          className="w-full gradient-bg text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-40"
        >
          Generate {weeks * postsPerWeek} post topics →
        </button>
      </div>

      {generated.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-gray-900 text-lg">
              Your {weeks}-week LinkedIn content calendar
            </h2>
            <button
              onClick={copyAll}
              className="text-sm gradient-bg text-white font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              {copiedIdx === "all" ? "✓ Copied all!" : "Copy all to clipboard"}
            </button>
          </div>

          {/* Week tabs */}
          <div className="flex gap-1 bg-gray-100 rounded-xl p-1 w-fit">
            {generated.map((week, i) => (
              <button
                key={week.weekNum}
                onClick={() => setSelectedWeek(i)}
                className={`text-xs font-medium px-4 py-2 rounded-lg transition-all ${
                  selectedWeek === i
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Week {week.weekNum}
              </button>
            ))}
          </div>

          {generated[selectedWeek] && (
            <div className="space-y-3">
              {generated[selectedWeek].posts.map((post, pi) => {
                const key = `${selectedWeek}-${pi}`
                return (
                  <div key={key} className="bg-white rounded-xl border border-gray-100 p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{post.emoji}</span>
                        <div>
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            {post.day}
                          </div>
                          <div className="text-sm font-semibold text-gray-900">{post.type}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => copyPost(post.hook, key)}
                        className="text-xs border border-gray-200 text-gray-600 hover:text-blue-600 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        {copiedIdx === key ? "✓ Copied" : "Copy hook"}
                      </button>
                    </div>
                    <div className="text-sm font-medium text-gray-800 mb-2">{post.topic}</div>
                    <div className="text-sm text-gray-500 italic bg-gray-50 rounded-lg p-3">
                      &ldquo;{post.hook}&rdquo;
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-700">
            <strong>Pro tip:</strong> Use these hooks as the first line of your LinkedIn posts.
            The hook is what determines whether anyone reads past the first sentence — get it right and the rest follows.
          </div>
        </div>
      )}
    </div>
  )
}

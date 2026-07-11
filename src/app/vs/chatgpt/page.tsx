import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Spur AI vs ChatGPT for LinkedIn: Which Generates Better B2B Posts? (2026)",
  description:
    "Using ChatGPT for LinkedIn posts? Compare Spur AI vs ChatGPT for B2B content creation — see why a specialized LinkedIn AI tool gets better results than a general AI.",
  keywords: [
    "chatgpt for linkedin",
    "chatgpt linkedin alternative",
    "spur ai vs chatgpt",
    "ai linkedin post generator",
    "best ai for linkedin posts",
  ],
  openGraph: {
    title: "Spur AI vs ChatGPT for LinkedIn: Which Generates Better B2B Posts? (2026)",
    description: "ChatGPT is a general AI. Spur AI is LinkedIn-specific. Here's why that difference matters for B2B consultants and agency owners.",
    type: "article",
    url: "https://trispur.com/vs/chatgpt",
  },
  alternates: { canonical: "https://trispur.com/vs/chatgpt" },
}

const COMPARISON = [
  {
    feature: "LinkedIn specialization",
    spurAI: "Built exclusively for LinkedIn B2B content and lead generation",
    competitor: "General-purpose AI — not specialized for LinkedIn or B2B",
    winner: "spur",
    note: "Spur AI knows LinkedIn formats, hooks, and what converts",
  },
  {
    feature: "Content frameworks",
    spurAI: "15+ proven frameworks: Story, Contrarian, How-To, Case Study, etc.",
    competitor: "Can write in any framework — but you must know and describe each one",
    winner: "spur",
    note: "Spur AI has frameworks built in — no prompt engineering needed",
  },
  {
    feature: "Voice personalization",
    spurAI: "Learns your tone, role, and ICP from onboarding — baked into every post",
    competitor: "Requires detailed prompts every session — no memory by default",
    winner: "spur",
    note: "Spur AI's context carries across every generation",
  },
  {
    feature: "Hooks library",
    spurAI: "Curated library of high-performing LinkedIn hooks, categorized by type",
    competitor: "Can generate hooks but requires specific prompting each time",
    winner: "spur",
    note: "Spur AI's hooks are battle-tested for LinkedIn specifically",
  },
  {
    feature: "DM templates",
    spurAI: "25+ DM templates in 5 categories, AI-personalized for outreach",
    competitor: "Can write DMs but has no LinkedIn-specific outreach sequences",
    winner: "spur",
    note: "Spur AI covers the full content-to-client workflow",
  },
  {
    feature: "Profile optimizer",
    spurAI: "Interactive checklist + AI headline/bio generator for LinkedIn",
    competitor: "Can help with bio writing but requires careful prompting",
    winner: "spur",
    note: "Spur AI's optimizer is LinkedIn-specific and structured",
  },
  {
    feature: "Content calendar",
    spurAI: "Built-in calendar with scheduling workflow for LinkedIn",
    competitor: "No calendar, no scheduling — content only",
    winner: "spur",
    note: "Spur AI keeps your posting cadence organized",
  },
  {
    feature: "Learning curve",
    spurAI: "Onboarding in 15 minutes — optimized output from day one",
    competitor: "Requires expertise in prompt engineering to get quality LinkedIn output",
    winner: "spur",
    note: "ChatGPT output quality depends heavily on prompt skill",
  },
  {
    feature: "Free tools",
    spurAI: "5 free tools: post generator, bio, headline, hooks, content ideas",
    competitor: "Free tier available (limited) — no LinkedIn-specific free tools",
    winner: "spur",
    note: "Spur AI's free tools are LinkedIn-specific, no signup required",
  },
  {
    feature: "Price / value for LinkedIn",
    spurAI: "From $149/mo — everything LinkedIn-specific in one place",
    competitor: "Free (limited) or $20/mo Plus — but requires hours of prompt work",
    winner: "chatgpt",
    note: "ChatGPT is cheaper; Spur AI saves time and delivers better LinkedIn output",
  },
]

const FAQ = [
  {
    q: "Is Spur AI better than ChatGPT for LinkedIn?",
    a: "For LinkedIn specifically, yes. ChatGPT is an extraordinarily capable general AI, but LinkedIn content that converts B2B clients requires specific knowledge: which hooks drive engagement, how to structure posts for the LinkedIn algorithm, what tone resonates with decision-makers, and how to balance value content with calls-to-action. Spur AI has all of this built in. ChatGPT can produce the same quality, but only if you bring that LinkedIn expertise yourself through detailed prompts — which takes time most B2B professionals don't have.",
  },
  {
    q: "Can I use ChatGPT to write LinkedIn posts?",
    a: "Yes, ChatGPT can write LinkedIn posts — and with good prompting, it can write excellent ones. The challenge is that good prompting for LinkedIn requires knowing what makes LinkedIn content work: proven hooks, content frameworks, ICP-specific language, the right length and format for the algorithm. If you already have that expertise, ChatGPT is a powerful tool. If you don't, you'll spend hours iterating on mediocre output. Spur AI encodes that expertise so you get high-quality B2B LinkedIn posts from the first generation.",
  },
  {
    q: "Why not just use ChatGPT for LinkedIn instead of Spur AI?",
    a: "Think of it like this: ChatGPT is a Swiss Army knife. Spur AI is a specialized chef's knife. For cutting vegetables, the chef's knife wins every time — it's designed for exactly that task. For LinkedIn B2B content, Spur AI wins because it's purpose-built: it knows your voice, your ICP, LinkedIn's content formats, proven hooks, and the full workflow from post generation to DM outreach. ChatGPT requires you to bring all that context yourself, every session, through careful prompt engineering.",
  },
  {
    q: "Is Spur AI worth it vs free ChatGPT?",
    a: "If you're a B2B consultant, coach, or agency owner using LinkedIn to generate clients, yes. The comparison isn't just price — it's time. At $149/mo, Spur AI saves 5-10 hours per week that you'd otherwise spend crafting prompts, iterating on ChatGPT output, building content calendars manually, and writing DMs from scratch. For most B2B professionals, one client closed per month from LinkedIn content more than justifies the cost. The 14-day free trial lets you test this without risk.",
  },
  {
    q: "What makes Spur AI different from ChatGPT?",
    a: "Four key differences. First, specialization: Spur AI is trained on what works for B2B LinkedIn — ChatGPT is trained on everything. Second, personalization: Spur AI learns your voice, role, and ideal client once during onboarding; ChatGPT resets every session. Third, workflow: Spur AI includes the full content-to-client workflow (post generation, hooks library, DM templates, profile optimizer, content calendar); ChatGPT is text generation only. Fourth, output quality for LinkedIn: Spur AI consistently produces LinkedIn-native content; ChatGPT requires expert prompting to match that quality.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
}

export default function SpurAIVsChatGPTPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="font-bold text-gray-900 text-sm">Spur AI</span>
            </Link>
            <Link
              href="/signup"
              className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Start free trial
            </Link>
          </div>
        </nav>

        <main className="pt-14">
          {/* Hero */}
          <section className="py-16 px-4 bg-gradient-to-b from-blue-50/40 to-white text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-2xl text-gray-400 font-light">vs</span>
                <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GPT</span>
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Spur AI vs ChatGPT for LinkedIn: Which Generates Better B2B Posts?
              </h1>
              <p className="text-lg text-gray-500 mb-6">
                ChatGPT can write LinkedIn posts. So can a Swiss Army knife cut steak. The question is whether you want a general tool or one built specifically for the job.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/signup"
                  className="gradient-bg text-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  Try Spur AI free →
                </Link>
                <Link
                  href="/tools/linkedin-post-generator"
                  className="border border-gray-200 text-gray-700 font-semibold px-7 py-3 rounded-full hover:bg-gray-50 transition-colors"
                >
                  See free tools first
                </Link>
              </div>
            </div>
          </section>

          {/* Quick verdict */}
          <section className="py-10 px-4">
            <div className="max-w-3xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-md gradient-bg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">S</span>
                    </div>
                    <span className="font-bold text-gray-900">Choose Spur AI if…</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> You want LinkedIn-optimized output without prompt engineering</li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> You sell B2B services and need content that attracts clients</li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> You want your voice and ICP remembered across every post</li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> You want the full workflow: posts, hooks, DMs, profile, calendar</li>
                  </ul>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-xl bg-teal-600 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">GPT</span>
                    </div>
                    <span className="font-bold text-gray-900">Stick with ChatGPT if…</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">→</span> You&apos;re an expert prompt engineer with LinkedIn knowledge</li>
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">→</span> Budget is the absolute primary constraint</li>
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">→</span> You need a general-purpose AI for many different tasks</li>
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">→</span> LinkedIn is a minor part of your marketing strategy</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison table */}
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Feature comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-100">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500 w-1/4">Feature</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-blue-700 w-3/8">Spur AI</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500 w-3/8">ChatGPT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row, i) => (
                      <tr key={row.feature} className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/30"}`}>
                        <td className="py-3.5 px-4 text-sm font-medium text-gray-700">{row.feature}</td>
                        <td className="py-3.5 px-4">
                          <div className="flex items-start gap-2">
                            {row.winner === "spur" && (
                              <span className="flex-shrink-0 w-4 h-4 rounded-full bg-green-100 text-green-600 text-xs flex items-center justify-center mt-0.5">✓</span>
                            )}
                            {row.winner === "chatgpt" && (
                              <span className="flex-shrink-0 w-4 h-4 rounded-full bg-gray-100 text-gray-400 text-xs flex items-center justify-center mt-0.5">–</span>
                            )}
                            {row.winner === "tie" && (
                              <span className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center mt-0.5">=</span>
                            )}
                            <span className="text-sm text-gray-700">{row.spurAI}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex items-start gap-2">
                            {row.winner === "chatgpt" && (
                              <span className="flex-shrink-0 w-4 h-4 rounded-full bg-green-100 text-green-600 text-xs flex items-center justify-center mt-0.5">✓</span>
                            )}
                            {row.winner === "spur" && (
                              <span className="flex-shrink-0 w-4 h-4 rounded-full bg-gray-100 text-gray-400 text-xs flex items-center justify-center mt-0.5">–</span>
                            )}
                            {row.winner === "tie" && (
                              <span className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center mt-0.5">=</span>
                            )}
                            <span className="text-sm text-gray-600">{row.competitor}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Pricing comparison */}
          <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Pricing comparison</h2>
              <p className="text-gray-500 text-center mb-8">ChatGPT is cheaper up front. Spur AI is more efficient for LinkedIn-focused B2B professionals.</p>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="bg-white rounded-xl border-2 border-blue-200 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">S</span>
                    </div>
                    <span className="font-bold text-gray-900">Spur AI</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { plan: "Starter", price: "$149/mo", features: "30 AI posts, frameworks, hooks library, calendar" },
                      { plan: "Growth", price: "$249/mo", features: "Unlimited posts, DM generator, profile optimizer, analytics" },
                      { plan: "Agency", price: "$449/mo", features: "5 team members, white-label, strategy call" },
                    ].map((p) => (
                      <div key={p.plan} className="border border-gray-100 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold text-gray-800 text-sm">{p.plan}</span>
                          <span className="text-blue-600 font-bold text-sm">{p.price}</span>
                        </div>
                        <p className="text-xs text-gray-500">{p.features}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-green-600 font-medium mt-3">✓ 14-day free trial · 30-day money-back</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-xl bg-teal-600 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">GPT</span>
                    </div>
                    <span className="font-bold text-gray-900">ChatGPT</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { plan: "Free", price: "$0/mo", features: "Limited access, GPT-3.5, no LinkedIn tools" },
                      { plan: "Plus", price: "$20/mo", features: "GPT-4o, faster responses, general purpose only" },
                      { plan: "Pro", price: "$200/mo", features: "Extended limits, o1 model, general purpose only" },
                    ].map((p) => (
                      <div key={p.plan} className="border border-gray-100 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold text-gray-800 text-sm">{p.plan}</span>
                          <span className="text-gray-600 font-bold text-sm">{p.price}</span>
                        </div>
                        <p className="text-xs text-gray-500">{p.features}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-3">No LinkedIn-specific tools — prompt engineering required</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently asked questions</h2>
              <div className="space-y-4">
                {FAQ.map(({ q, a }) => (
                  <div key={q} className="border border-gray-100 rounded-xl p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-violet-700">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Stop prompt-engineering. Start generating clients.
              </h2>
              <p className="text-blue-100 mb-6">
                14-day free trial. 30-day money-back guarantee. Your voice and ICP built in from day one.
              </p>
              <Link
                href="/signup"
                className="inline-block bg-white text-blue-600 font-bold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors"
              >
                Start free trial →
              </Link>
              <p className="text-blue-200 text-xs mt-3">No credit card required</p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

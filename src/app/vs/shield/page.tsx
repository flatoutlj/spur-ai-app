import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Spur AI vs Shield: LinkedIn Content Creation vs Analytics — Which Do You Need? (2026)",
  description:
    "Shield is a LinkedIn analytics tool. Spur AI is a LinkedIn content creation tool. Here's which one B2B consultants and agency owners actually need.",
  keywords: [
    "shield analytics alternative",
    "shield app alternative",
    "spur ai vs shield",
    "linkedin analytics vs content creation",
    "shield linkedin tool",
  ],
  openGraph: {
    title: "Spur AI vs Shield: LinkedIn Content Creation vs Analytics — Which Do You Need? (2026)",
    description: "Shield analyzes what's working. Spur AI creates the content to make things work. Here's an honest comparison for B2B professionals.",
    type: "article",
    url: "https://trispur.com/vs/shield",
  },
  alternates: { canonical: "https://trispur.com/vs/shield" },
}

const COMPARISON = [
  {
    feature: "Purpose",
    spurAI: "LinkedIn content creation and B2B lead generation",
    competitor: "LinkedIn analytics and post performance tracking",
    winner: "different",
    note: "These tools serve different needs — they can complement each other",
  },
  {
    feature: "Content creation",
    spurAI: "Full AI post generation with 15+ frameworks",
    competitor: "None — Shield does not create content",
    winner: "spur",
    note: "Spur AI is the content engine; Shield only analyzes it",
  },
  {
    feature: "AI generation",
    spurAI: "Real-time streaming AI with voice & ICP personalization",
    competitor: "No AI generation features",
    winner: "spur",
    note: "Shield has no content creation capabilities at all",
  },
  {
    feature: "Analytics / tracking",
    spurAI: "Post performance tracking (LinkedIn integration roadmap)",
    competitor: "Detailed analytics dashboard with deep LinkedIn data",
    winner: "shield",
    note: "Shield is purpose-built for LinkedIn analytics",
  },
  {
    feature: "LinkedIn SSI tracking",
    spurAI: "Not included",
    competitor: "Full SSI (Social Selling Index) score tracking",
    winner: "shield",
    note: "Shield provides detailed SSI breakdowns and trends",
  },
  {
    feature: "Post scheduling",
    spurAI: "Content calendar (direct scheduling on roadmap)",
    competitor: "No scheduling — analytics only",
    winner: "spur",
    note: "Neither tool has full native scheduling yet",
  },
  {
    feature: "DM templates",
    spurAI: "25+ DM templates in 5 categories, AI-personalized",
    competitor: "No outreach features",
    winner: "spur",
    note: "Spur AI covers the full content-to-client workflow",
  },
  {
    feature: "Free tools",
    spurAI: "5 free tools: post generator, bio, headline, hooks, content ideas",
    competitor: "No free tools",
    winner: "spur",
    note: "Try Spur AI without signing up",
  },
  {
    feature: "Price",
    spurAI: "From $149/mo (14-day free trial)",
    competitor: "~$8/mo personal, ~$25/mo professional",
    winner: "shield",
    note: "Shield is much cheaper as an analytics-only tool",
  },
  {
    feature: "Best for",
    spurAI: "B2B consultants, coaches, and agency owners who want clients from LinkedIn",
    competitor: "Anyone who wants to understand their LinkedIn performance data",
    winner: "different",
    note: "Different use cases — consider using both together",
  },
]

const FAQ = [
  {
    q: "Is Spur AI better than Shield?",
    a: "Spur AI and Shield aren't really direct competitors — they do fundamentally different things. Spur AI creates LinkedIn content and helps you convert followers into B2B clients. Shield analyzes your LinkedIn performance data and tracks your SSI score. If you're asking which one you need first, the answer is Spur AI: you need great content before you have meaningful analytics to measure. Once you're posting consistently, Shield adds valuable insight on top.",
  },
  {
    q: "Can I use both Spur AI and Shield?",
    a: "Absolutely — and this is actually the ideal setup for serious B2B LinkedIn users. Use Spur AI to create high-quality, ICP-targeted posts and manage your outreach sequences. Use Shield to track which posts are performing best, monitor your audience growth, and keep tabs on your SSI score. The two tools operate at different layers of the LinkedIn stack: content creation vs. performance analytics.",
  },
  {
    q: "What does Shield analytics do?",
    a: "Shield is a LinkedIn analytics platform that connects to your LinkedIn profile and tracks post performance metrics, audience growth, impressions, engagement rates, and your LinkedIn Social Selling Index (SSI) score over time. It gives you a much richer analytics dashboard than LinkedIn's native analytics, with historical data and trend views. Shield does not help you create content — it only measures it.",
  },
  {
    q: "Is Shield worth it for LinkedIn?",
    a: "Shield is worth it if you're already posting consistently and want data-driven insight on what's working. At ~$8-25/mo, it's an affordable analytics layer. However, if you're not yet posting consistently, invest in content creation first. The most common mistake B2B professionals make is worrying about analytics before they have a content engine. Get Spur AI running first, then add Shield once you have posts to measure.",
  },
  {
    q: "What's the difference between Spur AI and Shield?",
    a: "The core difference: Spur AI creates the content, Shield measures it. Spur AI is a full LinkedIn content engine — AI post generation, DM templates, content frameworks, profile optimization — built specifically for B2B consultants and agency owners who want to generate leads. Shield is a pure analytics tool that shows you how your existing content is performing. They solve different problems and can work together effectively.",
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

export default function SpurAIVsShieldPage() {
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
                <div className="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SH</span>
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Spur AI vs Shield: LinkedIn Content Creation vs Analytics — Which Do You Need?
              </h1>
              <p className="text-lg text-gray-500 mb-6">
                Honest answer: these tools aren&apos;t really competitors. Shield measures your LinkedIn performance. Spur AI creates the content that drives it. Here&apos;s how to think about both.
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
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> You want to create LinkedIn content consistently</li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> You need AI help generating B2B-targeted posts</li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> You want DM outreach templates to convert followers</li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> You&apos;re building a LinkedIn presence from scratch</li>
                  </ul>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-xl bg-slate-700 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">SH</span>
                    </div>
                    <span className="font-bold text-gray-900">Choose Shield if…</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">→</span> You already post consistently and want deeper analytics</li>
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">→</span> You want to track your SSI score over time</li>
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">→</span> You need historical LinkedIn performance data</li>
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">→</span> You want to see which content formats resonate most</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <strong>Pro tip:</strong> Many serious LinkedIn B2B marketers use both. Spur AI to create the content, Shield to measure what&apos;s working. They solve different problems.
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
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500 w-3/8">Shield</th>
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
                            {row.winner === "shield" && (
                              <span className="flex-shrink-0 w-4 h-4 rounded-full bg-gray-100 text-gray-400 text-xs flex items-center justify-center mt-0.5">–</span>
                            )}
                            {row.winner === "different" && (
                              <span className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center mt-0.5">=</span>
                            )}
                            <span className="text-sm text-gray-700">{row.spurAI}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex items-start gap-2">
                            {row.winner === "shield" && (
                              <span className="flex-shrink-0 w-4 h-4 rounded-full bg-green-100 text-green-600 text-xs flex items-center justify-center mt-0.5">✓</span>
                            )}
                            {row.winner === "spur" && (
                              <span className="flex-shrink-0 w-4 h-4 rounded-full bg-gray-100 text-gray-400 text-xs flex items-center justify-center mt-0.5">–</span>
                            )}
                            {row.winner === "different" && (
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
              <p className="text-gray-500 text-center mb-8">Very different price points because these tools do very different things.</p>
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
                    <div className="w-7 h-7 rounded-xl bg-slate-700 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">SH</span>
                    </div>
                    <span className="font-bold text-gray-900">Shield</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { plan: "Personal", price: "~$8/mo", features: "Post analytics, audience tracking, basic SSI" },
                      { plan: "Professional", price: "~$25/mo", features: "Full analytics, SSI tracking, historical data, exports" },
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
                  <p className="text-xs text-gray-400 mt-3">Analytics only — no content creation included</p>
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
                Start with great content. Then measure it.
              </h2>
              <p className="text-blue-100 mb-6">
                Build your LinkedIn content engine first. 14-day free trial. 30-day money-back guarantee.
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

import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Spur AI vs Draftly: Which LinkedIn Content Tool Is Better? (2026)",
  description:
    "Comparing Spur AI vs Draftly for LinkedIn content creation? See pricing, features, and which tool actually helps B2B consultants and coaches get clients from LinkedIn.",
  keywords: [
    "spur ai vs draftly",
    "draftly alternative",
    "draftly competitors",
    "best linkedin content tool",
    "linkedin ai writing tool comparison",
  ],
  openGraph: {
    title: "Spur AI vs Draftly: Which LinkedIn Content Tool Is Better? (2026)",
    description: "Pricing, features, and which tool gets B2B consultants more clients from LinkedIn.",
    type: "article",
    url: "https://trispur.com/vs/draftly",
  },
  alternates: { canonical: "https://trispur.com/vs/draftly" },
}

const COMPARISON = [
  {
    feature: "Price",
    spurAI: "From $149/mo (14-day free trial)",
    draftly: "From $39/mo (limited free tier)",
    winner: "spur",
    note: "Spur AI's higher price reflects a deeper B2B feature set",
  },
  {
    feature: "B2B niche targeting",
    spurAI: "Built exclusively for consultants, coaches, and agency owners",
    draftly: "General LinkedIn content tool, not B2B-specialized",
    winner: "spur",
    note: "Spur AI content is calibrated for B2B buyer psychology",
  },
  {
    feature: "AI post generation",
    spurAI: "Claude AI with streaming output, voice training, niche-specific frameworks",
    draftly: "GPT-based AI generation with basic personalization",
    winner: "spur",
    note: "Spur AI uses the latest Claude models for higher-quality output",
  },
  {
    feature: "Post frameworks",
    spurAI: "8 proven frameworks: Story, How-To, Contrarian, Results, List, Question, Mistake, Prediction",
    draftly: "Standard post templates, less framework-driven",
    winner: "spur",
    note: "Framework-based posts outperform generic AI content on LinkedIn",
  },
  {
    feature: "LinkedIn DM sequences",
    spurAI: "25+ DM templates across 5 outreach categories",
    draftly: "No DM generation features",
    winner: "spur",
    note: "Spur AI closes the loop from content to outreach",
  },
  {
    feature: "Free tools",
    spurAI: "6 free tools available without signup",
    draftly: "No free tools outside the platform",
    winner: "spur",
    note: "Try Spur AI's post generator, bio generator, and more — free",
  },
  {
    feature: "Content calendar",
    spurAI: "Free content calendar generator + dashboard planning",
    draftly: "Built-in scheduling calendar with native scheduling",
    winner: "draftly",
    note: "Draftly has stronger native scheduling features",
  },
  {
    feature: "LinkedIn profile tools",
    spurAI: "Profile optimizer, headline generator, bio generator",
    draftly: "Limited profile optimization features",
    winner: "spur",
    note: "A complete LinkedIn profile converts followers into clients",
  },
  {
    feature: "Analytics",
    spurAI: "Post history and generation tracking; LinkedIn native analytics link",
    draftly: "Built-in post performance analytics",
    winner: "draftly",
    note: "Draftly has stronger analytics if data is your priority",
  },
  {
    feature: "Target user",
    spurAI: "B2B consultants, coaches, agency owners focused on client acquisition",
    draftly: "General LinkedIn creators and professionals building audience",
    winner: "tie",
    note: "Different tools optimized for different goals",
  },
]

const FAQ = [
  {
    q: "Is Spur AI or Draftly better for B2B consultants?",
    a: "Spur AI is specifically built for B2B consultants, coaches, and agency owners who want to generate leads from LinkedIn — not just grow followers. The AI frameworks, DM templates, and niche-specific content are optimized for client acquisition. Draftly is a better fit for LinkedIn creators building a general audience or personal brand without a strong B2B sales focus.",
  },
  {
    q: "How does Spur AI's AI compare to Draftly's AI?",
    a: "Spur AI uses Claude (Anthropic) for content generation, while Draftly primarily uses GPT-based models. Claude is known for more nuanced, human-sounding writing — which matters significantly on LinkedIn where generic AI content is immediately identified and scrolled past. Spur AI also uses framework-driven prompting (story, contrarian take, how-to, etc.) that produces more structured, higher-engagement posts.",
  },
  {
    q: "Is Draftly cheaper than Spur AI?",
    a: "Yes, Draftly starts at a lower price point than Spur AI. However, Spur AI includes features that Draftly charges separately for or doesn't offer at all: LinkedIn DM generation, profile optimization, 6 free standalone tools, and B2B-specific frameworks. If getting clients is your goal, Spur AI typically delivers higher ROI despite the higher monthly cost.",
  },
  {
    q: "Does Spur AI have a free trial?",
    a: "Yes. Spur AI offers a 14-day free trial with no credit card required. You can also test the quality of the AI immediately with 6 free tools — including the LinkedIn post generator, bio generator, and content calendar — without creating an account at all.",
  },
  {
    q: "Can I switch from Draftly to Spur AI?",
    a: "Yes, and it's straightforward. Start a free trial at trispur.com, complete the onboarding to set up your voice profile and ICP, and start generating posts. Your Draftly subscription can be cancelled at any time. Most users make the switch within the first week of their Spur AI trial when they see the quality difference in B2B-focused output.",
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

export default function VsDraftlyPage() {
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
            <div className="flex items-center gap-3">
              <Link href="/pricing" className="text-gray-500 text-sm hover:text-gray-800">
                Pricing
              </Link>
              <Link
                href="/signup"
                className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                Start free trial
              </Link>
            </div>
          </div>
        </nav>

        <main className="pt-14">
          {/* Hero */}
          <section className="py-16 px-4 bg-gradient-to-b from-blue-50/40 to-white text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-4">
                <span className="text-blue-700 text-xs font-medium">Tool comparison · Updated July 2026</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Spur AI vs Draftly
              </h1>
              <p className="text-lg text-gray-500 mb-4 max-w-2xl mx-auto">
                Both tools generate LinkedIn content with AI. But they&apos;re built for different goals. Here&apos;s an honest comparison to help you choose.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                <Link
                  href="/signup"
                  className="gradient-bg text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  Try Spur AI free →
                </Link>
                <Link
                  href="/pricing"
                  className="border border-gray-200 text-gray-700 font-semibold px-8 py-3.5 rounded-full hover:bg-gray-50 transition-colors"
                >
                  See pricing
                </Link>
              </div>
            </div>
          </section>

          {/* Quick verdict */}
          <section className="py-12 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick verdict</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-md gradient-bg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">S</span>
                    </div>
                    <span className="font-bold text-gray-900">Choose Spur AI if...</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "You're a consultant, coach, or agency owner",
                      "You want LinkedIn to generate client leads",
                      "You need DM templates alongside post content",
                      "You value B2B-specific post frameworks",
                      "You want to try before buying (6 free tools)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">D</span>
                    </div>
                    <span className="font-bold text-gray-900">Choose Draftly if...</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "You primarily want a built-in scheduling calendar",
                      "You need native post analytics and tracking",
                      "Budget is your primary constraint",
                      "You're building a general audience, not targeting B2B buyers",
                      "You don't need DM or profile optimization features",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-gray-400 font-bold mt-0.5 flex-shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Feature comparison table */}
          <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Feature comparison
              </h2>
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-4 gap-0 border-b border-gray-100">
                  <div className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider col-span-1">
                    Feature
                  </div>
                  <div className="p-4 text-center border-l border-gray-100">
                    <div className="flex items-center justify-center gap-1.5">
                      <div className="w-4 h-4 rounded gradient-bg flex items-center justify-center">
                        <span className="text-white font-bold text-[9px]">S</span>
                      </div>
                      <span className="font-bold text-gray-900 text-sm">Spur AI</span>
                    </div>
                  </div>
                  <div className="p-4 text-center border-l border-gray-100">
                    <span className="font-bold text-gray-900 text-sm">Draftly</span>
                  </div>
                  <div className="p-4 text-center border-l border-gray-100">
                    <span className="font-semibold text-gray-500 text-xs uppercase tracking-wider">Winner</span>
                  </div>
                </div>
                {COMPARISON.map((row, i) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-4 gap-0 border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                  >
                    <div className="p-4 col-span-1">
                      <div className="font-semibold text-gray-900 text-sm">{row.feature}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{row.note}</div>
                    </div>
                    <div className="p-4 border-l border-gray-100">
                      <p className="text-sm text-gray-700">{row.spurAI}</p>
                    </div>
                    <div className="p-4 border-l border-gray-100">
                      <p className="text-sm text-gray-700">{row.draftly}</p>
                    </div>
                    <div className="p-4 border-l border-gray-100 flex items-center justify-center">
                      {row.winner === "spur" && (
                        <span className="text-xs font-semibold gradient-bg text-white px-2.5 py-1 rounded-full">
                          Spur AI
                        </span>
                      )}
                      {row.winner === "draftly" && (
                        <span className="text-xs font-semibold bg-gray-700 text-white px-2.5 py-1 rounded-full">
                          Draftly
                        </span>
                      )}
                      {row.winner === "tie" && (
                        <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                          Tie
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-12 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Pricing comparison</h2>
              <p className="text-gray-500 text-center mb-8 text-sm">
                Spur AI costs more but includes features Draftly charges separately for.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="border-2 border-blue-200 rounded-2xl p-6 bg-blue-50/30">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-5 h-5 rounded gradient-bg flex items-center justify-center">
                      <span className="text-white font-bold text-[9px]">S</span>
                    </div>
                    <span className="font-bold text-gray-900">Spur AI</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { plan: "Starter", price: "$149/mo", features: "50 AI posts/mo, all frameworks, DM templates" },
                      { plan: "Growth", price: "$249/mo", features: "150 posts/mo, voice training, priority support" },
                      { plan: "Agency", price: "$449/mo", features: "Unlimited posts, 5 team seats, white-label" },
                    ].map((tier) => (
                      <div key={tier.plan} className="bg-white rounded-xl border border-blue-100 p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-gray-900 text-sm">{tier.plan}</span>
                          <span className="font-bold text-blue-600 text-sm">{tier.price}</span>
                        </div>
                        <p className="text-xs text-gray-500">{tier.features}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-3 text-center">14-day free trial · No credit card required</p>
                </div>
                <div className="border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-white font-bold text-[9px]">D</span>
                    </div>
                    <span className="font-bold text-gray-900">Draftly</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { plan: "Starter", price: "$39/mo", features: "Basic AI generation, scheduling, limited posts" },
                      { plan: "Pro", price: "$79/mo", features: "More posts, analytics, team collaboration" },
                      { plan: "Business", price: "$149/mo", features: "Unlimited posts, advanced analytics, API access" },
                    ].map((tier) => (
                      <div key={tier.plan} className="bg-gray-50 rounded-xl border border-gray-100 p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-gray-900 text-sm">{tier.plan}</span>
                          <span className="font-bold text-gray-700 text-sm">{tier.price}</span>
                        </div>
                        <p className="text-xs text-gray-500">{tier.features}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-3 text-center">7-day trial available</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently asked questions</h2>
              <div className="space-y-4">
                {FAQ.map(({ q, a }) => (
                  <div key={q} className="bg-white rounded-xl border border-gray-100 p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                See the difference for yourself
              </h2>
              <p className="text-gray-500 mb-6">
                Start your 14-day free trial. No credit card required, no setup fees, cancel anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/signup"
                  className="gradient-bg text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  Start free trial →
                </Link>
                <Link
                  href="/tools/linkedin-post-generator"
                  className="border border-gray-200 text-gray-700 font-semibold px-8 py-3.5 rounded-full hover:bg-gray-50 transition-colors"
                >
                  Try free post generator
                </Link>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                Or compare other tools:{" "}
                <Link href="/vs/taplio" className="text-blue-600 hover:underline">vs Taplio</Link>
                {" · "}
                <Link href="/vs/supergrow" className="text-blue-600 hover:underline">vs Supergrow</Link>
                {" · "}
                <Link href="/vs/chatgpt" className="text-blue-600 hover:underline">vs ChatGPT</Link>
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

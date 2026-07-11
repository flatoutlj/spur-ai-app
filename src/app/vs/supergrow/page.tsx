import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Spur AI vs Supergrow: Which LinkedIn Tool Gets B2B Consultants More Clients? (2026)",
  description:
    "Comparing Spur AI vs Supergrow for B2B LinkedIn growth? See which tool is better for consultants, coaches, and agency owners who want clients from LinkedIn.",
  keywords: [
    "supergrow alternative",
    "supergrow vs spur ai",
    "supergrow competitors",
    "best linkedin content tool for b2b",
    "linkedin content tool comparison",
  ],
  openGraph: {
    title: "Spur AI vs Supergrow: Which LinkedIn Tool Gets B2B Consultants More Clients? (2026)",
    description: "Pricing, features, and which tool actually helps B2B consultants and agency owners get clients from LinkedIn.",
    type: "article",
    url: "https://trispur.com/vs/supergrow",
  },
  alternates: { canonical: "https://trispur.com/vs/supergrow" },
}

const COMPARISON = [
  {
    feature: "Price",
    spurAI: "From $149/mo (14-day free trial)",
    competitor: "From $19/mo basic, $49/mo pro",
    winner: "supergrow",
    note: "Supergrow is cheaper; Spur AI includes far more B2B-specific features",
  },
  {
    feature: "B2B niche focus",
    spurAI: "Built specifically for consultants, coaches, agency owners",
    competitor: "General LinkedIn tool, not B2B-specialized",
    winner: "spur",
    note: "Spur AI generates content tailored to your ideal client",
  },
  {
    feature: "AI post generation",
    spurAI: "Real-time streaming AI with user voice & profile injection",
    competitor: "AI writing assistance with templates",
    winner: "spur",
    note: "Spur AI learns your tone and ICP from onboarding",
  },
  {
    feature: "DM generator / outreach",
    spurAI: "25+ DM templates in 5 categories, AI-personalized",
    competitor: "Limited DM templates",
    winner: "spur",
    note: "Full outreach sequences included in Spur AI",
  },
  {
    feature: "Free tools",
    spurAI: "5 free tools: post generator, bio, headline, hooks, content ideas",
    competitor: "No free tools outside the platform",
    winner: "spur",
    note: "Try Spur AI without signing up",
  },
  {
    feature: "Content frameworks",
    spurAI: "15+ frameworks: Story, Contrarian, How-To, Case Study, etc.",
    competitor: "Post templates and basic content formats",
    winner: "spur",
    note: "More variety for different audience segments",
  },
  {
    feature: "Scheduling",
    spurAI: "Content calendar (direct scheduling on roadmap)",
    competitor: "Full scheduling built in",
    winner: "supergrow",
    note: "Supergrow has mature scheduling features",
  },
  {
    feature: "Profile optimizer",
    spurAI: "Interactive checklist + AI headline/bio generator",
    competitor: "No profile optimization tools",
    winner: "spur",
    note: "Spur AI includes full profile optimization",
  },
  {
    feature: "Analytics",
    spurAI: "Post performance tracking (LinkedIn integration roadmap)",
    competitor: "Basic post analytics",
    winner: "tie",
    note: "Both offer basic analytics at this stage",
  },
  {
    feature: "Money-back guarantee",
    spurAI: "30-day money-back guarantee",
    competitor: "No publicly stated guarantee",
    winner: "spur",
    note: "Zero risk to try Spur AI",
  },
]

const FAQ = [
  {
    q: "Is Spur AI better than Supergrow?",
    a: "For B2B professionals — consultants, coaches, and agency owners — Spur AI is the stronger choice. It's built specifically around the content-to-client flywheel: generating ICP-targeted posts, providing DM outreach templates, and optimizing your profile for lead generation. Supergrow is a solid general LinkedIn scheduling tool, but it lacks the B2B-specific depth that drives real pipeline results.",
  },
  {
    q: "Is Supergrow cheaper than Spur AI?",
    a: "Yes. Supergrow starts at $19/mo for its basic plan and $49/mo for pro, while Spur AI starts at $149/mo. However, Spur AI's pricing includes significantly more — a full DM generator, 15+ content frameworks, profile optimizer, hooks library, and 5 free tools. For B2B professionals who need both content and outreach tools, Spur AI typically delivers more value per dollar when you factor in what you'd otherwise spend on separate tools.",
  },
  {
    q: "Does Supergrow have a free trial?",
    a: "Supergrow offers a free trial for new users. Spur AI offers a full 14-day free trial with access to all features on your chosen plan, plus 5 free tools that require no signup at all: a LinkedIn post generator, bio generator, headline generator, hooks library, and content ideas generator. You can evaluate Spur AI's output quality before committing to any plan.",
  },
  {
    q: "What's the main difference between Spur AI and Supergrow?",
    a: "The primary difference is specialization. Supergrow is a general LinkedIn content and scheduling tool designed for any type of creator or professional. Spur AI is purpose-built for B2B service providers — consultants, coaches, and agency owners — who want LinkedIn to generate client leads, not just content engagement. Spur AI's AI is trained on the B2B content-to-client model and includes outreach tools Supergrow doesn't have.",
  },
  {
    q: "Which is better for B2B lead generation?",
    a: "Spur AI is significantly better for B2B lead generation. Its content generation is designed to attract decision-makers and ideal clients rather than general audiences. It includes a full DM generator with 25+ outreach templates for following up with prospects, and its profile optimizer helps position you as an authority to your target market. Supergrow is better if your goal is consistent content scheduling at an affordable price point.",
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

export default function SpurAIVsSupergrowPage() {
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
                <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SG</span>
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Spur AI vs Supergrow: Which LinkedIn Tool Gets B2B Consultants More Clients?
              </h1>
              <p className="text-lg text-gray-500 mb-6">
                Both tools help you publish LinkedIn content — but only one is built to turn that content into B2B clients. Here&apos;s an honest comparison.
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
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> You sell B2B services (consulting, coaching, agency)</li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> You want content that attracts clients, not just followers</li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> You need DM templates + profile optimization tools</li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> You want AI posts tailored to your voice and ideal client</li>
                  </ul>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-xl bg-emerald-600 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">SG</span>
                    </div>
                    <span className="font-bold text-gray-900">Choose Supergrow if…</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">→</span> You primarily need affordable scheduling</li>
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">→</span> You&apos;re a general creator, not a B2B service provider</li>
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">→</span> Budget is the primary constraint</li>
                    <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">→</span> You want easy-to-use templates without a learning curve</li>
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
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500 w-3/8">Supergrow</th>
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
                            {row.winner === "supergrow" && (
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
                            {row.winner === "supergrow" && (
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
              <p className="text-gray-500 text-center mb-8">Both tools require a subscription. Here&apos;s what you get at each tier.</p>
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
                    <div className="w-7 h-7 rounded-xl bg-emerald-600 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">SG</span>
                    </div>
                    <span className="font-bold text-gray-900">Supergrow</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { plan: "Basic", price: "$19/mo", features: "Scheduling, basic templates, AI writing" },
                      { plan: "Pro", price: "$49/mo", features: "Unlimited scheduling, advanced templates, analytics" },
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
                  <p className="text-xs text-gray-400 mt-3">Free trial available</p>
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
                Ready to try the B2B-first alternative?
              </h2>
              <p className="text-blue-100 mb-6">
                14-day free trial. 30-day money-back guarantee. Founding member pricing locked in for life.
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

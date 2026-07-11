import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free LinkedIn Tools for B2B Professionals | Spur AI",
  description:
    "Free LinkedIn tools: post generator, hooks library, content ideas generator, headline generator, and bio generator. Built for B2B consultants, coaches, and agency owners.",
  keywords: [
    "free linkedin tools",
    "linkedin content tools free",
    "linkedin post generator free",
    "linkedin tools for business",
    "free linkedin marketing tools",
  ],
  openGraph: {
    title: "Free LinkedIn Tools for B2B Professionals | Spur AI",
    description:
      "5 free LinkedIn tools to grow your presence and generate inbound leads — post generator, hooks library, content ideas, headline generator, and bio generator.",
    type: "website",
    url: "https://trispur.com/free-tools",
  },
  alternates: { canonical: "https://trispur.com/free-tools" },
}

const tools = [
  {
    title: "LinkedIn Post Generator",
    url: "/tools/linkedin-post-generator",
    badge: "Most used",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    description:
      "Generate a complete LinkedIn post — hook, body, and CTA — in seconds. Choose your topic, tone, and framework. No signup required.",
    keywords: ["22,200/mo searches", "linkedin post generator", "ai post generator"],
    icon: "✍️",
    iconBg: "bg-blue-50",
    cta: "Generate a post →",
  },
  {
    title: "LinkedIn Hooks Library",
    url: "/tools/linkedin-hooks",
    badge: "50 hooks",
    badgeColor: "bg-violet-100 text-violet-700 border-violet-200",
    description:
      "50 proven LinkedIn hooks organized by type: story, question, contrarian, statistic, and how-to. Copy any hook and stop the scroll on your next post.",
    keywords: ["linkedin hooks examples", "linkedin opening lines", "stop the scroll"],
    icon: "🪝",
    iconBg: "bg-violet-50",
    cta: "Browse all 50 hooks →",
  },
  {
    title: "LinkedIn Content Ideas Generator",
    url: "/tools/linkedin-content-ideas",
    badge: "90-day calendar",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
    description:
      "Never run out of content ideas. Get 30 targeted content ideas based on your role, niche, and audience — enough to fill a full content calendar.",
    keywords: ["linkedin content ideas", "what to post on linkedin", "linkedin topics"],
    icon: "💡",
    iconBg: "bg-green-50",
    cta: "Get content ideas →",
  },
  {
    title: "LinkedIn Headline Generator",
    url: "/tools/linkedin-headline-generator",
    badge: "New",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    description:
      "Generate 5 LinkedIn headline formulas with your info filled in. Just enter your role, ICP, and the result you deliver — get headlines that attract ideal clients.",
    keywords: ["linkedin headline generator", "linkedin profile headline", "linkedin bio"],
    icon: "🎯",
    iconBg: "bg-orange-50",
    cta: "Generate your headline →",
  },
  {
    title: "LinkedIn Bio Generator",
    url: "/tools/linkedin-bio-generator",
    badge: "New",
    badgeColor: "bg-pink-100 text-pink-700 border-pink-200",
    description:
      "Generate 5 LinkedIn About section variations in seconds. Enter your role, ideal client, results, and CTA — get a ready-to-paste bio in every format.",
    keywords: ["linkedin bio generator", "linkedin about section", "linkedin profile bio"],
    icon: "📝",
    iconBg: "bg-pink-50",
    cta: "Generate your bio →",
  },
]

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Free LinkedIn Tools by Spur AI",
  description: "Free LinkedIn tools for B2B consultants, coaches, and agency owners",
  url: "https://trispur.com/free-tools",
  numberOfItems: tools.length,
  itemListElement: tools.map((tool, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: tool.title,
    description: tool.description,
    url: `https://trispur.com${tool.url}`,
  })),
}

const fullProductFeatures = [
  {
    title: "AI posts trained on your voice",
    desc: "The free tools generate generic posts. The full product learns your tone, your niche, and your frameworks to generate posts that sound like you wrote them.",
  },
  {
    title: "Personalized DMs at scale",
    desc: "Generate prospect DMs that reference their content, company, and pain points — without spending hours writing each one manually.",
  },
  {
    title: "LinkedIn profile optimizer",
    desc: "Full AI analysis of your headline, About section, and experience — with rewritten copy targeting your ideal client.",
  },
  {
    title: "Performance analytics",
    desc: "See which posts drive the most views, comments, and profile visits — so you can double down on what works.",
  },
  {
    title: "Content calendar + scheduling",
    desc: "Plan and schedule 30 days of LinkedIn content in one session. Never wonder what to post tomorrow.",
  },
  {
    title: "Priority support",
    desc: "Get help from the team via email and chat. No support queue. Real answers within one business day.",
  },
]

export default function FreeToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            <span className="font-bold text-gray-900">Spur AI</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/pricing"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors px-4 py-2 hidden sm:block"
            >
              Pricing
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Start free trial
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-blue-700 text-sm font-medium">
              5 free tools · No signup required
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Free LinkedIn Tools for B2B Professionals
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Post generators, hooks, content ideas, headline and bio formulas — everything you need
            to start growing on LinkedIn today. 100% free, no email required.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.url}
                href={tool.url}
                className="group bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all hover:border-blue-100"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className={`w-12 h-12 ${tool.iconBg} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}
                  >
                    {tool.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="font-bold text-gray-900 text-lg">{tool.title}</h2>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full border ${tool.badgeColor}`}
                      >
                        {tool.badge}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{tool.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {tool.keywords.slice(1).map((kw) => (
                      <span
                        key={kw}
                        className="text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                  <span className="text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform whitespace-nowrap ml-4">
                    {tool.cta}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What you get with full product */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              The free tools are just the start
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              The full Spur AI platform goes beyond generic generation. It learns your voice,
              your niche, and your ideal client — and builds a content engine that runs on
              autopilot.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {fullProductFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="text-green-500 font-bold text-sm mb-2">✓ {feature.title}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/signup"
              className="inline-block bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Start 14-day free trial →
            </Link>
            <p className="text-gray-400 text-sm mt-3">
              No credit card required.{" "}
              <Link href="/pricing" className="text-blue-500 hover:underline">
                See pricing
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Why LinkedIn matters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why LinkedIn is the highest-ROI channel for B2B in 2026
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                stat: "1B+",
                label: "LinkedIn members worldwide",
                sub: "More decision-makers than any other social platform",
              },
              {
                stat: "80%",
                label: "Of B2B leads come from LinkedIn",
                sub: "According to LinkedIn's own research on B2B marketing",
              },
              {
                stat: "1%",
                label: "Of users post content weekly",
                sub: "The 1% that posts captures 100% of the attention and leads",
              },
            ].map((s) => (
              <div key={s.stat} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">{s.stat}</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">{s.label}</div>
                <div className="text-gray-500 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-violet-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to turn LinkedIn into your #1 lead source?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            The free tools help you get started. The full platform turns LinkedIn into a
            predictable, inbound lead engine for your consulting business.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-full hover:bg-blue-50 transition-colors text-lg"
          >
            Start your free trial →
          </Link>
          <p className="text-blue-200 text-sm mt-4">
            Plans from $149/mo ·{" "}
            <Link href="/pricing" className="underline hover:text-white">
              See full pricing
            </Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">S</span>
                </div>
                <span className="font-bold text-lg text-white">Spur AI</span>
              </Link>
              <p className="text-sm leading-relaxed mb-3">
                AI-powered LinkedIn content engine for B2B professionals.
              </p>
              <p className="text-xs">© 2026 Spur AI. All rights reserved.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Free Tools</h4>
              <ul className="space-y-2 text-sm">
                {tools.map((tool) => (
                  <li key={tool.url}>
                    <Link href={tool.url} className="hover:text-white transition-colors">
                      {tool.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/#features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="hover:text-white transition-colors">
                    Start free trial
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="mailto:hello@trispur.com" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

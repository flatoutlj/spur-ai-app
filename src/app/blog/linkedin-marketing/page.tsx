import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "LinkedIn Marketing: The Complete B2B Strategy Guide (2026)",
  description:
    "Everything you need to know about LinkedIn marketing for B2B. Covers profile optimization, content strategy, lead generation, paid ads, and measuring ROI. Updated 2026.",
  keywords: [
    "linkedin marketing",
    "linkedin marketing strategy",
    "linkedin b2b marketing",
    "linkedin marketing for business",
    "linkedin marketing tips",
    "linkedin marketing guide",
  ],
  openGraph: {
    title: "LinkedIn Marketing: The Complete B2B Strategy Guide (2026)",
    description: "The complete LinkedIn marketing guide for B2B professionals — profile, content, lead gen, and ROI.",
    type: "article",
    url: "https://trispur.com/blog/linkedin-marketing",
    siteName: "Spur AI",
  },
  alternates: { canonical: "https://trispur.com/blog/linkedin-marketing" },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "LinkedIn Marketing: The Complete B2B Strategy Guide (2026)",
  description: "Complete LinkedIn marketing guide for B2B professionals — profile optimization, content strategy, lead generation, and measuring ROI.",
  author: { "@type": "Organization", name: "Spur AI" },
  publisher: { "@type": "Organization", name: "Spur AI", url: "https://trispur.com" },
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  url: "https://trispur.com/blog/linkedin-marketing",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is LinkedIn good for B2B marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LinkedIn is the best platform for B2B marketing. 4 out of 5 LinkedIn members drive business decisions at their company. The platform generates 2x higher conversion rates than other social media channels for B2B businesses. Unlike other platforms, LinkedIn users are in a professional mindset — they're thinking about their businesses when they scroll, making them receptive to B2B offers and content.",
      },
    },
    {
      "@type": "Question",
      name: "How much does LinkedIn marketing cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LinkedIn marketing through organic content is free — the only investment is time. LinkedIn paid advertising starts at a minimum $10/day, with average CPCs ranging from $5–$15 (significantly higher than Facebook/Google but with much more targeting precision). For most B2B service businesses under $5M revenue, organic LinkedIn marketing (personal profiles + content) delivers higher ROI than paid LinkedIn ads.",
      },
    },
    {
      "@type": "Question",
      name: "How long does LinkedIn marketing take to work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most B2B professionals see their first qualified inbound leads from LinkedIn content within 60–90 days of consistent posting. Building a reliable lead generation engine on LinkedIn typically takes 3–6 months of 3–5 posts per week. The results compound: your audience, authority, and content library grow simultaneously. Expect slow initial growth that accelerates significantly after month 3.",
      },
    },
  ],
}

export default function LinkedInMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
              <Link href="/blog" className="text-gray-500 text-sm hover:text-gray-800">Blog</Link>
              <Link href="/signup" className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                Start free trial
              </Link>
            </div>
          </div>
        </nav>

        <main className="pt-14">
          <div className="max-w-3xl mx-auto px-4 pt-6 pb-2">
            <nav className="flex items-center gap-2 text-xs text-gray-400">
              <Link href="/" className="hover:text-gray-600">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gray-600">Blog</Link>
              <span>/</span>
              <span className="text-gray-600">LinkedIn Marketing</span>
            </nav>
          </div>

          <section className="py-10 px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">Marketing Strategy</span>
                <span className="text-xs text-gray-400">14 min read · Updated July 2026</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                LinkedIn Marketing: The Complete B2B Strategy Guide (2026)
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                LinkedIn is the highest-ROI marketing channel for B2B businesses — and the most misunderstood. This guide covers everything: profile optimization, content strategy, lead generation, and how to measure what&apos;s working.
              </p>
            </div>
          </section>

          <article className="px-4 pb-16">
            <div className="max-w-3xl mx-auto">

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10">
                <h2 className="font-bold text-gray-900 mb-3">What this guide covers</h2>
                <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
                  {[
                    "Why LinkedIn outperforms other channels for B2B",
                    "Optimizing your personal profile as a marketing asset",
                    "The LinkedIn content strategy that generates leads",
                    "LinkedIn lead generation: organic vs. paid",
                    "Building and nurturing relationships at scale",
                    "The LinkedIn marketing metrics that matter",
                    "Common mistakes and how to avoid them",
                    "Your 90-day LinkedIn marketing action plan",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 flex-shrink-0">→</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why LinkedIn is the best B2B marketing channel</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  LinkedIn has 1 billion members, but the reason it outperforms every other channel for B2B isn&apos;t the size — it&apos;s the mindset. LinkedIn users are in professional mode. They&apos;re thinking about their businesses, their challenges, and their goals. The same person who ignores your Facebook ad goes to LinkedIn actively looking for solutions.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { stat: "4 of 5", label: "LinkedIn members drive business decisions" },
                    { stat: "2x", label: "Higher B2B conversion rates than other social channels" },
                    { stat: "80%", label: "Of B2B social media leads come from LinkedIn" },
                  ].map(({ stat, label }) => (
                    <div key={stat} className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{stat}</div>
                      <div className="text-xs text-gray-600">{label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For B2B service businesses (consultants, coaches, agencies, professional service firms), LinkedIn is uniquely powerful because it combines the targeting of paid advertising with the trust of word-of-mouth. When a consultant posts content that 500 connections engage with, those connections&apos; connections see it too — creating a word-of-mouth effect at scale.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Optimize your profile as a marketing asset</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Your LinkedIn profile is your marketing homepage. Before any content strategy or lead generation effort, your profile needs to convert visitors into followers or inbound leads.
                </p>
                <div className="space-y-3">
                  {[
                    { element: "Profile photo", tip: "Professional headshot with neutral background. Faces with direct eye contact get 14x more profile views than logos. This is a personal profile, not a company page." },
                    { element: "Headline (220 characters)", tip: "Lead with who you help and the result you create — not your title. 'Management Consultant' tells prospects nothing. 'I help B2B SaaS companies reduce churn by 40% | CS Consultant' converts." },
                    { element: "Banner image", tip: "Use it to reinforce your value proposition or social proof. Include your website URL or a short benefit statement. Most profiles leave this blank." },
                    { element: "About section", tip: "Open with the problem you solve, not who you are. Include specific results with numbers. Close with a clear call to action. 200–300 words is optimal." },
                    { element: "Featured section", tip: "The highest-converting real estate below your header. Feature your best post, a case study, or a link to your booking page. Most people leave this empty." },
                    { element: "Experience section", tip: "Rewrite each role as outcome-focused. Not 'Managed marketing campaigns' but 'Managed $2.4M in ad spend, generating $18M in attributable B2B pipeline.'" },
                  ].map(({ element, tip }) => (
                    <div key={element} className="flex gap-3 bg-gray-50 rounded-xl border border-gray-100 p-4">
                      <div className="w-2 h-2 rounded-full gradient-bg flex-shrink-0 mt-2" />
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">{element}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{tip}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link href="/tools/linkedin-profile-optimizer" className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium hover:underline">
                    Score your profile with our free optimizer →
                  </Link>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: The LinkedIn content strategy that generates leads</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Content is the engine of LinkedIn marketing. Consistent, relevant content does three things simultaneously: it builds authority in your niche, keeps you top-of-mind with your network, and attracts your ideal clients through organic search and feed distribution.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">The content mix that works for B2B</h3>
                <div className="space-y-3 mb-6">
                  {[
                    { type: "40%", label: "Educational content", desc: "How-to posts, frameworks, tips that help your ICP do their job better." },
                    { type: "30%", label: "Personal stories", desc: "Lessons learned, client experiences, belief-changing moments. Highest emotional resonance." },
                    { type: "20%", label: "Opinion/contrarian takes", desc: "Your point of view on industry trends and conventional wisdom. Builds authority fast." },
                    { type: "10%", label: "Direct promotion", desc: "Case studies, service mentions, CTAs. Earn the right to promote by delivering value first." },
                  ].map(({ type, label, desc }) => (
                    <div key={type} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4">
                      <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {type}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{label}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Posting frequency</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  3–5 posts per week is the sweet spot for LinkedIn marketing. Posting daily often dilutes per-post engagement, while posting less than 3x/week means the algorithm doesn&apos;t show your content consistently to your existing audience. Post Tuesday–Thursday for peak business-day engagement.
                </p>
                <div className="mt-4 text-center">
                  <Link href="/tools/linkedin-content-calendar" className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium hover:underline">
                    Plan your content calendar for free →
                  </Link>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: LinkedIn lead generation — organic vs. paid</h2>
                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">Organic lead generation (recommended for most B2B businesses)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Organic LinkedIn marketing generates leads through three channels: inbound (prospects reach out after consuming your content), outbound DMs (warm outreach to ideal connections), and referrals (satisfied clients and connections introduce you to others).
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The flywheel: your profile converts visitors, your content attracts the right visitors, and your DM outreach converts the warm ones. Each element reinforces the others.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">LinkedIn paid advertising</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  LinkedIn&apos;s paid ad platform offers unmatched B2B targeting — job title, company size, industry, seniority — but at a higher cost per click than other platforms ($5–$15 vs. $0.50–$2 on Facebook). LinkedIn ads work best for:
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Retargeting people who've visited your website or engaged with your content",
                    "Targeting very specific job titles at specific company sizes (e.g., CFO at companies with 200–500 employees)",
                    "Promoting high-value content assets (reports, guides) as lead magnets",
                    "Brands with proven organic performance who want to accelerate growth",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-blue-500 flex-shrink-0 mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  For most B2B service businesses under $5M revenue, invest in organic content marketing before paid ads. The organic approach builds a compounding asset; paid ads stop working when you stop paying.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Building and nurturing relationships at scale</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  LinkedIn marketing isn&apos;t just broadcasting — it&apos;s relationship building at scale. The most effective LinkedIn marketers combine content with strategic engagement:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { action: "Comment on ideal clients' posts", why: "Build familiarity before any outreach. When they see your DM, they already know your name." },
                    { action: "Engage with your commenters", why: "Reply to every comment on your posts. It doubles your comment count and builds loyalty." },
                    { action: "Strategic connection requests", why: "Target 2nd-degree connections who match your ICP. Personalize every note with a specific reference." },
                    { action: "DM your engaged followers", why: "People who comment consistently are warm prospects. A thoughtful message after 3+ engagements has a 30%+ response rate." },
                  ].map(({ action, why }) => (
                    <div key={action} className="bg-white border border-gray-100 rounded-xl p-4">
                      <h3 className="font-semibold text-gray-900 text-sm mb-2">{action}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{why}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The LinkedIn marketing metrics that matter</h2>
                <div className="space-y-3">
                  {[
                    { metric: "Profile views", why: "Increasing profile views indicate your content is driving curiosity. Benchmark: 100+ views/week indicates good content distribution.", good: false },
                    { metric: "Post impressions per post", why: "Raw reach. Focus on trend over time — are impressions growing month over month as you build momentum?", good: false },
                    { metric: "Comments per post (not just reactions)", why: "Comments indicate quality engagement. A post with 50 comments beats a post with 200 reactions for both algorithm boost and relationship-building.", good: true },
                    { metric: "Follower growth rate", why: "Measures whether your content is attracting new ideal audience members. Target: 50–200 new relevant followers per month.", good: false },
                    { metric: "Inbound DMs and connection requests from ideal clients", why: "The ultimate signal that your content marketing is working — prospects initiating contact.", good: true },
                    { metric: "Conversations started from LinkedIn", why: "Track how many sales conversations can be attributed to LinkedIn. This is your actual marketing ROI.", good: true },
                  ].map(({ metric, why, good }) => (
                    <div key={metric} className={`flex gap-3 rounded-xl border p-4 ${good ? "bg-green-50 border-green-100" : "bg-gray-50 border-gray-100"}`}>
                      <span className={`text-sm flex-shrink-0 font-bold ${good ? "text-green-600" : "text-gray-400"}`}>{good ? "★" : "→"}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">{metric}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">{why}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-sm mt-4 text-center italic">★ = the metrics that most directly correlate with business results</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your 90-day LinkedIn marketing action plan</h2>
                <div className="space-y-4">
                  {[
                    {
                      period: "Days 1–30: Foundation",
                      actions: [
                        "Audit and rewrite your profile using the formula above",
                        "Identify your top 20 target connections (ideal clients + referral partners)",
                        "Start posting 3x per week — mix of educational, personal, and opinion content",
                        "Engage with 10 people's posts per day (genuine, specific comments)",
                        "Connect with 5–10 targeted 2nd-degree connections per week",
                      ],
                    },
                    {
                      period: "Days 31–60: Momentum",
                      actions: [
                        "Analyze your first 12–15 posts — which got the most comments?",
                        "Double down on the content types that generated the most engagement",
                        "Begin DM outreach to connections who've engaged with your content 3+ times",
                        "Request recommendations from past clients",
                        "Track inbound DMs and profile visits weekly",
                      ],
                    },
                    {
                      period: "Days 61–90: Conversion",
                      actions: [
                        "By now you should have 3–8 warm conversations started from LinkedIn",
                        "Test a direct offer to your engaged followers (consultation, resource, etc.)",
                        "Build a content repurposing workflow — one long post → 3 shorter variations",
                        "Review which connections became clients or referral partners",
                        "Establish your long-term content calendar for consistent growth",
                      ],
                    },
                  ].map(({ period, actions }) => (
                    <div key={period} className="bg-white border border-gray-100 rounded-xl p-5">
                      <h3 className="font-semibold text-gray-900 mb-3">{period}</h3>
                      <ul className="space-y-2">
                        {actions.map((action) => (
                          <li key={action} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-blue-500 flex-shrink-0 mt-0.5">✓</span>
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "Is LinkedIn good for B2B marketing?",
                      a: "LinkedIn is the best platform for B2B marketing. 4 out of 5 LinkedIn members drive business decisions, and the platform generates 2x higher B2B conversion rates than other social channels. LinkedIn users are in a professional mindset, making them receptive to B2B offers and content.",
                    },
                    {
                      q: "How much does LinkedIn marketing cost?",
                      a: "Organic LinkedIn marketing through personal profile content is free. LinkedIn paid advertising starts at $10/day with CPCs ranging $5–$15. For most B2B service businesses, organic marketing delivers higher ROI than paid ads.",
                    },
                    {
                      q: "How long does LinkedIn marketing take to work?",
                      a: "Most B2B professionals see their first qualified inbound leads within 60–90 days of consistent posting. Building a reliable engine takes 3–6 months. The results compound — audience, authority, and content library grow simultaneously.",
                    },
                  ].map(({ q, a }) => (
                    <div key={q} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                      <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl p-8 text-center mb-10">
                <h2 className="text-2xl font-bold text-white mb-2">Start your LinkedIn marketing engine</h2>
                <p className="text-blue-100 mb-6">
                  Spur AI generates LinkedIn posts in your voice, for your niche, targeting your ideal clients. The fastest way to build consistent content without spending hours writing.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/signup" className="bg-white text-blue-600 font-semibold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors">
                    Start 14-day free trial →
                  </Link>
                  <Link href="/tools/linkedin-post-generator" className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors">
                    Try free post generator
                  </Link>
                </div>
                <p className="text-blue-200 text-xs mt-3">No credit card required</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-4">Related guides</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { href: "/blog/linkedin-content-strategy-for-consultants", title: "LinkedIn Content Strategy for Consultants" },
                    { href: "/blog/linkedin-lead-generation", title: "LinkedIn Lead Generation: 9 Strategies" },
                    { href: "/blog/linkedin-personal-branding", title: "LinkedIn Personal Branding Playbook" },
                    { href: "/blog/linkedin-algorithm", title: "How the LinkedIn Algorithm Works in 2026" },
                  ].map((post) => (
                    <Link key={post.href} href={post.href} className="bg-gray-50 border border-gray-100 rounded-xl p-4 hover:border-blue-200 hover:shadow-sm transition-all">
                      <p className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors leading-snug">{post.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  )
}

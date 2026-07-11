import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "LinkedIn Growth Blog for B2B Professionals | Spur AI",
  description:
    "Expert guides on LinkedIn lead generation, personal branding, content strategy, and B2B sales for consultants, coaches, and agency owners.",
  keywords: [
    "linkedin growth tips",
    "linkedin for b2b",
    "linkedin content strategy",
    "linkedin lead generation guide",
    "b2b linkedin marketing",
  ],
  openGraph: {
    title: "LinkedIn Growth Blog | Spur AI",
    description:
      "Guides on LinkedIn lead generation, personal branding, content strategy, and B2B sales.",
    type: "website",
    url: "https://trispur.com/blog",
    siteName: "Spur AI",
  },
  alternates: { canonical: "https://trispur.com/blog" },
}

const POSTS = [
  {
    slug: "linkedin-outreach",
    title: "LinkedIn Outreach: 8 DM Templates That Get Replies (2026 Guide)",
    description:
      "LinkedIn outreach templates that actually get responses. 8 DM scripts for cold outreach, follow-ups, referrals, and warm introductions.",
    category: "Outreach",
    readTime: "10 min read",
    volume: "10,000/mo",
  },
  {
    slug: "linkedin-algorithm",
    title: "How the LinkedIn Algorithm Works in 2026 (And How to Beat It)",
    description:
      "How LinkedIn decides which posts go viral, what kills reach, and the specific actions that maximize distribution in 2026.",
    category: "Algorithm",
    readTime: "11 min read",
    volume: "6,000/mo",
  },
  {
    slug: "linkedin-post-ideas",
    title: "50 LinkedIn Post Ideas for B2B Professionals (2026) — Never Run Out of Content",
    description:
      "50 proven LinkedIn post ideas for consultants, coaches, and agency owners — with example hooks and frameworks organized by content type.",
    category: "Content Ideas",
    readTime: "8 min read",
    volume: "8,100/mo",
  },
  {
    slug: "linkedin-networking-tips",
    title: "17 LinkedIn Networking Tips That Actually Build Business Relationships (2026)",
    description:
      "Stop collecting connections. These 17 LinkedIn networking tips help B2B professionals build real relationships that lead to referrals, partnerships, and paying clients.",
    category: "Networking",
    readTime: "10 min read",
    volume: "18,000/mo",
  },
  {
    slug: "linkedin-summary-examples",
    title: "10 LinkedIn Summary Examples That Convert Visitors into Clients (2026)",
    description:
      "Real LinkedIn About section examples for B2B consultants, coaches, and agency owners — with templates and the formula for writing a summary that generates inbound leads.",
    category: "Profile Optimization",
    readTime: "9 min read",
    volume: "14,000/mo",
  },
  {
    slug: "linkedin-lead-generation",
    title: "LinkedIn Lead Generation: 9 Strategies That Fill Your Pipeline (2026)",
    description:
      "The 9 best LinkedIn lead generation strategies for B2B professionals. From content-led inbound to warm DM sequences — how top consultants get clients from LinkedIn.",
    category: "Lead Generation",
    readTime: "12 min read",
    volume: "22,000/mo",
  },
  {
    slug: "linkedin-personal-branding",
    title: "LinkedIn Personal Branding: The Complete Playbook for B2B Professionals (2026)",
    description:
      "Build a LinkedIn personal brand that attracts clients, not just connections. Covers profile optimization, content strategy, and converting followers into revenue.",
    category: "Personal Branding",
    readTime: "14 min read",
    volume: "18,000/mo",
  },
  {
    slug: "how-to-get-clients-on-linkedin",
    title: "How to Get Clients on LinkedIn: The 7-Step Playbook That Works in 2026",
    description:
      "Get your first (or next) high-ticket client on LinkedIn with a step-by-step system for profile optimization, content creation, and converting followers into paying clients.",
    category: "Client Acquisition",
    readTime: "11 min read",
    volume: "8,100/mo",
  },
  {
    slug: "how-to-write-linkedin-posts-that-get-engagement",
    title: "How to Write LinkedIn Posts That Get Engagement (2026 Guide)",
    description:
      "The 9 elements that separate viral LinkedIn posts from ignored ones — with frameworks, hook formulas, and real examples for B2B professionals.",
    category: "Content Strategy",
    readTime: "10 min read",
    volume: "9,800/mo",
  },
  {
    slug: "linkedin-tips-for-b2b-sales",
    title: "7 LinkedIn Tips for B2B Sales That Actually Close Deals (2026)",
    description:
      "Stop sending cold DMs that get ignored. These 7 LinkedIn strategies are based on relationship-based selling that converts prospects into paying clients.",
    category: "B2B Sales",
    readTime: "9 min read",
    volume: "9,000/mo",
  },
  {
    slug: "b2b-content-marketing-linkedin",
    title: "B2B Content Marketing on LinkedIn: The 2026 Strategy That Generates Leads",
    description:
      "The complete B2B content marketing strategy for LinkedIn. Which content formats get reach, how to build a content calendar, and how to convert readers into clients.",
    category: "Content Marketing",
    readTime: "11 min read",
    volume: "8,100/mo",
  },
  {
    slug: "linkedin-content-strategy-for-consultants",
    title: "LinkedIn Content Strategy for Consultants: How to Get 3 Clients/Month From Content",
    description:
      "A proven LinkedIn content strategy for consultants. Learn how to build authority, grow a targeted audience, and convert followers into high-ticket consulting clients.",
    category: "Consulting",
    readTime: "10 min read",
    volume: "4,800/mo",
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  "Lead Generation": "bg-blue-50 text-blue-700 border-blue-200",
  "Personal Branding": "bg-violet-50 text-violet-700 border-violet-200",
  "Client Acquisition": "bg-green-50 text-green-700 border-green-200",
  "Content Strategy": "bg-orange-50 text-orange-700 border-orange-200",
  "B2B Sales": "bg-red-50 text-red-700 border-red-200",
  "Content Marketing": "bg-teal-50 text-teal-700 border-teal-200",
  "Consulting": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Networking": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Profile Optimization": "bg-purple-50 text-purple-700 border-purple-200",
  "Content Ideas": "bg-yellow-50 text-yellow-700 border-yellow-200",
  "Outreach": "bg-sky-50 text-sky-700 border-sky-200",
  "Algorithm": "bg-slate-50 text-slate-700 border-slate-200",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Spur AI LinkedIn Growth Blog",
  description: "Expert guides on LinkedIn for B2B professionals",
  url: "https://trispur.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Spur AI",
    url: "https://trispur.com",
  },
  blogPost: POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `https://trispur.com/blog/${post.slug}`,
  })),
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="font-bold text-gray-900 text-sm">Spur AI</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/free-tools" className="text-gray-500 text-sm hover:text-gray-800">
                Free tools
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
          <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                LinkedIn Growth for B2B Professionals
              </h1>
              <p className="text-lg text-gray-500">
                Guides on lead generation, personal branding, content strategy, and B2B sales — from the team that built Spur AI.
              </p>
            </div>
          </section>

          {/* Posts */}
          <section className="py-8 px-4 pb-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                {POSTS.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-white border border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${CATEGORY_COLORS[post.category]}`}>
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-400">{post.readTime}</span>
                          <span className="text-xs text-gray-400">·</span>
                          <span className="text-xs text-gray-400">{post.volume} searches/mo</span>
                        </div>
                        <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                          {post.title}
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                          {post.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all text-xl">
                        →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-violet-700">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Turn LinkedIn into your #1 lead source
              </h2>
              <p className="text-blue-100 mb-6">
                Spur AI generates posts, DMs, and content ideas in your voice. Try it free for 14 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/signup"
                  className="bg-white text-blue-600 font-bold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors"
                >
                  Start free trial →
                </Link>
                <Link
                  href="/free-tools"
                  className="border border-blue-400/50 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
                >
                  Try free tools first
                </Link>
              </div>
              <p className="text-blue-200 text-xs mt-3">No credit card required · 14-day free trial</p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import LinkedInContentCalendarClient from "./LinkedInContentCalendarClient"

export const metadata: Metadata = {
  title: "Free LinkedIn Content Calendar Generator — Plan 4 Weeks of Posts",
  description:
    "Generate a 30-day LinkedIn content calendar in seconds. Get topic ideas, post hooks, and a week-by-week schedule tailored to your niche. Free — no signup required.",
  keywords: [
    "linkedin content calendar",
    "linkedin posting schedule",
    "linkedin content plan",
    "linkedin content ideas calendar",
    "linkedin 30 day content calendar",
    "linkedin content calendar template",
  ],
  openGraph: {
    title: "Free LinkedIn Content Calendar Generator",
    description: "Plan 2–8 weeks of LinkedIn content in under 2 minutes. Topic ideas and hooks included.",
    type: "website",
    url: "https://trispur.com/tools/linkedin-content-calendar",
    siteName: "Spur AI",
  },
  alternates: { canonical: "https://trispur.com/tools/linkedin-content-calendar" },
}

const CALENDAR_EXAMPLE = [
  { day: "Mon", type: "How-To Guide", emoji: "📋", topic: "How to qualify prospects in 5 minutes on LinkedIn", hook: "I can tell in 5 minutes if a LinkedIn connection will ever become a client." },
  { day: "Wed", type: "Client Win", emoji: "🏆", topic: "How we 3x'd a client's inbound leads in 90 days", hook: "We helped a B2B SaaS founder go from 2 inbound leads/month to 11. Here's the exact approach." },
  { day: "Fri", type: "Contrarian Take", emoji: "💡", topic: "Why posting every day is killing your LinkedIn growth", hook: "Hot take: daily posting is one of the worst LinkedIn growth strategies. Here's what works instead." },
]

const FAQ = [
  {
    q: "How many times should I post on LinkedIn per week?",
    a: "For B2B professionals, 3–5 posts per week is the optimal range. Posting 3x/week maintains visibility without overwhelming your audience. Posting daily can work but requires exceptional content quality to avoid being muted. The most important variable isn't frequency — it's consistency. 3x/week every week beats 7x/week for 3 weeks then silence.",
  },
  {
    q: "What's a good LinkedIn content calendar template?",
    a: "A proven LinkedIn content calendar template for B2B professionals: Monday — Educational/How-To (share a process or framework), Wednesday — Story/Experience (client win or personal lesson), Friday — Opinion/Contrarian (bold take on your industry). For 5x/week, add Tuesday (carousel or doc post) and Thursday (thought question or engagement post).",
  },
  {
    q: "How far in advance should I plan LinkedIn content?",
    a: "Planning 2–4 weeks of LinkedIn content at a time is the sweet spot. Planning too far ahead (8+ weeks) can make content feel disconnected from current events. Planning too close (1–3 days) causes the consistency to break down when life gets busy. Batch-write 2 weeks of posts in a single session — this preserves energy and maintains voice consistency.",
  },
  {
    q: "What should I post on LinkedIn to get clients?",
    a: "The content types that most consistently convert LinkedIn followers into B2B clients are: (1) Personal story posts that demonstrate your expertise through experience, (2) Case study or client win posts with specific numbers, (3) How-to posts that solve your ideal client's specific problems, and (4) Contrarian opinion posts that position you as a distinct authority. Avoid posting generic industry news or motivational quotes — these build followers, not clients.",
  },
  {
    q: "How do I stick to a LinkedIn content calendar?",
    a: "The best way to maintain a LinkedIn content calendar is to write in batches, not daily. Set aside 2 hours once a week to write that week's posts. Use a tool like Spur AI to generate topic ideas and first drafts, then personalize them. This removes the daily decision fatigue that causes most content calendars to fail. Set a recurring calendar block — 'LinkedIn content' — and treat it like a client meeting.",
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

export default function LinkedInContentCalendarPage() {
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
              <Link href="/free-tools" className="text-gray-500 text-sm hover:text-gray-800">
                All free tools
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
          <section className="py-16 px-4 bg-gradient-to-b from-green-50/40 to-white text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-3 py-1 mb-4">
                <span className="text-green-700 text-xs font-medium">Free tool · No signup required</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                LinkedIn Content Calendar Generator
              </h1>
              <p className="text-lg text-gray-500 mb-4 max-w-2xl mx-auto">
                Plan 2–8 weeks of LinkedIn content in under 2 minutes. Get topic ideas, proven hooks, and a week-by-week posting schedule tailored to your niche.
              </p>
              <p className="text-sm text-gray-400">
                Supports 3x, 4x, or 5x per week posting schedules · Copy-to-clipboard included
              </p>
            </div>
          </section>

          {/* Tool */}
          <section className="py-8 px-4">
            <div className="max-w-3xl mx-auto">
              <LinkedInContentCalendarClient />
            </div>
          </section>

          {/* Example calendar */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                Example: 3-post week for B2B consultants
              </h2>
              <p className="text-gray-500 text-center mb-6 text-sm">
                A Monday–Wednesday–Friday schedule covering 3 different content types.
              </p>
              <div className="space-y-3">
                {CALENDAR_EXAMPLE.map((post) => (
                  <div key={post.day} className="bg-white rounded-xl border border-gray-100 p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{post.emoji}</span>
                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{post.day}</div>
                        <div className="text-sm font-semibold text-gray-900">{post.type}</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-800 mb-2">{post.topic}</div>
                    <div className="text-sm text-gray-500 italic bg-gray-50 rounded-lg p-3">
                      &ldquo;{post.hook}&rdquo;
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tips */}
          <section className="py-16 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                How to use a LinkedIn content calendar
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    n: "1",
                    title: "Pick your posting days",
                    body: "Choose 3–5 consistent days per week. Monday, Wednesday, Friday is a proven 3x schedule. The algorithm rewards consistency over volume.",
                  },
                  {
                    n: "2",
                    title: "Vary your content types",
                    body: "Don't post the same format every day. Mix How-To posts, Stories, Contrarian takes, and Case Studies to keep your audience engaged.",
                  },
                  {
                    n: "3",
                    title: "Write hooks first",
                    body: "LinkedIn only shows the first 2–3 lines before 'see more.' Write your hook before anything else. If it doesn't compel the click, the post fails.",
                  },
                  {
                    n: "4",
                    title: "Batch your writing",
                    body: "Write a full week of posts in one 2-hour session. Switching contexts kills quality. One focused session beats daily scrambling.",
                  },
                  {
                    n: "5",
                    title: "Engage in the first hour",
                    body: "After posting, respond to every comment within the first 60 minutes. This signals the algorithm that your post drives engagement, which multiplies reach.",
                  },
                  {
                    n: "6",
                    title: "Track what resonates",
                    body: "After 4 weeks, check which post types got the most comments and DMs. Double down on those. Most people never analyze what worked.",
                  },
                ].map((tip) => (
                  <div key={tip.n} className="flex gap-3 bg-white rounded-xl border border-gray-100 p-4">
                    <div className="w-7 h-7 gradient-bg rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      {tip.n}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{tip.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{tip.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 px-4 bg-gray-50">
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

          {/* Related tools */}
          <section className="py-12 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Related free tools</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: "/tools/linkedin-post-generator", label: "LinkedIn Post Generator", desc: "Turn a topic into a full AI-written post" },
                  { href: "/tools/linkedin-content-ideas", label: "Content Ideas Generator", desc: "30 niche-specific post ideas instantly" },
                  { href: "/tools/linkedin-hooks", label: "LinkedIn Hooks Library", desc: "50 proven hooks to start any post" },
                  { href: "/tools/linkedin-headline-generator", label: "Headline Generator", desc: "5 profile headline formulas with your info" },
                ].map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="bg-white border border-gray-100 rounded-xl p-4 hover:border-blue-200 hover:shadow-sm transition-all group"
                  >
                    <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors mb-1">{tool.label}</div>
                    <div className="text-xs text-gray-400">{tool.desc}</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Want AI to write the posts too?
              </h2>
              <p className="text-gray-500 mb-6">
                Spur AI generates LinkedIn posts in your voice — you bring the topic, it writes the post. Try it free for 14 days.
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
                  Try the post generator
                </Link>
              </div>
              <p className="text-xs text-gray-400 mt-3">14-day free trial · No credit card required</p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

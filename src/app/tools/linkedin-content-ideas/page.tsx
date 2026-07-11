import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: "150 LinkedIn Content Ideas for B2B Professionals in 2026 | Spur AI",
  description:
    "Stuck on what to post? Get 150 proven LinkedIn content ideas for B2B consultants, coaches, and agency owners. Organized by category with examples you can use today.",
  keywords: [
    "linkedin content ideas",
    "linkedin post ideas for business",
    "linkedin content ideas for b2b",
    "what to post on linkedin",
    "linkedin content ideas for consultants",
    "linkedin post ideas 2026",
  ],
  openGraph: {
    title: "150 LinkedIn Content Ideas for B2B Professionals in 2026",
    description:
      "Never run out of LinkedIn content again. 150 proven post ideas organized by type — stories, how-tos, contrarian takes, and more.",
    type: "website",
    url: "https://trispur.com/tools/linkedin-content-ideas",
  },
  twitter: {
    card: "summary_large_image",
    title: "150 LinkedIn Content Ideas for B2B Professionals in 2026",
    description:
      "Never run out of LinkedIn content. 150 proven post ideas for consultants, coaches, and agency owners.",
  },
  alternates: {
    canonical: "https://trispur.com/tools/linkedin-content-ideas",
  },
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "150 LinkedIn Content Ideas for B2B Professionals in 2026",
  description:
    "150 proven LinkedIn content ideas organized by type for B2B consultants, coaches, and agency owners.",
  url: "https://trispur.com/tools/linkedin-content-ideas",
  publisher: {
    "@type": "Organization",
    name: "Spur AI",
    url: "https://trispur.com",
  },
}

const contentCategories = [
  {
    icon: "📖",
    title: "Personal Story Ideas",
    subtitle: "Build trust through real experience",
    color: "blue",
    ideas: [
      "The client who taught you the most — what they showed you about your own work",
      "A mistake you made early in your career and exactly what you learned",
      "The moment you decided to go independent / start your agency",
      "The project that nearly broke you — and what pulled you through",
      "Your first client: how you got them, what the engagement looked like, how it ended",
      "A time you fired a client — and why it was the right call",
      "The best feedback you ever received (and why it stung)",
      "The worst advice you were given when starting out",
      "What you believed about clients 5 years ago vs. what you know now",
      "A \"failure\" that turned out to be a disguised opportunity",
      "The day you raised your rates for the first time — what happened",
      "Something you almost gave up on that became a strength",
      "The hardest conversation you ever had with a client",
      "A time you were completely wrong about something in your industry",
      "What your first year in business actually looked like (vs. the Instagram version)",
      "The proposal you lost that changed how you pitch",
      "A client win that surprised you — where it came from",
      "The moment you realized you had niched down correctly",
      "A boundary you didn't set that cost you — and what you do differently now",
      "What working for yourself has taught you about what really matters",
    ],
  },
  {
    icon: "🎯",
    title: "Tactical How-To Ideas",
    subtitle: "Demonstrate expertise through specific systems",
    color: "violet",
    ideas: [
      "How to write a proposal that clients sign without negotiating on price",
      "How to run a discovery call that closes 70% of the time",
      "How to onboard a new client in the first 48 hours",
      "A step-by-step system for handling scope creep",
      "How to price your services when you're moving upmarket",
      "How I structure my consulting week to protect deep work time",
      "How to turn one client into three referrals",
      "A framework for diagnosing why a client's business is stuck",
      "How to write a case study that actually wins new business",
      "How to say no to a client without losing the relationship",
      "A process for giving difficult feedback to a client",
      "How to build a SOW that protects you legally and sets clear expectations",
      "How to calculate your real hourly rate (most consultants undercharge by 40%)",
      "A system for staying top-of-mind with warm leads without being annoying",
      "How I do competitive analysis for a new client in under 2 hours",
      "How to run a quarterly business review that clients look forward to",
      "A framework for deciding which services to productize",
      "How to build an irresistible LinkedIn profile that attracts inbound leads",
      "How to use LinkedIn polls to generate qualified conversations",
      "A 4-step process for turning a one-off project into a retainer",
    ],
  },
  {
    icon: "🔥",
    title: "Contrarian Take Ideas",
    subtitle: "Stand out by challenging conventional wisdom",
    color: "orange",
    ideas: [
      "Why having fewer clients is better for your business (and your clients)",
      "Your niche isn't too narrow — it's still too broad",
      "Posting every day on LinkedIn is actually hurting your growth",
      "The strategy most consultants call 'networking' is just procrastination",
      "Cold outreach isn't dead — it's just that most consultants do it wrong",
      "Why you should stop calling yourself a consultant",
      "The 'productize your services' advice is wrong for most people",
      "Why case studies on your website don't actually close clients",
      "Having a long waitlist is a sign of poor positioning, not success",
      "The hourly rate model is broken — but not for the reason you think",
      "Why testimonials from happy clients hurt more than they help",
      "The biggest lie in B2B consulting: 'our clients speak for us'",
      "Why most consultants price too low even after raising their rates",
      "Thought leadership that doesn't make some people uncomfortable isn't thought leadership",
      "Your prospects don't care about your process — they care about this one thing instead",
    ],
  },
  {
    icon: "📊",
    title: "Client Result & Proof Ideas",
    subtitle: "Show impact through real outcomes",
    color: "green",
    ideas: [
      "A client who came with X problem — here's exactly what we did and the result",
      "The fastest turnaround you've ever achieved for a client",
      "A client's revenue / cost / efficiency 6 months after you worked together",
      "A before/after breakdown of a client's positioning or messaging",
      "The metric that surprised you most from a recent client engagement",
      "Three different clients with the same problem — three different root causes",
      "A client who almost didn't hire you — what changed their mind",
      "The result that got you your biggest referral ever",
      "What happened when a client followed your advice exactly vs. modified it",
      "Year-one results from a client you've worked with for 12+ months",
    ],
  },
  {
    icon: "💡",
    title: "Industry Insight & Trend Ideas",
    subtitle: "Establish forward-looking authority",
    color: "blue",
    ideas: [
      "What AI is actually changing about your industry (be specific, not vague)",
      "A trend that will reshape your market in the next 24 months",
      "What the best companies in your space are doing that most aren't",
      "A metric everyone is measuring that actually means nothing",
      "The skill that will be worth the most in your field in 3 years",
      "Why the economic environment is creating a specific opportunity for your clients",
      "What separates the consultants charging $25K+ engagements from everyone else",
      "A prediction about your industry that might be unpopular today",
      "The tool or technology that changed how you deliver results",
      "What the market looked like 5 years ago vs. now — and where it's going",
    ],
  },
  {
    icon: "🤝",
    title: "Engagement & Community Ideas",
    subtitle: "Start conversations that expand your reach",
    color: "violet",
    ideas: [
      "Ask: What's the best business book you've read this year?",
      "Ask: What's the one tool in your business you couldn't live without?",
      "Poll: How many hours per week do you spend on business development?",
      "Ask: What's the best piece of advice you'd give your 2-years-ago self?",
      "Ask: What's the most overrated piece of advice for consultants?",
      "Poll: How did you get your last client?",
      "Ask: What's the most common mistake you see in your industry?",
      "Share a resource (article, book, podcast) that changed how you think",
      "Ask: What's the single change that had the biggest impact on your revenue?",
      "Celebrate a community win — a peer's achievement that deserves recognition",
    ],
  },
]

export default function LinkedInContentIdeasPage() {
  return (
    <>
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="min-h-screen bg-white">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="font-bold text-xl text-gray-900">Spur AI</span>
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
                  className="bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  Start free trial
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-blue-700 text-sm font-medium">Free resource · 150 ideas · Updated 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
              150 LinkedIn Content Ideas<br />for B2B Professionals
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">
              Never stare at a blank screen again. 150 proven LinkedIn post ideas for consultants,
              coaches, and agency owners — organized by type, ready to use today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/signup"
                className="bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-base"
              >
                Generate posts from these ideas →
              </Link>
              <a
                href="#ideas"
                className="border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors text-base"
              >
                Browse all ideas ↓
              </a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-4">
              The number one reason B2B professionals fail to build a LinkedIn presence is not lack
              of expertise — it is running out of ideas. They post enthusiastically for two weeks,
              hit a wall, and go silent. Their algorithm reach resets. They start over from zero.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              This list is designed to solve that problem permanently. These 150 LinkedIn content
              ideas are organized into six categories that map to the content types that drive real
              B2B business outcomes: building trust through stories, demonstrating expertise through
              tactics, creating debate through contrarian takes, showing proof through client results,
              establishing authority through insights, and growing reach through engagement.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Use these as prompts, not scripts. The best LinkedIn post ideas for business are the
              ones you bring your own experience to. Pick an idea, add a specific story or example
              from your work, and publish it. Repeat three times a week. That is the system.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              {[
                { num: "150", label: "Unique post ideas" },
                { num: "6", label: "Content categories" },
                { num: "5,400", label: "Monthly searches for this topic" },
              ].map((stat) => (
                <div key={stat.label} className="bg-blue-50 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{stat.num}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content ideas by category */}
        <section id="ideas" className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {contentCategories.map((category) => (
              <div key={category.title}>
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                    <p className="text-gray-500">{category.subtitle}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-1 gap-3">
                  {category.ideas.map((idea, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-sm transition-all group"
                    >
                      <span className="text-blue-400 font-bold text-sm flex-shrink-0 mt-0.5 w-7">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
                        {idea}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Turn any of these ideas into a full LinkedIn post in seconds.</strong>{" "}
                    Pick an idea above, paste it into{" "}
                    <Link href="/signup" className="text-blue-600 hover:underline font-medium">
                      Spur AI
                    </Link>
                    , and get a complete hook, body, and CTA written in your voice — ready to
                    publish.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to use these ideas */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              How to turn LinkedIn content ideas into posts that get results
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-center">
              An idea is only half the equation. Here is how to consistently turn these
              LinkedIn post ideas for business into content that builds your brand and
              attracts clients.
            </p>
            <div className="space-y-5">
              {[
                {
                  step: "1",
                  title: "Pick an idea that connects to a real experience",
                  desc: "The best LinkedIn posts are specific. Generic advice gets scrolled past. If an idea prompts a memory — a client story, a specific result, a real mistake — that idea has potential. If it doesn't connect to anything concrete in your experience, skip to the next one.",
                },
                {
                  step: "2",
                  title: "Lead with a hook that creates an open loop",
                  desc: "LinkedIn only shows the first 2–3 lines before 'see more.' Your opener must make the reader need to click. The most effective hooks make a surprising claim, share the beginning of a compelling story, or ask a question the reader desperately wants answered. See our LinkedIn hooks library for 50 proven examples.",
                },
                {
                  step: "3",
                  title: "Structure the body for scanning, not reading",
                  desc: "Most LinkedIn users skim before they read. Break your body content into short paragraphs of 1–2 sentences. Use line breaks liberally. Arrows (→) and numbered lists make structure visible at a glance. Your ideal client is reading on mobile, between meetings — make it easy.",
                },
                {
                  step: "4",
                  title: "End with a CTA calibrated to your goal",
                  desc: "Every post should have a purpose. If the goal is reach, end with a question that invites comments. If the goal is leads, end with a soft CTA: 'If this resonates, send me a DM — happy to talk through how this might apply to your situation.' Match the CTA intensity to how much value you delivered in the post.",
                },
                {
                  step: "5",
                  title: "Batch and schedule a week at a time",
                  desc: "Don't post reactively. Every Sunday, pick 3 ideas from this list, write all three posts, and schedule them for Tuesday, Wednesday, and Thursday. This is the simplest system for staying consistent on LinkedIn without it consuming your week.",
                },
              ].map((step) => (
                <div key={step.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1.5 text-sm">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frequency section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How many LinkedIn content ideas do you actually need?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you post 3 times per week — the recommended frequency for B2B professionals
              building their authority — you need approximately 156 ideas per year. This list
              gives you nearly a full year of LinkedIn content ideas in one place.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              But here is the reality: most of these ideas will generate more ideas. When you write
              about the time you fired a client, you will remember three more client stories worth
              sharing. When you publish a contrarian take on pricing, the comments will hand you
              five more takes. LinkedIn content compounds — the more you post, the more material
              your day-to-day work generates.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The professionals who build the most powerful LinkedIn presences are not the ones
              with the most ideas. They are the ones with the most consistent output. A simple
              system — pick 3 ideas per week, write and schedule on Sunday, repeat — beats
              sporadic brilliance every time.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If the writing itself is the bottleneck, that is exactly what{" "}
              <Link href="/signup" className="text-blue-600 hover:underline font-medium">
                Spur AI
              </Link>{" "}
              is built to solve. Give it an idea from this list, add your unique angle, and get
              a full LinkedIn post — hook, body, CTA — in under 60 seconds.
            </p>
          </div>
        </section>

        {/* Related tools */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">More free LinkedIn resources</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/tools/linkedin-post-generator"
                className="flex flex-col gap-3 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl">✍️</span>
                <div>
                  <div className="font-semibold text-gray-900 mb-1 text-sm">AI LinkedIn Post Generator</div>
                  <div className="text-gray-500 text-xs">Turn any idea into a complete post in seconds.</div>
                </div>
              </Link>
              <Link
                href="/tools/linkedin-hooks"
                className="flex flex-col gap-3 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl">🪝</span>
                <div>
                  <div className="font-semibold text-gray-900 mb-1 text-sm">50 LinkedIn Hooks</div>
                  <div className="text-gray-500 text-xs">Scroll-stopping opening lines for every post type.</div>
                </div>
              </Link>
              <Link
                href="/blog/linkedin-content-strategy-for-consultants"
                className="flex flex-col gap-3 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl">📋</span>
                <div>
                  <div className="font-semibold text-gray-900 mb-1 text-sm">LinkedIn Strategy Guide</div>
                  <div className="text-gray-500 text-xs">Complete 2026 playbook for B2B consultants.</div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-violet-700">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to stop brainstorming and start publishing?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Spur AI turns LinkedIn post ideas into complete, ready-to-publish posts in your
              voice. 14-day free trial, no credit card required.
            </p>
            <Link
              href="/signup"
              className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-full hover:bg-blue-50 transition-colors text-lg"
            >
              Start generating posts for free →
            </Link>
            <p className="text-blue-200 text-sm mt-4">
              Plans from $149/mo · Cancel anytime ·{" "}
              <Link href="/pricing" className="underline hover:text-white">
                See pricing
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
                  <li><Link href="/tools/linkedin-post-generator" className="hover:text-white transition-colors">LinkedIn Post Generator</Link></li>
                  <li><Link href="/tools/linkedin-hooks" className="hover:text-white transition-colors">LinkedIn Hooks Library</Link></li>
                  <li><Link href="/tools/linkedin-content-ideas" className="hover:text-white transition-colors">LinkedIn Content Ideas</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
                  <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                  <li><Link href="/signup" className="hover:text-white transition-colors">Start free trial</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><a href="mailto:hello@trispur.com" className="hover:text-white transition-colors">Contact</a></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

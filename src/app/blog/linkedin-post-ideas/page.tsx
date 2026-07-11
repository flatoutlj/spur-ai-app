import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "50 LinkedIn Post Ideas for B2B Professionals (2026) — Never Run Out of Content",
  description:
    "50 proven LinkedIn post ideas for consultants, coaches, and agency owners. Includes hooks, frameworks, and real examples organized by content type.",
  keywords: [
    "linkedin post ideas",
    "what to post on linkedin",
    "linkedin content ideas",
    "linkedin post topics",
    "linkedin ideas for business",
    "linkedin post ideas for professionals",
  ],
  openGraph: {
    title: "50 LinkedIn Post Ideas for B2B Professionals (2026)",
    description: "50 proven LinkedIn post ideas with hooks and frameworks for consultants, coaches, and agency owners.",
    type: "article",
    url: "https://trispur.com/blog/linkedin-post-ideas",
    siteName: "Spur AI",
  },
  alternates: { canonical: "https://trispur.com/blog/linkedin-post-ideas" },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "50 LinkedIn Post Ideas for B2B Professionals (2026)",
  description: "50 proven LinkedIn post ideas with hooks and frameworks for consultants, coaches, and agency owners.",
  author: { "@type": "Organization", name: "Spur AI" },
  publisher: { "@type": "Organization", name: "Spur AI", url: "https://trispur.com" },
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  url: "https://trispur.com/blog/linkedin-post-ideas",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I post on LinkedIn for business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For B2B business professionals, the best LinkedIn post types are: (1) Client results with specific numbers, (2) Personal stories with a business lesson, (3) Contrarian takes on industry assumptions, (4) How-to posts that solve your ideal client's problems, and (5) Behind-the-scenes posts about how you work. Avoid posting motivational quotes, generic industry news, or anything that doesn't directly relate to your ICP's challenges.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I post on LinkedIn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3–5 times per week is the optimal posting frequency for B2B professionals. Posting 3x/week consistently outperforms posting daily for 2 weeks then going silent. The LinkedIn algorithm rewards consistency — once you establish a posting rhythm, your content reaches more of your existing connections. Quality at 3x/week beats volume at 7x/week for engagement rates and client acquisition.",
      },
    },
    {
      "@type": "Question",
      name: "What makes a good LinkedIn post?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A good LinkedIn post has four elements: a hook that stops the scroll (first 2 lines must compel the 'see more' click), a specific and valuable insight (not generic advice), a personal angle that only you could write, and a clear call to engage (question, comment prompt, or CTA). Posts that share personal stories with specific numbers consistently outperform generic educational posts on LinkedIn.",
      },
    },
  ],
}

const POST_IDEAS = [
  {
    category: "Client Results & Case Studies",
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    ideas: [
      { hook: "We helped [client type] go from [A] to [B] in [X days]. Here's the exact approach.", topic: "Specific client win with before/after numbers" },
      { hook: "My client doubled their inbound leads in 60 days. Here's the one thing we changed.", topic: "Single-lever client transformation story" },
      { hook: "[Number] clients. [X] months. [Y result]. Here's what we learned.", topic: "Aggregated results post" },
      { hook: "I almost didn't take this client on. I'm glad I did. Here's why.", topic: "Client success that challenged your assumptions" },
      { hook: "My client asked me to stay anonymous. So I'll just say: the results speak for themselves.", topic: "Anonymous case study with specific metrics" },
      { hook: "We ran this experiment with [client type] and got [unexpected result].", topic: "Surprising experiment outcome" },
      { hook: "The client I'm most proud of isn't my biggest. It's this one.", topic: "Underdog client win" },
    ],
  },
  {
    category: "Contrarian Takes & Hot Opinions",
    color: "bg-red-50 border-red-200",
    badge: "bg-red-100 text-red-700",
    ideas: [
      { hook: "Hot take: [common belief in your industry] is actually holding you back.", topic: "Challenge an industry assumption" },
      { hook: "Everyone says to [popular advice]. I disagree. Here's why.", topic: "Counter-mainstream advice" },
      { hook: "I've worked with 50+ [ICP]. The thing nobody talks about is this.", topic: "Taboo truth in your industry" },
      { hook: "The most overrated [tool/strategy/framework] in [your industry]: unpopular opinion incoming.", topic: "Overrated tactic callout" },
      { hook: "[Common tactic] doesn't work for [specific reason]. Here's what does.", topic: "Debunking popular advice" },
      { hook: "I stopped doing [X] two years ago. Revenue went up. Not down.", topic: "Counterintuitive business decision" },
    ],
  },
  {
    category: "Personal Stories & Lessons",
    color: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    ideas: [
      { hook: "I made a $[X] mistake in [year]. Here's what I learned.", topic: "Expensive business lesson" },
      { hook: "Three years ago I was [situation]. Today I'm [situation]. Here's what changed.", topic: "Transformation story" },
      { hook: "The worst client I ever had taught me my most important business lesson.", topic: "Difficult client lesson" },
      { hook: "I almost quit [X]. The thing that stopped me changed everything.", topic: "Near-quit story" },
      { hook: "I was completely wrong about [belief]. Here's what changed my mind.", topic: "Belief-change story" },
      { hook: "The call that changed how I price everything I sell.", topic: "Pricing mindset shift story" },
      { hook: "Hardest thing I've ever had to tell a client. And what happened after.", topic: "Difficult conversation story" },
    ],
  },
  {
    category: "How-To & Educational",
    color: "bg-green-50 border-green-200",
    badge: "bg-green-100 text-green-700",
    ideas: [
      { hook: "How I [achieve specific result] in [X steps]. (Steal this.)", topic: "Step-by-step process walkthrough" },
      { hook: "The [framework/system] I use with every new [client type]:", topic: "Your proprietary framework" },
      { hook: "If I had to start [your field] from zero today, here's exactly what I'd do:", topic: "From-scratch playbook" },
      { hook: "Most people overcomplicate [task]. Here's how to do it in [X] minutes:", topic: "Simplification how-to" },
      { hook: "The [role] checklist I wish I'd had when I started:", topic: "Checklist post" },
      { hook: "How to [solve specific pain point] without [common sacrifice]:", topic: "Alternative approach how-to" },
      { hook: "[X] questions I ask every [prospective client/new hire/project] before we start:", topic: "Vetting/onboarding questions" },
    ],
  },
  {
    category: "Industry Insights & Observations",
    color: "bg-violet-50 border-violet-200",
    badge: "bg-violet-100 text-violet-700",
    ideas: [
      { hook: "I've noticed a pattern across [X] [client type] I work with. It's this:", topic: "Pattern observation across clients" },
      { hook: "The biggest mistake [your ICP] makes in [year]:", topic: "ICP mistake callout" },
      { hook: "Something is shifting in [your industry] that most people haven't noticed yet:", topic: "Emerging trend observation" },
      { hook: "Here's what [X years] of working with [client type] has taught me:", topic: "Years-of-experience synthesis" },
      { hook: "What separates the [X who succeed] from the [X who don't]:", topic: "Success/failure pattern" },
      { hook: "I reviewed [X] [deliverables/profiles/businesses]. The common thread:", topic: "Analysis of many examples" },
    ],
  },
  {
    category: "Behind the Business",
    color: "bg-teal-50 border-teal-200",
    badge: "bg-teal-100 text-teal-700",
    ideas: [
      { hook: "A week in my business: what I actually spent my time on.", topic: "Time audit / weekly recap" },
      { hook: "My exact onboarding process for new clients. Take it.", topic: "Your process revealed" },
      { hook: "The tools I use to run my [type] business. (Full stack, no fluff.)", topic: "Tools & software stack" },
      { hook: "How I price my services. An honest breakdown.", topic: "Pricing transparency post" },
      { hook: "What my business looked like 1 year ago vs. today. The good and the bad.", topic: "Business anniversary recap" },
      { hook: "I made [X] decisions this month. Here's the thinking behind the three biggest.", topic: "Decision-making transparency post" },
    ],
  },
  {
    category: "Questions & Engagement Posts",
    color: "bg-pink-50 border-pink-200",
    badge: "bg-pink-100 text-pink-700",
    ideas: [
      { hook: "What's the most counterintuitive lesson you've learned about [topic relevant to your ICP]?", topic: "Counterintuitive lesson prompt" },
      { hook: "What do you wish someone had told you when you started [your journey]?", topic: "Looking-back advice prompt" },
      { hook: "Honest question: what's the hardest part of [your ICP's main challenge] right now?", topic: "Pain point research question" },
      { hook: "What's the best [business advice] you've ever received? I'll go first:", topic: "Best advice prompt with your example" },
      { hook: "What's the dumbest thing that's actually made your business better?", topic: "Surprising business improvement" },
      { hook: "Controversial: [statement]. Agree or disagree?", topic: "Binary opinion poll" },
    ],
  },
  {
    category: "Predictions & Future Thinking",
    color: "bg-orange-50 border-orange-200",
    badge: "bg-orange-100 text-orange-700",
    ideas: [
      { hook: "My prediction for [your industry] in the next 12 months. Bookmark this.", topic: "Industry prediction post" },
      { hook: "[Trend] is going to reshape [your industry] in ways most people don't see yet.", topic: "Emerging trend analysis" },
      { hook: "The skill that will be worth 10x more in [your field] in 5 years:", topic: "Future skill prediction" },
      { hook: "What [your industry] will look like in 2028. Controversial take:", topic: "Long-range prediction" },
      { hook: "The [strategy/tool/approach] that will be obsolete in [X years]. And what replaces it:", topic: "Obsolescence prediction" },
    ],
  },
]

export default function LinkedInPostIdeasPage() {
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
              <Link href="/tools/linkedin-content-ideas" className="text-gray-500 text-sm hover:text-gray-800 hidden sm:block">Content ideas tool</Link>
              <Link href="/signup" className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                Start free trial
              </Link>
            </div>
          </div>
        </nav>

        <main className="pt-14">
          {/* Breadcrumb */}
          <div className="max-w-4xl mx-auto px-4 pt-6 pb-2">
            <nav className="flex items-center gap-2 text-xs text-gray-400">
              <Link href="/" className="hover:text-gray-600">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gray-600">Blog</Link>
              <span>/</span>
              <span className="text-gray-600">LinkedIn Post Ideas</span>
            </nav>
          </div>

          {/* Hero */}
          <section className="py-10 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">Content Strategy</span>
                <span className="text-xs text-gray-400">8 min read · Updated July 2026</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                50 LinkedIn Post Ideas for B2B Professionals (2026)
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                Never stare at a blank draft again. Here are 50 proven LinkedIn post ideas for consultants, coaches, and agency owners — organized by type, with example hooks you can use right now.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/tools/linkedin-post-generator"
                  className="inline-flex items-center gap-2 gradient-bg text-white text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  Generate a post with AI →
                </Link>
                <Link
                  href="/tools/linkedin-content-ideas"
                  className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
                >
                  Get 30 personalized ideas
                </Link>
              </div>
            </div>
          </section>

          {/* Intro */}
          <section className="px-4 pb-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8">
                <h2 className="font-bold text-gray-900 mb-3">How to use this list</h2>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-blue-600 flex-shrink-0">→</span> Each post idea includes an <strong>example hook</strong> — the first line that makes people click &ldquo;see more.&rdquo;</li>
                  <li className="flex items-start gap-2"><span className="text-blue-600 flex-shrink-0">→</span> Pick ideas from at least 3 different categories to keep your feed varied</li>
                  <li className="flex items-start gap-2"><span className="text-blue-600 flex-shrink-0">→</span> The best posts <strong>replace the placeholders</strong> with specific numbers, names, and details from your own experience</li>
                  <li className="flex items-start gap-2"><span className="text-blue-600 flex-shrink-0">→</span> Use Spur AI&apos;s <Link href="/tools/linkedin-post-generator" className="text-blue-600 hover:underline">free post generator</Link> to turn any idea into a full draft</li>
                </ul>
              </div>

              {/* Post ideas by category */}
              <div className="space-y-10">
                {POST_IDEAS.map((section) => (
                  <section key={section.category}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${section.badge}`}>
                        {section.ideas.length} ideas
                      </span>
                      <h2 className="text-xl font-bold text-gray-900">{section.category}</h2>
                    </div>
                    <div className="space-y-3">
                      {section.ideas.map((idea, i) => (
                        <div key={i} className={`rounded-xl border p-4 ${section.color}`}>
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            {idea.topic}
                          </div>
                          <p className="text-sm font-medium text-gray-800 italic">
                            &ldquo;{idea.hook}&rdquo;
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </section>

          {/* Mid-content CTA */}
          <section className="py-12 px-4 bg-gray-50 my-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Want AI to write the post for you?
              </h2>
              <p className="text-gray-500 mb-6">
                Pick any idea from the list above, enter your topic and niche into Spur AI&apos;s free post generator, and get a complete post in under 30 seconds.
              </p>
              <Link
                href="/tools/linkedin-post-generator"
                className="gradient-bg text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Generate my post →
              </Link>
              <p className="text-xs text-gray-400 mt-2">Free · No signup required · Real AI</p>
            </div>
          </section>

          {/* What makes a great post */}
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">What separates good LinkedIn posts from great ones</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    title: "The hook is everything",
                    desc: "LinkedIn shows 2–3 lines before the 'see more' cutoff. If your first line doesn't make someone want to read more, the rest doesn't matter. Write your hook last, after you know what the post is about.",
                  },
                  {
                    title: "Specificity builds trust",
                    desc: "'I helped a client grow their business' builds zero trust. '3 clients, 90 days, $840K in new pipeline' builds a lot. Quantify everything you can: timeframes, percentages, dollar amounts, number of clients.",
                  },
                  {
                    title: "Only you can write your stories",
                    desc: "The only post that can't be replicated is a personal story. AI can write educational content. No one can replicate your experience. Your most personal posts will always outperform your most polished ones.",
                  },
                  {
                    title: "Short paragraphs, big white space",
                    desc: "LinkedIn is mostly read on mobile. Walls of text get skipped. One idea per paragraph. Hit return after every 2–3 lines. White space signals to the reader that each line will be quick — so they keep going.",
                  },
                  {
                    title: "End with a question or insight, not 'Agree?'",
                    desc: "'Agree?' as an ending has become the most ignored word on LinkedIn. Instead, close with a genuine question your audience would actually want to answer, or a reframe that gives them something new to think about.",
                  },
                  {
                    title: "Post at peak times, then engage fast",
                    desc: "Tue–Thu, 7–9am and 12–1pm (your audience's local time) typically see the highest organic reach. More importantly: respond to every comment in the first 60 minutes. This signals high engagement to the algorithm.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="bg-white border border-gray-100 rounded-xl p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently asked questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "What should I post on LinkedIn for business?",
                    a: "For B2B business professionals, the best LinkedIn post types are: client results with specific numbers, personal stories with a business lesson, contrarian takes on industry assumptions, how-to posts that solve your ICP's problems, and behind-the-scenes posts about how you work.",
                  },
                  {
                    q: "How often should I post on LinkedIn?",
                    a: "3–5 times per week is the optimal posting frequency for B2B professionals. Posting 3x/week consistently outperforms posting daily for 2 weeks then going silent. The LinkedIn algorithm rewards consistency over volume.",
                  },
                  {
                    q: "What makes a good LinkedIn post?",
                    a: "A good LinkedIn post has four elements: a hook that stops the scroll, a specific and valuable insight, a personal angle only you could write, and a clear call to engage. Posts that share personal stories with specific numbers consistently outperform generic educational posts.",
                  },
                  {
                    q: "Can I use AI to generate LinkedIn posts?",
                    a: "Yes — AI is a strong starting point for LinkedIn content, especially for generating first drafts, brainstorming topics, and writing multiple post variations. The best approach: use AI to generate a draft, then add your personal experience, specific numbers, and real client details that only you have access to. Spur AI's free post generator does this in under 30 seconds.",
                  },
                ].map(({ q, a }) => (
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
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Tools to help you execute these ideas</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { href: "/tools/linkedin-post-generator", title: "LinkedIn Post Generator", desc: "Turn any idea into a full post with AI", emoji: "✍️" },
                  { href: "/tools/linkedin-content-ideas", title: "Content Ideas Generator", desc: "30 personalized ideas based on your niche", emoji: "💡" },
                  { href: "/tools/linkedin-content-calendar", title: "Content Calendar Generator", desc: "Plan 4 weeks of posts in 2 minutes", emoji: "📅" },
                ].map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="bg-white border border-gray-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all text-center"
                  >
                    <div className="text-3xl mb-2">{tool.emoji}</div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">{tool.title}</div>
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
                Want posts written in your voice?
              </h2>
              <p className="text-gray-500 mb-6">
                The free tools get you started. Spur AI&apos;s full product trains on your writing style, your niche, and your ICP so every post sounds like you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/signup" className="gradient-bg text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity">
                  Start 14-day free trial →
                </Link>
                <Link href="/tools/linkedin-post-generator" className="border border-gray-200 text-gray-700 font-semibold px-8 py-3.5 rounded-full hover:bg-gray-50 transition-colors">
                  Try free post generator
                </Link>
              </div>
              <p className="text-xs text-gray-400 mt-3">No credit card required</p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

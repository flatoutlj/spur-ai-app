import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "50 Proven LinkedIn Hooks That Get 10x More Views | Spur AI",
  description:
    "Copy these 50 proven LinkedIn hooks to stop the scroll and 10x your post views. Organized by type: story, question, contrarian, statistic, and how-to. Free resource for B2B consultants.",
  keywords: [
    "linkedin hooks generator",
    "linkedin hooks examples",
    "linkedin post hooks",
    "linkedin opening lines",
    "linkedin content hooks",
  ],
  openGraph: {
    title: "50 Proven LinkedIn Hooks That Get 10x More Views | Spur AI",
    description:
      "Copy these 50 proven LinkedIn hooks to stop the scroll. Organized by type for B2B consultants and agency owners.",
    type: "website",
    url: "https://trispur.com/tools/linkedin-hooks",
  },
  twitter: {
    card: "summary_large_image",
    title: "50 Proven LinkedIn Hooks That Get 10x More Views",
    description: "Stop the scroll with these 50 proven LinkedIn opening lines. Free for B2B professionals.",
  },
  alternates: {
    canonical: "https://trispur.com/tools/linkedin-hooks",
  },
}

const hookCategories = [
  {
    type: "Story Hooks",
    color: "blue",
    description:
      "Story hooks open with a personal moment or turning point. They trigger curiosity and emotional connection — the most powerful combo on LinkedIn.",
    hooks: [
      "I almost quit my business 18 months ago. Here's what changed.",
      "Last year I turned down a $80,000 contract. Best decision I ever made.",
      "My biggest client fired me last Tuesday. Here's the lesson I needed to learn.",
      "3 years ago, I had 6 clients and $0 in savings. Today, I have 3 clients and a $400K pipeline.",
      "I worked 70-hour weeks for 2 years. The client it was all for paid me $0.",
      "I sent 47 cold emails before landing my first $20K deal. Here's email #48.",
      "My mentor gave me one piece of advice that changed how I price everything.",
      "I grew my LinkedIn from 200 to 20,000 followers in 14 months. This is exactly what I did.",
      "The day I raised my rates by 3x, something unexpected happened.",
      "I used to charge $50/hr for consulting. Now I charge $500. Here's the mindset shift.",
    ],
  },
  {
    type: "Question Hooks",
    color: "violet",
    description:
      "Questions activate the reader's brain and create an open loop. They work best when they surface a tension your ideal client already feels.",
    hooks: [
      "Why do some consultants charge $500/hr while others charge $50/hr for the same work?",
      "What if your ideal client is already on LinkedIn — and you just aren't showing up?",
      "What would change about your business if you had 5 inbound leads every week?",
      "Are you posting on LinkedIn, or are you growing on LinkedIn? (There's a difference.)",
      "What's the actual cost of not having a consistent LinkedIn presence?",
      "Why do so many consultants struggle with LinkedIn when their expertise is so strong?",
      "What would your business look like if you never had to cold pitch again?",
      "If your ideal client saw your LinkedIn profile today, would they book a call?",
      "Have you ever wondered why some people seem to attract clients effortlessly on LinkedIn?",
      "What's holding you back from posting on LinkedIn every day this week?",
    ],
  },
  {
    type: "Contrarian Hooks",
    color: "orange",
    description:
      "Contrarian hooks challenge a widely-held belief. They provoke. They make people stop and think. They generate comments from people who agree and disagree — which is great for reach.",
    hooks: [
      "Unpopular opinion: Posting more on LinkedIn will not grow your business.",
      "Hot take: Your niche is not too narrow. It is too broad.",
      "Most LinkedIn advice is wrong. Here's what actually works for B2B consultants.",
      "Controversial: Follower count is a vanity metric. This is what actually matters.",
      "The reason your LinkedIn posts aren't generating leads has nothing to do with the algorithm.",
      "Busy is not a badge of honor. It's a red flag.",
      "Stop trying to go viral on LinkedIn. Do this instead.",
      "Your pricing is too low — and raising it will not lose you clients.",
      "Cold outreach is not dead. Your cold outreach is dead.",
      "The best time to post on LinkedIn is not what any tool will tell you.",
    ],
  },
  {
    type: "Statistic Hooks",
    color: "green",
    description:
      "Stats establish credibility instantly and signal that what follows is worth reading. Specificity is the key — round numbers feel made-up, precise numbers feel earned.",
    hooks: [
      "87% of LinkedIn users read posts but never comment. Here's how to reach them anyway.",
      "The average B2B consultant loses 3 ideal clients per year simply because they aren't visible on LinkedIn.",
      "I analyzed 200 posts that generated consulting leads. They all had these 4 things in common.",
      "Only 1% of LinkedIn's 1 billion users post weekly. Guess which 1% gets all the leads?",
      "Posts with a question at the end get 50% more comments. But only if you ask the right kind.",
      "My last 3 clients found me through LinkedIn posts, not referrals. Here's what changed.",
      "The average LinkedIn post reaches just 8% of your followers. Until you do this.",
      "It takes 7 touchpoints before a B2B prospect is ready to buy. LinkedIn can automate 5 of them.",
      "Consultants who post 3x/week on LinkedIn earn 2.3x more from LinkedIn leads than those who post once.",
      "I generated $127,000 in new business from LinkedIn in Q1. Zero ad spend. Here's the breakdown.",
    ],
  },
  {
    type: "How-To Hooks",
    color: "teal",
    description:
      "How-to hooks promise a specific outcome. They attract readers who are actively searching for a solution — exactly the people most likely to become clients.",
    hooks: [
      "How to generate 3 qualified leads per week from LinkedIn without spending a dollar on ads:",
      "How I went from 0 to 10 discovery calls per month using one simple LinkedIn system:",
      "How to write a LinkedIn post in 15 minutes that actually drives business:",
      "How to turn LinkedIn followers into paying clients (without being salesy):",
      "How to build a LinkedIn content strategy in one afternoon that runs for 90 days:",
      "How to position yourself as the obvious expert in your niche on LinkedIn:",
      "How to get your ideal clients to reach out to you first on LinkedIn:",
      "How I write a week's worth of LinkedIn content in 30 minutes every Sunday:",
      "How to grow from 500 to 5,000 LinkedIn followers in 6 months (without going viral):",
      "How to convert a LinkedIn DM into a discovery call without being pushy:",
    ],
  },
]

const colorMap: Record<string, { badge: string; accent: string; border: string }> = {
  blue: {
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    accent: "text-blue-600",
    border: "border-l-blue-500",
  },
  violet: {
    badge: "bg-violet-50 text-violet-700 border-violet-100",
    accent: "text-violet-600",
    border: "border-l-violet-500",
  },
  orange: {
    badge: "bg-orange-50 text-orange-700 border-orange-100",
    accent: "text-orange-600",
    border: "border-l-orange-500",
  },
  green: {
    badge: "bg-green-50 text-green-700 border-green-100",
    accent: "text-green-600",
    border: "border-l-green-500",
  },
  teal: {
    badge: "bg-teal-50 text-teal-700 border-teal-100",
    accent: "text-teal-600",
    border: "border-l-teal-500",
  },
}

export default function LinkedInHooksPage() {
  return (
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
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-violet-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-violet-100 border border-violet-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-violet-700 text-sm font-medium">Free resource · 50 hooks</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
            50 Proven LinkedIn Hooks That Get 10x More Views
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">
            The first line of your LinkedIn post determines whether anyone reads the rest. These 50
            hooks are organized by type so you can find the right one for any post — and actually
            stop the scroll.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-base"
            >
              Generate custom hooks for your niche →
            </Link>
            <a
              href="#hooks"
              className="border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors text-base"
            >
              Jump to hooks ↓
            </a>
          </div>
        </div>
      </section>

      {/* Why hooks matter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                stat: "3 lines",
                label: 'LinkedIn shows only the first 3 lines before "see more"',
              },
              {
                stat: "0.3 sec",
                label: "Time you have to stop a scroll before the reader moves on",
              },
              {
                stat: "10x",
                label: "Difference in reach between a strong hook and a weak one",
              },
            ].map((s) => (
              <div key={s.stat} className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{s.stat}</div>
                <div className="text-gray-500 text-sm leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white rounded-xl p-6 border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-3">What makes a great LinkedIn hook?</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <p className="font-medium text-gray-900 mb-2">Great hooks:</p>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span> Create an open loop the reader must close</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span> Speak directly to a pain or desire</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span> Use specific details (not vague generalities)</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span> Start with "I" or a number or a direct statement</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-2">Weak hooks:</p>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2"><span className="text-red-400 font-bold mt-0.5">✗</span> "Excited to share..." — nobody cares</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 font-bold mt-0.5">✗</span> "In today's world..." — too vague</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 font-bold mt-0.5">✗</span> "I've been thinking about..." — bury the lead</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 font-bold mt-0.5">✗</span> Generic greetings or weather observations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hooks List */}
      <section id="hooks" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-14">
          {hookCategories.map((category, catIdx) => {
            const colors = colorMap[category.color]
            return (
              <div key={catIdx}>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${colors.badge}`}
                  >
                    {catIdx + 1} of 5
                  </span>
                  <h2 className={`text-2xl font-bold text-gray-900`}>{category.type}</h2>
                </div>
                <p className="text-gray-500 mb-6 text-sm leading-relaxed max-w-2xl">
                  {category.description}
                </p>
                <div className="space-y-3">
                  {category.hooks.map((hook, hookIdx) => (
                    <div
                      key={hookIdx}
                      className={`bg-white border border-gray-100 border-l-4 ${colors.border} rounded-r-xl px-5 py-4 shadow-sm`}
                    >
                      <div className="flex items-start gap-3">
                        <span className={`text-xs font-bold ${colors.accent} mt-0.5 flex-shrink-0 w-6`}>
                          #{catIdx * 10 + hookIdx + 1}
                        </span>
                        <p className="text-gray-800 text-sm leading-relaxed">{hook}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {catIdx < hookCategories.length - 1 && (
                  <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100 rounded-xl">
                    <p className="text-sm text-gray-700">
                      <strong>Pro tip:</strong> The best hook is one that matches your post type.
                      Use story hooks for personal experiences, contrarian hooks for industry
                      opinions, and how-to hooks for tactical posts.{" "}
                      <Link href="/signup" className="text-blue-600 hover:underline font-medium">
                        Spur AI
                      </Link>{" "}
                      automatically selects the right hook style based on the post it generates.
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA mid-page */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Generate custom hooks for your niche
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            These 50 hooks are a starting point. With Spur AI, you get hooks crafted specifically
            for your industry, your voice, and your ideal client — in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Start free trial — generate hooks for your niche →
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-3">14-day free trial · No credit card required</p>
        </div>
      </section>

      {/* How to use hooks */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            How to use these LinkedIn hooks effectively
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                step: "1",
                title: "Match the hook to your post type",
                desc: "Story hooks work for personal experiences. Contrarian hooks work for opinions. How-to hooks work for tactical content. Do not mix types.",
              },
              {
                step: "2",
                title: "Customize with a specific detail",
                desc: "Replace vague numbers with your real numbers. \"I lost a $40K client\" is stronger than \"I lost a client.\" Specificity = credibility.",
              },
              {
                step: "3",
                title: "Test the hook before you post",
                desc: "Read the hook aloud. If you wouldn't stop scrolling for it, rewrite it. The hook is the most important sentence in your post.",
              },
              {
                step: "4",
                title: "Rotate hook types each week",
                desc: "Use one story, one contrarian, and one how-to hook per week. Variety keeps your audience from getting desensitized to your style.",
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related resources */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Related resources</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/tools/linkedin-post-generator"
              className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-3xl">✍️</span>
              <div>
                <div className="font-semibold text-gray-900 mb-1">
                  Free LinkedIn Post Generator
                </div>
                <div className="text-gray-500 text-sm">
                  Generate a full LinkedIn post with hook + body + CTA in one click.
                </div>
              </div>
            </Link>
            <Link
              href="/blog/linkedin-content-strategy-for-consultants"
              className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-3xl">📋</span>
              <div>
                <div className="font-semibold text-gray-900 mb-1">
                  LinkedIn Content Strategy Guide
                </div>
                <div className="text-gray-500 text-sm">
                  The complete 2026 playbook for B2B consultants growing on LinkedIn.
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-violet-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stop writing hooks manually. Let AI do it.
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Spur AI generates complete LinkedIn posts — hook, body, and CTA — trained on your
            voice and your niche. 14-day free trial for B2B consultants, coaches, and agency
            owners.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-full hover:bg-blue-50 transition-colors text-lg"
          >
            Start your free trial →
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
                <li>
                  <Link
                    href="/tools/linkedin-post-generator"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn Post Generator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/linkedin-hooks" className="hover:text-white transition-colors">
                    LinkedIn Hooks Library
                  </Link>
                </li>
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

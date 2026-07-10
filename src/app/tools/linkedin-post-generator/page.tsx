import type { Metadata } from "next"
import Link from "next/link"
import LinkedInPostGeneratorTool from "./LinkedInPostGeneratorTool"

export const metadata: Metadata = {
  title: "Free AI LinkedIn Post Generator | Spur AI",
  description:
    "Generate high-performing LinkedIn posts in seconds with our free AI LinkedIn post generator. Built for B2B consultants, coaches, and agency owners. No signup required for your first post.",
  keywords: [
    "linkedin post generator ai",
    "ai linkedin content creator",
    "free linkedin post generator",
    "linkedin post ideas",
    "linkedin content generator",
  ],
  openGraph: {
    title: "Free AI LinkedIn Post Generator | Spur AI",
    description:
      "Generate high-performing LinkedIn posts in seconds. Free tool for B2B consultants, coaches, and agency owners.",
    type: "website",
    url: "https://trispur.com/tools/linkedin-post-generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI LinkedIn Post Generator | Spur AI",
    description:
      "Generate high-performing LinkedIn posts in seconds. Free tool for B2B professionals.",
  },
  alternates: {
    canonical: "https://trispur.com/tools/linkedin-post-generator",
  },
}

const faqs = [
  {
    q: "Is this LinkedIn post generator really free?",
    a: "Yes — you can generate sample LinkedIn posts for free with no signup required. For unlimited posts with your custom brand voice, a full hooks library, and a content calendar, start a free 14-day trial of Spur AI.",
  },
  {
    q: "What makes AI-generated LinkedIn posts perform well?",
    a: "High-performing LinkedIn posts share three traits: a scroll-stopping first line (the hook), a clear structure that is easy to scan, and a specific call-to-action. Our AI is trained on thousands of viral B2B posts to apply these patterns automatically.",
  },
  {
    q: "Can I use an AI LinkedIn post generator for B2B content?",
    a: "Absolutely. Spur AI is purpose-built for B2B professionals — consultants, coaches, and agency owners. The AI understands B2B buying cycles, thought leadership positioning, and how to attract premium clients rather than just followers.",
  },
  {
    q: "Will LinkedIn penalize AI-generated posts?",
    a: "No. LinkedIn has no policy against AI-assisted content creation. Millions of professionals already use AI tools to help write posts. The key is adding your own insights and perspective — which Spur AI prompts you to do during onboarding.",
  },
  {
    q: "How often should I post on LinkedIn to grow my consulting business?",
    a: "Most LinkedIn experts recommend 3 to 5 posts per week for consistent algorithm exposure. With an AI LinkedIn content creator like Spur AI, you can batch-create a full week of posts in under 30 minutes, then schedule them in advance.",
  },
]

const samplePosts = [
  {
    type: "Story",
    role: "Management Consultant",
    followers: "2,847",
    content: `I lost a $40,000 client last year because I was too available.

They called at 10pm. I answered.
They emailed on Sunday. I replied in 20 minutes.
They asked for scope changes. I said yes every time.

What I thought was "great service" was actually training them to disrespect my boundaries.

Here's what I do differently now:

→ Office hours: Mon–Fri, 9am–5pm. No exceptions.
→ Scope changes get a change order. Every time.
→ I add a "Communication Protocol" to every contract.

Result? My average client tenure went from 3 months to 14 months.

The clients who pushed back on my boundaries were the wrong clients anyway.

What boundary has been hardest for you to enforce with clients?`,
    engagement: "312 reactions · 94 comments",
  },
  {
    type: "Contrarian",
    role: "Agency Owner",
    followers: "5,104",
    content: `Unpopular opinion: Your LinkedIn content strategy is wrong.

Most consultants post about what THEY do.

"I help X achieve Y."
"Proud to announce Z."
"Here are 5 things I learned."

The top 1% of LinkedIn consultants post about what their CLIENTS struggle with.

The shift:
❌ "I help founders build systems"
✅ "Here's why most founder-led businesses plateau at $500K"

❌ "I'm a marketing consultant"
✅ "3 reasons your agency's lead generation has dried up"

When you lead with the problem your ideal client is living inside, they stop scrolling.

They think: "How did they know?"

That's the post that earns a DM.

What problem are you actually solving for your clients?`,
    engagement: "441 reactions · 127 comments",
  },
]

export default function LinkedInPostGeneratorPage() {
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
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-blue-700 text-sm font-medium">Free tool · No signup required</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
            Free AI LinkedIn Post Generator
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">
            Generate scroll-stopping LinkedIn posts in seconds. Built for B2B consultants,
            coaches, and agency owners who want to attract premium clients — not just followers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-base"
            >
              Generate unlimited posts free →
            </Link>
            <a
              href="#try-it"
              className="border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors text-base"
            >
              See demo below ↓
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Tool */}
      <section id="try-it" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Try the generator</h2>
            <p className="text-gray-500">
              Pick your niche and post type to see a demo LinkedIn post
            </p>
          </div>
          <LinkedInPostGeneratorTool />
        </div>
      </section>

      {/* Sample Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Example posts generated by Spur AI
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Real posts created for B2B consultants using our AI LinkedIn content creator.
            </p>
          </div>
          <div className="space-y-6">
            {samplePosts.map((post, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">B2B {post.role}</div>
                      <div className="text-gray-400 text-xs">{post.followers} followers · 1st</div>
                    </div>
                    <span className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {post.type} post
                    </span>
                  </div>
                  <div className="text-gray-800 text-sm leading-relaxed whitespace-pre-line">
                    {post.content}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{post.engagement}</span>
                    <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                      Generated by Spur AI
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-500 mb-4">Want posts like these for your business?</p>
            <Link
              href="/signup"
              className="inline-block bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Start your free 14-day trial →
            </Link>
            <p className="text-gray-400 text-sm mt-3">No credit card required</p>
          </div>
        </div>
      </section>

      {/* Why use AI */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Why use an AI LinkedIn content creator?
            </h2>
            <p className="text-gray-500">
              Consistent, high-quality posting is the #1 driver of LinkedIn growth — and it is
              hard to maintain without help.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "⚡",
                title: "10x faster content creation",
                desc: "What used to take 45 minutes now takes 3 minutes. Spend your time on clients, not staring at a blank screen.",
              },
              {
                icon: "🎯",
                title: "Built for B2B conversion",
                desc: "Not generic content. Posts designed to attract decision-makers and generate discovery calls.",
              },
              {
                icon: "🧠",
                title: "Learns your voice",
                desc: "After a quick onboarding, every post sounds like you — not like AI. Clients will not know the difference.",
              },
              {
                icon: "🔗",
                title: "Proven frameworks",
                desc: "15+ post frameworks used by top LinkedIn creators: story, contrarian, how-to, listicle, and more.",
              },
              {
                icon: "📅",
                title: "Content calendar built-in",
                desc: "Plan your content weeks ahead. Never scramble for something to post again.",
              },
              {
                icon: "📈",
                title: "Performance analytics",
                desc: "See which posts drive profile views and leads. Double down on what works.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            More free LinkedIn resources
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/tools/linkedin-hooks"
              className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-3xl">🪝</span>
              <div>
                <div className="font-semibold text-gray-900 mb-1">50 Proven LinkedIn Hooks</div>
                <div className="text-gray-500 text-sm">
                  Scroll-stopping opening lines organized by type — story, question, contrarian,
                  and more.
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
                  The complete 2026 playbook for B2B consultants who want to turn LinkedIn into a
                  lead machine.
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-violet-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to generate unlimited LinkedIn posts?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Join 500+ B2B consultants and agency owners using Spur AI to attract premium clients
            on LinkedIn. 14-day free trial, no credit card required.
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
                  <Link
                    href="/tools/linkedin-hooks"
                    className="hover:text-white transition-colors"
                  >
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

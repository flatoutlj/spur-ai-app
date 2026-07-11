import type { Metadata } from "next"
import Link from "next/link"
import LinkedInBioGeneratorClient from "./LinkedInBioGeneratorClient"

export const metadata: Metadata = {
  title: "Free LinkedIn Bio Generator — 5 About Section Templates",
  description:
    "Generate a magnetic LinkedIn About section in seconds. 5 proven bio templates for B2B consultants, coaches, and agency owners. Free — no signup required.",
  keywords: [
    "linkedin bio generator",
    "linkedin about section generator",
    "linkedin about me generator",
    "linkedin bio examples",
    "linkedin about section examples",
    "linkedin profile bio",
  ],
  openGraph: {
    title: "Free LinkedIn Bio Generator — 5 Templates",
    description: "Enter your role, ICP, and results. Get 5 LinkedIn About section variations ready to copy.",
    type: "website",
    url: "https://trispur.com/tools/linkedin-bio-generator",
    siteName: "Spur AI",
  },
  alternates: { canonical: "https://trispur.com/tools/linkedin-bio-generator" },
}

const EXAMPLES = [
  {
    label: "Consultant",
    bio: `I help B2B SaaS companies 3x their pipeline in 90 days — without hiring more reps.

After 12 years running sales teams at Oracle and Salesforce, I started my own advisory practice to help scaling startups avoid the costly mistakes I made.

My approach combines sales process design, ICP tightening, and content-led inbound — the combination that moves the needle fastest.

Helped 60+ companies generate over $200M in attributed pipeline.

→ DM me "PIPELINE" and I'll send you my free Sales Process Audit template.`,
  },
  {
    label: "Coach",
    bio: `If you're a 6-figure consultant who wants to scale past $500K without burning out — you're in the right place.

I'm a business coach and former McKinsey consultant who spent 15 years in corporate before building a 7-figure coaching practice.

Here's what I know: most consultants hit a ceiling not because of skill, but because of systems. They're trading time for money with no leverage.

I help clients build a premium offer, automated lead flow, and a team — so they can 2x revenue while working fewer hours.

→ Book a free 30-min Clarity Call: calendly.com/yourlink`,
  },
  {
    label: "Agency owner",
    bio: `Most agencies die at $500K because they never productize what they do.

I built and sold a $2.8M marketing agency. Now I help agency owners systematize their delivery, raise their prices, and land retainer clients.

My method: the Agency Operating System — a 90-day process to go from chaotic to profitable.

Results from my clients last year:
• 14 agencies crossed $1M ARR for the first time
• Average retainer price increased from $3,200 to $7,800/month
• Client churn dropped from 38% to 11%

→ DM me if you want to see the framework.`,
  },
]

const FAQ = [
  {
    q: "How long should a LinkedIn About section be?",
    a: "LinkedIn allows up to 2,600 characters in the About section. The sweet spot is 1,200–1,800 characters — long enough to tell your story and add credibility, short enough to keep readers engaged. Most visitors won't click 'see more,' so put your hook in the first two lines.",
  },
  {
    q: "What should I include in my LinkedIn bio?",
    a: "A strong LinkedIn bio includes: (1) a hook in the first 2 lines that speaks to your ideal client, (2) who you help and the result you deliver, (3) a brief background or social proof that establishes credibility, (4) your method or approach, and (5) a clear call-to-action. Avoid generic phrases like 'passionate professional' or 'results-driven.'",
  },
  {
    q: "Should I write my LinkedIn bio in first or third person?",
    a: "First person (I, my) is almost always better on LinkedIn. It feels more authentic and conversational. Third person ('Jane is a consultant who...') can come across as stiff or self-important. Save third person for press bios and speaker introductions.",
  },
  {
    q: "How do I make my LinkedIn About section stand out?",
    a: "Use white space generously — short paragraphs, not walls of text. Start with a provocative question, a bold result, or a direct statement to your ideal client. Include specific numbers (years, revenue generated, number of clients) rather than vague claims. End with one clear call-to-action.",
  },
  {
    q: "How often should I update my LinkedIn bio?",
    a: "Update your About section every 6–12 months, or when you have a new achievement, a different ideal client, or a changed offer. LinkedIn's algorithm favors active profiles, so occasional updates signal to the platform that you're engaged.",
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

export default function LinkedInBioGeneratorPage() {
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
          <section className="py-16 px-4 bg-gradient-to-b from-blue-50/50 to-white text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-4">
                <span className="text-blue-600 text-xs font-medium">Free tool · No signup required</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                LinkedIn Bio Generator
              </h1>
              <p className="text-lg text-gray-500 mb-3 max-w-2xl mx-auto">
                Your LinkedIn About section is your most-read piece of content. Generate 5 high-converting bio variations in seconds — pick your favorite and customize it.
              </p>
              <p className="text-sm text-gray-400">
                LinkedIn allows up to 2,600 characters · First-person · CTA included
              </p>
            </div>
          </section>

          {/* Tool */}
          <section className="py-8 px-4">
            <div className="max-w-3xl mx-auto">
              <LinkedInBioGeneratorClient />
            </div>
          </section>

          {/* Examples */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                LinkedIn bio examples that convert
              </h2>
              <p className="text-gray-500 text-center mb-8">
                High-performing About sections from real B2B professionals.
              </p>
              <div className="space-y-5">
                {EXAMPLES.map((ex) => (
                  <div key={ex.label} className="bg-white rounded-xl border border-gray-100 p-5">
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
                      {ex.label}
                    </div>
                    <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
                      {ex.bio}
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tips */}
          <section className="py-16 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                How to write a LinkedIn About section that gets results
              </h2>
              <div className="space-y-4">
                {[
                  {
                    n: "1",
                    title: "Hook them in the first 2 lines",
                    body: "Only the first 2 lines show before the 'see more' button. Make them speak directly to your ideal client's problem or aspiration. Skip the job title recap — your headline already has that.",
                  },
                  {
                    n: "2",
                    title: "Be specific with numbers",
                    body: "'Helped 60+ companies generate $200M in pipeline' beats 'experienced sales consultant' in credibility. Every claim you can quantify should be quantified.",
                  },
                  {
                    n: "3",
                    title: "Use white space",
                    body: "Short paragraphs of 1–2 sentences. Empty lines between sections. LinkedIn readers scan, not read — make it easy to absorb.",
                  },
                  {
                    n: "4",
                    title: "End with one clear CTA",
                    body: "Don't give people 3 options. One action: DM you, book a call, or click a link. Specificity drives action ('DM me AUDIT' works better than 'reach out').",
                  },
                  {
                    n: "5",
                    title: "Write in first person",
                    body: "Always 'I help' not 'Sarah helps.' First person is warmer, more direct, and more authentic. Third person reads like a press release.",
                  },
                ].map((tip) => (
                  <div key={tip.n} className="flex gap-4 bg-white rounded-xl border border-gray-100 p-5">
                    <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {tip.n}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{tip.title}</h3>
                      <p className="text-gray-500 text-sm">{tip.body}</p>
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

          {/* CTA */}
          <section className="py-16 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Great bio. Now fill your pipeline with content.
              </h2>
              <p className="text-gray-500 mb-6">
                Spur AI generates LinkedIn posts in your voice — story posts, insights, and how-tos that attract the exact clients you want. Try it free for 14 days.
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

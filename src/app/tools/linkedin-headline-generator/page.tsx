import type { Metadata } from "next"
import Link from "next/link"
import HeadlineGeneratorClient from "./HeadlineGeneratorClient"

export const metadata: Metadata = {
  title: "Free LinkedIn Headline Generator — 5 Formulas That Get You Noticed | Spur AI",
  description:
    "Generate 5 LinkedIn headline variations in seconds. Enter your role, who you help, and the result you deliver. Free headline generator for B2B consultants and agency owners.",
  keywords: [
    "linkedin headline generator",
    "linkedin profile headline examples",
    "linkedin headline ideas",
    "best linkedin headline",
    "linkedin profile headline",
  ],
  openGraph: {
    title: "Free LinkedIn Headline Generator | Spur AI",
    description:
      "Generate 5 LinkedIn headline formulas with your info filled in. Free tool for B2B professionals.",
    type: "website",
    url: "https://trispur.com/tools/linkedin-headline-generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free LinkedIn Headline Generator",
    description: "Generate 5 headline variations based on your role, ICP, and result you deliver.",
  },
  alternates: { canonical: "https://trispur.com/tools/linkedin-headline-generator" },
}

const beforeAfterExamples = [
  {
    before: "Marketing Consultant | Helping businesses grow",
    after: "Marketing Consultant helping SaaS founders get their first 1,000 customers | GTM Strategist",
    lesson: "Specificity: 'SaaS founders' and '1,000 customers' beats 'businesses grow'",
  },
  {
    before: "CEO at Acme Agency",
    after: "I help B2B service firms close more deals with LinkedIn | 3x revenue for 40+ clients",
    lesson: "Lead with outcome, not title. Decision-makers care about results.",
  },
  {
    before: "LinkedIn Expert | Speaker | Consultant",
    after: "LinkedIn Strategist helping consultants get 5 inbound leads/week | Without paid ads",
    lesson: "Specificity wins. Replace vague labels with a concrete promise.",
  },
  {
    before: "Business Development Professional",
    after: "Helping PE-backed companies build repeatable revenue | Sales Process Architect",
    lesson: "Niche down and add a framework name to sound authoritative.",
  },
  {
    before: "Fractional CMO | Marketing Strategy | B2B",
    after: "Fractional CMO for scaling B2B SaaS | $0 to $5M ARR marketing systems",
    lesson: "Add a dollar-milestone result. Revenue numbers stop the scroll.",
  },
  {
    before: "Executive Coach | Leadership Development",
    after: "I help first-time CEOs build high-performance leadership teams in 90 days",
    lesson: "Time-bound results ('90 days') make the promise feel achievable and real.",
  },
  {
    before: "Freelance Copywriter",
    after: "Copywriter for B2B tech companies | Email sequences that convert → paid | 10+ years",
    lesson: "Channel specificity + conversion language + credibility signal.",
  },
  {
    before: "Sales Trainer | Coach | Speaker",
    after: "Sales Coach helping agency owners close 6-figure deals without discounting",
    lesson: "Name the enemy: 'without discounting' speaks directly to the pain.",
  },
  {
    before: "Digital Marketing Manager",
    after: "Helping D2C brands scale from $1M to $10M with paid social | Meta & Google Specialist",
    lesson: "Revenue scaling range gives context — readers know immediately if they fit.",
  },
  {
    before: "HR Consultant | Talent Acquisition | People Strategy",
    after: "HR Consultant helping tech startups hire top talent 2x faster | Former Google Recruiter",
    lesson: "Credibility signal ('Former Google Recruiter') dramatically elevates trust.",
  },
  {
    before: "Content Creator | Social Media Manager",
    after: "LinkedIn Content Strategist for B2B founders | Turned content into $2M pipeline in 2025",
    lesson: "Real results ('$2M pipeline') are worth 10 job titles.",
  },
  {
    before: "Operations Manager | Process Improvement",
    after: "I help professional services firms scale from 5 to 50 people without chaos | COO for hire",
    lesson: "The transformation ('5 to 50 people without chaos') paints a vivid before/after.",
  },
  {
    before: "Financial Advisor | Wealth Management",
    after: "Helping tech executives turn stock comp into generational wealth | Fee-only CFP",
    lesson: "'Fee-only CFP' is a trust differentiator. Niching to 'tech executives' multiplies appeal.",
  },
  {
    before: "Web Developer | UX Designer",
    after: "I build conversion-focused websites for B2B SaaS | Avg 40% lift in trial signups",
    lesson: "The metric ('40% lift in trial signups') is the hook. Everything else supports it.",
  },
  {
    before: "Business Coach | Mindset | Success",
    after: "Business Coach helping 7-figure consultants work 20 fewer hours per week | The Freedom Framework",
    lesson: "Hours saved is a concrete promise. 'The Freedom Framework' creates IP mystique.",
  },
]

const headlineElements = [
  {
    number: "1",
    title: "Keyword",
    desc: "Include a searchable role or skill. LinkedIn's search algorithm uses your headline. 'LinkedIn Strategist' > 'Thought Leader'.",
    example: "LinkedIn Strategist, B2B Consultant, Fractional CMO",
    color: "blue",
  },
  {
    number: "2",
    title: "ICP (Ideal Customer Profile)",
    desc: "Name exactly who you serve. The more specific, the more your ideal client feels spoken to. 'B2B SaaS founders' > 'businesses'.",
    example: "for B2B SaaS founders, helping agency owners, for PE-backed firms",
    color: "violet",
  },
  {
    number: "3",
    title: "Result",
    desc: "What transformation or outcome do you deliver? Add a number or timeframe if you can — it increases believability and stops the scroll.",
    example: "3x more inbound leads, close deals 40% faster, $5M ARR",
    color: "green",
  },
  {
    number: "4",
    title: "Differentiation",
    desc: "What makes your approach or method unique? This could be a framework name, a credibility signal, or a constraint ('without cold calling').",
    example: "| The Revenue Sprint Framework, | Former Google, | Without paid ads",
    color: "orange",
  },
]

const faqs = [
  {
    question: "How long should a LinkedIn headline be?",
    answer:
      "LinkedIn allows up to 220 characters in your headline, but the key is clarity over length. Aim for 120–180 characters — enough to include all 4 elements (keyword, ICP, result, differentiation) without cramming. On mobile, only the first ~80 characters are visible in search, so lead with your most important keyword.",
  },
  {
    question: "Should I use my job title in my LinkedIn headline?",
    answer:
      "Only if your job title is a keyword your ideal clients search for. 'CEO at Acme Agency' tells people your rank, not your value. Instead, use a role description that combines your title with your result: 'Marketing Agency Owner helping B2B firms 3x their pipeline' works better than 'CEO | Marketing | Strategy'.",
  },
  {
    question: "How often should I update my LinkedIn headline?",
    answer:
      "Update it whenever your ICP, offer, or result changes — or every 6–12 months to A/B test. LinkedIn doesn't penalize frequent headline changes. If you're not getting profile views from your target audience, the headline is usually the first thing to test.",
  },
  {
    question: "Does my LinkedIn headline affect search ranking?",
    answer:
      "Yes — LinkedIn's algorithm weighs your headline heavily in search results. Including the exact keywords your clients would type (e.g., 'fractional CFO', 'B2B copywriter', 'LinkedIn consultant') increases how often you appear in relevant searches. This is why keyword-first headlines outperform generic ones.",
  },
  {
    question: "What's the difference between a headline and an About section?",
    answer:
      "Your headline is a 220-character hook — it has to make someone stop and click. Your About section is where you tell the full story. Think of the headline as your billboard and the About section as your landing page. Get the headline right first — most visitors never scroll to the About section.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function LinkedInHeadlineGeneratorPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

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
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-orange-700 text-sm font-medium">
              Free tool · 5 headline formulas · No signup required
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
            LinkedIn Headline Generator
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">
            Generate 5 LinkedIn headline variations in seconds. Enter your role, who you help,
            and the result you deliver — get headlines that attract ideal clients and rank in
            LinkedIn search.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#generator"
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-base"
            >
              Generate my headline →
            </a>
            <a
              href="#examples"
              className="border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors text-base"
            >
              See 15 examples ↓
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                stat: "220 chars",
                label: "Max LinkedIn headline length",
                sub: "Most good headlines use 120–180 characters",
              },
              {
                stat: "#1",
                label: "Factor in LinkedIn search ranking",
                sub: "LinkedIn's algorithm weights your headline more than any other field",
              },
              {
                stat: "8 sec",
                label: "Average time spent on a LinkedIn profile",
                sub: "Your headline has to hook them before the scroll",
              },
            ].map((s) => (
              <div
                key={s.stat}
                className="bg-white rounded-xl p-6 border border-gray-100 text-center"
              >
                <div className="text-3xl font-bold text-gray-900 mb-1">{s.stat}</div>
                <div className="font-semibold text-gray-700 text-sm mb-1">{s.label}</div>
                <div className="text-gray-400 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Generator */}
      <section id="generator" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <HeadlineGeneratorClient />
        </div>
      </section>

      {/* 4 Elements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            The 4 elements of a great LinkedIn headline
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-10">
            Every high-performing LinkedIn headline contains these 4 elements. Miss one and you
            leave leads on the table.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {headlineElements.map((el) => (
              <div key={el.number} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {el.number}
                  </div>
                  <h3 className="font-bold text-gray-900">{el.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{el.desc}</p>
                <div className="bg-gray-50 rounded-lg px-4 py-2 text-xs text-gray-500 italic">
                  Examples: {el.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Examples */}
      <section id="examples" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            15 LinkedIn headline examples (before vs. after)
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-10">
            See how a simple rewrite transforms a generic headline into one that attracts
            clients.
          </p>
          <div className="space-y-4">
            {beforeAfterExamples.map((ex, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm"
              >
                <div className="grid sm:grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs font-semibold text-red-500 mb-1.5 uppercase tracking-wide">
                      Before
                    </div>
                    <p className="text-gray-500 text-sm line-through">{ex.before}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-green-600 mb-1.5 uppercase tracking-wide">
                      After
                    </div>
                    <p className="text-gray-900 text-sm font-medium">{ex.after}</p>
                  </div>
                </div>
                <div className="border-t border-gray-50 pt-2">
                  <p className="text-xs text-gray-400 italic">
                    Key lesson: {ex.lesson}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA mid-page */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Want your full LinkedIn profile optimized?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Spur AI&apos;s LinkedIn Profile Optimizer analyzes your headline, About section,
            and experience — then rewrites it to attract your ideal client.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tools/linkedin-profile-optimizer"
              className="border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              Try Profile Optimizer (free) →
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Start free trial — full platform →
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-3">14-day free trial · No credit card required</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related tools */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            More free LinkedIn tools
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: "/tools/linkedin-profile-optimizer",
                icon: "🎯",
                title: "LinkedIn Profile Optimizer",
                desc: "Full AI audit of your profile with rewritten copy.",
              },
              {
                href: "/tools/linkedin-post-generator",
                icon: "✍️",
                title: "LinkedIn Post Generator",
                desc: "Generate complete posts with hook, body, and CTA.",
              },
              {
                href: "/tools/linkedin-dm-generator",
                icon: "💬",
                title: "LinkedIn DM Templates",
                desc: "25 proven DM templates organized by situation.",
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-2xl">{tool.icon}</span>
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">{tool.title}</div>
                  <div className="text-gray-500 text-xs">{tool.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-violet-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stop writing LinkedIn content from scratch.
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Spur AI generates complete LinkedIn posts, DMs, and profile copy — trained on your
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
                <li>
                  <Link
                    href="/tools/linkedin-headline-generator"
                    className="hover:text-white transition-colors"
                  >
                    Headline Generator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/linkedin-dm-generator"
                    className="hover:text-white transition-colors"
                  >
                    DM Templates
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

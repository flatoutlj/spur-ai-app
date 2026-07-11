import type { Metadata } from "next"
import Link from "next/link"
import DMTemplatesClient from "./DMTemplatesClient"

export const metadata: Metadata = {
  title: "25 LinkedIn Message Templates That Get Replies | Free DM Generator | Spur AI",
  description:
    "Copy 25 proven LinkedIn DM templates: connection requests, follow-ups, warm outreach, cold outreach, and follow-up sequences. Free resource for B2B sales and consultants.",
  keywords: [
    "linkedin message templates",
    "linkedin connection message",
    "linkedin dm generator",
    "linkedin outreach templates",
    "linkedin cold message",
    "linkedin follow up message",
  ],
  openGraph: {
    title: "25 LinkedIn DM Templates That Get Replies | Spur AI",
    description:
      "25 proven LinkedIn DM templates in 5 categories. Copy, paste, and personalize. Free for B2B professionals.",
    type: "website",
    url: "https://trispur.com/tools/linkedin-dm-generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "25 LinkedIn DM Templates That Get Replies",
    description: "Free LinkedIn message templates for connection requests, follow-ups, and cold outreach.",
  },
  alternates: { canonical: "https://trispur.com/tools/linkedin-dm-generator" },
}

const dmRules = [
  {
    number: "1",
    rule: "Never lead with your pitch",
    explanation:
      "The most common DM mistake is opening with what you do and what you offer. Nobody asked. Lead with something about them — their content, their company, their role — before you ever mention yourself.",
    bad: "Hi [Name], I'm a LinkedIn growth expert and I help consultants like you 3x their leads. Would you be open to a call?",
    good: "Hi [Name] — I saw your post about [topic] and it really resonated. I work in a similar space with [ICP]. Would love to connect.",
  },
  {
    number: "2",
    rule: "Make your ask small and specific",
    explanation:
      "Asking for a 'quick call' is too big an ask for a cold message. Ask for a reply, an opinion, or a piece of information first. Build micro-commitments before you ask for 30 minutes of their time.",
    bad: "Would you be open to a 30-minute discovery call to see if there's a fit?",
    good: "Quick question — is [pain point] something you're actively working on right now, or has that been solved?",
  },
  {
    number: "3",
    rule: "Personalize at least one detail",
    explanation:
      "Mass-templated DMs are instantly recognizable and instantly ignored. Reference something specific — a post they wrote, a company milestone, a mutual connection, or a role change. One specific detail is worth more than a perfectly written pitch.",
    bad: "Hi [Name], I noticed you're in the [industry] space. I help professionals like you achieve better results.",
    good: "Hi [Name] — Your post about [specific topic] from last week was spot on. Especially the part about [specific point] — that's exactly what I see with my clients too.",
  },
]

const thingsToAvoid = [
  "Sending a pitch in the same message as your connection request",
  "Writing more than 3 sentences in a first message",
  "Using 'I' more than 'you' in your message",
  "Asking for a call before you've had any exchange",
  "Automated messages that are obviously templated (no personal details)",
  "Starting with 'Hope this message finds you well'",
  "Attaching a deck, PDF, or link in a first message",
  "Following up more than 3 times without a response",
]

const faqs = [
  {
    question: "What is the ideal length for a LinkedIn DM?",
    answer:
      "For a first message, keep it under 100 words — ideally 50–75. Longer messages signal that you're going to ask for something big. The goal of the first DM is to get a reply, not to close a deal. Short messages with a clear, low-friction question outperform long pitches every time.",
  },
  {
    question: "Should I include a link in my LinkedIn DM?",
    answer:
      "Not in the first message. Links in cold DMs look like spam and trigger LinkedIn's spam filters. Build rapport first — ask a question, get a reply — then offer to send a resource if they show interest. Let them ask for the link; don't push it.",
  },
  {
    question: "How many follow-up messages should I send?",
    answer:
      "Send a maximum of 3 follow-ups after your initial message. If someone hasn't replied after 4 total messages, a break-up message (final follow-up) is your last move. Following up more than that crosses into harassment territory and damages your reputation.",
  },
  {
    question: "What is the best time to send a LinkedIn DM?",
    answer:
      "LinkedIn DMs don't have a strong time-of-day effect the way email does. Focus on quality and personalization rather than timing. That said, Tuesday–Thursday during business hours typically see slightly better response rates than weekends or Monday mornings.",
  },
  {
    question: "How do I personalize LinkedIn DMs at scale?",
    answer:
      "True personalization at scale requires systems: segment your prospects by profile type, build 2–3 templates per segment, and add one personalization token (their recent post, company milestone, or shared connection) per message. Spur AI's Growth plan includes a DM generator that pulls context from your prospect's profile and recent content to auto-personalize each message.",
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

export default function LinkedInDMGeneratorPage() {
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
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-teal-700 text-sm font-medium">
              25 free templates · 5 categories · Copy in one click
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
            LinkedIn Message Templates That Actually Get Replies
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">
            25 proven LinkedIn DM templates organized by situation — connection requests,
            follow-ups, warm outreach, cold outreach, and follow-up sequences. Copy, personalize,
            and send.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#templates"
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-base"
            >
              Browse all 25 templates →
            </a>
            <a
              href="#rules"
              className="border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors text-base"
            >
              The 3 DM rules ↓
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
                stat: "< 10%",
                label: "Average LinkedIn cold DM reply rate",
                sub: "These templates are designed to beat that benchmark significantly",
              },
              {
                stat: "3 lines",
                label: "Optimal cold DM length",
                sub: "Short messages outperform long pitches in virtually every test",
              },
              {
                stat: "1 detail",
                label: "Personalization needed to 2x reply rates",
                sub: "Even one specific detail transforms a template into a conversation",
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

      {/* Templates */}
      <section id="templates" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              25 LinkedIn DM Templates
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Filter by category to find the right template for your situation. Every template
              includes the situation it&apos;s for and why it works.
            </p>
          </div>
          <DMTemplatesClient />
        </div>
      </section>

      {/* 3 Rules */}
      <section id="rules" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            The 3 rules of LinkedIn DMs that don&apos;t get ignored
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-10">
            Most LinkedIn DMs fail for one of three reasons. Master these rules and your reply
            rate will be in the top 10%.
          </p>
          <div className="space-y-6">
            {dmRules.map((rule) => (
              <div
                key={rule.number}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {rule.number}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{rule.rule}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{rule.explanation}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                    <div className="text-xs font-semibold text-red-500 mb-2 uppercase tracking-wide">
                      Bad example
                    </div>
                    <p className="text-sm text-gray-600 italic">{rule.bad}</p>
                  </div>
                  <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                    <div className="text-xs font-semibold text-green-600 mb-2 uppercase tracking-wide">
                      Good example
                    </div>
                    <p className="text-sm text-gray-800">{rule.good}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What NOT to say */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            What NOT to say in LinkedIn DMs
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-8">
            These 8 patterns will get your message ignored (or get you reported as spam).
          </p>
          <div className="bg-red-50 border border-red-100 rounded-2xl p-7">
            <ul className="space-y-3">
              {thingsToAvoid.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA mid-page */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Want AI-personalized DMs for each prospect?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            These templates are a starting point. Spur AI&apos;s Growth plan generates
            personalized DMs for each prospect — pulling from their LinkedIn profile, recent
            posts, and company details automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Start free trial — AI-personalized DMs →
            </Link>
            <Link
              href="/pricing"
              className="border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              See pricing →
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
                  Generate a full LinkedIn post with hook, body, and CTA in one click.
                </div>
              </div>
            </Link>
            <Link
              href="/tools/linkedin-headline-generator"
              className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-3xl">🎯</span>
              <div>
                <div className="font-semibold text-gray-900 mb-1">
                  LinkedIn Headline Generator
                </div>
                <div className="text-gray-500 text-sm">
                  Generate 5 headline formulas that attract your ideal client.
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
            Turn LinkedIn conversations into clients.
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Spur AI generates AI-personalized LinkedIn posts, DMs, and profile copy — trained on
            your voice and your niche. Start converting connections into conversations today.
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

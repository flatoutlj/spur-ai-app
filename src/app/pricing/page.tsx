import type { Metadata } from "next"
import Pricing from "@/components/landing/Pricing"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pricing — LinkedIn AI Content Tool | Spur AI",
  description:
    "Spur AI pricing: Starter $149/mo, Growth $249/mo, Agency $449/mo. 14-day free trial, no credit card required. One closed deal pays for a full year.",
  keywords: [
    "linkedin ai tool pricing",
    "spur ai pricing",
    "linkedin content tool cost",
    "linkedin post generator price",
  ],
  openGraph: {
    title: "Spur AI Pricing",
    description: "14-day free trial. Cancel anytime.",
    type: "website",
    url: "https://trispur.com/pricing",
  },
  alternates: { canonical: "https://trispur.com/pricing" },
}

const faqs = [
  {
    question: "How long is the free trial?",
    answer:
      "Your free trial lasts 14 days with full access to all features on your chosen plan. No credit card is required to start. At the end of 14 days, you can choose to subscribe or cancel — no questions asked.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can cancel your subscription at any time from your account settings. There are no cancellation fees and no long-term contracts. If you cancel, you keep access until the end of your billing period.",
  },
  {
    question: "What's included in every plan?",
    answer:
      "Every plan includes AI-generated LinkedIn posts, content frameworks, a hooks library, content calendar, and post history. Growth and Agency plans unlock unlimited posts, advanced analytics, the DM generator, and profile optimizer.",
  },
  {
    question: "Is there an annual discount?",
    answer:
      "Yes — annual billing saves you 20% compared to monthly. On the Starter plan that's $119/mo (vs $149/mo). On Growth it's $199/mo (vs $249/mo). On Agency it's $359/mo (vs $449/mo). You're billed once per year.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee on your first payment. If Spur AI isn't right for you within the first 30 days of your paid subscription, email hello@trispur.com and we'll refund your payment in full.",
  },
  {
    question: "Do you offer team or agency plans?",
    answer:
      "Yes — the Agency plan supports up to 5 team members or client seats, each with their own brand voice profile, content calendar, and white-label post output. Need more than 5 seats? Email hello@trispur.com for a custom quote.",
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

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            <span className="font-bold text-gray-900">Spur AI</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/free-tools"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors px-4 py-2 hidden sm:block"
            >
              Free Tools
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Start free trial
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Hero */}
        <div className="text-center pt-16 pb-4 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-blue-700 text-sm font-medium">
              14-day free trial · No credit card required
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            One closed deal from LinkedIn pays for Spur AI for an entire year. Start with a
            14-day free trial — no credit card needed.
          </p>
        </div>

        {/* Pricing component */}
        <Pricing />

        {/* Trust signals */}
        <section className="py-10 px-4 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              {[
                {
                  label: "One deal closes it",
                  desc: "The average B2B consultant closes deals worth $5K–$50K. Spur AI pays for itself with a single client.",
                },
                {
                  label: "30-day money back",
                  desc: "Not happy in the first 30 days of your paid plan? Email us for a full refund — no questions.",
                },
                {
                  label: "Cancel anytime",
                  desc: "No long-term contracts. Cancel from your account settings at any time, effective end of billing period.",
                },
              ].map((item) => (
                <div key={item.label} className="p-5">
                  <div className="text-green-500 font-bold text-sm mb-1">✓ {item.label}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center text-sm text-gray-500">
              Still have questions?{" "}
              <a
                href="mailto:hello@trispur.com"
                className="text-blue-600 hover:underline font-medium"
              >
                Email hello@trispur.com
              </a>{" "}
              — we reply within one business day.
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-violet-700">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to start generating leads on LinkedIn?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Join consultants and agency owners using Spur AI to turn LinkedIn into their
              top lead source — without posting every day themselves.
            </p>
            <Link
              href="/signup"
              className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-full hover:bg-blue-50 transition-colors text-lg"
            >
              Start your 14-day free trial →
            </Link>
            <p className="text-blue-200 text-sm mt-4">
              No credit card required · Cancel anytime
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
    </div>
  )
}

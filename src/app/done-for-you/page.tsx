import type { Metadata } from "next"
import Link from "next/link"
import EmailCaptureBar from "@/components/tools/EmailCaptureBar"

export const metadata: Metadata = {
  title: "Done-For-You LinkedIn Content for B2B Consultants & Agencies | Spur AI",
  description:
    "We write your LinkedIn content, you approve and post. 10–12 client-attracting posts a month, done for you — at a fraction of what a ghostwriter charges. Apply for early access.",
  keywords: [
    "done for you linkedin content",
    "linkedin ghostwriting service",
    "linkedin content service for consultants",
    "b2b linkedin content agency",
  ],
  openGraph: {
    title: "Done-For-You LinkedIn Content for B2B Consultants & Agencies",
    description:
      "We write, you approve, clients come. 10–12 posts a month at a fraction of a ghostwriter's price. Apply for early access.",
    type: "website",
    url: "https://www.trispur.com/done-for-you",
    siteName: "Spur AI",
  },
  alternates: { canonical: "https://www.trispur.com/done-for-you" },
}

const STEPS = [
  { n: "1", title: "30-minute voice call", body: "We learn your niche, your offers, your point of view, and the clients you want to attract." },
  { n: "2", title: "We draft 10–12 posts/month", body: "Our AI engine + a human editor produce a month of posts in your voice, engineered to start conversations with buyers." },
  { n: "3", title: "You approve, we schedule", body: "Review in one sitting. Approved posts go live on your schedule. You stay consistent without writing a word." },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Done-For-You LinkedIn Content",
  provider: { "@type": "Organization", name: "Spur AI", url: "https://www.trispur.com" },
  description:
    "Done-for-you LinkedIn content service for B2B consultants, coaches, and agency owners. We write client-attracting posts; you approve and publish.",
  areaServed: "Worldwide",
}

export default function DoneForYouPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="font-bold text-gray-900 text-sm">Spur AI</span>
            </Link>
            <a href="#apply" className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
              Apply for early access
            </a>
          </div>
        </nav>

        <main className="pt-14">
          <section className="px-4 py-16 text-center bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-3 py-1 text-xs text-blue-700 font-medium mb-6">
                Limited early-access cohort
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                We write your LinkedIn content. You get the clients.
              </h1>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Done-for-you LinkedIn content for B2B consultants, coaches, and agency owners. 10–12 client-attracting posts a month, written in your voice — at a fraction of what a ghostwriter charges.
              </p>
              <a href="#apply" className="inline-block gradient-bg text-white font-bold px-10 py-4 rounded-full hover:opacity-90 transition-opacity text-lg">
                Apply for early access →
              </a>
              <p className="text-gray-400 text-xs mt-3">No commitment — see if you're a fit first.</p>
            </div>
          </section>

          <section className="px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">How it works</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {STEPS.map((s) => (
                  <div key={s.n} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                    <div className="w-9 h-9 rounded-full gradient-bg text-white font-bold flex items-center justify-center mb-3">{s.n}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-12 bg-gray-50">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why not just hire a ghostwriter?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                A LinkedIn ghostwriter runs $1,500–$3,000/month. Our AI-assisted model delivers the same posting cadence — reviewed by a human for quality and voice — for a fraction of the price. You get consistency and client-attracting content without the retainer or the writing.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                {[
                  ["Traditional ghostwriter", "$1,500–$3,000/mo", "text-gray-500"],
                  ["Spur AI done-for-you", "A fraction of that", "text-blue-700 font-semibold"],
                  ["Writing it yourself", "5+ hours/week", "text-gray-500"],
                ].map(([label, val, cls]) => (
                  <div key={label} className="bg-white border border-gray-100 rounded-xl p-4">
                    <div className="text-gray-400 text-xs mb-1">{label}</div>
                    <div className={cls}>{val}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="apply" className="px-4 py-16">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Apply for early access</h2>
              <p className="text-gray-500 mb-6 text-sm">
                We're onboarding a small first cohort. Drop your email and we'll reach out to see if you're a fit — no commitment.
              </p>
              <EmailCaptureBar
                source="dfy-inquiry"
                prompt="Enter your email and we'll be in touch about done-for-you content:"
              />
              <p className="text-gray-400 text-xs mt-4">
                Prefer email? Reach us at{" "}
                <a href="mailto:hello@trispur.com?subject=Done-For-You%20LinkedIn%20Content" className="text-blue-600 hover:underline">
                  hello@trispur.com
                </a>
              </p>
            </div>
          </section>

          <section className="px-4 py-12 bg-gradient-to-br from-blue-600 to-violet-700">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl font-bold text-white mb-2">Want to do it yourself instead?</h2>
              <p className="text-blue-100 text-sm mb-5">
                Prefer to write your own with AI help? Try our free tools, or grab the $29 content pack to start today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/free-tools" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-sm">
                  Try the free tools
                </Link>
                <Link href="/pack" className="border border-blue-400/50 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
                  Get the $29 pack
                </Link>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-xs">
          <p>© 2026 Spur AI · <Link href="/" className="hover:text-white">trispur.com</Link> · <a href="mailto:hello@trispur.com" className="hover:text-white">hello@trispur.com</a></p>
        </footer>
      </div>
    </>
  )
}

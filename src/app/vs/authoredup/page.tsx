import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Spur AI vs AuthoredUp: Which LinkedIn Tool Is Better? (2026)",
  description:
    "AuthoredUp is a great formatting and analytics tool — but it doesn't write your content. See how Spur AI compares for B2B professionals who want AI to generate posts, not just format them.",
  keywords: [
    "spur ai vs authoredup",
    "authoredup alternative",
    "authoredup competitors",
    "authoredup vs",
    "best linkedin writing tool",
  ],
  openGraph: {
    title: "Spur AI vs AuthoredUp: Which LinkedIn Tool Is Better? (2026)",
    description:
      "AuthoredUp formats and analyzes. Spur AI generates. Here's the full comparison for B2B professionals.",
    type: "article",
    url: "https://www.trispur.com/vs/authoredup",
  },
  alternates: { canonical: "https://www.trispur.com/vs/authoredup" },
}

const COMPARISON = [
  {
    feature: "Core function",
    spurAI: "AI generates finished posts, hooks, DMs, bios & headlines from scratch",
    other: "Formats, previews & analyzes posts you write yourself",
    winner: "spur",
  },
  {
    feature: "AI content generation",
    spurAI: "Yes — powered by the latest Claude models, calibrated for B2B",
    other: "No — you still write every post yourself",
    winner: "spur",
  },
  {
    feature: "Formatting & preview",
    spurAI: "Copy-ready output; clean formatting built in",
    other: "Excellent — its core strength, with rich text and previews",
    winner: "other",
  },
  {
    feature: "Post analytics",
    spurAI: "Available on paid plans",
    other: "Strong — detailed post performance analytics",
    winner: "other",
  },
  {
    feature: "B2B lead-gen focus",
    spurAI: "Built specifically for consultants, coaches & agencies",
    other: "General-purpose writing assistant",
    winner: "spur",
  },
  {
    feature: "Free tools without signup",
    spurAI: "7 free tools, no signup required",
    other: "Free trial, then paid",
    winner: "spur",
  },
  {
    feature: "Entry price",
    spurAI: "Free tools · paid from $19/mo",
    other: "From ~$19.95/mo",
    winner: "tie",
  },
  {
    feature: "Best for",
    spurAI: "People who want AI to write great content for them",
    other: "People who already write well and want to format & measure it",
    winner: "tie",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Spur AI vs AuthoredUp: Which LinkedIn Tool Is Better? (2026)",
  description:
    "AuthoredUp formats and analyzes your LinkedIn posts. Spur AI generates them with AI. A full comparison for B2B professionals.",
  url: "https://www.trispur.com/vs/authoredup",
  datePublished: "2026-07-12",
  dateModified: "2026-07-12",
  publisher: { "@type": "Organization", name: "Spur AI", url: "https://www.trispur.com" },
  author: { "@type": "Organization", name: "Spur AI" },
}

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does AuthoredUp write LinkedIn posts for you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. AuthoredUp is a formatting, preview, and analytics tool — it helps you polish and measure posts you write yourself, but it doesn't generate content with AI. If you want a tool that writes finished posts from scratch, you need an AI generator like Spur AI.",
      },
    },
    {
      "@type": "Question",
      name: "What's the best AuthoredUp alternative?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your need. If you want the same formatting-and-analytics workflow, alternatives are limited. But if the real problem is that writing content consistently is hard, an AI generator like Spur AI is a better fit — it produces posts, hooks, DMs, and headlines for you, with 7 free tools to try before paying.",
      },
    },
  ],
}

export default function VsAuthoredUpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="min-h-screen bg-white">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="font-bold text-gray-900 text-sm">Spur AI</span>
            </Link>
            <Link href="/free-tools" className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
              Try free tools
            </Link>
          </div>
        </nav>

        <main className="pt-14">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Spur AI vs AuthoredUp: Which Is Right for You?
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                They solve different problems. AuthoredUp helps you <em>format and measure</em> posts you write. Spur AI <em>writes the posts for you</em>. Here's how to choose.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-md gradient-bg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">S</span>
                  </div>
                  <span className="font-bold text-gray-900 text-sm">Spur AI</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  An AI content engine that generates LinkedIn posts, hooks, DMs, bios, and headlines — built for B2B consultants, coaches, and agencies. Try 7 tools free, no signup.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">A</span>
                  </div>
                  <span className="font-bold text-gray-900 text-sm">AuthoredUp</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  A polished Chrome extension for drafting, formatting, previewing, and analyzing LinkedIn posts. Great for writers who want to polish and measure — but you still write everything yourself.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Side-by-side comparison</h2>
              <div className="overflow-x-auto rounded-2xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left p-4 font-semibold text-gray-700 w-1/4">Feature</th>
                      <th className="text-left p-4 font-semibold text-blue-700 w-[37.5%]">Spur AI</th>
                      <th className="text-left p-4 font-semibold text-gray-700 w-[37.5%]">AuthoredUp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row, i) => (
                      <tr key={row.feature} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                        <td className="p-4 font-medium text-gray-900 text-xs">{row.feature}</td>
                        <td className="p-4">
                          <div className="flex items-start gap-2">
                            {row.winner === "spur" && <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">✓</span>}
                            <span className={`text-xs text-gray-700 leading-relaxed ${row.winner === "spur" ? "font-medium" : ""}`}>{row.spurAI}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-start gap-2">
                            {row.winner === "other" && <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">✓</span>}
                            <span className={`text-xs text-gray-600 leading-relaxed ${row.winner === "other" ? "font-medium" : ""}`}>{row.other}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-3">The honest verdict</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                These tools aren't really competitors — they're complementary. <strong>AuthoredUp is the best-in-class formatter and analytics tool</strong> if you already write well and just want to polish and measure your posts.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                But if your real bottleneck is <em>producing</em> content consistently — the blank-page problem — then AuthoredUp doesn't solve it. That's where <strong>Spur AI</strong> comes in: it generates the posts, hooks, and DMs for you, so you always have something to format. Many people use an AI generator to write and a formatter to polish. If you can only pick one and you struggle to write consistently, start with the tool that writes.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Does AuthoredUp write LinkedIn posts for you?",
                    a: "No. AuthoredUp formats, previews, and analyzes posts you write yourself — it doesn't generate content with AI. For AI-written posts from scratch, you need a generator like Spur AI.",
                  },
                  {
                    q: "What's the best AuthoredUp alternative?",
                    a: "If you want the same formatting-and-analytics workflow, options are limited. But if the real problem is writing consistently, an AI generator like Spur AI is a better fit — it produces posts, hooks, DMs, and headlines for you, with 7 free tools to try first.",
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="border border-gray-100 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-2 text-sm">{q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-violet-700 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Try the tool that writes it for you</h2>
              <p className="text-blue-100 mb-6 text-sm">
                Generate a LinkedIn post, DM, or headline in seconds — no signup, no credit card. Judge the quality yourself.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/free-tools" className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-sm">
                  Try the free tools →
                </Link>
                <Link href="/pricing" className="border border-blue-400/50 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
                  See plans from $19/mo
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-3">Compare other tools:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Spur AI vs Taplio", href: "/vs/taplio" },
                  { label: "Spur AI vs Supergrow", href: "/vs/supergrow" },
                  { label: "Spur AI vs ChatGPT", href: "/vs/chatgpt" },
                  { label: "Best LinkedIn AI Tools", href: "/blog/best-linkedin-ai-tools" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="text-sm text-blue-600 hover:text-blue-800 underline underline-offset-2">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

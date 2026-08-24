import type { Metadata } from "next"
import Link from "next/link"
import CarouselGeneratorClient from "./CarouselGeneratorClient"
import EmailCaptureBar from "@/components/tools/EmailCaptureBar"
import PackBanner from "@/components/tools/PackBanner"

export const metadata: Metadata = {
  title: "Free LinkedIn Carousel Generator (AI, No Signup) | Spur AI",
  description:
    "Generate a scroll-stopping 7-slide LinkedIn carousel in seconds with AI. Free, no signup. Built for B2B consultants, coaches, and agency owners who want engagement that converts.",
  keywords: [
    "linkedin carousel generator",
    "linkedin carousel maker",
    "ai linkedin carousel",
    "linkedin carousel ideas",
    "linkedin document post generator",
  ],
  openGraph: {
    title: "Free LinkedIn Carousel Generator (AI, No Signup)",
    description:
      "Generate a 7-slide LinkedIn carousel in seconds with AI. Free, no signup. For B2B consultants, coaches, and agencies.",
    type: "website",
    url: "https://www.trispur.com/tools/linkedin-carousel-generator",
    siteName: "Spur AI",
  },
  alternates: { canonical: "https://www.trispur.com/tools/linkedin-carousel-generator" },
}

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are LinkedIn carousels good for engagement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Carousel (document) posts are among the highest-engagement formats on LinkedIn because they're interactive — people swipe through, which increases dwell time, a signal the algorithm rewards. They're especially effective for tactical, list-based, or step-by-step content.",
      },
    },
    {
      "@type": "Question",
      name: "How many slides should a LinkedIn carousel have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "7–10 slides is the sweet spot. Enough to deliver real value, short enough to keep people swiping to the end. Start with a strong hook cover slide, deliver one idea per slide, and finish with a clear call to action. This free tool generates a proven 7-slide structure.",
      },
    },
    {
      "@type": "Question",
      name: "How do I turn the generated slides into a real carousel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Copy the slides, then paste each into a design in Canva (search 'LinkedIn carousel' templates), Google Slides, or PowerPoint — one slide per page. Export as a PDF and upload it to LinkedIn as a document post. The tool gives you the copy; the design takes about 10 minutes.",
      },
    },
  ],
}

export default function CarouselGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="min-h-screen bg-white">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="font-bold text-gray-900 text-sm">Spur AI</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/free-tools" className="text-gray-500 text-sm hover:text-gray-800">Free tools</Link>
              <Link href="/signup" className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                Start free trial
              </Link>
            </div>
          </div>
        </nav>

        <main className="pt-14">
          <section className="py-16 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-3 py-1 text-xs text-blue-700 font-medium mb-6">
                Free tool · No signup required
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Free LinkedIn Carousel Generator
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                Carousels are the highest-engagement format on LinkedIn. Generate a scroll-stopping 7-slide carousel in seconds — built for B2B consultants, coaches, and agency owners.
              </p>
            </div>
          </section>

          <section className="py-8 px-4">
            <div className="max-w-3xl mx-auto">
              <CarouselGeneratorClient />
              <div className="mt-6">
                <EmailCaptureBar source="tool-carousel-generator" prompt="Get 10 carousel frameworks + weekly LinkedIn growth tips — free." />
              </div>
            </div>
          </section>

          {/* Content pack cross-sell */}
          <PackBanner />

          <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to post your carousel on LinkedIn</h2>
              <ol className="space-y-3 max-w-xl mx-auto">
                {[
                  "Generate your slides above and click 'Copy all slides.'",
                  "Open Canva (search 'LinkedIn carousel'), Google Slides, or PowerPoint — one slide per page.",
                  "Paste each slide's heading and body, then style it with your brand colors.",
                  "Export as a PDF.",
                  "On LinkedIn, click 'Add a document' and upload the PDF. Add a short caption with a hook.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-bg text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="py-12 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Are LinkedIn carousels good for engagement?",
                    a: "Yes. Carousel (document) posts are among the highest-engagement formats on LinkedIn because they're interactive — swiping increases dwell time, which the algorithm rewards. They're ideal for tactical, list-based, or step-by-step content.",
                  },
                  {
                    q: "How many slides should a LinkedIn carousel have?",
                    a: "7–10 slides is the sweet spot — enough to deliver value, short enough to keep people swiping. Start with a hook cover slide, one idea per slide, and finish with a CTA. This tool generates a proven 7-slide structure.",
                  },
                  {
                    q: "How do I turn the slides into a real carousel?",
                    a: "Copy the slides, paste each into Canva, Google Slides, or PowerPoint (one per page), export as a PDF, and upload it to LinkedIn as a document post. The tool writes the copy; design takes about 10 minutes.",
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="border border-gray-100 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-2 text-base">{q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 px-4">
            <div className="max-w-2xl mx-auto">
              <p className="text-sm text-gray-500 mb-3 text-center">More free tools:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  { label: "Post Generator", href: "/tools/linkedin-post-generator" },
                  { label: "Hooks Library", href: "/tools/linkedin-hooks" },
                  { label: "Headline Generator", href: "/tools/linkedin-headline-generator" },
                  { label: "DM Generator", href: "/tools/linkedin-dm-generator" },
                  { label: "Profile Optimizer", href: "/tools/linkedin-profile-optimizer" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="text-sm text-blue-600 hover:text-blue-800 underline underline-offset-2">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

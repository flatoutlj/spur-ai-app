import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "12 LinkedIn Carousel Post Ideas That Get Saved & Shared (2026)",
  description:
    "12 proven LinkedIn carousel frameworks for B2B professionals — with slide-by-slide structures. Plus a free AI tool that builds your carousel in seconds.",
  keywords: [
    "linkedin carousel post ideas",
    "linkedin carousel ideas",
    "linkedin carousel examples",
    "linkedin carousel templates",
    "linkedin document post ideas",
  ],
  openGraph: {
    title: "12 LinkedIn Carousel Post Ideas That Get Saved & Shared (2026)",
    description:
      "12 proven LinkedIn carousel frameworks with slide-by-slide structures — plus a free AI carousel generator.",
    type: "article",
    url: "https://trispur.com/blog/linkedin-carousel-post-ideas",
    siteName: "Spur AI",
  },
  alternates: { canonical: "https://trispur.com/blog/linkedin-carousel-post-ideas" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "12 LinkedIn Carousel Post Ideas That Get Saved & Shared (2026)",
  description:
    "12 proven LinkedIn carousel frameworks for B2B professionals — with slide-by-slide structures.",
  url: "https://trispur.com/blog/linkedin-carousel-post-ideas",
  datePublished: "2026-07-12",
  dateModified: "2026-07-12",
  publisher: { "@type": "Organization", name: "Spur AI", url: "https://trispur.com" },
  author: { "@type": "Organization", name: "Spur AI" },
}

const IDEAS = [
  { title: "The Mistake List", hook: "5 [X] mistakes costing you [outcome]", structure: "Cover: the bold claim → 1 mistake per slide with the fix → CTA: which one are you making?" },
  { title: "The Step-by-Step", hook: "How to [result] in [N] steps", structure: "Cover: the promise → one step per slide, tactical → CTA: save this to try it." },
  { title: "The Before/After", hook: "How I took [metric] from X to Y", structure: "Cover: the transformation → the situation → the moves → the result → CTA." },
  { title: "The Framework Reveal", hook: "The [name] framework I use for [goal]", structure: "Cover: name the framework → one component per slide → example → CTA." },
  { title: "The Myth-Buster", hook: "[N] myths about [topic] — debunked", structure: "Cover: promise → myth vs. truth per slide → CTA: which surprised you?" },
  { title: "The Checklist", hook: "The [N]-point checklist for [outcome]", structure: "Cover → grouped checklist items across slides → CTA: how many did you hit?" },
  { title: "The Contrarian Take", hook: "Unpopular opinion: [belief] is wrong", structure: "Cover: the take → why conventional wisdom fails → what to do instead → CTA." },
  { title: "The Tool/Resource Roundup", hook: "[N] tools that 10x'd my [output]", structure: "Cover → one tool per slide with the specific use case → CTA: what did I miss?" },
  { title: "The Lessons Learned", hook: "[N] lessons from [experience]", structure: "Cover → one lesson per slide, personal → CTA: which resonates?" },
  { title: "The Comparison", hook: "[Option A] vs [Option B]: which wins?", structure: "Cover → criteria per slide with the verdict → recommendation → CTA." },
  { title: "The Data Story", hook: "I analyzed [N] [things]. Here's what I found", structure: "Cover: the study → one finding per slide → the takeaway → CTA." },
  { title: "The Swipe File", hook: "Steal these [N] [templates/hooks/scripts]", structure: "Cover: the promise → one copy-paste asset per slide → CTA: save + follow." },
]

export default function CarouselPostIdeasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="font-bold text-gray-900 text-sm">Spur AI</span>
            </Link>
            <Link href="/tools/linkedin-carousel-generator" className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
              Free carousel generator
            </Link>
          </div>
        </nav>

        <main className="pt-14">
          <div className="max-w-3xl mx-auto px-4 py-12">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-pink-50 text-pink-700 border border-pink-200 text-xs font-medium px-2.5 py-0.5 rounded-full">Content Ideas</span>
                <span className="text-xs text-gray-400">8 min read · ~3,500 searches/mo</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                12 LinkedIn Carousel Post Ideas That Get Saved &amp; Shared
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                Carousels (document posts) are the highest-engagement format on LinkedIn — people swipe, which boosts dwell time and reach. Here are 12 proven frameworks with slide-by-slide structures, plus a free tool that builds one for you in seconds.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-10">
              <p className="text-sm text-blue-800 font-medium mb-1">Skip the blank canvas</p>
              <p className="text-sm text-blue-600 mb-3">Our free AI Carousel Generator turns any topic into a ready-to-design 7-slide carousel. No signup.</p>
              <Link href="/tools/linkedin-carousel-generator" className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Build my carousel free →
              </Link>
            </div>

            <article className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why carousels outperform text posts</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                LinkedIn rewards dwell time — how long someone spends on your post. A text post is read in seconds; a good carousel keeps someone swiping for 20–40 seconds. That signals value to the algorithm, which expands your reach. Carousels also get saved and shared more than any other format, because they package genuinely useful information into a portable, skimmable asset.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">12 carousel frameworks (with slide structures)</h2>
              <div className="not-prose space-y-4">
                {IDEAS.map((idea, i) => (
                  <div key={i} className="border border-gray-200 rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full gradient-bg text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
                      <h3 className="font-bold text-gray-900">{idea.title}</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-1"><span className="font-semibold">Hook:</span> <span className="font-mono">{idea.hook}</span></p>
                    <p className="text-sm text-gray-600"><span className="font-semibold">Structure:</span> {idea.structure}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The anatomy of a carousel that performs</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li><strong>Slide 1 (cover):</strong> A bold, curiosity-driving title. This is your hook — it decides whether anyone swipes.</li>
                <li><strong>Slides 2–6 (body):</strong> One idea per slide. Big heading, 1–2 tight sentences. No walls of text.</li>
                <li><strong>Final slide (CTA):</strong> A takeaway plus a clear ask — follow, comment, or save.</li>
                <li><strong>Design:</strong> Consistent colors, large readable fonts, plenty of white space. Canva has free LinkedIn carousel templates.</li>
                <li><strong>Caption:</strong> Open with a one-line hook that repeats the promise, then "swipe →".</li>
              </ul>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-8 not-prose">
                <p className="text-sm font-bold text-gray-900 mb-1">Want 10 more frameworks + the copy done for you?</p>
                <p className="text-sm text-gray-600 mb-3">The $29 Content Pack includes carousel frameworks, 200+ hooks, 8 DM scripts, and a 30-day content calendar.</p>
                <Link href="/pack" className="inline-block bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
                  Get the pack — $29 →
                </Link>
              </div>
            </article>

            <div className="mt-12 bg-gradient-to-br from-blue-600 to-violet-700 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Generate your next carousel in 30 seconds</h2>
              <p className="text-blue-100 mb-6 text-sm">Pick a framework, enter your topic, and let AI write all 7 slides. Free, no signup.</p>
              <Link href="/tools/linkedin-carousel-generator" className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-sm">
                Try the free carousel generator →
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-3">Related guides:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "50 LinkedIn Post Ideas", href: "/blog/linkedin-post-ideas" },
                  { label: "LinkedIn Post Templates", href: "/blog/linkedin-post-templates" },
                  { label: "How the LinkedIn Algorithm Works", href: "/blog/linkedin-algorithm" },
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

import type { Metadata } from "next"
import Link from "next/link"

const BUY_URL = "https://buy.stripe.com/8x228k8il3An27r3vl4gg00"

export const metadata: Metadata = {
  title: "12 LinkedIn Post Templates That Get Engagement (Copy-Paste, 2026)",
  description:
    "12 free copy-paste LinkedIn post templates for B2B professionals — story, contrarian, how-to, results, and more. Fill in the blanks and post in minutes.",
  keywords: [
    "linkedin post templates",
    "linkedin post template",
    "linkedin content templates",
    "linkedin post examples",
    "copy paste linkedin posts",
  ],
  openGraph: {
    title: "12 LinkedIn Post Templates That Get Engagement (2026)",
    description:
      "12 free copy-paste LinkedIn post templates for B2B professionals. Fill in the blanks and post in minutes.",
    type: "article",
    url: "https://trispur.com/blog/linkedin-post-templates",
    siteName: "Spur AI",
  },
  alternates: { canonical: "https://trispur.com/blog/linkedin-post-templates" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "12 LinkedIn Post Templates That Get Engagement (Copy-Paste, 2026)",
  description:
    "12 free copy-paste LinkedIn post templates for B2B professionals — story, contrarian, how-to, results, and more.",
  url: "https://trispur.com/blog/linkedin-post-templates",
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  publisher: { "@type": "Organization", name: "Spur AI", url: "https://trispur.com" },
  author: { "@type": "Organization", name: "Spur AI" },
}

const TEMPLATES = [
  {
    type: "The Lesson Learned",
    when: "Building trust & relatability",
    body: `[Surprising outcome or mistake — one line].

Here's what happened:

[2–3 sentences of context and what went wrong/right].

The lesson:

[The one insight your reader can apply].

[Question that invites them to share their own experience]`,
  },
  {
    type: "The Contrarian Take",
    when: "Reach & standing out",
    body: `Unpopular opinion: [common belief in your niche] is wrong.

Everyone says [conventional wisdom].

But here's what I've actually seen:

[Your evidence — a result, a pattern, an example].

[What to do instead].

Agree or disagree?`,
  },
  {
    type: "The How-To",
    when: "Demonstrating expertise",
    body: `How to [achieve result] in [timeframe] — even if [common obstacle]:

1. [Step one — specific and actionable]
2. [Step two]
3. [Step three]
4. [Step four]

[One line on the outcome they'll get].

Save this for later. 🔖`,
  },
  {
    type: "The Client Result",
    when: "Attracting leads",
    body: `A client came to me [starting situation].

[Timeframe] later: [specific result].

Here's the exact playbook:

→ [Move 1]
→ [Move 2]
→ [Move 3]

The takeaway for you: [generalizable principle].`,
  },
  {
    type: "The List Post",
    when: "Saves & shares",
    body: `[N] things I wish I knew before [milestone]:

1. [Counterintuitive lesson]
2. [Counterintuitive lesson]
3. [Counterintuitive lesson]
4. [Counterintuitive lesson]
5. [Counterintuitive lesson]

Which one hit hardest?`,
  },
  {
    type: "The Myth-Buster",
    when: "Authority",
    body: `"[Common myth]."

I hear this all the time. It's costing [ICP] [specific cost].

Here's the truth:

[The reality, backed by your experience].

[What to do with this].`,
  },
]

export default function LinkedInPostTemplatesPage() {
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
            <div className="flex items-center gap-3">
              <Link href="/blog" className="text-gray-500 text-sm hover:text-gray-800">Blog</Link>
              <Link href="/tools/linkedin-post-generator" className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                Free post generator
              </Link>
            </div>
          </div>
        </nav>

        <main className="pt-14">
          <div className="max-w-3xl mx-auto px-4 py-12">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-yellow-50 text-yellow-700 border border-yellow-200 text-xs font-medium px-2.5 py-0.5 rounded-full">Templates</span>
                <span className="text-xs text-gray-400">7 min read · ~14,000 searches/mo</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                12 LinkedIn Post Templates That Get Engagement (Copy-Paste)
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                Staring at a blank composer is the #1 reason people stop posting. These fill-in-the-blank templates remove that friction — pick a format, swap the brackets for your specifics, and publish in minutes.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-10">
              <p className="text-sm text-blue-800 font-medium mb-1">Prefer the AI to fill them in for you?</p>
              <p className="text-sm text-blue-600 mb-3">Our free LinkedIn Post Generator turns any of these formats into a finished post in ~10 seconds. No signup.</p>
              <Link href="/tools/linkedin-post-generator" className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Generate a post free →
              </Link>
            </div>

            <article className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to use these templates</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Each template maps to a specific goal — trust, reach, authority, or lead generation. Rotate through them so your feed doesn't feel repetitive. Anything in [brackets] is your cue to add specifics: the more concrete and personal, the better it performs.
              </p>

              <div className="not-prose space-y-6">
                {TEMPLATES.map((t, i) => (
                  <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                    <div className="flex items-center justify-between bg-gray-50 px-5 py-3 border-b border-gray-100">
                      <h3 className="font-bold text-gray-900 text-sm">{i + 1}. {t.type}</h3>
                      <span className="text-xs text-gray-500">Best for: {t.when}</span>
                    </div>
                    <pre className="p-5 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap font-sans">{t.body}</pre>
                  </div>
                ))}
              </div>

              {/* Pack upsell */}
              <div className="not-prose my-10 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📦</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Want all 200+ templates, hooks &amp; scripts?</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      The LinkedIn Founder Content Pack gives you 200+ hooks, these 12 templates plus dozens more, 8 DM scripts, 40 headline formulas, and a plug-and-play 30-day content calendar. One-time $29, instant access.
                    </p>
                    <a href={BUY_URL} className="inline-block gradient-bg text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
                      Get the pack — $29 →
                    </a>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3 rules that make any template perform</h2>
              <ol className="list-decimal list-inside text-gray-600 mb-6 space-y-2">
                <li><strong>The first line is everything.</strong> It's the only part that shows before "see more." Make it stop the scroll.</li>
                <li><strong>Be specific, not generic.</strong> "$40K mistake" beats "a costly mistake." Real numbers and details build trust.</li>
                <li><strong>End with one clear ask.</strong> A question, a "save this," or a soft CTA — give readers a reason to engage.</li>
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently asked questions</h2>
              <div className="not-prose space-y-4">
                {[
                  {
                    q: "How often should I post on LinkedIn?",
                    a: "3–5 times per week is the sweet spot for most B2B professionals. Consistency matters more than volume — one great post 4x a week beats 7 rushed ones. Batch-write them using these templates to stay consistent without daily effort.",
                  },
                  {
                    q: "Do copy-paste templates hurt reach?",
                    a: "No — as long as you personalize them. The template is the structure; your specifics are the substance. LinkedIn's algorithm rewards engagement, and well-structured posts with genuine detail get more of it.",
                  },
                  {
                    q: "What's the best type of LinkedIn post for getting clients?",
                    a: "Client-result and how-to posts convert best for lead generation because they demonstrate outcomes and expertise. Mix them with story and contrarian posts (which drive reach) so new people discover you.",
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="border border-gray-100 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-2 text-base">{q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </article>

            <div className="mt-12 bg-gradient-to-br from-blue-600 to-violet-700 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Skip the blank page for good</h2>
              <p className="text-blue-100 mb-6 text-sm">
                Generate finished LinkedIn posts from any of these formats — in your niche, in seconds. 7 free tools, no signup.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/tools/linkedin-post-generator" className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-sm">
                  Try the free generator →
                </Link>
                <a href={BUY_URL} className="border border-blue-400/50 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
                  Get the $29 content pack
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-3">Related guides:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "50 LinkedIn Post Ideas", href: "/blog/linkedin-post-ideas" },
                  { label: "How to Write Posts That Get Engagement", href: "/blog/how-to-write-linkedin-posts-that-get-engagement" },
                  { label: "Best LinkedIn AI Tools", href: "/blog/best-linkedin-ai-tools" },
                  { label: "LinkedIn Hooks Library", href: "/tools/linkedin-hooks" },
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

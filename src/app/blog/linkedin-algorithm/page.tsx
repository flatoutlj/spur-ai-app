import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "How the LinkedIn Algorithm Works in 2026 (And How to Beat It)",
  description:
    "The LinkedIn algorithm explained for B2B professionals. How LinkedIn decides which posts go viral, what kills reach, and the specific actions that maximize distribution in 2026.",
  keywords: [
    "linkedin algorithm",
    "how linkedin algorithm works",
    "linkedin algorithm 2026",
    "linkedin reach algorithm",
    "linkedin content algorithm",
    "beat the linkedin algorithm",
  ],
  openGraph: {
    title: "How the LinkedIn Algorithm Works in 2026 (And How to Beat It)",
    description: "How LinkedIn decides which posts go viral and the specific actions that maximize distribution in 2026.",
    type: "article",
    url: "https://trispur.com/blog/linkedin-algorithm",
    siteName: "Spur AI",
  },
  alternates: { canonical: "https://trispur.com/blog/linkedin-algorithm" },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How the LinkedIn Algorithm Works in 2026 (And How to Beat It)",
  description: "The LinkedIn algorithm explained — how posts go viral, what kills reach, and what to do in the first 60 minutes after posting.",
  author: { "@type": "Organization", name: "Spur AI" },
  publisher: { "@type": "Organization", name: "Spur AI", url: "https://trispur.com" },
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  url: "https://trispur.com/blog/linkedin-algorithm",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the LinkedIn algorithm work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The LinkedIn algorithm decides which posts to show in the feed through a multi-stage process. Stage 1: Your post is shown to a small sample of your connections (roughly 5–10%). Stage 2: If this sample engages at a high rate (comments, reactions, saves, clicks), the algorithm expands reach to more of your connections and second-degree connections. Stage 3: If engagement stays high, your post may reach beyond your network entirely. The key metric is the engagement rate in the first 60 minutes — this determines whether a post grows or fades.",
      },
    },
    {
      "@type": "Question",
      name: "What content does LinkedIn's algorithm favor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LinkedIn's algorithm in 2026 favors content that generates comments over reactions (comments signal deeper engagement), keeps users on the platform (external links reduce reach), is consistent from accounts with posting history, and is native content (text posts and document/carousel posts outperform video from off-platform sources). The algorithm also appears to favor posts that generate engagement from people outside your existing network — indicating the content is broad enough to attract new audiences.",
      },
    },
    {
      "@type": "Question",
      name: "Does posting too often hurt your LinkedIn algorithm reach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Posting multiple times per day dilutes per-post engagement because the algorithm shows your content to the same pool of connections. If you post twice in one day, each post gets roughly half the initial distribution of a single daily post. 3–5 posts per week typically outperforms daily posting for most accounts because it concentrates engagement, resulting in higher reach per post.",
      },
    },
    {
      "@type": "Question",
      name: "Does editing a LinkedIn post hurt reach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Editing a LinkedIn post within the first few hours appears to reset or reduce distribution. LinkedIn's algorithm interprets edits as changes to the content being evaluated. If you need to fix a typo or error, wait until the post's organic reach has peaked (typically after 24–48 hours). Editing days after posting generally has minimal impact.",
      },
    },
  ],
}

export default function LinkedInAlgorithmPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
              <Link href="/blog" className="text-gray-500 text-sm hover:text-gray-800">Blog</Link>
              <Link href="/signup" className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                Start free trial
              </Link>
            </div>
          </div>
        </nav>

        <main className="pt-14">
          {/* Breadcrumb */}
          <div className="max-w-3xl mx-auto px-4 pt-6 pb-2">
            <nav className="flex items-center gap-2 text-xs text-gray-400">
              <Link href="/" className="hover:text-gray-600">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gray-600">Blog</Link>
              <span>/</span>
              <span className="text-gray-600">LinkedIn Algorithm</span>
            </nav>
          </div>

          {/* Hero */}
          <section className="py-10 px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">Algorithm & Reach</span>
                <span className="text-xs text-gray-400">11 min read · Updated July 2026</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                How the LinkedIn Algorithm Works in 2026 (And How to Beat It)
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                LinkedIn&apos;s algorithm determines whether your post reaches 50 people or 50,000. This guide explains how it works in 2026 and the specific actions that maximize distribution — without gaming or exploiting anything.
              </p>
            </div>
          </section>

          <article className="px-4 pb-16">
            <div className="max-w-3xl mx-auto">

              {/* How it works */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How the LinkedIn algorithm decides what goes viral</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  LinkedIn&apos;s algorithm distributes content in multiple stages. Understanding this process explains why some posts explode while identical-seeming posts from the same account barely get seen.
                </p>

                <div className="space-y-4 mb-6">
                  {[
                    {
                      stage: "Stage 1",
                      title: "Initial test audience",
                      desc: "When you post, LinkedIn shows your content to roughly 5–10% of your connection network. This is your test audience. The algorithm measures how they interact with the post in the first 60–90 minutes.",
                    },
                    {
                      stage: "Stage 2",
                      title: "Engagement threshold check",
                      desc: "If the test audience engages at a high rate — specifically through comments, which signal deeper engagement than reactions — the algorithm expands your post's reach to more connections and second-degree connections.",
                    },
                    {
                      stage: "Stage 3",
                      title: "Viral threshold",
                      desc: "If Stage 2 engagement stays high, your post gets distributed beyond your network entirely — to people who don't follow you but whose connections engaged with the post. This is how LinkedIn posts reach tens or hundreds of thousands of views.",
                    },
                    {
                      stage: "Stage 4",
                      title: "Long-tail distribution",
                      desc: "Unlike other platforms, LinkedIn posts have a long distribution tail. A well-performing post often continues gaining views 3–7 days after publishing — sometimes longer if it keeps generating comments.",
                    },
                  ].map(({ stage, title, desc }) => (
                    <div key={stage} className="flex gap-4 bg-gray-50 rounded-xl border border-gray-100 p-5">
                      <div className="flex-shrink-0">
                        <span className="text-xs font-bold gradient-bg text-white px-2.5 py-1 rounded-full">{stage}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* What the algorithm favors */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What LinkedIn&apos;s algorithm favors in 2026</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Comments over reactions</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  LinkedIn weights comments significantly more than reactions (likes, love, etc.). A comment signals that someone read enough of your post to form a response — which indicates quality content. A reaction takes one click and no thought.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  This is why posts that end with a question or provoke a response outperform equally well-written posts that don&apos;t invite engagement. The algorithm uses comments as a proxy for content quality.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Native content over external links</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  LinkedIn consistently reduces the reach of posts that contain external links — links that take users off the platform. This isn&apos;t subtle: posts with external links in the caption typically receive 30–50% less reach than identical posts without them.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The workaround: put external links in the first comment, not the post itself. Post the content, then immediately add a comment with the link. Your reach is preserved and the link is still accessible.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Consistency over virality</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  LinkedIn&apos;s algorithm rewards accounts with posting history. A profile that has posted 3 times per week for 3 months gets significantly more initial distribution than a profile that posts sporadically — even on the same post quality.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The practical implication: don&apos;t optimize for the occasional viral post. Optimize for consistent posting that builds algorithmic momentum over time.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Dwell time</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  LinkedIn&apos;s algorithm measures how long people spend looking at your post, not just whether they clicked or reacted. Posts that require more reading time — substantive text posts, carousels, documents — often outperform short posts with external links because they hold user attention longer.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Document and carousel posts</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  LinkedIn document posts (PDFs presented as carousels) continue to get above-average reach in 2026. They score well on dwell time, generate save actions (which the algorithm appears to weight), and create a visual difference in a mostly text feed that increases stop-the-scroll rate.
                </p>
              </section>

              {/* What kills reach */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What kills your LinkedIn reach</h2>
                <div className="space-y-3">
                  {[
                    { kill: "External links in the post body", reason: "LinkedIn penalizes posts that drive traffic off-platform. Put links in the first comment instead." },
                    { kill: "Posting multiple times per day", reason: "Multiple daily posts dilute per-post engagement. 3–5 posts per week concentrated into single posts outperforms daily posting for reach." },
                    { kill: "Tagging people who don't engage", reason: "If you tag someone and they don't react or comment, the tag becomes a signal of low engagement relative to visibility. Only tag people who will genuinely interact." },
                    { kill: "Editing your post in the first 24 hours", reason: "Editing a post early appears to interrupt distribution. Fix typos before publishing, not after." },
                    { kill: "Posts with no engagement in the first 60 minutes", reason: "If your initial audience doesn't engage, the algorithm doesn't expand reach. This is why your first commenters matter — if possible, have 2–3 connections ready to comment early." },
                    { kill: "Generic hashtags with massive audiences", reason: "#marketing has 35 million followers. #B2BMarketingForAgencyOwners has a much smaller but more targeted audience that's more likely to engage. Targeted hashtags often outperform broad ones for reach per impression." },
                  ].map(({ kill, reason }) => (
                    <div key={kill} className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
                      <span className="text-red-500 font-bold text-sm flex-shrink-0 mt-0.5">✗</span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-1">{kill}</p>
                        <p className="text-sm text-gray-600">{reason}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* The 60-minute window */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The 60-minute window: your most important post-publish actions</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The first 60 minutes after you publish a post are the most important. The algorithm uses this window to decide whether your post deserves expanded distribution. Here&apos;s what to do immediately after publishing:
                </p>
                <div className="space-y-3">
                  {[
                    { action: "Reply to every comment within 10–15 minutes", detail: "Comments generate counter-comments. Each reply increases comment count and keeps the post active in the engagement window." },
                    { action: "Leave the first comment yourself with your external link", detail: "If your post naturally leads to a resource, add it in the first comment immediately after publishing. This preserves reach and makes the link accessible." },
                    { action: "DM 2–3 connections who would genuinely find it interesting", detail: "Tell them you just posted something they might find relevant and share the link. Authentic comments from engaged connections in the first hour significantly boost initial distribution." },
                    { action: "Don't edit the post", detail: "Resist fixing that typo for at least 24 hours. Edits in the distribution window appear to reset or reduce the algorithm's expansion." },
                    { action: "Stay on the platform for 30 minutes", detail: "Engaging with other posts in the first 30 minutes after publishing may improve your own distribution — LinkedIn appears to reward active users with additional reach." },
                  ].map(({ action, detail }, i) => (
                    <div key={i} className="flex gap-4 bg-green-50 border border-green-100 rounded-xl p-4">
                      <span className="text-green-600 font-bold text-sm flex-shrink-0 mt-0.5">{i + 1}.</span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-1">{action}</p>
                        <p className="text-sm text-gray-500">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Algorithm-friendly post types */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The post formats that get the most reach</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { format: "List posts", reach: "High", why: "Easy to scan, encourage saves, and prompt 'missed one' comments that boost engagement." },
                    { format: "Contrarian opinion posts", reach: "Very high", why: "Polarizing content generates comments from both sides of the debate — which multiplies engagement." },
                    { format: "Personal story with business lesson", reach: "High", why: "Personal stories generate empathy reactions and 'me too' comments. Algorithm-friendly and ICP-relevant." },
                    { format: "Document/carousel posts", reach: "Very high", why: "High dwell time from slide swiping, saves are common, and visual format stands out in a text feed." },
                    { format: "How-to posts", reach: "High", why: "Generates saves (readers want to revisit) and comment engagement from people asking follow-up questions." },
                    { format: "Polls", reach: "Medium", why: "Drives reactions but comments are lighter than text posts. Good for engagement, not as good for reach outside your network." },
                    { format: "External link posts", reach: "Low", why: "LinkedIn actively penalizes links that take traffic off the platform. Use sparingly, or put link in first comment." },
                    { format: "Video posts (native upload)", reach: "Medium-High", why: "Native LinkedIn video gets above-average reach, but only if you also add a text caption that adds standalone value." },
                  ].map(({ format, reach, why }) => (
                    <div key={format} className="bg-white border border-gray-100 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 text-sm">{format}</h3>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          reach === "Very high" ? "bg-blue-100 text-blue-700" :
                          reach === "High" ? "bg-green-100 text-green-700" :
                          reach === "Medium-High" ? "bg-teal-100 text-teal-700" :
                          reach === "Medium" ? "bg-yellow-100 text-yellow-700" :
                          "bg-red-100 text-red-700"
                        }`}>
                          {reach} reach
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{why}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions about the LinkedIn algorithm</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "How does the LinkedIn algorithm work?",
                      a: "LinkedIn distributes posts in stages: first to 5–10% of your network, then expanding based on engagement rate in the first 60–90 minutes. Comments signal quality more than reactions. High-engagement posts eventually reach beyond your existing network into second and third-degree connections.",
                    },
                    {
                      q: "What content does LinkedIn's algorithm favor?",
                      a: "In 2026: content that generates comments (not just reactions), native content that keeps users on-platform, posts from accounts with consistent posting history, and document/carousel posts with high dwell time. The algorithm penalizes posts with external links in the caption.",
                    },
                    {
                      q: "Does posting too often hurt your LinkedIn algorithm reach?",
                      a: "Yes. Multiple daily posts dilute per-post engagement since the algorithm shows content to the same pool of connections. 3–5 posts per week typically outperforms daily posting because it concentrates engagement, resulting in higher reach per post.",
                    },
                    {
                      q: "Does editing a LinkedIn post hurt reach?",
                      a: "Editing a post in the first 24 hours appears to reset or reduce distribution. Wait until the post's reach has peaked (typically 24–48 hours) before making changes. Editing days after posting has minimal impact.",
                    },
                  ].map(({ q, a }) => (
                    <div key={q} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                      <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">Post consistently. Win the algorithm.</h2>
                <p className="text-blue-100 mb-6">
                  The LinkedIn algorithm rewards accounts that post consistently. Spur AI generates LinkedIn posts in your voice so you never run out of content.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/signup" className="bg-white text-blue-600 font-semibold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors">
                    Start free trial →
                  </Link>
                  <Link href="/tools/linkedin-post-generator" className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors">
                    Try free post generator
                  </Link>
                </div>
                <p className="text-blue-200 text-xs mt-3">14-day free trial · No credit card required</p>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  )
}

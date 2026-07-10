import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: "LinkedIn Content Strategy for B2B Consultants in 2026 (Complete Guide) | Spur AI",
  description:
    "The complete LinkedIn content strategy for B2B consultants in 2026. Learn what to post, how often, the best hooks, CTAs, and exactly how to convert LinkedIn followers into paying clients.",
  keywords: [
    "linkedin content strategy for consultants",
    "b2b linkedin content strategy",
    "linkedin content ideas for consultants",
    "linkedin strategy b2b",
    "linkedin for consultants",
  ],
  openGraph: {
    title: "LinkedIn Content Strategy for B2B Consultants in 2026 (Complete Guide)",
    description:
      "What to post, how often, and how to convert LinkedIn followers into paying clients. The complete guide for B2B consultants.",
    type: "article",
    url: "https://trispur.com/blog/linkedin-content-strategy-for-consultants",
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkedIn Content Strategy for B2B Consultants in 2026",
    description:
      "The complete guide: what to post, how often, and how to convert LinkedIn followers into paying clients.",
  },
  alternates: {
    canonical: "https://trispur.com/blog/linkedin-content-strategy-for-consultants",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "LinkedIn Content Strategy for B2B Consultants in 2026 (Complete Guide)",
  description:
    "The complete LinkedIn content strategy for B2B consultants in 2026. Learn what to post, how often, the best hooks, CTAs, and exactly how to convert LinkedIn followers into paying clients.",
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
  author: {
    "@type": "Organization",
    name: "Spur AI",
    url: "https://trispur.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Spur AI",
    url: "https://trispur.com",
    logo: {
      "@type": "ImageObject",
      url: "https://trispur.com/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://trispur.com/blog/linkedin-content-strategy-for-consultants",
  },
}

export default function LinkedInStrategyBlogPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-white">
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

        {/* Article Header */}
        <header className="pt-28 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-5">
              <Link
                href="/blog"
                className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
              >
                Blog
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500 text-sm">LinkedIn Strategy</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
              <span className="text-blue-700 text-sm font-medium">Complete Guide · 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              LinkedIn Content Strategy for B2B Consultants in 2026 (Complete Guide)
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-8">
              Most B2B consultants know they should be posting on LinkedIn. Very few have a system
              that turns posting into pipeline. This guide gives you that system — what to post, how
              often, what hooks to use, how to write CTAs that convert, and how to move followers
              from liking your posts to booking a call.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400 pb-8 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600" />
                <span>Spur AI Team</span>
              </div>
              <span>·</span>
              <time dateTime="2026-07-10">July 10, 2026</time>
              <span>·</span>
              <span>12 min read</span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-3xl mx-auto">

            {/* Table of Contents */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-12">
              <h2 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                In this guide
              </h2>
              <ol className="space-y-2 text-sm text-blue-700">
                <li><a href="#why-linkedin" className="hover:underline">1. Why LinkedIn is still the best B2B lead source in 2026</a></li>
                <li><a href="#what-to-post" className="hover:underline">2. What to post: the 5 content types that drive business</a></li>
                <li><a href="#how-often" className="hover:underline">3. How often to post (and when)</a></li>
                <li><a href="#hooks" className="hover:underline">4. How to write LinkedIn hooks that stop the scroll</a></li>
                <li><a href="#ctas" className="hover:underline">5. CTAs that convert followers into clients</a></li>
                <li><a href="#converting" className="hover:underline">6. Converting followers into paying clients</a></li>
                <li><a href="#system" className="hover:underline">7. Building a sustainable content system</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <section id="why-linkedin" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Why LinkedIn is still the best B2B lead source in 2026
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every year, someone declares LinkedIn dead. Every year, consultants quietly close
                six-figure deals from a single post. The platform has over 1 billion members, and
                80% of B2B social leads come from LinkedIn — not Instagram, not X, not TikTok.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The reason LinkedIn works for B2B consultants is structural. When someone reads your
                post on LinkedIn, they can see your credentials, your employer, your connections in
                common, and your recommendation section — all in one click. That context is
                everything in a trust-based sale.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                But here is the catch: only 1% of LinkedIn users post content weekly. That 1% gets
                the majority of reach, the majority of inbound messages, and the majority of
                referrals. If you are reading this guide, you have the opportunity to be in that
                1%.
              </p>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 my-6">
                <p className="text-gray-700 text-sm font-medium mb-1">Key stat</p>
                <p className="text-gray-600 text-sm">
                  Only 1% of LinkedIn users post weekly. Yet that 1% captures over 90% of the
                  platform&apos;s organic reach. Posting consistently is the single highest-ROI
                  activity for B2B consultants in 2026.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="what-to-post" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. What to post: the 5 content types that drive business
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Not all content is created equal. After analyzing hundreds of posts from
                consultants who generate real clients from LinkedIn, five content types consistently
                outperform everything else.
              </p>

              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "The personal story post",
                    desc: "Share a real experience — a client win, a mistake, a hard lesson, a turning point. Stories create emotional connection, and emotional connection builds trust. Trust is what converts followers to clients.",
                    example: "Example: \"I turned down a $60,000 contract last year. Here's why it was the best decision I made.\"",
                  },
                  {
                    num: "02",
                    title: "The contrarian take",
                    desc: "Challenge a widely-held belief in your industry. Contrarian posts generate more comments than any other type — including from people who disagree. This debate expands your reach to their networks.",
                    example: "Example: \"Hot take: Your niche is not too narrow. It's too broad. Here's what I mean.\"",
                  },
                  {
                    num: "03",
                    title: "The tactical how-to",
                    desc: "Share a specific, actionable system or process. This demonstrates competence in a way that abstractions cannot. Prospects read your how-to post and think: \"If this is what they share for free, imagine what they could do for me.\"",
                    example: "Example: \"How I help clients reduce churn by 40% in 60 days: a 4-step process.\"",
                  },
                  {
                    num: "04",
                    title: "The client result post",
                    desc: "Share an anonymized or attributed client outcome. Numbers are everything here — be specific. These posts function as social proof at scale. Every client result post is a case study that reaches thousands of people who might be your next client.",
                    example: "Example: \"A client came to us losing 15 customers per month. 90 days later, churn was at 3%. Here's what we changed.\"",
                  },
                  {
                    num: "05",
                    title: "The industry insight post",
                    desc: "Share a trend, observation, or perspective on where your industry is heading. This positions you as a forward-thinking authority — not just a practitioner. Decision-makers hire consultants who can see around corners.",
                    example: "Example: \"The consultants charging $500/hr in 2027 will all have one thing in common that most are ignoring.\"",
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white text-xs font-bold flex items-center justify-center">
                      {item.num}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">{item.desc}</p>
                      <p className="text-gray-400 text-xs italic">{item.example}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-5">
                <p className="text-sm text-gray-700">
                  <strong>Tip:</strong> Rotate between these five types each week. A weekly content
                  plan might look like: Monday (story), Wednesday (how-to), Friday (contrarian).
                  This keeps your content fresh and reaches different segments of your audience.
                  Tools like{" "}
                  <Link href="/signup" className="text-blue-600 hover:underline font-medium">
                    Spur AI
                  </Link>{" "}
                  can generate all five types automatically based on your niche and voice.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="how-often" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. How often to post (and when)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The research on LinkedIn posting frequency is remarkably consistent: 3 to 5 posts
                per week is the sweet spot for consultants who want to grow their presence and
                generate leads. Here is why:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "The LinkedIn algorithm favors accounts that post consistently, not just accounts that post frequently. Three posts per week every week beats seven posts per week once a month.",
                  "Each post gives your content 24 to 48 hours of active algorithmic distribution. After that, engagement drops dramatically. More posts = more distribution windows.",
                  "Posting more than once per day on LinkedIn actually hurts your reach. LinkedIn's algorithm throttles accounts that post multiple times per day, distributing each post to a smaller percentage of followers.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="text-blue-500 font-bold mt-0.5 flex-shrink-0">→</span>
                    {point}
                  </li>
                ))}
              </ul>

              <h3 className="font-semibold text-gray-900 mb-3">Best times to post</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                LinkedIn sees the highest B2B engagement on Tuesday through Thursday, between 8am
                and 10am in your target audience's time zone. Avoid weekends — LinkedIn engagement
                drops significantly on Saturday and Sunday, as most professionals are not actively
                browsing.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { day: "Tuesday", time: "8am–10am", label: "Highest reach day" },
                  { day: "Wednesday", time: "9am–11am", label: "Best comment engagement" },
                  { day: "Thursday", time: "8am–10am", label: "Strong for how-to content" },
                ].map((slot) => (
                  <div key={slot.day} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                    <div className="font-bold text-gray-900 mb-1">{slot.day}</div>
                    <div className="text-blue-600 font-medium text-sm mb-1">{slot.time}</div>
                    <div className="text-gray-400 text-xs">{slot.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 */}
            <section id="hooks" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. How to write LinkedIn hooks that stop the scroll
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                LinkedIn shows only the first 2 to 3 lines of your post before the &quot;see more&quot;
                button. Those lines determine whether anyone reads the rest. This is the hook — and
                it is the most important part of any LinkedIn post.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The best LinkedIn hooks share four characteristics: they create an open loop, they
                speak to a specific tension, they use concrete details, and they are short enough
                to be read in under 2 seconds.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Hook formulas that work for consultants</h3>
                  <div className="space-y-3">
                    {[
                      { formula: "Specific number + outcome", example: "\"I closed $127K in new business last quarter with zero cold outreach. Here's the system.\"" },
                      { formula: "Story opener", example: "\"My biggest client fired me on a Tuesday. Best thing that ever happened to my business.\"" },
                      { formula: "Contrarian statement", example: "\"Hot take: Posting more on LinkedIn will not grow your consulting business.\"" },
                      { formula: "Direct question", example: "\"What would change about your business if 5 qualified leads reached out to you every week?\"" },
                    ].map((h) => (
                      <div key={h.formula} className="flex gap-3 text-sm">
                        <span className="text-blue-500 font-bold mt-0.5 flex-shrink-0">→</span>
                        <div>
                          <span className="font-medium text-gray-900">{h.formula}: </span>
                          <span className="text-gray-500">{h.example}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-violet-50 border border-violet-100 rounded-xl p-5">
                <p className="text-sm text-gray-700">
                  We have collected 50 of the highest-performing LinkedIn hooks for B2B
                  consultants. Browse the full list at{" "}
                  <Link href="/tools/linkedin-hooks" className="text-violet-600 hover:underline font-medium">
                    our LinkedIn hooks library
                  </Link>
                  , or let{" "}
                  <Link href="/signup" className="text-violet-600 hover:underline font-medium">
                    Spur AI
                  </Link>{" "}
                  generate custom hooks matched to your niche and post type.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="ctas" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. CTAs that convert followers into clients
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The call-to-action at the end of your LinkedIn post is where most consultants
                leave money on the table. They either end the post with no CTA, or they end with
                something too aggressive that reads as spam.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The most effective LinkedIn CTAs for consultants fall into three categories:
              </p>

              <div className="space-y-5">
                {[
                  {
                    type: "Engagement CTA (for awareness posts)",
                    desc: "Ask a question that opens a conversation. This grows your reach and starts relationships.",
                    examples: [
                      "\"What's the best business decision you've made this year? Drop it in the comments.\"",
                      "\"Has this happened to you? Tell me in the comments.\"",
                    ],
                  },
                  {
                    type: "Soft lead CTA (for authority posts)",
                    desc: "Offer something of value in exchange for a soft action. This builds your DM pipeline without being pushy.",
                    examples: [
                      "\"I wrote a full breakdown of this system. Drop 'SYSTEM' in the comments and I'll DM it to you.\"",
                      "\"If you want to apply this to your business, shoot me a DM — happy to walk through it.\"",
                    ],
                  },
                  {
                    type: "Direct CTA (for conversion posts)",
                    desc: "Use sparingly — no more than once every 10 posts. Be direct, but make the value clear.",
                    examples: [
                      "\"If you're a B2B consultant doing $200K–$500K and want to add $100K this year through LinkedIn, let's talk. Book a call in my bio.\"",
                    ],
                  },
                ].map((cta) => (
                  <div key={cta.type} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">{cta.type}</h3>
                    <p className="text-gray-500 text-sm mb-3">{cta.desc}</p>
                    {cta.examples.map((ex, i) => (
                      <p key={i} className="text-gray-600 text-xs italic mb-1">{ex}</p>
                    ))}
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6 */}
            <section id="converting" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Converting LinkedIn followers into paying clients
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Posting is the top of the funnel. Converting is where the money is. Here is the
                most effective system for moving someone from &quot;person who likes your posts&quot; to
                &quot;paying client&quot;:
              </p>

              <div className="space-y-4 mb-6">
                {[
                  {
                    step: "1",
                    title: "Connect with everyone who engages",
                    desc: "When someone likes, comments, or shares your post, send them a connection request. In your message note: \"Saw you engaged with my post on [topic] — wanted to connect.\" This is not salesy. It is building a network of people who already know your work.",
                  },
                  {
                    step: "2",
                    title: "Follow up with warm outreach",
                    desc: "If a new connection fits your ideal client profile, send a short follow-up message 2 to 3 days after connecting. Do not pitch. Reference something specific: \"Noticed you're building an agency — curious what's your biggest challenge with client acquisition right now?\" Start a conversation, not a sales call.",
                  },
                  {
                    step: "3",
                    title: "Optimize your profile for conversion",
                    desc: "Your LinkedIn profile is a sales page. Your headline should say who you help and what result you create. Your about section should lead with the problem you solve. Your featured section should include your best-performing post or a client testimonial. Every element should answer: \"Why should I book a call with this person?\"",
                  },
                  {
                    step: "4",
                    title: "Use DMs to qualify, not to close",
                    desc: "LinkedIn DMs are for starting conversations and qualifying fit, not for closing deals. Your goal in a DM sequence is to get a prospect to a phone or video call. Keep messages short, lead with curiosity, and make it about them — not about what you offer.",
                  },
                ].map((step) => (
                  <div key={step.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1.5 text-sm">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> This process requires consistency and patience. Most
                  consultants see their first inbound LinkedIn lead within 30 to 60 days of posting
                  consistently. The compounding effect — where one post references another and
                  builds your authority over time — typically kicks in around month 3. Tools like{" "}
                  <Link href="/signup" className="text-blue-600 hover:underline font-medium">
                    Spur AI
                  </Link>{" "}
                  help you maintain the consistency required for this system to work, without
                  spending hours every week writing posts.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="system" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Building a sustainable LinkedIn content system
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The biggest failure mode for consultants on LinkedIn is inconsistency. They post
                enthusiastically for two weeks, get distracted by client work, disappear for a
                month, and start over. The algorithm punishes this pattern and so do potential
                clients who notice the gaps.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                A sustainable LinkedIn content system has three components: a content bank, a
                batching workflow, and a scheduling layer.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: "🏦",
                    title: "Content bank",
                    desc: "Keep a running list of ideas in a simple document or notes app. Every interesting thing that happens in your consulting work is a potential post. Every frustration a client expresses is a contrarian take. Every question you answer on a call is a how-to post. Capture these as they happen, not when it's time to write.",
                  },
                  {
                    icon: "⏱",
                    title: "Batching workflow",
                    desc: "Write all your posts for the week in one sitting — ideally Sunday evening or Monday morning. Context-switching is expensive. When you write three posts at once, you maintain a creative state and produce better work faster. Most consultants can write a full week of posts in 45 to 60 minutes when they batch.",
                  },
                  {
                    icon: "📅",
                    title: "Scheduling layer",
                    desc: "Use a scheduling tool to queue your posts in advance so you never miss a day due to a busy client week or travel. Schedule one week at a time so you always have a buffer. Growth plan members on Spur AI get a built-in content calendar and scheduling tool that handles this automatically.",
                  },
                ].map((component) => (
                  <div key={component.title} className="flex gap-4">
                    <span className="text-2xl flex-shrink-0">{component.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{component.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{component.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-3">The 30-minute weekly LinkedIn system</h3>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><span className="font-bold text-blue-600">1.</span> Review your content bank and pick 3 ideas (5 min)</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-blue-600">2.</span> Generate first drafts with Spur AI — one per post type (10 min)</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-blue-600">3.</span> Edit for your voice and add specific details from your week (10 min)</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-blue-600">4.</span> Schedule all three posts for Tuesday, Wednesday, and Thursday (5 min)</li>
                </ol>
                <p className="text-gray-500 text-xs mt-3">
                  Total: 30 minutes per week to maintain a consistent, high-quality LinkedIn presence.
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Putting it all together</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                LinkedIn content strategy for B2B consultants is not complicated. It is just
                consistent. Post 3 times per week using the five content types. Open every post
                with a hook that creates an open loop. Close with a CTA calibrated to where you
                are in your content cycle. Connect with everyone who engages, and follow up with
                the ones who fit your ideal client profile.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Do this for 90 days and your LinkedIn presence will be unrecognizable compared to
                where you started. Do it for a year and LinkedIn will be your single largest
                source of new business.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The only variable is consistency — and that is exactly what tools like{" "}
                <Link href="/signup" className="text-blue-600 hover:underline font-medium">
                  Spur AI
                </Link>{" "}
                are built to protect. Start with a free trial and generate your first week of
                posts today.
              </p>
            </section>

            {/* Article CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-violet-700 rounded-2xl p-8 text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-3">
                Ready to execute this strategy?
              </h2>
              <p className="text-blue-100 mb-6 max-w-lg mx-auto">
                Spur AI generates LinkedIn posts in your voice, built around proven B2B frameworks.
                14-day free trial. No credit card required.
              </p>
              <Link
                href="/signup"
                className="inline-block bg-white text-blue-600 font-bold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors"
              >
                Start your free trial →
              </Link>
              <p className="text-blue-200 text-xs mt-3">
                Plans from $149/mo ·{" "}
                <Link href="/pricing" className="underline hover:text-white">
                  See pricing
                </Link>
              </p>
            </div>

            {/* Related posts */}
            <div>
              <h3 className="font-bold text-gray-900 mb-5">Related resources</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/tools/linkedin-post-generator"
                  className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-2xl">✍️</span>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1 text-sm">
                      Free LinkedIn Post Generator
                    </div>
                    <div className="text-gray-500 text-xs">
                      Generate a full post with hook, body, and CTA in one click.
                    </div>
                  </div>
                </Link>
                <Link
                  href="/tools/linkedin-hooks"
                  className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-2xl">🪝</span>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1 text-sm">
                      50 Proven LinkedIn Hooks
                    </div>
                    <div className="text-gray-500 text-xs">
                      Copy-paste opening lines organized by post type.
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 mt-10">
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
                    <Link
                      href="/tools/linkedin-hooks"
                      className="hover:text-white transition-colors"
                    >
                      LinkedIn Hooks Library
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
                    <a
                      href="mailto:hello@trispur.com"
                      className="hover:text-white transition-colors"
                    >
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
    </>
  )
}

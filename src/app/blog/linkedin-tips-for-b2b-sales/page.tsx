import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: "7 LinkedIn Tips for B2B Sales That Actually Close Deals (2026 Guide) | Spur AI",
  description:
    "The 7 most effective LinkedIn tips for B2B sales in 2026. Learn relationship-based selling, the social selling index, warm DM sequences, and how to map decision-makers — without being spammy.",
  keywords: [
    "linkedin tips for b2b sales",
    "b2b sales linkedin strategy",
    "linkedin b2b sales",
    "linkedin social selling",
    "b2b linkedin tips",
    "linkedin sales strategy",
  ],
  openGraph: {
    title: "7 LinkedIn Tips for B2B Sales That Actually Close Deals (2026 Guide)",
    description:
      "Stop sending cold DMs that get ignored. These 7 LinkedIn tips for B2B sales are based on relationship-based selling that converts prospects into paying clients.",
    type: "article",
    url: "https://trispur.com/blog/linkedin-tips-for-b2b-sales",
  },
  twitter: {
    card: "summary_large_image",
    title: "7 LinkedIn Tips for B2B Sales That Actually Close Deals (2026 Guide)",
    description:
      "Relationship-based LinkedIn selling for B2B professionals — 7 proven strategies that turn followers into clients.",
  },
  alternates: {
    canonical: "https://trispur.com/blog/linkedin-tips-for-b2b-sales",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "7 LinkedIn Tips for B2B Sales That Actually Close Deals (2026 Guide)",
  description:
    "The 7 most effective LinkedIn tips for B2B sales in 2026. Learn relationship-based selling, the social selling index, warm DM sequences, and how to map decision-makers — without being spammy.",
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
    "@id": "https://trispur.com/blog/linkedin-tips-for-b2b-sales",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How effective is LinkedIn for B2B sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LinkedIn is the single most effective social platform for B2B sales. Over 80% of B2B social leads come from LinkedIn, and 4 out of 5 LinkedIn members drive business decisions. For consultants, coaches, and agency owners, it outperforms every other channel by a wide margin.",
      },
    },
    {
      "@type": "Question",
      name: "How many LinkedIn messages should I send per day for B2B sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LinkedIn limits connection requests to around 100 per week. For B2B sales, quality beats volume every time — 10 highly personalized messages will outperform 100 generic ones. Focus on prospects who've engaged with your content first, as these warm DMs convert at 3–5x the rate of cold outreach.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good LinkedIn Social Selling Index (SSI) for B2B sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LinkedIn's Social Selling Index is scored from 0 to 100. An SSI above 70 puts you in the top 25% of your industry. B2B sellers with an SSI above 70 are 45% more likely to create opportunities and 51% more likely to hit quota. Aim for 70+ as a baseline, with 80+ as the target for active sellers.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between social selling and cold outreach on LinkedIn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cold outreach means sending connection requests and pitches to strangers with no prior relationship. Social selling means building visibility and trust first — through content, comments, and engagement — so that when you do reach out, it's a warm conversation, not a cold pitch. Social selling has a dramatically higher response rate because the prospect already knows who you are.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results from LinkedIn B2B sales strategies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most B2B professionals see early results (inbound messages, connection requests from prospects) within 30–60 days of consistent posting and engagement. Meaningful pipeline impact — deals closing from LinkedIn-sourced leads — typically starts in months 2–4. The compounding effect of a strong LinkedIn presence usually fully kicks in around the 6-month mark.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use LinkedIn Sales Navigator for B2B sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LinkedIn Sales Navigator is worth the investment for B2B sellers targeting enterprise accounts or doing high-volume outreach. Its advanced search filters, lead tracking, and InMail credits can significantly increase prospecting efficiency. However, it's not necessary for consultants and agency owners whose primary strategy is content-driven inbound — organic posting combined with a strong profile can generate strong pipeline without Sales Navigator.",
      },
    },
  ],
}

export default function LinkedInTipsB2BSalesPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              <span className="text-gray-500 text-sm">B2B Sales</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
              <span className="text-blue-700 text-sm font-medium">Complete Guide · 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              7 LinkedIn Tips for B2B Sales That Actually Close Deals
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-8">
              Most B2B sellers are doing LinkedIn wrong — they spray generic pitches and wonder why
              nobody responds. This guide gives you 7 proven LinkedIn tips for B2B sales built on
              relationship-first principles that convert prospects into pipeline, without burning
              your reputation.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400 pb-8 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600" />
                <span>Spur AI Team</span>
              </div>
              <span>·</span>
              <time dateTime="2026-07-10">July 10, 2026</time>
              <span>·</span>
              <span>10 min read</span>
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
                <li><a href="#why-linkedin" className="hover:underline">1. Why LinkedIn is the #1 B2B sales channel in 2026</a></li>
                <li><a href="#spammy-vs-relationship" className="hover:underline">2. Spammy outreach vs. relationship-based selling</a></li>
                <li><a href="#7-tips" className="hover:underline">3. 7 LinkedIn tips for B2B sales</a></li>
                <li><a href="#mistakes" className="hover:underline">4. Common mistakes B2B sellers make on LinkedIn</a></li>
                <li><a href="#faq" className="hover:underline">5. Frequently asked questions</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <section id="why-linkedin" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Why LinkedIn is the #1 B2B sales channel in 2026
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The data is unambiguous: LinkedIn drives more B2B leads than any other social
                platform. Over 80% of B2B social media leads originate on LinkedIn. Four out of
                five LinkedIn members influence or make business decisions. The platform has
                crossed 1 billion members — and B2B activity has never been higher.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                What makes LinkedIn structurally different from every other channel is context.
                When a prospect reads your content or receives your message, they can immediately
                see your credentials, mutual connections, company history, and recommendations.
                That context compresses the trust-building timeline that normally takes months in
                traditional sales cycles.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Compare this to cold email, where a prospect has almost no context about you, or
                to paid ads, where you are interrupting someone who was not looking for you. On
                LinkedIn, if you do it right, prospects find you — and they arrive pre-warmed by
                the content they have already read from you.
              </p>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 my-6">
                <p className="text-gray-700 text-sm font-medium mb-3">The LinkedIn B2B advantage</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { stat: "80%", label: "of B2B social leads come from LinkedIn" },
                    { stat: "4 of 5", label: "LinkedIn members influence buying decisions" },
                    { stat: "6x", label: "higher conversion rate vs. other social channels" },
                  ].map((item) => (
                    <div key={item.stat} className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{item.stat}</div>
                      <div className="text-gray-500 text-xs leading-relaxed">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                But here is the caveat: LinkedIn only works if you approach it correctly. The
                platform is flooded with lazy outreach, and buyers have become expert at ignoring
                it. The sellers who win on LinkedIn are those who build trust before they ever
                send a pitch — and that is exactly what this guide will show you how to do.
              </p>
            </section>

            {/* Section 2 */}
            <section id="spammy-vs-relationship" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Spammy outreach vs. relationship-based selling
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Before diving into the tips, it is worth being direct about the two approaches
                to LinkedIn sales — because the approach you choose determines everything.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mb-8">
                <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                  <h3 className="font-semibold text-red-700 mb-3 text-sm">Spammy outreach</h3>
                  <ul className="space-y-2 text-sm text-red-600">
                    {[
                      "Connect request with immediate pitch",
                      "Copy-paste scripts sent to hundreds",
                      "\"Just checking in\" follow-ups every 3 days",
                      "No content, no visibility, no context",
                      "Leads with your offer, not their problem",
                      "Gets ignored, blocked, and reported",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-100 rounded-xl p-5">
                  <h3 className="font-semibold text-green-700 mb-3 text-sm">Relationship-based selling</h3>
                  <ul className="space-y-2 text-sm text-green-700">
                    {[
                      "Build visibility first through content",
                      "Engage genuinely before outreach",
                      "Reach out to people who already know your work",
                      "Lead with curiosity, not a pitch",
                      "Start conversations, not sales cycles",
                      "Generates inbound AND warm outbound",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                The irony is that relationship-based selling is not just more ethical — it is
                dramatically more effective. When you reach out to someone who has been reading
                your content for weeks, response rates are 3 to 5 times higher than cold
                outreach. The seven tips below are all built on this foundation.
              </p>
            </section>

            {/* Section 3 — 7 Tips */}
            <section id="7-tips" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                3. 7 LinkedIn tips for B2B sales
              </h2>

              <div className="space-y-10">
                {[
                  {
                    num: "01",
                    title: "Optimize your profile as a sales page, not a resume",
                    content: [
                      "Your LinkedIn profile is the first thing a prospect sees after reading your content or receiving your message. Most B2B sellers treat it as a resume — a list of past jobs and responsibilities. That is exactly backwards.",
                      "Your profile should read like a landing page for your ideal client. Your headline should answer: who do I help, and what result do I create? Your about section should lead with the problem you solve, not your career history. Your featured section should showcase your best content, a case study, or a client testimonial — not a PDF of your CV.",
                      "Specifically: your headline should follow the formula \"I help [target audience] achieve [specific outcome] through [your method].\" Your about section should open with a one-sentence value proposition, then support it with 2–3 specific client results.",
                    ],
                    tip: "Use our free LinkedIn profile optimizer checklist to score your profile and identify quick wins: /tools/linkedin-profile-optimizer",
                    tipLink: "/tools/linkedin-profile-optimizer",
                    tipLinkText: "LinkedIn profile optimizer",
                  },
                  {
                    num: "02",
                    title: "Build your content strategy before you build your pipeline",
                    content: [
                      "The single most effective LinkedIn tip for B2B sales that most sellers ignore: post content consistently before you try to sell anything. Content builds the trust, context, and visibility that makes every other sales activity more effective.",
                      "When a prospect has read 10 of your posts before you send them a connection request, the dynamic is entirely different. They already know your perspective, respect your expertise, and have opted in (by following you) to hear more. Your outreach goes from cold to warm in seconds.",
                      "For B2B sales specifically, the most effective content types are: client result posts (anonymized outcomes with specific numbers), tactical how-to posts (demonstrating competence), and contrarian takes on your industry (generating debate and reach). Post 3 times per week minimum.",
                    ],
                    tip: null,
                    tipLink: null,
                    tipLinkText: null,
                  },
                  {
                    num: "03",
                    title: "Improve your Social Selling Index (SSI)",
                    content: [
                      "LinkedIn's Social Selling Index (SSI) is a score from 0 to 100 that measures four dimensions of your LinkedIn sales activity: establishing your professional brand, finding the right people, engaging with insights, and building relationships. You can check your score for free at linkedin.com/sales/ssi.",
                      "According to LinkedIn's own research, sellers with an SSI above 70 are 45% more likely to create opportunities and 51% more likely to hit quota. The score is a leading indicator — it correlates with sales outcomes because the behaviors it measures (profile completeness, content sharing, network building, engagement) are exactly the behaviors that drive pipeline.",
                      "To improve your SSI: complete every section of your profile (photo, headline, about, experience, skills, recommendations), share original content at least 3 times per week, engage thoughtfully with content from prospects and industry peers, and send personalized connection requests to qualified leads each week.",
                    ],
                    tip: null,
                    tipLink: null,
                    tipLinkText: null,
                  },
                  {
                    num: "04",
                    title: "Master the warm DM sequence",
                    content: [
                      "Cold DMs on LinkedIn have a response rate of around 1–3%. Warm DMs — sent to someone who has engaged with your content or whose content you have engaged with — have response rates of 15–30%. The difference is entirely in the relationship you have built before the message.",
                      "The warm DM sequence works like this: (1) Follow the prospect and engage with 2–3 of their posts genuinely and specifically. (2) Send a connection request with a brief, personalized note referencing something real. (3) After they connect, wait 24–48 hours before messaging. (4) Open with something specific about them or their business — not your offer.",
                      "The first DM should never pitch. It should open a conversation: \"Saw your post about [topic] — we deal with that a lot in our work with [industry]. Curious: is [specific problem] something you're actively working on right now?\" This is a question that invites a response, not a pitch that invites an eye-roll.",
                    ],
                    tip: null,
                    tipLink: null,
                    tipLinkText: null,
                  },
                  {
                    num: "05",
                    title: "Use commenting as a business development strategy",
                    content: [
                      "Most B2B sellers think of LinkedIn comments as a nice-to-do social gesture. Top performers treat commenting as a deliberate business development activity with a target list and a weekly cadence.",
                      "Identify 20–30 accounts in your target segment: your ideal clients, their colleagues, industry thought leaders they follow, and mutual connections. Spend 15 minutes each day leaving specific, substantive comments on their posts. Not \"Great post!\" but \"We have seen the same thing with our clients in [industry]. One thing that also helps is [specific insight] — especially in [specific context].",
                      "Why it works: the author of the post sees your comment. Their network sees your comment. Everyone who reads the post sees you adding value. Over 30–60 days of consistent commenting, you become a recognized name in your target segment's feed — before you ever send a single DM.",
                    ],
                    tip: null,
                    tipLink: null,
                    tipLinkText: null,
                  },
                  {
                    num: "06",
                    title: "Map decision-makers before you reach out",
                    content: [
                      "B2B sales cycles involve multiple stakeholders. LinkedIn is the best tool available for mapping who those stakeholders are before you ever engage with a company. Use LinkedIn's search filters (or Sales Navigator for more precision) to identify the full buying committee at a target account.",
                      "For most B2B consulting or agency sales, you need to identify: the economic buyer (who controls budget), the technical evaluator (who will use your service or assess your methodology), the champion (who will advocate for you internally), and blockers (who might resist the change). Map all four before you engage with any of them.",
                      "Once mapped, engage with the champion's content first — they are most likely to respond positively to your outreach, and their advocacy will open doors to the economic buyer. Do not go straight to the top. Work the relationship layer by layer.",
                    ],
                    tip: null,
                    tipLink: null,
                    tipLinkText: null,
                  },
                  {
                    num: "07",
                    title: "Build a disciplined follow-up sequence",
                    content: [
                      "The majority of B2B deals are won on the fifth to twelfth touchpoint. Most salespeople give up after two. LinkedIn gives you multiple channels for non-intrusive follow-up: you can comment on their posts, react to their content, engage with their company page, and message them — all without being spammy if you space it correctly.",
                      "A disciplined LinkedIn follow-up sequence looks like this: Day 1 — send connection request. Day 3 — after connection, send opening message (no pitch). Day 7 — engage with one of their posts. Day 14 — follow-up message that references something specific they posted or shared. Day 21 — share a piece of your content directly relevant to a problem they have discussed. Day 30 — soft CTA (\"Would it be worth a 20-minute call?\").",
                      "The key is to make every touchpoint add value. If you are contacting them just to \"check in,\" you are adding noise. If every contact point teaches them something, reinforces your expertise, or references something specific to them, you are building a relationship — not burning one.",
                    ],
                    tip: null,
                    tipLink: null,
                    tipLinkText: null,
                  },
                ].map((tip) => (
                  <div key={tip.num} className="border-l-4 border-blue-200 pl-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {tip.num}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{tip.title}</h3>
                    </div>
                    {tip.content.map((para, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed mb-4">{para}</p>
                    ))}
                    {tip.tip && tip.tipLink && (
                      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-2">
                        <p className="text-sm text-gray-700">
                          <strong>Related:</strong> Use our free{" "}
                          <Link href={tip.tipLink} className="text-blue-600 hover:underline font-medium">
                            {tip.tipLinkText}
                          </Link>{" "}
                          to score your profile and identify quick wins before reaching out to prospects.
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Mid-article CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-violet-700 rounded-2xl p-8 text-center my-14">
              <h2 className="text-xl font-bold text-white mb-3">
                Generate LinkedIn content that supports your sales strategy
              </h2>
              <p className="text-blue-100 mb-5 max-w-lg mx-auto text-sm">
                Spur AI generates posts, DM scripts, and follow-up sequences tailored to your
                niche — so your content builds pipeline on autopilot.
              </p>
              <Link
                href="/signup"
                className="inline-block bg-white text-blue-600 font-bold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors"
              >
                Start your free trial →
              </Link>
              <p className="text-blue-200 text-xs mt-3">14-day free trial · No credit card required</p>
            </div>

            {/* Section 4 — Mistakes */}
            <section id="mistakes" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Common mistakes B2B sellers make on LinkedIn
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Most of the pain B2B sellers experience on LinkedIn comes from the same handful
                of mistakes. Knowing them is the fastest way to avoid them.
              </p>

              <div className="space-y-5">
                {[
                  {
                    mistake: "Pitching on first contact",
                    why: "The LinkedIn DM inbox is the most abused sales channel on the internet. When someone receives a pitch as their first message from you, they have no context for who you are, no reason to trust you, and no motivation to respond. The pitch-on-connect approach is not just ineffective — it damages your reputation and can get your account flagged.",
                  },
                  {
                    mistake: "Treating LinkedIn as a broadcast channel, not a conversation",
                    why: "B2B sellers who post but never comment, react, or engage with others miss the relational dimension that drives real sales outcomes. LinkedIn is a two-way channel. The more you engage with others' content, the more people engage with yours — and the more decision-makers end up in your network.",
                  },
                  {
                    mistake: "Ignoring profile optimization",
                    why: "Your profile is your sales page. If it reads like a resume — a list of jobs and responsibilities without any clear value proposition for your ideal client — you are losing inbound opportunities every day. Every time someone clicks through to your profile from your content, they should leave thinking \"this person can solve my problem.\"",
                  },
                  {
                    mistake: "Going viral instead of going deep",
                    why: "Posts that get thousands of likes from people outside your target market generate zero pipeline. A post that gets 50 engagements from decision-makers in your target niche can generate a six-figure deal. Optimize for depth of resonance with your ideal client, not breadth of reach with a general audience.",
                  },
                  {
                    mistake: "Giving up before the compounding effect kicks in",
                    why: "LinkedIn is a compounding investment. The first month, results are modest. By month three, prospects are reaching out to you. By month six, you have a warm pipeline from people who have been reading your content for half a year. Most B2B sellers quit after 3–4 weeks when they do not see immediate results, right before the inflection point.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-red-400 text-sm">✗</span>
                      {item.mistake}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.why}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently asked questions about LinkedIn for B2B sales
              </h2>
              <div className="space-y-5">
                {[
                  {
                    q: "How effective is LinkedIn for B2B sales?",
                    a: "LinkedIn is the single most effective social platform for B2B sales. Over 80% of B2B social leads come from LinkedIn, and 4 out of 5 LinkedIn members drive business decisions. For consultants, coaches, and agency owners, it outperforms every other channel by a wide margin.",
                  },
                  {
                    q: "How many LinkedIn messages should I send per day for B2B sales?",
                    a: "LinkedIn limits connection requests to around 100 per week. For B2B sales, quality beats volume every time — 10 highly personalized messages will outperform 100 generic ones. Focus on prospects who have engaged with your content first, as these warm DMs convert at 3–5x the rate of cold outreach.",
                  },
                  {
                    q: "What is a good LinkedIn Social Selling Index (SSI) for B2B sales?",
                    a: "LinkedIn's Social Selling Index is scored from 0 to 100. An SSI above 70 puts you in the top 25% of your industry. B2B sellers with an SSI above 70 are 45% more likely to create opportunities and 51% more likely to hit quota. Aim for 70+ as a baseline, with 80+ as the target for active sellers.",
                  },
                  {
                    q: "What is the difference between social selling and cold outreach on LinkedIn?",
                    a: "Cold outreach means sending connection requests and pitches to strangers with no prior relationship. Social selling means building visibility and trust first — through content, comments, and engagement — so that when you do reach out, it is a warm conversation, not a cold pitch. Social selling has a dramatically higher response rate because the prospect already knows who you are.",
                  },
                  {
                    q: "How long does it take to see results from LinkedIn B2B sales strategies?",
                    a: "Most B2B professionals see early results (inbound messages, connection requests from prospects) within 30–60 days of consistent posting and engagement. Meaningful pipeline impact typically starts in months 2–4. The compounding effect of a strong LinkedIn presence usually fully kicks in around the 6-month mark.",
                  },
                  {
                    q: "Should I use LinkedIn Sales Navigator for B2B sales?",
                    a: "LinkedIn Sales Navigator is worth the investment for B2B sellers targeting enterprise accounts or doing high-volume outreach. However, it is not necessary for consultants and agency owners whose primary strategy is content-driven inbound — organic posting combined with a strong profile can generate strong pipeline without Sales Navigator.",
                  },
                ].map((item, i) => (
                  <div key={i} className="border border-gray-100 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">{item.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The bottom line</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                LinkedIn is not a magic lead machine — but it is the closest thing to one that
                exists in B2B sales in 2026. The sellers who win on LinkedIn are not the ones
                sending the most messages. They are the ones who have built the most trust before
                they ever send one.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Start with your profile. Build it as a sales page, not a resume. Then commit to
                a content strategy that demonstrates your expertise 3 times per week. Use
                commenting as a daily business development habit. And when you finally reach out
                to a prospect, you will be doing it from a position of established credibility —
                not as a stranger asking for their time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you want a faster path to building that content consistently,{" "}
                <Link href="/signup" className="text-blue-600 hover:underline font-medium">
                  Spur AI
                </Link>{" "}
                generates LinkedIn posts in your voice and niche, so you never have to stare at
                a blank screen again. Start your free trial today.
              </p>
            </section>

            {/* Article CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-violet-700 rounded-2xl p-8 text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-3">
                Turn your LinkedIn into a B2B sales engine
              </h2>
              <p className="text-blue-100 mb-6 max-w-lg mx-auto">
                Spur AI generates LinkedIn posts that build trust, demonstrate expertise, and
                create inbound pipeline — in your voice, for your niche. 14-day free trial.
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
                  href="/blog/linkedin-content-strategy-for-consultants"
                  className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-2xl">📋</span>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1 text-sm">
                      LinkedIn Content Strategy Guide
                    </div>
                    <div className="text-gray-500 text-xs">
                      The complete 2026 playbook for B2B consultants growing on LinkedIn.
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
                    <Link href="/tools/linkedin-post-generator" className="hover:text-white transition-colors">
                      LinkedIn Post Generator
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/linkedin-hooks" className="hover:text-white transition-colors">
                      LinkedIn Hooks Library
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/linkedin-profile-optimizer" className="hover:text-white transition-colors">
                      Profile Optimizer
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/signup" className="hover:text-white transition-colors">Start free trial</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                  </li>
                  <li>
                    <a href="mailto:hello@trispur.com" className="hover:text-white transition-colors">Contact</a>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
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

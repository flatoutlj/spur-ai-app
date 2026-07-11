import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: "How to Write LinkedIn Posts That Get Engagement in 2026 | Spur AI",
  description:
    "Learn how to write LinkedIn posts that get real engagement in 2026. Covers the algorithm, 5 elements of high-engagement posts, 10 post formats, hook formulas, the 3-2-1 rule, and what NOT to do.",
  keywords: [
    "how to write linkedin posts",
    "linkedin post tips",
    "linkedin posts that get engagement",
    "how to write good linkedin posts",
    "linkedin post writing",
    "linkedin engagement tips",
  ],
  openGraph: {
    title: "How to Write LinkedIn Posts That Get Engagement in 2026",
    description:
      "The algorithm, the 5 elements of high-engagement posts, 10 formats that consistently work, and what to avoid. The complete guide for B2B professionals.",
    type: "article",
    url: "https://trispur.com/blog/how-to-write-linkedin-posts-that-get-engagement",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Write LinkedIn Posts That Get Engagement in 2026",
    description:
      "10 post formats, hook formulas, the 3-2-1 rule, and what NOT to do. Your complete LinkedIn post writing guide.",
  },
  alternates: {
    canonical: "https://trispur.com/blog/how-to-write-linkedin-posts-that-get-engagement",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write LinkedIn Posts That Get Engagement in 2026",
  description:
    "Learn how to write LinkedIn posts that get real engagement in 2026. Covers the algorithm, 5 elements of high-engagement posts, 10 post formats, hook formulas, the 3-2-1 rule, and what NOT to do.",
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
    "@id": "https://trispur.com/blog/how-to-write-linkedin-posts-that-get-engagement",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long should a LinkedIn post be to get maximum engagement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The optimal LinkedIn post length for B2B engagement is 900–1,500 characters (roughly 150–300 words). This is long enough to deliver real value and tell a complete story, but short enough to be read in under 90 seconds. Posts that are too short (under 300 characters) rarely get the 'see more' click that boosts algorithmic distribution. Posts over 1,500 characters can perform well but require exceptional writing to maintain engagement throughout.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best time to post on LinkedIn for maximum engagement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The highest-engagement windows on LinkedIn for B2B content are Tuesday through Thursday, between 7am–9am and 10am–12pm in your target audience's time zone. Avoid posting after 5pm on weekdays or anytime on weekends — LinkedIn engagement drops significantly outside business hours. The most important factor is consistency: posting at the same time each day trains your audience to expect your content.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use hashtags on LinkedIn posts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but sparingly. Use 3–5 relevant hashtags per post, placed at the end of the post or in the comments (some creators prefer the latter to keep the post cleaner). Avoid using 10+ hashtags — LinkedIn's algorithm treats excessive hashtag use as a spam signal and reduces distribution. Choose hashtags that are specific enough to reach your target audience but popular enough to have meaningful followings (50K–500K followers is the sweet spot).",
      },
    },
    {
      "@type": "Question",
      name: "Do images or videos perform better on LinkedIn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the content type. Native documents (PDFs uploaded as carousels) consistently outperform all other formats for educational content — they get 3x more clicks than standard link posts. Short-form native video (60–90 seconds) performs well for thought leadership and personal stories. Plain text posts outperform both when the writing is strong and the hook is exceptional. The worst-performing format is link posts that take users off LinkedIn — the algorithm significantly reduces their distribution.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I post on LinkedIn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3–5 posts per week is the optimal cadence for B2B professionals who want to grow their presence and generate leads. Posting more than once per day actually hurts your reach — LinkedIn's algorithm throttles accounts that post multiple times daily by distributing each post to a smaller percentage of followers. The most important factor is consistency: 3 posts per week every week outperforms 7 posts one week and nothing the next.",
      },
    },
    {
      "@type": "Question",
      name: "Why do my LinkedIn posts get low engagement even though I have many followers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Low engagement despite a large following usually comes down to one of four issues: (1) weak hooks that do not stop the scroll — most people never click 'see more'; (2) posting content that does not resonate with your specific audience — viral content aimed at everyone converts nobody; (3) posting at the wrong time when your audience is not active; or (4) not including a CTA that invites engagement. Start by auditing your last 10 posts' hooks and rewriting them using proven hook formulas.",
      },
    },
  ],
}

export default function HowToWriteLinkedInPostsPage() {
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
              <span className="text-gray-500 text-sm">Content Writing</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
              <span className="text-blue-700 text-sm font-medium">Complete Guide · 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              How to Write LinkedIn Posts That Get Engagement in 2026
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-8">
              Most LinkedIn posts are ignored within 0.3 seconds. This guide explains exactly
              why — and gives you the algorithm knowledge, post formats, hook formulas, and
              writing system to produce posts that consistently stop the scroll and start
              conversations.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400 pb-8 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600" />
                <span>Spur AI Team</span>
              </div>
              <span>·</span>
              <time dateTime="2026-07-10">July 10, 2026</time>
              <span>·</span>
              <span>11 min read</span>
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
                <li><a href="#algorithm" className="hover:underline">1. The LinkedIn algorithm in 2026 — what it rewards</a></li>
                <li><a href="#5-elements" className="hover:underline">2. The 5 elements of a high-engagement LinkedIn post</a></li>
                <li><a href="#10-formats" className="hover:underline">3. 10 post formats that consistently get engagement</a></li>
                <li><a href="#hook-formulas" className="hover:underline">4. Hook formulas with examples</a></li>
                <li><a href="#321-rule" className="hover:underline">5. The 3-2-1 rule for LinkedIn content</a></li>
                <li><a href="#what-not-to-do" className="hover:underline">6. What NOT to do (common mistakes)</a></li>
                <li><a href="#faq" className="hover:underline">7. FAQ</a></li>
              </ol>
            </div>

            {/* Section 1 — Algorithm */}
            <section id="algorithm" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. The LinkedIn algorithm in 2026 — what it rewards
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Understanding how the LinkedIn algorithm works is the foundation of writing posts
                that get engagement. The algorithm&apos;s primary job is to keep people on the
                platform — so it amplifies content that generates engagement (comments, reactions,
                shares) and suppresses content that drives people away (links to external sites,
                posts that get skipped).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                In 2025 and 2026, LinkedIn has made several meaningful changes to its content
                ranking system. The most important shifts to understand:
              </p>

              <div className="space-y-4 mb-6">
                {[
                  {
                    title: "Comments are weighted more than reactions",
                    desc: "A comment — especially a substantive one of more than a few words — sends a much stronger signal to the algorithm than a like. Posts that generate comment conversations are distributed significantly more broadly than posts that collect emoji reactions without discussion.",
                  },
                  {
                    title: "The first hour matters most",
                    desc: "LinkedIn tests your post with a small sample of your followers immediately after you publish. If that initial cohort engages (comments, reactions, shares), the algorithm expands distribution to a larger audience. If they do not, the post gets buried. This means the quality and speed of early engagement is critical — which is why posting at times when your audience is active matters.",
                  },
                  {
                    title: "Dwell time is tracked",
                    desc: "LinkedIn measures how long people spend reading your post — not just whether they react to it. Posts that hold attention for longer (longer-form text, carousels, videos that auto-play) are rewarded with more distribution. This is why thin, one-liner posts rarely perform as well as substantive posts even when the one-liner seems clever.",
                  },
                  {
                    title: "External links are penalized",
                    desc: "LinkedIn does not want people leaving the platform. Posts that include external links in the body of the post consistently receive lower distribution than equivalent posts without them. If you want to share a link, put it in the first comment rather than the post body.",
                  },
                  {
                    title: "Creator mode and consistency are rewarded",
                    desc: "LinkedIn gives preferential distribution to accounts with Creator Mode enabled and those that post consistently. Creators who post 3+ times per week for 30+ days see measurably higher average reach than sporadic posters — even when the content quality is similar. Consistency signals to the algorithm that you are a reliable source of content.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-blue-500 font-bold mt-1 flex-shrink-0">→</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2 — 5 Elements */}
            <section id="5-elements" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. The 5 elements of a high-engagement LinkedIn post
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every high-performing LinkedIn post — regardless of topic, format, or length —
                shares five structural elements. Master these and you will have a reliable
                framework for writing posts that consistently outperform.
              </p>

              <div className="space-y-6">
                {[
                  {
                    num: "1",
                    title: "Hook (first 2–3 lines)",
                    desc: "The hook is the most important part of your post. LinkedIn shows only the first 2–3 lines before truncating with \"see more.\" If those lines do not stop the scroll, nothing else matters. A great hook creates an open loop (a question or statement the reader must resolve), speaks to a specific tension, and uses concrete details rather than vague abstractions.",
                    example: "Strong hook: \"I lost my biggest client last Tuesday. Here's what I learned in the next 72 hours.\"\nWeak hook: \"Resilience is so important in business. Here's why.\"",
                  },
                  {
                    num: "2",
                    title: "Body format",
                    desc: "LinkedIn posts with line breaks and short paragraphs consistently outperform dense text walls. Each paragraph should be 1–3 sentences maximum. Use bullet points or arrows (→) for lists. Leave visual breathing room between sections. The format of the post is as important as the content — if it looks hard to read, most people will not read it.",
                    example: "Format tip: Write your post, then go back and add a line break after every 1–2 sentences. Your engagement rate will increase immediately.",
                  },
                  {
                    num: "3",
                    title: "Value delivery",
                    desc: "Every post should leave the reader better off than before they read it — whether that means more informed, more inspired, more entertained, or with a new perspective. The \"value test\" for a LinkedIn post: after reading this, will my ideal client think \"this person understands my world\"? If yes, publish. If no, rewrite.",
                    example: "Value types: tactical (how to do something), perspective (a new way to think about something), story (an experience that resonates), data (a surprising statistic), or validation (naming a struggle your audience feels but rarely admits).",
                  },
                  {
                    num: "4",
                    title: "Call to action",
                    desc: "Every post should end with a CTA that invites engagement. For awareness posts, this is usually a question: \"What's your take?\" or \"Has this happened to you?\" For authority posts, it might be a soft lead gen CTA: \"Drop 'GUIDE' in the comments and I'll DM you the full framework.\" The absence of a CTA is the most common reason posts underperform — the reader finishes and has nowhere to go.",
                    example: "CTA that works: \"What would you add? Drop it in the comments — I'm genuinely curious what I'm missing.\"\nCTA that does not: Nothing. Or: \"Like this post if you agree.\" (LinkedIn suppresses engagement-bait.)",
                  },
                  {
                    num: "5",
                    title: "Timing",
                    desc: "The best post published at the wrong time will be seen by far fewer people than a good post published at the right time. For B2B audiences, the highest-engagement windows are Tuesday through Thursday, between 7–9am and 10am–12pm in your audience's time zone. Avoid evenings, weekends, and Monday mornings when LinkedIn B2B engagement is lowest.",
                    example: "Practical tip: Schedule your posts in advance using a tool like Spur AI's content calendar rather than trying to publish manually at peak times from your phone.",
                  },
                ].map((item) => (
                  <div key={item.num} className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                        {item.num}
                      </div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                    <p className="text-gray-400 text-xs italic leading-relaxed">{item.example}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 — 10 Formats */}
            <section id="10-formats" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. 10 post formats that consistently get engagement
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Beyond structure, the format or &quot;type&quot; of LinkedIn post you choose determines
                how people engage with it and which part of your audience it reaches. These 10
                formats are proven performers for B2B professionals.
              </p>

              <div className="space-y-4">
                {[
                  {
                    format: "The Personal Story",
                    desc: "Share a real experience with a beginning, middle, and end. Include a lesson or turning point. Stories generate the highest comment volume of any post type because they invite people to share their own experiences.",
                    tip: "Hook formula: \"[Time reference]. [What happened]. Here's what I learned.\"",
                  },
                  {
                    format: "The Numbered List",
                    desc: "\"7 things I wish I knew before [X]\" — numbered lists are highly scannable and easy to share. Each item should be specific and actionable, not vague advice.",
                    tip: "Aim for 5–10 items. Under 5 feels thin; over 10 feels overwhelming.",
                  },
                  {
                    format: "The Contrarian Take",
                    desc: "Challenge a widely-held belief in your industry. Contrarian posts generate the most comments (including disagreements, which expand your reach significantly).",
                    tip: "Formula: \"Unpopular opinion: [Belief everyone holds]. Here's why that's wrong.\"",
                  },
                  {
                    format: "The Before/After",
                    desc: "Share a client transformation or a personal change with specific numbers. The contrast between before and after is inherently compelling and demonstrates results without bragging.",
                    tip: "Be specific: \"From 2 inbound leads/month to 14\" is 10x more compelling than \"significantly more leads.\"",
                  },
                  {
                    format: "The Mistake Post",
                    desc: "Share a mistake you made and what it cost you — then the lesson. Vulnerability drives engagement. People share mistake posts more than almost any other type because they are rare and relatable.",
                    tip: "Do not hedge or soften the mistake. \"I made a mistake\" gets skipped. \"I lost a $60K deal because of one email\" gets read.",
                  },
                  {
                    format: "The Tactical How-To",
                    desc: "Break down a specific process in step-by-step format. Use arrows, bullets, or numbered steps. How-to posts attract your ideal clients because they are actively searching for solutions to the exact problem you are solving.",
                    tip: "Specificity is the key: \"How to write a cold DM that gets responses\" beats \"How to do better outreach.\"",
                  },
                  {
                    format: "The Client Result Post",
                    desc: "Share an anonymized or attributed client outcome with specific numbers. This is the highest-trust content type because it provides social proof at scale — every prospect who reads it sees that you can deliver.",
                    tip: "Format: \"[Client type] came to us with [problem]. [Time frame] later: [specific result]. Here's what we changed.\"",
                  },
                  {
                    format: "The Industry Observation",
                    desc: "Share something you are noticing in your industry — a trend, a shift, a pattern. This positions you as a thought leader who sees what others miss.",
                    tip: "Start with: \"Something I'm seeing more of in [industry]:\" and then describe the observation with 1–2 specific examples.",
                  },
                  {
                    format: "The Curated Insight",
                    desc: "Share an insight from a book, report, conversation, or experience — and add your own perspective or context. This is one of the easiest post types to write consistently because it does not require generating an original idea from scratch.",
                    tip: "Always add your own take. \"This resonated with me\" is not a post. \"This resonated because [specific application to your niche]\" is a post.",
                  },
                  {
                    format: "The Direct Engagement Post",
                    desc: "Ask a specific, answerable question that your audience has a clear opinion on. Pure question posts require high-quality questions to generate comments — the question must be specific enough to invite a real answer, not vague enough to be ignored.",
                    tip: "\"What's the best [specific thing] you did in your business this year?\" gets responses. \"What do you think about [broad topic]?\" does not.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.format}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">{item.desc}</p>
                      <p className="text-gray-400 text-xs italic">{item.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 — Hook Formulas */}
            <section id="hook-formulas" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Hook formulas with examples
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The hook is the most important sentence in your post. Here are the seven most
                reliable hook formulas for B2B LinkedIn content — each with examples you can
                adapt immediately.
              </p>

              <div className="space-y-5">
                {[
                  {
                    formula: "Specific number + outcome",
                    examples: [
                      "I closed $127K in new business last quarter with zero cold outreach. Here's the system.",
                      "I helped 3 clients add $200K in annual revenue using one LinkedIn post format. Here's exactly how.",
                    ],
                  },
                  {
                    formula: "Personal story opener",
                    examples: [
                      "My biggest client fired me on a Tuesday. It was the best thing that ever happened to my business.",
                      "I almost shut down my consultancy 18 months ago. Here's what changed.",
                    ],
                  },
                  {
                    formula: "Contrarian statement",
                    examples: [
                      "Hot take: Posting more on LinkedIn will not grow your consulting business.",
                      "Unpopular opinion: Your niche is not too narrow. It's too broad.",
                    ],
                  },
                  {
                    formula: "Direct question",
                    examples: [
                      "What would change about your business if 5 qualified leads reached out to you every week?",
                      "Why do some consultants charge $500/hr while others charge $50/hr for the same work?",
                    ],
                  },
                  {
                    formula: "The mistake",
                    examples: [
                      "I made a mistake that cost me a $60,000 deal last year. Here's what I would do differently.",
                      "I sent the wrong proposal to a prospect. What happened next surprised me.",
                    ],
                  },
                  {
                    formula: "Time reference + tension",
                    examples: [
                      "3 years ago I had 6 clients and $0 in savings. Today I have 3 clients and a $400K pipeline.",
                      "In 2023, I was charging $75/hr. In 2026, I charge $750/hr. One thing changed.",
                    ],
                  },
                  {
                    formula: "\"This is for you if...\"",
                    examples: [
                      "If you are a B2B consultant who is posting on LinkedIn but not seeing any leads — this is for you.",
                      "If you have been putting off raising your rates, read this first.",
                    ],
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-2.5 py-0.5">
                        Formula {i + 1}
                      </span>
                      <h3 className="font-semibold text-gray-900 text-sm">{item.formula}</h3>
                    </div>
                    <div className="space-y-2">
                      {item.examples.map((ex, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <span className="text-blue-400 font-bold mt-0.5 flex-shrink-0 text-xs">→</span>
                          <p className="text-gray-600 text-sm italic">&ldquo;{ex}&rdquo;</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-violet-50 border border-violet-100 rounded-xl p-5">
                <p className="text-sm text-gray-700">
                  Want 50 more proven hooks organized by post type? Browse the full library at{" "}
                  <Link href="/tools/linkedin-hooks" className="text-violet-600 hover:underline font-medium">
                    our LinkedIn hooks library
                  </Link>
                  {" "}— or use{" "}
                  <Link href="/signup" className="text-violet-600 hover:underline font-medium">
                    Spur AI
                  </Link>
                  {" "}to generate custom hooks matched to your niche and post type.
                </p>
              </div>
            </section>

            {/* Section 5 — 3-2-1 Rule */}
            <section id="321-rule" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. The 3-2-1 rule for LinkedIn content
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                One of the most common LinkedIn content questions is: what should I post about?
                The 3-2-1 rule gives you a simple, sustainable answer that keeps your content
                varied without requiring constant brainstorming.
              </p>

              <div className="grid sm:grid-cols-3 gap-5 mb-6">
                {[
                  {
                    num: "3",
                    color: "bg-blue-600",
                    label: "Value posts per week",
                    desc: "Three posts per week that teach, inform, or inspire your ideal client. These are your core content — how-to posts, industry insights, numbered lists, tactical frameworks. They build authority and attract new followers.",
                  },
                  {
                    num: "2",
                    color: "bg-violet-600",
                    label: "Story or personal posts per week",
                    desc: "Two posts per week that share a personal experience, lesson, or behind-the-scenes moment. These build connection and trust — the emotional dimension that value posts alone cannot provide.",
                  },
                  {
                    num: "1",
                    color: "bg-green-600",
                    label: "CTA post per week",
                    desc: "One post per week with a clear call to action. This might be a soft lead gen post (\"Drop 'GUIDE' in the comments\"), a direct invite to book a call, or promotion of a free tool or resource.",
                  },
                ].map((item) => (
                  <div key={item.num} className="bg-white border border-gray-100 rounded-xl p-5 text-center">
                    <div className={`w-12 h-12 rounded-full ${item.color} text-white text-2xl font-bold flex items-center justify-center mx-auto mb-3`}>
                      {item.num}
                    </div>
                    <div className="font-semibold text-gray-900 text-sm mb-2">{item.label}</div>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <p className="text-sm text-gray-700">
                  <strong>Why 3-2-1 works:</strong> The balance ensures you are always delivering
                  value (which builds authority and attracts followers), always sharing humanity
                  (which builds trust and connection), and always creating opportunities for
                  conversion (which turns followers into clients). A diet of pure value posts
                  without personal content feels impersonal. A diet of pure story posts without
                  value can feel self-indulgent. A diet of CTA posts is just selling — and nobody
                  follows an account that only sells.
                </p>
              </div>
            </section>

            {/* Mid-article CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-violet-700 rounded-2xl p-8 text-center my-14">
              <h2 className="text-xl font-bold text-white mb-3">
                Let AI write your LinkedIn posts
              </h2>
              <p className="text-blue-100 mb-5 max-w-lg mx-auto text-sm">
                Spur AI generates posts in your voice using the exact formats and frameworks in
                this guide. Set your niche, pick a format, get a post in seconds.
              </p>
              <Link
                href="/tools/linkedin-post-generator"
                className="inline-block bg-white text-blue-600 font-bold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors"
              >
                Try the free LinkedIn post generator →
              </Link>
              <p className="text-blue-200 text-xs mt-3">No account required for the free tool</p>
            </div>

            {/* Section 6 — What Not To Do */}
            <section id="what-not-to-do" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. What NOT to do on LinkedIn (common mistakes)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Knowing what to do is only half the battle. These are the mistakes that kill
                engagement — and some of them are surprisingly common even among experienced
                content creators.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Hashtag overload",
                    desc: "Using 10–20 hashtags at the end of your post does not increase reach — it signals to the algorithm that you are trying to game the system. LinkedIn actually reduces distribution for posts with excessive hashtags. Use 3–5 relevant hashtags maximum, placed at the end of your post or in the first comment.",
                  },
                  {
                    title: "The selfie culture trap",
                    desc: "Photos of you at conferences, at your desk, or holding a coffee cup with inspirational captions may feel relatable, but they rarely connect with B2B decision-makers. If you include a photo, make sure it adds context to the story rather than being the story. A chart showing your client results is more credible than a photo of you smiling in a hotel lobby.",
                  },
                  {
                    title: "The humble brag",
                    desc: "\"I'm so honored and humbled to have been featured in [publication]\" posts are among the lowest-engagement content on LinkedIn. They provide no value and signal self-promotion. If you want to share an achievement, frame it as a story or a lesson — explain what you learned from the experience, not how impressive it was to receive it.",
                  },
                  {
                    title: "External links in the post body",
                    desc: "LinkedIn's algorithm significantly reduces the distribution of posts that contain external links in the main body. This is because LinkedIn does not want users leaving the platform. If you want to share a resource, include the link in the first comment and reference it in the post: \"I wrote a full guide on this — link in the first comment.\"",
                  },
                  {
                    title: "Tagging people who are not relevant",
                    desc: "Tagging 10 people in a post to boost reach used to work in 2020. LinkedIn now penalizes this tactic. Only tag people who are directly mentioned in or relevant to the post, and only when the tag adds context for the reader.",
                  },
                  {
                    title: "\"Engagement bait\" calls to action",
                    desc: "Calls to action like \"Like this post if you agree\" or \"Comment YES if you want the guide\" are explicitly penalized by LinkedIn's algorithm. These tactics trigger a spam filter. Instead, invite genuine responses: \"What's your experience with this?\" or \"What would you add?\"",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-red-50 border border-red-100 rounded-xl p-5">
                    <h3 className="font-semibold text-red-700 mb-2 flex items-center gap-2 text-sm">
                      <span className="text-red-400">✗</span>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently asked questions about writing LinkedIn posts
              </h2>
              <div className="space-y-5">
                {[
                  {
                    q: "How long should a LinkedIn post be to get maximum engagement?",
                    a: "The optimal LinkedIn post length for B2B engagement is 900–1,500 characters (roughly 150–300 words). Posts that are too short rarely get the 'see more' click that boosts algorithmic distribution. Posts over 1,500 characters can perform well but require exceptional writing to maintain engagement throughout.",
                  },
                  {
                    q: "What is the best time to post on LinkedIn for maximum engagement?",
                    a: "The highest-engagement windows on LinkedIn for B2B content are Tuesday through Thursday, between 7am–9am and 10am–12pm in your target audience's time zone. Avoid posting after 5pm on weekdays or anytime on weekends. The most important factor is consistency: posting at the same time each day trains your audience to expect your content.",
                  },
                  {
                    q: "Should I use hashtags on LinkedIn posts?",
                    a: "Yes, but sparingly. Use 3–5 relevant hashtags per post, placed at the end of the post or in the comments. Avoid using 10+ hashtags — LinkedIn's algorithm treats excessive hashtag use as a spam signal and reduces distribution.",
                  },
                  {
                    q: "Do images or videos perform better on LinkedIn?",
                    a: "It depends on the content type. Native documents (PDFs uploaded as carousels) consistently outperform all other formats for educational content. Short-form native video (60–90 seconds) performs well for thought leadership. Plain text posts outperform both when the writing is strong and the hook is exceptional. Link posts that take users off LinkedIn perform worst of all.",
                  },
                  {
                    q: "How often should I post on LinkedIn?",
                    a: "3–5 posts per week is the optimal cadence. Posting more than once per day hurts your reach — LinkedIn's algorithm throttles accounts that post multiple times daily. The most important factor is consistency: 3 posts per week every week outperforms 7 posts one week and nothing the next.",
                  },
                  {
                    q: "Why do my LinkedIn posts get low engagement even though I have many followers?",
                    a: "Low engagement despite a large following usually comes down to weak hooks that do not stop the scroll, posting content that does not resonate with your specific audience, posting at the wrong time, or not including a CTA that invites engagement. Start by auditing your last 10 posts' hooks and rewriting them using the proven hook formulas in this guide.",
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Putting it all together</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Writing LinkedIn posts that get engagement is not about going viral. It is about
                consistently showing up with content that your ideal clients find valuable,
                credible, and relatable — and structuring that content so the algorithm
                distributes it broadly.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The formula is simple: open with a hook that creates an open loop, deliver
                genuine value in a scannable format, close with a CTA that invites conversation.
                Follow the 3-2-1 rule for variety. Avoid the common mistakes that suppress
                distribution. And above all, stay consistent.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If the writing is the bottleneck, that is exactly what{" "}
                <Link href="/tools/linkedin-post-generator" className="text-blue-600 hover:underline font-medium">
                  Spur AI&apos;s LinkedIn post generator
                </Link>
                {" "}is built to solve. Generate a full post — hook, body, and CTA — in seconds,
                then edit it in your voice. Your first post takes under 5 minutes.
              </p>
            </section>

            {/* Article CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-violet-700 rounded-2xl p-8 text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-3">
                Write better LinkedIn posts — in seconds
              </h2>
              <p className="text-blue-100 mb-6 max-w-lg mx-auto">
                Spur AI generates posts in your voice and niche using all the formats and
                frameworks in this guide. 14-day free trial. No credit card required.
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

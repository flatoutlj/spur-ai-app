import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: "How to Get Clients on LinkedIn in 2026 (8,100/mo Search Guide) | Spur AI",
  description:
    "A proven 5-step system for how to get clients on LinkedIn. Learn the exact LinkedIn lead generation tips used by top B2B consultants, coaches, and agency owners to fill their pipeline with inbound leads.",
  keywords: [
    "how to get clients on linkedin",
    "linkedin lead generation tips",
    "how to generate leads on linkedin",
    "get clients on linkedin",
    "linkedin for b2b lead generation",
    "linkedin client acquisition",
    "linkedin lead generation strategy",
  ],
  openGraph: {
    title: "How to Get Clients on LinkedIn in 2026 (Proven 5-Step System)",
    description:
      "The exact system B2B consultants use to get clients from LinkedIn — without cold outreach or paid ads. Step-by-step guide.",
    type: "article",
    url: "https://trispur.com/blog/how-to-get-clients-on-linkedin",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get Clients on LinkedIn in 2026",
    description:
      "Proven 5-step system for LinkedIn lead generation. How B2B consultants fill their pipeline with inbound leads.",
  },
  alternates: {
    canonical: "https://trispur.com/blog/how-to-get-clients-on-linkedin",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Get Clients on LinkedIn in 2026 (Proven 5-Step System)",
  description:
    "A proven 5-step system for how to get clients on LinkedIn. Learn the exact LinkedIn lead generation tips used by top B2B consultants and agency owners.",
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
    "@id": "https://trispur.com/blog/how-to-get-clients-on-linkedin",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to get clients from LinkedIn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most B2B consultants who post consistently 3x per week see their first inbound LinkedIn lead within 30 to 60 days. The compounding effect — where your authority builds over time — typically kicks in around month 3. By month 6, a well-executed LinkedIn content strategy should be generating 2–5 qualified inbound leads per month.",
      },
    },
    {
      "@type": "Question",
      name: "What's the best LinkedIn lead generation strategy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most effective LinkedIn lead generation strategy for B2B consultants combines consistent content (3x per week) with proactive relationship-building (connecting with everyone who engages) and a conversion-optimized profile. Content builds trust at scale; direct outreach converts individual prospects. You need both.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use LinkedIn Premium or Sales Navigator to get clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most consultants don't need Sales Navigator to get clients from LinkedIn. The free version, combined with a strong content strategy and profile, is sufficient for the first 50+ clients. Sales Navigator adds value if you're doing high-volume outbound prospecting. Start with content and a great profile first — they're free.",
      },
    },
    {
      "@type": "Question",
      name: "How many LinkedIn connections do I need to get clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consultants get clients from LinkedIn with as few as 300 connections when those connections are the right people and their content is strong. Network size matters far less than network quality and content quality. A targeted network of 500 ideal clients beats a random network of 5,000.",
      },
    },
  ],
}

export default function HowToGetClientsOnLinkedInPage() {
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
        <header className="pt-28 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-5">
              <Link href="/blog" className="text-gray-400 hover:text-gray-600 text-sm transition-colors">
                Blog
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500 text-sm">LinkedIn Lead Generation</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5 mb-6">
              <span className="text-green-700 text-sm font-medium">Practical Guide · 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              How to Get Clients on LinkedIn in 2026: A Proven 5-Step System
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-8">
              The consultants and agency owners filling their pipeline from LinkedIn are not buying
              ads or sending 500 cold messages a week. They are using a systematic approach to
              content, positioning, and relationship-building. This guide breaks down exactly how
              it works.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400 pb-8 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600" />
                <span>Spur AI Team</span>
              </div>
              <span>·</span>
              <time dateTime="2026-07-10">July 10, 2026</time>
              <span>·</span>
              <span>14 min read</span>
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
                <li><a href="#why-linkedin-leads" className="hover:underline">1. Why LinkedIn is the highest-ROI channel for B2B client acquisition</a></li>
                <li><a href="#step1-profile" className="hover:underline">2. Step 1 — Build a profile that converts strangers into leads</a></li>
                <li><a href="#step2-content" className="hover:underline">3. Step 2 — Create content that attracts your ideal clients</a></li>
                <li><a href="#step3-network" className="hover:underline">4. Step 3 — Build a targeted network that compounds over time</a></li>
                <li><a href="#step4-outreach" className="hover:underline">5. Step 4 — Turn engagement into conversations (without being pushy)</a></li>
                <li><a href="#step5-system" className="hover:underline">6. Step 5 — Build the system that keeps the pipeline full</a></li>
                <li><a href="#timeline" className="hover:underline">7. Realistic timeline: what to expect in months 1–6</a></li>
                <li><a href="#faq" className="hover:underline">8. FAQ: LinkedIn lead generation tips answered</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <section id="why-linkedin-leads" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Why LinkedIn is the highest-ROI channel for B2B client acquisition
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ask a room of B2B consultants where their best clients came from in the last two
                years. A striking number will say LinkedIn — not because they ran ads, not because
                they hired a sales team, but because someone read a post and reached out.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                This is not an accident. LinkedIn is structurally different from every other
                platform for B2B client acquisition. When a decision-maker reads your post, they
                can instantly see your job title, your experience, your mutual connections, and
                recommendations from past clients. They can verify you are real and credible in
                thirty seconds. That verification step — which takes weeks in cold outreach — is
                done before they even send you a message.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The result is a different quality of inbound lead. LinkedIn leads are
                self-qualified: they already know your positioning, they have read your
                perspective, and they have decided on their own that you might be the right
                person to help them. They show up to the discovery call warmer than almost any
                other lead source.
              </p>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 my-6">
                <p className="text-gray-700 text-sm font-medium mb-1">Why this matters for your pipeline</p>
                <p className="text-gray-600 text-sm">
                  80% of B2B social leads come from LinkedIn. The platform has 1 billion members,
                  and the organic reach available to creators who post consistently is still
                  exceptional compared to other platforms — your posts can reach thousands of
                  decision-makers for free. That opportunity is not closing; it is expanding.
                </p>
              </div>
            </section>

            {/* Step 1 */}
            <section id="step1-profile" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Step 1: Build a LinkedIn profile that converts strangers into leads
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Your LinkedIn profile is a sales page. Most professionals treat it like a resume.
                This single mistake costs consultants thousands of dollars in potential revenue
                every year — because prospects click on your profile after seeing your content, and
                what they find determines whether they message you or keep scrolling.
              </p>

              <div className="space-y-5">
                {[
                  {
                    element: "Headline",
                    bad: "Management Consultant at [Firm Name]",
                    good: "I help SaaS founders reduce churn by 40% in 90 days | B2B Retention Consultant",
                    why: "Your headline appears in search results, on posts, and in notifications. It should state who you help, what outcome you create, and how you're different — not your job title.",
                  },
                  {
                    element: "Profile photo",
                    bad: "Casual photo, low resolution, no eye contact",
                    good: "Professional headshot, high contrast, forward-facing, white or neutral background",
                    why: "Profiles with professional photos get 14x more views. This is the first thing a prospect sees. First impressions happen in 100ms.",
                  },
                  {
                    element: "Banner image",
                    bad: "Default blue LinkedIn background",
                    good: "A clean image with your value proposition and a CTA (\"Book a call: calendly.com/yourname\")",
                    why: "The banner is prime real estate that 95% of consultants waste. Use it to reinforce your positioning and give prospects a next step.",
                  },
                  {
                    element: "About section",
                    bad: "\"I'm a passionate professional with 10 years of experience...\"",
                    good: "Open with the problem your client is living inside. Then describe how you solve it. Close with a clear CTA.",
                    why: "Prospects are reading your About section to decide if you understand their situation. Lead with their problem, not your credentials.",
                  },
                  {
                    element: "Featured section",
                    bad: "Empty, or links to generic company pages",
                    good: "Your best-performing post, a client case study, or a lead magnet",
                    why: "The Featured section appears above your experience. It's the first piece of content a prospect sees. Make it your best social proof or most valuable free resource.",
                  },
                ].map((item) => (
                  <div key={item.element} className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                    <div className="bg-gray-50 px-5 py-3 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-900 text-sm">{item.element}</h3>
                    </div>
                    <div className="p-5 space-y-3">
                      <div className="flex items-start gap-2 text-sm">
                        <span className="text-red-400 font-bold flex-shrink-0">✗</span>
                        <span className="text-gray-500 italic">{item.bad}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                        <span className="text-gray-700 font-medium">{item.good}</span>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed pl-5">{item.why}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Step 2 */}
            <section id="step2-content" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Step 2: Create content that attracts your ideal clients
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Content is the engine of the LinkedIn client acquisition system. It is how you
                build trust with hundreds of decision-makers simultaneously — something cold
                outreach can never do at scale.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                But the type of content matters enormously. Most consultants post about themselves
                — their credentials, their opinions, their announcements. The consultants who
                actually get clients from LinkedIn post about their clients — the problems they
                face, the mistakes they make, the results they want.
              </p>

              <h3 className="font-semibold text-gray-900 mb-4">The 5 content types that generate LinkedIn leads</h3>
              <div className="space-y-4 mb-6">
                {[
                  {
                    type: "Client-problem post",
                    desc: "Describe a problem your ideal client is experiencing — in their language, with their exact frustrations. Decision-makers who are living that problem stop scrolling and think: 'This person understands my situation exactly.'",
                    example: "\"Most agencies I talk to have the same problem: great at delivery, terrible at documenting results. Here's why this is costing you renewals.\"",
                  },
                  {
                    type: "Tactical how-to post",
                    desc: "Share a specific system, framework, or process. Demonstrate your expertise in concrete terms. Prospects who read a well-written tactical post experience a preview of what it would be like to work with you.",
                    example: "\"The 3-step process we use to increase client retention by 40% in the first 90 days of an engagement.\"",
                  },
                  {
                    type: "Client result post",
                    desc: "Share a specific, quantified outcome from a client engagement. Be as specific as possible. 'Helped a client increase revenue' is forgettable. '43% revenue increase in 5 months for a Series A SaaS company' is memorable.",
                    example: "\"A client came to us last October with $847K ARR and 8% monthly churn. Today: $1.4M ARR and 2.1% churn. Here's the 4-step framework we used.\"",
                  },
                  {
                    type: "Contrarian take",
                    desc: "Challenge a widely-held belief in your industry. Contrarian posts generate more comments than any other type, and comments are what the LinkedIn algorithm rewards with additional reach. Every comment is a vote for your post to be shown to more people.",
                    example: "\"LinkedIn lead generation advice you've probably heard: post every day. Here's why that's wrong for consultants.\"",
                  },
                  {
                    type: "Personal story with a business lesson",
                    desc: "Share a real experience — a failure, a turning point, a hard conversation. Stories create emotional connection, and emotional connection creates trust. Trust is what converts a follower into a client.",
                    example: "\"I raised my rates by 3x in 2024. Here's what I lost, what I gained, and what I wish I'd known before doing it.\"",
                  },
                ].map((item) => (
                  <div key={item.type} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">{item.type}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2">{item.desc}</p>
                    <p className="text-gray-400 text-xs italic">{item.example}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <p className="text-sm text-gray-700">
                  <strong>Posting frequency:</strong> 3 posts per week is the sweet spot for
                  consultants building LinkedIn lead generation. Less than 3 and you lose
                  algorithmic momentum. More than 5 and you start recycling ideas, and quality
                  drops. Need help generating 3 high-quality posts per week?{" "}
                  <Link href="/signup" className="text-blue-600 hover:underline font-medium">
                    Spur AI
                  </Link>{" "}
                  is built for exactly that.
                </p>
              </div>
            </section>

            {/* Step 3 */}
            <section id="step3-network" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Step 3: Build a targeted network that compounds over time
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your LinkedIn content is only shown to your network and the networks of people
                who engage with it. A targeted network of 500 ideal clients will generate more
                leads than a random network of 5,000 — because the algorithm shows your content
                to people who are relevant to the people who engage.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  {
                    title: "Define your ideal client with precision",
                    desc: "Before you connect with anyone, get clear on exactly who you want to reach. Job title, industry, company size, geography if relevant. The more specific you are, the more valuable every connection becomes. 'CEO of a B2B SaaS company with 10–50 employees' is actionable. 'Business owner' is not.",
                  },
                  {
                    title: "Connect with your ideal clients directly",
                    desc: "Search LinkedIn using the filters available to you (job title, company, industry, location). Send 5–10 targeted connection requests per day. Write a personalized note when you can: reference something specific about their company, a post they wrote, or a mutual connection. Avoid generic 'I'd love to connect' messages.",
                  },
                  {
                    title: "Connect with everyone who engages with your content",
                    desc: "Every time someone likes, comments on, or shares your post, send them a connection request. In the request note: 'Saw you engaged with my post on [topic] — wanted to connect.' These are warm connections because they've already seen your work and chosen to engage with it.",
                  },
                  {
                    title: "Engage with your ideal clients' content",
                    desc: "Find the posts your ideal clients are writing. Leave thoughtful, substantive comments — not 'great post!' but a genuine perspective or follow-up question. Your comment shows up to their entire network. This is free visibility to exactly the right people, and it puts your name on their radar before you ever send an outreach message.",
                  },
                ].map((tip, i) => (
                  <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1.5 text-sm">{tip.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Step 4 */}
            <section id="step4-outreach" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Step 4: Turn engagement into conversations — without being pushy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Content gets you attention. Conversations get you clients. The gap between a
                person who likes your posts and a person who hires you is a conversation — and
                most consultants either never start that conversation or start it too aggressively.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The LinkedIn lead generation tips that work are almost always about starting
                genuine conversations, not sending pitch messages.
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">The warm outreach sequence</h3>
                  <div className="space-y-3">
                    {[
                      {
                        timing: "Day 1 — after they engage",
                        action: "Send a connection request with a short personal note referencing their engagement.",
                        message: "\"Hi [Name] — saw your comment on my post about [topic]. Really resonated with what you said. Would love to connect.\"",
                      },
                      {
                        timing: "Day 3 — after they accept",
                        action: "Send a thank-you message that opens a conversation. No pitch. Just curiosity.",
                        message: "\"Thanks for connecting, [Name]. I noticed you're working on [thing from their profile]. Curious — what's the biggest challenge you're navigating there right now?\"",
                      },
                      {
                        timing: "If they respond",
                        action: "Have a genuine conversation. Ask follow-up questions. Share a relevant resource. When the moment is right and the fit is clear, suggest a call.",
                        message: "\"Based on what you're describing, this sounds like something we might be able to help with. Would it make sense to jump on a 20-minute call to explore if there's a fit?\"",
                      },
                    ].map((step) => (
                      <div key={step.timing} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <div className="text-xs font-semibold text-blue-600 mb-2">{step.timing}</div>
                        <p className="text-gray-700 text-sm mb-2">{step.action}</p>
                        <p className="text-gray-500 text-xs italic bg-white rounded-lg p-3 border border-gray-100">{step.message}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                  <p className="text-sm text-gray-700">
                    <strong>What to avoid:</strong> Sending your services deck in message #1.
                    Saying &quot;I help people like you achieve [result]&quot; before you know anything
                    about them. Asking for a call before establishing any rapport. Automated
                    LinkedIn outreach sequences that feel like spam (because they are). These
                    approaches damage your reputation with exactly the people you want to impress.
                  </p>
                </div>
              </div>
            </section>

            {/* Step 5 */}
            <section id="step5-system" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Step 5: Build the system that keeps the pipeline full
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The difference between consultants who consistently get clients from LinkedIn and
                those who get occasional results is systematization. LinkedIn client acquisition
                is a machine — and like any machine, it requires consistent input to produce
                consistent output.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">The LinkedIn client acquisition weekly routine</h3>
                <div className="space-y-3">
                  {[
                    { day: "Sunday (30 min)", task: "Write and schedule 3 posts for the week using Spur AI or your preferred workflow." },
                    { day: "Monday–Friday (10 min/day)", task: "Check LinkedIn notifications. Connect with everyone who engaged. Leave 2 thoughtful comments on posts from ideal clients." },
                    { day: "Tuesday & Thursday (15 min)", task: "Review new connections who accepted. Identify anyone who fits your ideal client profile. Send a warm follow-up message (not a pitch)." },
                    { day: "Friday (15 min)", task: "Review the week's content performance. Note which posts got the most engagement and why. Use this to inform next week's content ideas." },
                  ].map((item) => (
                    <div key={item.day} className="flex gap-3 text-sm">
                      <span className="font-semibold text-blue-600 flex-shrink-0 w-40">{item.day}</span>
                      <span className="text-gray-700">{item.task}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-xs mt-4">
                  Total time investment: approximately 1.5 hours per week. This is the full system.
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                The weekly time investment above — approximately 1.5 hours — is the entire
                system. Most consultants spend more time than this on activities that generate
                zero new clients. LinkedIn content, done consistently, is one of the highest-ROI
                activities available to a B2B professional.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The writing step is where most people get stuck. If generating 3 high-quality
                posts per week feels like too much, that is exactly what{" "}
                <Link href="/signup" className="text-blue-600 hover:underline font-medium">
                  Spur AI
                </Link>{" "}
                is designed to solve. In 10 minutes with Spur AI, most consultants have their
                full week of posts ready to schedule.
              </p>
            </section>

            {/* Timeline */}
            <section id="timeline" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Realistic timeline: what to expect in months 1–6
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                One of the most common reasons consultants abandon their LinkedIn strategy is
                unrealistic expectations. They post for three weeks, see no clients, and conclude
                it doesn't work. Here is what actually happens when you execute this system
                consistently.
              </p>

              <div className="space-y-4">
                {[
                  {
                    period: "Month 1",
                    title: "Building the foundation",
                    desc: "Profile optimized. First 8–12 posts published. Network growing by 5–15 targeted connections per week. Engagement low but increasing. You will likely receive 0 client leads. This is normal. You are building an asset that compounds.",
                    outcome: "Outcome: A functioning LinkedIn presence that is starting to build authority.",
                  },
                  {
                    period: "Month 2",
                    title: "Momentum building",
                    desc: "Your post engagement should be increasing week over week. You will start seeing familiar names in your notifications — the same prospects engaging with multiple posts. This is the signal that your content is resonating. Expect 0–2 inbound inquiries.",
                    outcome: "Outcome: A warm audience of ideal clients who know who you are.",
                  },
                  {
                    period: "Month 3",
                    title: "First real traction",
                    desc: "The compounding effect starts to kick in. Posts begin referencing each other in readers' minds. Your profile views increase significantly. Expect 1–3 inbound leads per month. You may close your first LinkedIn client this month.",
                    outcome: "Outcome: First inbound leads. Proof of concept validated.",
                  },
                  {
                    period: "Months 4–6",
                    title: "System fully activated",
                    desc: "You now have a track record that prospects can review. Your best posts continue generating engagement and profile visits. Expect 2–5 qualified inbound leads per month. At this stage, many consultants find LinkedIn their primary source of new business.",
                    outcome: "Outcome: A predictable inbound pipeline generating 2–5 leads/month.",
                  },
                ].map((phase) => (
                  <div key={phase.period} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5">
                    <div className="flex-shrink-0 text-center">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white text-xs font-bold flex items-center justify-center leading-tight">
                        {phase.period}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{phase.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">{phase.desc}</p>
                      <p className="text-blue-600 text-xs font-medium">{phase.outcome}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                LinkedIn lead generation tips: FAQ
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "How long does it take to get clients from LinkedIn?",
                    a: "Most B2B consultants who post consistently 3x per week see their first inbound LinkedIn lead within 30 to 60 days. The compounding effect — where your authority builds over time — typically kicks in around month 3. By month 6, a well-executed LinkedIn content strategy should be generating 2–5 qualified inbound leads per month.",
                  },
                  {
                    q: "What's the best LinkedIn lead generation strategy?",
                    a: "The most effective LinkedIn lead generation strategy for B2B consultants combines consistent content (3x per week) with proactive relationship-building (connecting with everyone who engages) and a conversion-optimized profile. Content builds trust at scale; direct outreach converts individual prospects. You need both.",
                  },
                  {
                    q: "Should I use LinkedIn Premium or Sales Navigator to get clients?",
                    a: "Most consultants don't need Sales Navigator to get clients from LinkedIn. The free version, combined with a strong content strategy and profile, is sufficient for the first 50+ clients. Sales Navigator adds value if you're doing high-volume outbound prospecting. Start with content and a great profile first — they're free.",
                  },
                  {
                    q: "How many LinkedIn connections do I need to get clients?",
                    a: "Consultants get clients from LinkedIn with as few as 300 connections when those connections are the right people and their content is strong. Network size matters far less than network quality and content quality. A targeted network of 500 ideal clients beats a random network of 5,000.",
                  },
                  {
                    q: "How do I get clients on LinkedIn without cold messaging?",
                    a: "Create content consistently. Connect with everyone who engages. Leave thoughtful comments on your ideal clients' posts. When you connect, start with curiosity rather than a pitch. This inbound-first approach takes longer to start but produces warmer, higher-quality leads than cold outreach at scale.",
                  },
                  {
                    q: "What type of content gets clients from LinkedIn?",
                    a: "The content types that convert followers into clients are: client-problem posts (you describe their frustration exactly), tactical how-to posts (you demonstrate your expertise through specific systems), client result posts (you prove the outcomes you create), and personal stories with business lessons (you build trust through vulnerability and experience).",
                  },
                ].map((faq, i) => (
                  <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">{faq.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Getting clients on LinkedIn in 2026 is not a mystery. It is a system: optimize
                your profile to convert, create content that attracts your ideal clients,
                build a targeted network that compounds, turn engagement into conversations,
                and systematize all of it so it runs consistently week after week.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The consultants and agency owners winning on LinkedIn are not smarter or more
                credentialed than you. They are more consistent. They show up with valuable
                content three times a week, they build relationships intentionally, and they
                have the patience to let the compounding effect do its work.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If the content creation piece is the bottleneck — if staring at a blank screen
                three times a week feels unsustainable —{" "}
                <Link href="/signup" className="text-blue-600 hover:underline font-medium">
                  Spur AI
                </Link>{" "}
                is designed to remove that bottleneck entirely. Start a free 14-day trial and
                generate your first week of LinkedIn content today.
              </p>
            </section>

            {/* Article CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-violet-700 rounded-2xl p-8 text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-3">
                Ready to build your LinkedIn client pipeline?
              </h2>
              <p className="text-blue-100 mb-6 max-w-lg mx-auto">
                Spur AI generates LinkedIn posts in your voice — the content engine behind the
                system in this guide. 14-day free trial. No credit card required.
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
              <div className="grid sm:grid-cols-3 gap-4">
                <Link
                  href="/tools/linkedin-post-generator"
                  className="flex items-start gap-3 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-2xl">✍️</span>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1 text-sm">LinkedIn Post Generator</div>
                    <div className="text-gray-500 text-xs">Generate posts in your voice in seconds.</div>
                  </div>
                </Link>
                <Link
                  href="/tools/linkedin-content-ideas"
                  className="flex items-start gap-3 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-2xl">💡</span>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1 text-sm">150 LinkedIn Content Ideas</div>
                    <div className="text-gray-500 text-xs">Never run out of ideas to post.</div>
                  </div>
                </Link>
                <Link
                  href="/blog/linkedin-content-strategy-for-consultants"
                  className="flex items-start gap-3 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-2xl">📋</span>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1 text-sm">LinkedIn Strategy Guide</div>
                    <div className="text-gray-500 text-xs">Complete 2026 playbook for B2B consultants.</div>
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
                  <li><Link href="/tools/linkedin-post-generator" className="hover:text-white transition-colors">LinkedIn Post Generator</Link></li>
                  <li><Link href="/tools/linkedin-hooks" className="hover:text-white transition-colors">LinkedIn Hooks Library</Link></li>
                  <li><Link href="/tools/linkedin-content-ideas" className="hover:text-white transition-colors">LinkedIn Content Ideas</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
                  <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                  <li><Link href="/signup" className="hover:text-white transition-colors">Start free trial</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><a href="mailto:hello@trispur.com" className="hover:text-white transition-colors">Contact</a></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

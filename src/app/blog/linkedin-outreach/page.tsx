import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "LinkedIn Outreach: 8 DM Templates That Get Replies (2026 Guide)",
  description:
    "LinkedIn outreach templates that actually get responses. 8 DM scripts for cold outreach, follow-ups, referrals, and warm introductions — with tips on what works in 2026.",
  keywords: [
    "linkedin outreach",
    "linkedin outreach message",
    "linkedin outreach templates",
    "linkedin cold outreach",
    "linkedin dm templates",
    "linkedin outreach strategy",
    "linkedin message templates",
  ],
  openGraph: {
    title: "LinkedIn Outreach: 8 DM Templates That Get Replies (2026)",
    description: "8 LinkedIn DM templates for cold outreach, follow-ups, and warm introductions that actually get responses.",
    type: "article",
    url: "https://trispur.com/blog/linkedin-outreach",
    siteName: "Spur AI",
  },
  alternates: { canonical: "https://trispur.com/blog/linkedin-outreach" },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "LinkedIn Outreach: 8 DM Templates That Get Replies (2026 Guide)",
  description: "8 LinkedIn DM templates and outreach strategies that get responses — for cold outreach, follow-ups, and warm introductions.",
  author: { "@type": "Organization", name: "Spur AI" },
  publisher: { "@type": "Organization", name: "Spur AI", url: "https://trispur.com" },
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  url: "https://trispur.com/blog/linkedin-outreach",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a good LinkedIn outreach message?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A good LinkedIn outreach message has four qualities: it's specific to the recipient (references their content, company, or situation), it leads with something relevant to them (not your pitch), it's short (under 100 words), and it has a low-friction ask (not 'let's jump on a call' but 'would it be okay if I shared one idea?'). The best outreach messages feel like they were written specifically for that one person — because they were.",
      },
    },
    {
      "@type": "Question",
      name: "What is the LinkedIn outreach success rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generic LinkedIn cold messages have response rates of 1–5%. Personalized LinkedIn outreach with specific hooks relevant to the recipient typically achieves 15–30% response rates. The difference is entirely in specificity and relevance. Messages that reference a post the recipient wrote, a mutual connection, or a specific company achievement consistently outperform generic templates by 3–10x.",
      },
    },
    {
      "@type": "Question",
      name: "How many LinkedIn connection requests can I send per day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LinkedIn allows approximately 100 connection requests per week (roughly 14–20 per day) for most accounts. Sending too many requests that go unaccepted can result in LinkedIn restricting your account's ability to send connection requests. Focus on targeted, personalized requests rather than volume. A 70% acceptance rate on 10 daily requests generates more quality connections than a 5% acceptance rate on 50 daily requests.",
      },
    },
  ],
}

const TEMPLATES = [
  {
    type: "Content-triggered connection",
    context: "After they published a strong post",
    template: `Hi [Name],

Your post about [specific topic] this week stopped me mid-scroll. [Specific thing they said] — I've been thinking about that ever since.

I work with [your ICP description] on [your work area] and that point applies directly to what I'm seeing too.

Would love to be connected.`,
    why: "References a specific post and specific idea. Shows you read it thoroughly. Never mentions what you sell.",
  },
  {
    type: "Warm introduction DM",
    context: "After being introduced by a mutual connection",
    template: `Hi [Name],

[Mutual connection's name] suggested I reach out — apparently we're both working on [relevant area] and he thought it made sense to connect.

I've been following [their company/work] for a while. Would love to hear more about what you're working on.`,
    why: "Uses the mutual connection's social proof. Frames it as curiosity about them, not a sales pitch.",
  },
  {
    type: "Value-led cold DM",
    context: "First message after connecting with no prior engagement",
    template: `Hi [Name],

Thanks for connecting. I noticed you work with [specific client type] on [specific problem area] — an area I've spent a lot of time in too.

I put together a short framework we've been using to help [your ICP] [specific result]. Happy to share it if it would be useful. No agenda.`,
    why: "Leads with giving, not asking. Makes a specific, low-friction offer. Explicitly removes sales pressure.",
  },
  {
    type: "Podcast/content guest pitch",
    context: "Pitching yourself as a guest or contributor",
    template: `Hi [Name],

I've been listening to [Podcast Name] for about a year — the episode on [specific topic] was genuinely one of the best conversations I've come across on that subject.

I work with [brief ICP/specialty] and focus specifically on [niche topic]. I have a perspective on [topic] that might be interesting to your audience — specifically around [one specific contrarian angle].

Would you be open to a 10-minute chat to see if it's a fit?`,
    why: "Proves you're a real listener with specific reference. Leads with the value you'd provide to their audience, not what you get from appearing.",
  },
  {
    type: "Follow-up after no response",
    context: "Following up 5–7 days after initial message",
    template: `Hi [Name],

Wanted to follow up in case my last message got buried.

I was just sharing [brief reminder of what you offered]. Totally understand if the timing isn't right — no pressure at all.

If it ever becomes relevant, I'm here. Either way, would love to stay connected.`,
    why: "Short, no-pressure follow-up. Acknowledges their time. Doesn't repeat the full pitch. Leaves the door open without being pushy.",
  },
  {
    type: "Event or conference follow-up",
    context: "After meeting someone at an in-person event",
    template: `Hi [Name],

Great to meet you at [Event Name] on [day]. The conversation about [specific topic you discussed] has been on my mind.

[One sentence connecting their challenge to something you could help with or share.]

Happy to continue the conversation if you're open to it — or just good to be connected either way.`,
    why: "Anchors to a specific shared experience. References the actual conversation. Frames continued contact as optional, not pressured.",
  },
  {
    type: "Referral request",
    context: "Asking a satisfied client or contact for an introduction",
    template: `Hi [Name],

I hope things are going well with [something specific about their business or recent news].

I'm specifically looking to connect with [very specific ICP description] who are dealing with [specific challenge]. I thought of you because you tend to know people in that world.

If anyone comes to mind, I'd really appreciate an introduction. If not, no worries at all — I appreciate you even thinking about it.`,
    why: "Very specific ICP description makes it easy to think of the right person. Removes obligation if they can't think of anyone. Doesn't ask for more than one introduction.",
  },
  {
    type: "Re-engagement message",
    context: "Reaching back out to a cold connection after months of silence",
    template: `Hi [Name],

It's been a while — I saw [something recent about them: post, company news, LinkedIn activity] and it made me think of you.

I've been working on [something relevant to their world] recently and thought of our last conversation.

How are things going with [something you discussed or know about their work]?`,
    why: "References something current, proving you're paying attention. Asks about them first. Makes the conversation feel natural rather than transactional.",
  },
]

export default function LinkedInOutreachPage() {
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
              <Link href="/tools/linkedin-dm-generator" className="text-gray-500 text-sm hover:text-gray-800 hidden sm:block">DM generator</Link>
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
              <span className="text-gray-600">LinkedIn Outreach</span>
            </nav>
          </div>

          {/* Hero */}
          <section className="py-10 px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">Outreach & DMs</span>
                <span className="text-xs text-gray-400">10 min read · Updated July 2026</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                LinkedIn Outreach: 8 DM Templates That Get Replies
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                Most LinkedIn outreach gets ignored — not because people aren&apos;t open to connecting, but because the messages are generic, premature, or obviously templated. Here are 8 message frameworks that get responses, with real templates you can adapt immediately.
              </p>
              <Link
                href="/tools/linkedin-dm-generator"
                className="inline-flex items-center gap-2 gradient-bg text-white text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Generate a personalized DM →
              </Link>
            </div>
          </section>

          <article className="px-4 pb-16">
            <div className="max-w-3xl mx-auto">

              {/* Why most outreach fails */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why most LinkedIn outreach gets ignored</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  LinkedIn inboxes are full of the same message, sent by hundreds of different people: &ldquo;Hi [Name], I noticed you work at [Company]. We help businesses like yours with [vague service]. Would you be open to a quick call?&rdquo;
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This message fails for three reasons. It&apos;s clearly a template. It asks for too much too soon (a call from a stranger with no established value). And it centers the sender&apos;s needs, not the recipient&apos;s.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  High-response LinkedIn outreach does the opposite: it&apos;s clearly written for this one person, it leads with something valuable or interesting, and the initial ask is so low-friction that saying yes takes no effort at all.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { stat: "1–5%", label: "Response rate for generic cold messages" },
                    { stat: "15–30%", label: "Response rate for personalized outreach with specific hooks" },
                    { stat: "3–10x", label: "Improvement from specificity vs. volume" },
                  ].map(({ stat, label }) => (
                    <div key={stat} className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{stat}</div>
                      <div className="text-xs text-gray-600 leading-relaxed">{label}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Rules */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5 rules for LinkedIn outreach that gets replies</h2>
                <div className="space-y-3">
                  {[
                    { n: "1", rule: "Be specific or be ignored", detail: "Reference a specific post, a specific company detail, a specific role change, or a specific mutual connection. 'I noticed you work in sales' is generic. 'Your post on qualifying prospects this week was one of the clearest frameworks I've seen on that topic' is specific." },
                    { n: "2", rule: "Lead with them, not you", detail: "Your first message should be 80% about them and 20% (or less) about you. Don't start with 'I am a consultant who...' Start with something about their situation, their content, or their company." },
                    { n: "3", rule: "Keep it under 100 words", detail: "Long messages signal that a lot of effort went into writing them — which usually means it's a pitch. Short messages feel like a genuine human note. 50–80 words is the sweet spot for first contact." },
                    { n: "4", rule: "Ask for something small or nothing at all", detail: "Don't ask for a call in message one. Ask for a response. Ask if they'd find something useful. Ask a genuine question. The goal of message one is message two, not a meeting." },
                    { n: "5", rule: "Send one follow-up, then move on", detail: "A single follow-up after 5–7 days is acceptable. Two follow-ups start feeling persistent. Three or more is harassment. If someone hasn't responded after two attempts, they're not interested right now." },
                  ].map(({ n, rule, detail }) => (
                    <div key={n} className="flex gap-4 bg-gray-50 rounded-xl border border-gray-100 p-4">
                      <div className="w-7 h-7 gradient-bg rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        {n}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">{rule}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Templates */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">8 LinkedIn outreach templates that work</h2>
                <p className="text-gray-500 mb-6 text-sm">
                  Each template includes the context it&apos;s designed for and why it works. Replace brackets with specific details — the more specific, the better.
                </p>
                <div className="space-y-8">
                  {TEMPLATES.map((t, i) => (
                    <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                      <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Template {i + 1} · </span>
                          <span className="text-sm font-semibold text-gray-900">{t.type}</span>
                        </div>
                        <span className="text-xs text-gray-400">{t.context}</span>
                      </div>
                      <div className="p-5">
                        <div className="bg-white border border-gray-100 rounded-xl p-4 mb-4 font-mono text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                          {t.template}
                        </div>
                        <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                          <p className="text-xs font-semibold text-green-700 mb-1">Why this works:</p>
                          <p className="text-sm text-gray-600">{t.why}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tool CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl p-6 text-center mb-10">
                <h2 className="text-xl font-bold text-white mb-2">Generate personalized LinkedIn DMs with AI</h2>
                <p className="text-blue-100 text-sm mb-5">
                  Spur AI&apos;s free DM generator writes personalized outreach messages in 25+ templates — including connection requests, follow-ups, referral asks, and more.
                </p>
                <Link
                  href="/tools/linkedin-dm-generator"
                  className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
                >
                  Try the free DM generator →
                </Link>
                <p className="text-blue-200 text-xs mt-3">Free · No signup required</p>
              </div>

              {/* What to avoid */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What to avoid in LinkedIn outreach</h2>
                <div className="space-y-3">
                  {[
                    { avoid: "Pitching in the connection request", fix: "A connection request is not an invitation to sell. Use the note (if you include one) to explain why you want to connect — not to pitch. Pitching in the connection request is the fastest way to get reported as spam." },
                    { avoid: "The 'I'd love to pick your brain' message", fix: "'Can I pick your brain?' is asking someone to give you their expertise for free. Successful people get this request constantly. If you want their insight, get specific: what do you want to discuss, for how long, and what do they get from the conversation?" },
                    { avoid: "Automated outreach that doesn't personalize", fix: "Tools that auto-DM everyone who visits your profile or connects with you generate volume at the cost of reputation. One thoughtful DM that gets a reply is worth more than 100 automated messages that get marked as spam." },
                    { avoid: "Asking for referrals before you've delivered value", fix: "Asking for introductions from someone before you've given them a reason to trust you is premature. Build the relationship first — engage with their content, make an introduction for them, share something valuable — before asking for anything." },
                    { avoid: "Sending a calendar link in your first message", fix: "Sending a Calendly link in your first message presupposes that the recipient has already agreed to meet with you. It&apos;s presumptuous. Ask if they're open to a call first; send the link only after they say yes." },
                  ].map(({ avoid, fix }) => (
                    <div key={avoid} className="bg-white border border-gray-100 rounded-xl p-5">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-red-500 font-bold text-lg flex-shrink-0">✗</span>
                        <p className="text-sm font-semibold text-gray-900">{avoid}</p>
                      </div>
                      <div className="ml-7">
                        <p className="text-sm text-gray-500 leading-relaxed">{fix}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "What is a good LinkedIn outreach message?",
                      a: "A good LinkedIn outreach message is specific to the recipient, leads with something relevant to them (not your pitch), is under 100 words, and has a low-friction ask. The best messages feel like they were written specifically for that one person — because they were.",
                    },
                    {
                      q: "What is the LinkedIn outreach success rate?",
                      a: "Generic cold messages have response rates of 1–5%. Personalized outreach with specific hooks relevant to the recipient achieves 15–30% response rates. Messages referencing a post, mutual connection, or company achievement consistently outperform generic templates by 3–10x.",
                    },
                    {
                      q: "How many LinkedIn connection requests can I send per day?",
                      a: "LinkedIn allows approximately 100 connection requests per week. Sending too many that go unaccepted can restrict your account. Focus on targeted, personalized requests rather than volume — 70% acceptance on 10 daily requests beats 5% acceptance on 50.",
                    },
                    {
                      q: "How do you warm up a LinkedIn connection before pitching?",
                      a: "The fastest way to warm up a LinkedIn connection: engage with their posts meaningfully 3–5 times over 1–2 weeks. By the time you send a DM, you're not a stranger — you're someone they recognize from their comments. Your message gets opened and read at a much higher rate.",
                    },
                  ].map(({ q, a }) => (
                    <div key={q} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                      <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Related */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Related articles</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { href: "/blog/linkedin-networking-tips", title: "17 LinkedIn Networking Tips That Build Real Relationships" },
                    { href: "/blog/linkedin-lead-generation", title: "LinkedIn Lead Generation: 9 Strategies That Fill Your Pipeline" },
                    { href: "/blog/linkedin-tips-for-b2b-sales", title: "7 LinkedIn Tips for B2B Sales That Actually Close Deals" },
                    { href: "/tools/linkedin-dm-generator", title: "Free LinkedIn DM Generator (25+ templates)" },
                  ].map((post) => (
                    <Link
                      key={post.href}
                      href={post.href}
                      className="bg-gray-50 border border-gray-100 rounded-xl p-4 hover:border-blue-200 hover:shadow-sm transition-all"
                    >
                      <p className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors leading-snug">
                        {post.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  )
}

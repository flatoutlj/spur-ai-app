import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "10 LinkedIn Summary Examples That Convert Visitors into Clients (2026)",
  description:
    "Real LinkedIn summary examples for B2B consultants, coaches, and agency owners — with templates and a formula for writing an About section that generates inbound leads.",
  keywords: [
    "linkedin summary examples",
    "linkedin about section examples",
    "linkedin summary for consultants",
    "linkedin bio examples",
    "how to write linkedin summary",
    "linkedin about section template",
  ],
  openGraph: {
    title: "10 LinkedIn Summary Examples That Convert Visitors into Clients (2026)",
    description: "Real LinkedIn About section examples with templates for consultants, coaches, and agency owners.",
    type: "article",
    url: "https://trispur.com/blog/linkedin-summary-examples",
    siteName: "Spur AI",
  },
  alternates: { canonical: "https://trispur.com/blog/linkedin-summary-examples" },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "10 LinkedIn Summary Examples That Convert Visitors into Clients (2026)",
  description:
    "Real LinkedIn About section examples with templates and a formula for writing a summary that generates inbound leads from your ideal clients.",
  author: { "@type": "Organization", name: "Spur AI" },
  publisher: { "@type": "Organization", name: "Spur AI", url: "https://trispur.com" },
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  url: "https://trispur.com/blog/linkedin-summary-examples",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long should a LinkedIn summary be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The optimal LinkedIn summary length for B2B professionals is 200–300 words. LinkedIn shows only the first 3 lines before the 'see more' cutoff — approximately 300 characters. Your opening hook must compel the click. The full summary can expand to 2,600 characters (LinkedIn's limit), but most readers won't read beyond 400–500 words unless your opening grabbed them completely.",
      },
    },
    {
      "@type": "Question",
      name: "What should I write in my LinkedIn About section?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your LinkedIn About section should answer four questions: Who do you help? What specific result do you deliver? How do you do it differently? And what should someone do next? Lead with a bold statement about your ideal client's problem or your key result — not 'I am a consultant with 15 years of experience.' Close with a clear call to action: what you want the reader to do after reading.",
      },
    },
    {
      "@type": "Question",
      name: "Should I write my LinkedIn summary in first or third person?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Always write your LinkedIn About section in first person. Third person ('John is a marketing consultant who...') reads as stiff and corporate on a platform built for personal connection. First person feels direct, human, and conversational — which is exactly the tone that earns trust from potential B2B clients. Reserve third-person writing for your LinkedIn headline or when others write about you.",
      },
    },
  ],
}

const EXAMPLES = [
  {
    label: "Result-led (for consultants)",
    summary: `I help B2B professional services firms go from referral-dependent to inbound-ready in 90 days.

Over the past 8 years, I've worked with 60+ consulting firms, accounting practices, and law firms to build LinkedIn-led business development systems that generate 3–5 qualified inbound inquiries per week.

Most firms I work with are already great at what they do. The problem isn't their expertise — it's that their ideal clients don't know they exist. They've grown on referrals for years, but referrals have slowed, and they have no predictable way to generate new work.

That's what I fix.

My clients typically see their first inbound inquiry within 30 days and hit a predictable 3–5 inbound inquiries per week within 90 days.

If that's the problem you're trying to solve, let's talk.

📩 DM me "inbound" or email me at [your email]`,
    note: "Leads with specific result, addresses the ICP's exact problem, ends with a soft CTA. No fluff about years of experience.",
  },
  {
    label: "Story-driven (for coaches)",
    summary: `Three years ago, I was billing 70 hours a week as a management consultant and completely burned out.

I knew my expertise was valuable. I just didn't know how to package it into a coaching business that didn't consume my entire life.

Now I run a 6-figure executive coaching practice working 35 hours a week — on my terms, with clients I actually want to work with.

I help other consultants make the same transition: from agency/firm life into independent coaching businesses that generate $200K+ without the 70-hour weeks.

In the past 18 months, 14 of my clients have launched successful coaching practices from zero. Several crossed $100K in their first year.

If you're a consultant, advisor, or expert who knows you should be running your own practice but doesn't know where to start — that's exactly who I work with.

Send me a DM. Let's figure out if we're a fit.`,
    note: "Personal story creates emotional resonance. Numbers add credibility. Clear ICP definition at the end.",
  },
  {
    label: "Authority-first (for agency owners)",
    summary: `We've generated $47M in attributable B2B pipeline for professional services firms since 2019.

Not through ads. Not through cold email. Through LinkedIn content that positions our clients as the obvious choice in their market.

My agency, [Agency Name], specializes exclusively in LinkedIn content strategy for consulting firms, accounting practices, and B2B service businesses. We write, post, and optimize — you focus on client delivery.

The firms we work with typically see:
→ 3–5 qualified inbound inquiries per week within 90 days
→ 40–60% reduction in time spent on business development
→ A waiting list of pre-sold prospects who already know and trust them

We don't work with everyone. Our clients need to be serious about playing the long game — consistent content, genuine relationships, not quick-fix tactics.

If that sounds like you, DM me or visit [website].`,
    note: "Opens with a big, specific number. Clear value proposition. Filters out bad-fit clients proactively.",
  },
  {
    label: "Problem-led (for sales coaches)",
    summary: `If you sell a B2B service, you've probably hit the referral ceiling.

Your business grew from word-of-mouth. You're good at what you do. But referrals are unpredictable, and you have no reliable way to fill your pipeline without depending on other people to send you work.

I help B2B service providers build a LinkedIn presence that generates inbound leads on autopilot — so you never have to cold call or wait for a referral again.

In 10 years as a B2B sales coach, I've helped 200+ consultants, coaches, and agency owners build pipeline through content and relationships (not cold outreach).

My clients average 4 new qualified conversations per week from LinkedIn within 60 days.

→ Explore my frameworks: [link to content or free resource]
→ Work with me: DM me "pipeline"`,
    note: "Nails the ICP's pain point in the first 2 lines. Positions the solution clearly. Two CTAs for different intent levels.",
  },
  {
    label: "Values-driven (for executive coaches)",
    summary: `I believe the best leaders don't need to be fixed — they need to be heard.

After 15 years as a Fortune 500 executive, I left to become an executive coach because I watched talented leaders fail — not from lack of skill, but from lack of support.

Today I work with senior leaders navigating their first 90 days in a new role, high-potential executives preparing for their first C-suite position, and founders scaling their companies through the $1M–$10M transition.

My coaching is about helping you lead with clarity, not just competence.

I'm a certified ICF Executive Coach (PCC level) and have worked with leaders at McKinsey, Salesforce, Deloitte, and dozens of Series A–C startups.

If you're stepping into a bigger role and want to do it well — not just survive it — I'd love to talk.

Send me a DM or book a complimentary 30-minute call: [link]`,
    note: "Leads with belief system rather than credentials. Credentials come after trust is established. Clear target client types.",
  },
]

export default function LinkedInSummaryExamplesPage() {
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
              <Link href="/tools/linkedin-bio-generator" className="text-gray-500 text-sm hover:text-gray-800">Bio generator</Link>
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
              <span className="text-gray-600">LinkedIn Summary Examples</span>
            </nav>
          </div>

          {/* Hero */}
          <section className="py-10 px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full">Profile Optimization</span>
                <span className="text-xs text-gray-400">9 min read · Updated July 2026</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                10 LinkedIn Summary Examples That Convert Visitors into Clients
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                Your LinkedIn About section is read by every prospect who visits your profile. Most of them leave in 10 seconds. Here are 10 real summary examples — with templates and the exact formula used by B2B professionals who generate inbound leads from their profiles.
              </p>
              <div className="mt-6">
                <Link
                  href="/tools/linkedin-bio-generator"
                  className="inline-flex items-center gap-2 gradient-bg text-white text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  Generate your LinkedIn summary free →
                </Link>
              </div>
            </div>
          </section>

          <article className="px-4 pb-16">
            <div className="max-w-3xl mx-auto">

              {/* The formula */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The LinkedIn summary formula that works</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Most LinkedIn summaries fail for one of three reasons: they lead with credentials instead of client outcomes, they&apos;re generic enough to apply to anyone, or they have no call to action at the end.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The LinkedIn summaries that generate inbound leads all follow a similar structure:
                </p>
                <div className="space-y-3">
                  {[
                    { step: "1", label: "Hook (first 2–3 lines)", desc: "A bold statement about the result you deliver or the problem you solve. This is what shows before 'see more' — it must compel the click." },
                    { step: "2", label: "Problem context", desc: "Describe the exact situation your ideal client is in when they need you. Make them feel understood." },
                    { step: "3", label: "Your differentiated approach", desc: "How you solve the problem differently from everyone else in your space." },
                    { step: "4", label: "Social proof", desc: "Specific numbers, client types, or results that establish credibility. Not vague ('15 years of experience') — specific ('47 clients, $2.4M in pipeline generated')." },
                    { step: "5", label: "Call to action", desc: "Exactly what you want the reader to do: DM you, email you, book a call, visit a link. Be explicit." },
                  ].map(({ step, label, desc }) => (
                    <div key={step} className="flex gap-4 bg-gray-50 rounded-xl border border-gray-100 p-4">
                      <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">{label}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Examples */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">10 LinkedIn summary examples by type</h2>
                <p className="text-gray-500 mb-8">
                  Each example targets a different professional type and uses a different narrative approach. Copy and adapt the one that fits your situation.
                </p>

                <div className="space-y-8">
                  {EXAMPLES.map((ex, i) => (
                    <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                      <div className="bg-gray-50 px-5 py-3 flex items-center justify-between border-b border-gray-200">
                        <div>
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Example {i + 1} · </span>
                          <span className="text-sm font-semibold text-gray-900">{ex.label}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="bg-white border border-gray-100 rounded-xl p-5 mb-4 font-mono text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                          {ex.summary}
                        </div>
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                          <p className="text-xs font-semibold text-blue-700 mb-1">Why this works:</p>
                          <p className="text-sm text-gray-600">{ex.note}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Common mistakes */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">5 LinkedIn summary mistakes to avoid</h2>
                <div className="space-y-4">
                  {[
                    {
                      mistake: "Opening with 'I am a [title] with X years of experience'",
                      fix: "Open with the result you deliver or the problem you solve. Credentials come after you&apos;ve earned the reader&apos;s attention.",
                    },
                    {
                      mistake: "Being generic enough to describe anyone in your field",
                      fix: "Name your exact ICP, the specific result you deliver, and the specific timeframe. Niche specificity builds trust.",
                    },
                    {
                      mistake: "Using third person ('John is a consultant who...')",
                      fix: "Always write in first person. Third person sounds corporate and cold on a personal platform.",
                    },
                    {
                      mistake: "No call to action at the end",
                      fix: "Tell readers exactly what to do next: DM you a word, click a link, book a call. Don&apos;t make them guess.",
                    },
                    {
                      mistake: "Making the summary about your journey, not their problem",
                      fix: "Your story is interesting only after the reader is convinced you can help them. Lead with their problem, not your history.",
                    },
                  ].map(({ mistake, fix }) => (
                    <div key={mistake} className="bg-white border border-gray-100 rounded-xl p-5">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-red-500 font-bold text-lg flex-shrink-0">✗</span>
                        <p className="text-sm font-semibold text-gray-900">{mistake}</p>
                      </div>
                      <div className="flex items-start gap-3 ml-7">
                        <p className="text-sm text-gray-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: fix.replace(/&apos;/g, "'") }} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* LinkedIn formatting tips */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How to format your LinkedIn summary for readability</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { tip: "Short paragraphs", desc: "Keep paragraphs to 2–3 lines maximum. Long paragraphs get skipped on mobile." },
                    { tip: "Line breaks between ideas", desc: "Hit return between each section. White space increases readability dramatically." },
                    { tip: "Use → or • for lists", desc: "Native LinkedIn list formatting isn't supported — use Unicode bullets or arrows for visual lists." },
                    { tip: "Emoji sparingly", desc: "One or two relevant emojis (📩 for contact info, → for lists) improve scannability without looking unprofessional." },
                    { tip: "Bold your hook mentally", desc: "LinkedIn doesn't support bold text in summaries, so make your opening line strong enough that it doesn't need formatting." },
                    { tip: "Test on mobile", desc: "70% of LinkedIn readers view profiles on mobile. Check how your summary reads on a phone before publishing." },
                  ].map(({ tip, desc }) => (
                    <div key={tip} className="bg-gray-50 rounded-xl border border-gray-100 p-4">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{tip}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "How long should a LinkedIn summary be?",
                      a: "The optimal LinkedIn summary length for B2B professionals is 200–300 words. LinkedIn shows only the first 3 lines before 'see more.' Your opening hook must compel the click. The full summary can expand to 2,600 characters (LinkedIn's limit), but most readers won't read beyond 400–500 words unless your opening grabbed them.",
                    },
                    {
                      q: "What should I write in my LinkedIn About section?",
                      a: "Answer four questions: Who do you help? What specific result do you deliver? How do you do it differently? What should someone do next? Lead with your ideal client's problem or your key result — not 'I am a consultant with 15 years of experience.'",
                    },
                    {
                      q: "Should I write my LinkedIn summary in first or third person?",
                      a: "Always write in first person. Third person ('John is a consultant who...') reads as stiff and corporate on a platform built for personal connection. First person feels direct, human, and conversational — which earns trust from B2B clients.",
                    },
                    {
                      q: "How often should I update my LinkedIn summary?",
                      a: "Review your LinkedIn summary every 6 months, or whenever your ICP, offer, or results change. The most common mistake is having a summary that reflects who you were 3 years ago rather than the specific problem you solve today.",
                    },
                  ].map(({ q, a }) => (
                    <div key={q} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                      <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tool CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">Generate your LinkedIn summary with AI</h2>
                <p className="text-blue-100 mb-6">
                  Spur AI&apos;s free bio generator creates 5 different LinkedIn About section styles in under a minute. Pick the one that fits your voice.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/tools/linkedin-bio-generator"
                    className="bg-white text-blue-600 font-semibold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors"
                  >
                    Generate my LinkedIn summary →
                  </Link>
                  <Link
                    href="/signup"
                    className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
                  >
                    Start 14-day free trial
                  </Link>
                </div>
                <p className="text-blue-200 text-xs mt-3">Free · No signup required</p>
              </div>

              {/* Related articles */}
              <div className="mt-10">
                <h3 className="font-bold text-gray-900 mb-4">Related articles</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { href: "/blog/linkedin-personal-branding", title: "LinkedIn Personal Branding: The Complete Playbook" },
                    { href: "/blog/linkedin-networking-tips", title: "17 LinkedIn Networking Tips That Actually Build Business Relationships" },
                    { href: "/blog/how-to-get-clients-on-linkedin", title: "How to Get Clients on LinkedIn: The 7-Step Playbook" },
                    { href: "/tools/linkedin-headline-generator", title: "Free LinkedIn Headline Generator" },
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

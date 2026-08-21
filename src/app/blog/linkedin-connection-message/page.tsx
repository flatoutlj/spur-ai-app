import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "15 LinkedIn Connection Message Templates That Get Accepted (2026)",
  description:
    "LinkedIn connection message templates that actually get accepted. 15 real examples for cold outreach, warm introductions, and targeting your ideal B2B clients.",
  keywords: [
    "linkedin connection message",
    "linkedin connection request message",
    "linkedin connection message examples",
    "how to write a linkedin connection request",
    "linkedin connection note",
  ],
  openGraph: {
    title: "15 LinkedIn Connection Message Templates That Get Accepted (2026)",
    description:
      "15 LinkedIn connection message templates that get accepted — for cold outreach, warm intros, and B2B prospecting.",
    type: "article",
    url: "https://trispur.com/blog/linkedin-connection-message",
    siteName: "Spur AI",
  },
  alternates: { canonical: "https://trispur.com/blog/linkedin-connection-message" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "15 LinkedIn Connection Message Templates That Get Accepted (2026)",
  description:
    "15 LinkedIn connection message templates that actually get accepted — with the psychology behind why each one works.",
  url: "https://trispur.com/blog/linkedin-connection-message",
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  publisher: { "@type": "Organization", name: "Spur AI", url: "https://trispur.com" },
  author: { "@type": "Organization", name: "Spur AI" },
}

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long should a LinkedIn connection message be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LinkedIn connection notes are capped at 300 characters. Aim for 150–250 characters — long enough to give a reason to connect, short enough that they read it fully before deciding. The shorter and more specific, the better your acceptance rate.",
      },
    },
    {
      "@type": "Question",
      name: "Should you always send a note with a LinkedIn connection request?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always — studies show blank connection requests sometimes have higher acceptance rates than generic notes. The key is: if you send a note, make it specific and relevant. A personalized note referencing their content or a specific reason beats both a blank request and a generic 'I'd like to connect.'",
      },
    },
    {
      "@type": "Question",
      name: "What should I say in a LinkedIn connection request?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best LinkedIn connection messages include: (1) a personal hook — reference something specific about them, like a post they wrote or a company they work at, (2) a brief, honest reason for connecting, and (3) no pitch — save the ask for after they accept. The formula: [How you found them] + [Why you want to connect] + [No ask].",
      },
    },
  ],
}

const TEMPLATES = [
  {
    category: "Content-Triggered (After Engaging With Their Post)",
    color: "border-blue-500",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    why: "Referencing their specific content proves you actually read it — not a mass connect.",
    templates: [
      {
        label: "Short & specific",
        text: "Hi [Name], your post on [topic] hit home — especially the part about [specific detail]. I work with [ICP] on similar challenges. Would love to follow your thinking here.",
      },
      {
        label: "Point of agreement",
        text: "Hi [Name], I've been saying [their point] for years and nobody listens. Glad to find someone else who gets it. Would love to connect.",
      },
      {
        label: "Question follow-up",
        text: "Hi [Name], I asked a question on your post about [topic] — didn't want to wait for the thread. What's your take on [follow-up question]? Would love to connect and hear your perspective.",
      },
    ],
  },
  {
    category: "Cold Outreach (No Prior Connection)",
    color: "border-violet-500",
    badge: "bg-violet-50 text-violet-700 border-violet-200",
    why: "The key to cold connects: give them a reason in their interest, not yours.",
    templates: [
      {
        label: "ICP-specific value angle",
        text: "Hi [Name], I help [their job title]s at [company type] [achieve specific result]. Thought your work at [company] was relevant context. Would love to connect.",
      },
      {
        label: "Mutual interest",
        text: "Hi [Name], I noticed we both follow [person/publication] and care about [topic]. I'm building [thing] in this space — would love to have you in my network.",
      },
      {
        label: "Direct and honest",
        text: "Hi [Name], I'm trying to meet more [their role]s who are thinking about [topic]. No pitch — I just want to learn from people doing interesting work here. Would you connect?",
      },
      {
        label: "Company research",
        text: "Hi [Name], I've been following [their company]'s work on [specific thing] and think it's genuinely interesting. I work in an adjacent space and would love to stay connected.",
      },
    ],
  },
  {
    category: "Warm Introductions (Mutual Connection)",
    color: "border-green-500",
    badge: "bg-green-50 text-green-700 border-green-200",
    why: "Name-dropping a mutual connection triples acceptance rates. Always use this when available.",
    templates: [
      {
        label: "Mutual connection mention",
        text: "Hi [Name], [mutual connection] mentioned I should connect with you — we're both working on [related thing]. Would love to be in your network.",
      },
      {
        label: "Soft intro",
        text: "Hi [Name], [mutual connection] said great things about your work at [company]. I'm [your role] focused on [topic] — seemed like a natural connection.",
      },
    ],
  },
  {
    category: "Conference / Event Follow-Up",
    color: "border-orange-500",
    badge: "bg-orange-50 text-orange-700 border-orange-200",
    why: "Time-sensitive — send within 48 hours of the event while you're top of mind.",
    templates: [
      {
        label: "Met in person",
        text: "Hi [Name], great meeting you at [event] — your thoughts on [specific thing they said] stuck with me. Let's stay connected.",
      },
      {
        label: "Didn't meet but attended",
        text: "Hi [Name], I was at [event] and caught your talk on [topic]. The point about [specific insight] was the most practical thing I heard all day. Would love to follow your work.",
      },
    ],
  },
  {
    category: "Podcast / Media Guest",
    color: "border-teal-500",
    badge: "bg-teal-50 text-teal-700 border-teal-200",
    why: "Guests always appreciate listeners who took time to find their LinkedIn.",
    templates: [
      {
        label: "Podcast listener",
        text: "Hi [Name], I just listened to your episode on [podcast] — your take on [specific thing] completely changed how I think about [topic]. Would love to stay connected.",
      },
      {
        label: "Newsletter / article",
        text: "Hi [Name], I've been reading your [newsletter/column] on [topic] for a while. The piece on [specific article] was the most useful thing I read that month. Would love to connect.",
      },
    ],
  },
  {
    category: "Recruiter to Candidate",
    color: "border-rose-500",
    badge: "bg-rose-50 text-rose-700 border-rose-200",
    why: "Be specific about the role — generic recruiter messages are immediately ignored.",
    templates: [
      {
        label: "Role-specific outreach",
        text: "Hi [Name], I'm recruiting for a [specific role] at [company type] — your background in [specific skill/experience] caught my attention. Would love to connect and share details if relevant.",
      },
    ],
  },
]

export default function LinkedInConnectionMessagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
              <Link href="/blog" className="text-gray-500 text-sm hover:text-gray-800">Blog</Link>
              <Link href="/signup" className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                Start free trial
              </Link>
            </div>
          </div>
        </nav>

        <main className="pt-14">
          <div className="max-w-3xl mx-auto px-4 py-12">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-sky-50 text-sky-700 border border-sky-200 text-xs font-medium px-2.5 py-0.5 rounded-full">Outreach</span>
                <span className="text-xs text-gray-400">9 min read · ~11,000 searches/mo</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                15 LinkedIn Connection Message Templates That Get Accepted (2026)
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                Most LinkedIn connection requests get ignored because they're generic, self-serving, or just blank. Here are 15 templates — organized by situation — that actually get accepted, plus the psychology behind why each one works.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-10">
              <p className="text-sm text-blue-800 font-medium mb-1">Need follow-up DMs after they connect?</p>
              <p className="text-sm text-blue-600 mb-3">Our free LinkedIn DM Generator writes personalized follow-up messages based on their profile and your offer — in 60 seconds.</p>
              <Link href="/tools/linkedin-dm-generator" className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Generate a DM →
              </Link>
            </div>

            <article className="prose prose-gray max-w-none">

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The 3 Rules of LinkedIn Connection Messages</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Before the templates: understand why most connection messages fail. They violate one of these three rules.
              </p>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <p className="font-bold text-gray-900 mb-1">Rule 1: Be specific, not generic</p>
                  <p className="text-sm text-gray-600 leading-relaxed">"I'd like to add you to my professional network" is LinkedIn's default — and the worst message you can send. It says nothing about why you want to connect with them specifically. Every message should have something unique to the recipient.</p>
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <p className="font-bold text-gray-900 mb-1">Rule 2: No pitch in the connection request</p>
                  <p className="text-sm text-gray-600 leading-relaxed">The connection request is not the place to sell. People can smell a pitch in the first line — and they'll decline. Build the connection first. The conversation after acceptance is when you can introduce what you do.</p>
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <p className="font-bold text-gray-900 mb-1">Rule 3: Make it about them, not you</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Every message should answer "why should I connect with you?" from their perspective — not yours. Reference their work, their company, their content. Not what you do, what you sell, or what you're looking for.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-2">The LinkedIn Connection Message Formula</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Every effective connection note has the same structure:</p>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
                <p className="text-sm font-mono text-blue-900 leading-relaxed">
                  <strong>[How you found them / what caught your attention]</strong> + <strong>[Specific, honest reason to connect]</strong> + <strong>[No ask]</strong>
                </p>
                <p className="text-sm text-blue-700 mt-3">Example: "Hi [Name], your post about raising prices without losing clients was the most practical thing I've read on LinkedIn this month. I work in consulting and thought about it all week. Would love to follow your thinking."</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">15 LinkedIn Connection Message Templates</h2>

              {TEMPLATES.map((section) => (
                <div key={section.category} className="mb-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${section.badge}`}>
                      {section.category}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 italic mb-4">{section.why}</p>
                  <div className="space-y-4">
                    {section.templates.map((t) => (
                      <div key={t.label} className={`border-l-4 ${section.color} pl-4`}>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{t.label}</p>
                        <p className="text-sm text-gray-800 leading-relaxed bg-gray-50 rounded-lg p-3 font-mono">{t.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What to Do After They Accept</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The connection request is just step one. Most people accept and then hear nothing — which wastes the connection. Here's what to do in the 24 hours after they accept:
              </p>
              <ol className="list-decimal list-inside text-gray-600 mb-6 space-y-3">
                <li><strong>Send a thank-you DM within 24 hours.</strong> Something simple: "Thanks for connecting, [Name]. I enjoyed your [post/work/company] — looking forward to following your journey." No pitch yet.</li>
                <li><strong>Engage with their content for 2–4 weeks.</strong> Leave thoughtful comments on 2–3 of their posts. This keeps you top of mind without being pushy.</li>
                <li><strong>Then introduce your offer — only if it's relevant.</strong> After 2–4 weeks of genuine engagement, you can send a value-led DM that references what you've seen in their work and introduces what you do.</li>
              </ol>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-8">
                <p className="text-sm font-bold text-gray-900 mb-2">Need the follow-up DM?</p>
                <p className="text-sm text-gray-600 mb-3">Spur AI's free DM Generator writes personalized LinkedIn messages based on the recipient's role, your offer, and the context of your connection.</p>
                <Link href="/tools/linkedin-dm-generator" className="inline-block bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
                  Generate a follow-up DM →
                </Link>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "How long should a LinkedIn connection message be?",
                    a: "LinkedIn connection notes are capped at 300 characters. Aim for 150–250 characters — long enough to give a reason to connect, short enough that they read it fully before deciding. The shorter and more specific, the better your acceptance rate.",
                  },
                  {
                    q: "Should you always send a note with a LinkedIn connection request?",
                    a: "Not always. Studies show blank connection requests sometimes have higher acceptance rates than generic notes. The key: if you send a note, make it specific and relevant. A personalized note referencing their content or a specific reason beats both a blank request and a generic 'I'd like to connect.'",
                  },
                  {
                    q: "What should I say in a LinkedIn connection request?",
                    a: "The best messages include: (1) a personal hook — reference something specific about them, (2) a brief, honest reason for connecting, and (3) no pitch. Formula: [How you found them] + [Why you want to connect] + [No ask].",
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
              <h2 className="text-2xl font-bold text-white mb-2">Turn connections into content that keeps them coming back</h2>
              <p className="text-blue-100 mb-6 text-sm">
                Getting connected is step one. Publishing consistent, valuable content is what makes them become clients. Spur AI writes your LinkedIn posts, DMs, and content in your voice.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/signup" className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-sm">
                  Start free trial →
                </Link>
                <Link href="/tools/linkedin-dm-generator" className="border border-blue-400/50 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
                  Try DM generator free
                </Link>
              </div>
              <p className="text-blue-200 text-xs mt-3">No credit card required · 14-day free trial</p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-3">Related guides:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "LinkedIn Outreach Templates", href: "/blog/linkedin-outreach" },
                  { label: "LinkedIn Networking Tips", href: "/blog/linkedin-networking-tips" },
                  { label: "LinkedIn Lead Generation", href: "/blog/linkedin-lead-generation" },
                  { label: "How to Get Clients on LinkedIn", href: "/blog/how-to-get-clients-on-linkedin" },
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

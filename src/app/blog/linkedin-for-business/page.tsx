import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "LinkedIn for Business: How to Get Clients and Generate Leads (2026)",
  description:
    "How to use LinkedIn for business growth. A practical guide for B2B professionals on building a business presence, generating leads, and converting connections into clients.",
  keywords: [
    "linkedin for business",
    "how to use linkedin for business",
    "linkedin for small business",
    "linkedin business strategy",
    "linkedin for b2b business",
    "linkedin business growth",
  ],
  openGraph: {
    title: "LinkedIn for Business: How to Get Clients and Generate Leads (2026)",
    description: "Practical guide to using LinkedIn for business growth — from profile setup to generating inbound leads.",
    type: "article",
    url: "https://trispur.com/blog/linkedin-for-business",
    siteName: "Spur AI",
  },
  alternates: { canonical: "https://trispur.com/blog/linkedin-for-business" },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "LinkedIn for Business: How to Get Clients and Generate Leads (2026)",
  description: "Practical guide to using LinkedIn for business growth — profile setup, content strategy, and generating inbound leads.",
  author: { "@type": "Organization", name: "Spur AI" },
  publisher: { "@type": "Organization", name: "Spur AI", url: "https://trispur.com" },
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  url: "https://trispur.com/blog/linkedin-for-business",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I use LinkedIn for business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Using LinkedIn for business effectively requires four things: (1) An optimized personal profile that clearly communicates who you help and what result you deliver, (2) Consistent content — 3–5 posts per week targeting your ideal client's challenges, (3) Strategic engagement — commenting and connecting with your target audience, and (4) Proactive DM outreach to your warmest connections. Most B2B businesses see their first inbound leads within 60–90 days of following this approach.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use a personal profile or company page for LinkedIn business marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most B2B service businesses, personal profiles dramatically outperform company pages for content reach, lead generation, and relationship building. LinkedIn's algorithm favors personal profiles over company pages by a significant margin — personal posts reach 2–5x more people than company page posts with the same engagement. Company pages are valuable for brand credibility and advertising, but your personal profile is where LinkedIn marketing actually works.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get leads from LinkedIn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There are three ways to generate leads from LinkedIn: (1) Inbound: create content that attracts your ideal clients so they reach out to you. (2) Outbound DMs: identify warm connections who've engaged with your content and send targeted, personalized messages. (3) Referrals: build strong relationships with your existing clients and referral partners who actively introduce you to others. Most B2B consultants and agency owners combine all three for a predictable lead flow.",
      },
    },
  ],
}

export default function LinkedInForBusinessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-white">
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
          <div className="max-w-3xl mx-auto px-4 pt-6 pb-2">
            <nav className="flex items-center gap-2 text-xs text-gray-400">
              <Link href="/" className="hover:text-gray-600">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gray-600">Blog</Link>
              <span>/</span>
              <span className="text-gray-600">LinkedIn for Business</span>
            </nav>
          </div>

          <section className="py-10 px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">Business Growth</span>
                <span className="text-xs text-gray-400">12 min read · Updated July 2026</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                LinkedIn for Business: How to Get Clients and Generate Leads (2026)
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                LinkedIn is where B2B business happens in 2026. Whether you&apos;re a consultant, agency owner, or service professional, this guide shows you how to turn LinkedIn into a consistent source of clients, referrals, and business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/tools/linkedin-post-generator" className="inline-flex items-center gap-2 gradient-bg text-white text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
                  Generate LinkedIn posts free →
                </Link>
                <Link href="/tools/linkedin-profile-optimizer" className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
                  Optimize my profile
                </Link>
              </div>
            </div>
          </section>

          <article className="px-4 pb-16">
            <div className="max-w-3xl mx-auto">

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why LinkedIn is the most important platform for B2B businesses</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you sell to other businesses, LinkedIn is where your buyers spend their professional time. They come to LinkedIn to learn, network, and discover solutions to their problems. Unlike Instagram (personal) or Twitter/X (cultural commentary), LinkedIn users are explicitly in &ldquo;work mode.&rdquo;
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This makes LinkedIn uniquely valuable for business: the same professional who ignores your Facebook ad comes to LinkedIn specifically looking for expertise. Your content reaches them when they&apos;re thinking about the problems you solve.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The result: B2B businesses that market consistently on LinkedIn report 2–5 qualified inbound inquiries per week within 90 days — from people who already know, trust, and respect their work.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal profile vs. company page: which to use for business</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This is the most common mistake B2B businesses make on LinkedIn: investing in a company page instead of a personal profile.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                    <h3 className="font-bold text-green-800 mb-3">Personal profile ✓</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2"><span className="text-green-600">→</span> 2–5x more organic reach than company pages</li>
                      <li className="flex items-start gap-2"><span className="text-green-600">→</span> People buy from people, not companies</li>
                      <li className="flex items-start gap-2"><span className="text-green-600">→</span> DM and relationship building capabilities</li>
                      <li className="flex items-start gap-2"><span className="text-green-600">→</span> Algorithm heavily favors personal content</li>
                      <li className="flex items-start gap-2"><span className="text-green-600">→</span> Builds trust and personal authority</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-700 mb-3">Company page</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2"><span className="text-gray-400">→</span> Useful for brand credibility / legitimacy</li>
                      <li className="flex items-start gap-2"><span className="text-gray-400">→</span> Required for LinkedIn paid advertising</li>
                      <li className="flex items-start gap-2"><span className="text-gray-400">→</span> Good for team pages and job listings</li>
                      <li className="flex items-start gap-2"><span className="text-gray-400">→</span> Significantly lower organic reach</li>
                      <li className="flex items-start gap-2"><span className="text-gray-400">→</span> No DM capabilities</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>The verdict:</strong> For most B2B service businesses, focus 90% of your energy on your personal profile. Set up a company page for legitimacy, but build your marketing engine on your personal presence.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The 4 pillars of LinkedIn for business</h2>
                <div className="space-y-6">
                  {[
                    {
                      pillar: "1. Profile",
                      headline: "Your LinkedIn profile is your business homepage",
                      body: "Before any content or outreach, your profile needs to clearly communicate: who you help, what result you deliver, and what someone should do if they want to work with you. A prospect who visits your profile should know in 7 seconds whether you're relevant to them. If they can't tell, they leave.",
                      cta: { text: "Optimize your profile free →", href: "/tools/linkedin-profile-optimizer" },
                    },
                    {
                      pillar: "2. Content",
                      headline: "Content is what drives prospects to your profile",
                      body: "Consistent, valuable content is what causes ideal clients to find your profile. Your posts demonstrate expertise, build trust over time, and keep you top-of-mind when your connections have problems you solve. 3–5 posts per week on topics your ideal clients care about is the baseline. Quality beats quantity — every post should give something your reader can use.",
                      cta: { text: "Plan your content calendar free →", href: "/tools/linkedin-content-calendar" },
                    },
                    {
                      pillar: "3. Network",
                      headline: "Your network determines your content's reach",
                      body: "LinkedIn's algorithm distributes your content primarily to your existing connections. A network of 500 targeted ideal clients means your content reaches people who could hire you. A network of 5,000 random connections means your content reaches nobody relevant. Build your network strategically — connect with target clients, referral partners, and adjacent professionals.",
                      cta: { text: "Read: LinkedIn networking tips →", href: "/blog/linkedin-networking-tips" },
                    },
                    {
                      pillar: "4. Outreach",
                      headline: "Outreach converts warm connections into clients",
                      body: "The final piece: proactive, warm outreach to connections who've engaged with your content. People who like, comment on, or consistently view your posts are pre-sold on your expertise. A thoughtful DM to these connections — leading with curiosity or value, not a pitch — converts at 15–30% response rates and starts real business conversations.",
                      cta: { text: "Read: LinkedIn outreach templates →", href: "/blog/linkedin-outreach" },
                    },
                  ].map(({ pillar, headline, body, cta }) => (
                    <div key={pillar} className="bg-white border border-gray-100 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold gradient-bg text-white px-2.5 py-1 rounded-full">{pillar}</span>
                        <h3 className="font-bold text-gray-900">{headline}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{body}</p>
                      <Link href={cta.href} className="text-blue-600 text-sm font-medium hover:underline">
                        {cta.text}
                      </Link>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Common mistakes businesses make on LinkedIn</h2>
                <div className="space-y-3">
                  {[
                    { mistake: "Posting company news instead of client-relevant content", fix: "Your connections don't care that you hired someone or won an award. They care about insights that help them with their problems. 90% of your content should be about your ICP's challenges, not your business updates." },
                    { mistake: "Selling before building trust", fix: "Most LinkedIn marketing fails because businesses pitch before establishing credibility. Give value through content for 30+ days before making any direct offer. Earn the relationship before asking for the sale." },
                    { mistake: "Inconsistent posting (posting in bursts, then going dark)", fix: "Inconsistency is worse than low frequency. Going dark for 3 weeks and then posting 10 times destroys the algorithmic momentum you built. 3 consistent posts per week beats 10 posts one week and 0 the next." },
                    { mistake: "Optimizing for followers instead of conversations", fix: "A post with 500 likes and no DMs is a vanity win. A post with 30 likes and 3 DMs from ideal clients is a business win. Optimize your content for the right people, not the most people." },
                    { mistake: "Neglecting the profile while posting content", fix: "Content drives people to your profile. If your profile doesn't convert visitors, the content investment is wasted. Optimize both simultaneously." },
                  ].map(({ mistake, fix }) => (
                    <div key={mistake} className="bg-white border border-gray-100 rounded-xl p-5">
                      <div className="flex items-start gap-2 mb-2">
                        <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                        <p className="text-sm font-semibold text-gray-900">{mistake}</p>
                      </div>
                      <div className="ml-5">
                        <p className="text-sm text-gray-500 leading-relaxed">{fix}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "How do I use LinkedIn for business?",
                      a: "Using LinkedIn for business requires four things: an optimized profile, consistent content 3–5x/week, strategic engagement with your target audience, and proactive DM outreach to warm connections. Most B2B businesses see their first inbound leads within 60–90 days.",
                    },
                    {
                      q: "Should I use a personal profile or company page?",
                      a: "Personal profiles dramatically outperform company pages for organic reach and lead generation. LinkedIn's algorithm favors personal profiles — personal posts reach 2–5x more people than company page posts. Use your personal profile as your primary marketing asset.",
                    },
                    {
                      q: "How do I get leads from LinkedIn?",
                      a: "Three ways: (1) Inbound — content that attracts ideal clients who reach out to you. (2) Outbound DMs — personalized messages to warm connections who've engaged with your content. (3) Referrals — relationships with existing clients and partners who introduce you to others. Most B2B professionals combine all three.",
                    },
                  ].map(({ q, a }) => (
                    <div key={q} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                      <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl p-8 text-center mb-10">
                <h2 className="text-2xl font-bold text-white mb-2">The fastest way to build your LinkedIn presence</h2>
                <p className="text-blue-100 mb-6">
                  Spur AI handles the content side — generating LinkedIn posts in your voice, for your niche, targeting your ideal clients. You focus on the conversations.
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

              <div>
                <h3 className="font-bold text-gray-900 mb-4">Related guides</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { href: "/blog/linkedin-marketing", title: "LinkedIn Marketing: The Complete B2B Strategy Guide" },
                    { href: "/blog/linkedin-lead-generation", title: "LinkedIn Lead Generation: 9 Strategies" },
                    { href: "/blog/how-to-get-clients-on-linkedin", title: "How to Get Clients on LinkedIn: The 7-Step Playbook" },
                    { href: "/blog/linkedin-content-strategy-for-consultants", title: "LinkedIn Content Strategy for Consultants" },
                  ].map((post) => (
                    <Link key={post.href} href={post.href} className="bg-gray-50 border border-gray-100 rounded-xl p-4 hover:border-blue-200 hover:shadow-sm transition-all">
                      <p className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors leading-snug">{post.title}</p>
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

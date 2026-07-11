import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import ProfileChecklist from "./ProfileChecklist"

export const metadata: Metadata = {
  title: "Free LinkedIn Profile Optimizer — Score & Checklist (2026) | Spur AI",
  description:
    "Optimize your LinkedIn profile for sales with our free 20-point checklist. Get a profile optimization score, before/after headline examples, and 10 expert tips to attract B2B clients.",
  keywords: [
    "linkedin profile optimizer",
    "optimize linkedin profile for sales",
    "linkedin profile optimization",
    "linkedin profile tips",
    "linkedin profile for b2b",
    "linkedin profile checklist",
  ],
  openGraph: {
    title: "Free LinkedIn Profile Optimizer — Score & Checklist (2026)",
    description:
      "Check off 20 profile elements, get a score out of 100, and learn exactly what to fix to turn your LinkedIn profile into a B2B lead magnet.",
    type: "website",
    url: "https://trispur.com/tools/linkedin-profile-optimizer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free LinkedIn Profile Optimizer — Score & Checklist",
    description:
      "20-point checklist, live score, and expert tips to turn your LinkedIn profile into a B2B lead magnet.",
  },
  alternates: {
    canonical: "https://trispur.com/tools/linkedin-profile-optimizer",
  },
}

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "LinkedIn Profile Optimizer",
  description:
    "A free interactive checklist tool that scores your LinkedIn profile optimization out of 100 and identifies improvements to attract more B2B clients.",
  url: "https://trispur.com/tools/linkedin-profile-optimizer",
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I put in my LinkedIn headline to attract B2B clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most effective LinkedIn headline formula for B2B sales is: [Who you help] + [Specific result you create] + [How/Your method]. For example: \"I help B2B SaaS companies reduce churn by 40% through customer success systems | Consultant & Advisor.\" This formula communicates your value proposition in under 220 characters and is optimized for both LinkedIn search and first impressions.",
      },
    },
    {
      "@type": "Question",
      name: "How long should my LinkedIn About section be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your LinkedIn About section should be 200–300 words — long enough to tell your story and prove your value, short enough to be read. The first 2–3 lines are the most critical because LinkedIn truncates the section with a 'see more' button. Open with your value proposition or a compelling hook, include 2–3 specific client outcomes with numbers, and close with a clear call to action.",
      },
    },
    {
      "@type": "Question",
      name: "How many recommendations do I need on LinkedIn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A minimum of 3 recommendations is the baseline for credibility. However, quality matters far more than quantity — one recommendation from a satisfied client that mentions a specific business result is worth more than five generic endorsements. Aim for 5–7 total recommendations with at least 3 from clients (not just colleagues).",
      },
    },
    {
      "@type": "Question",
      name: "Does LinkedIn profile optimization improve my search ranking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. LinkedIn's search algorithm ranks profiles based on profile completeness, keyword relevance, and connection strength. A fully optimized profile with relevant keywords in your headline, about section, and experience descriptions will appear significantly higher in LinkedIn search results for your target keywords. All 100 LinkedIn Premium members who search for your keywords are shown results ranked by profile optimization score.",
      },
    },
    {
      "@type": "Question",
      name: "What is the LinkedIn Social Selling Index and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The LinkedIn Social Selling Index (SSI) is a score from 0–100 that measures how effectively you are building your professional brand, finding the right people, engaging with insights, and building relationships. LinkedIn's own research shows that sellers with a high SSI are 45% more likely to create opportunities and 51% more likely to hit quota. Check your score at linkedin.com/sales/ssi.",
      },
    },
  ],
}

const tips = [
  {
    num: "01",
    title: "Lead your headline with the client, not yourself",
    detail:
      "Most LinkedIn headlines read: \"CEO at Acme Corp | Marketing Expert | Speaker.\" This format describes you — it does not communicate value to your ideal client. The best-performing B2B headlines describe what you do for others. Flip it: instead of \"Marketing Consultant,\" write \"I help B2B founders generate 3–5 qualified leads per week from LinkedIn.\" The prospect reads this and immediately thinks: \"That's what I need.\"",
  },
  {
    num: "02",
    title: "Use numbers everywhere — especially in your About section",
    detail:
      "Vague claims kill credibility. \"I help companies grow\" is ignored. \"I helped 3 SaaS companies reduce churn by 35–60% in 90 days\" creates immediate interest. Audit every sentence in your profile and ask: can I add a specific number here? Client retention percentages, revenue added, time saved, deals closed — these numbers turn your profile from a description into a track record.",
  },
  {
    num: "03",
    title: "Treat your Featured section as your portfolio",
    detail:
      "The Featured section sits above the fold on your profile and gets significant visibility — yet most people leave it empty or fill it with random shares. Use it to showcase: your best-performing LinkedIn post, a short case study PDF, a video testimonial, or a link to your calendar. This is your highest-converting real estate after your headline. Treat it accordingly.",
  },
  {
    num: "04",
    title: "Write experience descriptions for your next client, not HR",
    detail:
      "The Experience section is where most profiles revert to resume mode: \"Responsible for managing client relationships and developing marketing strategies.\" Rewrite every role description to focus on outcomes. \"Managed a portfolio of 12 B2B accounts, reducing average customer acquisition cost by 28% and growing year-over-year recurring revenue by $1.4M.\" This is not just better for LinkedIn — it is the story your next client needs to hear to hire you.",
  },
  {
    num: "05",
    title: "Optimize your skills for LinkedIn search",
    detail:
      "LinkedIn uses your skills to rank you in search results. If your ideal client searches for \"B2B lead generation consultant\" or \"marketing strategy for SaaS,\" you want to appear. Add the exact phrases your clients would use to search for someone like you. LinkedIn allows 50 skills — use at least 20. Then prioritize getting endorsements for your top 3, as endorsed skills rank higher in search.",
  },
  {
    num: "06",
    title: "Request specific, outcome-focused recommendations",
    detail:
      "Generic recommendations say \"Great to work with — highly recommend!\" Powerful recommendations say \"Working with [Name] increased our inbound pipeline by 40% in 90 days. Their [specific methodology] was unlike anything we had seen.\" When you ask a client for a recommendation, make it easy for them by suggesting specific outcomes to mention. A good prompt: \"Would you be willing to write a recommendation that mentions [specific result we achieved together] and what that meant for your business?\"",
  },
  {
    num: "07",
    title: "Post content consistently to boost your activity score",
    detail:
      "LinkedIn shows a \"Recent Activity\" section on your profile. If your last post was three months ago, prospects will notice — and they will wonder if you are still active or still relevant. Posting 3 times per week keeps your activity section populated, boosts your Social Selling Index, and gives every profile visitor new content to engage with. Consistency is the most underrated profile optimization tactic.",
  },
  {
    num: "08",
    title: "Customize your LinkedIn URL",
    detail:
      "The default LinkedIn URL looks like linkedin.com/in/john-smith-3b82a4. Customized URLs (linkedin.com/in/johnsmith) look more professional, are easier to share, and signal that you are intentional about your LinkedIn presence. Customize yours in profile settings — it takes 30 seconds and costs nothing.",
  },
  {
    num: "09",
    title: "Add your calendar or website link to your contact info",
    detail:
      "LinkedIn allows you to add a website URL in your contact info, which appears on your profile for all connections. Use this to link directly to your meeting scheduling page (Calendly, Cal.com, etc.) rather than a generic homepage. A prospect who has read your content and visited your profile should be one click away from booking a call with you.",
  },
  {
    num: "10",
    title: "Audit your profile from a prospect's perspective",
    detail:
      "Once per quarter, view your own profile as if you were your ideal client seeing it for the first time. Ask: within 10 seconds of landing on this profile, is it completely clear who this person helps and what result they create? If not, your headline or photo needs work. Can I find a specific client outcome that proves they can deliver? If not, your About section or Experience section needs updating. Would I click the CTA? If not, your featured section or contact info needs attention.",
  },
]

const beforeAfterHeadlines = [
  {
    role: "Marketing Consultant",
    bad: "Marketing Consultant | Brand Strategy | Content Marketing | Helping Businesses Grow",
    good: "I help B2B SaaS companies increase MQL-to-SQL conversion rates by 40% | Demand Gen Consultant",
    whyBetter: "The optimized version speaks to a specific audience (B2B SaaS), a specific metric (MQL-to-SQL), a specific result (40% increase), and a clear label (Demand Gen Consultant). A prospect with this exact problem sees this and clicks.",
  },
  {
    role: "Executive Coach",
    bad: "Executive Coach | Leadership Development | ICF Certified | Keynote Speaker | Passionate About People",
    good: "Executive Coach for first-time CEOs navigating growth from $1M to $10M | ICF PCC | 200+ leaders coached",
    whyBetter: "The optimized headline defines the exact client (first-time CEOs), the exact moment (growth from $1M to $10M), and includes proof (200+ leaders). It passes the 'is this for me?' test in under 5 seconds.",
  },
  {
    role: "Agency Owner",
    bad: "Founder & CEO at Digital Edge | Growth Marketing | Social Media | Email | Paid Ads | We Drive Results",
    good: "Founder at Digital Edge | We help B2B professional services firms generate 10+ qualified leads/month through LinkedIn",
    whyBetter: "The optimized version drops the credential list and focuses entirely on the outcome. \"10+ qualified leads/month through LinkedIn\" is specific, measurable, and immediately credible to the right prospect.",
  },
]

export default function LinkedInProfileOptimizerPage() {
  return (
    <>
      <Script
        id="page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
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

        {/* Hero */}
        <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
              <span className="text-blue-700 text-sm font-medium">Free tool · 20-point checklist</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
              LinkedIn Profile Optimizer
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">
              Check off 20 profile elements, get your optimization score out of 100, and find out
              exactly what to fix to turn your LinkedIn profile into a B2B lead magnet.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#checklist"
                className="bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-base"
              >
                Check my profile score ↓
              </a>
              <Link
                href="/signup"
                className="border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors text-base"
              >
                Get AI-generated content for my profile →
              </Link>
            </div>
          </div>
        </section>

        {/* Why profile matters */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  stat: "Top 1%",
                  label: "Profile completeness puts you in the top search results for your keywords",
                },
                {
                  stat: "45%",
                  label: "More likely to create opportunities with an SSI score above 70",
                },
                {
                  stat: "7 sec",
                  label: "Time a prospect spends on your profile before deciding to connect or leave",
                },
              ].map((s) => (
                <div key={s.stat} className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{s.stat}</div>
                  <div className="text-gray-500 text-sm leading-relaxed">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Checklist */}
        <section id="checklist" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Your Profile Optimization Score
              </h2>
              <p className="text-gray-500">
                Check off every element you have completed. Your score updates in real time.
              </p>
            </div>

            <ProfileChecklist />

            <div className="mt-10 text-center">
              <p className="text-gray-500 text-sm mb-4">
                Want Spur AI to generate LinkedIn posts that keep your profile&apos;s activity score high?
              </p>
              <Link
                href="/signup"
                className="inline-block bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
              >
                Start free trial — generate posts in your voice →
              </Link>
              <p className="text-gray-400 text-sm mt-2">14-day free trial · No credit card required</p>
            </div>
          </div>
        </section>

        {/* Before/After Headlines */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Before & after: LinkedIn headline examples
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                The headline is the single highest-impact element on your LinkedIn profile. Here
                are three real transformations with explanations.
              </p>
            </div>
            <div className="space-y-8">
              {beforeAfterHeadlines.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="bg-gray-50 px-6 py-3 border-b border-gray-100">
                    <span className="text-sm font-semibold text-gray-700">{item.role}</span>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-red-500 bg-red-50 border border-red-100 rounded-full px-2.5 py-0.5">Before</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed italic">&ldquo;{item.bad}&rdquo;</p>
                    </div>
                    <div className="border-t border-gray-50 pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-green-600 bg-green-50 border border-green-100 rounded-full px-2.5 py-0.5">After</span>
                      </div>
                      <p className="text-gray-800 text-sm leading-relaxed font-medium italic">&ldquo;{item.good}&rdquo;</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mt-3">
                      <p className="text-xs text-gray-700 leading-relaxed">
                        <strong>Why it works: </strong>{item.whyBetter}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10 Tips */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                10 LinkedIn profile optimization tips for B2B sales
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                These are the highest-impact changes you can make to your LinkedIn profile to
                attract and convert more B2B clients.
              </p>
            </div>
            <div className="space-y-8">
              {tips.map((tip) => (
                <div key={tip.num} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white text-xs font-bold flex items-center justify-center">
                    {tip.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{tip.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              An optimized profile means nothing without consistent content
            </h2>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              Your profile is the destination. Content is what drives traffic there. Spur AI
              generates LinkedIn posts in your voice and niche, so you post consistently without
              spending hours writing.
            </p>
            <Link
              href="/signup"
              className="inline-block bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Start your free trial →
            </Link>
            <p className="text-gray-400 text-sm mt-3">14-day free trial · No credit card required</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Frequently asked questions about LinkedIn profile optimization
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "What should I put in my LinkedIn headline to attract B2B clients?",
                  a: "The most effective LinkedIn headline formula for B2B sales is: [Who you help] + [Specific result you create] + [How/Your method]. For example: \"I help B2B SaaS companies reduce churn by 40% through customer success systems | Consultant & Advisor.\" This formula communicates your value proposition in under 220 characters and is optimized for both LinkedIn search and first impressions.",
                },
                {
                  q: "How long should my LinkedIn About section be?",
                  a: "Your LinkedIn About section should be 200–300 words. The first 2–3 lines are the most critical because LinkedIn truncates the section with a 'see more' button. Open with your value proposition or a compelling hook, include 2–3 specific client outcomes with numbers, and close with a clear call to action.",
                },
                {
                  q: "How many recommendations do I need on LinkedIn?",
                  a: "A minimum of 3 recommendations is the baseline for credibility. Quality matters far more than quantity — one recommendation from a satisfied client that mentions a specific business result is worth more than five generic endorsements. Aim for 5–7 total recommendations with at least 3 from clients.",
                },
                {
                  q: "Does LinkedIn profile optimization improve my search ranking?",
                  a: "Yes. LinkedIn's search algorithm ranks profiles based on profile completeness, keyword relevance, and connection strength. A fully optimized profile with relevant keywords in your headline, about section, and experience descriptions will appear significantly higher in LinkedIn search results for your target keywords.",
                },
                {
                  q: "What is the LinkedIn Social Selling Index and why does it matter?",
                  a: "The LinkedIn Social Selling Index (SSI) is a score from 0–100 that measures how effectively you are building your professional brand, finding the right people, engaging with insights, and building relationships. LinkedIn's own research shows that sellers with a high SSI are 45% more likely to create opportunities and 51% more likely to hit quota. Check your score at linkedin.com/sales/ssi.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-100 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{item.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related resources */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Related resources</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/tools/linkedin-post-generator"
                className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl">✍️</span>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Free LinkedIn Post Generator</div>
                  <div className="text-gray-500 text-sm">
                    Generate a full LinkedIn post with hook + body + CTA in one click.
                  </div>
                </div>
              </Link>
              <Link
                href="/blog/linkedin-tips-for-b2b-sales"
                className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl">💼</span>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">7 LinkedIn Tips for B2B Sales</div>
                  <div className="text-gray-500 text-sm">
                    Relationship-based LinkedIn selling strategies that close deals.
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-violet-700">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Profile optimized. Now keep it active.
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              An optimized profile attracts the right prospects. Consistent content keeps them
              coming back. Spur AI generates LinkedIn posts in your voice — so you never go dark.
            </p>
            <Link
              href="/signup"
              className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-full hover:bg-blue-50 transition-colors text-lg"
            >
              Start your free trial →
            </Link>
            <p className="text-blue-200 text-sm mt-4">
              Plans from $149/mo · Cancel anytime ·{" "}
              <Link href="/pricing" className="underline hover:text-white">
                See pricing
              </Link>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
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

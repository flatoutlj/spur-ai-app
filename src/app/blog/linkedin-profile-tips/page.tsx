import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "21 LinkedIn Profile Tips That Attract Clients in 2026",
  description:
    "Proven LinkedIn profile tips for B2B professionals. Optimize your headline, About section, featured section, and banner to turn profile views into inbound leads.",
  keywords: [
    "linkedin profile tips",
    "how to optimize linkedin profile",
    "linkedin profile best practices",
    "linkedin profile for b2b",
    "linkedin profile optimization 2026",
  ],
  openGraph: {
    title: "21 LinkedIn Profile Tips That Attract Clients in 2026",
    description:
      "Turn your LinkedIn profile from a resume into a client-generating machine with these 21 proven tips for B2B professionals.",
    type: "article",
    url: "https://www.trispur.com/blog/linkedin-profile-tips",
    siteName: "Spur AI",
  },
  alternates: { canonical: "https://www.trispur.com/blog/linkedin-profile-tips" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "21 LinkedIn Profile Tips That Attract Clients in 2026",
  description:
    "Proven LinkedIn profile tips for B2B professionals — optimize every section to turn profile views into inbound leads.",
  url: "https://www.trispur.com/blog/linkedin-profile-tips",
  datePublished: "2026-07-11",
  dateModified: "2026-07-11",
  publisher: { "@type": "Organization", name: "Spur AI", url: "https://www.trispur.com" },
  author: { "@type": "Organization", name: "Spur AI" },
}

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I put in my LinkedIn profile headline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your LinkedIn headline should state who you help, what result you deliver, and ideally include a proof point or differentiator. Avoid job titles — instead write something like 'I help SaaS founders grow to $1M ARR through LinkedIn content | 40+ clients served.' This targets your ideal client rather than impressing recruiters.",
      },
    },
    {
      "@type": "Question",
      name: "How long should my LinkedIn About section be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your LinkedIn About section (Summary) should be 200–300 words. Long enough to tell your story and build trust, short enough that visitors read it fully. Start with a hook — a bold claim or result — because only the first 3 lines show before 'see more.' End with a clear call to action.",
      },
    },
    {
      "@type": "Question",
      name: "What's the ideal LinkedIn profile photo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use a professional headshot with a clean background, good lighting, and a genuine smile. You should fill 60% of the frame. Avoid group photos, heavy filters, and photos taken more than 5 years ago. LinkedIn data shows profiles with professional photos get 21x more profile views.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get more profile views on LinkedIn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Post content consistently (3–5x/week), comment on posts in your niche daily, connect with your target clients, and optimize your headline for keywords your ideal clients search. Activity is the biggest driver — inactive profiles get minimal views regardless of profile quality.",
      },
    },
    {
      "@type": "Question",
      name: "Should my LinkedIn profile be public?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — always set your LinkedIn profile to public. This allows your profile to be found via Google, by non-LinkedIn users, and by LinkedIn members outside your network. Under Privacy settings, toggle 'Edit your public profile' to show all sections.",
      },
    },
  ],
}

export default function LinkedInProfileTipsPage() {
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
                <span className="bg-purple-50 text-purple-700 border border-purple-200 text-xs font-medium px-2.5 py-0.5 rounded-full">Profile Optimization</span>
                <span className="text-xs text-gray-400">11 min read · ~16,000 searches/mo</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                21 LinkedIn Profile Tips That Attract Clients in 2026
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                Most LinkedIn profiles are passive resumes. These 21 tips turn yours into an active sales page that converts profile views into inbound leads — without any ads or outreach.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-10">
              <p className="text-sm text-blue-800 font-medium mb-1">Score your profile in 2 minutes</p>
              <p className="text-sm text-blue-600 mb-3">Use our free LinkedIn Profile Optimizer to get a personalized score out of 100 with specific fixes for each section.</p>
              <Link href="/tools/linkedin-profile-optimizer" className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Check my profile score →
              </Link>
            </div>

            <article className="prose prose-gray max-w-none">

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Your LinkedIn Profile Matters More Than Your Posts</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every comment you leave, every post you publish, and every connection request you send drives traffic back to your profile. That profile is your landing page — and most people's landing pages have a 0% conversion rate because they read like a CV, not a sales page.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                LinkedIn reports that profiles with complete sections get 40x more opportunities than incomplete ones. But "complete" isn't enough. The difference between a profile that gets DMs from prospects and one that doesn't comes down to the 21 elements below.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">The 21 LinkedIn Profile Tips</h2>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Section 1: First Impressions (What Visitors See in 3 Seconds)</h3>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">1. Use a professional headshot — not a casual selfie</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Clean background, good lighting, genuine smile. Fill 60% of the frame with your face. Profiles with professional photos get 21x more views (LinkedIn data). If you don't have a professional shot, a well-lit photo against a plain wall beats a group photo or blurry selfie.</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">2. Design a custom banner that reinforces your positioning</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">The banner (1584 × 396px) is prime real estate most people leave as the default grey gradient. Use it to display your niche, a social proof statement ("Helped 50+ SaaS founders"), your website URL, or a visual of what you do. Tools like Canva have LinkedIn banner templates ready to go.</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">3. Write a headline that speaks to your client, not your ego</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">The headline is the most-read piece of your profile — it appears in search results, comment threads, and connection requests. Formula: <strong>[Who you help]</strong> + <strong>[Result you deliver]</strong> + <strong>[Proof/differentiator]</strong>. Example: "I help B2B consultants get 5+ inbound leads/month from LinkedIn | 120+ clients | Ex-McKinsey"</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">4. Add your location and industry</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">LinkedIn's search algorithm uses location and industry to rank profiles. Make sure both are set accurately. If you serve clients globally, set your location to a major hub (New York, London, etc.) for broader visibility in searches.</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">5. Set a custom LinkedIn URL</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Default URLs look like linkedin.com/in/john-smith-23b4x7. Clean it up: linkedin.com/in/johnsmith or linkedin.com/in/john-smith-consultant. This makes your profile easier to share, looks professional in email signatures, and helps Google index your name.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Section 2: Your About Section (the $1M Sales Page)</h3>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-violet-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">6. Open with a hook, not "I am a..."</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Only the first 3 lines show before "see more." Most people waste them on "I am a passionate consultant with 10 years of experience." Instead, open with a result, a bold claim, or a question your prospect is asking. Example: "Most B2B consultants get 0 clients from LinkedIn. My clients average 3+ per month. Here's what they do differently."</p>
                </div>

                <div className="border-l-4 border-violet-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">7. Tell a story, not a history</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Your About section is not a second resume. Use it to explain why you do what you do, what transformation you create for clients, and what makes you different. People buy from people they trust — story builds trust faster than credentials.</p>
                </div>

                <div className="border-l-4 border-violet-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">8. Include specific social proof</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Vague claims lose. Specifics win. "I've helped over 80 B2B consultants generate $2M+ in new revenue through LinkedIn" beats "I help businesses grow." Numbers, names (with permission), and client outcomes make your About section credible.</p>
                </div>

                <div className="border-l-4 border-violet-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">9. End with a clear call to action</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Tell visitors exactly what to do next: "DM me 'AUDIT' for a free LinkedIn profile review," "Book a call at calendly.com/yourname," or "Visit trispur.com to see how I can help." Most profiles skip this — which is why profile views rarely convert into conversations.</p>
                </div>

                <div className="border-l-4 border-violet-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">10. Keep it to 200–300 words</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Long enough to build trust, short enough to be read. Use short paragraphs and line breaks — LinkedIn's editor doesn't have bullet points in the About section, but you can paste in bullet characters (•) or use line breaks to create white space.</p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-8">
                <p className="text-sm font-bold text-gray-900 mb-2">Need a great LinkedIn About section?</p>
                <p className="text-sm text-gray-600 mb-3">Our free LinkedIn Bio Generator writes an optimized About section in your voice in under 60 seconds.</p>
                <Link href="/tools/linkedin-bio-generator" className="inline-block bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
                  Generate my About section →
                </Link>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Section 3: Featured Section (Your Silent Closer)</h3>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">11. Add a Featured section if you haven't already</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">The Featured section appears directly below your About section and lets you pin posts, articles, links, or media. It's one of the highest-converting parts of your profile because it's visual and links out. Click "Add section" → "Featured" to enable it.</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">12. Pin your best social proof content</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Pin 2–3 items that demonstrate results: a case study post that got strong engagement, a client testimonial screenshot, a link to your website or booking page, or a lead magnet. Think about what a warm prospect would want to see after reading your About section.</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">13. Use custom thumbnails for links</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">When you add a link to Featured, you can upload a custom thumbnail image. Default link previews are often boring. Design a 1200 × 627px graphic with a compelling headline and your branding. It makes your Featured section look intentional rather than rushed.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Section 4: Experience & Credibility</h3>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">14. Write result-driven experience descriptions</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Don't list job duties — list outcomes. "Managed a team of 5" tells visitors nothing. "Led a team of 5 to launch a SaaS product that reached $500K ARR in 18 months" makes them want to hire you. Start each bullet with an action verb and include a number wherever possible.</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">15. Add media to your experience entries</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Each experience entry lets you attach links and media. Add case studies, press mentions, project screenshots, or client logos. This transforms your resume-style experience into a portfolio — and gives profile visitors more reasons to trust you.</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">16. Request recommendations (and make it easy to say yes)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">LinkedIn recommendations are powerful trust signals. Most people don't ask for them — and those who do send generic requests. Instead, send a personalized message referencing a specific project or outcome, and optionally suggest 2–3 points they could mention. The easier it is, the more likely they say yes.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Section 5: SEO & Discoverability</h3>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-rose-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">17. Add your top keywords naturally throughout your profile</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">LinkedIn's search algorithm weights keywords in your headline, About section, skills, and job titles. Know what your ideal clients type when searching for someone like you — "B2B lead generation," "fractional CMO," "LinkedIn ghostwriter" — and make sure those terms appear naturally across your profile.</p>
                </div>

                <div className="border-l-4 border-rose-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">18. Add at least 5 relevant skills</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Skills directly affect search visibility. Add up to 50 skills, but prioritize the 5–10 most relevant to your niche. Avoid generic skills like "Microsoft Office" if you're targeting B2B buyers — they don't search for that. Reorder your top 3 skills to appear first by dragging them in the Skills section.</p>
                </div>

                <div className="border-l-4 border-rose-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">19. Turn on "Open to Work" for consulting (but use the right setting)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">If you're open to new clients or projects, enable "Providing services" under your Services section. This adds a "Services" panel to your profile that displays what you offer, is searchable, and lets clients contact you directly. It's different from "Open to Work" (which signals job seeking) — use the right one for your situation.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Section 6: Advanced Profile Moves</h3>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">20. Make your profile public and turn on Creator Mode</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Creator Mode rearranges your profile to feature your content first, adds a "Follow" button, and lets you set topics you post about (#B2BMarketing, #LinkedInTips, etc.). It signals to the LinkedIn algorithm that you're an active content creator — which can boost distribution for your posts.</p>
                </div>

                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">21. Add your contact information — including email and website</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">This one sounds obvious, but most profiles don't include it. Under "Contact info," add your website, email, phone (optional), and any other relevant links. Make it frictionless for interested prospects to reach you — don't make them hunt for your contact details after deciding they want to work with you.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The LinkedIn Profile Checklist: Score Yourself</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Use this quick checklist to audit where you stand across the 21 tips above:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Professional headshot (not a selfie)",
                  "Custom banner with positioning",
                  "Headline targets client, not ego",
                  "Location + industry set",
                  "Custom LinkedIn URL",
                  "About section opens with a hook",
                  "About tells a story (not a history)",
                  "About includes specific social proof",
                  "About ends with a clear CTA",
                  "About is 200–300 words",
                  "Featured section enabled + populated",
                  "Featured items show social proof",
                  "Experience entries show results",
                  "Recommendations from clients",
                  "Top keywords in headline + About",
                  "5+ relevant skills listed",
                  "Services section enabled (if consultant)",
                  "Profile visibility set to Public",
                  "Creator Mode enabled",
                  "Contact info complete",
                  "Custom thumbnails in Featured",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-4 h-4 rounded border border-gray-300 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 my-8">
                <p className="text-sm font-bold text-gray-900 mb-2">Get your score automatically</p>
                <p className="text-sm text-gray-600 mb-3">Our LinkedIn Profile Optimizer walks through all 20 checkpoints interactively and scores your profile out of 100.</p>
                <Link href="/tools/linkedin-profile-optimizer" className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  Score my profile →
                </Link>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common LinkedIn Profile Mistakes (and How to Fix Them)</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Mistake</th>
                      <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Fix</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Headline = job title", "Rewrite as: who you help + result + proof"],
                      ["About section starts with 'I am a...'", "Start with a result or bold claim"],
                      ["No Featured section", "Add it and pin 2–3 social proof items"],
                      ["Experience reads like a job posting", "Rewrite bullets as results with numbers"],
                      ["0 recommendations", "DM 3 past clients this week with a specific ask"],
                      ["Default LinkedIn banner", "Design a 1584×396 banner in Canva"],
                      ["No call to action anywhere", "Add a CTA at the end of your About section"],
                      ["Profile set to private", "Make all sections public in Settings"],
                      ["No website link", "Add it under Contact info"],
                      ["Generic headline with buzzwords", "Replace 'passionate' and 'innovative' with specifics"],
                    ].map(([mistake, fix]) => (
                      <tr key={mistake} className="border-t border-gray-100">
                        <td className="p-3 border border-gray-200 text-gray-600">{mistake}</td>
                        <td className="p-3 border border-gray-200 text-gray-700 font-medium">{fix}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What should I put in my LinkedIn profile headline?",
                    a: "Your headline should state who you help, what result you deliver, and include a proof point or differentiator. Avoid job titles — write something like 'I help SaaS founders grow to $1M ARR through LinkedIn content | 40+ clients served.' This targets your ideal client rather than impressing recruiters.",
                  },
                  {
                    q: "How long should my LinkedIn About section be?",
                    a: "200–300 words. Long enough to tell your story and build trust, short enough that visitors read it fully. Start with a hook — a bold claim or result — because only the first 3 lines show before 'see more.' End with a clear call to action.",
                  },
                  {
                    q: "What's the ideal LinkedIn profile photo?",
                    a: "A professional headshot with a clean background, good lighting, and a genuine smile. You should fill 60% of the frame. Avoid group photos, heavy filters, and photos taken more than 5 years ago. LinkedIn data shows profiles with professional photos get 21x more profile views.",
                  },
                  {
                    q: "How do I get more profile views on LinkedIn?",
                    a: "Post content consistently (3–5x/week), comment on posts in your niche daily, connect with your target clients, and optimize your headline for keywords. Activity is the biggest driver — inactive profiles get minimal views regardless of profile quality.",
                  },
                  {
                    q: "Should my LinkedIn profile be public?",
                    a: "Yes — always set your profile to public. This allows your profile to be found via Google, by non-LinkedIn users, and by LinkedIn members outside your network. Under Privacy settings, toggle 'Edit your public profile' to show all sections.",
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
              <h2 className="text-2xl font-bold text-white mb-2">Turn your optimized profile into a content engine</h2>
              <p className="text-blue-100 mb-6 text-sm">
                A great profile gets visitors. Great content keeps them coming back — and converts them into clients. Spur AI generates LinkedIn posts, DMs, and content ideas in your voice.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/signup" className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-sm">
                  Start free trial →
                </Link>
                <Link href="/tools/linkedin-post-generator" className="border border-blue-400/50 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
                  Try post generator free
                </Link>
              </div>
              <p className="text-blue-200 text-xs mt-3">No credit card required · 14-day free trial</p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-3">Related guides:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "LinkedIn Summary Examples", href: "/blog/linkedin-summary-examples" },
                  { label: "LinkedIn Headline Generator", href: "/tools/linkedin-headline-generator" },
                  { label: "LinkedIn Personal Branding", href: "/blog/linkedin-personal-branding" },
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

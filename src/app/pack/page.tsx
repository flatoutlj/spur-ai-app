import type { Metadata } from "next"
import Link from "next/link"

const BUY_URL = "https://buy.stripe.com/8x228k8il3An27r3vl4gg00"

export const metadata: Metadata = {
  title: "The LinkedIn Founder Content Pack — 200+ Hooks, DM Scripts & 30-Day Calendar",
  description:
    "Stop staring at a blank LinkedIn composer. Get 200+ proven hooks, 8 DM scripts that get replies, 40 headline formulas, and a plug-and-play 30-day content calendar. Instant access, $29 one-time.",
  keywords: [
    "linkedin content pack",
    "linkedin hooks",
    "linkedin dm scripts",
    "linkedin content calendar template",
    "linkedin post templates",
  ],
  openGraph: {
    title: "The LinkedIn Founder Content Pack",
    description:
      "200+ hooks, 8 DM scripts, 40 headline formulas, and a 30-day content calendar. Instant access for $29.",
    type: "website",
    url: "https://www.trispur.com/pack",
    siteName: "Spur AI",
  },
  alternates: { canonical: "https://www.trispur.com/pack" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "The LinkedIn Founder Content Pack",
  description:
    "200+ proven LinkedIn hooks, 8 DM scripts that get replies, 40 headline formulas, and a plug-and-play 30-day content calendar for B2B consultants, coaches, and agency owners.",
  brand: { "@type": "Brand", name: "Spur AI" },
  offers: {
    "@type": "Offer",
    price: "29.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://www.trispur.com/pack",
  },
}

const INCLUDES = [
  {
    icon: "🎣",
    title: "200+ Proven LinkedIn Hooks",
    body: "The first line decides whether anyone reads your post. Get 200+ scroll-stopping opening lines, organized by post type — contrarian takes, personal stories, results, how-tos, and more.",
  },
  {
    icon: "💬",
    title: "8 DM Scripts That Get Replies",
    body: "Copy-paste outreach messages for cold prospects, warm intros, content-triggered DMs, event follow-ups, and re-engagement — with the psychology behind why each works.",
  },
  {
    icon: "📌",
    title: "40 Headline Formulas",
    body: "Your headline is the most-read line on your profile. Get 40 fill-in-the-blank formulas by role — consultant, coach, agency owner, founder — that turn profile views into inbound leads.",
  },
  {
    icon: "🗓️",
    title: "Plug-and-Play 30-Day Content Calendar",
    body: "Never wonder what to post again. A full month of post prompts mapped to the content mix that actually generates leads — just fill in your specifics and publish.",
  },
]

export default function PackSalesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
            <a
              href={BUY_URL}
              className="gradient-bg text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Get the pack — $29
            </a>
          </div>
        </nav>

        <main className="pt-14">
          {/* Hero */}
          <section className="px-4 py-16 text-center bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 text-xs text-amber-700 font-medium mb-6">
                ⚡ Instant access · One-time $29 · No subscription
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                Never stare at a blank LinkedIn composer again
              </h1>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                The LinkedIn Founder Content Pack gives you <strong>200+ hooks</strong>, <strong>8 DM scripts</strong>, <strong>40 headline formulas</strong>, and a <strong>30-day content calendar</strong> — everything a busy consultant, coach, or agency owner needs to post consistently and turn LinkedIn into a lead source.
              </p>
              <a
                href={BUY_URL}
                className="inline-block gradient-bg text-white font-bold px-10 py-4 rounded-full hover:opacity-90 transition-opacity text-lg"
              >
                Get instant access — $29 →
              </a>
              <p className="text-gray-400 text-xs mt-3">Secure checkout via Stripe · Instant delivery</p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-gray-500">
                <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> 30-day money-back guarantee</span>
                <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> One-time — no subscription</span>
                <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> Yours forever</span>
              </div>
              <p className="mt-3 text-xs text-amber-700 font-medium">🔥 Founding price — goes up as we add more templates.</p>
            </div>
          </section>

          {/* What's inside */}
          <section className="px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">What's inside the pack</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {INCLUDES.map((item) => (
                  <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Who it's for */}
          <section className="px-4 py-12 bg-gray-50">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Built for people who sell expertise</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you're a consultant, coach, fractional exec, or agency owner, LinkedIn is where your next client is scrolling. But you don't have hours to figure out what to post. This pack turns "I should post more" into "here's exactly what to post today."
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                {["Consultants", "Coaches", "Agency owners", "Fractional execs", "Freelancers", "Founders"].map((t) => (
                  <span key={t} className="bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{t}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Value anchor */}
          <section className="px-4 py-16">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-gray-600 leading-relaxed mb-2">
                One client from LinkedIn is worth thousands. This pack costs <strong className="text-gray-900">less than lunch</strong>.
              </p>
              <p className="text-gray-500 text-sm mb-8">
                Hiring a LinkedIn ghostwriter runs $2,000–$5,000/month. This is a one-time $29 and it's yours forever.
              </p>
              <a
                href={BUY_URL}
                className="inline-block gradient-bg text-white font-bold px-10 py-4 rounded-full hover:opacity-90 transition-opacity text-lg"
              >
                Get the pack — $29 →
              </a>
            </div>
          </section>

          {/* Upsell to product */}
          <section className="px-4 py-12 bg-gradient-to-br from-blue-600 to-violet-700">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl font-bold text-white mb-2">Want the AI to write it all for you?</h2>
              <p className="text-blue-100 text-sm mb-5">
                The pack gives you the templates. Spur AI generates finished posts, DMs, and headlines in your voice — in seconds. Try it free.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/free-tools" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-sm">
                  Try the free tools
                </Link>
                <Link href="/pricing" className="border border-blue-400/50 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
                  See plans from $19/mo
                </Link>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-xs">
          <p>© 2026 Spur AI · <Link href="/" className="hover:text-white">trispur.com</Link> · <a href="mailto:hello@trispur.com" className="hover:text-white">hello@trispur.com</a></p>
        </footer>
      </div>
    </>
  )
}

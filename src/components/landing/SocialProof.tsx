import Link from "next/link"

/**
 * Honest positioning for a product with no customers yet.
 *
 * This replaced a block that claimed "500+ B2B professionals", "12,000+ posts
 * generated" and "87% report more inbound leads", under the header "Trusted by
 * agency owners, consultants & coaches at" followed by Accenture, Deloitte,
 * HubSpot, Shopify, Mailchimp and Stripe. None of it was true — the database
 * has three signups, zero paying customers and zero posts generated — and
 * naming real companies as customers is a straightforward FTC problem as well
 * as an instant credibility kill with the exact audience this sells to.
 *
 * What replaces it is the thing a new product can honestly trade on: being
 * specific about what you get, and being early.
 */

const FACTS = [
  { value: "9", label: "free tools, no signup required" },
  { value: "$29", label: "one-time for the full pack — no subscription" },
  { value: "30 days", label: "money-back, no questions asked" },
]

export default function SocialProof() {
  return (
    <section className="py-14 bg-surface-sunken border-y border-line">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-ink-muted text-sm font-medium uppercase tracking-wider">
          Where this is up to
        </p>
        <p className="mt-4 text-lg text-ink leading-relaxed">
          Spur AI is new. There is no wall of logos here yet and no testimonials,
          because inventing them would be the fastest way to lose the kind of
          person this is built for.
        </p>
        <p className="mt-3 text-ink-muted leading-relaxed">
          What there is: nine tools you can use right now without handing over an
          email, and a content pack you can read the contents of before you pay
          for it.
        </p>

        <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {FACTS.map((f) => (
            <div key={f.label}>
              <dt className="sr-only">{f.label}</dt>
              <dd>
                <span className="block text-3xl font-bold text-ink">{f.value}</span>
                <span className="block text-ink-muted text-sm mt-1">{f.label}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/free-tools"
            className="gradient-bg text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
          >
            Try the free tools
          </Link>
          <Link
            href="/pack"
            className="border border-line-strong text-ink font-semibold px-6 py-3 rounded-full hover:bg-surface transition-colors text-sm"
          >
            See what&apos;s in the $29 pack
          </Link>
        </div>
      </div>
    </section>
  )
}

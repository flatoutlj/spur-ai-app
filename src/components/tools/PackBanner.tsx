import Link from "next/link"
import { cn } from "@/lib/utils"

/**
 * Cross-sell banner for the $29 LinkedIn Founder Content Pack.
 *
 * The nine public `/tools/*` pages are the site's whole SEO surface and its only
 * inbound traffic, and every one of them pointed exclusively at `/signup` — a
 * trial of the AI product. The pack is a static, Stripe-hosted, one-time
 * purchase with no AI dependency, so it is the one path that always converts.
 *
 * Deliberately no social proof: the product has no customers yet, and no
 * follower/customer count or testimonial may be invented here. Deliberately no
 * item counts either — the delivered pack (see `src/app/pack/thank-you`) is
 * smaller than the `/pack` sales copy claims, so this describes what is in it
 * rather than repeating a number that cannot be substantiated.
 *
 * Server component: static content and one link. Do not add "use client".
 */
export default function PackBanner({ className }: { className?: string }) {
  return (
    <aside
      aria-labelledby="pack-banner-heading"
      className={cn("px-4 sm:px-6 lg:px-8 py-8", className)}
    >
      <div className="max-w-3xl mx-auto rounded-card border border-line bg-surface-sunken p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div className="flex-1 min-w-0">
            <h2
              id="pack-banner-heading"
              className="text-ink font-semibold text-base"
            >
              Skip the blank page: The LinkedIn Founder Content Pack
            </h2>
            <p className="text-ink-muted text-sm mt-1.5 leading-relaxed">
              Hooks grouped by post type, DM scripts that open conversations,
              headline formulas and a week-by-week posting calendar. Written for
              consultants, coaches and agency owners — delivered instantly, no
              AI and no setup required.
            </p>
            <p className="text-ink-muted text-xs mt-3">
              One-time $29 · No subscription · 30-day money-back guarantee
            </p>
          </div>
          <Link
            href="/pack"
            className="shrink-0 inline-flex items-center justify-center gradient-bg text-white text-sm font-semibold px-5 py-2.5 rounded-control hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Get the pack — $29
          </Link>
        </div>
      </div>
    </aside>
  )
}

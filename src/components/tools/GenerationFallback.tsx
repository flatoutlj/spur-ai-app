"use client"

import { useState } from "react"
import Link from "next/link"

/**
 * Recovery UI shown when an AI generation request fails.
 *
 * Before this existed, a failed generation rendered a bare red box reading
 * "Generation failed" and the visitor left. During the current Anthropic key
 * outage that is every single person who tried the flagship tool — the highest
 * intent traffic on the site, arriving on our top SEO landing page, lost with
 * no capture and no alternative.
 *
 * This turns the dead end into three live paths: capture the lead, point at the
 * tools that genuinely still work, and offer the one product that has no AI
 * dependency. It is not outage-specific — rate limits, timeouts and upstream
 * 5xx hit the same path in normal operation.
 */

/** Tools that render from static data and keep working when the AI API is down. */
const WORKING_TOOLS = [
  { href: "/tools/linkedin-hooks", label: "200+ proven hooks" },
  { href: "/tools/linkedin-headline-generator", label: "Headline formulas" },
  { href: "/tools/linkedin-dm-generator", label: "DM scripts" },
  { href: "/tools/linkedin-content-calendar", label: "30-day calendar" },
]

export default function GenerationFallback({
  source,
  onRetry,
}: {
  /** Identifies which tool the lead came from, stored on the capture row. */
  source: string
  onRetry?: () => void
}) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle")

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes("@")) return
    setStatus("submitting")
    try {
      await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      })
    } catch {
      /* /api/email persists best-effort; never strand the user on a network blip */
    }
    setStatus("done")
  }

  return (
    <div
      role="alert"
      className="mx-6 mt-4 rounded-card border border-line bg-surface-sunken p-5"
    >
      <h3 className="text-ink font-semibold text-sm">
        The AI writer didn&apos;t respond just now
      </h3>
      <p className="text-ink-muted text-sm mt-1 leading-relaxed">
        This one&apos;s on us, not you. Leave your email and we&apos;ll tell you
        the moment it&apos;s back — or keep going with the tools below, which
        don&apos;t need the AI at all.
      </p>

      {status === "done" ? (
        <p className="mt-4 text-sm text-positive font-medium">
          Got it — we&apos;ll be in touch.
        </p>
      ) : (
        <form onSubmit={submit} className="mt-4 flex flex-col sm:flex-row gap-2">
          <label htmlFor={`fallback-email-${source}`} className="sr-only">
            Email address
          </label>
          <input
            id={`fallback-email-${source}`}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 min-w-0 px-3 py-2 rounded-control border border-line-strong bg-surface text-ink placeholder:text-ink-subtle text-sm"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="gradient-bg text-white text-sm font-semibold px-4 py-2 rounded-control hover:opacity-90 transition-opacity disabled:opacity-60 whitespace-nowrap"
          >
            {status === "submitting" ? "Saving…" : "Tell me when it's back"}
          </button>
        </form>
      )}

      <div className="mt-5 pt-4 border-t border-line">
        <p className="text-ink-subtle text-xs font-medium uppercase tracking-wide">
          Works right now
        </p>
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
          {WORKING_TOOLS.map((t) => (
            <li key={t.href}>
              <Link
                href={t.href}
                className="text-sm text-brand hover:underline underline-offset-2"
              >
                {t.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-ink-muted text-sm mt-3">
          Or skip the wait —{" "}
          <Link href="/pack" className="text-brand font-medium hover:underline underline-offset-2">
            the $29 content pack
          </Link>{" "}
          is instant and needs no AI.
        </p>
      </div>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 text-sm text-ink-muted hover:text-ink underline underline-offset-2"
        >
          Try generating again
        </button>
      )}
    </div>
  )
}

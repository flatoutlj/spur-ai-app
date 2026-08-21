"use client"

import { useState } from "react"
import Link from "next/link"

/**
 * Non-blocking email capture bar for free tools.
 * Captures warm leads without gating tool usage. Posts to /api/email
 * (which always persists to Supabase). On success, shows a soft upsell.
 */
export default function EmailCaptureBar({
  source,
  prompt = "Get weekly LinkedIn growth tips + new templates — free.",
}: {
  source: string
  prompt?: string
}) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle")

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) return
    setStatus("submitting")
    try {
      await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      })
    } catch {
      /* endpoint persists best-effort; ignore network errors for UX */
    }
    setStatus("done")
  }

  if (status === "done") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
        <span className="font-semibold">You&apos;re in. 🎉</span> Check your inbox soon. Want it all now?{" "}
        <Link href="/pack" className="underline font-medium hover:text-green-900">
          Grab the $29 content pack →
        </Link>
      </div>
    )
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-xl border border-gray-200 bg-gray-50 p-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
    >
      <p className="text-sm text-gray-600 flex-1 leading-snug">{prompt}</p>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 sm:w-52 px-3 py-2 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex-shrink-0 gradient-bg text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60 whitespace-nowrap"
        >
          {status === "submitting" ? "…" : "Get it"}
        </button>
      </div>
    </form>
  )
}

"use client"

import { useState } from "react"

interface CTAProps {
  email: string
  setEmail: (email: string) => void
}

export default function CTASection({ email, setEmail }: CTAProps) {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "cta" }),
      })
    } catch {}
    window.location.href = `/signup?email=${encodeURIComponent(email)}`
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="gradient-bg rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Your next client is scrolling LinkedIn right now
            </h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
              Every day you don&apos;t post, a competitor is building trust with your ideal client.
              Start your free trial and post your first winning piece of content today.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none text-base"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors text-base whitespace-nowrap disabled:opacity-70"
              >
                {loading ? "Loading…" : "Start free trial →"}
              </button>
            </form>
            <p className="text-blue-200 text-sm">
              14 days free · No credit card · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

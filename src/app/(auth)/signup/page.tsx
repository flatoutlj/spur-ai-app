"use client"

import { useState, use } from "react"
import Link from "next/link"

const PLAN_DETAILS: Record<string, { name: string; price: number; highlight: string }> = {
  starter: { name: "Starter", price: 149, highlight: "30 AI posts/mo + hooks library" },
  growth: { name: "Growth", price: 249, highlight: "Unlimited posts + DM generator + analytics" },
  agency: { name: "Agency", price: 449, highlight: "5 seats + white-label + strategy calls" },
}

const BENEFITS = [
  "AI posts trained on your voice and niche",
  "50+ LinkedIn hooks that stop the scroll",
  "Content calendar so you never miss a day",
  "Prospect DM generator that books calls",
  "Post analytics to double down on what works",
]

export default function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string; plan?: string }>
}) {
  const params = use(searchParams)
  const plan = PLAN_DETAILS[params.plan ?? ""] ?? null
  const [formData, setFormData] = useState({
    name: "",
    email: params.email || "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, plan: params.plan }),
      })
      const data = await res.json()
      if (data.error) {
        setError(data.error)
      } else {
        window.location.href = "/onboarding"
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-8 items-start">

        {/* Left: value prop */}
        <div className="hidden lg:block pt-4">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Spur AI</span>
          </Link>

          {plan ? (
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-6">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">Selected plan</div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-gray-900">{plan.name}</span>
                <span className="text-gray-500 text-sm">— ${plan.price}/mo</span>
              </div>
              <div className="text-sm text-gray-600 mt-1">{plan.highlight}</div>
              <div className="mt-3 text-xs text-blue-700 font-medium bg-blue-100 rounded-lg px-3 py-1.5 inline-block">
                Founding member pricing — locked in for life
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-100 rounded-2xl p-5 mb-6">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">14-day free trial</div>
              <div className="text-lg font-bold text-gray-900 mb-1">Try every feature, free</div>
              <div className="text-sm text-gray-500">No credit card required. Cancel anytime.</div>
            </div>
          )}

          <div className="space-y-3">
            <div className="text-sm font-semibold text-gray-700 mb-2">What you get:</div>
            {BENEFITS.map((b) => (
              <div key={b} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                {b}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900 text-sm">Marcus T.</div>
                <div className="text-gray-400 text-xs">Agency owner · 6 clients from LinkedIn</div>
                <p className="text-gray-600 text-xs mt-2 leading-relaxed">
                  &ldquo;I was posting randomly and getting nothing. Spur AI gave me a system. First paying client from LinkedIn came in week 3.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div>
          <div className="lg:hidden text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Spur AI</span>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Create your account</h1>
            <p className="text-gray-500 text-sm mb-6">
              {plan ? `${plan.name} plan · 14-day free trial · No credit card` : "14 days free · No credit card required"}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Work email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Min. 8 characters"
                  minLength={8}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full gradient-bg text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {loading ? "Creating your account..." : "Start free trial →"}
              </button>
            </form>

            <p className="text-center text-gray-500 text-sm mt-5">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 font-medium hover:underline">Log in</Link>
            </p>

            <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-center gap-5 text-xs text-gray-400">
              <span className="flex items-center gap-1"><span className="text-green-500">✓</span> 14-day free trial</span>
              <span className="flex items-center gap-1"><span className="text-green-500">✓</span> No credit card</span>
              <span className="flex items-center gap-1"><span className="text-green-500">✓</span> Cancel anytime</span>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="underline">Terms</Link> and{" "}
            <Link href="/privacy" className="underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

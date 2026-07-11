"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const FREE_LIMIT = 3
const SESSION_KEY = "spur_gen_count"

const TOPIC_OPTIONS = [
  { value: "consulting", label: "Management Consulting" },
  { value: "agency", label: "Marketing/Creative Agency" },
  { value: "coach", label: "Business Coaching" },
  { value: "saas", label: "SaaS / Tech Startup" },
  { value: "recruiter", label: "Executive Recruiting" },
  { value: "finance", label: "Financial Advisory" },
]

const TYPE_OPTIONS = [
  { value: "story", label: "Personal story / lesson learned" },
  { value: "contrarian", label: "Contrarian take / hot opinion" },
  { value: "howto", label: "Step-by-step how-to" },
  { value: "results", label: "Client result / case study" },
  { value: "list", label: "List post (\"X things about...\")" },
]

export default function LinkedInPostGeneratorTool() {
  const [topic, setTopic] = useState("consulting")
  const [type, setType] = useState("story")
  const [context, setContext] = useState("")
  const [post, setPost] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [genCount, setGenCount] = useState(0)
  const [showGate, setShowGate] = useState(false)
  const [gateEmail, setGateEmail] = useState("")
  const [gateSubmitting, setGateSubmitting] = useState(false)
  const [gateUnlocked, setGateUnlocked] = useState(false)
  const [gateSuccess, setGateSuccess] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const stored = parseInt(sessionStorage.getItem(SESSION_KEY) ?? "0", 10)
    setGenCount(stored)
    if (stored >= FREE_LIMIT) setGateUnlocked(false)
  }, [])

  const incrementCount = () => {
    const next = genCount + 1
    setGenCount(next)
    sessionStorage.setItem(SESSION_KEY, String(next))
  }

  const generate = async () => {
    if (!gateUnlocked && genCount >= FREE_LIMIT) {
      setShowGate(true)
      return
    }
    setLoading(true)
    setError("")
    setPost("")
    try {
      const res = await fetch("/api/tools/generate-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, type, context: context.trim() || undefined }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? "Generation failed")
      setPost(data.post)
      incrementCount()
      if (!gateUnlocked && genCount + 1 >= FREE_LIMIT) {
        // Will show gate on next click
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleGateSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!gateEmail) return
    setGateSubmitting(true)
    try {
      await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: gateEmail, source: "tool-gate" }),
      })
    } catch {}
    setGateUnlocked(true)
    setGateSubmitting(false)
    setGateSuccess(true)
    sessionStorage.setItem(SESSION_KEY, "0")
    setGenCount(0)
    setTimeout(() => {
      setShowGate(false)
      setGateSuccess(false)
      generate()
    }, 2800)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(post)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const remaining = Math.max(0, FREE_LIMIT - genCount)

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
      {/* Gate modal */}
      {showGate && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            {gateSuccess ? (
              <div className="text-center">
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Unlimited posts unlocked!</h3>
                <p className="text-gray-400 text-sm mb-5">Generating your post now...</p>
                <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-100 rounded-xl p-4 text-left mb-3">
                  <p className="text-sm font-semibold text-gray-900 mb-1">Want posts in your voice?</p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    Spur AI trains on your writing style — every post sounds like you, not a bot. Save posts, schedule content, and track what converts.
                  </p>
                  <Link
                    href="/signup"
                    className="block w-full gradient-bg text-white text-sm font-semibold py-2.5 rounded-xl hover:opacity-90 transition-opacity text-center"
                  >
                    Start 14-day free trial →
                  </Link>
                  <p className="text-center text-xs text-gray-400 mt-2">No credit card required</p>
                </div>
              </div>
            ) : (
              <>
                <div className="text-3xl mb-3 text-center">✍️</div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  You&apos;ve used your 3 free posts
                </h3>
                <p className="text-gray-500 text-center text-sm mb-6">
                  Enter your email to unlock unlimited free generations — no credit card required.
                </p>
                <form onSubmit={handleGateSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={gateEmail}
                    onChange={(e) => setGateEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <button
                    type="submit"
                    disabled={gateSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 text-sm"
                  >
                    {gateSubmitting ? "Unlocking..." : "Unlock unlimited free posts →"}
                  </button>
                </form>
                <p className="text-center text-xs text-gray-400 mt-3">
                  No spam. Unsubscribe anytime.{" "}
                  <button onClick={() => setShowGate(false)} className="text-blue-600 hover:underline">
                    Maybe later
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
      )}

      <div className="p-6 border-b border-gray-50">
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your niche</label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {TOPIC_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Post type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {TYPE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Any specific topic or context? <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="e.g. raising prices, losing a client, hiring mistakes..."
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={generate}
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 text-sm"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Writing your post with AI...
            </span>
          ) : (
            "Generate LinkedIn post with AI →"
          )}
        </button>

        <div className="flex items-center justify-between mt-2">
          {!gateUnlocked && genCount < FREE_LIMIT && (
            <p className="text-xs text-gray-400">
              {remaining} free {remaining === 1 ? "generation" : "generations"} remaining
            </p>
          )}
          {gateUnlocked && (
            <p className="text-xs text-green-600 font-medium">Unlimited generations unlocked</p>
          )}
          <p className="text-xs text-gray-400 ml-auto">
            Powered by Claude AI ·{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Upgrade for voice training
            </Link>
          </p>
        </div>
      </div>

      {error && (
        <div className="p-4 mx-6 mt-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
          {error}
        </div>
      )}

      {post && (
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900 text-sm">Your Name</div>
                <div className="text-gray-400 text-xs">
                  {TOPIC_OPTIONS.find((o) => o.value === topic)?.label}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                AI generated
              </span>
              <button
                onClick={handleCopy}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg transition-colors font-medium"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <div className="text-gray-800 text-sm leading-relaxed whitespace-pre-line">
            {post}
          </div>

          <div className="mt-5 pt-4 border-t border-gray-50 flex flex-col sm:flex-row items-center gap-3">
            <p className="text-gray-500 text-sm flex-1">
              Like this? Get posts trained on <em>your</em> voice, tone, and niche.
            </p>
            <Link
              href="/signup"
              className="flex-shrink-0 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Start free trial →
            </Link>
          </div>
        </div>
      )}

      {!post && !loading && !error && (
        <div className="p-8 text-center text-gray-400 text-sm">
          Select your niche and post type, then click generate.
          <br />
          <span className="text-xs">Real AI — not templates.</span>
        </div>
      )}
    </div>
  )
}

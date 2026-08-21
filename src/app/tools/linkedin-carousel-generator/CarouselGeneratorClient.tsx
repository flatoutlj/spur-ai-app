"use client"

import { useState } from "react"
import Link from "next/link"

const NICHE_OPTIONS = [
  { value: "consulting", label: "Management Consulting" },
  { value: "agency", label: "Marketing/Creative Agency" },
  { value: "coach", label: "Business Coaching" },
  { value: "saas", label: "SaaS / Tech Startup" },
  { value: "recruiter", label: "Executive Recruiting" },
  { value: "finance", label: "Financial Advisory" },
]

type Slide = { heading: string; body: string }

export default function CarouselGeneratorClient() {
  const [topic, setTopic] = useState("")
  const [niche, setNiche] = useState("consulting")
  const [slides, setSlides] = useState<Slide[]>([])
  const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)

  const generate = async () => {
    if (!topic.trim()) {
      setError("Enter a topic to generate a carousel.")
      return
    }
    setLoading(true)
    setError("")
    setSlides([])
    setCurrent(0)
    try {
      const res = await fetch("/api/tools/generate-carousel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topic.trim(), niche }),
      })
      const data = await res.json()
      if (!res.ok || !data.slides) throw new Error(data.error ?? "Generation failed")
      setSlides(data.slides)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const copyAll = async () => {
    const text = slides
      .map((s, i) => `Slide ${i + 1}: ${s.heading}\n${s.body}`)
      .join("\n\n")
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-50">
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your niche</label>
            <select
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {NICHE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Carousel topic</label>
            <input
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. 5 pricing mistakes consultants make"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          onClick={generate}
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 text-sm"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Building your carousel...
            </span>
          ) : (
            "Generate carousel with AI →"
          )}
        </button>
        <p className="text-xs text-gray-400 mt-2 text-center">Free · Powered by Claude AI · 7 slides, ready to design in Canva or a doc</p>
      </div>

      {error && (
        <div className="p-4 mx-6 mt-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">{error}</div>
      )}

      {slides.length > 0 && (
        <div className="p-6">
          {/* Slide preview */}
          <div className="relative">
            <div className="aspect-square max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-violet-700 text-white p-8 flex flex-col justify-center shadow-lg">
              <div className="text-xs uppercase tracking-widest text-blue-200 mb-3">
                Slide {current + 1} of {slides.length}
              </div>
              <h3 className="text-2xl font-bold leading-tight mb-3">{slides[current].heading}</h3>
              <p className="text-blue-50 text-sm leading-relaxed">{slides[current].body}</p>
            </div>
            {/* Nav */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                disabled={current === 0}
                className="w-9 h-9 rounded-full border border-gray-200 text-gray-600 disabled:opacity-30 hover:bg-gray-50"
                aria-label="Previous slide"
              >
                ←
              </button>
              <div className="flex gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-blue-600" : "bg-gray-300"}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrent((c) => Math.min(slides.length - 1, c + 1))}
                disabled={current === slides.length - 1}
                className="w-9 h-9 rounded-full border border-gray-200 text-gray-600 disabled:opacity-30 hover:bg-gray-50"
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={copyAll}
              className="w-full sm:w-auto bg-gray-900 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-700 transition-colors"
            >
              {copied ? "Copied all slides!" : "Copy all slides"}
            </button>
            <Link
              href="/signup"
              className="w-full sm:w-auto flex-1 text-center gradient-bg text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Get unlimited carousels + posts →
            </Link>
          </div>

          <a
            href="/pack"
            className="mt-3 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 hover:border-amber-300 transition-colors"
          >
            <span className="text-xl">📦</span>
            <span className="flex-1 text-xs text-gray-700 leading-snug">
              <strong className="text-gray-900">10 more carousel frameworks</strong> + 200 hooks, 8 DM scripts &amp; a 30-day calendar — one-time $29.
            </span>
            <span className="flex-shrink-0 text-xs font-semibold text-amber-700">Get it →</span>
          </a>
        </div>
      )}

      {slides.length === 0 && !loading && !error && (
        <div className="p-10 text-center text-gray-400">
          <p className="text-sm">Pick your niche and a topic, then generate a 7-slide LinkedIn carousel.</p>
          <p className="text-xs mt-1">Real AI — not templates.</p>
        </div>
      )}
    </div>
  )
}

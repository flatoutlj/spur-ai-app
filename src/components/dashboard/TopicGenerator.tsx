"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface TopicIdea {
  title: string
  framework: string
  reason: string
}

const FRAMEWORK_ICONS: Record<string, string> = {
  "Story post": "📖",
  "Contrarian insight": "💡",
  "How-to guide": "📋",
  "Numbered list": "🔢",
  "Case study": "🏆",
  "Thought question": "🤔",
  "Common mistake": "⚠️",
  "Before vs after": "⚡",
  "Bold prediction": "🔮",
  "Personal confession": "🤫",
}

export default function TopicGenerator() {
  const router = useRouter()
  const [prompt, setPrompt] = useState("")
  const [topics, setTopics] = useState<TopicIdea[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const generate = async () => {
    setLoading(true)
    setError("")
    setTopics([])

    try {
      const res = await fetch("/api/topics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      })
      const data = await res.json()
      if (data.error) {
        setError(data.error)
        return
      }
      setTopics(data.topics || [])
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const writePost = (topic: TopicIdea) => {
    const params = new URLSearchParams({
      topic: topic.title,
      framework: topic.framework,
    })
    router.push(`/dashboard?tab=generate&${params.toString()}`)
  }

  return (
    <div className="space-y-6">
      {/* Input card */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h2 className="font-semibold text-gray-900 text-lg mb-1">Generate topic ideas</h2>
        <p className="text-gray-500 text-sm mb-5">
          Tell us what&apos;s on your mind this week and we&apos;ll generate 10 personalized topic ideas based on your profile.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What&apos;s on your mind this week? <span className="text-gray-400">(optional)</span>
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. I just closed a big deal, struggling with pricing conversations, thinking about AI's impact on my industry..."
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
            />
          </div>

          <button
            onClick={generate}
            disabled={loading}
            className="gradient-bg text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2 text-sm"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Generating ideas...
              </>
            ) : (
              <>Generate 10 Topic Ideas</>
            )}
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
          {error}
        </div>
      )}

      {/* Loading skeleton */}
      {loading && (
        <div className="grid sm:grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 animate-pulse">
              <div className="h-4 bg-gray-100 rounded-lg w-3/4 mb-3" />
              <div className="h-3 bg-gray-100 rounded-lg w-1/3 mb-4" />
              <div className="h-3 bg-gray-100 rounded-lg w-full mb-2" />
              <div className="h-3 bg-gray-100 rounded-lg w-5/6 mb-4" />
              <div className="h-8 bg-gray-100 rounded-lg w-1/2" />
            </div>
          ))}
        </div>
      )}

      {/* Results */}
      {!loading && topics.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">
              {topics.length} topic ideas ready
            </h3>
            <button
              onClick={generate}
              className="text-xs text-gray-500 hover:text-gray-800 border border-gray-200 px-3 py-1.5 rounded-lg transition-colors"
            >
              Regenerate
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-3 hover:border-blue-100 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">
                    {FRAMEWORK_ICONS[topic.framework] || "💬"}
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm leading-snug">
                      {topic.title}
                    </h4>
                    <span className="inline-block mt-1.5 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">
                      {topic.framework}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed flex-1">
                  {topic.reason}
                </p>

                <button
                  onClick={() => writePost(topic)}
                  className="w-full text-center text-xs font-semibold text-white gradient-bg py-2.5 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Write this post
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {!loading && topics.length === 0 && !error && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="text-5xl mb-4">💡</div>
          <p className="text-gray-400 text-sm max-w-xs">
            Click &ldquo;Generate 10 Topic Ideas&rdquo; to get personalized LinkedIn post ideas based on your profile and goals.
          </p>
        </div>
      )}
    </div>
  )
}

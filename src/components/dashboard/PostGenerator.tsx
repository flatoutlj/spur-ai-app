"use client"

import { useState, useEffect } from "react"

const FRAMEWORKS = [
  { id: "story", label: "Personal Story", emoji: "📖" },
  { id: "insight", label: "Contrarian Insight", emoji: "💡" },
  { id: "howto", label: "How-To Guide", emoji: "📋" },
  { id: "list", label: "Numbered List", emoji: "🔢" },
  { id: "case_study", label: "Case Study", emoji: "🏆" },
  { id: "question", label: "Thought Question", emoji: "🤔" },
  { id: "mistake", label: "Common Mistake", emoji: "⚠️" },
  { id: "comparison", label: "Before vs After", emoji: "⚡" },
  { id: "prediction", label: "Bold Prediction", emoji: "🔮" },
  { id: "confession", label: "Confession", emoji: "🤫" },
]

interface Profile {
  full_name?: string
  job_title?: string
  business_name?: string
  industry?: string
  ideal_client?: string
  content_tone?: string
}

export default function PostGenerator() {
  const [topic, setTopic] = useState("")
  const [framework, setFramework] = useState("story")
  const [tone, setTone] = useState("professional but conversational")
  const [includeEmoji, setIncludeEmoji] = useState(false)
  const [generatedPost, setGeneratedPost] = useState("")
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [charCount, setCharCount] = useState(0)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch("/api/profile")
      .then((r) => r.json())
      .then((d) => { if (d.profile) setProfile(d.profile) })
      .catch(() => {})
  }, [])

  const buildUserBio = (p: Profile) => {
    const parts = []
    if (p.full_name) parts.push(`Name: ${p.full_name}`)
    if (p.job_title) parts.push(`Role: ${p.job_title}`)
    if (p.business_name) parts.push(`Business: ${p.business_name}`)
    if (p.industry) parts.push(`Industry: ${p.industry}`)
    if (p.ideal_client) parts.push(`Ideal client: ${p.ideal_client}`)
    if (p.content_tone) parts.push(`Preferred tone: ${p.content_tone.replace(/_/g, " ")}`)
    return parts.join(". ")
  }

  const saveToHistory = async (postText: string) => {
    setSaving(true)
    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: postText, topic, framework }),
      })
    } catch {}
    setSaving(false)
  }

  const generate = async () => {
    if (!topic.trim()) return
    setLoading(true)
    setGeneratedPost("")

    try {
      const userBio = profile ? buildUserBio(profile) : ""
      const resolvedTone = profile?.content_tone
        ? profile.content_tone.replace(/_/g, " ")
        : tone

      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, framework, tone: resolvedTone, includeEmoji, userBio }),
      })

      if (!res.ok) throw new Error("Generation failed")

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let fullText = ""

      while (reader) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value)
        fullText += chunk
        setGeneratedPost(fullText)
        setCharCount(fullText.length)
      }
      if (fullText) saveToHistory(fullText)
    } catch (err) {
      console.error(err)
      setGeneratedPost("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedPost)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const regenerate = () => {
    setGeneratedPost("")
    generate()
  }

  return (
    <div className="grid lg:grid-cols-5 gap-6">
      <div className="lg:col-span-2 space-y-5">
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="font-semibold text-gray-900 mb-4 text-lg">Create a post</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What do you want to post about? *
              </label>
              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. Why I turned down a $50K contract, the biggest mistake agencies make with pricing, how I got 3 clients from one LinkedIn post..."
                rows={3}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content framework</label>
              <div className="grid grid-cols-2 gap-2">
                {FRAMEWORKS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFramework(f.id)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-medium transition-all ${
                      framework === f.id
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <span>{f.emoji}</span>
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tone</label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="professional but conversational">Professional but conversational</option>
                <option value="bold and direct">Bold and direct</option>
                <option value="warm and empathetic">Warm and empathetic</option>
                <option value="educational and authoritative">Educational and authoritative</option>
                <option value="casual and friendly">Casual and friendly</option>
              </select>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIncludeEmoji(!includeEmoji)}
                className={`relative w-10 h-5 rounded-full transition-colors ${includeEmoji ? "bg-blue-500" : "bg-gray-200"}`}
              >
                <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${includeEmoji ? "translate-x-5" : "translate-x-0.5"}`} />
              </button>
              <label className="text-sm text-gray-600">Include emojis</label>
            </div>

            <button
              onClick={generate}
              disabled={loading || !topic.trim()}
              className="w-full gradient-bg text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Generating...
                </>
              ) : (
                <>✨ Generate post</>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 h-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900 text-lg">Your post</h2>
            {generatedPost && (
              <div className="flex items-center gap-2">
                <span className={`text-xs font-medium ${charCount > 3000 ? "text-red-500" : "text-gray-400"}`}>
                  {charCount} chars
                </span>
                <button
                  onClick={regenerate}
                  className="text-xs text-gray-500 hover:text-gray-800 border border-gray-200 px-3 py-1.5 rounded-lg transition-colors"
                >
                  ↺ Regenerate
                </button>
                <button
                  onClick={copyToClipboard}
                  className="text-xs gradient-bg text-white px-3 py-1.5 rounded-lg font-medium"
                >
                  {copied ? "✓ Copied!" : "Copy to clipboard"}
                </button>
              </div>
            )}
          </div>

          {!generatedPost && !loading && (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="text-4xl mb-3">✍️</div>
              <p className="text-gray-400 text-sm max-w-xs">
                Enter a topic, choose your framework, and click Generate to create your LinkedIn post
              </p>
            </div>
          )}

          {generatedPost && (
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-5 min-h-48">
                <div className="flex gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full gradient-bg flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{profile?.full_name ?? "Your Name"}</div>
                    <div className="text-gray-400 text-xs">{profile?.job_title ?? "Your Title"} · Just now</div>
                  </div>
                </div>
                <div className="text-gray-800 text-sm leading-relaxed whitespace-pre-line">
                  {generatedPost}
                </div>
                {loading && (
                  <span className="inline-block w-1 h-4 bg-blue-500 animate-pulse ml-1" />
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={regenerate}
                  className="flex-1 border border-gray-200 text-gray-700 text-sm font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  ↺ Regenerate
                </button>
                <button
                  onClick={copyToClipboard}
                  className="flex-1 gradient-bg text-white text-sm font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  {copied ? "✓ Copied!" : "Copy for LinkedIn"}
                </button>
              </div>
              {saving && <p className="text-xs text-gray-400 text-center">Saving to history...</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

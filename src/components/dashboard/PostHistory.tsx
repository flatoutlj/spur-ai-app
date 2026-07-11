"use client"

import { useState, useEffect } from "react"

interface Post {
  id: string
  content: string
  topic: string
  framework: string
  created_at: string
  status: string
}

const STATUS_BADGES: Record<string, string> = {
  published: "bg-green-50 text-green-700 border border-green-200",
  scheduled: "bg-blue-50 text-blue-700 border border-blue-200",
  draft: "bg-gray-50 text-gray-600 border border-gray-200",
}

const FRAMEWORK_LABELS: Record<string, string> = {
  story: "Story",
  insight: "Insight",
  howto: "How-To",
  list: "List",
  case_study: "Case Study",
  question: "Question",
  mistake: "Mistake",
  comparison: "Comparison",
  prediction: "Prediction",
  confession: "Confession",
}

export default function PostHistory() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"all" | "published" | "scheduled" | "draft">("all")
  const [copiedId, setCopiedId] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/posts")
      .then((r) => r.json())
      .then((d) => { if (d.posts) setPosts(d.posts) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const filtered = filter === "all" ? posts : posts.filter((p) => p.status === filter)

  const copyPost = async (post: Post) => {
    await navigator.clipboard.writeText(post.content)
    setCopiedId(post.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const formatDate = (iso: string) => {
    return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  const getPreview = (content: string) => content.slice(0, 160).trim()

  const getTitle = (post: Post) =>
    post.topic && post.topic.length > 0
      ? post.topic.length > 60 ? post.topic.slice(0, 60) + "…" : post.topic
      : post.content.split("\n")[0].slice(0, 60)

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-semibold text-gray-900 text-lg">Post History</h2>
          <p className="text-gray-500 text-sm">{posts.length} generated posts</p>
        </div>
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          {(["all", "published", "scheduled", "draft"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-xs font-medium px-3 py-1.5 rounded-md transition-all capitalize ${
                filter === f ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-16">
          <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {!loading && filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="text-3xl mb-3">📝</div>
          <p className="text-gray-500 text-sm">
            {posts.length === 0
              ? "No posts yet — generate your first post above"
              : "No posts match this filter"}
          </p>
        </div>
      )}

      <div className="space-y-4">
        {filtered.map((post) => (
          <div key={post.id} className="border border-gray-100 rounded-xl p-5 hover:border-gray-200 transition-colors">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900 text-sm truncate">{getTitle(post)}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${STATUS_BADGES[post.status] ?? STATUS_BADGES.draft}`}>
                    {post.status}
                  </span>
                </div>
                <p className="text-gray-500 text-xs line-clamp-2">{getPreview(post.content)}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => copyPost(post)}
                  className="text-xs text-gray-400 hover:text-blue-600 border border-gray-200 px-3 py-1.5 rounded-lg transition-colors"
                >
                  {copiedId === post.id ? "✓ Copied" : "Copy"}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>{formatDate(post.created_at)}</span>
              <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                {FRAMEWORK_LABELS[post.framework] ?? post.framework}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"

const SAMPLE_HISTORY = [
  {
    id: "1",
    title: "Why I fired my $50K client",
    preview: "I wasted 6 months working with the wrong client. Not because they didn't pay — they did, on time, every month. But because they were slowly killing my team's morale...",
    framework: "Story",
    createdAt: "2026-07-09",
    status: "published",
    engagement: { likes: 247, comments: 89, reposts: 34 },
  },
  {
    id: "2",
    title: "3 pricing mistakes agencies make",
    preview: "After reviewing 100+ agency proposals, I see the same 3 mistakes costing founders $50K-$200K per year. Here's what I found...",
    framework: "List",
    createdAt: "2026-07-08",
    status: "scheduled",
    engagement: null,
  },
  {
    id: "3",
    title: "Cold outreach is dead",
    preview: "Hot take: Cold outreach is no longer the fastest path to B2B clients. Here's what's replacing it and why...",
    framework: "Insight",
    createdAt: "2026-07-07",
    status: "draft",
    engagement: null,
  },
  {
    id: "4",
    title: "How we 3x'd revenue in 90 days",
    preview: "Q1 this year: $28K MRR. Q2: $87K MRR. Here's the exact 3 moves that made the difference...",
    framework: "Case Study",
    createdAt: "2026-07-05",
    status: "published",
    engagement: { likes: 412, comments: 156, reposts: 78 },
  },
]

const STATUS_BADGES: Record<string, string> = {
  published: "bg-green-50 text-green-700 border border-green-200",
  scheduled: "bg-blue-50 text-blue-700 border border-blue-200",
  draft: "bg-gray-50 text-gray-600 border border-gray-200",
}

export default function PostHistory() {
  const [filter, setFilter] = useState<"all" | "published" | "scheduled" | "draft">("all")

  const filtered = filter === "all" ? SAMPLE_HISTORY : SAMPLE_HISTORY.filter(p => p.status === filter)

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-semibold text-gray-900 text-lg">Post History</h2>
          <p className="text-gray-500 text-sm">All your generated and published posts</p>
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

      <div className="space-y-4">
        {filtered.map((post) => (
          <div key={post.id} className="border border-gray-100 rounded-xl p-5 hover:border-gray-200 transition-colors">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900 text-sm truncate">{post.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${STATUS_BADGES[post.status]}`}>
                    {post.status}
                  </span>
                </div>
                <p className="text-gray-500 text-xs line-clamp-2">{post.preview}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button className="text-xs text-gray-400 hover:text-blue-600 border border-gray-200 px-3 py-1.5 rounded-lg transition-colors">
                  Edit
                </button>
                <button className="text-xs text-gray-400 hover:text-blue-600 border border-gray-200 px-3 py-1.5 rounded-lg transition-colors">
                  Copy
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>{post.createdAt}</span>
              <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{post.framework}</span>
              {post.engagement && (
                <div className="flex items-center gap-3 ml-auto">
                  <span>👍 {post.engagement.likes}</span>
                  <span>💬 {post.engagement.comments}</span>
                  <span>🔄 {post.engagement.reposts}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

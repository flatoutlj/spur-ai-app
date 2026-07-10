export default function Analytics() {
  const stats = [
    { label: "Posts Created", value: "47", change: "+12 this month", icon: "✍️", color: "blue" },
    { label: "Content Streak", value: "12 days", change: "Personal best: 18", icon: "🔥", color: "orange" },
    { label: "Avg Engagement", value: "4.2%", change: "+0.8% vs last month", icon: "📈", color: "green" },
    { label: "Profile Views", value: "1,247", change: "+340 this week", icon: "👁️", color: "purple" },
  ]

  const topPosts = [
    { title: "Why I fired my $50K client", likes: 247, comments: 89, reach: "12.4K" },
    { title: "How we 3x'd revenue in 90 days", likes: 412, comments: 156, reach: "28.1K" },
    { title: "Cold outreach is dead", likes: 189, comments: 67, reach: "9.8K" },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{stat.icon}</span>
              <span className="text-xs text-green-600 font-medium">{stat.change}</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Top Performing Posts</h3>
        <div className="space-y-3">
          {topPosts.map((post, i) => (
            <div key={post.title} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{post.title}</p>
                <div className="flex gap-3 text-xs text-gray-400 mt-1">
                  <span>👍 {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-sm font-semibold text-gray-900">{post.reach}</div>
                <div className="text-xs text-gray-400">reach</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">Content insight</h4>
            <p className="text-blue-700 text-sm">
              Your story-format posts get <strong>3.2x more engagement</strong> than list posts.
              Try more personal stories this week to maximize reach.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Analytics({ postCount = 0 }: { postCount?: number }) {
  const stats = [
    { label: "Posts Created", value: postCount.toString(), change: "via Spur AI", icon: "✍️", color: "blue" },
    { label: "Content Streak", value: "—", change: "Connect LinkedIn to track", icon: "🔥", color: "orange" },
    { label: "Avg Engagement", value: "—", change: "Connect LinkedIn to track", icon: "📈", color: "green" },
    { label: "Profile Views", value: "—", change: "Connect LinkedIn to track", icon: "👁️", color: "purple" },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{stat.icon}</span>
              <span className="text-xs text-gray-400 font-medium">{stat.change}</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">LinkedIn Engagement Analytics</h3>
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="text-4xl mb-3">🔗</div>
          <p className="text-gray-600 font-medium mb-1">LinkedIn integration coming soon</p>
          <p className="text-gray-400 text-sm max-w-sm">
            Connect your LinkedIn account to see engagement data, reach metrics, and which posts drive the most profile views and DMs.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">Pro tip while you build momentum</h4>
            <p className="text-blue-700 text-sm">
              Story-format posts consistently generate <strong>3–5x more engagement</strong> than tips or list posts on LinkedIn.
              Start with a personal experience or lesson learned from your work.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

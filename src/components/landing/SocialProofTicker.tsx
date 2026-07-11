"use client"

const tickerItems = [
  "🎯 Just generated: 3-step framework post for SaaS founders",
  "💰 New lead from LinkedIn post: $12K consulting deal",
  "🚀 Marketing agency owner generated 47 posts this month",
  "📈 Strategy consultant: 340% increase in LinkedIn profile views",
  "✅ Just published: contrarian take on cold outreach — 89 comments",
  "🎯 Executive coach booked 4 discovery calls from one post",
  "💼 Agency owner landed $28K retainer via LinkedIn DM",
  "🔥 Post went viral: 1,200 reactions for a B2B founder",
  "📧 Email list grew by 312 subscribers from a single LinkedIn post",
  "🚀 Fractional CMO generated 6 qualified leads this week",
  "💡 Just generated: personal story post for fintech consultant",
  "🎯 SaaS founder closed $45K deal from a LinkedIn comment thread",
]

export default function SocialProofTicker() {
  // Duplicate items so the seamless loop works at any viewport width
  const items = [...tickerItems, ...tickerItems]

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-blue-600 to-violet-600 py-3 relative">
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blue-600 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-violet-600 to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-0 whitespace-nowrap"
        style={{
          animation: "ticker-scroll 55s linear infinite",
          willChange: "transform",
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center text-white text-sm font-medium px-6"
          >
            {item}
            <span className="mx-6 text-blue-300 opacity-60 select-none">•</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}

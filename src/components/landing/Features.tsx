const features = [
  {
    icon: "✍️",
    title: "AI Post Generator",
    description:
      "Generate high-performing LinkedIn posts in under 60 seconds. Trained on 50M+ viral B2B posts. Choose from 15 proven frameworks: stories, contrarian takes, how-tos, lists, and more.",
    tag: "Core Feature",
    tagColor: "blue",
  },
  {
    icon: "🎯",
    title: "Client Attraction Engine",
    description:
      "Not just content — content that converts. Every post includes a built-in CTA strategy designed to move prospects from your feed into your DMs.",
    tag: "Revenue Driver",
    tagColor: "purple",
  },
  {
    icon: "📅",
    title: "Content Calendar",
    description:
      "Plan 30 days of content in one session. Visual calendar with drag-and-drop scheduling. Never run out of ideas with AI-powered topic suggestions based on your niche.",
    tag: "Productivity",
    tagColor: "green",
  },
  {
    icon: "💬",
    title: "Warm Prospect DMs",
    description:
      "When someone engages with your post, Spur AI drafts a personalized DM to start the conversation. Turn likes into discovery calls automatically.",
    tag: "New",
    tagColor: "orange",
  },
  {
    icon: "📊",
    title: "Performance Analytics",
    description:
      "Track which posts generate the most engagement, profile views, and leads. Double down on what works. Kill what doesn't.",
    tag: "Insights",
    tagColor: "blue",
  },
  {
    icon: "🔥",
    title: "Hooks Library",
    description:
      "Access 200+ proven B2B hooks that stop the scroll. Filter by industry, goal, and content type. The difference between 100 and 10,000 impressions is the first line.",
    tag: "Templates",
    tagColor: "red",
  },
]

const tagColors: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700",
  purple: "bg-purple-50 text-purple-700",
  green: "bg-green-50 text-green-700",
  orange: "bg-orange-50 text-orange-700",
  red: "bg-red-50 text-red-700",
}

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to win clients{" "}
            <span className="gradient-text">on LinkedIn</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Spur AI isn&apos;t just a content tool. It&apos;s a client acquisition engine disguised as a LinkedIn assistant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{feature.icon}</div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColors[feature.tagColor]}`}>
                  {feature.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    step: "01",
    title: "Set up your profile",
    description:
      "Tell Spur AI about your business, ideal client, and content goals. Takes 3 minutes. This is how the AI generates content that sounds like you, not a robot.",
    time: "3 minutes",
  },
  {
    step: "02",
    title: "Generate your first post",
    description:
      "Choose a topic, pick a content framework (story, insight, how-to, contrarian take, etc.), and click Generate. Review, tweak if needed, and you're done.",
    time: "60 seconds",
  },
  {
    step: "03",
    title: "Schedule & post to LinkedIn",
    description:
      "Use the built-in scheduler or copy to LinkedIn directly. Spur AI recommends the best time to post based on when your audience is most active.",
    time: "2 clicks",
  },
  {
    step: "04",
    title: "Convert engagement into clients",
    description:
      "When prospects engage with your content, Spur AI drafts personalized DMs to start the conversation. Your LinkedIn becomes a 24/7 sales rep.",
    time: "Automated",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            From zero to clients in{" "}
            <span className="gradient-text">4 simple steps</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Most LinkedIn content tools make you do all the work. Spur AI does the heavy lifting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent z-0" />
              )}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow relative z-10">
                <div className="gradient-bg text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  {step.step}
                </div>
                <div className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {step.time}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

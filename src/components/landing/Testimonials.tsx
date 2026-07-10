const testimonials = [
  {
    name: "Marcus Chen",
    title: "Founder, Apex Digital Agency",
    avatar: "MC",
    quote:
      "I went from posting twice a month (poorly) to posting 5x a week with content that actually sounds like me. Got 3 inbound calls in the first 2 weeks. ROI was immediate.",
    result: "3 discovery calls in 2 weeks",
    linkedin_followers: "2.4K",
  },
  {
    name: "Sarah Okonkwo",
    title: "B2B Marketing Consultant",
    avatar: "SO",
    quote:
      "I used to spend 2 hours on a single LinkedIn post and still wasn't happy with it. Spur AI gets me from idea to published in under 5 minutes. The quality is honestly better than what I was writing myself.",
    result: "$28K client from LinkedIn",
    linkedin_followers: "5.1K",
  },
  {
    name: "Ryan Kowalski",
    title: "CEO, Scale Revenue Partners",
    avatar: "RK",
    quote:
      "My LinkedIn is now my #1 inbound channel. Completely replaced cold outreach for us. We book 8-10 qualified calls/month purely from content Spur AI helps me create.",
    result: "8-10 qualified calls/month",
    linkedin_followers: "3.8K",
  },
  {
    name: "Priya Sharma",
    title: "Executive Coach",
    avatar: "PS",
    quote:
      "As a coach, authenticity is everything. I was worried AI would make my content generic. It's the opposite — Spur AI captures my voice perfectly. Clients mention my posts in first calls.",
    result: "Fully booked within 45 days",
    linkedin_followers: "1.9K",
  },
  {
    name: "James Lawton",
    title: "Fractional CFO",
    avatar: "JL",
    quote:
      "I hate writing. Genuinely. Spur AI made LinkedIn feel like something I can actually do consistently. Had a $15K engagement close because a CFO at a Series B saw my post about cash flow.",
    result: "$15K engagement closed",
    linkedin_followers: "892",
  },
  {
    name: "Aisha Williams",
    title: "Founder, Clarity Brand Studio",
    avatar: "AW",
    quote:
      "The hooks library alone is worth the subscription. The difference between 200 impressions and 20,000 is the first sentence. Now I know exactly how to start every post.",
    result: "20K impressions in first month",
    linkedin_followers: "4.2K",
  },
]

const colors = ["bg-blue-500", "bg-purple-500", "bg-green-500", "bg-orange-500", "bg-red-500", "bg-teal-500"]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Real results from{" "}
            <span className="gradient-text">real B2B professionals</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Not followers. Not vanity metrics. Actual clients and revenue.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="break-inside-avoid bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full ${colors[i % colors.length]} flex items-center justify-center text-white font-bold text-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.title}</div>
                </div>
                <div className="ml-auto text-xs text-gray-400">in {t.linkedin_followers}</div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="bg-green-50 rounded-xl px-4 py-2.5">
                <div className="text-green-700 font-semibold text-xs">✓ {t.result}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

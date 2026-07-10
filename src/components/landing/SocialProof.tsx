export default function SocialProof() {
  const stats = [
    { value: "500+", label: "B2B professionals" },
    { value: "12,000+", label: "Posts generated" },
    { value: "87%", label: "Report more inbound leads" },
    { value: "< 60s", label: "From idea to publish-ready" },
  ]

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-sm font-medium uppercase tracking-wider mb-8">
          Trusted by agency owners, consultants & coaches at
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
          {["Accenture", "Deloitte", "HubSpot", "Shopify", "Mailchimp", "Stripe"].map((company) => (
            <span key={company} className="text-gray-600 font-semibold text-lg">
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

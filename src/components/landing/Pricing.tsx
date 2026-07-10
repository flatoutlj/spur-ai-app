"use client"

import { useState } from "react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    monthlyPrice: 149,
    annualPrice: 119,
    description: "For solo consultants and coaches getting started on LinkedIn.",
    features: [
      "30 AI posts per month",
      "15 content frameworks",
      "Hooks library (50 hooks)",
      "Content calendar",
      "Post history",
      "Email support",
    ],
    cta: "Start free trial",
    popular: false,
    color: "border-gray-200",
  },
  {
    name: "Growth",
    monthlyPrice: 249,
    annualPrice: 199,
    description: "For agency owners and consultants who want to dominate their niche.",
    features: [
      "Unlimited AI posts",
      "All 15+ frameworks",
      "Full hooks library (200+ hooks)",
      "Content calendar + scheduling",
      "Prospect DM generator",
      "Performance analytics",
      "LinkedIn profile optimizer",
      "Priority email + chat support",
    ],
    cta: "Start free trial",
    popular: true,
    color: "border-blue-500",
  },
  {
    name: "Agency",
    monthlyPrice: 449,
    annualPrice: 359,
    description: "For agencies managing LinkedIn for multiple team members or clients.",
    features: [
      "Everything in Growth",
      "Up to 5 team members",
      "Team content calendar",
      "Brand voice profiles per user",
      "Client-facing white-label posts",
      "Priority Slack support",
      "Quarterly strategy call",
    ],
    cta: "Start free trial",
    popular: false,
    color: "border-gray-200",
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">
            One closed deal from LinkedIn pays for Spur AI for an entire year.
          </p>
          <div className="inline-flex items-center gap-3 bg-white rounded-full p-1 border border-gray-200">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!annual ? "gradient-bg text-white" : "text-gray-500"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${annual ? "gradient-bg text-white" : "text-gray-500"}`}
            >
              Annual <span className="text-green-500 font-semibold">−20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl p-8 border-2 ${plan.color} ${plan.popular ? "relative shadow-xl" : "shadow-sm"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="gradient-bg text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>
              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-gray-900">
                    ${annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-400 text-sm mb-1">/mo</span>
                </div>
                {annual && (
                  <div className="text-green-600 text-sm font-medium mt-1">
                    Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                  </div>
                )}
              </div>
              <Link
                href={`/signup?plan=${plan.name.toLowerCase()}`}
                className={`block text-center font-semibold py-3.5 rounded-full mb-6 transition-opacity ${
                  plan.popular
                    ? "gradient-bg text-white hover:opacity-90"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {plan.cta}
              </Link>
              <p className="text-center text-xs text-gray-400 mb-6">14-day free trial · No credit card required</p>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            All plans include a 14-day free trial. Cancel anytime.
            <a href="mailto:hello@trispur.com" className="text-blue-600 hover:underline ml-1">
              Questions? Email us
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

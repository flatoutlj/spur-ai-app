"use client"

import { useState } from "react"
import Link from "next/link"

const plans = [
  {
    name: "Solo",
    slug: "solo",
    monthlyPrice: 19,
    annualPrice: 15,
    description: "For individuals who want a steady flow of LinkedIn content without the big commitment.",
    features: [
      "30 AI posts per month",
      "All post frameworks",
      "Full hooks library (200+ hooks)",
      "Headline, bio & DM generators",
      "Content calendar",
      "Email support",
    ],
    cta: "Start free trial",
    popular: false,
    color: "border-gray-200",
  },
  {
    name: "Pro",
    slug: "starter",
    monthlyPrice: 149,
    annualPrice: 119,
    description: "For consultants and coaches serious about turning LinkedIn into their #1 lead source.",
    features: [
      "Unlimited AI posts",
      "Everything in Solo",
      "LinkedIn profile optimizer",
      "Performance analytics",
      "Content calendar + scheduling",
      "Priority email + chat support",
    ],
    cta: "Start free trial",
    popular: true,
    color: "border-blue-500",
  },
  {
    name: "Agency",
    slug: "agency",
    monthlyPrice: 449,
    annualPrice: 359,
    description: "For agencies managing LinkedIn for multiple team members or clients.",
    features: [
      "Everything in Pro",
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
                href={`/signup?plan=${plan.slug}`}
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

        {/* Not ready to subscribe? One-time pack */}
        <div className="mt-8 max-w-3xl mx-auto">
          <a
            href="/pack"
            className="group flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-5 hover:border-amber-300 transition-colors"
          >
            <div className="text-3xl">📦</div>
            <div className="flex-1 text-center sm:text-left">
              <p className="font-bold text-gray-900 text-sm">Not ready to subscribe? Start with the Content Pack.</p>
              <p className="text-gray-600 text-xs mt-0.5">
                200+ hooks, 8 DM scripts, 40 headline formulas &amp; a 30-day calendar — one-time $29, instant access, 30-day money-back guarantee.
              </p>
            </div>
            <span className="flex-shrink-0 gradient-bg text-white text-sm font-semibold px-5 py-2.5 rounded-full group-hover:opacity-90 transition-opacity">
              Get it — $29 →
            </span>
          </a>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            All plans include a 14-day free trial. Cancel anytime.
            <a href="mailto:hello@trispur.com" className="text-blue-600 hover:underline ml-1">
              Questions? Email us
            </a>
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> 14-day free trial</span>
            <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> Cancel anytime</span>
            <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> 30-day money-back guarantee</span>
            <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> Founding member price locked in</span>
          </div>
        </div>
      </div>
    </section>
  )
}

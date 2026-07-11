"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import DashboardNav from "@/components/dashboard/DashboardNav"

export default function BillingPage() {
  const [profile, setProfile] = useState<{ full_name?: string } | null>(null)

  useEffect(() => {
    fetch("/api/profile")
      .then((r) => r.json())
      .then((d) => { if (d.profile) setProfile(d.profile) })
      .catch(() => {})
  }, [])

  const handleUpgrade = async (plan: string) => {
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch {
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="max-w-4xl mx-auto px-4 pt-20 pb-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Billing & Subscription</h1>
          <p className="text-gray-500 text-sm">Manage your Spur AI subscription</p>
        </div>

        {/* Current plan */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Current plan</h2>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-900">Free Trial</span>
                <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium">
                  Active
                </span>
              </div>
              <p className="text-gray-500 text-sm">14-day free trial with full feature access</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">$0</div>
              <div className="text-gray-400 text-xs">during trial</div>
            </div>
          </div>
        </div>

        {/* Upgrade options */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-1">Upgrade your plan</h2>
          <p className="text-gray-500 text-sm mb-5">Choose a plan that fits your business. Lock in founding member pricing — rates will increase as we grow.</p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                id: "starter",
                name: "Starter",
                price: 149,
                description: "For solo consultants",
                features: ["30 posts/month", "Content frameworks", "Hooks library", "Email support"],
                popular: false,
              },
              {
                id: "growth",
                name: "Growth",
                price: 249,
                description: "For agency owners",
                features: ["Unlimited posts", "DM generator", "Profile optimizer", "Priority support"],
                popular: true,
              },
              {
                id: "agency",
                name: "Agency",
                price: 449,
                description: "For teams",
                features: ["5 team members", "White-label posts", "Strategy call", "Slack support"],
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-xl border-2 p-5 ${plan.popular ? "border-blue-500" : "border-gray-200"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="gradient-bg text-white text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-3">
                  <div className="font-bold text-gray-900">{plan.name}</div>
                  <div className="text-gray-400 text-xs">{plan.description}</div>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-400 text-xs">/mo</span>
                </div>
                <ul className="space-y-1.5 mb-4">
                  {plan.features.map((f) => (
                    <li key={f} className="text-xs text-gray-600 flex items-center gap-1.5">
                      <span className="text-green-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleUpgrade(plan.id)}
                  className={`w-full text-sm font-semibold py-2.5 rounded-lg transition-opacity ${
                    plan.popular
                      ? "gradient-bg text-white hover:opacity-90"
                      : "bg-gray-900 text-white hover:bg-gray-700"
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            14-day free trial included · Cancel anytime · 30-day money-back guarantee
          </p>
        </div>

        {/* Help */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="font-semibold text-gray-900 mb-3">Need help?</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:hello@trispur.com"
              className="flex-1 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-3 rounded-xl text-center hover:bg-gray-50 transition-colors"
            >
              Email support
            </a>
            <Link
              href="/dashboard"
              className="flex-1 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-3 rounded-xl text-center hover:bg-gray-50 transition-colors"
            >
              Back to dashboard
            </Link>
            <Link
              href="/pricing"
              className="flex-1 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-3 rounded-xl text-center hover:bg-gray-50 transition-colors"
            >
              Compare all plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

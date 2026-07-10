"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

type Step = 1 | 2 | 3 | 4

interface ProfileData {
  full_name: string
  job_title: string
  business_name: string
  industry: string
  ideal_client: string
  content_tone: string
}

const INDUSTRIES = [
  "Consulting",
  "Coaching",
  "Agency",
  "SaaS",
  "Real Estate",
  "Finance",
  "Legal",
  "Other",
]

const CONTENT_TONES = [
  {
    value: "professional_authoritative",
    label: "Professional & authoritative",
    description: "Position yourself as the expert. Direct, confident, data-driven.",
  },
  {
    value: "conversational_friendly",
    label: "Conversational & friendly",
    description: "Approachable and warm. Like talking to a trusted colleague.",
  },
  {
    value: "thought_provoking_bold",
    label: "Thought-provoking & bold",
    description: "Challenge assumptions. Contrarian takes that spark discussion.",
  },
  {
    value: "storytelling_personal",
    label: "Storytelling & personal",
    description: "Authentic and vulnerable. Stories that build deep trust.",
  },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState<Step>(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [data, setData] = useState<ProfileData>({
    full_name: "",
    job_title: "",
    business_name: "",
    industry: "",
    ideal_client: "",
    content_tone: "",
  })

  const updateField = (field: keyof ProfileData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
    setError("")
  }

  const canProceed = () => {
    if (step === 1) return data.full_name.trim() && data.job_title.trim()
    if (step === 2) return data.business_name.trim() && data.industry
    if (step === 3) return data.ideal_client.trim()
    if (step === 4) return data.content_tone
    return false
  }

  const handleNext = () => {
    if (!canProceed()) {
      setError("Please fill in all required fields before continuing.")
      return
    }
    if (step < 4) {
      setStep((prev) => (prev + 1) as Step)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as Step)
      setError("")
    }
  }

  const handleSubmit = async () => {
    if (!canProceed()) {
      setError("Please select a content tone before continuing.")
      return
    }
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok || json.error) {
        setError(json.error || "Something went wrong. Please try again.")
        setLoading(false)
        return
      }
      router.push("/dashboard")
    } catch {
      setError("Something went wrong. Please try again.")
      setLoading(false)
    }
  }

  const progressPercent = ((step - 1) / 3) * 100

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-10 justify-center">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-xl text-white">Spur AI</span>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Step {step} of 4</span>
            <span className="text-sm text-gray-400">{Math.round(progressPercent)}% complete</span>
          </div>
          <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full gradient-bg rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-between mt-3">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                  s < step
                    ? "gradient-bg text-white"
                    : s === step
                    ? "border-2 border-blue-500 text-blue-400 bg-gray-900"
                    : "border border-gray-700 text-gray-600 bg-gray-900"
                }`}
              >
                {s < step ? "✓" : s}
              </div>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-white mb-1">
                  What&apos;s your name and job title?
                </h1>
                <p className="text-gray-400 text-sm">
                  We&apos;ll personalize your content to match your professional identity.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={data.full_name}
                    onChange={(e) => updateField("full_name", e.target.value)}
                    placeholder="e.g. Sarah Johnson"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Job title <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={data.job_title}
                    onChange={(e) => updateField("job_title", e.target.value)}
                    placeholder="e.g. Founder & CEO, Sales Consultant, Marketing Strategist"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-white mb-1">
                  Tell us about your business
                </h1>
                <p className="text-gray-400 text-sm">
                  Your content will speak directly to your industry and niche.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Business name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={data.business_name}
                    onChange={(e) => updateField("business_name", e.target.value)}
                    placeholder="e.g. Apex Growth Partners"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Industry <span className="text-blue-400">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {INDUSTRIES.map((ind) => (
                      <button
                        key={ind}
                        type="button"
                        onClick={() => updateField("industry", ind)}
                        className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
                          data.industry === ind
                            ? "border-blue-500 bg-blue-500/10 text-blue-300"
                            : "border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200 bg-gray-800"
                        }`}
                      >
                        {ind}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-white mb-1">
                  Who&apos;s your ideal client?
                </h1>
                <p className="text-gray-400 text-sm">
                  Be specific. The more detailed you are, the better your content will convert.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Describe your ideal client <span className="text-blue-400">*</span>
                </label>
                <textarea
                  value={data.ideal_client}
                  onChange={(e) => updateField("ideal_client", e.target.value)}
                  placeholder="e.g. B2B SaaS founders with 10-50 employees who are trying to scale from $1M to $5M ARR and struggle with inconsistent lead generation..."
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Include their role, company size, main pain points, and goals.
                </p>
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-white mb-1">
                  What&apos;s your content tone?
                </h1>
                <p className="text-gray-400 text-sm">
                  Choose the voice that feels most authentic to you.
                </p>
              </div>
              <div className="space-y-3">
                {CONTENT_TONES.map((tone) => (
                  <button
                    key={tone.value}
                    type="button"
                    onClick={() => updateField("content_tone", tone.value)}
                    className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                      data.content_tone === tone.value
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-gray-700 bg-gray-800 hover:border-gray-500"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                          data.content_tone === tone.value
                            ? "border-blue-500 bg-blue-500"
                            : "border-gray-600"
                        }`}
                      >
                        {data.content_tone === tone.value && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                      <div>
                        <div
                          className={`font-semibold text-sm ${
                            data.content_tone === tone.value ? "text-blue-300" : "text-gray-200"
                          }`}
                        >
                          {tone.label}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">{tone.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-4 bg-red-900/30 border border-red-700 text-red-300 text-sm px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-3 mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 px-6 py-3 border border-gray-700 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 hover:text-white transition-all text-sm"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 gradient-bg text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity text-sm"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 gradient-bg text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 text-sm"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Start Creating"
                )}
              </button>
            )}
          </div>
        </div>

        {/* Skip */}
        <p className="text-center text-xs text-gray-600 mt-4">
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="hover:text-gray-400 transition-colors"
          >
            Skip for now
          </button>
        </p>
      </div>
    </div>
  )
}

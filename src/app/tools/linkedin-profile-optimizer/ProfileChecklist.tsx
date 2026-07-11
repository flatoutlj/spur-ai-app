"use client"

import { useState } from "react"

const checklistItems = [
  { id: 1, label: "Professional headshot (face clearly visible, good lighting)", points: 5 },
  { id: 2, label: "Background/banner image that reinforces your brand or niche", points: 5 },
  { id: 3, label: "Headline uses the formula: Who you help + What result you create", points: 8 },
  { id: 4, label: "Headline includes your primary keyword (e.g. \"B2B Marketing Consultant\")", points: 5 },
  { id: 5, label: "About section opens with a client-focused value proposition (not \"I am...\")", points: 7 },
  { id: 6, label: "About section includes 2–3 specific client outcomes with numbers", points: 6 },
  { id: 7, label: "About section ends with a clear CTA (DM, link, or meeting invite)", points: 5 },
  { id: 8, label: "Featured section is active and shows your best content or case study", points: 6 },
  { id: 9, label: "Experience descriptions focus on outcomes, not job duties", points: 5 },
  { id: 10, label: "At least one experience entry includes a client result with numbers", points: 4 },
  { id: 11, label: "Skills section lists at least 10 relevant, searchable skills", points: 4 },
  { id: 12, label: "Top 3 skills are endorsed by connections", points: 3 },
  { id: 13, label: "You have at least 3 recommendations from clients or colleagues", points: 6 },
  { id: 14, label: "At least one recommendation specifically mentions a business result", points: 4 },
  { id: 15, label: "Profile URL is customized (not default numbers)", points: 3 },
  { id: 16, label: "You post content at least 3 times per week (activity score)", points: 8 },
  { id: 17, label: "You have at least 500 connections in your target market", points: 4 },
  { id: 18, label: "Education section is complete", points: 2 },
  { id: 19, label: "Contact info includes your website or calendar link", points: 4 },
  { id: 20, label: "Your Social Selling Index (SSI) is above 70", points: 6 },
]

function getScoreLabel(score: number): { label: string; color: string; bg: string; description: string } {
  if (score >= 85) return {
    label: "Excellent",
    color: "text-green-700",
    bg: "bg-green-50 border-green-200",
    description: "Your profile is a high-converting sales page. You are likely seeing consistent inbound from LinkedIn.",
  }
  if (score >= 70) return {
    label: "Strong",
    color: "text-blue-700",
    bg: "bg-blue-50 border-blue-200",
    description: "Your profile is solid. A few targeted improvements will unlock meaningfully more inbound leads.",
  }
  if (score >= 50) return {
    label: "Average",
    color: "text-yellow-700",
    bg: "bg-yellow-50 border-yellow-200",
    description: "Your profile has the basics but is missing key elements that convert visitors into inbound leads.",
  }
  return {
    label: "Needs Work",
    color: "text-red-700",
    bg: "bg-red-50 border-red-200",
    description: "Your profile is likely losing you warm prospects every day. The improvements below will have an immediate impact.",
  }
}

export default function ProfileChecklist() {
  const [checked, setChecked] = useState<Set<number>>(new Set())

  const toggle = (id: number) => {
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const totalPoints = checklistItems.reduce((sum, item) => sum + item.points, 0)
  const earnedPoints = checklistItems
    .filter((item) => checked.has(item.id))
    .reduce((sum, item) => sum + item.points, 0)
  const score = Math.round((earnedPoints / totalPoints) * 100)
  const result = getScoreLabel(score)
  const completedCount = checked.size

  return (
    <div>
      {/* Score Display */}
      <div className={`rounded-2xl border-2 p-6 mb-8 ${result.bg}`}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className={`text-4xl font-bold ${result.color} mb-1`}>{score}/100</div>
            <div className={`font-semibold ${result.color}`}>{result.label}</div>
          </div>
          <div className="text-right text-sm text-gray-500">
            <div className="font-medium text-gray-700">{completedCount} of {checklistItems.length}</div>
            <div>items complete</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-white/60 rounded-full h-3 mb-3">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 transition-all duration-300"
            style={{ width: `${score}%` }}
          />
        </div>

        <p className={`text-sm ${result.color}`}>{result.description}</p>
      </div>

      {/* Checklist */}
      <div className="space-y-3">
        {checklistItems.map((item) => {
          const isChecked = checked.has(item.id)
          return (
            <label
              key={item.id}
              className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                isChecked
                  ? "bg-green-50 border-green-200"
                  : "bg-white border-gray-100 hover:border-gray-200"
              }`}
            >
              <div className="relative mt-0.5 flex-shrink-0">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(item.id)}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-all ${
                    isChecked
                      ? "bg-green-500 border-green-500"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {isChecked && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 10">
                      <path
                        d="M1.5 5L4.5 8L10.5 2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <span className={`text-sm leading-relaxed ${isChecked ? "text-gray-500 line-through" : "text-gray-700"}`}>
                  {item.label}
                </span>
              </div>
              <span className={`text-xs font-semibold flex-shrink-0 mt-0.5 ${isChecked ? "text-green-600" : "text-gray-400"}`}>
                +{item.points}
              </span>
            </label>
          )
        })}
      </div>

      {score < 100 && (
        <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100 rounded-xl">
          <p className="text-sm text-gray-700">
            <strong>Quick wins to boost your score:</strong>{" "}
            {score < 50
              ? "Start with your headline (8 points) and about section (7 points) — these two alone can add 15 points and dramatically improve your inbound conversion rate."
              : score < 70
              ? "Focus on adding client outcomes with numbers to your experience section and getting at least 3 recommendations — these signal credibility to every prospect who visits your profile."
              : "Your profile is strong. The remaining items (recommendations, SSI score, posting frequency) are the difference between a good profile and a profile that generates 5+ inbound leads per month."}
          </p>
        </div>
      )}
    </div>
  )
}

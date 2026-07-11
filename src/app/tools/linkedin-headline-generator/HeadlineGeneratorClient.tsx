"use client"

import { useState } from "react"

const formulas = [
  {
    id: 1,
    label: "Outcome-first",
    template: "[Role] helping [ICP] achieve [Result]",
    generate: (role: string, icp: string, result: string, _company: string, _superpower: string) =>
      `${role} helping ${icp} achieve ${result}`,
  },
  {
    id: 2,
    label: "Result + credibility",
    template: "[Result] for [ICP] | [Role] at [Company]",
    generate: (role: string, icp: string, result: string, company: string, _superpower: string) =>
      `${result} for ${icp} | ${role}${company ? ` at ${company}` : ""}`,
  },
  {
    id: 3,
    label: "Method-driven",
    template: "I help [ICP] [Result] | [Framework/Superpower]",
    generate: (
      _role: string,
      icp: string,
      result: string,
      _company: string,
      superpower: string
    ) => `I help ${icp} ${result} | ${superpower}`,
  },
  {
    id: 4,
    label: "Transformation",
    template: "[Transformation] for [ICP] | [Credibility signal]",
    generate: (role: string, icp: string, result: string, company: string, superpower: string) =>
      `From struggle to ${result} for ${icp} | ${superpower || role}${company ? ` · ${company}` : ""}`,
  },
  {
    id: 5,
    label: "Social proof",
    template: "Helped [ICP] get [Result] | [Role]",
    generate: (role: string, icp: string, result: string, _company: string, _superpower: string) =>
      `Helped ${icp} get ${result} | ${role}`,
  },
]

export default function HeadlineGeneratorClient() {
  const [role, setRole] = useState("")
  const [icp, setIcp] = useState("")
  const [result, setResult] = useState("")
  const [company, setCompany] = useState("")
  const [superpower, setSuperpower] = useState("")
  const [generated, setGenerated] = useState(false)
  const [copied, setCopied] = useState<number | null>(null)

  const allFilled = role.trim() && icp.trim() && result.trim()

  function handleGenerate() {
    if (!allFilled) return
    setGenerated(true)
  }

  async function handleCopy(text: string, id: number) {
    await navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const headlines = formulas.map((f) => ({
    ...f,
    output: f.generate(
      role || "Your Role",
      icp || "Your ICP",
      result || "the Result",
      company,
      superpower || "Your Method"
    ),
  }))

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-violet-50 border-b border-gray-100 px-6 py-5">
        <h2 className="font-bold text-gray-900 text-lg mb-1">Generate your LinkedIn headline</h2>
        <p className="text-gray-500 text-sm">
          Fill in 3 fields to generate 5 headline variations in seconds.
        </p>
      </div>

      <div className="p-6 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Your role / title <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. LinkedIn Strategist, B2B Consultant, Agency Owner"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Who you help (ICP) <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={icp}
              onChange={(e) => setIcp(e.target.value)}
              placeholder="e.g. SaaS founders, B2B consultants, marketing agencies"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              The result you deliver <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={result}
              onChange={(e) => setResult(e.target.value)}
              placeholder="e.g. 3x more inbound leads, consistent revenue growth"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Company (optional)
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. Spur AI, Acme Growth"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Your method / superpower (optional)
            </label>
            <input
              type="text"
              value={superpower}
              onChange={(e) => setSuperpower(e.target.value)}
              placeholder="e.g. The LinkedIn Sprint Framework, AI-powered content systems"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={!allFilled}
          className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Generate 5 headlines →
        </button>
      </div>

      {generated && (
        <div className="border-t border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Your 5 headline variations:</h3>
          <div className="space-y-3">
            {headlines.map((h) => (
              <div
                key={h.id}
                className="flex items-start justify-between gap-4 bg-gray-50 rounded-xl px-5 py-4 border border-gray-100"
              >
                <div className="flex-1">
                  <div className="text-xs font-semibold text-blue-600 mb-1 uppercase tracking-wide">
                    Formula {h.id}: {h.label}
                  </div>
                  <p className="text-gray-900 text-sm font-medium leading-snug">{h.output}</p>
                  <p className="text-xs text-gray-400 mt-1">{h.template}</p>
                </div>
                <button
                  onClick={() => handleCopy(h.output, h.id)}
                  className="flex-shrink-0 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors text-gray-600"
                >
                  {copied === h.id ? "Copied!" : "Copy"}
                </button>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Tip: LinkedIn headlines are capped at 220 characters. Longer variations may need
            trimming.
          </p>
        </div>
      )}
    </div>
  )
}

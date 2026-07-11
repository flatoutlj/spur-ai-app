"use client"

import { useState } from "react"

const TONES = [
  { id: "professional", label: "Professional" },
  { id: "conversational", label: "Conversational" },
  { id: "bold", label: "Bold & Direct" },
  { id: "warm", label: "Warm & Personal" },
  { id: "authoritative", label: "Authoritative" },
]

const BIO_TEMPLATES = [
  {
    id: "result-story",
    label: "Result → Story",
    build: (r: BioInputs) =>
      `${r.result ? `I help ${r.icp} ${r.result}.` : `I'm a ${r.role} who helps ${r.icp}.`}

${r.background ? `${r.background}\n\n` : ""}Here's what I know after ${r.years || "years"} in this space: ${r.insight || `most ${r.icp} struggle with the same problems — and they're almost always solvable.`}

My approach is different. ${r.method || `I combine deep expertise with real-world execution to deliver results that actually move the needle.`}

${r.social_proof ? `${r.social_proof}\n\n` : ""}${r.cta ? `→ ${r.cta}` : `→ Shoot me a message if you want to connect.`}`,
  },
  {
    id: "authority-first",
    label: "Authority First",
    build: (r: BioInputs) =>
      `${r.role} | ${r.icp ? `Helping ${r.icp} ${r.result || "grow"}` : "B2B Growth Strategist"}

${r.social_proof || `I've worked with 50+ companies to drive measurable results.`}

${r.method ? `My method: ${r.method}\n\n` : ""}${r.background || ""}${r.background ? "\n\n" : ""}What I focus on:
• ${r.pillar1 || "Strategic positioning that differentiates you in a crowded market"}
• ${r.pillar2 || "Content that attracts ideal clients without cold outreach"}
• ${r.pillar3 || "Systems that create leverage, not more work"}

${r.cta ? `→ ${r.cta}` : `→ Let's connect if you're ready to grow.`}`,
  },
  {
    id: "conversational",
    label: "Conversational Hook",
    build: (r: BioInputs) =>
      `${r.hook || `If you're a ${r.icp} who wants ${r.result || "better results"} — you're in the right place.`}

I'm ${r.name || "a"} ${r.role}${r.business_name ? ` at ${r.business_name}` : ""}.

${r.background || `My background is in ${r.icp ? `working with ${r.icp}` : "building businesses from the ground up"}.`}

${r.years ? `After ${r.years} years doing this, ` : ""}I've learned that ${r.insight || "most people overcomplicate what works. Simple, consistent action beats complex strategy every time."}

${r.social_proof ? `${r.social_proof}\n\n` : ""}${r.cta ? `→ ${r.cta}` : `→ DM me anytime — I actually reply.`}`,
  },
  {
    id: "problem-solution",
    label: "Problem → Solution",
    build: (r: BioInputs) =>
      `Most ${r.icp || "professionals"} ${r.problem || "struggle to stand out in a crowded market"}.

They're ${r.pain || "working hard but not seeing the results they deserve"}.

That's where I come in.

I'm ${r.name || "a"} ${r.role}${r.business_name ? ` at ${r.business_name}` : ""}. ${r.method || "I help clients cut through the noise with strategies that actually work."}

${r.social_proof || ""}${r.social_proof ? "\n\n" : ""}${r.result ? `The result? ${r.result}.\n\n` : ""}${r.cta ? `→ ${r.cta}` : `→ Ready to solve this? Let's talk.`}`,
  },
  {
    id: "values-driven",
    label: "Values-Driven",
    build: (r: BioInputs) =>
      `I believe ${r.belief || `${r.icp || "B2B professionals"} deserve a better way to grow their business`}.

${r.background || `I've spent ${r.years || "years"} figuring out what actually works — and what's just noise.`}

As a ${r.role}${r.business_name ? ` at ${r.business_name}` : ""}, I help ${r.icp || "B2B professionals"} ${r.result || "achieve their goals"}.

My values:
• ${r.value1 || "Honest, no-BS advice"}
• ${r.value2 || "Results over activity"}
• ${r.value3 || "Long-term relationships over quick wins"}

${r.cta ? `→ ${r.cta}` : `→ Let's build something great together.`}`,
  },
]

interface BioInputs {
  name: string
  role: string
  business_name: string
  icp: string
  result: string
  background: string
  years: string
  insight: string
  method: string
  social_proof: string
  cta: string
  hook: string
  problem: string
  pain: string
  belief: string
  pillar1: string
  pillar2: string
  pillar3: string
  value1: string
  value2: string
  value3: string
}

const EMPTY_INPUTS: BioInputs = {
  name: "", role: "", business_name: "", icp: "", result: "",
  background: "", years: "", insight: "", method: "", social_proof: "",
  cta: "", hook: "", problem: "", pain: "", belief: "",
  pillar1: "", pillar2: "", pillar3: "", value1: "", value2: "", value3: "",
}

export default function LinkedInBioGeneratorClient() {
  const [inputs, setInputs] = useState<BioInputs>(EMPTY_INPUTS)
  const [generated, setGenerated] = useState<string[]>([])
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null)
  const [selectedTemplate, setSelectedTemplate] = useState<string>("all")

  const set = (key: keyof BioInputs, val: string) =>
    setInputs((prev) => ({ ...prev, [key]: val }))

  const generate = () => {
    if (!inputs.role.trim() && !inputs.icp.trim()) return
    const templates =
      selectedTemplate === "all"
        ? BIO_TEMPLATES
        : BIO_TEMPLATES.filter((t) => t.id === selectedTemplate)
    setGenerated(templates.map((t) => t.build(inputs).trim()))
  }

  const copy = async (text: string, idx: number) => {
    await navigator.clipboard.writeText(text)
    setCopiedIdx(idx)
    setTimeout(() => setCopiedIdx(null), 2000)
  }

  const charCount = (text: string) => text.length

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h2 className="font-semibold text-gray-900 text-lg mb-5">Your details</h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">Your name</label>
            <input
              type="text"
              placeholder="e.g. Sarah Chen"
              value={inputs.name}
              onChange={(e) => set("name", e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">Your role / title *</label>
            <input
              type="text"
              placeholder="e.g. Revenue Operations Consultant"
              value={inputs.role}
              onChange={(e) => set("role", e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">Business / company name</label>
            <input
              type="text"
              placeholder="e.g. Apex Growth Partners"
              value={inputs.business_name}
              onChange={(e) => set("business_name", e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">Years of experience</label>
            <input
              type="text"
              placeholder="e.g. 8"
              value={inputs.years}
              onChange={(e) => set("years", e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Who you help (ideal client) *</label>
          <input
            type="text"
            placeholder="e.g. VC-backed SaaS founders, B2B agency owners, executive coaches"
            value={inputs.icp}
            onChange={(e) => set("icp", e.target.value)}
            className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-xs font-medium text-gray-600 mb-1.5">The result you deliver</label>
          <input
            type="text"
            placeholder="e.g. 3x pipeline in 90 days, add $100K/year without more clients"
            value={inputs.result}
            onChange={(e) => set("result", e.target.value)}
            className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Social proof (optional)</label>
          <input
            type="text"
            placeholder="e.g. Helped 80+ agencies double their retainer revenue. Featured in Forbes."
            value={inputs.social_proof}
            onChange={(e) => set("social_proof", e.target.value)}
            className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Brief background (1–2 sentences)</label>
          <textarea
            placeholder="e.g. I spent 10 years in corporate finance before launching my own advisory firm."
            value={inputs.background}
            onChange={(e) => set("background", e.target.value)}
            rows={2}
            className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-600 mb-1.5">Your call-to-action</label>
          <input
            type="text"
            placeholder="e.g. DM me 'GROWTH' to get my free LinkedIn audit. Or: Book a free 30-min call: calendly.com/you"
            value={inputs.cta}
            onChange={(e) => set("cta", e.target.value)}
            className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-600 mb-2">Choose template style</label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTemplate("all")}
              className={`text-xs font-medium px-3 py-2 rounded-lg border transition-all ${
                selectedTemplate === "all"
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              All 5 styles
            </button>
            {BIO_TEMPLATES.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTemplate(t.id)}
                className={`text-xs font-medium px-3 py-2 rounded-lg border transition-all ${
                  selectedTemplate === t.id
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={generate}
          disabled={!inputs.role.trim() && !inputs.icp.trim()}
          className="w-full gradient-bg text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-40"
        >
          Generate my LinkedIn bio
        </button>
      </div>

      {generated.length > 0 && (
        <div className="space-y-5">
          <h2 className="font-semibold text-gray-900 text-lg">Your LinkedIn About sections</h2>
          {generated.map((bio, idx) => {
            const templateLabel =
              selectedTemplate === "all"
                ? BIO_TEMPLATES[idx]?.label
                : BIO_TEMPLATES.find((t) => t.id === selectedTemplate)?.label
            const chars = charCount(bio)
            return (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Style {idx + 1}:
                    </span>
                    <span className="text-xs font-medium text-blue-600">{templateLabel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs ${chars > 2600 ? "text-red-500 font-semibold" : "text-gray-400"}`}>
                      {chars} / 2,600 chars
                    </span>
                    <button
                      onClick={() => copy(bio, idx)}
                      className="text-xs gradient-bg text-white font-medium px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      {copiedIdx === idx ? "✓ Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
                <pre className="text-sm text-gray-800 whitespace-pre-wrap font-sans leading-relaxed">
                  {bio}
                </pre>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

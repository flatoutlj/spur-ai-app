"use client"

import { useState } from "react"

const HOOKS_BY_CATEGORY = {
  "Confession / Vulnerability": [
    "I wasted $40K before I understood this one thing.",
    "I almost quit my business 6 months ago. Here's what stopped me.",
    "Hot take: I was completely wrong about [X] for years.",
    "The email I'm embarrassed to have sent: [story]",
    "I lost my biggest client last quarter. Here's what I learned.",
  ],
  "Number / Data Hook": [
    "I analyzed 500 LinkedIn posts. These 3 patterns appear in every viral one.",
    "We 3x'd our revenue in 90 days. Here's the exact playbook.",
    "After 200 sales calls, I noticed one pattern that separates buyers from browsers.",
    "87% of agency owners make this pricing mistake. Are you one of them?",
    "I've closed $2.4M in deals from LinkedIn. Here's what I post:",
  ],
  "Contrarian / Hot Take": [
    "Cold outreach is dead. Here's what's replacing it.",
    "Your LinkedIn content isn't bad. Your hook is.",
    "Posting every day is killing your LinkedIn growth. Do this instead.",
    "The agency that fires clients grows faster. Here's why.",
    "Stop trying to go viral. Do this instead.",
  ],
  "Question / Curiosity": [
    "What's the one thing you wish you knew before starting your agency?",
    "How many of these LinkedIn mistakes are you making right now?",
    "What separates the consultants charging $5K/mo from those charging $500?",
    "If you could redo your first year in business, what's the one thing you'd change?",
    "What's the question you ask every potential client that reveals if they're serious?",
  ],
  "Story Setup": [
    "Two years ago, I was charging $500 for projects I now charge $15,000 for.",
    "A client came to me with a $2M problem and a $500 budget. This is what I did.",
    "The day I almost killed my business by saying yes to the wrong client.",
    "My first paying client found me on LinkedIn. Here's exactly what happened.",
    "I turned down a $100K contract last month. Not because I couldn't do the work.",
  ],
  "Authority / Insight": [
    "Here's what 10 years of B2B sales taught me about LinkedIn:",
    "The #1 thing that separates consultants who get referrals from those who don't:",
    "After reviewing 100+ agency proposals, here's what the winners all do differently:",
    "The LinkedIn algorithm rewards this one thing above all others. Most people ignore it.",
    "I've hired 50+ freelancers. The ones who charge 5x more do this differently:",
  ],
}

export default function HooksLibrary() {
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(HOOKS_BY_CATEGORY)[0])
  const [copiedHook, setCopiedHook] = useState<string | null>(null)
  const [search, setSearch] = useState("")

  const copyHook = async (hook: string) => {
    await navigator.clipboard.writeText(hook)
    setCopiedHook(hook)
    setTimeout(() => setCopiedHook(null), 2000)
  }

  const allHooks = Object.values(HOOKS_BY_CATEGORY).flat()
  const filteredHooks = search
    ? allHooks.filter((h) => h.toLowerCase().includes(search.toLowerCase()))
    : HOOKS_BY_CATEGORY[selectedCategory as keyof typeof HOOKS_BY_CATEGORY]

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-semibold text-gray-900 text-lg">Hooks Library</h2>
            <p className="text-gray-500 text-sm">The first line of your post determines 90% of its reach. Use these proven openers.</p>
          </div>
          <span className="text-xs bg-orange-50 text-orange-700 font-semibold px-3 py-1.5 rounded-full">
            🔥 {allHooks.length}+ hooks
          </span>
        </div>

        <div className="mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search hooks..."
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        {!search && (
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.keys(HOOKS_BY_CATEGORY).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-xs px-3 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? "gradient-bg text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="space-y-3">
          {filteredHooks.map((hook) => (
            <div
              key={hook}
              className="flex items-start justify-between gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <p className="text-gray-800 text-sm leading-relaxed flex-1">{hook}</p>
              <button
                onClick={() => copyHook(hook)}
                className="text-xs text-gray-400 group-hover:text-blue-600 font-medium whitespace-nowrap transition-colors"
              >
                {copiedHook === hook ? "✓ Copied" : "Copy"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

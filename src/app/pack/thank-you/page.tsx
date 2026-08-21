import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Your LinkedIn Founder Content Pack",
  description: "Thank you for your purchase. Here's your complete LinkedIn Founder Content Pack.",
  robots: { index: false, follow: false },
}

const HOOK_CATEGORIES = [
  {
    name: "Contrarian / Hot Takes",
    hooks: [
      "Unpopular opinion: [common advice] is quietly killing your [result].",
      "Everyone tells you to [do X]. They're wrong. Here's what actually works.",
      "The best [role]s I know all break this 'rule': [rule].",
      "Hot take: you don't have a [lead] problem. You have a [positioning] problem.",
      "Stop [common activity]. It's the most overrated thing in [industry].",
      "I used to believe [belief]. Then I [experience]. Now I think the opposite.",
    ],
  },
  {
    name: "Personal Story",
    hooks: [
      "I lost a $[X] client last year. It was the best thing that happened to my business.",
      "3 years ago I was [low point]. Today I [current state]. Here's what changed.",
      "The worst advice I ever took cost me [$X / months]. Here's what I learned.",
      "I almost quit [thing] in [month]. One conversation changed everything.",
      "My first [client/hire/launch] was a disaster. Here's the mistake I'll never repeat.",
      "Someone told me '[quote]' and it rewired how I run my business.",
    ],
  },
  {
    name: "Results / Case Study",
    hooks: [
      "A client came to me doing $[X]. 90 days later: $[Y]. Here's the exact playbook.",
      "We took [metric] from [before] to [after] without [expensive thing].",
      "$0 in ad spend. [X] qualified leads. Here's how.",
      "How I helped a [ICP] go from [pain] to [win] in [timeframe].",
      "The 3-step system that got my client [specific result].",
    ],
  },
  {
    name: "How-To / Tactical",
    hooks: [
      "How to [get result] in [timeframe] — even if you [common obstacle]:",
      "The exact [X]-step process I use to [outcome]:",
      "Want [result]? Do these [N] things this week:",
      "Steal my framework for [common problem]:",
      "Here's how to [outcome] without [thing everyone hates]:",
    ],
  },
  {
    name: "List / Listicle",
    hooks: [
      "[N] things I wish I knew before I [milestone]:",
      "[N] lessons from [X] years of [work], in one post:",
      "[N] red flags that a [prospect/hire/deal] will go wrong:",
      "[N] tools/habits that quietly 10x'd my [output]:",
      "[N] mistakes I see [ICP] make every single week:",
    ],
  },
  {
    name: "Question / Engagement",
    hooks: [
      "What's the one piece of advice you'd give your younger self about [topic]?",
      "Am I the only one who thinks [contrarian view]?",
      "Quick question for [ICP]: what's stopping you from [goal]?",
      "If you could only keep ONE [tool/habit/strategy], what would it be?",
    ],
  },
  {
    name: "Prediction / Insight",
    hooks: [
      "In 12 months, [prediction about industry]. Here's why.",
      "The [role]s who win in 2026 will all do this one thing:",
      "[Trend] is about to change [industry] forever. Most people aren't ready.",
      "Here's what nobody's telling you about [current topic]:",
    ],
  },
  {
    name: "Mistake / Confession",
    hooks: [
      "I made a $[X] mistake so you don't have to. Here it is:",
      "For years I did [thing] wrong. Here's what finally clicked.",
      "The embarrassing reason my [thing] wasn't working:",
      "I was doing [common practice]. It was sabotaging my [result].",
    ],
  },
]

const DM_SCRIPTS = [
  {
    name: "Content-triggered (after they post)",
    text: "Hi [Name] — your post on [topic] really landed, especially the part about [detail]. I work with [ICP] on exactly this. No pitch — just wanted to connect with someone thinking clearly about it.",
  },
  {
    name: "Warm intro (mutual connection)",
    text: "Hi [Name] — [mutual] mentioned I should connect with you. We're both deep in [shared space] and I've heard great things about your work at [company]. Would love to be in your network.",
  },
  {
    name: "Value-led cold outreach",
    text: "Hi [Name] — I help [job title]s at [company type] [achieve result]. I put together a quick [resource] on [problem] that might be useful for you. Happy to send it over, no strings. Either way, glad to connect.",
  },
  {
    name: "Podcast / content pitch",
    text: "Hi [Name] — I just went through your [episode/article] on [topic]. The point about [specific insight] genuinely changed how I think about [thing]. I'd love to follow your work — and if you're ever looking for a guest on [their format], I'd be glad to contribute on [your expertise].",
  },
  {
    name: "Follow-up (no response yet)",
    text: "Hi [Name] — floating this back up in case it got buried. No worries if now's not the time. The short version: [one-line value]. Want me to send more detail, or should I check back in a few months?",
  },
  {
    name: "Event follow-up",
    text: "Hi [Name] — great [meeting you / catching your talk] at [event]. Your take on [specific thing] stuck with me. Let's stay connected — I'd love to trade notes on [shared topic] sometime.",
  },
  {
    name: "Referral request",
    text: "Hi [Name] — quick ask. I'm looking to connect with [specific type of person] who's dealing with [problem I solve]. You know a lot of great people — anyone come to mind? Totally fine if not.",
  },
  {
    name: "Re-engagement (old lead)",
    text: "Hi [Name] — we spoke a while back about [topic] and the timing wasn't right. A lot has changed since — we now [new capability/result]. Worth a fresh 15 minutes, or should I close the loop for now?",
  },
]

const HEADLINE_FORMULAS = [
  "I help [ICP] [achieve result] | [proof point] | [CTA]",
  "[Role] → [what you do now] for [ICP] | [credibility]",
  "Helping [ICP] go from [pain] to [outcome] | [number] clients served",
  "[Outcome] for [ICP] without [thing they hate] | [proof]",
  "Ex-[impressive company] | Now helping [ICP] [result] | DM me '[keyword]'",
  "I turn [input] into [output] for [ICP] | [result stat]",
  "[ICP]'s unfair advantage for [goal] | [proof] | Book below ↓",
  "Fractional [role] for [company stage] | [past result] | [ex-companies]",
  "I help [ICP] [result] in [timeframe] — or you don't pay",
  "Building [product] for [ICP] | [traction] | Sharing the journey",
]

const CALENDAR = [
  ["Mon", "Personal story — a lesson from a recent win or loss"],
  ["Tue", "Contrarian take on a common belief in your niche"],
  ["Wed", "Tactical how-to your ICP can implement today"],
  ["Thu", "Client result / mini case study (anonymized)"],
  ["Fri", "Engagement question or a lighter personal post"],
  ["Sat", "Curate: react to an industry article or trend"],
  ["Sun", "Rest, or a reflective/behind-the-scenes post"],
]

export default function PackThankYouPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            <span className="font-bold text-gray-900 text-sm">Spur AI</span>
          </Link>
          <Link href="/free-tools" className="text-gray-500 text-sm hover:text-gray-800">Free tools</Link>
        </div>
      </nav>

      <main className="pt-14">
        <div className="max-w-3xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1 text-xs text-green-700 font-medium mb-5">
              ✓ Payment complete — thank you!
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Your LinkedIn Founder Content Pack</h1>
            <p className="text-gray-500 leading-relaxed">
              Everything's below — bookmark this page for permanent access. Copy anything you need. Fill in the brackets with your specifics and publish.
            </p>
          </div>

          {/* Hooks */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">🎣 The Hook Vault</h2>
            <p className="text-gray-500 text-sm mb-6">Your first line decides everything. Swap the brackets for your specifics.</p>
            <div className="space-y-6">
              {HOOK_CATEGORIES.map((cat) => (
                <div key={cat.name} className="border border-gray-100 rounded-2xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">{cat.name}</h3>
                  <ul className="space-y-2">
                    {cat.hooks.map((h, i) => (
                      <li key={i} className="text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2 leading-relaxed">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* DM Scripts */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">💬 8 DM Scripts That Get Replies</h2>
            <p className="text-gray-500 text-sm mb-6">Specific, about them, no hard pitch. That's what earns the reply.</p>
            <div className="space-y-4">
              {DM_SCRIPTS.map((s, i) => (
                <div key={i} className="border-l-4 border-blue-500 pl-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{i + 1}. {s.name}</p>
                  <p className="text-sm text-gray-800 bg-gray-50 rounded-lg p-3 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Headline Formulas */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">📌 Headline Formulas</h2>
            <p className="text-gray-500 text-sm mb-6">Your headline is the most-read line on your profile. Pick one, fill it in.</p>
            <div className="space-y-2">
              {HEADLINE_FORMULAS.map((h, i) => (
                <p key={i} className="text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2 font-mono leading-relaxed">{h}</p>
              ))}
            </div>
          </section>

          {/* Calendar */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">🗓️ The 30-Day Content Calendar</h2>
            <p className="text-gray-500 text-sm mb-6">
              Repeat this weekly cadence for 4 weeks. The mix is engineered so ~70% builds trust and ~30% drives action — the ratio that actually generates leads without feeling salesy.
            </p>
            <div className="overflow-hidden rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <tbody>
                  {CALENDAR.map(([day, plan], i) => (
                    <tr key={day} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 font-bold text-gray-900 w-16 border-r border-gray-100">{day}</td>
                      <td className="p-3 text-gray-700">{plan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs mt-3">
              Pro move: batch-write all 5 weekday posts in one sitting using the hooks above, then schedule them. 20 minutes on Monday = a full week of content.
            </p>
          </section>

          {/* Upsell */}
          <div className="bg-gradient-to-br from-blue-600 to-violet-700 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Want the AI to write these for you?</h2>
            <p className="text-blue-100 text-sm mb-5">
              You've got the templates. Spur AI turns them into finished posts, DMs, and headlines in your voice — in seconds. Solo plan is just $19/mo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/free-tools" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-sm">
                Try the free tools
              </Link>
              <Link href="/pricing" className="border border-blue-400/50 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
                See plans from $19/mo →
              </Link>
            </div>
          </div>

          <p className="text-center text-gray-400 text-xs mt-8">
            Questions or issues with your pack? Email <a href="mailto:hello@trispur.com" className="text-blue-600 hover:underline">hello@trispur.com</a> and we'll sort it out fast.
          </p>
        </div>
      </main>
    </div>
  )
}

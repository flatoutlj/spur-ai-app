"use client"

import { useState } from "react"

interface Template {
  situation: string
  message: string
  why: string
}

interface Category {
  title: string
  color: string
  badge: string
  templates: Template[]
}

const categories: Category[] = [
  {
    title: "Connection Requests",
    color: "blue",
    badge: "5 templates",
    templates: [
      {
        situation: "Connecting with someone in the same industry",
        message:
          "Hi [Name] — I've been following your content on LinkedIn and your take on [topic they posted about] really resonated with me. I work with [your ICP] on [your result]. Would love to connect and stay in each other's orbit.",
        why: "References their specific content so it doesn't feel templated. Short and non-pitchy.",
      },
      {
        situation: "Connecting after engaging with their post",
        message:
          "Hi [Name] — I commented on your post about [topic] and wanted to connect properly. What you said about [specific point] is exactly what I see with my clients too. Great perspective.",
        why: "Reminds them where they've seen you before. Creates continuity.",
      },
      {
        situation: "Connecting with a potential client ICP",
        message:
          "Hi [Name] — I help [ICP] achieve [result] through [your method]. Saw your profile and thought we'd be a good connection. No pitch — just building my network of [industry] professionals.",
        why: "Transparent about what you do without pitching. The 'no pitch' line disarms skepticism.",
      },
      {
        situation: "Connecting after meeting at an event or online community",
        message:
          "Hi [Name] — Great meeting you at [event/community]. I really enjoyed our conversation about [topic]. Let's stay connected here — would love to continue the dialogue.",
        why: "Warm context makes the request feel natural and expected.",
      },
      {
        situation: "Connecting with a mutual connection's referral",
        message:
          "Hi [Name] — [Mutual connection's name] suggested I reach out to you. I work with [ICP] helping them [result]. [Mutual connection] thought there might be good overlap in what we do. Happy to connect.",
        why: "A mutual referral is the strongest trust signal you can use in a cold request.",
      },
    ],
  },
  {
    title: "Follow-Up After Connecting",
    color: "violet",
    badge: "5 templates",
    templates: [
      {
        situation: "First message after they accept your connection",
        message:
          "Hey [Name] — Thanks for connecting! I looked at your profile a bit more after you accepted. Really interesting work with [their company or niche]. Out of curiosity — what's the biggest challenge you're working through right now with [relevant topic]?",
        why: "Opens with genuine curiosity, not a pitch. Asking about their challenge starts a real conversation.",
      },
      {
        situation: "Following up with a warm lead who went quiet",
        message:
          "Hey [Name] — Circling back from our conversation a few weeks ago. I know things get busy. Just wanted to see if [the problem you discussed] is still something on your radar — or if priorities shifted. No worries either way.",
        why: "Low-pressure follow-up. Acknowledges that life happens. Easy to respond to.",
      },
      {
        situation: "Sharing a relevant resource after connecting",
        message:
          "Hey [Name] — I put together a quick guide on [topic relevant to their pain point] that my clients have found really useful. Happy to send it over if it would be helpful — no strings attached.",
        why: "Giving value before asking for anything builds trust faster than any pitch.",
      },
      {
        situation: "Following up after they viewed your profile",
        message:
          "Hi [Name] — I noticed you checked out my profile recently. If you were looking into what I do and want to know more, I'm happy to share more context. No obligation — just wanted to make it easy to reach out.",
        why: "Profile views are a buying signal. This gives them a low-friction way to engage.",
      },
      {
        situation: "Reconnecting after a long gap",
        message:
          "Hey [Name] — It's been a while since we connected. I've been deep in [what you've been working on] this past year. I see you've been [something notable from their profile or posts]. Would love to catch up briefly — are you open to a 15-min call sometime?",
        why: "Acknowledges the time gap honestly. Ends with a clear, low-friction ask.",
      },
    ],
  },
  {
    title: "Warm Outreach to Content Engagers",
    color: "green",
    badge: "5 templates",
    templates: [
      {
        situation: "Someone liked or commented on your post",
        message:
          "Hey [Name] — I saw you engaged with my post on [topic]. Glad it resonated! Since you're thinking about [that topic], I'm curious — is that something you're actively working on right now, or more something on your radar?",
        why: "They already showed interest. This opens a conversation at the exact point of engagement.",
      },
      {
        situation: "Someone shared your content",
        message:
          "Hi [Name] — Really appreciate you sharing my post on [topic] — that means a lot. I checked out your profile and it looks like you work with [their audience]. Do you find [that topic] comes up a lot for your clients/team too?",
        why: "Sharing is the strongest form of engagement. This message rewards them and starts a dialogue.",
      },
      {
        situation: "You engaged with their post and want to continue the conversation",
        message:
          "Hey [Name] — I left a comment on your post about [topic] — it sparked a thought I wanted to share directly. I've seen [related insight from your experience] a lot with my clients. Would you be open to a quick conversation about it?",
        why: "Continues the conversation in a private channel. The transition feels earned.",
      },
      {
        situation: "They commented with a problem or question on your post",
        message:
          "Hi [Name] — You asked about [their specific question] in my comments. I have a lot of context on that from working with [ICP]. Happy to share what I know — want to jump on a quick call, or would you prefer I send some thoughts here?",
        why: "Responding to a specific question signals you were listening. Offering both call/DM respects their preference.",
      },
      {
        situation: "They consistently engage with your content",
        message:
          "Hey [Name] — I've noticed you've been engaging with a lot of my content on LinkedIn over the past few weeks. Really appreciate it. I'm curious — what's your situation with [relevant topic]? I help [ICP] with [result] and it sounds like it might be relevant.",
        why: "Consistent engagement is a strong buying signal. Naming it directly creates a personal moment.",
      },
    ],
  },
  {
    title: "Cold Outreach to ICP",
    color: "orange",
    badge: "5 templates",
    templates: [
      {
        situation: "Cold DM to an ideal prospect",
        message:
          "Hi [Name] — I work with [ICP like them] helping them [result]. I came across your profile and it looked like a strong fit. I know you're probably getting a lot of DMs, so I'll keep this short: would it make sense to have a 20-min conversation about [specific pain point]? If not, no hard feelings.",
        why: "Acknowledges the spam problem. Respects their time. Makes a specific ask with an easy out.",
      },
      {
        situation: "Cold outreach referencing their company/role",
        message:
          "Hi [Name] — I noticed you're [their role] at [their company]. I work with a lot of [similar companies] on [result]. One thing I see consistently is [common pain point]. Is that something you're dealing with too, or have you already solved for it?",
        why: "Shows you did your homework. Ends with a question that's easy to answer yes or no.",
      },
      {
        situation: "Cold outreach referencing a trigger event",
        message:
          "Hi [Name] — I saw that [their company] recently [trigger event: raised funding, launched product, hired team]. Congrats! That usually means [relevant challenge] becomes a priority. I specialize in helping [ICP] navigate exactly that. Would a quick call be useful?",
        why: "Trigger events create urgency and show you're paying attention to their world.",
      },
      {
        situation: "Cold outreach with a specific insight",
        message:
          "Hi [Name] — I was looking at [their company/niche] and noticed [specific observation]. Most [ICP] I work with struggle with [related challenge] at this stage. I have a framework that's helped [result]. Worth a 15-min call?",
        why: "Leads with insight, not pitch. Positions you as someone who can diagnose, not just sell.",
      },
      {
        situation: "Permission-based cold DM",
        message:
          "Hi [Name] — I have an idea for [their company/goal] that I think could [result]. Would it be okay if I shared it with you? It'll take 2 minutes to explain. If it's not relevant, I promise I won't follow up again.",
        why: "Asking permission before pitching is the ultimate pattern interrupt. Almost everyone says yes.",
      },
    ],
  },
  {
    title: "Follow-Up Sequences",
    color: "teal",
    badge: "5 templates",
    templates: [
      {
        situation: "Follow-up #1 (3 days after no response)",
        message:
          "Hey [Name] — Just bumping this up in case it got buried. Did my last message land okay? Happy to clarify what I do if the context was unclear.",
        why: "Short and non-pushy. Gives them an easy reason why they didn't reply (it got buried).",
      },
      {
        situation: "Follow-up #2 (7 days after no response)",
        message:
          "Hi [Name] — I don't want to keep pinging you if this isn't relevant. Last message from me: I help [ICP] [result]. If the timing is right in the next few months, feel free to reach back out. If not, wishing you the best.",
        why: "The 'last message from me' line is a powerful psychological trigger. Closes the loop while leaving the door open.",
      },
      {
        situation: "Follow-up after a discovery call (no decision yet)",
        message:
          "Hey [Name] — Really enjoyed our call last week. Following up on our conversation about [specific pain point they mentioned]. I put together a quick summary of how we'd approach this for [their company] — want me to send it over?",
        why: "Personalizes the follow-up to what you actually discussed. The offer to send something gives them a reason to engage.",
      },
      {
        situation: "Follow-up after sending a proposal",
        message:
          "Hi [Name] — Checking in on the proposal I sent over. I know decisions like this take time. Is there anything in the proposal that raised questions, or any objections I can address? Happy to hop on a 15-min call to talk through it.",
        why: "Invites objections rather than avoiding them. Shows confidence and creates an opening.",
      },
      {
        situation: "Break-up message (final follow-up)",
        message:
          "Hey [Name] — I've reached out a few times and haven't heard back — totally understand, life gets busy. I'll take this as a 'not right now' and won't follow up again. If things change down the road, my door is always open. Best of luck with [their goal].",
        why: "Break-up messages often get the highest reply rates of any follow-up. People don't want to feel like they left you hanging.",
      },
    ],
  },
]

const colorMap: Record<string, { badge: string; border: string; accent: string; tag: string }> = {
  blue: {
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    border: "border-l-blue-500",
    accent: "text-blue-600",
    tag: "bg-blue-50 text-blue-600",
  },
  violet: {
    badge: "bg-violet-50 text-violet-700 border-violet-100",
    border: "border-l-violet-500",
    accent: "text-violet-600",
    tag: "bg-violet-50 text-violet-600",
  },
  green: {
    badge: "bg-green-50 text-green-700 border-green-100",
    border: "border-l-green-500",
    accent: "text-green-600",
    tag: "bg-green-50 text-green-600",
  },
  orange: {
    badge: "bg-orange-50 text-orange-700 border-orange-100",
    border: "border-l-orange-500",
    accent: "text-orange-600",
    tag: "bg-orange-50 text-orange-600",
  },
  teal: {
    badge: "bg-teal-50 text-teal-700 border-teal-100",
    border: "border-l-teal-500",
    accent: "text-teal-600",
    tag: "bg-teal-50 text-teal-600",
  },
}

export default function DMTemplatesClient() {
  const [copied, setCopied] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  async function handleCopy(text: string, key: string) {
    await navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  const displayedCategories =
    activeCategory ? categories.filter((c) => c.title === activeCategory) : categories

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
            activeCategory === null
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
          }`}
        >
          All 25 templates
        </button>
        {categories.map((cat) => {
          const colors = colorMap[cat.color]
          return (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(cat.title === activeCategory ? null : cat.title)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                activeCategory === cat.title
                  ? `${colors.badge} border-current`
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
              }`}
            >
              {cat.title}
            </button>
          )
        })}
      </div>

      {/* Templates */}
      <div className="space-y-12">
        {displayedCategories.map((cat) => {
          const colors = colorMap[cat.color]
          return (
            <div key={cat.title}>
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${colors.badge}`}
                >
                  {cat.badge}
                </span>
                <h2 className="text-xl font-bold text-gray-900">{cat.title}</h2>
              </div>
              <div className="space-y-4">
                {cat.templates.map((tmpl, idx) => {
                  const key = `${cat.title}-${idx}`
                  return (
                    <div
                      key={key}
                      className={`bg-white border border-gray-100 border-l-4 ${colors.border} rounded-r-xl shadow-sm overflow-hidden`}
                    >
                      <div className="px-5 py-4">
                        <div className={`text-xs font-semibold mb-2 ${colors.accent}`}>
                          {tmpl.situation}
                        </div>
                        <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-line mb-3">
                          {tmpl.message}
                        </p>
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-xs text-gray-400 leading-relaxed italic">
                            Why it works: {tmpl.why}
                          </p>
                          <button
                            onClick={() => handleCopy(tmpl.message, key)}
                            className="flex-shrink-0 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors text-gray-600 whitespace-nowrap"
                          >
                            {copied === key ? "Copied!" : "Copy"}
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

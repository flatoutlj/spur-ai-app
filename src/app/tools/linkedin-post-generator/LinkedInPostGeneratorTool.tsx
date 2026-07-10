"use client"

import { useState } from "react"
import Link from "next/link"

const DEMO_POSTS: Record<string, Record<string, string>> = {
  consulting: {
    story: `I turned down a $60,000 contract last quarter.

Not because we couldn't deliver.
Because the client wanted results in 30 days.

For a problem that took 3 years to create.

I used to say yes to those projects. I thought I could make it work.

Every time, the same result:
→ Unrealistic expectations
→ Scope creep by week 2
→ A bad case study and a stressed team

Now I have one question I ask every prospect before we discuss price:

"What would success look like at 6 months, not 6 weeks?"

If they can't answer that — or don't like the question — it's a no.

My win rate dropped 20%. My client satisfaction score went up 60%.

Not every opportunity is an opportunity.

What's the best "no" you've given a client this year?`,
    contrarian: `Unpopular take: Most consulting proposals are the reason you're losing deals.

Your 20-page PDF isn't impressive.
It's anxiety-inducing.

Prospects don't read it.
They scroll to the price, panic, and ghost you.

Here's what actually wins deals in 2026:

→ A 1-page "Situation Summary" that shows you listened
→ 3 outcomes (not deliverables) with timelines
→ One price. No tiers, no confusion.
→ A 2-paragraph "What happens next" section

Your proposal should answer one question: "Do these people get my problem?"

Everything else is noise.

How many pages is your current proposal?`,
    howto: `How to get 3 inbound leads per week from LinkedIn (without cold DMs):

I've tested this for 18 months. Here's the exact system:

Step 1: Post 3x per week (Mon/Wed/Fri)
→ 1 story post (your experience/lesson)
→ 1 contrarian take (your opinion on industry norm)
→ 1 how-to post (tactical value)

Step 2: Comment on 10 posts per day
→ Target your ideal clients' posts
→ Add a real perspective, not "Great post!"
→ This gets your name in front of their network

Step 3: Optimize your profile for your ICP
→ Headline: who you help + what outcome
→ About section: problem you solve, not your resume
→ Featured section: your best performing post or case study

Step 4: Send connection requests to everyone who engages with you
→ Short note: "Saw you engaged with my post on X — thought it worth connecting."

Results after 90 days:
→ Profile views: +340%
→ Connection requests received: +180%
→ Inbound DMs per week: 3–5

The algorithm rewards consistency. Ship it.`,
  },
  agency: {
    story: `My agency almost died in 2023.

We had 11 clients, 8 employees, and $0 in the bank.

Not because of bad clients or a bad market.
Because I was running the business like a freelancer.

Every decision went through me.
Every proposal: me.
Every client call: me.
Every fire: me.

I was the bottleneck and I didn't know it.

Then I hired an operations director.

She built SOPs for everything.
She took client calls off my plate.
She created reporting systems I'd never think to build.

Six months later:
→ Revenue up 35%
→ Client churn down 50%
→ I work 4 days a week

The best thing I ever did for my business was admit I wasn't good at running it.

What role do you wish you'd hired sooner?`,
    contrarian: `Hot take: Your agency's biggest problem isn't your clients.

It's that you take on too many of them.

I see agency owners boasting about "17 active clients."

But ask them:
→ Which ones are profitable?
→ Which ones do you actually enjoy?
→ Which ones refer you to others?

Usually it's 3 or 4.

The other 13 exist to "cover overhead."

Here's the math no one talks about:

5 premium clients at $8K/mo = $480K/year
15 budget clients at $2K/mo = $360K/year

And the 5 premium clients:
→ Refer more often
→ Complain less
→ Trust your expertise
→ Renew without negotiation

Less clients. Higher quality. More profit.

How many clients do you actually want?`,
    howto: `How to raise your agency retainer from $2K to $8K/mo (step by step):

I've done this with 4 clients in the past year. Here's the process:

Step 1: Audit your current results
→ List every outcome you've produced for the client
→ Quantify it (revenue generated, cost saved, leads created)
→ If you can't quantify it, you're not charging enough to have the data

Step 2: Reframe the conversation
→ Stop saying "I do X, Y, Z"
→ Start saying "We've generated $X for clients like you"
→ Shift from services to outcomes

Step 3: Price the outcome, not the hours
→ If you help a client close $200K in new business, $8K/mo is 4.8% of the value
→ That's not expensive — that's a good deal

Step 4: Give them a reason to pay more
→ Add a "Growth Tier" to your service menu
→ Include strategy, reporting, and access to you
→ Most clients will upgrade when they see the gap

Step 5: Ask directly
→ "Based on the results we've generated, I'd like to propose moving to our Growth tier."

I've never had a client say no when I could show the ROI.`,
  },
  coach: {
    story: `I charged $500 for 1:1 coaching sessions for 3 years.

Then I raised my price to $3,000.

My calendar didn't slow down.
It got busier.

Here's what actually happened:

At $500: clients treated sessions like a "nice to have"
→ Cancelled last minute
→ Didn't do the homework
→ Expected me to fix everything in 60 minutes

At $3,000: clients come ready to work
→ They show up early
→ They've done the prep work
→ They implement between sessions

Price is a signal.

When you charge too little, clients don't value the work.
When you charge what it's worth, they show up differently.

The clients who pushed back on $3,000 were the ones who wouldn't have done the work anyway.

What price shift changed everything for your business?`,
    contrarian: `Controversial: Most coaches shouldn't offer 1:1 packages.

There. I said it.

1:1 coaching is:
→ Time-capped (you can only take so many clients)
→ Hard to scale without burning out
→ Dependent entirely on your availability

The coaches I know who earn $500K+ do it with:
→ A group program (cohort or evergreen)
→ A membership or community
→ A course that runs while they sleep

1:1 is great for income when you're starting.
It's a ceiling when you're growing.

The shift I made:
→ Capped 1:1 at 5 clients max (high-ticket, $3K+/mo)
→ Launched a group program at $2K (10–15 clients)
→ Created a $97/mo membership for past clients

Now I make more than I did with 20 1:1 clients.
And I have my calendar back.

What's your current client capacity ceiling?`,
    howto: `How to fill your coaching practice from LinkedIn in 60 days:

This is the exact playbook I used. No ads. No cold outreach.

Week 1–2: Profile optimization
→ Headline: "[Who] I help [achieve specific result] in [timeframe]"
→ About: Lead with their problem, not your credentials
→ Featured: Add your best testimonial or a 2-min video

Week 3–4: Content foundation
→ Post 3x/week using this rotation:
  - Client story (with permission, anonymized if needed)
  - Your hot take on a common coaching myth
  - A tactical tip your ideal client can use today

Week 5–6: Engagement strategy
→ Comment meaningfully on 5 posts/day from ideal clients
→ Reply to everyone who comments on your posts
→ Send connection requests to engaged followers

Week 7–8: Soft CTA introduction
→ End posts with a question that leads to your niche
→ Offer a free "Discovery Call" in your bio
→ DM people who engage with a genuine (non-salesy) message

Result: 2–4 discovery calls/week by end of 60 days.

Want me to map this out for your specific niche?`,
  },
}

const TOPIC_OPTIONS = [
  { value: "consulting", label: "Management Consulting" },
  { value: "agency", label: "Marketing/Creative Agency" },
  { value: "coach", label: "Business Coaching" },
]

const TYPE_OPTIONS = [
  { value: "story", label: "Story post" },
  { value: "contrarian", label: "Contrarian take" },
  { value: "howto", label: "How-to post" },
]

export default function LinkedInPostGeneratorTool() {
  const [topic, setTopic] = useState("consulting")
  const [type, setType] = useState("story")
  const [generated, setGenerated] = useState(false)
  const [loading, setLoading] = useState(false)

  const post = DEMO_POSTS[topic]?.[type] ?? ""

  const handleGenerate = () => {
    setLoading(true)
    setTimeout(() => {
      setGenerated(true)
      setLoading(false)
    }, 1200)
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-50">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your niche / industry
            </label>
            <select
              value={topic}
              onChange={(e) => { setTopic(e.target.value); setGenerated(false) }}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {TOPIC_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Post type
            </label>
            <select
              value={type}
              onChange={(e) => { setType(e.target.value); setGenerated(false) }}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {TYPE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="mt-4 w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 text-sm"
        >
          {loading ? "Generating your post..." : "Generate LinkedIn post →"}
        </button>
        <p className="text-center text-xs text-gray-400 mt-2">
          This is a demo. For unlimited posts tailored to your voice,{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">start your free trial</Link>.
        </p>
      </div>

      {generated && (
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex-shrink-0" />
            <div>
              <div className="font-semibold text-gray-900 text-sm">Your Name</div>
              <div className="text-gray-400 text-xs">
                {TOPIC_OPTIONS.find((o) => o.value === topic)?.label} · 1st
              </div>
            </div>
            <span className="ml-auto text-xs text-green-600 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              Generated in 1.2s
            </span>
          </div>
          <div className="text-gray-800 text-sm leading-relaxed whitespace-pre-line">
            {post}
          </div>
          <div className="mt-5 pt-4 border-t border-gray-50 flex flex-col sm:flex-row items-center gap-3">
            <p className="text-gray-500 text-sm flex-1">
              Want posts like this — trained on YOUR voice and niche?
            </p>
            <Link
              href="/signup"
              className="flex-shrink-0 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Start free trial →
            </Link>
          </div>
        </div>
      )}

      {!generated && (
        <div className="p-8 text-center text-gray-400 text-sm">
          Select your niche and post type, then click generate to see an example post.
        </div>
      )}
    </div>
  )
}

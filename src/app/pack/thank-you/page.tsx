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
      "Your discovery call isn't a discovery call. It's a free consulting session with extra steps.",
      "Raising your rates won't scare off good clients. It'll scare off the ones eating [hours] a week.",
      "Niching down isn't a marketing decision. It's a sanity decision.",
      "The client who haggles over $[X] in the proposal is the same client emailing you at 11pm.",
      "Retainers aren't more stable than projects. They're just slower to die.",
      "Most agencies don't have a churn problem. They have an onboarding problem they never fixed.",
      "'We're not ready to invest right now' usually means 'you never showed me what I'd be investing in.'",
      "If your proposal needs [N] pages to justify the price, the price isn't the problem.",
      "Referrals are not a growth strategy. They're a growth accident you got comfortable with.",
      "Nobody buys your process. They buy the version of themselves waiting on the other side of it.",
      "Charging hourly punishes you for getting better at your job.",
      "You don't need more leads. You need to stop booking calls with people who were never going to buy.",
      "Scope creep isn't the client's fault. It's what happens when the scope was never actually written down.",
      "The 'let me send you a proposal' reflex has killed more deals for me than any competitor ever did.",
      "Half the [ICP] I speak to are underpriced and overbooked, and they think those are two separate problems.",
      "A signed retainer with a client you dread is worse than an empty calendar. I've had both.",
      "Case studies don't sell. Specificity sells. Most case studies contain neither.",
      "Fractional isn't a title. It's a pricing model people keep mistaking for a career move.",
      "Your website isn't why they didn't buy. Ask the last [N] people who ghosted you and you'll hear the same reason.",
      "Everyone is busy optimising their offer. Almost nobody is willing to change who they're offering it to.",
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
      "I fired my biggest client on a Tuesday. Revenue dropped [X]%. Profit went up.",
      "The day I quoted $[X] out loud for the first time, I felt sick. They said yes in four minutes.",
      "A prospect told me my proposal was 'confusing.' I've never been more grateful for blunt feedback.",
      "I spent [X] months building a service nobody asked for. Here's the question I should have asked first.",
      "My first retainer client paid me $[X] a month for [Y] months, and I never once asked them why they renewed.",
      "I took a call I knew was a bad fit because I needed the cash. It cost me [timeframe] I can't get back.",
      "For two years I called myself a [vague title]. Nobody could refer me. Here's what I changed it to.",
      "I put every client from the last [X] years into a spreadsheet. The pattern was ugly and obvious.",
      "A client asked me, 'What would you do if this were your company?' I froze. That question rebuilt my offer.",
      "I lost a deal to someone charging 3x my rate. Six months later I found out exactly why.",
      "I wrote [N] posts before one of them turned into a client. Here's what that post had that the others didn't.",
      "My worst month in business was [month]. I had the same skills in [month] as I did in [better month]. That's what scared me.",
      "I turned down $[X] of work last month. My accountant thinks I've lost it. Here's the math.",
      "A stranger sent me a DM that turned into a $[X] engagement. It was four sentences long.",
      "I used to end every call with 'let me know what you think.' A mentor made me stop saying it. Close rate moved.",
      "The first time a client asked for a refund, I sent it back within the hour. It's still the best marketing I've done.",
      "I let a project run [X] weeks over scope because I didn't want to have one awkward conversation.",
      "I hired a contractor before I could really afford one. What it taught me about delegation wasn't what I expected.",
      "I built a business I couldn't step away from for a week. Undoing that took [timeframe] — here's the order I did it in.",
      "The client who nearly broke me also wrote my best testimonial. Both of those are true and I've stopped trying to reconcile them.",
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
      "A [ICP] came to me with [N] leads a month and no idea where any of them came from. Here's what week one turned up.",
      "Same offer. Same audience. New positioning. [metric] moved [X]% in [timeframe].",
      "We cut this client's service list from [N] offers down to one. Revenue per client went from $[X] to $[Y].",
      "[X] discovery calls. [Y] closed. Here's what the [Y] had in common that the rest didn't.",
      "My client hadn't raised prices in [X] years. We raised them [Y]% and lost exactly [N] clients.",
      "This [ICP] was giving away [hours] a week in unpaid scoping. Here's the one document that ended it.",
      "We rewrote a single page of their proposal template. Close rate went from [X]% to [Y]%.",
      "A coach with [small number] followers out-earned a competitor with [big number]. Here's the difference.",
      "From one-off projects to a $[X]/month retainer in [timeframe] — including the conversation that got them there.",
      "Average client lifespan was [X] months. We changed the first 14 days of onboarding and it became [Y].",
      "This agency was profitable on paper and broke in the bank. Here's what we found buried in delivery.",
      "One client, [X] referrals in [timeframe], zero of them accidental. Here's the system underneath it.",
      "We cut [X]% of their content output and inbound went up. Here's what we kept.",
      "A fractional [role] went from [X] clients at $[Y] to [A] clients at $[B]. Same hours worked.",
      "How a [ICP] filled [timeframe] of pipeline from one post they nearly didn't publish.",
      "They'd been 'about to launch' for [X] months. We shipped in [Y] days. Here's everything we cut.",
      "$[X] in pipeline from a profile rewrite. No ads, no cold email, no new content.",
      "Their best-converting asset wasn't the website. It was a [asset] they made in an afternoon.",
      "We tracked where every closed deal actually originated for [X] months. The answer surprised both of us.",
      "A [ICP] doing $[X] asked me for more leads. I asked to see their calendar first. Here's why.",
      "Two clients, near-identical starting points. One hit [result] in [timeframe], one didn't. The difference wasn't effort.",
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
      "How to run a discovery call that ends in a decision instead of 'send me a proposal':",
      "The [N] questions I ask before I'll put a number on anything:",
      "How to raise rates with existing clients without losing them — here's the email, word for word:",
      "How to write a proposal your buyer can forward to their boss without having to explain it:",
      "How to decline out-of-scope work without damaging the relationship. Exact wording:",
      "The 20-minute audit I run on any [ICP]'s [asset] before I touch a thing:",
      "How to turn one client result into [N] pieces of content this week:",
      "The onboarding sequence that kills churn before it starts — all [N] touchpoints:",
      "How to price a project when the client refuses to name a budget:",
      "Steal my agenda for the quarterly review that renews the retainer before you have to ask:",
      "How to ask for a referral without making it weird. Three sentences:",
      "How I qualify a lead in under five minutes so I stop burning calls on [wrong fit]:",
      "How to write a case study when the client won't let you use their name:",
      "Want inbound from LinkedIn? Fix these [N] lines on your profile before you post again:",
      "How to end a client relationship cleanly — with the final invoice and the reference both intact:",
      "The follow-up cadence I run after a proposal goes quiet: [N] touches over [timeframe].",
      "How to productise [service] so you stop rebuilding it from scratch for every client:",
      "The one-page scope doc that has saved me [hours] of arguments. Every field explained:",
      "How to refill your pipeline in [timeframe] using only people you've already spoken to:",
      "How to handle '[objection]' live on a call without getting defensive:",
      "How to build the referral ask into delivery instead of begging for one at the end:",
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
      "[N] questions that separate a real buyer from a tire-kicker:",
      "[N] things I stopped doing the month I went from freelancer to [role]:",
      "[N] lines to delete from your proposal today:",
      "[N] signs a retainer is about to churn — and roughly [timeframe] to do something about it:",
      "[N] reasons [ICP] ghost after the proposal, ranked by how often I see each one:",
      "[N] clients I should have turned down, and what each one taught me:",
      "[N] things that look like marketing problems and are actually pricing problems:",
      "[N] discovery call questions nobody else in [industry] is asking:",
      "[N] parts of your delivery you could systemise before the end of the month:",
      "[N] uncomfortable truths about running a [service] business past $[X]:",
      "[N] ways [ICP] accidentally train their clients to disrespect their time:",
      "[N] things I'd do first if I had to rebuild my client list from zero tomorrow:",
      "[N] numbers I check every week. Revenue isn't the first one:",
      "[N] emails every [role] should have saved as a template by now:",
      "[N] phrases that quietly lower your price before you've even said a number:",
      "[N] client requests that are scope creep wearing a friendly costume:",
      "[N] positioning problems, and the one-line fix for each:",
      "[N] things to fix in your business before you hire anyone:",
      "[N] lessons from writing [X] proposals — the boring ones win:",
      "[N] reasons your happiest client still hasn't referred you. None of them are about your work.",
      "[N] questions to ask yourself before you say yes to [type of project]:",
    ],
  },
  {
    name: "Question / Engagement",
    hooks: [
      "What's the one piece of advice you'd give your younger self about [topic]?",
      "Am I the only one who thinks [contrarian view]?",
      "Quick question for [ICP]: what's stopping you from [goal]?",
      "If you could only keep ONE [tool/habit/strategy], what would it be?",
      "[ICP]: do you charge for discovery calls? I've changed my mind on this twice.",
      "What's the highest number you've ever said out loud on a call without flinching?",
      "Honest question — how many hours a week do you currently give away for free?",
      "What's the one client red flag you now refuse to talk yourself out of?",
      "Retainer or project work? I especially want to hear from people who've run both.",
      "What did you charge for your very first [service]? I'll go first: $[X].",
      "What's a piece of advice for [ICP] that's technically true and practically useless?",
      "How do you decide it's time to end a client relationship? I don't think I've ever done it early enough.",
      "Which convinces you faster: a referral or a case study? And why?",
      "What's the last thing you removed from your offer — and did a single client notice?",
      "What question do you wish prospects asked you but never do?",
      "How long is your sales cycle, really? Not the number you put on the website.",
      "Best money you've spent on your business for under $[X]?",
      "[ICP]: what's in your proposal that no client has ever once asked about?",
      "If a client asked you to cut your price by 30% today, what would you genuinely say?",
      "What's the most useful thing a client ever told you about why they picked you?",
      "What do you actually do in the 48 hours after a proposal goes out?",
      "What's your scope creep policy — and does it survive contact with a client you like?",
      "Which is harder for you right now: getting the call, or closing it?",
      "What would you tell a [ICP] who quit their job last week to go independent?",
      "How many of this year's clients came from something you could deliberately repeat?",
      "What's a norm in [industry] you've quietly stopped following, and nothing bad happened?",
    ],
  },
  {
    name: "Prediction / Insight",
    hooks: [
      "In 12 months, [prediction about industry]. Here's why.",
      "The [role]s who win in 2026 will all do this one thing:",
      "[Trend] is about to change [industry] forever. Most people aren't ready.",
      "Here's what nobody's telling you about [current topic]:",
      "The gap between a $[X] [role] and a $[Y] [role] isn't skill. It's [thing]. And it's widening.",
      "Generalist agencies are being squeezed from both ends. Here's where I think the survivors move.",
      "Buyers now make most of the decision before they ever contact you. That changes what your content has to do.",
      "In two years, 'I'll build you a [deliverable]' won't be an offer. This will be:",
      "The next wave of [ICP] won't compete on price or speed. They'll compete on [thing].",
      "Watch what happens to [industry] retainers over the next [timeframe]. The signals are already there.",
      "The [role]s still getting hired in a tight market share one thing, and it isn't credentials.",
      "Every [role] is about to be judged on outcomes they used to be able to blame on the client.",
      "Here's the shift nobody in [industry] wants to say out loud:",
      "Three signals I'm watching in [industry] right now, and what I think they add up to:",
      "Cheap [service] is about to get much cheaper. That's good news if you're positioned correctly.",
      "The 'thought leadership' era is ending. What replaces it is harder and works better.",
      "I've had [N] conversations with [ICP] this quarter. The same fear came up in nearly all of them.",
      "Writing this down now so you can hold me to it: [prediction].",
      "The most valuable thing a [role] can own in [year] isn't a skill or a tool. It's [thing].",
      "Something changed in how [ICP] buy this year and most [role]s haven't updated their sales process for it.",
      "If [trend] holds, the [X]-person agency becomes the hardest size to run. Here's the logic.",
      "The winners in [industry] won't be the best at [craft]. They'll be the clearest about [thing].",
      "There's a quiet shift in what clients ask for in month one. I've seen it [N] times this year alone.",
      "What I got wrong about [trend] last year — and what I think now:",
      "The next 12 months will reward [ICP] who can say no faster. Here's why.",
      "Everyone's watching [obvious trend]. The thing that will actually change your business is [less obvious thing].",
    ],
  },
  {
    name: "Mistake / Confession",
    hooks: [
      "I made a $[X] mistake so you don't have to. Here it is:",
      "For years I did [thing] wrong. Here's what finally clicked.",
      "The embarrassing reason my [thing] wasn't working:",
      "I was doing [common practice]. It was sabotaging my [result].",
      "I underpriced [N] projects in a row and told myself I was 'building relationships.'",
      "I let a client renegotiate scope mid-project. Here's the sentence I should have used instead.",
      "For [X] years my offer was whatever the last client asked for. I called that flexibility.",
      "I've never said this publicly: [X]% of my revenue used to come from a single client.",
      "I ignored a red flag on the first call because the budget was good. It cost me [timeframe].",
      "I chased a logo instead of a fit. That case study wasn't worth the [months] it took to earn it.",
      "My proposals used to be about me. It took [X] years and [N] losses to notice.",
      "I said 'yes, we can do that' to something we'd never done. Here's exactly how that went.",
      "I always asked why we lost. I never once asked why we won. That was backwards.",
      "The hardest email I've ever sent to a client opened with: 'I got this wrong.'",
      "I built my entire pipeline on referrals and called it a strategy. Then the referrals stopped.",
      "I confused being busy with being booked. There's a $[X] difference between them.",
      "I discounted to close a deal and taught that client exactly what my work was worth.",
      "I hired for the skills I could teach and ignored the one thing I couldn't.",
      "I ran [X] years without tracking where clients came from. Ask me how I felt the day I finally checked.",
      "I gave a client [N] rounds of free revisions. By the last one they trusted my judgment less, not more.",
      "I spent $[X] on [tactic] before I'd bothered to call [N] of my own past clients.",
      "I kept a bad-fit client [X] months longer than I should have. Here's the real cost, not the invoice.",
      "I called it consulting. The client called it doing the work. We were both right and the margin died.",
      "I avoided one awkward pricing conversation for [X] months. Compounded, it cost me $[Y].",
      "I optimised my content for people like me instead of people who hire me.",
      "The mistake I still make [X] years in: [mistake]. I'm not going to pretend I've fixed it.",
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
  "[Result] for [ICP] | [N] years in [industry] | Taking [N] clients this quarter",
  "I fix [specific problem] for [ICP]. That's the whole headline.",
  "[Service] for [ICP] who are tired of [common frustration]",
  "Fractional [role] | Done this at [company stage] [N] times | Now doing it for you",
  "The [ICP]'s [role] | [proof point] | Free [resource] in Featured ↓",
  "[N]+ [ICP] helped to [outcome] | Ex-[company] | [city]-based, clients worldwide",
  "Helping [ICP] charge what the work is worth without [thing they fear]",
  "[Outcome] in [timeframe] or we keep working free | [ICP] only | Booking [month]",
  "I run [deliverable] so [ICP] can get back to [higher-value activity]",
  "[Niche] specialist | Not a generalist, not the cheapest, not for everyone",
  "[Type] coach for [ICP] | [credential] | [N] sessions delivered",
  "From [old role] to [new role] | I help [ICP] make the same jump",
  "[ICP] call me when [trigger event] happens",
  "Turning [messy input] into [clean output] for [ICP] since [year]",
  "[Result] without [tactic they hate] | [proof] | Newsletter: [N] readers",
  "Agency owner | We do one thing for [ICP]: [that thing] | [proof point]",
  "[ICP] → [outcome] | [N] case studies in Featured",
  "Strategy and execution for [ICP] | [past result] | DM '[keyword]' for the [resource]",
  "I help [ICP] stop [expensive habit] and start [profitable habit]",
  "[Role] for [company stage] companies | Previously [company] and [company] | [outcome]",
  "Your [surface problem] is a [real problem] problem. I fix the second one. | For [ICP]",
  "Working with [N] [ICP] this year | Publishing what works as I go",
  "[Timeframe] sprints for [ICP] who need [outcome] before [deadline event]",
  "[Credential] | [N] years [doing thing] | Helping [ICP] [result]",
  "I only work with [ICP]. The reason why is in my Featured section.",
  "[Outcome], [outcome], [outcome] — for [ICP]. Start with whichever hurts most.",
  "Ex-[role] at [company] | Now the [role] [ICP] call when [situation]",
  "Taking [N] [ICP] a year from [pain] to [outcome] | Waitlist open",
  "[Service] for [ICP] | Fixed price, fixed timeline, no retainer required",
  "[ICP] coach | I've been exactly where you are | [proof of the journey]",
]

const CALENDAR = [
  ["Day 1", "Positioning — state plainly who you help, what changes for them, and who you're not for. Pin it."],
  ["Day 2", "Personal story — the moment you decided to go independent, and the part you underestimated."],
  ["Day 3", "Contrarian — one piece of standard [industry] advice you've stopped following, and what you do instead."],
  ["Day 4", "Tactical — the questions you ask on a discovery call before you'll put a number on anything."],
  ["Day 5", "Case study — an anonymized before/after, plus the single decision that moved the number."],
  ["Day 6", "Engagement — ask your ICP what their real bottleneck is this quarter. Reply to every comment."],
  ["Day 7", "Behind the scenes — how a working week actually looks. Real hours, not the highlight reel."],
  ["Day 8", "Mistake — a project you underpriced, and what it taught you about your own value."],
  ["Day 9", "Listicle — [N] red flags you now screen for before you'll take a client."],
  ["Day 10", "Tactical — your scope document, field by field. Show the actual thing, not a description of it."],
  ["Day 11", "Prediction — where you think [industry] pricing goes over the next 12 months, and why."],
  ["Day 12", "Story — the client you fired, or should have. What that relationship was quietly costing you."],
  ["Day 13", "Case study — a result you got under tighter constraints than anyone expected. Show the constraints."],
  ["Day 14", "Engagement — retainers vs. project work. Ask, take a side, and let the comments argue."],
  ["Day 15", "Value drop — publish a template, checklist or script you'd normally only send to clients. No gate."],
  ["Day 16", "Contrarian — the metric your industry obsesses over that you think is close to meaningless."],
  ["Day 17", "Personal story — a piece of feedback that stung and permanently changed how you work."],
  ["Day 18", "Tactical — how you answer '[objection]' live on a call, word for word."],
  ["Day 19", "Listicle — [N] things you'd do first if you had to rebuild your pipeline from zero tomorrow."],
  ["Day 20", "Client voice — quote a question a client asked you this month, then answer it properly in public."],
  ["Day 21", "Reflection — what's working and what isn't in your business right now. Specific, not performatively humble."],
  ["Day 22", "Case study — a project that went sideways, and what you changed in delivery afterwards."],
  ["Day 23", "How-to — exactly how you ask for a referral, and where in the engagement you ask for it."],
  ["Day 24", "Hot take — why [common service in your niche] is usually the wrong first purchase for [ICP]."],
  ["Day 25", "Story — the first time you raised your rates. The fear, the conversation, the outcome."],
  ["Day 26", "Tactical — teardown of a real [asset], anonymized or your own, with what you'd change and why."],
  ["Day 27", "Engagement — ask your ICP what they wish consultants understood about their world."],
  ["Day 28", "Insight — a pattern across your last [N] clients that nobody in [industry] talks about."],
  ["Day 29", "Soft offer — name the exact problem you solve, who it's for, and how someone starts. One CTA."],
  ["Day 30", "Recap and invite — the [N] ideas from this month worth keeping, plus an open door to DM you about [problem]."],
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
            <p className="text-gray-500 text-sm mb-6">200+ hooks across 8 categories. Your first line decides everything — swap the brackets for your specifics.</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">📌 40 Headline Formulas</h2>
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
              Thirty distinct prompts — no repeats. The mix is engineered so ~70% builds trust and ~30% drives action: the ratio that actually generates leads without feeling salesy.
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
              Pro move: batch-write a week of posts in one sitting using the hooks above, then schedule them. 20 minutes on Monday = five days of content. If you post weekdays only, this calendar covers six weeks.
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

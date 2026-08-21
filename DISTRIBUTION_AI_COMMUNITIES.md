# Spur AI — Distribution Posts (AI-Native Communities)

**Product:** Spur AI — AI content engine for LinkedIn (posts, hooks, DMs, headlines, bios, content calendars, carousels). Built on Anthropic's Claude.
**URL:** https://trispur.com · **Free tools (no signup):** https://trispur.com/free-tools · **Contact:** lapoldeonwill@gmail.com
**Pricing:** 8 free tools (no signup) · $29 one-time pack (/pack) · $19/mo Solo · $149 Pro · $449 Agency · Done-for-you (/done-for-you)

**Voice:** builder-to-builder, honest, no hype. Transparent building-in-public angle. Real numbers today: 1 email signup, 3 users.

**Posting note:** The founder does NOT promote from a personal LinkedIn/social account. All items below are posted under a **builder identity** on Reddit / HN / Indie Hackers / Discord, or from the **brand @trispur / Spur AI company page**. Every item is marked with who must do it and whether login is required.

> ⚠️ **All items in this file require the OWNER to post** — each needs an account/login (Reddit, HN, Indie Hackers, X, LinkedIn company page, Discord). Claude cannot post any of these. This file is paste-ready copy only.

---

## 1. Reddit Posts

> **General Reddit hygiene:** Use one aged builder account, not a day-old throwaway (spam filters and mods will nuke new accounts). Comment/participate for a few days before posting. Never cross-post the same body to multiple subs on the same day. Reply to every comment. Lead with value, not the link — where a sub bans links, put the URL only in a comment or omit it and let people ask.

---

### 1a. r/SideProject

**Promo rules:** Self-promo friendly — this sub is literally for sharing side projects. Still expects a real story, not a pitch. Screenshots/demos do well.
**Angle:** "I built a mostly-AI-built SaaS, here's the honest state of it (near-zero traction)."
**Owner must post. Login required.**

**Title:** I built an AI LinkedIn content engine that's ~90% built by AI — 3 users so far, here's the honest breakdown

**Body:**
```
Spur AI is a content engine that turns a rough idea into LinkedIn posts, hooks, DMs, headlines, bios, carousels, and a content calendar. It runs on Anthropic's Claude.

The honest part: most of the app itself was built with AI agents. I'm one person, the codebase is largely AI-written, and traction today is basically nothing — 1 email signup and 3 users. I'm posting this at the "does anyone want this" stage, not the "look at my success" stage.

Why I made it: every "AI writes your LinkedIn posts" tool I tried produced the same beige, over-emoji'd sludge. I wanted tools that output something you'd actually publish without cringing, and that don't force a signup before you can try them.

So there are 8 free tools with no signup — you can run a hook generator, headline writer, bio writer, etc. right now and judge the output yourself: https://trispur.com/free-tools

What I'd genuinely love feedback on:
- Is the output actually good, or does it still read like AI slop? Be brutal.
- Is "no signup to try" the right call, or does it read as low-commitment?
- Would a one-time $29 pack make more sense to you than a subscription?

Not looking for signups, looking for people to tell me where it's weak. Roast it.
```

---

### 1b. r/SaaS (feedback thread style)

**Promo rules:** Direct promo is frowned on; feedback-request framing is accepted. No link-first posts. Mods remove anything that reads like an ad.
**Angle:** Pricing / packaging feedback from other founders. Link is secondary.
**Owner must post. Login required.**

**Title:** Founders: does a $29 one-time pack alongside subscriptions confuse buyers or help conversion?

**Body:**
```
Working on an AI content tool (LinkedIn posts/hooks/DMs, built on Claude). Solo founder, very early — 3 users, 1 email signup — so this is a genuine packaging question, not a flex.

Current pricing:
- 8 free tools, no signup
- $29 one-time "pack" (buy credits, no recurring)
- $19/mo Solo, $149 Pro, $449 Agency
- Done-for-you service on top

My worry: the $29 one-time pack sitting next to monthly plans might cannibalize subscriptions OR anchor people to "why would I pay monthly?" But it also lowers the barrier for people burned by subscription fatigue.

For those who've run both one-time and recurring:
1. Did offering a one-time option hurt or help your MRR?
2. Did it attract a worse-retaining customer, or just a different segment?
3. Would you kill the one-time option entirely at this stage to keep the funnel simple?

Happy to share the actual pricing page if useful, but mostly want the pattern-level lesson from people who've done it. Thanks.
```
*(Only drop https://trispur.com/pack if someone asks — do not lead with it here.)*

---

### 1c. r/indiehackers

**Promo rules:** Building-in-public is welcome; naked promo is not. Real numbers and lessons perform best.
**Angle:** The "AI-agent-run company" + transparent-numbers story.
**Owner must post. Login required.**

**Title:** I let AI agents build most of my SaaS. Shipped, launched, and got… 3 users. Lessons so far.

**Body:**
```
I've been running an experiment: how far can one person get with AI agents doing most of the building?

The product is Spur AI — an AI content engine for LinkedIn (posts, hooks, DMs, bios, carousels, content calendars), running on Claude. The interesting part isn't the product, it's the process: the app is largely AI-written, and I've been treating agents like a dev team rather than autocomplete.

Real numbers, because vanity metrics help no one:
- Users: 3
- Email signups: 1
- Revenue: $0 so far
- Time to first shippable version: fast (that's the whole point of the experiment)

What worked:
- Getting to a live product solo was genuinely achievable. Building was never the bottleneck.
- Shipping 8 free, no-signup tools as a "try before anything" layer felt right.

What I underestimated (the classic trap):
- Distribution. Building was easy; getting the first 10 real users is the actual hard problem, and no agent fixed that for me.
- Deciding what NOT to build. Agents will happily build anything you ask, which makes scope discipline harder, not easier.

If you're doing the AI-agent-solo-founder thing too, I'd love to compare notes — especially on distribution, since that's clearly my weak spot. Free tools if you want to see the output quality: https://trispur.com/free-tools
```

---

### 1d. r/AI_Agents

**Promo rules:** Technical, agent-focused audience. Promo tolerated if there's a real agent/build angle. Low tolerance for marketing fluff.
**Angle:** The build process — using agents to build and run a SaaS — is the content. Product is the example.
**Owner must post. Login required.**

**Title:** Used AI agents as my "dev team" to build a full SaaS solo — what broke, what held up

**Body:**
```
Sharing a build report for anyone using agents beyond snippets and into whole-app territory.

I built a content-generation SaaS (Spur AI — LinkedIn posts/hooks/DMs/carousels, running on Claude) where agents did the bulk of the implementation. Not "AI helped me code" — closer to "I directed agents and reviewed output."

What held up well:
- Agents were strong at self-contained tool endpoints: each generator (hook, headline, bio, calendar) is a fairly isolated prompt+I/O unit, which is ideal work to hand off.
- Iterating on the actual generation prompts with a model that also reviews them created a decent tight loop.

What broke / needed a human:
- Cross-cutting state and consistency across the app — agents lose the thread on architecture-level decisions. That's where I had to own it.
- Prompt quality control: the difference between "usable LinkedIn post" and "AI slop" is almost entirely prompt engineering + eval, and that judgment doesn't come free from the agent.
- Distribution is 100% still on me. No agent gets you users.

Current state is honest: it's live, 3 users, 1 signup. Early. You can poke the actual outputs with no signup here if you want to judge the generation quality: https://trispur.com/free-tools

Curious how others are drawing the line on what to delegate to agents vs. keep human — especially for anything touching architecture or output quality.
```

---

### 1e. r/artificial

**Promo rules:** Discussion sub, not a promo board. Direct product drops get removed. Frame as a discussion/observation with the tool as a concrete reference.
**Angle:** Observation on why AI-generated LinkedIn content reads as slop, and what it took to fix it.
**Owner must post. Login required.**

**Title:** Why does AI-generated LinkedIn content all sound identical, and can prompt design actually fix it?

**Body:**
```
Something I keep running into: nearly every AI-written LinkedIn post has the same fingerprint — the one-line hook, the "Here's the thing:", the emoji bullets, the fake-humble ending. Different tools, different models, same sludge.

I've been building content-generation tools (on Claude) and spent most of the effort specifically trying to break that pattern, and my rough conclusion is that the slop comes less from the model and more from lazy prompting: generic instructions produce generic-average output, because average LinkedIn content IS that template.

Things that measurably reduced the sameness in my testing:
- Constraining structure away from the "hook / list / CTA" skeleton
- Feeding real specifics instead of letting the model invent filler
- Explicitly banning the tell-tale phrases and emoji-bullet format

If anyone wants to stress-test whether it actually reads less robotic, the generators are free and need no signup: https://trispur.com/free-tools — genuinely interested in counter-examples where it still falls into the pattern, because that's the failure mode I care about.

Broader question for the sub: is "AI content slop" a model limitation or purely a prompting/eval problem? My money is on the latter but I'd like to be argued out of it.
```

---

### 1f. r/ChatGPT (tool-share where allowed)

**Promo rules:** Tool shares are allowed on designated days/flairs only — check current rules; many share posts require a flair and no affiliate/paywall-first links. Free, no-signup access is your friend here.
**Angle:** "Free no-signup tools you can try" — lead with the free layer, mention it's Claude-powered.
**Owner must post. Login required. NOTE: confirm the sub currently allows tool-share posts and use the correct flair — otherwise skip this sub.**

**Title:** [Tool] 8 free AI content tools, no signup — hook writer, bio writer, headline generator (Claude-powered)

**Body:**
```
Made a set of free content generators and put them behind zero signup so people can just use them: https://trispur.com/free-tools

What's in there right now:
- LinkedIn hook generator
- Headline writer
- Bio writer
- DM/outreach writer
- Content calendar
- Carousel outline
- and a couple more

They run on Anthropic's Claude. No account, no email wall — you land, you generate, you leave. There's a paid product behind it, but the free tools are genuinely usable on their own and I'd rather people try the output than take my word for it.

Sharing because "no signup to try" is rarer than it should be. Feedback welcome, especially if the output still reads too generic — that's what I'm trying to kill.
```

---

### 1g. r/LocalLLaMA (only if a genuine angle exists)

**Promo rules:** Highly technical, local-model-focused, very anti-marketing. A cloud (Claude) SaaS is off-topic and will be downvoted as promo.
**Verdict: SKIP as a promo target.** There is no honest local-LLM angle — Spur AI is a hosted Claude product, not local. Posting a cloud SaaS here would be off-topic and rightly downvoted.
**Only-if-genuine alternative (participation, not promo):** Contribute to an existing discussion about output quality / prompt design, and only mention your work if directly relevant and asked. Do NOT make a standalone promo post here.

*Optional comment you could leave in a relevant "why does AI writing sound generic" thread (no link unless asked):*
```
Been fighting the same "everything sounds like a LinkedIn template" problem building content tools. Found it's mostly prompting/eval, not model choice — constraining away from the hook/list/CTA skeleton and banning the tell-tale phrases did more than swapping models. Happy to share the specific prompt constraints if useful.
```

---

### 1h. r/Entrepreneur (value-first, no direct promo)

**Promo rules:** Strict — direct promotion and links are removed. Value-first text posts only. No product name-drop that reads as an ad.
**Angle:** A lessons post about solo-founding with AI agents and hitting the distribution wall. No link, no hard product pitch.
**Owner must post. Login required. Do NOT include the URL in the body here.**

**Title:** I built a whole product mostly with AI agents in weeks. The building was the easy part — here's the wall I hit.

**Body:**
```
Quick field report for anyone tempted by the "one person + AI agents = a company" idea, because there's a lesson in it that cost me a real reality check.

I set out to build a SaaS largely with AI agents doing the implementation. And it worked — I got a live, functional product far faster than I could have alone. Building genuinely stopped being the bottleneck.

Then reality: I launched, and I have 3 users. Not 3,000. Three. One email signup. Zero revenue so far.

The lesson isn't "AI can't build products" — it clearly can. The lesson is that building was never the hard part, and I let the ease of building trick me into thinking I was making progress. All the real work is on the other side:

1. Distribution. No agent gets you your first 10 users. That's cold, unglamorous, human outreach and showing up in communities.
2. Deciding what NOT to build. When agents will build anything you ask instantly, scope discipline gets harder, not easier. It's easy to keep adding features instead of getting customers.
3. Proof that anyone wants it. A polished product with no users is just an expensive opinion.

If you're going down the AI-agent-founder path: front-load distribution from day one, not after you ship. Build less, talk to more people. I'm learning this the expensive way so you don't have to.

Happy to answer anything about the agent-driven build process in the comments.
```
*(If someone asks what you built, you may share the link in a reply — not in the post.)*

---

## 2. Show HN (Hacker News)

**Promo rules:** "Show HN" is for something people can try. Title must start with "Show HN:". Plain, factual, no marketing adjectives ("blazing", "revolutionary" = instant flag). Be honest, respond to every comment, expect blunt feedback. First-person, no hype.
**Owner must post. Login required (HN account).**

**Title:** Show HN: Spur AI – AI content tools for LinkedIn, built on Claude (8 free, no signup)

**Body:**
```
Spur AI generates LinkedIn content — posts, hooks, DMs, headlines, bios, content calendars, and carousels. It runs on Anthropic's Claude.

Eight of the tools are free with no signup: https://trispur.com/free-tools — you can generate output and judge it before deciding whether anything here is worth paying for. There's a paid layer ($29 one-time pack, and monthly plans) but the free tools are usable on their own.

Two honest disclosures, since HN appreciates them:

1. Most of this app was built with AI agents. I'm a solo builder and treated agents as the dev team, reviewing and directing rather than typing most of the code. Happy to talk about where that worked (isolated tool endpoints) and where it didn't (architecture-level consistency, and the prompt-engineering/eval work needed to keep output from reading like generic AI slop).

2. Traction is near zero: 3 users, 1 email signup. I'm posting at the "is this useful to anyone" stage, not the success stage.

The problem I was actually trying to solve is that most AI writing tools produce the same templated LinkedIn sludge. Most of my effort went into prompt design to break that pattern rather than into the model itself. I'd genuinely value feedback on whether the output reads less generic than the usual, and where it still falls short.
```

---

## 3. Indie Hackers — Building in Public

**Promo rules:** IH rewards transparency and real numbers. Milestone/lesson posts do well. Login required (IH account).
**Owner must post. Login required.**

**Title:** Building in public: I let AI agents build most of my SaaS. Live now, 3 users, $0 — here are the real numbers and lessons.

**Body:**
```
Committing to building this one in public, starting from the least impressive possible starting line.

The product: Spur AI (https://trispur.com) — an AI content engine for LinkedIn: posts, hooks, DMs, headlines, bios, content calendars, carousels. Runs on Anthropic's Claude. There are 8 free tools with no signup, then a $29 one-time pack and monthly plans ($19 Solo / $149 Pro / $449 Agency) plus a done-for-you service.

The experiment: how far can one person get with AI agents doing most of the actual building?

The real numbers today (no rounding up):
- Users: 3
- Email signups: 1
- Revenue: $0
- Paying customers: 0
- Built by: mostly AI agents, directed and reviewed by me

What the AI-agent approach got me:
- A live, functional multi-tool product, solo, fast. Building genuinely was not the bottleneck.
- A clean "try before commit" layer (the 8 free no-signup tools) that I could ship without a lot of hand-coding.

Where it left me exposed:
- Distribution is entirely unsolved and entirely on me. Agents build; they don't acquire users.
- Output quality is a human problem. The gap between "publishable post" and "AI slop" is prompt design and evaluation, and that judgment is mine to own.
- Scope discipline is harder when agents can build anything instantly. I over-built and under-distributed.

The plan from here (and what I'll report back on):
1. Get from 3 users to 10 real, engaged ones — through communities and direct conversation, not ads.
2. Get the first dollar. One-time $29 pack is my hypothesis for lowest-friction first purchase.
3. Publish the distribution learnings here, win or lose.

If you're also doing the solo-founder-with-agents thing, I'd love to trade notes — especially from anyone who's already cracked early distribution. That's my weak spot and I'm not going to pretend otherwise.
```

---

## 4. Brand Social Posts (@trispur X/Twitter + Spur AI LinkedIn COMPANY page)

> **All from BRAND channels only — never the founder's personal account.** Owner must post; login to the brand @trispur and the Spur AI company page required.

### Post A — X/Twitter (@trispur) — build-in-public hook
```
We built most of Spur AI with AI agents.

Result so far: a live product, 8 free tools with no signup... and 3 users. 😅

Building was the easy part. Distribution is the real boss fight.

Try the free tools, tell us if the output reads like AI slop:
https://trispur.com/free-tools
```

### Post B — X/Twitter (@trispur) — free tools value
```
8 AI content tools. No signup. No email wall.

Hook writer, headline writer, bio writer, DM writer, content calendar, carousel outline — all running on Claude.

Land, generate, leave. That's it.
https://trispur.com/free-tools
```

### Post C — LinkedIn COMPANY page (Spur AI) — honest builder story
```
An honest introduction from a very small company.

Spur AI is an AI content engine for LinkedIn — posts, hooks, DMs, bios, carousels, content calendars — built on Anthropic's Claude.

Two things we'll be upfront about:

1) Most of the product was built with AI agents. We're tiny and we lean on AI to build fast.

2) We're at the very beginning — a handful of users and a lot to prove.

We'd rather earn attention with useful free tools than hype. So 8 of them are free with no signup. Try the output, judge it yourself, tell us where it falls short:

https://trispur.com/free-tools
```

*(Note: Post C is written for the COMPANY page voice — "we", brand identity — and does not assume any personal-profile posting.)*

---

## 5. AI / Indie Discord, Slack & Newsletter Shortlist

> **All require the OWNER to join and post under a builder identity. Login/account required for each.** Read each community's #rules or self-promo policy first — most have a dedicated #self-promo, #launch, #building-in-public, or #i-made-this channel and will ban promo posted elsewhere. Participate before promoting.

1. **Indie Hackers community (site + any active Discord/Slack)** — Core home for the transparent building-in-public + AI-agent-founder story. Use the #1e IH post; engage in threads about AI tooling and distribution.

2. **r/SideProject's associated communities / "SideProjectors"-type Discords** — Same builder audience as the Reddit post; good for "share your project" channels with a short version of the 1a post.

3. **WIP.co (Marc Köhlbrugge's maker community)** — Ship-log culture; perfect for daily "built X with agents today, still 3 users" transparency updates. Post progress, not pitches.

4. **Anthropic / Claude Developer Discord** — Genuine on-topic angle: a real product built on Claude. Share in the appropriate #showcase/#built-with-claude style channel; lead with the build story and prompt-quality lessons, not the pricing.

5. **Latent Space (Discord + newsletter, swyx)** — AI-engineer audience that appreciates honest agent-build post-mortems. Best as a "what broke building a whole SaaS with agents" discussion, not a product drop. Newsletter tip-line worth an email to lapoldeonwill@gmail.com-style intro.

6. **Ben's Bites (newsletter + community)** — AI-tool-hungry audience; the free no-signup tools angle fits their "cool AI thing to try" format. Submit via their community/tip channels, not as spam.

7. **The Rundown AI / There's An AI For That-style directories & communities** — Directory listing + community share for the free tools. Low effort, decent discovery; submit the free-tools URL.

8. **Makerlog / #buildinpublic on X + associated Discords** — Ongoing accountability + reach for the @trispur brand account; recycle Posts A/B and daily progress notes here.

> **Suggested sequencing:** Start where honesty is rewarded and rules are loosest (r/SideProject, Indie Hackers, WIP, Show HN). Save stricter subs (r/Entrepreneur, r/artificial, r/ChatGPT) for value-first posts once you have a track record of engaging. Never blast all channels the same day — space them out, reply to everyone, and update each with real numbers as they change.

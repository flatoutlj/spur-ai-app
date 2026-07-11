# Spur AI — Founder OS

**AI-powered LinkedIn content engine for B2B consultants, coaches, and agency owners.**
Live at: [trispur.com](https://trispur.com)

Goal: $1,000 MRR in 30 days.

---

## What Was Built (Session Summary)

### Product — trispur.com

A full-stack SaaS app that generates LinkedIn posts, topic ideas, hooks, and content calendars using Claude AI.

**Tech stack:**
- Next.js (App Router, v16) — hosted on Vercel
- Supabase — auth, database, row-level security
- Anthropic Claude Haiku — AI content generation
- Stripe — payments (keys pending)
- Resend — transactional email (key pending)
- Telegram bot — remote founder communication

---

## Pages & Features

| Route | What it does |
|---|---|
| `trispur.com` | Landing page with email capture |
| `trispur.com/signup` | New user registration |
| `trispur.com/login` | Sign in |
| `trispur.com/onboarding` | 4-step profile wizard (niche, tone, audience, goals) |
| `trispur.com/dashboard` | Main app — post generator, topic ideas, calendar, history, hooks, analytics |
| `trispur.com/admin` | CEO dashboard (owner-only, lapoldeonwill@gmail.com) |
| `trispur.com/pricing` | Pricing page |
| `trispur.com/privacy` | Privacy policy |
| `trispur.com/terms` | Terms of service |

---

## CEO Dashboard (`/admin`)

Mobile-accessible from any device. Shows:
- MRR (goal: $1,000)
- Total users (goal: 100)
- Posts generated (goal: 500)
- Email leads (goal: 200)
- Your action items with priority levels
- Distribution channel status
- Quick links to Supabase, Vercel, Cloudflare, GitHub

**Login:** `lapoldeonwill@gmail.com` / `oRJYExX2deCeKa`

---

## Telegram Bot — @spurai_os_bot

Remote control from your phone. Commands:
- `/start` — activate + get your chat ID
- `/stats` — live metrics
- `/tasks` — your action items
- `/mrr` — revenue status
- `/help` — all commands

All your messages also forward to ntfy `spur-ai-lapoldeon` topic so Claude Code can see them.

---

## Notifications

| Channel | Topic | Purpose |
|---|---|---|
| ntfy | `spur-ai-founder-os` | Claude → you (build updates, alerts) |
| ntfy | `spur-ai-lapoldeon` | You → Claude (via Telegram relay) |
| Telegram | `@spurai_os_bot` | Remote commands from phone |

---

## Infrastructure

| Service | Project | Status |
|---|---|---|
| Vercel | spur-ai (Hobby) | Live — auto-deploys from GitHub main |
| Supabase | spur-ai | Live — DB + auth running |
| Cloudflare | trispur.com | Live — DNS pointing to Vercel |
| GitHub | flatoutlj/spur-ai-app | Connected to Vercel |
| Stripe | — | Pending — need account + keys |
| Resend | — | Pending — need account + key |

---

## Environment Variables

Set in Vercel project settings AND `.env.local` locally:

```
NEXT_PUBLIC_SUPABASE_URL=https://ykpiwudgcoohzurjorhe.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_...
SUPABASE_SERVICE_ROLE_KEY=sb_secret_...
ANTHROPIC_API_KEY=sk-ant-...
NEXT_PUBLIC_APP_URL=https://trispur.com
TELEGRAM_BOT_TOKEN=8986133305:AAGu93-...
TELEGRAM_OWNER_CHAT_ID=         ← add after /start on @spurai_os_bot
STRIPE_SECRET_KEY=              ← pending
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=  ← pending
STRIPE_WEBHOOK_SECRET=          ← pending
STRIPE_PRICE_STARTER_MONTHLY=   ← pending
STRIPE_PRICE_GROWTH_MONTHLY=    ← pending
STRIPE_PRICE_AGENCY_MONTHLY=    ← pending
RESEND_API_KEY=                 ← pending
```

---

## Database (Supabase)

Tables:
- `profiles` — user profile, niche, tone, audience, goals. RLS enabled.
- `posts` — generated LinkedIn posts. RLS enabled.
- `email_captures` — landing page email signups. RLS enabled with anon insert policy.

Triggers:
- `handle_new_user` — auto-creates profile row on auth signup
- `handle_updated_at` — auto-updates `updated_at` on row changes

---

## Pricing

| Plan | Price | Target |
|---|---|---|
| Starter | $149/mo | Solo consultants |
| Growth | $249/mo | Coaches + small agencies |
| Agency | $499/mo | 5+ person firms |

**To hit $1,000 MRR:** 7 Starter customers OR 4 Growth customers.

---

## Distribution Assets

All ready-to-use files in `/Users/lapoldeonwilliams/spur-ai/docs/`:

| File | Contents |
|---|---|
| `LINKEDIN_30_DAY_CALENDAR.md` | 30 full copy-paste LinkedIn posts |
| `DISTRIBUTION_ASSETS.md` | Cold DM templates, LinkedIn ads, Meta ads, cold email sequence, Reddit templates, 30-day revenue sprint plan |
| `30_DAY_PLAN.md` | Overall 30-day execution plan |
| `MARKET_RESEARCH.md` | Market research and positioning |

---

## Your Remaining Action Items

| Priority | Task | How |
|---|---|---|
| HIGH | Message @spurai_os_bot with /start | Activates Telegram bot + gets your chat ID |
| HIGH | Set up Stripe | stripe.com → get keys → add to Vercel env vars |
| HIGH | Post Day 1 LinkedIn content | See `LINKEDIN_30_DAY_CALENDAR.md` |
| MED | Set up Resend email | resend.com → get API key → add to Vercel |
| MED | Send 10 LinkedIn cold DMs | See cold DM templates in `DISTRIBUTION_ASSETS.md` |
| LOW | Set up Meta Ads account | business.facebook.com |

---

## Local Development

```bash
npm install
npm run dev
# App runs at http://localhost:3000
```

Requires `.env.local` with all env vars above.

---

## Key Links

- **App:** https://trispur.com
- **CEO Dashboard:** https://trispur.com/admin
- **GitHub:** https://github.com/flatoutlj/spur-ai-app
- **Vercel:** https://vercel.com/spur-ai/spur-ai-app
- **Supabase:** https://supabase.com/dashboard/project/ykpiwudgcoohzurjorhe
- **Cloudflare:** https://dash.cloudflare.com

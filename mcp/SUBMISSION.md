# Directory submission copy — Spur AI MCP server

Ready-to-paste copy for MCP directories. **Nothing here has been submitted.** Owner submits manually.

Canonical facts (keep these consistent everywhere):

| | |
|---|---|
| Server name | Spur AI |
| Registry name | `io.github.flatoutlj/spur-ai` |
| npm package | `spur-mcp-server` (**not published yet** — see note below) |
| Remote URL | `https://www.trispur.com/api/mcp` (live) |
| Repo | https://github.com/flatoutlj/spur-ai-app (server in `/mcp`) |
| Docs | https://www.trispur.com/developers |
| Contact | hello@trispur.com |
| License | MIT |
| Transport | stdio (npm) **and** Streamable HTTP (remote URL) |
| Tools | `generate_linkedin_post` |
| Required env | `SPUR_API_KEY` |

> **Submit using the remote URL, not the npm package.** `spur-mcp-server` has
> never been published to npm, and the official registry verifies that the
> package actually exists before it will list you — so any npm-based submission
> fails today. The remote endpoint at `https://www.trispur.com/api/mcp` is live
> and verified working, and the registry accepts it on the strength of DNS
> ownership of trispur.com instead. Smithery likewise wants a URL rather than a
> package. Publishing to npm remains a nice-to-have for `npx` users; it is no
> longer a prerequisite for getting listed.

---

## 1. mcpservers.org/submit

**Server Name**

```
Spur AI
```

**Short Description**

```
Generate ready-to-publish LinkedIn posts for a specific B2B audience — consulting, agency, coaching, SaaS, recruiting, finance, or any custom niche — in five formats (story, contrarian, how-to, results, list). Requires a free Spur API key.
```

**Link (GitHub or docs)**

```
https://github.com/flatoutlj/spur-ai-app/tree/main/mcp
```

(Docs alternative, if the form prefers a docs URL: `https://www.trispur.com/developers`)

**Category**

```
Marketing
```

Second choice if Marketing is unavailable: `Productivity`.

**Contact Email**

```
hello@trispur.com
```

---

## 2. Reusable 50-word description

```
Spur AI turns your agent into a LinkedIn ghostwriter. One tool —
generate_linkedin_post — takes an audience (consulting, agency, coach, SaaS,
recruiter, finance, or any custom niche) and a format (story, contrarian,
how-to, results, list) and returns a post written for B2B buyers. Needs a Spur
API key.
```

(50 words exactly by the usual count; trim the final sentence if a directory caps at 40.)

---

## 3. Reusable 200-word description

```
Spur AI is a LinkedIn content engine for B2B consultants, coaches and agency
owners. This MCP server exposes it to any MCP-compatible client — Claude
Desktop, Claude Code, Cursor — so your agent can draft publish-ready posts
without leaving the conversation.

It ships one tool, generate_linkedin_post. You give it a niche: one of the six
presets (consulting, agency, coach, saas, recruiter, finance) or any custom
audience string such as "B2B cybersecurity founders". You optionally give it a
post type — story (the default), contrarian, howto, results or list — and any
context you want worked in: the topic, the angle, a result to cite. It returns
the post text, calibrated for a business-buyer audience rather than generic
engagement bait.

Setup is a single config block. Point your client at the hosted endpoint
https://www.trispur.com/api/mcp and send your key in an x-api-key header — no
install, no Node, nothing to run locally. Keys are free at
trispur.com/developers. If you prefer a local process, the same server runs over
stdio via npx spur-mcp-server on Node 18 or newer, reading SPUR_API_KEY from the
environment.

The same generation endpoint is available over plain HTTP at
POST /api/v1/generate-post if you would rather skip MCP entirely.

Source: github.com/flatoutlj/spur-ai-app (/mcp). MIT licensed.
Docs: https://www.trispur.com/developers
```

---

## 4. One-liners (for directories with a tight character cap)

- 120 chars: `Generate publish-ready LinkedIn posts for any B2B audience, straight from your MCP client. Powered by Spur AI.`
- 80 chars: `LinkedIn post generation for B2B audiences, as an MCP tool. Powered by Spur AI.`
- Tagline: `Your agent, but it can write LinkedIn posts that don't sound like a robot.`

## 5. Suggested tags / keywords

`mcp` · `linkedin` · `content-generation` · `copywriting` · `marketing` · `b2b`
· `social-media` · `claude` · `ai-agent` · `spur`

## 6. Where to submit — verified 24 Aug 2026

Checked live. Anything not listed here was either dead, archived, or had gone paid.

| Target | Free? | Needs | Notes |
|---|---|---|---|
| **Official MCP Registry** | Yes | GitHub OAuth or DNS | Submit as a **remote** server using `mcp/server.json`. Other directories poll this registry, so one publish propagates. Best single action. |
| **punkpeye/awesome-mcp-servers** | Yes | GitHub account | 92.7k stars and genuinely active — 1,142 PRs merged in the last 90 days. Add to the **Marketing** section, alphabetical by `owner/repo`. Their CONTRIBUTING.md has an agent fast-track: put `🤖🤖🤖` in the PR title. |
| **mcpservers.org/submit** | Yes | Nothing — email field only | Plain form, no account. Section 1 above is written for exactly this form. |
| **Glama** | Yes | GitHub OAuth, Dockerfile | Auto-indexes from the repo. 77k servers, so expect burial. |
| **Smithery** | Yes to list | Account | Takes the remote URL — now possible thanks to `/api/mcp`. |
| **steven2358/awesome-generative-ai** | Yes | GitHub account | 12.5k stars, active, selective. Target the `Discoveries` section. |

**Do not bother with:**

- `mahseema/awesome-ai-tools` — **dead**. Zero PRs merged in 90 days, 1,132 open, last pushed 2025-12-31. The existing PR #2022 will not be merged; don't wait on it.
- `appcypher/awesome-mcp-servers` — archived.
- `wong2/awesome-mcp-servers` — generated, not PR-driven. Use mcpservers.org instead.
- **PulseMCP** — submissions paused; it auto-ingests from the official registry anyway.
- **mcp.so** — only a $39 paid path is visible.
- Generic AI-tool directories (Futurepedia, There's An AI For That, Toolify) — all now paid, and free listings there send single-digit traffic with no purchase intent.

**Set expectations honestly:** these listings are worth doing for agent discovery
and backlinks. None of them will move the traffic number on their own, and the
registry already carries 49 servers matching "linkedin", including at least one
direct competitor.

# Directory submission copy — Spur AI MCP server

Ready-to-paste copy for MCP directories. **Nothing here has been submitted.** Owner submits manually.

Canonical facts (keep these consistent everywhere):

| | |
|---|---|
| Server name | Spur AI |
| Registry name | `io.github.flatoutlj/spur-ai` |
| npm package | `spur-mcp-server` |
| Repo | https://github.com/flatoutlj/spur-ai-app (server in `/mcp`) |
| Docs | https://www.trispur.com/developers |
| Contact | hello@trispur.com |
| License | MIT |
| Transport | stdio |
| Tools | `generate_linkedin_post` |
| Required env | `SPUR_API_KEY` |

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

Setup is a single config block. The server runs over stdio via
npx spur-mcp-server and reads one required environment variable, SPUR_API_KEY,
which you get free at trispur.com/developers. SPUR_API_BASE is available for
self-hosted or staging endpoints. Node 18 or newer.

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

## 6. Other directories worth the same copy

Reuse sections 2–5 verbatim for: the official MCP Registry (handled by
`server.json`, no form), mcp.so, Glama, PulseMCP, Smithery, awesome-mcp-servers
(PR to the list), and Cursor's directory. Most want name + one-liner + repo
link + category, which is exactly section 1.

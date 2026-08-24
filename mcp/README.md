# Spur AI — MCP server

Give your AI agent the ability to generate LinkedIn content with [Spur AI](https://www.trispur.com) (Claude-powered).

One tool, one job: hand it an audience and a post format, get back a post that reads like a person wrote it — calibrated for B2B consultants, coaches and agency owners.

Registry name: `io.github.flatoutlj/spur-ai` · npm: [`spur-mcp-server`](https://www.npmjs.com/package/spur-mcp-server)

## Install

You need a Spur API key — grab one at [trispur.com/developers](https://www.trispur.com/developers).

```bash
npx spur-mcp-server        # no install; this is what MCP clients run
# or
npm i -g spur-mcp-server
```

Running it by hand (it speaks stdio, so it will just sit there waiting for a client):

```bash
export SPUR_API_KEY=spur_sk_...
npx spur-mcp-server
```

## Register with your MCP client

Paste this into your client's MCP config — `~/Library/Application Support/Claude/claude_desktop_config.json` for Claude Desktop, `.mcp.json` or `~/.claude.json` for Claude Code, `.cursor/mcp.json` for Cursor:

```json
{
  "mcpServers": {
    "spur-ai": {
      "command": "npx",
      "args": ["-y", "spur-mcp-server"],
      "env": { "SPUR_API_KEY": "spur_sk_..." }
    }
  }
}
```

Or, from the Claude Code CLI:

```bash
claude mcp add spur-ai --env SPUR_API_KEY=spur_sk_... -- npx -y spur-mcp-server
```

Restart the client. `spur-ai` should show up with one tool.

## Environment variables

| var | required | notes |
|-----|----------|-------|
| `SPUR_API_KEY` | yes | Your Spur key (`spur_sk_...`). The server exits immediately without it. |
| `SPUR_API_BASE` | no | API base URL. Defaults to `https://www.trispur.com`. Only useful for self-hosted or staging. |

## Tools

### `generate_linkedin_post`

Generate a ready-to-publish LinkedIn post for a specific professional audience.

| arg | required | notes |
|-----|----------|-------|
| `niche` | yes | `consulting`, `agency`, `coach`, `saas`, `recruiter`, `finance`, or any custom audience string |
| `type` | no | `story` (default), `contrarian`, `howto`, `results`, `list` |
| `context` | no | topic / angle / details to include |

Returns the post text.

Example prompt to your agent:

> Use spur-ai to write a contrarian LinkedIn post for SaaS founders about pricing.

## Direct HTTP (no MCP)

```bash
curl -X POST https://www.trispur.com/api/v1/generate-post \
  -H "x-api-key: spur_sk_..." \
  -H "Content-Type: application/json" \
  -d '{"niche":"saas","type":"contrarian","context":"pricing"}'
```

## Troubleshooting

- **`Missing SPUR_API_KEY`** — the key isn't reaching the process. Put it in the `env` block of the MCP config, not your shell profile; most clients don't inherit your shell.
- **`Spur API error (401)`** — key is wrong, revoked, or from a different environment. Reissue at [trispur.com/developers](https://www.trispur.com/developers).
- **`Spur API error (429)`** — you're over your plan's rate limit.
- **Server not listed in the client** — restart the client fully; most read MCP config only at launch.

Requires Node 18+.

Full docs: https://www.trispur.com/developers

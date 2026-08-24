# Spur AI — MCP server

Give your AI agent the ability to generate LinkedIn content with [Spur AI](https://www.trispur.com) (Claude-powered).

## Install

```bash
npm i @modelcontextprotocol/sdk
export SPUR_API_KEY=spur_sk_...   # get one at https://www.trispur.com/developers
node spur-mcp-server.mjs
```

## Register with Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "spur-ai": {
      "command": "node",
      "args": ["/absolute/path/to/spur-mcp-server.mjs"],
      "env": { "SPUR_API_KEY": "spur_sk_..." }
    }
  }
}
```

## Register with Claude Code

```bash
claude mcp add spur-ai --env SPUR_API_KEY=spur_sk_... -- node /absolute/path/to/spur-mcp-server.mjs
```

## Tools

### `generate_linkedin_post`

| arg | required | notes |
|-----|----------|-------|
| `niche` | yes | `consulting`, `agency`, `coach`, `saas`, `recruiter`, `finance`, or any custom audience string |
| `type` | no | `story` (default), `contrarian`, `howto`, `results`, `list` |
| `context` | no | topic / angle / details to include |

Example prompt to your agent:

> Use spur-ai to write a contrarian LinkedIn post for SaaS founders about pricing.

## Direct HTTP (no MCP)

```bash
curl -X POST https://www.trispur.com/api/v1/generate-post \
  -H "x-api-key: spur_sk_..." \
  -H "Content-Type: application/json" \
  -d '{"niche":"saas","type":"contrarian","context":"pricing"}'
```

Full docs: https://www.trispur.com/developers

#!/usr/bin/env node
/**
 * Spur AI — MCP server
 *
 * Exposes Spur's LinkedIn content generators as MCP tools so any MCP-compatible
 * AI agent (Claude Desktop, Claude Code, etc.) can call them directly.
 *
 * Setup:
 *   npm i @modelcontextprotocol/sdk
 *   export SPUR_API_KEY=spur_sk_...        # get one at https://trispur.com/developers
 *   node spur-mcp-server.mjs
 *
 * Then register it with your agent (see mcp/README.md).
 */
import { Server } from "@modelcontextprotocol/sdk/server/index.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js"

const API_BASE = process.env.SPUR_API_BASE || "https://trispur.com"
const API_KEY = process.env.SPUR_API_KEY

if (!API_KEY) {
  console.error("[spur-mcp] Missing SPUR_API_KEY. Get one at https://trispur.com/developers")
  process.exit(1)
}

const server = new Server(
  { name: "spur-ai", version: "1.0.0" },
  { capabilities: { tools: {} } }
)

const TOOLS = [
  {
    name: "generate_linkedin_post",
    description:
      "Generate a ready-to-publish LinkedIn post for a specific professional audience using Spur AI (Claude-powered). Returns post text calibrated for a business-buyer audience.",
    inputSchema: {
      type: "object",
      properties: {
        niche: {
          type: "string",
          description:
            "Target audience. Presets: consulting, agency, coach, saas, recruiter, finance. Or any custom audience string (e.g. 'B2B cybersecurity founders').",
        },
        type: {
          type: "string",
          enum: ["story", "contrarian", "howto", "results", "list"],
          description: "Post format. Defaults to 'story'.",
        },
        context: {
          type: "string",
          description: "Optional extra context: the topic, angle, or details to include.",
        },
      },
      required: ["niche"],
    },
  },
]

server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: TOOLS }))

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params
  if (name !== "generate_linkedin_post") {
    return { content: [{ type: "text", text: `Unknown tool: ${name}` }], isError: true }
  }
  try {
    const res = await fetch(`${API_BASE}/api/v1/generate-post`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": API_KEY },
      body: JSON.stringify({
        niche: args?.niche,
        type: args?.type || "story",
        context: args?.context,
      }),
    })
    const data = await res.json()
    if (!res.ok) {
      return {
        content: [{ type: "text", text: `Spur API error (${res.status}): ${data.error || "unknown"}` }],
        isError: true,
      }
    }
    return { content: [{ type: "text", text: data.post }] }
  } catch (err) {
    return { content: [{ type: "text", text: `Request failed: ${err.message}` }], isError: true }
  }
})

const transport = new StdioServerTransport()
await server.connect(transport)
console.error("[spur-mcp] Spur AI MCP server running on stdio")

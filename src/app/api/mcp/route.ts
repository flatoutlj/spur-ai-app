import { NextRequest, NextResponse } from "next/server"
import { rateLimit, checkPayloadSize } from "@/lib/rateLimit"
import { validateApiKey, keyFingerprint } from "@/lib/apiKeys"
import { generateLinkedInPost, POST_TYPES } from "@/lib/linkedinPost"

/**
 * Remote MCP endpoint (Streamable HTTP transport).
 *
 * Exists so Spur can be listed in the official MCP registry and in directories
 * like Smithery that take a URL rather than a package. The stdio server in
 * /mcp requires publishing to npm; this does not — the registry verifies
 * ownership of trispur.com by DNS instead.
 *
 * JSON-RPC 2.0 is hand-rolled rather than pulling in @modelcontextprotocol/sdk:
 * this is one stateless tool over plain request/response, and the SDK's
 * transports are built around Node streams rather than the Web Request/Response
 * objects a route handler receives.
 *
 * Auth matches /api/v1: `x-api-key: spur_sk_...` or a bearer token, so remote
 * MCP access can't run up unbounded Anthropic spend.
 */

const PROTOCOL_VERSION = "2025-06-18"

const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, x-api-key, MCP-Protocol-Version",
}

const TOOLS = [
  {
    name: "generate_linkedin_post",
    description:
      "Generate a ready-to-publish LinkedIn post for a specific professional audience using Spur AI. Returns post text calibrated for a business-buyer audience.",
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
          enum: POST_TYPES,
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

type JsonRpcId = string | number | null

function result(id: JsonRpcId, value: unknown) {
  return NextResponse.json({ jsonrpc: "2.0", id, result: value }, { headers: CORS_HEADERS })
}

function rpcError(id: JsonRpcId, code: number, message: string, status = 200) {
  return NextResponse.json(
    { jsonrpc: "2.0", id, error: { code, message } },
    { status, headers: CORS_HEADERS }
  )
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS })
}

/** Discovery convenience: a plain GET describes the endpoint rather than 405-ing. */
export async function GET() {
  return NextResponse.json(
    {
      name: "spur-ai",
      version: "1.0.0",
      transport: "streamable-http",
      protocolVersion: PROTOCOL_VERSION,
      tools: TOOLS.map((t) => t.name),
      authentication: "x-api-key or Authorization: Bearer — request one at https://www.trispur.com/developers",
      documentation: "https://www.trispur.com/developers",
    },
    { headers: CORS_HEADERS }
  )
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return rpcError(null, -32700, "Parse error: body must be JSON.", 400)
  }

  // Batch requests are permitted by JSON-RPC but not needed here; reject clearly.
  if (Array.isArray(body)) {
    return rpcError(null, -32600, "Batch requests are not supported.", 400)
  }
  if (!body || typeof body !== "object") {
    return rpcError(null, -32600, "Invalid Request.", 400)
  }

  const { method, id = null, params } = body as {
    method?: unknown
    id?: JsonRpcId
    params?: unknown
  }

  if (typeof method !== "string") {
    return rpcError(id, -32600, "Invalid Request: `method` must be a string.", 400)
  }

  // Notifications (no id) expect no response body.
  if (method.startsWith("notifications/")) {
    return new NextResponse(null, { status: 202, headers: CORS_HEADERS })
  }

  switch (method) {
    case "initialize":
      return result(id, {
        protocolVersion: PROTOCOL_VERSION,
        capabilities: { tools: { listChanged: false } },
        serverInfo: { name: "spur-ai", version: "1.0.0" },
        instructions:
          "Generates LinkedIn posts for B2B audiences. Requires a Spur API key from https://www.trispur.com/developers.",
      })

    case "ping":
      return result(id, {})

    case "tools/list":
      return result(id, { tools: TOOLS })

    case "tools/call":
      return handleToolCall(req, id, params)

    default:
      return rpcError(id, -32601, `Method not found: ${method}`)
  }
}

async function handleToolCall(req: NextRequest, id: JsonRpcId, params: unknown) {
  const { name, arguments: args } = (params ?? {}) as {
    name?: unknown
    arguments?: Record<string, unknown>
  }

  if (name !== "generate_linkedin_post") {
    return rpcError(id, -32602, `Unknown tool: ${String(name)}`)
  }

  // Auth is checked at call time, not on initialize/tools-list, so clients can
  // discover the tool before they hold a key.
  const key = validateApiKey(req)
  if (!key) {
    return toolError(id, "Invalid or missing API key. Get one at https://www.trispur.com/developers")
  }

  if (rateLimit(`mcp-post:${keyFingerprint(key)}`, 30, 60_000)) {
    return toolError(id, "Rate limit exceeded. Slow down.")
  }

  const niche = args?.niche
  if (!niche || typeof niche !== "string") {
    return toolError(id, "`niche` is required — e.g. consulting, agency, coach, saas, recruiter, finance.")
  }
  const type = typeof args?.type === "string" ? args.type : "story"
  const context = typeof args?.context === "string" ? args.context : undefined

  if (checkPayloadSize({ niche, type, context: context ?? "" }, { niche: 80, type: 30, context: 600 })) {
    return toolError(id, "Input too long.")
  }

  try {
    const post = await generateLinkedInPost(niche, type, context)
    return result(id, { content: [{ type: "text", text: post }] })
  } catch (err) {
    console.error("mcp generate-post error:", err)
    return toolError(id, "Generation failed upstream. Try again shortly.")
  }
}

/**
 * Tool failures are reported as a successful JSON-RPC result carrying
 * isError, per the MCP spec — protocol errors are for malformed requests, not
 * for a tool that ran and failed.
 */
function toolError(id: JsonRpcId, message: string) {
  return result(id, { content: [{ type: "text", text: message }], isError: true })
}

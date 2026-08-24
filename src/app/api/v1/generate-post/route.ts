import { NextRequest, NextResponse } from "next/server"
import Anthropic from "@anthropic-ai/sdk"
import { rateLimit, checkPayloadSize } from "@/lib/rateLimit"
import { validateApiKey, keyFingerprint } from "@/lib/apiKeys"

/**
 * Public v1 API: generate a LinkedIn post.
 *
 * Auth: `x-api-key: spur_sk_...` (or `Authorization: Bearer spur_sk_...`).
 * This is the surface AI agents / the Spur MCP server call. Keyed + rate-limited
 * so it can't run up unbounded Anthropic spend.
 */

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const NICHE_LABELS: Record<string, string> = {
  consulting: "management consultants",
  agency: "marketing/creative agency owners",
  coach: "business coaches",
  saas: "SaaS founders",
  recruiter: "executive recruiters",
  finance: "financial advisors",
}

const TYPE_PROMPTS: Record<string, string> = {
  story: "a personal story post that reveals a hard lesson learned, counterintuitive insight, or pivotal moment. Use short punchy sentences. Open with a surprising statement. End with a question that invites engagement.",
  contrarian: "a contrarian take post that challenges a widely-held belief in their industry. Be specific and bold. Start with 'Unpopular opinion:' or 'Hot take:' or similar. Back up the take with concrete reasoning.",
  howto: "a step-by-step how-to post with numbered steps or bullet points. Be extremely tactical and specific. Include real numbers, timeframes, and outcomes. The reader should be able to implement this immediately.",
  results: "a client results/case study post (anonymized). Lead with the result first, then explain the process. Make the numbers specific. End with what others can take away.",
  list: "a listicle post with 5-7 items. Each item should be surprising or counterintuitive. Use the format 'X things I wish I knew about [topic]' or similar. Short punchy items.",
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, x-api-key",
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS })
}

function json(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: CORS_HEADERS })
}

export async function POST(req: NextRequest) {
  try {
    const key = validateApiKey(req)
    if (!key) {
      return json(
        { error: "Invalid or missing API key. Get one at https://www.trispur.com/developers" },
        401
      )
    }

    // Per-key rate limit (protects Anthropic spend regardless of source IP).
    const limited = rateLimit(`v1-post:${keyFingerprint(key)}`, 30, 60_000)
    if (limited) return json({ error: "Rate limit exceeded. Slow down." }, 429)

    const body = await req.json().catch(() => null)
    if (!body || typeof body !== "object") {
      return json({ error: "Body must be JSON." }, 400)
    }
    const { niche, type = "story", context } = body as Record<string, unknown>

    if (!niche || typeof niche !== "string") {
      return json(
        {
          error: "`niche` is required.",
          hint: "Try one of: consulting, agency, coach, saas, recruiter, finance — or any custom audience string.",
        },
        400
      )
    }

    const tooBig = checkPayloadSize(
      { niche, type: String(type), context: context ? String(context) : "" },
      { niche: 80, type: 30, context: 600 }
    )
    if (tooBig) return json({ error: "Input too long." }, 413)

    const nicheLabel = NICHE_LABELS[niche] ?? niche
    const typePrompt = TYPE_PROMPTS[String(type)] ?? TYPE_PROMPTS.story

    const prompt = `You are a LinkedIn content expert who writes viral posts for ${nicheLabel}.

Write ${typePrompt}

Requirements:
- Write specifically for ${nicheLabel} — use their language, their problems, their wins
- 150-300 words, optimized for LinkedIn's algorithm
- Use line breaks liberally — no walls of text
- Strong hook in the first line (must stop the scroll)
- End with a thought-provoking question to drive comments
- NO hashtags (they look spammy)
- NO emojis at line starts (use arrows -> or dashes — instead)
- Write in first person
- Sound authentic and personal, not corporate${context ? `\n- Additional context: ${String(context)}` : ""}

Output ONLY the LinkedIn post text. No preamble, no explanation, no quotes around it.`

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 600,
      messages: [{ role: "user", content: prompt }],
    })

    const post = (message.content[0] as { text: string }).text.trim()

    return json({
      post,
      meta: { niche, type: String(type), model: "claude-haiku-4-5", provider: "anthropic" },
    })
  } catch (err) {
    console.error("v1 generate-post error:", err)
    return json({ error: "Generation failed." }, 500)
  }
}

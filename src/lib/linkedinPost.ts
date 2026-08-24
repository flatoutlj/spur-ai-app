import Anthropic from "@anthropic-ai/sdk"

/**
 * Shared LinkedIn post generation.
 *
 * Extracted so the public v1 REST endpoint and the remote MCP endpoint call one
 * implementation rather than keeping two copies of the prompt in sync.
 */

export const NICHE_LABELS: Record<string, string> = {
  consulting: "management consultants",
  agency: "marketing/creative agency owners",
  coach: "business coaches",
  saas: "SaaS founders",
  recruiter: "executive recruiters",
  finance: "financial advisors",
}

export const TYPE_PROMPTS: Record<string, string> = {
  story: "a personal story post that reveals a hard lesson learned, counterintuitive insight, or pivotal moment. Use short punchy sentences. Open with a surprising statement. End with a question that invites engagement.",
  contrarian: "a contrarian take post that challenges a widely-held belief in their industry. Be specific and bold. Start with 'Unpopular opinion:' or 'Hot take:' or similar. Back up the take with concrete reasoning.",
  howto: "a step-by-step how-to post with numbered steps or bullet points. Be extremely tactical and specific. Include real numbers, timeframes, and outcomes. The reader should be able to implement this immediately.",
  results: "a client results/case study post (anonymized). Lead with the result first, then explain the process. Make the numbers specific. End with what others can take away.",
  list: "a listicle post with 5-7 items. Each item should be surprising or counterintuitive. Use the format 'X things I wish I knew about [topic]' or similar. Short punchy items.",
}

export const POST_TYPES = Object.keys(TYPE_PROMPTS)

export const MODEL = "claude-haiku-4-5-20251001"

export function buildPrompt(niche: string, type: string, context?: string): string {
  const nicheLabel = NICHE_LABELS[niche] ?? niche
  const typePrompt = TYPE_PROMPTS[type] ?? TYPE_PROMPTS.story

  return `You are a LinkedIn content expert who writes viral posts for ${nicheLabel}.

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
- Sound authentic and personal, not corporate${context ? `\n- Additional context: ${context}` : ""}

Output ONLY the LinkedIn post text. No preamble, no explanation, no quotes around it.`
}

/** Generates the post text. Throws on upstream failure — callers map to their own error shape. */
export async function generateLinkedInPost(
  niche: string,
  type: string,
  context?: string
): Promise<string> {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  const message = await client.messages.create({
    model: MODEL,
    max_tokens: 600,
    messages: [{ role: "user", content: buildPrompt(niche, type, context) }],
  })
  const block = message.content[0]
  if (block.type !== "text") throw new Error("Unexpected non-text response from model")
  return block.text.trim()
}

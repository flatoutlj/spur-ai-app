import { NextRequest, NextResponse } from "next/server"
import Anthropic from "@anthropic-ai/sdk"

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

export async function POST(req: NextRequest) {
  try {
    const { topic, type, context } = await req.json()

    if (!topic || !type) {
      return NextResponse.json({ error: "Missing topic or type" }, { status: 400 })
    }

    const nicheLabel = NICHE_LABELS[topic] ?? topic
    const typePrompt = TYPE_PROMPTS[type] ?? TYPE_PROMPTS.story

    const prompt = `You are a LinkedIn content expert who writes viral posts for ${nicheLabel}.

Write ${typePrompt}

Requirements:
- Write specifically for ${nicheLabel} — use their language, their problems, their wins
- 150-300 words, optimized for LinkedIn's algorithm
- Use line breaks liberally — no walls of text
- Strong hook in the first line (must stop the scroll)
- End with a thought-provoking question to drive comments
- NO hashtags (they look spammy)
- NO emojis at line starts (use arrows → or dashes — instead)
- Write in first person
- Sound authentic and personal, not corporate${context ? `\n- Additional context from the user: ${context}` : ""}

Output ONLY the LinkedIn post text. No preamble, no explanation, no quotes around it.`

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 600,
      messages: [{ role: "user", content: prompt }],
    })

    const post = (message.content[0] as { text: string }).text.trim()

    return NextResponse.json({ post })
  } catch (err) {
    console.error("Post generation error:", err)
    return NextResponse.json({ error: "Generation failed" }, { status: 500 })
  }
}

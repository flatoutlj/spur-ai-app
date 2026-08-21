import { NextRequest, NextResponse } from "next/server"
import Anthropic from "@anthropic-ai/sdk"
import { rateLimit, getClientIp, checkPayloadSize } from "@/lib/rateLimit"

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const NICHE_LABELS: Record<string, string> = {
  consulting: "management consultants",
  agency: "marketing/creative agency owners",
  coach: "business coaches",
  saas: "SaaS founders",
  recruiter: "executive recruiters",
  finance: "financial advisors",
}

export async function POST(req: NextRequest) {
  try {
    const limited = rateLimit(`gen-carousel:${getClientIp(req)}`, 15, 60_000)
    if (limited) return limited

    const { topic, niche, context } = await req.json()

    if (!topic) {
      return NextResponse.json({ error: "Missing topic" }, { status: 400 })
    }

    const tooBig = checkPayloadSize({ topic, niche, context }, { topic: 120, niche: 30, context: 600 })
    if (tooBig) return tooBig

    const nicheLabel = NICHE_LABELS[niche] ?? niche ?? "B2B professionals"

    const prompt = `You are a LinkedIn carousel expert who creates scroll-stopping, high-engagement document posts for ${nicheLabel}.

Create a LinkedIn carousel (7 slides) on this topic: "${topic}".${context ? ` Additional context: ${context}` : ""}

Rules:
- Slide 1 is the HOOK cover slide: a bold, curiosity-driving title that stops the scroll (max 8 words) plus a one-line subtitle.
- Slides 2-6 each deliver ONE punchy, specific idea. Each slide: a short bold heading (max 6 words) + 1-2 tight sentences of substance. Be concrete and tactical — real numbers, steps, or examples, not fluff.
- Slide 7 is the CTA slide: a takeaway + a soft call to action (follow, comment, or save).
- Write for ${nicheLabel} — their language, their problems, their wins.
- No hashtags. No emojis at the start of lines.

Return ONLY valid JSON in exactly this shape, nothing else:
{"slides":[{"heading":"...","body":"..."}, ... 7 items total]}`

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 900,
      messages: [{ role: "user", content: prompt }],
    })

    const raw = (message.content[0] as { text: string }).text.trim()
    // Extract JSON (model may wrap it)
    const jsonMatch = raw.match(/\{[\s\S]*\}/)
    let slides
    try {
      slides = JSON.parse(jsonMatch ? jsonMatch[0] : raw).slides
    } catch {
      return NextResponse.json({ error: "Generation failed" }, { status: 500 })
    }

    return NextResponse.json({ slides })
  } catch (err) {
    console.error("Carousel generation error:", err)
    return NextResponse.json({ error: "Generation failed" }, { status: 500 })
  }
}

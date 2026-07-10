import Anthropic from "@anthropic-ai/sdk"
import { createClient } from "@/lib/supabase/server"

function getClient() {
  return new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { prompt = "" } = body

    // Fetch user profile for personalization
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    let profileContext = ""
    if (user) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name, job_title, business_name, industry, ideal_client, content_tone")
        .eq("id", user.id)
        .single()

      if (profile) {
        profileContext = `
User profile:
- Name: ${profile.full_name || "Unknown"}
- Job title: ${profile.job_title || "Professional"}
- Business: ${profile.business_name || ""}
- Industry: ${profile.industry || "B2B"}
- Ideal client: ${profile.ideal_client || "B2B professionals"}
- Content tone: ${profile.content_tone || "professional_authoritative"}`
      }
    }

    const systemPrompt = `You are an expert LinkedIn content strategist for B2B professionals.
You generate high-converting LinkedIn post topic ideas that attract ideal clients.
Each topic should be specific, actionable, and tailored to drive business results — not just engagement.

Always respond with ONLY a valid JSON array. No markdown, no explanation, no code blocks. Just the raw JSON array.`

    const userPrompt = `Generate exactly 10 LinkedIn post topic ideas for a B2B professional.
${profileContext}
${prompt ? `\nThis week they're thinking about: "${prompt}"` : ""}

Return ONLY a JSON array with exactly 10 objects. Each object must have these exact keys:
- "title": A compelling, specific post topic (not a generic headline)
- "framework": One of: Story post, Contrarian insight, How-to guide, Numbered list, Case study, Thought question, Common mistake, Before vs after, Bold prediction, Personal confession
- "reason": One sentence explaining why this topic will perform well and attract clients

Example format:
[{"title":"Why I fired my biggest client (and how it doubled my revenue)","framework":"Story post","reason":"Vulnerability + counterintuitive outcome creates massive curiosity and relatability."}]`

    const message = await getClient().messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2048,
      messages: [
        {
          role: "user",
          content: userPrompt,
        },
      ],
      system: systemPrompt,
    })

    const content = message.content[0]
    if (content.type !== "text") {
      return Response.json({ error: "Unexpected response format" }, { status: 500 })
    }

    let topics: { title: string; framework: string; reason: string }[]
    try {
      // Strip any accidental markdown fences
      const cleaned = content.text.trim().replace(/^```json\s*/i, "").replace(/```\s*$/, "").trim()
      topics = JSON.parse(cleaned)
      if (!Array.isArray(topics)) {
        throw new Error("Not an array")
      }
    } catch {
      console.error("Failed to parse topics JSON:", content.text)
      return Response.json({ error: "Failed to parse topic ideas" }, { status: 500 })
    }

    return Response.json({ topics })
  } catch (error) {
    console.error("Topics error:", error)
    return Response.json({ error: "Failed to generate topics" }, { status: 500 })
  }
}

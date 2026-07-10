import Anthropic from "@anthropic-ai/sdk"

function getClient() {
  return new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
}

const POST_FRAMEWORKS = {
  story: "Personal story that ends with a business lesson or insight",
  insight: "Counterintuitive insight or contrarian take on an industry belief",
  howto: "Step-by-step how-to post with numbered actionable steps",
  list: "Numbered list of tips, mistakes, or lessons",
  question: "Thought-provoking question that invites engagement and reveals expertise",
  case_study: "Mini case study: client challenge → solution → result",
  mistake: "Common mistake in your industry and how to avoid it",
  comparison: "Before vs after, old way vs new way, or X vs Y",
  prediction: "Bold prediction about your industry with your reasoning",
  confession: "Vulnerable confession that builds trust and relatability",
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      topic,
      framework = "story",
      audience = "B2B consultants and agency owners",
      tone = "professional but conversational",
      includeEmoji = false,
      wordCount = 200,
      userBio = "",
    } = body

    if (!topic) {
      return Response.json({ error: "Topic is required" }, { status: 400 })
    }

    const frameworkDescription =
      POST_FRAMEWORKS[framework as keyof typeof POST_FRAMEWORKS] || POST_FRAMEWORKS.story

    const systemPrompt = `You are an expert LinkedIn content writer for B2B professionals.
You specialize in writing content that attracts high-value clients, not just followers.
Your posts are authentic, specific, and drive business outcomes.

Key rules:
- Write in first person
- Use short paragraphs (1-3 sentences max)
- Add white space between paragraphs for readability
- Include a compelling hook as the first line (first 2-3 words must stop the scroll)
- End with a clear call-to-action or engaging question
- Be specific, not generic — use real numbers and examples
- Sound human, not corporate
${userBio ? `\nUser context: ${userBio}` : ""}

LinkedIn post format:
- Hook line (1-2 sentences, very punchy)
- Empty line
- Body (3-6 short paragraphs)
- Empty line
- CTA or engaging question
${includeEmoji ? "\n- Use 1-3 relevant emojis sparingly" : "\n- No emojis"}

Target audience: ${audience}
Tone: ${tone}`

    const userPrompt = `Write a LinkedIn post about: "${topic}"

Framework to use: ${frameworkDescription}

Target length: approximately ${wordCount} words

Important: The post should be ready to copy-paste to LinkedIn. No explanations, just the post content.`

    const stream = await getClient().messages.stream({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    })

    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          if (
            chunk.type === "content_block_delta" &&
            chunk.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(chunk.delta.text))
          }
        }
        controller.close()
      },
    })

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    })
  } catch (error) {
    console.error("Generate error:", error)
    return Response.json({ error: "Failed to generate post" }, { status: 500 })
  }
}

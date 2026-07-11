import { createClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) return Response.json({ error: "Unauthorized" }, { status: 401 })

    const { data: posts, error } = await supabase
      .from("posts")
      .select("id, content, topic, framework, created_at, status")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(50)

    if (error) return Response.json({ posts: [] })
    return Response.json({ posts: posts ?? [] })
  } catch {
    return Response.json({ posts: [] })
  }
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) return Response.json({ error: "Unauthorized" }, { status: 401 })

    const { content, topic, framework } = await request.json()
    if (!content) return Response.json({ error: "Content required" }, { status: 400 })

    const { data, error } = await supabase
      .from("posts")
      .insert({
        user_id: user.id,
        content,
        topic: topic ?? "",
        framework: framework ?? "story",
        status: "draft",
        created_at: new Date().toISOString(),
      })
      .select("id")
      .single()

    if (error) {
      console.error("Post save error:", error)
      return Response.json({ error: "Failed to save" }, { status: 500 })
    }

    return Response.json({ success: true, id: data?.id })
  } catch {
    return Response.json({ error: "Failed to save" }, { status: 500 })
  }
}

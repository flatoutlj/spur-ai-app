import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { full_name, job_title, business_name, industry, ideal_client, content_tone } = body

    if (!full_name || !job_title || !business_name || !industry || !ideal_client || !content_tone) {
      return Response.json({ error: "All fields are required" }, { status: 400 })
    }

    const supabase = await createClient()

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { error } = await supabase
      .from("profiles")
      .update({
        full_name,
        job_title,
        business_name,
        industry,
        ideal_client,
        content_tone,
        onboarded: true,
        updated_at: new Date().toISOString(),
      })
      .eq("id", user.id)

    if (error) {
      console.error("Onboarding update error:", error)
      return Response.json({ error: "Failed to save profile" }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error("Onboarding error:", error)
    return Response.json({ error: "Failed to save profile" }, { status: 500 })
  }
}

import { createClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) return Response.json({ error: "Unauthorized" }, { status: 401 })

    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name, job_title, business_name, industry, ideal_client, content_tone")
      .eq("id", user.id)
      .single()

    return Response.json({ profile: profile ?? null })
  } catch {
    return Response.json({ profile: null })
  }
}

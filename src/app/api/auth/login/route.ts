import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return Response.json({ error: "Email and password required" }, { status: 400 })
    }

    const supabase = await createClient()

    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      return Response.json({ error: "Invalid email or password" }, { status: 401 })
    }

    return Response.json({ success: true, user: data.user })
  } catch (error) {
    console.error("Login error:", error)
    return Response.json({ error: "Failed to sign in" }, { status: 500 })
  }
}

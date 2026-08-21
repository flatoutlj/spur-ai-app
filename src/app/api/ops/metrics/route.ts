import { isAdmin } from "@/lib/adminAuth"

// Returns live business metrics (row counts) from Supabase. Admin-only.
export const dynamic = "force-dynamic"

async function count(base: string, key: string, table: string): Promise<number | null> {
  try {
    const res = await fetch(`${base}/rest/v1/${table}?select=*`, {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: "count=exact",
        Range: "0-0",
      },
      cache: "no-store",
    })
    const cr = res.headers.get("content-range") // "0-0/42"
    if (cr && cr.includes("/")) {
      const total = cr.split("/").pop()!
      return /^\d+$/.test(total) ? parseInt(total, 10) : null
    }
  } catch {
    /* ignore */
  }
  return null
}

export async function GET() {
  if (!(await isAdmin())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!base || !key) {
    return Response.json({ error: "Supabase not configured" }, { status: 503 })
  }
  const [email_captures, signups, posts_generated] = await Promise.all([
    count(base, key, "email_captures"),
    count(base, key, "profiles"),
    count(base, key, "posts"),
  ])
  return Response.json({
    metrics: { email_captures, signups, posts_generated },
    fetched_at: new Date().toISOString(),
  })
}

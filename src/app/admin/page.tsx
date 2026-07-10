import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import AdminDashboard from "@/components/admin/AdminDashboard"

export const dynamic = "force-dynamic"

export default async function AdminPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.email !== "lapoldeonwill@gmail.com") {
    redirect("/login")
  }

  const [
    { count: totalUsers },
    { count: totalPosts },
    { count: emailCaptures },
    { count: trialUsers },
    { data: recentUsers },
  ] = await Promise.all([
    supabase.from("profiles").select("*", { count: "exact", head: true }),
    supabase.from("posts").select("*", { count: "exact", head: true }),
    supabase.from("email_captures").select("*", { count: "exact", head: true }),
    supabase
      .from("profiles")
      .select("*", { count: "exact", head: true })
      .eq("plan", "free"),
    supabase
      .from("profiles")
      .select("id, full_name, niche, created_at, plan")
      .order("created_at", { ascending: false })
      .limit(10),
  ])

  // Activation rate: users who generated 1+ post
  // We fetch distinct user_ids from posts table
  const { data: activeUserRows } = await supabase
    .from("posts")
    .select("user_id")

  const activeUserIds = new Set((activeUserRows ?? []).map((r: { user_id: string }) => r.user_id))
  const activatedCount = activeUserIds.size

  const metrics = {
    totalUsers: totalUsers ?? 0,
    totalPosts: totalPosts ?? 0,
    emailCaptures: emailCaptures ?? 0,
    trialUsers: trialUsers ?? 0,
    activatedCount,
    mrr: 0,
    paidCustomers: 0,
  }

  return <AdminDashboard metrics={metrics} recentUsers={recentUsers ?? []} />
}

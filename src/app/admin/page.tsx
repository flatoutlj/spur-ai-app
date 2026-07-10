import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import AdminDashboard from "@/components/admin/AdminDashboard"

export const dynamic = "force-dynamic"

export default async function AdminPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user || user.email !== "lapoldeonwill@gmail.com") {
    redirect("/login")
  }

  const [
    { count: totalUsers },
    { count: totalPosts },
    { count: emailCaptures },
    { data: recentUsers },
    { data: recentPosts },
  ] = await Promise.all([
    supabase.from("profiles").select("*", { count: "exact", head: true }),
    supabase.from("posts").select("*", { count: "exact", head: true }),
    supabase.from("email_captures").select("*", { count: "exact", head: true }),
    supabase.from("profiles").select("id, full_name, niche, created_at").order("created_at", { ascending: false }).limit(10),
    supabase.from("posts").select("id, title, created_at").order("created_at", { ascending: false }).limit(10),
  ])

  const metrics = {
    totalUsers: totalUsers ?? 0,
    totalPosts: totalPosts ?? 0,
    emailCaptures: emailCaptures ?? 0,
    mrr: 0,
  }

  return (
    <AdminDashboard
      metrics={metrics}
      recentUsers={recentUsers ?? []}
      recentPosts={recentPosts ?? []}
    />
  )
}

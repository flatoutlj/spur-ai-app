import { redirect } from "next/navigation"
import { isAdmin } from "@/lib/adminAuth"
import status from "@/data/ops-status.json"
import OpsDashboardClient from "@/components/ops/OpsDashboardClient"

export const dynamic = "force-dynamic"
export const metadata = {
  title: "Ops Dashboard — Spur AI",
  robots: { index: false, follow: false },
}

export default async function OpsPage() {
  if (!(await isAdmin())) {
    redirect("/ops/login")
  }
  return <OpsDashboardClient status={status} />
}

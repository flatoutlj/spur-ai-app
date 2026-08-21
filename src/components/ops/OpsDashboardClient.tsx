"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"

type OwnerItem = {
  id?: string
  priority?: string
  kind?: string
  title: string
  why?: string
  value?: string
  where?: string
  eta?: string
}
type Status = {
  headline?: string
  north_star?: string
  metrics?: Record<string, number | null>
  metrics_updated_at?: string
  needs_owner?: OwnerItem[]
  spend_requests?: OwnerItem[]
  done?: string[]
  in_progress?: string[]
  next_up?: string[]
  notes?: string
  updated_at?: string
}

const KPIS: [string, string][] = [
  ["email_captures", "Emails captured"],
  ["signups", "Signups"],
  ["posts_generated", "Posts generated"],
]

export default function OpsDashboardClient({ status }: { status: Status }) {
  const router = useRouter()
  const [metrics, setMetrics] = useState<Record<string, number | null>>(status.metrics || {})
  const [fetchedAt, setFetchedAt] = useState<string | null>(status.metrics_updated_at || null)
  const [loading, setLoading] = useState(false)

  const refresh = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/ops/metrics", { cache: "no-store" })
      if (res.ok) {
        const d = await res.json()
        setMetrics(d.metrics || {})
        setFetchedAt(d.fetched_at || new Date().toISOString())
      }
    } finally {
      setLoading(false)
    }
  }, [])

  // Pull live numbers on mount so the dashboard is always current.
  useEffect(() => {
    refresh()
  }, [refresh])

  const logout = async () => {
    await fetch("/api/ops/login", { method: "DELETE" })
    router.push("/ops/login")
    router.refresh()
  }

  const c = {
    bg: "#0b0f17", card: "#131a26", line: "#243044", txt: "#e6edf6",
    mut: "#8aa0bd", acc: "#5b8cff", good: "#37d399", warn: "#ffb020", bad: "#ff5d5d",
  }

  const pill = (p?: string) => {
    const k = (p || "").toLowerCase()
    const bg = k === "p0" ? "rgba(255,93,93,.15)" : k === "p1" ? "rgba(255,176,32,.15)" : "rgba(91,140,255,.15)"
    const fg = k === "p0" ? c.bad : k === "p1" ? c.warn : c.acc
    return { background: bg, color: fg }
  }

  const ownerCard = (o: OwnerItem, i: number) => (
    <li key={o.id || i} style={{ border: `1px solid ${c.line}`, borderRadius: 10, padding: 12, marginBottom: 10, background: "#0f1622", listStyle: "none" }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span style={{ ...pill(o.priority), fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 999 }}>
          {o.priority || o.kind || "TODO"}
        </span>
        <span style={{ fontWeight: 600 }}>{o.title}</span>
      </div>
      {o.why && <div style={{ color: c.mut, fontSize: 13, marginTop: 4 }}>{o.why}</div>}
      {o.value && (
        <code style={{ display: "inline-block", background: "#0a0e15", border: `1px solid ${c.line}`, borderRadius: 6, padding: "3px 8px", fontSize: 12, color: "#cfe0ff", marginTop: 6, wordBreak: "break-all" }}>
          {o.value}
        </code>
      )}
      {o.where && <div style={{ color: c.mut, fontSize: 12, marginTop: 6 }}>↳ {o.where}{o.eta ? ` · ~${o.eta}` : ""}</div>}
    </li>
  )

  const list = (items: string[] | undefined, mark: string, color: string) => (
    <ul style={{ margin: 0, padding: 0 }}>
      {(items && items.length ? items : ["—"]).map((t, i) => (
        <li key={i} style={{ listStyle: "none", padding: "8px 0", borderBottom: `1px solid ${c.line}`, display: "flex", gap: 10 }}>
          <span style={{ color }}>{mark}</span><span>{t}</span>
        </li>
      ))}
    </ul>
  )

  const section = (title: string, body: React.ReactNode) => (
    <section style={{ background: c.card, border: `1px solid ${c.line}`, borderRadius: 14, padding: "18px 20px", margin: "14px 0" }}>
      <h2 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: ".06em", color: c.mut, margin: "0 0 12px" }}>{title}</h2>
      {body}
    </section>
  )

  return (
    <div style={{ minHeight: "100vh", background: c.bg, color: c.txt, fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "28px 20px 80px" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
          <div>
            <h1 style={{ fontSize: 22, margin: 0 }}><span style={{ color: c.good }}>●</span> Spur AI — Ops Dashboard</h1>
            <div style={{ color: c.mut, fontSize: 13, marginTop: 4, maxWidth: 640 }}>{status.headline}</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={refresh} disabled={loading}
              style={{ background: c.acc, color: "#fff", border: 0, borderRadius: 8, padding: "8px 14px", fontWeight: 600, cursor: "pointer", opacity: loading ? 0.6 : 1 }}>
              {loading ? "Refreshing…" : "↻ Refresh"}
            </button>
            <button onClick={logout}
              style={{ background: "transparent", color: c.mut, border: `1px solid ${c.line}`, borderRadius: 8, padding: "8px 14px", cursor: "pointer" }}>
              Log out
            </button>
          </div>
        </header>

        {status.north_star && (
          <div style={{ background: "linear-gradient(90deg,rgba(91,140,255,.14),rgba(55,211,153,.10))", border: `1px solid ${c.line}`, borderRadius: 14, padding: "14px 18px", margin: "18px 0 6px" }}>
            🎯 <span style={{ color: c.acc, fontWeight: 600 }}>North Star:</span> {status.north_star}
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 12, margin: "22px 0" }}>
          {KPIS.map(([k, label]) => (
            <div key={k} style={{ background: c.card, border: `1px solid ${c.line}`, borderRadius: 14, padding: 16 }}>
              <div style={{ fontSize: 30, fontWeight: 700 }}>{metrics[k] ?? "—"}</div>
              <div style={{ color: c.mut, fontSize: 12, textTransform: "uppercase", letterSpacing: ".04em", marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ color: c.mut, fontSize: 12, marginTop: -12, marginBottom: 8 }}>
          {fetchedAt ? `Metrics live as of ${new Date(fetchedAt).toLocaleString()}` : "Metrics loading…"}
        </div>

        {section("🔴 Needs you (money / accounts only)",
          (status.needs_owner && status.needs_owner.length)
            ? <ul style={{ margin: 0, padding: 0 }}>{status.needs_owner.map(ownerCard)}</ul>
            : <div style={{ color: c.mut, fontSize: 13 }}>Nothing needs you right now. 🎉</div>)}

        {section("💸 Spend requests",
          (status.spend_requests && status.spend_requests.length)
            ? <ul style={{ margin: 0, padding: 0 }}>{status.spend_requests.map(ownerCard)}</ul>
            : <div style={{ color: c.mut, fontSize: 13 }}>No spending requests pending.</div>)}

        {section("⏳ In progress", list(status.in_progress, "◐", c.warn))}
        {section("✅ Completed", list(status.done, "✓", c.good))}
        {section("➡️ Next up", list(status.next_up, "•", c.mut))}

        {status.notes && <div style={{ color: c.mut, fontSize: 12, marginTop: 20, textAlign: "center" }}>{status.notes}</div>}
        <div style={{ color: c.mut, fontSize: 12, marginTop: 8, textAlign: "center" }}>
          Customer analytics live at <a href="/admin" style={{ color: c.acc }}>/admin</a> · Last content update {status.updated_at ? new Date(status.updated_at).toLocaleString() : "—"}
        </div>
      </div>
    </div>
  )
}

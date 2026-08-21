"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
  const router = useRouter()
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [busy, setBusy] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setBusy(true)
    try {
      const res = await fetch("/api/ops/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, password }),
      })
      if (res.ok) {
        router.push("/ops")
        router.refresh()
      } else {
        const d = await res.json().catch(() => ({}))
        setError(d.error || "Login failed")
      }
    } catch {
      setError("Network error")
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f17] px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-sm bg-[#131a26] border border-[#243044] rounded-2xl p-7 text-[#e6edf6]"
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[#37d399]">●</span>
          <h1 className="text-lg font-bold">Spur AI — Ops</h1>
        </div>
        <p className="text-[#8aa0bd] text-sm mb-6">Admin sign in</p>

        <label className="block text-xs text-[#8aa0bd] mb-1">Username</label>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          autoComplete="username"
          className="w-full mb-4 px-3 py-2.5 rounded-lg bg-[#0b0f17] border border-[#243044] text-sm focus:outline-none focus:border-[#5b8cff]"
          required
        />

        <label className="block text-xs text-[#8aa0bd] mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          className="w-full mb-5 px-3 py-2.5 rounded-lg bg-[#0b0f17] border border-[#243044] text-sm focus:outline-none focus:border-[#5b8cff]"
          required
        />

        {error && <p className="text-[#ff5d5d] text-sm mb-4">{error}</p>}

        <button
          type="submit"
          disabled={busy}
          className="w-full py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-[#5b8cff] to-[#37d399] hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  )
}

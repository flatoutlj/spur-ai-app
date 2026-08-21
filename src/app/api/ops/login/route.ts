import { cookies } from "next/headers"
import { rateLimit, getClientIp } from "@/lib/rateLimit"
import {
  ADMIN_COOKIE,
  checkCredentials,
  createSessionToken,
  cookieOptions,
} from "@/lib/adminAuth"
import type { NextRequest } from "next/server"

// POST { user, password } -> sets signed admin session cookie on success.
export async function POST(request: Request) {
  // Throttle brute-force attempts hard.
  const limited = rateLimit(`admin-login:${getClientIp(request as NextRequest)}`, 5, 60_000)
  if (limited) return limited

  let user = "", password = ""
  try {
    const body = await request.json()
    user = String(body.user ?? "")
    password = String(body.password ?? "")
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 })
  }

  if (!checkCredentials(user, password)) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 })
  }

  const store = await cookies()
  store.set(ADMIN_COOKIE, createSessionToken(), cookieOptions)
  return Response.json({ ok: true })
}

// DELETE -> log out.
export async function DELETE() {
  const store = await cookies()
  store.delete(ADMIN_COOKIE)
  return Response.json({ ok: true })
}

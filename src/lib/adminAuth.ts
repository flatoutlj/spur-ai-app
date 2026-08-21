import crypto from "crypto"
import { cookies } from "next/headers"

/**
 * Minimal admin session auth for the ops dashboard.
 *
 * A signed (HMAC-SHA256) cookie proves the holder logged in with the admin
 * credentials. No DB, no third-party — just an env-configured user/password
 * and a server secret. Intended for a single operator (the founder).
 *
 * Required env vars (set in Vercel + .env.local):
 *   ADMIN_USER            e.g. "admin"
 *   ADMIN_PASSWORD        the login password
 *   ADMIN_SESSION_SECRET  long random string used to sign the session cookie
 */

export const ADMIN_COOKIE = "sa_admin"
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7 // 7 days

function secret(): string {
  const s = process.env.ADMIN_SESSION_SECRET
  if (!s) throw new Error("ADMIN_SESSION_SECRET is not set")
  return s
}

function timingSafeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a)
  const bb = Buffer.from(b)
  if (ab.length !== bb.length) return false
  return crypto.timingSafeEqual(ab, bb)
}

/** Validate a username/password pair against the configured admin credentials. */
export function checkCredentials(user: string, password: string): boolean {
  const U = process.env.ADMIN_USER
  const P = process.env.ADMIN_PASSWORD
  if (!U || !P) return false
  // Evaluate both comparisons to keep timing roughly constant.
  const okUser = timingSafeEqual(user, U)
  const okPass = timingSafeEqual(password, P)
  return okUser && okPass
}

/** Create a signed session token: base64(payload).hexsig */
export function createSessionToken(): string {
  const payload = JSON.stringify({ sub: "admin", iat: Date.now() })
  const b64 = Buffer.from(payload).toString("base64url")
  const sig = crypto.createHmac("sha256", secret()).update(b64).digest("hex")
  return `${b64}.${sig}`
}

/** Verify a session token's signature and freshness. */
export function verifySessionToken(token: string | undefined): boolean {
  if (!token || !token.includes(".")) return false
  const [b64, sig] = token.split(".")
  const expected = crypto.createHmac("sha256", secret()).update(b64).digest("hex")
  if (!timingSafeEqual(sig, expected)) return false
  try {
    const { iat } = JSON.parse(Buffer.from(b64, "base64url").toString())
    if (typeof iat !== "number") return false
    return Date.now() - iat < MAX_AGE_SECONDS * 1000
  } catch {
    return false
  }
}

/** Read the admin cookie and return whether the current request is authenticated. */
export async function isAdmin(): Promise<boolean> {
  const store = await cookies()
  return verifySessionToken(store.get(ADMIN_COOKIE)?.value)
}

export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: MAX_AGE_SECONDS,
}

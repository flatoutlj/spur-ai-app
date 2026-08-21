import { NextRequest, NextResponse } from "next/server"

/**
 * Lightweight in-memory sliding-window rate limiter.
 *
 * Note: On serverless (Vercel) this is per-instance and resets on cold start,
 * so it's a FIRST layer only — it blunts basic single-IP abuse of the paid
 * AI endpoints. The durable protection is a Cloudflare WAF rate-limiting rule
 * on /api/* (recommended). Combined with the input caps in checkPayloadSize,
 * this bounds worst-case Anthropic spend from casual abuse.
 */

type Hit = { count: number; resetAt: number }
const buckets = new Map<string, Hit>()

// Best-effort cleanup so the map can't grow unbounded on a long-lived instance.
function sweep(now: number) {
  if (buckets.size < 5000) return
  for (const [k, v] of buckets) if (v.resetAt < now) buckets.delete(k)
}

export function getClientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for")
  if (fwd) return fwd.split(",")[0].trim()
  return req.headers.get("x-real-ip") || "unknown"
}

/**
 * Returns null if allowed, or a 429 NextResponse if the limit is exceeded.
 * @param key    unique bucket key (e.g. `${route}:${ip}`)
 * @param limit  max requests per window
 * @param windowMs window length in ms
 */
export function rateLimit(key: string, limit: number, windowMs: number): NextResponse | null {
  const now = Date.now()
  sweep(now)
  const hit = buckets.get(key)
  if (!hit || hit.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return null
  }
  if (hit.count >= limit) {
    const retry = Math.ceil((hit.resetAt - now) / 1000)
    return NextResponse.json(
      { error: "Too many requests. Please slow down and try again shortly." },
      { status: 429, headers: { "Retry-After": String(retry) } }
    )
  }
  hit.count += 1
  return null
}

/**
 * Guards against oversized/abusive payloads before they reach the LLM.
 * Returns a 413 response if any field exceeds its cap, else null.
 */
export function checkPayloadSize(
  fields: Record<string, unknown>,
  caps: Record<string, number>
): NextResponse | null {
  for (const [name, cap] of Object.entries(caps)) {
    const v = fields[name]
    if (typeof v === "string" && v.length > cap) {
      return NextResponse.json(
        { error: `Input too long. '${name}' must be under ${cap} characters.` },
        { status: 413 }
      )
    }
  }
  return null
}

import crypto from "crypto"

/**
 * Public API key validation for the Spur developer/MCP API.
 *
 * Keys are provisioned out-of-band and stored (comma-separated) in the
 * SPUR_API_KEYS env var. This deliberately gates the LLM-backed endpoints so
 * public access can't run up unbounded Anthropic spend — access is issued per
 * request via the /developers waitlist until a billing system exists.
 *
 * Format: keys look like `spur_sk_<hex>`.
 */

function timingSafeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a)
  const bb = Buffer.from(b)
  if (ab.length !== bb.length) return false
  return crypto.timingSafeEqual(ab, bb)
}

function configuredKeys(): string[] {
  return (process.env.SPUR_API_KEYS ?? "")
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean)
}

/** Extract the API key from the standard headers agents/clients use. */
export function getApiKey(req: Request): string | null {
  const x = req.headers.get("x-api-key")
  if (x) return x.trim()
  const auth = req.headers.get("authorization")
  if (auth?.toLowerCase().startsWith("bearer ")) return auth.slice(7).trim()
  return null
}

/** Returns the matched key (for per-key rate-limit buckets) or null if invalid. */
export function validateApiKey(req: Request): string | null {
  const provided = getApiKey(req)
  if (!provided) return null
  for (const k of configuredKeys()) {
    if (timingSafeEqual(provided, k)) return k
  }
  return null
}

/** Short, non-reversible id for a key — safe to use in rate-limit bucket names/logs. */
export function keyFingerprint(key: string): string {
  return crypto.createHash("sha256").update(key).digest("hex").slice(0, 12)
}

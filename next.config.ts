import type { NextConfig } from "next";

// Security headers applied to every route. Kept deliberately compatible:
// we set frame-ancestors (clickjacking) via CSP but do NOT enforce a strict
// script-src, because the app renders inline JSON-LD and loads Vercel Analytics —
// a strict script CSP would break those. Cloudflare sits in front for L7 defense.
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Content-Security-Policy",
    value:
      "frame-ancestors 'self'; base-uri 'self'; form-action 'self' https://buy.stripe.com https://checkout.stripe.com;",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false, // don't advertise the framework/version
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

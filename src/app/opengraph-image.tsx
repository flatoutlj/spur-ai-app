import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Spur AI — Turn LinkedIn Into Your #1 B2B Lead Source"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #1e3a8a 50%, #4c1d95 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: "700",
              color: "white",
            }}
          >
            S
          </div>
          <span style={{ color: "white", fontSize: "32px", fontWeight: "700", letterSpacing: "-0.5px" }}>
            Spur AI
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "800",
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            maxWidth: "900px",
            marginBottom: "32px",
          }}
        >
          Turn LinkedIn into your{" "}
          <span style={{ color: "#60a5fa" }}>#1 B2B lead source</span>
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.7)",
            marginBottom: "48px",
            maxWidth: "700px",
          }}
        >
          AI-powered content engine for consultants, coaches &amp; agency owners
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: "16px" }}>
          {["14-day free trial", "No credit card", "Real AI generation"].map((text) => (
            <div
              key={text}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "100px",
                padding: "10px 24px",
                color: "rgba(255,255,255,0.9)",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              ✓ {text}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            color: "rgba(255,255,255,0.4)",
            fontSize: "22px",
          }}
        >
          trispur.com
        </div>
      </div>
    ),
    { ...size }
  )
}

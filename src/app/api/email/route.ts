export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, source = "landing" } = body

    if (!email || !email.includes("@")) {
      return Response.json({ error: "Valid email required" }, { status: 400 })
    }

    // Always persist to Supabase regardless of Resend
    const { createClient } = await import("@supabase/supabase-js")
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
    await supabase
      .from("email_captures")
      .upsert({ email, source, created_at: new Date().toISOString() }, { onConflict: "email" })

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend")
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: "Spur AI <hello@trispur.com>",
        to: email,
        subject: "You're on the list — here's what happens next",
        html: `
          <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px; color: #111;">
            <div style="margin-bottom: 32px;">
              <div style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #8b5cf6); width: 40px; height: 40px; border-radius: 10px; line-height: 40px; text-align: center; color: white; font-weight: bold; font-size: 18px;">S</div>
            </div>
            <h1 style="font-size: 28px; font-weight: 700; margin: 0 0 16px;">You're in 🎉</h1>
            <p style="font-size: 16px; line-height: 1.6; color: #555; margin: 0 0 24px;">
              Thanks for joining the Spur AI waitlist. We're onboarding new users in batches to make sure everyone gets a great experience.
            </p>
            <p style="font-size: 16px; line-height: 1.6; color: #555; margin: 0 0 24px;">
              <strong>You'll get early access within 48 hours</strong> — and a special discount for being one of the first in.
            </p>
            <p style="font-size: 16px; line-height: 1.6; color: #555; margin: 0 0 32px;">
              While you wait, here are 3 LinkedIn post hooks that consistently get 10x more engagement:
            </p>
            <div style="background: #f8fafc; border-radius: 12px; padding: 24px; margin: 0 0 32px;">
              <p style="margin: 0 0 16px; font-weight: 600;">Hook #1 — The confession:</p>
              <p style="margin: 0 0 20px; color: #555; font-style: italic;">"I wasted $40K on an agency before I understood this one thing."</p>
              <p style="margin: 0 0 16px; font-weight: 600;">Hook #2 — The hot take:</p>
              <p style="margin: 0 0 20px; color: #555; font-style: italic;">"Cold outreach is dead. Here's what's replacing it."</p>
              <p style="margin: 0 0 16px; font-weight: 600;">Hook #3 — The number:</p>
              <p style="margin: 0; color: #555; font-style: italic;">"I analyzed 500 LinkedIn posts. These 3 things appear in every viral B2B post."</p>
            </div>
            <a href="https://trispur.com/signup?email=${encodeURIComponent(email)}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; font-weight: 700; padding: 14px 28px; border-radius: 100px; text-decoration: none; font-size: 15px;">
              Start your free trial →
            </a>
            <p style="font-size: 13px; color: #999; margin: 32px 0 0;">
              Spur AI · hello@trispur.com · <a href="#" style="color: #999;">Unsubscribe</a>
            </p>
          </div>
        `,
      })

      await resend.emails.send({
        from: "Spur AI Alerts <hello@trispur.com>",
        to: "lapoldeonwill@gmail.com",
        subject: `New signup: ${email} via ${source}`,
        html: `<p>New email capture: <strong>${email}</strong></p><p>Source: ${source}</p>`,
      })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error("Email error:", error)
    return Response.json({ error: "Failed to process" }, { status: 500 })
  }
}

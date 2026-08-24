import Stripe from "stripe"
import { createClient } from "@/lib/supabase/server"

const getStripe = () => new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-06-24.dahlia",
})

/**
 * Webhooks arrive with no user session, so the cookie-based SSR client cannot
 * satisfy row-level security. Anything written from here needs the service
 * role key.
 *
 * NOTE: the subscription cases below still use the SSR client and their writes
 * are very likely being silently dropped by RLS. Left alone deliberately —
 * changing subscription handling is a separate, testable change — but it needs
 * fixing before anyone subscribes.
 */
async function getServiceClient() {
  const { createClient: createServiceClient } = await import("@supabase/supabase-js")
  return createServiceClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function POST(request: Request) {
  const body = await request.text()
  const sig = request.headers.get("stripe-signature")!

  let event: Stripe.Event

  try {
    event = getStripe().webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    console.error("Webhook signature verification failed:", err)
    return Response.json({ error: "Invalid signature" }, { status: 400 })
  }

  const supabase = await createClient()

  switch (event.type) {
    case "customer.subscription.created":
    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription
      const userId = subscription.metadata.user_id
      const plan = subscription.metadata.plan || "growth"

      if (userId) {
        await supabase.from("profiles").update({
          plan,
          stripe_customer_id: subscription.customer as string,
          stripe_subscription_id: subscription.id,
          subscription_status: subscription.status,
          updated_at: new Date().toISOString(),
        }).eq("id", userId)
      }
      break
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription
      const userId = subscription.metadata.user_id

      if (userId) {
        await supabase.from("profiles").update({
          plan: "free",
          subscription_status: "canceled",
          updated_at: new Date().toISOString(),
        }).eq("id", userId)
      }
      break
    }

    // One-time purchases (the $29 content pack). Without this case a pack
    // payment was recorded nowhere: no buyer record, no receipt, no delivery —
    // the product arrived only if Stripe's own redirect happened to fire and
    // the buyer did not close the tab. That is a chargeback, not a sale.
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session

      // Subscriptions are handled by the customer.subscription.* cases above.
      if (session.mode !== "payment") break

      const email =
        session.customer_details?.email ?? session.customer_email ?? null
      const amount = session.amount_total ?? 0

      console.log(
        `Pack purchase: ${email ?? "unknown email"} paid ${amount / 100} ${(session.currency ?? "usd").toUpperCase()} (session ${session.id})`
      )

      if (!email) {
        console.error(`Pack purchase ${session.id} has no email — cannot deliver.`)
        break
      }

      // Durable record of the buyer, so delivery can be repeated by hand if
      // the email below fails for any reason.
      try {
        const service = await getServiceClient()
        await service.from("email_captures").upsert(
          {
            email,
            source: "pack-purchase",
            created_at: new Date().toISOString(),
          },
          { onConflict: "email" }
        )
      } catch (err) {
        console.error(`Failed to record pack buyer ${email}:`, err)
      }

      if (!process.env.RESEND_API_KEY) {
        console.error(
          `RESEND_API_KEY is not set — pack buyer ${email} received NO delivery email. Deliver manually.`
        )
        break
      }

      try {
        const { Resend } = await import("resend")
        await new Resend(process.env.RESEND_API_KEY).emails.send({
          from: "Spur AI <hello@trispur.com>",
          to: email,
          subject: "Your LinkedIn Founder Content Pack",
          html: `
            <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:40px 20px;color:#0b0f17;">
              <h1 style="font-size:24px;margin:0 0 16px;">Your pack is ready</h1>
              <p style="font-size:16px;line-height:1.6;color:#545e6e;margin:0 0 24px;">
                Thanks for buying the LinkedIn Founder Content Pack. Everything is on the page below —
                bookmark it, it stays available.
              </p>
              <p style="margin:0 0 28px;">
                <a href="https://www.trispur.com/pack/thank-you"
                   style="display:inline-block;background:#2563eb;color:#fff;text-decoration:none;
                          padding:12px 22px;border-radius:8px;font-weight:600;">
                  Open your pack
                </a>
              </p>
              <p style="font-size:14px;line-height:1.6;color:#838d9d;margin:0;">
                Any problem at all, reply to this email — 30-day money back, no questions.
              </p>
            </div>
          `,
        })
        console.log(`Pack delivery email sent to ${email}`)
      } catch (err) {
        console.error(`Pack delivery email FAILED for ${email}:`, err)
      }
      break
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice
      console.log("Payment failed for:", invoice.customer_email)
      break
    }
  }

  return Response.json({ received: true })
}

import Stripe from "stripe"
import { createClient } from "@/lib/supabase/server"

const getStripe = () => new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-06-24.dahlia",
})

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

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice
      console.log("Payment failed for:", invoice.customer_email)
      break
    }
  }

  return Response.json({ received: true })
}

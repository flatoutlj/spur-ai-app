import Stripe from "stripe"
import { createClient } from "@/lib/supabase/server"

const getStripe = () => new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-06-24.dahlia",
})

const PRICE_MAP: Record<string, string> = {
  starter: process.env.STRIPE_PRICE_STARTER_MONTHLY!,
  growth: process.env.STRIPE_PRICE_GROWTH_MONTHLY!,
  agency: process.env.STRIPE_PRICE_AGENCY_MONTHLY!,
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { plan = "growth" } = body

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return Response.json({ error: "Not authenticated" }, { status: 401 })
    }

    const priceId = PRICE_MAP[plan.toLowerCase()]
    if (!priceId) {
      return Response.json({ error: "Invalid plan" }, { status: 400 })
    }

    const session = await getStripe().checkout.sessions.create({
      customer_email: user.email,
      client_reference_id: user.id,
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      subscription_data: {
        trial_period_days: 14,
        metadata: { user_id: user.id, plan },
      },
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?upgraded=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/billing`,
      allow_promotion_codes: true,
    })

    return Response.json({ url: session.url })
  } catch (error) {
    console.error("Checkout error:", error)
    return Response.json({ error: "Failed to create checkout session" }, { status: 500 })
  }
}

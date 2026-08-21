import Stripe from "stripe"
import { createClient } from "@/lib/supabase/server"

const getStripe = () => new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-06-24.dahlia",
})

// Maps plan slug -> Stripe price env var name. We look up process.env at
// request time (not module load) so a missing var is reported as a config
// error, not silently collapsed into "Invalid plan".
const PLAN_PRICE_ENV: Record<string, string> = {
  solo: "STRIPE_PRICE_SOLO_MONTHLY",
  starter: "STRIPE_PRICE_STARTER_MONTHLY",
  growth: "STRIPE_PRICE_GROWTH_MONTHLY",
  agency: "STRIPE_PRICE_AGENCY_MONTHLY",
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

    const envName = PLAN_PRICE_ENV[String(plan).toLowerCase()]
    if (!envName) {
      return Response.json({ error: "Invalid plan" }, { status: 400 })
    }
    const priceId = process.env[envName]
    if (!priceId) {
      // Known plan, but its Stripe price isn't configured in this environment.
      // Surface distinctly so it shows up in logs / the ops dashboard.
      console.error(`Checkout misconfigured: ${envName} is not set for plan "${plan}"`)
      return Response.json(
        { error: "This plan is temporarily unavailable. Please try another plan or contact support." },
        { status: 503 }
      )
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

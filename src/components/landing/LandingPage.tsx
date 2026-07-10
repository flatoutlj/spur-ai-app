"use client"

import { useState } from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import SocialProof from "./SocialProof"
import Features from "./Features"
import HowItWorks from "./HowItWorks"
import Pricing from "./Pricing"
import Testimonials from "./Testimonials"
import FAQ from "./FAQ"
import CTASection from "./CTASection"
import Footer from "./Footer"
import ExitIntentPopup from "./ExitIntentPopup"

export default function LandingPage() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero email={email} setEmail={setEmail} />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection email={email} setEmail={setEmail} />
      <Footer />
      <ExitIntentPopup />
    </div>
  )
}

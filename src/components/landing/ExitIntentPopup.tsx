"use client"

import { useState, useEffect, useCallback } from "react"

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  const show = useCallback(() => {
    if (!dismissed && !submitted) setVisible(true)
  }, [dismissed, submitted])

  useEffect(() => {
    if (typeof window === "undefined") return
    if (sessionStorage.getItem("exit-popup-seen")) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show()
    }

    // Mobile: show after 45s of inactivity
    const timer = setTimeout(show, 45000)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(timer)
    }
  }, [show])

  const handleClose = () => {
    setVisible(false)
    setDismissed(true)
    sessionStorage.setItem("exit-popup-seen", "1")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    try {
      await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "exit-intent" }),
      })
    } catch {}
    setSubmitted(true)
    sessionStorage.setItem("exit-popup-seen", "1")
    setTimeout(handleClose, 2500)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={handleClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none"
          aria-label="Close"
        >
          ×
        </button>

        {submitted ? (
          <div className="py-4">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">You're in!</h3>
            <p className="text-gray-500">Check your inbox — early access incoming.</p>
          </div>
        ) : (
          <>
            <div className="w-12 h-12 rounded-xl gradient-bg mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Wait — before you go</h3>
            <p className="text-gray-500 mb-1">Get <strong>3 viral LinkedIn hooks</strong> for free</p>
            <p className="text-gray-400 text-sm mb-6">Plus early access to Spur AI at a founder discount.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 rounded-full border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                type="submit"
                className="gradient-bg text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
              >
                Send me the hooks →
              </button>
            </form>
            <button onClick={handleClose} className="mt-4 text-xs text-gray-400 hover:text-gray-500">
              No thanks, I don't want more leads
            </button>
          </>
        )}
      </div>
    </div>
  )
}

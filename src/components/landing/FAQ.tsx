"use client"

import { useState } from "react"

const faqs = [
  {
    q: "Will the AI content sound like me or like a robot?",
    a: "During onboarding, you'll spend 3 minutes telling Spur AI about your voice, your industry, your opinions, and your audience. From that point, every post is generated to match your voice and style. Most users say they can publish with minimal editing."
  },
  {
    q: "How is Spur AI different from Taplio or other LinkedIn tools?",
    a: "Taplio is built for everyone. Spur AI is built specifically for B2B consultants, coaches, and agency owners who need to attract premium clients — not just grow followers. Our frameworks, hooks, and CTAs are all designed to drive business outcomes, not engagement vanity metrics."
  },
  {
    q: "Does LinkedIn allow AI-generated content?",
    a: "Yes. LinkedIn has no restrictions on using AI to assist with content creation. Spur AI doesn't automate posting or engagement — it helps you create the content, and you decide what to post and when."
  },
  {
    q: "What if I don't know what to post about?",
    a: "That's exactly why we built the Topic Generator. Tell Spur AI your industry and ideal client, and it will generate 30 post ideas in seconds. You'll never stare at a blank screen again."
  },
  {
    q: "How quickly will I see results?",
    a: "Most users report increased profile views within 2 weeks and their first inbound inquiry within 30 days. LinkedIn rewards consistency — the more you post (especially quality content), the faster the algorithm rewards you."
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There's no contract. Cancel anytime from your billing settings. If you cancel, you keep access until the end of your billing period."
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes — 14 days free, no credit card required. You get full access to the Growth plan features during your trial."
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-500 text-lg">
            Everything you need to know before starting.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 text-sm pr-4">{faq.q}</span>
                <span className={`text-gray-400 transition-transform flex-shrink-0 ${open === i ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

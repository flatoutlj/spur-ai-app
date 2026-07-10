import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/" className="text-blue-600 hover:underline text-sm mb-8 block">← Back to home</Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-12">Last updated: July 10, 2026</p>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Service</h2>
            <p>Spur AI provides AI-powered LinkedIn content generation tools. By using our service, you agree to these terms.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Acceptable Use</h2>
            <p>You may use Spur AI to create LinkedIn content for your own professional use. You may not use our service to generate spam, misleading content, or violate LinkedIn&apos;s Terms of Service.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Content Ownership</h2>
            <p>You own all content you create with Spur AI. We do not claim any rights to posts you generate. You are responsible for the content you publish.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Billing & Trials</h2>
            <p>We offer 14-day free trials with no credit card required. After your trial, you will be billed the selected plan amount. Cancel anytime to stop future charges. No refunds for partial months.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Limitation of Liability</h2>
            <p>Spur AI is provided as-is. We are not responsible for the performance of your LinkedIn content or business outcomes resulting from its use.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Contact</h2>
            <p>Questions? Email <a href="mailto:hello@trispur.com" className="text-blue-600 hover:underline">hello@trispur.com</a></p>
          </section>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/" className="text-blue-600 hover:underline text-sm mb-8 block">← Back to home</Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-12">Last updated: July 10, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly: name, email address, password, and business information. We also collect usage data like posts created, features used, and session information.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p>We use your information to provide the Spur AI service, process payments, send transactional emails, and improve our product. We never sell your personal data.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. AI Content Generation</h2>
            <p>The topics you enter to generate LinkedIn posts may be sent to Anthropic&apos;s Claude API to generate content. We do not store prompts beyond your session. Anthropic&apos;s privacy policy applies to their data handling.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Data Storage</h2>
            <p>Your data is stored securely in Supabase (PostgreSQL). We use encryption at rest and in transit. Payments are processed by Stripe; we never store card numbers.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Deletion</h2>
            <p>You can delete your account and all associated data at any time from Settings. We will delete your data within 30 days of the request.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Contact</h2>
            <p>For privacy questions, email us at <a href="mailto:privacy@trispur.com" className="text-blue-600 hover:underline">privacy@trispur.com</a></p>
          </section>
        </div>
      </div>
    </div>
  )
}

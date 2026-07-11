import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-xl text-white">Spur AI</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              AI-powered LinkedIn content engine for B2B consultants, coaches, and agency owners.
            </p>
            <p className="text-xs">© 2026 Spur AI. All rights reserved.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/free-tools" className="hover:text-white transition-colors">Free tools</Link></li>
              <li><Link href="/signup" className="hover:text-white transition-colors">Start free trial</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Compare</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/vs/taplio" className="hover:text-white transition-colors">Spur AI vs Taplio</Link></li>
              <li><Link href="/vs/draftly" className="hover:text-white transition-colors">Spur AI vs Draftly</Link></li>
              <li><Link href="/vs/supergrow" className="hover:text-white transition-colors">Spur AI vs Supergrow</Link></li>
              <li><Link href="/vs/chatgpt" className="hover:text-white transition-colors">Spur AI vs ChatGPT</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><a href="mailto:hello@trispur.com" className="hover:text-white transition-colors">Contact</a></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/affiliates" className="hover:text-white transition-colors">Affiliates</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            Built with ♥ for B2B professionals who know that clients come from relationships, not ads.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a href="https://x.com/trispur" className="hover:text-white transition-colors">X / Twitter</a>
            <a href="https://linkedin.com/company/spur-ai" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://producthunt.com/products/spur-ai" className="hover:text-white transition-colors">Product Hunt</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6">
          <span className="text-white font-bold text-2xl">S</span>
        </div>
        <h1 className="text-6xl font-bold text-gray-900 mb-3">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Page not found</h2>
        <p className="text-gray-500 mb-8">
          This page doesn&apos;t exist — but your LinkedIn presence can.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="gradient-bg text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Back to home
          </Link>
          <Link
            href="/tools/linkedin-post-generator"
            className="border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
          >
            Try free tools
          </Link>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400 mb-3">Looking for something specific?</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: "LinkedIn post generator", href: "/tools/linkedin-post-generator" },
              { label: "Headline generator", href: "/tools/linkedin-headline-generator" },
              { label: "Bio generator", href: "/tools/linkedin-bio-generator" },
              { label: "Free tools hub", href: "/free-tools" },
              { label: "Blog", href: "/blog" },
              { label: "Pricing", href: "/pricing" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-blue-600 hover:underline border border-blue-100 bg-blue-50 px-2.5 py-1 rounded-full"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

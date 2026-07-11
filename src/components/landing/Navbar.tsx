"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Spur AI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Features
            </Link>
            <Link href="/free-tools" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Free tools
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Blog
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors px-4 py-2"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="gradient-bg text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Start free trial
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="w-5 h-0.5 bg-gray-600 mb-1" />
            <div className="w-5 h-0.5 bg-gray-600 mb-1" />
            <div className="w-5 h-0.5 bg-gray-600" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <Link href="#features" className="block text-gray-600 font-medium py-2">Features</Link>
          <Link href="/free-tools" className="block text-gray-600 font-medium py-2">Free tools</Link>
          <Link href="#pricing" className="block text-gray-600 font-medium py-2">Pricing</Link>
          <Link href="/blog" className="block text-gray-600 font-medium py-2">Blog</Link>
          <Link href="/login" className="block text-gray-600 font-medium py-2">Log in</Link>
          <Link href="/signup" className="block gradient-bg text-white text-center font-semibold py-3 rounded-full">
            Start free trial
          </Link>
        </div>
      )}
    </nav>
  )
}

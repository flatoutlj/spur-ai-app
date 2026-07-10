"use client"

import Link from "next/link"
import { useState } from "react"

export default function DashboardNav() {
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-lg text-gray-900">Spur AI</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="hidden md:block text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/billing"
              className="hidden md:block text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold"
            >
              Upgrade to Growth ↗
            </Link>

            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center text-white font-semibold text-sm"
              >
                U
              </button>
              {profileOpen && (
                <div className="absolute right-0 top-12 bg-white rounded-xl shadow-lg border border-gray-100 w-48 py-2 z-50">
                  <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Settings</Link>
                  <Link href="/billing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Billing</Link>
                  <hr className="my-1 border-gray-100" />
                  <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

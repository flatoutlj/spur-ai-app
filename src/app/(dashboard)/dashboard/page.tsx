"use client"

import { useState } from "react"
import PostGenerator from "@/components/dashboard/PostGenerator"
import ContentCalendar from "@/components/dashboard/ContentCalendar"
import PostHistory from "@/components/dashboard/PostHistory"
import HooksLibrary from "@/components/dashboard/HooksLibrary"
import Analytics from "@/components/dashboard/Analytics"
import DashboardNav from "@/components/dashboard/DashboardNav"

type Tab = "generate" | "calendar" | "history" | "hooks" | "analytics"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<Tab>("generate")

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "generate", label: "Generate", icon: "✍️" },
    { id: "calendar", label: "Calendar", icon: "📅" },
    { id: "history", label: "History", icon: "📋" },
    { id: "hooks", label: "Hooks", icon: "🔥" },
    { id: "analytics", label: "Analytics", icon: "📊" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-gray-900">Welcome back 👋</h1>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              14 days left in trial
            </div>
          </div>
          <p className="text-gray-500">Ready to create content that gets you clients today?</p>
        </div>

        <div className="flex gap-1 bg-white border border-gray-100 rounded-xl p-1 mb-8 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "gradient-bg text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {activeTab === "generate" && <PostGenerator />}
        {activeTab === "calendar" && <ContentCalendar />}
        {activeTab === "history" && <PostHistory />}
        {activeTab === "hooks" && <HooksLibrary />}
        {activeTab === "analytics" && <Analytics />}
      </div>
    </div>
  )
}

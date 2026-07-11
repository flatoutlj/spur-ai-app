"use client"

import { useState, useEffect, use } from "react"
import PostGenerator from "@/components/dashboard/PostGenerator"
import ContentCalendar from "@/components/dashboard/ContentCalendar"
import PostHistory from "@/components/dashboard/PostHistory"
import HooksLibrary from "@/components/dashboard/HooksLibrary"
import Analytics from "@/components/dashboard/Analytics"
import DashboardNav from "@/components/dashboard/DashboardNav"
import TopicGenerator from "@/components/dashboard/TopicGenerator"

type Tab = "generate" | "topics" | "calendar" | "history" | "hooks" | "analytics"

export default function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>
}) {
  const params = use(searchParams)
  const initialTab = (params.tab as Tab) || "generate"
  const [activeTab, setActiveTab] = useState<Tab>(initialTab)
  const [firstName, setFirstName] = useState<string>("")
  const [postCount, setPostCount] = useState<number>(0)

  useEffect(() => {
    fetch("/api/profile")
      .then((r) => r.json())
      .then((d) => {
        if (d.profile?.full_name) {
          setFirstName(d.profile.full_name.split(" ")[0])
        }
      })
      .catch(() => {})
    fetch("/api/posts")
      .then((r) => r.json())
      .then((d) => { if (d.posts) setPostCount(d.posts.length) })
      .catch(() => {})
  }, [])

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "generate", label: "Generate", icon: "✍️" },
    { id: "topics", label: "Topic Ideas", icon: "💡" },
    { id: "calendar", label: "Calendar", icon: "📅" },
    { id: "history", label: "History", icon: "📋" },
    { id: "hooks", label: "Hooks", icon: "🔥" },
    { id: "analytics", label: "Analytics", icon: "📊" },
  ]

  const greeting = firstName ? `Welcome back, ${firstName} 👋` : "Welcome back 👋"

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-gray-900">{greeting}</h1>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              14-day free trial
            </div>
          </div>
          <p className="text-gray-500">Ready to create content that gets you clients today?</p>
        </div>

        <div className="flex gap-1 bg-white border border-gray-100 rounded-xl p-1 mb-8 w-fit overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
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
        {activeTab === "topics" && <TopicGenerator />}
        {activeTab === "calendar" && <ContentCalendar />}
        {activeTab === "history" && <PostHistory />}
        {activeTab === "hooks" && <HooksLibrary />}
        {activeTab === "analytics" && <Analytics postCount={postCount} />}
      </div>
    </div>
  )
}

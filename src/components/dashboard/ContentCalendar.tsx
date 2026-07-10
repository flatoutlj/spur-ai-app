"use client"

import { useState } from "react"

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const SAMPLE_POSTS = [
  { day: 1, title: "Why I fired my biggest client", status: "scheduled", type: "story" },
  { day: 3, title: "3 pricing mistakes agencies make", status: "draft", type: "list" },
  { day: 5, title: "Cold outreach is dead", status: "scheduled", type: "insight" },
  { day: 8, title: "How we 3x'd revenue in 90 days", status: "published", type: "case_study" },
  { day: 10, title: "The LinkedIn hook formula", status: "draft", type: "howto" },
]

const STATUS_COLORS: Record<string, string> = {
  scheduled: "bg-blue-100 text-blue-700",
  draft: "bg-gray-100 text-gray-600",
  published: "bg-green-100 text-green-700",
}

export default function ContentCalendar() {
  const now = new Date()
  const [month, setMonth] = useState(now.getMonth())
  const [year, setYear] = useState(now.getFullYear())

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const startOffset = firstDay === 0 ? 6 : firstDay - 1

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
  }

  const getPostForDay = (day: number) => SAMPLE_POSTS.find(p => p.day === day)

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-semibold text-gray-900 text-lg">Content Calendar</h2>
          <p className="text-gray-500 text-sm">Plan and schedule your LinkedIn posts</p>
        </div>
        <button className="gradient-bg text-white text-sm font-semibold px-4 py-2 rounded-lg">
          + Add post
        </button>
      </div>

      <div className="flex items-center justify-between mb-6">
        <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">←</button>
        <h3 className="font-semibold text-gray-900">{MONTHS[month]} {year}</h3>
        <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">→</button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map(d => (
          <div key={d} className="text-xs font-medium text-gray-400 text-center py-2">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {[...Array(startOffset)].map((_, i) => (
          <div key={`empty-${i}`} className="h-20 rounded-lg" />
        ))}
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1
          const post = getPostForDay(day)
          const isToday = day === now.getDate() && month === now.getMonth() && year === now.getFullYear()

          return (
            <div
              key={day}
              className={`h-20 rounded-xl border p-1.5 cursor-pointer hover:border-blue-300 transition-colors ${
                isToday ? "border-blue-500 bg-blue-50" : "border-gray-100 hover:bg-gray-50"
              }`}
            >
              <div className={`text-xs font-semibold mb-1 ${isToday ? "text-blue-600" : "text-gray-700"}`}>
                {day}
              </div>
              {post && (
                <div className={`text-xs px-1.5 py-0.5 rounded-md font-medium truncate ${STATUS_COLORS[post.status]}`}>
                  {post.title}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="flex items-center gap-4 mt-4 text-xs">
        {Object.entries(STATUS_COLORS).map(([status, color]) => (
          <div key={status} className="flex items-center gap-1.5">
            <span className={`px-2 py-0.5 rounded-md font-medium ${color}`}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const BASE = "https://trispur.com"

const POSTS = [
  {
    slug: "linkedin-outreach",
    title: "LinkedIn Outreach: 8 DM Templates That Get Replies (2026 Guide)",
    description: "8 LinkedIn DM scripts for cold outreach, follow-ups, referrals, and warm introductions — with tips on what works in 2026.",
    date: "2026-07-11",
  },
  {
    slug: "linkedin-algorithm",
    title: "How the LinkedIn Algorithm Works in 2026 (And How to Beat It)",
    description: "How LinkedIn decides which posts go viral, what kills reach, and the specific actions that maximize distribution in 2026.",
    date: "2026-07-11",
  },
  {
    slug: "linkedin-post-ideas",
    title: "50 LinkedIn Post Ideas for B2B Professionals (2026) — Never Run Out of Content",
    description: "50 proven LinkedIn post ideas for consultants, coaches, and agency owners — with hooks and frameworks organized by content type.",
    date: "2026-07-11",
  },
  {
    slug: "linkedin-summary-examples",
    title: "10 LinkedIn Summary Examples That Convert Visitors into Clients (2026)",
    description: "Real LinkedIn About section examples for B2B consultants, coaches, and agency owners — with templates and the exact formula for writing a summary that generates inbound leads.",
    date: "2026-07-11",
  },
  {
    slug: "linkedin-networking-tips",
    title: "17 LinkedIn Networking Tips That Actually Build Business Relationships (2026)",
    description: "Stop collecting connections. These 17 LinkedIn networking tips help B2B professionals build real relationships that lead to referrals, partnerships, and paying clients.",
    date: "2026-07-11",
  },
  {
    slug: "linkedin-lead-generation",
    title: "LinkedIn Lead Generation: 9 Strategies That Fill Your Pipeline (2026)",
    description: "The 9 best LinkedIn lead generation strategies for B2B professionals. From content-led inbound to warm DM sequences — how top consultants get clients from LinkedIn.",
    date: "2026-07-10",
  },
  {
    slug: "linkedin-personal-branding",
    title: "LinkedIn Personal Branding: The Complete Playbook for B2B Professionals (2026)",
    description: "Build a LinkedIn personal brand that attracts clients, not just connections. Covers profile optimization, content strategy, and converting followers into revenue.",
    date: "2026-07-10",
  },
  {
    slug: "b2b-content-marketing-linkedin",
    title: "B2B Content Marketing on LinkedIn: The 2026 Strategy That Generates Leads",
    description: "The complete B2B content marketing strategy for LinkedIn. Which content formats get reach, how to build a content calendar, and the flywheel that converts readers into clients.",
    date: "2026-07-10",
  },
  {
    slug: "how-to-write-linkedin-posts-that-get-engagement",
    title: "How to Write LinkedIn Posts That Get Engagement (2026 Guide)",
    description: "The 9 elements that separate viral LinkedIn posts from ignored ones — with frameworks, hook formulas, and real examples for B2B professionals.",
    date: "2026-07-09",
  },
  {
    slug: "linkedin-tips-for-b2b-sales",
    title: "7 LinkedIn Tips for B2B Sales That Actually Close Deals (2026)",
    description: "Stop sending cold DMs that get ignored. These 7 LinkedIn strategies are based on relationship-based selling that converts prospects into paying clients.",
    date: "2026-07-09",
  },
  {
    slug: "how-to-get-clients-on-linkedin",
    title: "How to Get Clients on LinkedIn: The 7-Step Playbook That Works in 2026",
    description: "Get your first (or next) high-ticket client on LinkedIn with a step-by-step system for profile optimization, content creation, and converting followers into paying clients.",
    date: "2026-07-08",
  },
  {
    slug: "linkedin-content-strategy-for-consultants",
    title: "LinkedIn Content Strategy for Consultants: How to Get 3 Clients/Month From Content",
    description: "A proven LinkedIn content strategy for consultants. Learn how to build authority, grow a targeted audience, and convert followers into high-ticket consulting clients.",
    date: "2026-07-07",
  },
]

function escape(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function GET() {
  const items = POSTS.map(
    (p) => `
  <item>
    <title>${escape(p.title)}</title>
    <link>${BASE}/blog/${p.slug}</link>
    <description>${escape(p.description)}</description>
    <pubDate>${new Date(p.date).toUTCString()}</pubDate>
    <guid isPermaLink="true">${BASE}/blog/${p.slug}</guid>
  </item>`
  ).join("")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Spur AI LinkedIn Growth Blog</title>
    <link>${BASE}/blog</link>
    <description>Expert guides on LinkedIn lead generation, personal branding, and B2B content marketing for consultants, coaches, and agency owners.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${BASE}/logo.svg</url>
      <title>Spur AI</title>
      <link>${BASE}</link>
    </image>${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}

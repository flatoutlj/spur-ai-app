import type { Metadata } from "next"
import Link from "next/link"
import EmailCaptureBar from "@/components/tools/EmailCaptureBar"

export const metadata: Metadata = {
  title: "Spur AI API & MCP Server — Add LinkedIn Content Generation to Your AI Agent",
  description:
    "A Claude-powered API and MCP server that lets any AI agent generate LinkedIn posts, hooks, and DMs. REST + Model Context Protocol. Built for AI builders and agent developers.",
  keywords: [
    "ai content api",
    "mcp server",
    "model context protocol",
    "linkedin api",
    "ai agent tools",
    "claude api",
    "content generation api",
  ],
  openGraph: {
    title: "Spur AI API & MCP Server",
    description:
      "Add Claude-powered LinkedIn content generation to your AI agent. REST API + MCP server for builders.",
    type: "website",
    url: "https://www.trispur.com/developers",
    siteName: "Spur AI",
  },
  alternates: { canonical: "https://www.trispur.com/developers" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "APIReference",
  name: "Spur AI API",
  description:
    "Claude-powered API and MCP server for generating LinkedIn content. Callable by AI agents via REST or the Model Context Protocol.",
  provider: { "@type": "Organization", name: "Spur AI", url: "https://www.trispur.com" },
}

function Code({ children }: { children: string }) {
  return (
    <pre className="bg-[#0b0f17] text-[#cfe0ff] rounded-xl p-4 overflow-x-auto text-sm leading-relaxed border border-[#243044]">
      <code>{children}</code>
    </pre>
  )
}

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Spur AI</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/free-tools" className="text-gray-600 hover:text-gray-900 text-sm font-medium px-4 py-2 hidden sm:block">Free Tools</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium px-4 py-2 hidden sm:block">Pricing</Link>
            <a href="#get-access" className="bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90">Get API access</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 border border-indigo-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-indigo-700 text-sm font-medium">For AI builders · REST API + MCP server</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Give your AI agent a LinkedIn content engine
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">
            Spur AI is Claude-powered. Call it from your own agent over a plain REST API, or plug in the
            MCP server and let Claude Desktop, Claude Code, or any MCP client generate posts, hooks, and
            DMs on demand.
          </p>
          <a href="#get-access" className="inline-block bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90">
            Request an API key →
          </a>
        </div>
      </section>

      {/* Quickstart */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">REST API</h2>
            <p className="text-gray-500 mb-4">One authenticated POST. Works from any language or agent framework.</p>
            <Code>{`curl -X POST https://www.trispur.com/api/v1/generate-post \\
  -H "x-api-key: spur_sk_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "niche": "saas",
    "type": "contrarian",
    "context": "pricing strategy"
  }'`}</Code>
            <p className="text-gray-500 text-sm mt-4 mb-2">Response:</p>
            <Code>{`{
  "post": "Unpopular opinion: your pricing page is...",
  "meta": { "niche": "saas", "type": "contrarian",
            "model": "claude-haiku-4-5", "provider": "anthropic" }
}`}</Code>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Parameters</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-100 rounded-lg">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="text-left px-4 py-2 font-semibold">Field</th>
                    <th className="text-left px-4 py-2 font-semibold">Required</th>
                    <th className="text-left px-4 py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-t border-gray-100"><td className="px-4 py-2 font-mono text-xs">niche</td><td className="px-4 py-2">yes</td><td className="px-4 py-2">consulting, agency, coach, saas, recruiter, finance — or any custom audience string</td></tr>
                  <tr className="border-t border-gray-100"><td className="px-4 py-2 font-mono text-xs">type</td><td className="px-4 py-2">no</td><td className="px-4 py-2">story (default), contrarian, howto, results, list</td></tr>
                  <tr className="border-t border-gray-100"><td className="px-4 py-2 font-mono text-xs">context</td><td className="px-4 py-2">no</td><td className="px-4 py-2">topic / angle / details to include</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">MCP server</h2>
            <p className="text-gray-500 mb-4">
              Prefer the <a href="https://modelcontextprotocol.io" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Model Context Protocol</a>?
              Run Spur as an MCP server and any MCP client can call it as a tool.
            </p>
            <Code>{`# Claude Code
claude mcp add spur-ai \\
  --env SPUR_API_KEY=spur_sk_... \\
  -- node /path/to/spur-mcp-server.mjs`}</Code>
            <p className="text-gray-500 text-sm mt-4">
              Server + full setup (Claude Desktop config included) in the{" "}
              <a href="https://github.com/flatoutlj/spur-ai-app/tree/main/mcp" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">mcp/ folder on GitHub</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Get access */}
      <section id="get-access" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Request an API key</h2>
          <p className="text-gray-500 mb-6">
            Keys are issued to early builders while the API is in beta. Drop your email and we&apos;ll send
            you a key and the docs.
          </p>
          <EmailCaptureBar source="developers-api" prompt="Get an API key + MCP setup guide for building on Spur AI." />
          <p className="text-gray-400 text-xs mt-4">
            Building an agent that needs more than posts (hooks, DMs, carousels)? Tell us at{" "}
            <a href="mailto:hello@trispur.com" className="text-blue-600 hover:underline">hello@trispur.com</a>.
          </p>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6 lg:px-8 text-center text-sm">
        <p>© 2026 Spur AI · <Link href="/" className="hover:text-white">Home</Link> · <Link href="/free-tools" className="hover:text-white">Free Tools</Link> · <Link href="/pricing" className="hover:text-white">Pricing</Link></p>
      </footer>
    </div>
  )
}

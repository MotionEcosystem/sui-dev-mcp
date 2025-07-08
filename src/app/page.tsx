"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  BookOpen,
  Wrench,
  AlertCircle,
  Copy,
  Check,
  Github,
  Terminal,
  Search,
  Atom,
  Orbit,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function SuiDeveloperMCP() {
  const [copiedSetup, setCopiedSetup] = useState(false)

  const setupCode = `{
  "mcpServers": {
    "sui-developer": {
      "command": "npx",
      "args": ["@sui-dev/mcp-server"],
      "env": {}
    }
  }
}`

  const copySetup = () => {
    navigator.clipboard.writeText(setupCode)
    setCopiedSetup(true)
    setTimeout(() => setCopiedSetup(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-['Inter',ui-sans-serif,system-ui] antialiased overflow-hidden relative">
      {/* Noise texture overlay */}
      <div 
        className="fixed inset-0 opacity-[0.015] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Physics Elements */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {/* Orbital rings - top right */}
        <div className="absolute top-20 right-20 w-80 h-80 opacity-5">
          <div className="absolute inset-0 border border-zinc-400 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute inset-8 border border-zinc-400 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          <div className="absolute inset-16 border border-zinc-400 rounded-full animate-spin" style={{ animationDuration: '25s' }} />
        </div>

        {/* Floating atoms */}
        <Atom className="absolute top-32 left-32 h-6 w-6 text-zinc-400 opacity-10 animate-pulse" />
        <Orbit className="absolute bottom-40 right-40 h-8 w-8 text-zinc-400 opacity-10 animate-bounce" style={{ animationDuration: '3s' }} />
        <Atom className="absolute top-2/3 left-1/4 h-5 w-5 text-zinc-400 opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Scattered dots */}
        <div className="absolute top-48 left-48 w-2 h-2 bg-zinc-400 rounded-full opacity-5 animate-pulse" />
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-zinc-400 rounded-full opacity-5 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-40 right-60 w-1 h-1 bg-zinc-400 rounded-full opacity-5 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-zinc-900">Sui Developer MCP</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/docs" className="text-zinc-700 hover:text-zinc-900 transition-colors">
                Documentation
              </Link>
              <Link href="/examples" className="text-zinc-700 hover:text-zinc-900 transition-colors">
                Examples
              </Link>
              <Link href="/tools" className="text-zinc-700 hover:text-zinc-900 transition-colors">
                Tools
              </Link>
              <a href="https://github.com/sui-dev/mcp-server" className="text-zinc-700 hover:text-zinc-900 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 lg:px-8 py-12 relative z-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <Badge className="bg-blue-50 text-blue-700 border-blue-200 mb-6">
              AI-Powered Development Tools
            </Badge>
            <h1 className="text-6xl font-black mb-6 text-zinc-900 tracking-tight">
              Sui Developer
              <br />
              <span className="text-blue-600">MCP Server</span>
            </h1>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
              Transform your Sui development experience with AI-powered tools that provide 
              intelligent code assistance, documentation search, and debugging help directly in your IDE.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/docs">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Get Started
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link href="/examples">
              <Button size="lg" variant="outline" className="text-zinc-700 border-zinc-300 px-8 py-3">
                <Code2 className="h-4 w-4 mr-2" />
                View Examples
              </Button>
            </Link>
            <Link href="/tools">
              <Button size="lg" variant="outline" className="text-zinc-700 border-zinc-300 px-8 py-3">
                <Wrench className="h-4 w-4 mr-2" />
                Explore Tools
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <Card className="bg-white/80 backdrop-blur-sm border-zinc-200/50 hover:shadow-lg transition-all duration-500 group">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl font-bold text-zinc-900">
                Smart Documentation Search
              </CardTitle>
              <CardDescription className="text-zinc-600 leading-relaxed">
                AI-powered semantic search across Sui documentation, ecosystem docs, and community resources. 
                Get contextual answers with code examples.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/docs#documentation-search">
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-zinc-200/50 hover:shadow-lg transition-all duration-500 group">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                <Code2 className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl font-bold text-zinc-900">
                Code Analysis & Generation
              </CardTitle>
              <CardDescription className="text-zinc-600 leading-relaxed">
                Advanced Move code analysis, security auditing, and TypeScript SDK generation. 
                Optimize your smart contracts and frontend integration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/tools#move-analyzer">
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-zinc-200/50 hover:shadow-lg transition-all duration-500 group">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                <AlertCircle className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl font-bold text-zinc-900">
                Error Debugging
              </CardTitle>
              <CardDescription className="text-zinc-600 leading-relaxed">
                Decode complex Sui transaction errors with intelligent explanations and actionable solutions. 
                Reduce debugging time significantly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/tools#error-decoder">
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Installation Section */}
        <Card className="bg-white/90 backdrop-blur-sm border-zinc-200/50 mb-20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-zinc-900 flex items-center gap-3">
              <Terminal className="h-6 w-6 text-blue-600" />
              Quick Setup
            </CardTitle>
            <CardDescription className="text-lg text-zinc-600">
              Get started in under 2 minutes with Claude Desktop or compatible MCP clients
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-zinc-900 mb-3">1. Add to MCP Settings</h4>
                <div className="bg-zinc-900 rounded-xl p-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                      <span className="ml-2 text-sm text-zinc-400 font-mono">claude_desktop_config.json</span>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={copySetup}
                      className="text-zinc-400 hover:text-white hover:bg-zinc-800"
                    >
                      {copiedSetup ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <pre className="text-sm text-zinc-300 font-mono leading-relaxed">
                    <div className="text-purple-400">module</div>
                    <div className="text-blue-400 ml-4">nft_collection::collection {`{`}</div>
                    <div className="text-gray-400 ml-8">{/* AI-assisted Move development */}</div>
                    <div className="text-green-400 ml-8">
                      use sui::object::{`{`}`self`, UID{`}`};
                    </div>
                    <div className="text-green-400 ml-8">use sui::transfer;</div>
                    <div className="text-green-400 ml-8">use sui::tx_context::{`{`}TxContext{`}`};</div>
                    <div className="text-white ml-8 mt-4">
                      struct NFT has key, store {`{`}
                    </div>
                    <div className="text-white ml-12">id: UID,</div>
                    <div className="text-white ml-12">name: String,</div>
                    <div className="text-white ml-12">description: String,</div>
                    <div className="text-white ml-8">{`}`}</div>
                    <div className="text-blue-400 ml-4">{`}`}</div>
                  </pre>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-3">2. Restart Claude Desktop</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Restart your Claude Desktop application to load the new MCP server configuration.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-3">3. Start Developing</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Ask questions about Sui development, request code examples, or get help debugging issues.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Examples */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <Card className="bg-white/80 backdrop-blur-sm border-zinc-200/50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-zinc-900">Smart Contract Help</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-sm font-mono text-zinc-700">
                    &quot;How do I create a liquidity pool in Move?&quot;
                  </p>
                </div>
                <div className="text-zinc-600 text-sm leading-relaxed">
                  Get detailed explanations with complete code examples, security considerations, and best practices.
                </div>
                <Link href="/examples">
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-300">
                    View More Examples
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-zinc-200/50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-zinc-900">Ecosystem Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <p className="text-sm font-mono text-zinc-700">
                    &quot;Show me how to integrate with Cetus DEX&quot;
                  </p>
                </div>
                <div className="text-zinc-600 text-sm leading-relaxed">
                  Search across the entire Sui ecosystem documentation with real-time updates and integration guides.
                </div>
                <Link href="/tools">
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-300">
                    Explore Tools
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-zinc-900 text-white max-w-3xl mx-auto">
            <CardContent className="pt-12 pb-12">
              <h3 className="text-3xl font-bold mb-6">
                Ready to Accelerate Your Sui Development?
              </h3>
              <p className="text-zinc-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                Join thousands of developers using AI-powered tools to build faster, 
                more secure, and better documented Sui applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs">
                  <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100 px-8 py-3">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Read Documentation
                  </Button>
                </Link>
                <a href="https://github.com/sui-dev/mcp-server" className="inline-block">
                  <Button size="lg" variant="outline" className="border-zinc-600 text-white hover:bg-zinc-800 px-8 py-3">
                    <Github className="h-5 w-5 mr-2" />
                    Star on GitHub
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

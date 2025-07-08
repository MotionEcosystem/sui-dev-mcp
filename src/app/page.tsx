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
  Shield,
  Copy,
  Check,
  Github,
  ExternalLink,
  Terminal,
  Zap,
  Search,
  MessageSquare,
  Atom,
  Orbit,
} from "lucide-react"

export default function SuiDeveloperMCP() {
  const [copiedSetup, setCopiedSetup] = useState(false)

  const setupCode = `{
  "mcpServers": {
    "sui-developer": {
      "command": "npx",
      "args": ["@sui-dev/mcp-server"],
      "env": {
        "SUI_NETWORK": "mainnet"
      }
    }
  }
}`

  const copySetupCode = () => {
    navigator.clipboard.writeText(setupCode)
    setCopiedSetup(true)
    setTimeout(() => setCopiedSetup(false), 2000)
  }

  const features = [
    {
      icon: Code2,
      title: "Expert Move Development Help",
      description: "Get guidance on smart contract patterns, syntax, and Move language best practices",
    },
    {
      icon: BookOpen,
      title: "Documentation Search",
      description: "Search through comprehensive Sui documentation with AI-powered context understanding",
    },
    {
      icon: Wrench,
      title: "SDK Integration Help",
      description: "TypeScript and Rust SDK assistance with code examples and implementation guidance",
    },
    {
      icon: AlertCircle,
      title: "Error Explanation",
      description: "Decode and solve Sui-specific errors with detailed explanations and solutions",
    },
    {
      icon: Shield,
      title: "Best Practices Guide",
      description: "Security, performance, and architecture recommendations for production-ready dApps",
    },
    {
      icon: Search,
      title: "Code Analysis",
      description: "Analyze your Move code for potential issues, optimizations, and improvements",
    },
  ]

  const tools = [
    {
      name: "sui-docs-search",
      description: "Search and retrieve relevant documentation",
      example: "Find information about object ownership models",
    },
    {
      name: "move-analyzer",
      description: "Analyze Move code for best practices",
      example: "Review smart contract for security vulnerabilities",
    },
    {
      name: "sdk-helper",
      description: "Generate SDK integration examples",
      example: "Show how to interact with a custom Move module",
    },
    {
      name: "error-decoder",
      description: "Explain Sui transaction errors",
      example: "Decode 'InsufficientGas' error with solutions",
    },
  ]

  const usageExamples = [
    "How do I create an NFT collection in Sui Move?",
    "Help me debug this transaction error: 'ObjectNotFound'",
    "What are security best practices for DeFi on Sui?",
    "Show me how to implement a marketplace smart contract",
    "How do I optimize gas usage in my Move functions?",
  ]

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-['Inter',ui-sans-serif,system-ui] antialiased">
      {/* Noise texture overlay */}
      <div 
        className="fixed inset-0 opacity-[0.015] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating physics shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Orbital rings */}
        <div className="absolute top-20 right-20 w-96 h-96 opacity-5">
          <div className="w-full h-full rounded-full border border-blue-500/30 animate-spin" style={{ animationDuration: '20s' }}>
            <div className="absolute top-8 left-8 w-80 h-80 rounded-full border border-blue-400/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
              <div className="absolute top-6 left-6 w-68 h-68 rounded-full border border-blue-300/10 animate-spin" style={{ animationDuration: '10s' }}></div>
            </div>
          </div>
        </div>

        {/* Floating atoms */}
        <div className="absolute top-1/3 left-10 w-32 h-32 opacity-10">
          <Atom className="w-full h-full text-blue-500 animate-pulse" />
        </div>

        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 opacity-8">
          <Orbit className="w-full h-full text-blue-400 animate-spin" style={{ animationDuration: '8s' }} />
        </div>

        {/* Geometric shapes */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-500/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-blue-400/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-blue-600/15 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-zinc-50/50">
        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-8 bg-blue-50 text-blue-700 border-blue-200/50 font-medium tracking-wide">
              AI-Powered Development Assistant
            </Badge>
            <h1 className="text-6xl lg:text-8xl font-black mb-8 text-zinc-900 tracking-tight leading-[0.9]">
              Sui Developer
              <br />
              <span className="text-blue-600">MCP</span>
            </h1>
            <p className="text-xl lg:text-2xl text-zinc-700 mb-6 font-medium tracking-wide">
              AI-Powered Tools for Sui Developers
            </p>
            <p className="text-lg text-zinc-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Access real-time documentation, expert help, and best practices directly in your IDE
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 border-0"
              >
                <Zap className="mr-2 h-5 w-5" />
                Quick Setup
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-300 text-zinc-700 hover:bg-zinc-50 px-8 py-4 font-semibold tracking-wide bg-white/80 backdrop-blur-sm"
              >
                <Terminal className="mr-2 h-5 w-5" />
                View Tools
              </Button>
            </div>
          </div>

          {/* Code Editor Mockup */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-zinc-200/50 overflow-hidden shadow-2xl shadow-zinc-900/5">
              <div className="flex items-center gap-3 px-6 py-4 bg-zinc-50/80 border-b border-zinc-200/50">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-4 text-sm text-zinc-500 font-mono">sui-nft-contract.move</span>
              </div>
              <div className="p-8 font-mono text-sm leading-relaxed">
                <div className="text-blue-600 font-semibold">module</div>
                <div className="text-zinc-800 ml-4 font-medium">nft_collection::collection {`{`}</div>
                <div className="text-zinc-400 ml-8 italic">{/* AI-assisted Move development */}</div>
                <div className="text-green-600 ml-8 font-medium">
                  use sui::object::{`{`}`self`, UID{`}`};
                </div>
                <div className="text-green-600 ml-8 font-medium">use sui::transfer;</div>
                <div className="text-zinc-400 ml-4">...</div>
                <div className="text-zinc-800 font-medium">{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6 text-zinc-900 tracking-tight">
              Powerful Development Features
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to build exceptional dApps on Sui blockchain
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-zinc-200/50 hover:border-blue-200 transition-all duration-300 hover:shadow-lg shadow-zinc-900/5 group">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                    <feature.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-zinc-900 font-bold text-lg leading-tight">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-600 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Setup */}
      <section className="py-24 bg-zinc-50/50 relative">
        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black mb-6 text-zinc-900 tracking-tight">Quick Setup</h2>
              <p className="text-xl text-zinc-600 leading-relaxed">Get started in minutes with Claude, Cursor, or Windsurf</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-zinc-900">Install MCP Server</h3>
                    <p className="text-zinc-600 leading-relaxed">Add the Sui Developer MCP server to your IDE configuration</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-zinc-900">Configure Settings</h3>
                    <p className="text-zinc-600 leading-relaxed">Copy the configuration JSON to your MCP settings file</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-zinc-900">Start Developing</h3>
                    <p className="text-zinc-600 leading-relaxed">Begin asking questions and getting AI-powered assistance</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-zinc-200/50 overflow-hidden shadow-xl shadow-zinc-900/5">
                <div className="flex items-center justify-between px-6 py-4 bg-zinc-50/80 border-b border-zinc-200/50">
                  <span className="text-sm text-zinc-600 font-mono font-medium">mcp-settings.json</span>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={copySetupCode} 
                    className="text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                  >
                    {copiedSetup ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <pre className="p-6 text-sm font-mono text-zinc-700 overflow-x-auto leading-relaxed bg-zinc-50/30">
                  {setupCode}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black mb-6 text-zinc-900 tracking-tight">Ask Anything About Sui</h2>
              <p className="text-xl text-zinc-600 leading-relaxed">Get instant help with common development questions</p>
            </div>

            <div className="space-y-4">
              {usageExamples.map((example, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-zinc-50/80 rounded-xl border border-zinc-200/50 hover:border-blue-200 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-zinc-700 leading-relaxed font-medium">{example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Showcase */}
      <section className="py-24 bg-zinc-50/50 relative">
        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6 text-zinc-900 tracking-tight">Available Tools</h2>
            <p className="text-xl text-zinc-600 leading-relaxed">Specialized tools for every aspect of Sui development</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-zinc-200/50 hover:border-blue-200 transition-all duration-300 hover:shadow-lg shadow-zinc-900/5 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-zinc-900 flex items-center gap-3 font-bold text-lg">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      <Code2 className="h-5 w-5 text-blue-600" />
                    </div>
                    {tool.name}
                  </CardTitle>
                  <CardDescription className="text-zinc-600 leading-relaxed">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-zinc-50/80 rounded-xl p-4 border border-zinc-200/50">
                    <p className="text-sm text-zinc-700 font-mono leading-relaxed">
                      <span className="text-zinc-500">Example:</span> {tool.example}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-zinc-200/50 relative">
        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black mb-3 text-zinc-900 tracking-tight">
                Sui Developer MCP
              </h3>
              <p className="text-zinc-600 font-medium">Built by MotionEcosystem</p>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 font-semibold">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="ghost" size="sm" className="text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 font-semibold">
                <BookOpen className="mr-2 h-4 w-4" />
                Documentation
              </Button>
              <Button variant="ghost" size="sm" className="text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 font-semibold">
                <ExternalLink className="mr-2 h-4 w-4" />
                Sui Network
              </Button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-200/50 text-center text-zinc-500">
            <p>&copy; 2024 MotionEcosystem. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

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
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-teal-600/20 to-cyan-600/20" />
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">
              AI-Powered Development Assistant
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Sui Developer MCP
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-4 font-medium">AI-Powered Tools for Sui Developers</p>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              Access real-time documentation, expert help, and best practices directly in your IDE
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Zap className="mr-2 h-5 w-5" />
                Quick Setup
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 bg-transparent"
              >
                <Terminal className="mr-2 h-5 w-5" />
                View Tools
              </Button>
            </div>
          </div>

          {/* Code Editor Mockup */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-700 border-b border-slate-600">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm text-slate-400">sui-nft-contract.move</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-purple-400">module</div>
                <div className="text-blue-400 ml-4">nft_collection::collection {`{`}</div>
                <div className="text-gray-400 ml-8">// AI-assisted Move development</div>
                <div className="text-green-400 ml-8">
                  use sui::object::{`{`}`self`, UID{`}`};
                </div>
                <div className="text-green-400 ml-8">use sui::transfer;</div>
                <div className="text-slate-500 ml-4">...</div>
                <div className="text-blue-400">{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Development Features</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to build exceptional dApps on Sui blockchain
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Setup */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Quick Setup</h2>
              <p className="text-xl text-slate-400">Get started in minutes with Claude, Cursor, or Windsurf</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Install MCP Server</h3>
                    <p className="text-slate-400">Add the Sui Developer MCP server to your IDE configuration</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Configure Settings</h3>
                    <p className="text-slate-400">Copy the configuration JSON to your MCP settings file</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Start Developing</h3>
                    <p className="text-slate-400">Begin asking questions and getting AI-powered assistance</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-slate-700 border-b border-slate-600">
                  <span className="text-sm text-slate-400">mcp-settings.json</span>
                  <Button size="sm" variant="ghost" onClick={copySetupCode} className="text-slate-400 hover:text-white">
                    {copiedSetup ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <pre className="p-4 text-sm font-mono text-slate-300 overflow-x-auto">{setupCode}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Ask Anything About Sui</h2>
              <p className="text-xl text-slate-400">Get instant help with common development questions</p>
            </div>

            <div className="space-y-4">
              {usageExamples.map((example, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <MessageSquare className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-300">{example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Showcase */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Available Tools</h2>
            <p className="text-xl text-slate-400">Specialized tools for every aspect of Sui development</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-teal-500/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-teal-400" />
                    {tool.name}
                  </CardTitle>
                  <CardDescription className="text-slate-400">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 rounded p-3 border border-slate-600">
                    <p className="text-sm text-slate-300 font-mono">Example: {tool.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Sui Developer MCP
              </h3>
              <p className="text-slate-400">Built by MotionEcosystem</p>
            </div>

            <div className="flex gap-6">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                <BookOpen className="mr-2 h-4 w-4" />
                Documentation
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                <ExternalLink className="mr-2 h-4 w-4" />
                Sui Network
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500">
            <p>&copy; 2024 MotionEcosystem. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

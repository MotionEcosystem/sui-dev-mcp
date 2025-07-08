"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Code2,
  Search,
  Wrench,
  AlertCircle,
  BookOpen,
  ArrowLeft,
  Play,
  Zap,
  Terminal,
  Bot,
  Cpu,
  Database,
  GitBranch,
  Eye,
} from "lucide-react"
import Link from "next/link"

export default function ToolsPage() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  const tools = [
    {
      id: "sui-docs-search",
      name: "Documentation Search",
      icon: BookOpen,
      category: "Research",
      description: "AI-powered search through comprehensive Sui documentation with context understanding",
      features: [
        "Semantic search across all Sui docs",
        "Real-time documentation updates",
        "Context-aware results",
        "Code example extraction",
        "API reference lookup"
      ],
      useCases: [
        "Find specific API documentation",
        "Search for implementation patterns",
        "Lookup Move language features",
        "Get transaction examples"
      ],
      example: {
        query: "How to create shared objects in Sui?",
        response: `Found 3 relevant documentation sections:

1. **Shared Objects Overview** (sui.io/concepts/object-ownership)
   - Shared objects can be accessed by anyone
   - Created using transfer::share_object()
   - Mutable by multiple transactions

2. **Code Example:**
   \`\`\`move
   struct SharedCounter has key {
       id: UID,
       value: u64,
   }

   public entry fun create_counter(ctx: &mut TxContext) {
       let counter = SharedCounter {
           id: object::new(ctx),
           value: 0,
       };
       transfer::share_object(counter);
   }
   \`\`\`

3. **Best Practices:**
   - Use shared objects for global state
   - Consider gas costs for concurrent access
   - Implement proper access controls`
      }
    },
    {
      id: "move-analyzer",
      name: "Move Code Analyzer",
      icon: Code2,
      category: "Development",
      description: "Advanced static analysis for Move smart contracts with security and optimization suggestions",
      features: [
        "Security vulnerability detection",
        "Gas optimization analysis",
        "Code pattern recognition",
        "Best practices enforcement",
        "Dependency analysis"
      ],
      useCases: [
        "Security audit preparation",
        "Performance optimization",
        "Code quality improvement",
        "Pre-deployment validation"
      ],
      example: {
        query: "Analyze this NFT contract for issues",
        response: `🔍 **Analysis Results:**

**✅ Security Issues Found:**
- Line 23: Missing access control in mint function
- Line 45: Potential integer overflow in supply calculation

**⚡ Gas Optimizations:**
- Line 12: Use \`vector::length\` instead of counter
- Line 67: Cache object field access

**📋 Best Practices:**
- Consider using events for mint operations
- Add proper error codes for assertions
- Implement royalty standards

**📊 Overall Score: 8.2/10**
- Security: Good (minor issues)
- Gas Efficiency: Very Good
- Code Quality: Excellent`
      }
    },
    {
      id: "sdk-helper",
      name: "SDK Integration Helper",
      icon: Wrench,
      category: "Integration",
      description: "Generate TypeScript and Rust SDK code for interacting with your Move modules",
      features: [
        "TypeScript SDK generation",
        "Rust SDK examples",
        "Transaction building helpers",
        "Type-safe interfaces",
        "Error handling patterns"
      ],
      useCases: [
        "Frontend dApp integration",
        "Backend service integration",
        "CLI tool development",
        "Testing framework setup"
      ],
      example: {
        query: "Generate TypeScript code to mint an NFT",
        response: `🚀 **Generated TypeScript Code:**

\`\`\`typescript
import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';
import { TransactionBlock } from '@mysten/sui.js/transactions';

export async function mintNFT(
  client: SuiClient,
  packageId: string,
  collectionId: string,
  name: string,
  description: string,
  imageUrl: string,
  recipient: string,
  signer: any
) {
  const txb = new TransactionBlock();
  
  txb.moveCall({
    target: \`\${packageId}::nft::mint\`,
    arguments: [
      txb.object(collectionId),
      txb.pure(name),
      txb.pure(description),
      txb.pure(imageUrl),
      txb.pure(recipient),
    ],
  });

  const result = await client.signAndExecuteTransactionBlock({
    signer,
    transactionBlock: txb,
    options: {
      showEffects: true,
      showObjectChanges: true,
    },
  });

  return result;
}
\`\`\`

**Usage Example:**
\`\`\`typescript
const result = await mintNFT(
  client,
  '0x123...',
  '0x456...',
  'My NFT',
  'A beautiful NFT',
  'https://example.com/image.png',
  '0x789...',
  keypair
);
\`\`\``
      }
    },
    {
      id: "error-decoder",
      name: "Error Decoder",
      icon: AlertCircle,
      category: "Debugging",
      description: "Decode and explain Sui transaction errors with actionable solutions",
      features: [
        "Error message translation",
        "Root cause analysis",
        "Solution suggestions",
        "Common patterns database",
        "Debug workflow guidance"
      ],
      useCases: [
        "Transaction debugging",
        "Development troubleshooting",
        "User support",
        "Error monitoring"
      ],
      example: {
        query: "Decode error: InsufficientGas with code 65537",
        response: `🚨 **Error Analysis:**

**Error Type:** InsufficientGas (Code: 65537)

**🔍 Root Cause:**
Your transaction requires more gas than the budget you specified. This commonly happens when:
- Complex computation in Move functions
- Large object operations
- Multiple function calls in one transaction

**💡 Solutions:**
1. **Increase Gas Budget:**
   \`\`\`typescript
   const txb = new TransactionBlock();
   txb.setGasBudget(10000000); // Increase from default
   \`\`\`

2. **Optimize Move Code:**
   - Reduce vector operations
   - Cache repeated calculations
   - Split complex operations

3. **Check Gas Estimation:**
   \`\`\`typescript
   const dryRun = await client.dryRunTransactionBlock({
     transactionBlock: txb
   });
   console.log('Estimated gas:', dryRun.effects.gasUsed);
   \`\`\`

**📊 Typical Gas Costs:**
- Simple transfer: ~1M gas units
- NFT mint: ~5M gas units
- Complex DeFi operations: ~10M+ gas units`
      }
    },
    {
      id: "ecosystem-search",
      name: "Ecosystem Documentation",
      icon: Search,
      category: "Research",
      description: "Search across the entire Sui ecosystem documentation including major protocols and tools",
      features: [
        "Multi-protocol search",
        "Real-time ecosystem updates",
        "Integration examples",
        "Protocol comparisons",
        "API cross-references"
      ],
      useCases: [
        "Research DeFi protocols",
        "Find integration patterns",
        "Compare implementations",
        "Discover new tools"
      ],
      example: {
        query: "How to integrate with Sui DEXs?",
        response: `🔍 **Ecosystem Search Results:**

**1. Cetus Protocol** (CLMM DEX)
- TypeScript SDK: @cetusprotocol/sui-sdk
- Swap integration: CetusClmm.swap()
- Pool creation: Concentrated liquidity pools

**2. Turbos Finance** 
- AMM-style pools
- SDK: @turbos-finance/sui-sdk
- Multi-hop routing support

**3. Deepbook** (Order Book DEX)
- Native order book on Sui
- Professional trading features
- Integration: deepbook package

**🛠️ Integration Example:**
\`\`\`typescript
// Cetus swap example
import { CetusClmm } from '@cetusprotocol/sui-sdk';

const cetus = new CetusClmm(client);
const swapResult = await cetus.swap({
  poolAddress: '0x...',
  tokenIn: 'SUI',
  tokenOut: 'USDC',
  amountIn: '1000000000',
  slippage: 0.005
});
\`\`\``
      }
    },
    {
      id: "ai-assistant",
      name: "AI Development Assistant",
      icon: Bot,
      category: "AI",
      description: "Conversational AI assistant for Sui development questions and code generation",
      features: [
        "Natural language queries",
        "Code generation",
        "Architecture advice",
        "Best practices guidance",
        "Learning assistance"
      ],
      useCases: [
        "Learning Sui development",
        "Architecture planning",
        "Code review assistance",
        "Quick problem solving"
      ],
      example: {
        query: "How should I structure a multi-module DeFi project?",
        response: `🏗️ **DeFi Project Structure Recommendation:**

**📁 Project Layout:**
\`\`\`
defi_protocol/
├── sources/
│   ├── core/
│   │   ├── math.move          # Mathematical utilities
│   │   └── events.move        # Protocol events
│   ├── pools/
│   │   ├── pool.move          # Core pool logic
│   │   └── factory.move       # Pool creation
│   ├── tokens/
│   │   └── lp_coin.move       # LP token implementation
│   └── governance/
│       ├── dao.move           # Governance module
│       └── voting.move        # Voting mechanisms
├── tests/
└── scripts/
\`\`\`

**🎯 Key Principles:**
1. **Separation of Concerns:** Each module handles specific functionality
2. **Shared Utilities:** Common math and validation in core modules
3. **Upgradability:** Consider upgrade patterns early
4. **Testing:** Comprehensive test coverage for each module

**🔗 Module Dependencies:**
- Pool module depends on math utilities
- Factory creates and manages pools
- Governance modules are separate for security

**💡 Best Practices:**
- Use capability patterns for admin functions
- Implement proper access controls
- Consider gas optimization from the start
- Plan for multi-sig governance`
      }
    }
  ]

  const categories = ["All", "Research", "Development", "Integration", "Debugging", "AI"]

  const [activeCategory, setActiveCategory] = useState("All")

  const filteredTools = activeCategory === "All" 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory)

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-['Inter',ui-sans-serif,system-ui] antialiased">
      {/* Noise texture overlay */}
      <div 
        className="fixed inset-0 opacity-[0.015] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-blue-600" />
              <span className="font-bold text-zinc-900">MCP Tools</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 lg:px-8 py-12 relative z-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-6 text-zinc-900 tracking-tight">
            MCP Development Tools
          </h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Powerful AI-driven tools that integrate directly into your IDE to accelerate Sui development.
            Each tool is designed to solve specific challenges in the blockchain development workflow.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "text-zinc-700 hover:text-zinc-900 border-zinc-300"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredTools.map((tool) => (
            <Card key={tool.id} className="bg-white/80 backdrop-blur-sm border-zinc-200/50 hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      <tool.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-zinc-900">{tool.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1">{tool.category}</Badge>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveDemo(activeDemo === tool.id ? null : tool.id)}
                    className="text-zinc-700 border-zinc-300"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    {activeDemo === tool.id ? "Hide" : "Demo"}
                  </Button>
                </div>
                <CardDescription className="text-zinc-600 leading-relaxed mt-4">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-zinc-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {tool.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-zinc-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h4 className="font-semibold text-zinc-900 mb-3">Use Cases</h4>
                    <div className="flex flex-wrap gap-2">
                      {tool.useCases.map((useCase, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Demo */}
                  {activeDemo === tool.id && (
                    <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200">
                      <h4 className="font-semibold text-zinc-900 mb-4 flex items-center gap-2">
                        <Terminal className="h-4 w-4" />
                        Interactive Demo
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-zinc-600 mb-2">Query:</p>
                          <div className="bg-white p-3 rounded-lg border font-mono text-sm">
                            {tool.example.query}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-zinc-600 mb-2">Response:</p>
                          <div className="bg-zinc-900 text-zinc-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                            <pre className="whitespace-pre-wrap">{tool.example.response}</pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Guide */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200/50 mb-16">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-zinc-900 flex items-center gap-3">
              <Zap className="h-6 w-6 text-blue-600" />
              How to Use These Tools
            </CardTitle>
            <CardDescription className="text-lg text-zinc-700">
              Get started with MCP tools in your development environment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-semibold text-zinc-900 mb-2">Install MCP Server</h3>
                <p className="text-zinc-600 text-sm">
                  Set up the Sui Developer MCP server in your IDE following our installation guide
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-semibold text-zinc-900 mb-2">Ask Questions</h3>
                <p className="text-zinc-600 text-sm">
                  Use natural language to ask questions and request code examples directly in your IDE
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-semibold text-zinc-900 mb-2">Get AI Assistance</h3>
                <p className="text-zinc-600 text-sm">
                  Receive intelligent responses with code, documentation, and best practices
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center bg-white/80 backdrop-blur-sm border-zinc-200/50">
            <CardContent className="pt-6">
              <Database className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-zinc-900 mb-2">10M+</div>
              <p className="text-zinc-600 text-sm">Documentation entries indexed</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-white/80 backdrop-blur-sm border-zinc-200/50">
            <CardContent className="pt-6">
              <Cpu className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-zinc-900 mb-2">&lt;100ms</div>
              <p className="text-zinc-600 text-sm">Average response time</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-white/80 backdrop-blur-sm border-zinc-200/50">
            <CardContent className="pt-6">
              <Eye className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-zinc-900 mb-2">95%</div>
              <p className="text-zinc-600 text-sm">Code analysis accuracy</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-white/80 backdrop-blur-sm border-zinc-200/50">
            <CardContent className="pt-6">
              <GitBranch className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-zinc-900 mb-2">50+</div>
              <p className="text-zinc-600 text-sm">Supported protocols</p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-zinc-900 text-white max-w-2xl mx-auto">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Accelerate Your Development?
              </h3>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                Install the Sui Developer MCP server and start building with AI-powered assistance
              </p>
              <div className="flex gap-3 justify-center">
                <Link href="/docs">
                  <Button className="bg-white text-zinc-900 hover:bg-zinc-100">
                    Get Started
                  </Button>
                </Link>
                <Link href="/examples">
                  <Button variant="outline" className="border-zinc-600 text-white hover:bg-zinc-800">
                    View Examples
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 
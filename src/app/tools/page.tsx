'use client'

import { ThemeToggle } from '@/components/theme-toggle'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  AlertCircle,
  ArrowLeft,
  BookOpen,
  Bot,
  Code2,
  Cpu,
  Database,
  Eye,
  GitBranch,
  Play,
  Search,
  Terminal,
  Wrench,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ToolsPage() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  const tools = [
    {
      id: 'sui-docs-search',
      name: 'Documentation Search',
      icon: BookOpen,
      category: 'Research',
      description:
        'AI-powered search through comprehensive Sui documentation with context understanding',
      features: [
        'Semantic search across all Sui docs',
        'Real-time documentation updates',
        'Context-aware results',
        'Code example extraction',
        'API reference lookup',
      ],
      useCases: [
        'Find specific API documentation',
        'Search for implementation patterns',
        'Lookup Move language features',
        'Get transaction examples',
      ],
      example: {
        query: 'How to create shared objects in Sui?',
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
   - Implement proper access controls`,
      },
    },
    {
      id: 'move-analyzer',
      name: 'Move Code Analyzer',
      icon: Code2,
      category: 'Development',
      description:
        'Advanced static analysis for Move smart contracts with security and optimization suggestions',
      features: [
        'Security vulnerability detection',
        'Gas optimization analysis',
        'Code pattern recognition',
        'Best practices enforcement',
        'Dependency analysis',
      ],
      useCases: [
        'Security audit preparation',
        'Performance optimization',
        'Code quality improvement',
        'Pre-deployment validation',
      ],
      example: {
        query: 'Analyze this NFT contract for issues',
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
- Code Quality: Excellent`,
      },
    },
    {
      id: 'sdk-helper',
      name: 'SDK Integration Helper',
      icon: Wrench,
      category: 'Integration',
      description: 'Generate TypeScript and Rust SDK code for interacting with your Move modules',
      features: [
        'TypeScript SDK generation',
        'Rust SDK examples',
        'Transaction building helpers',
        'Type-safe interfaces',
        'Error handling patterns',
      ],
      useCases: [
        'Frontend dApp integration',
        'Backend service integration',
        'CLI tool development',
        'Testing framework setup',
      ],
      example: {
        query: 'Generate TypeScript code to mint an NFT',
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
\`\`\``,
      },
    },
    {
      id: 'error-decoder',
      name: 'Error Decoder',
      icon: AlertCircle,
      category: 'Debugging',
      description: 'Decode and explain Sui transaction errors with actionable solutions',
      features: [
        'Error message translation',
        'Root cause analysis',
        'Solution suggestions',
        'Common patterns database',
        'Debug workflow guidance',
      ],
      useCases: [
        'Transaction debugging',
        'Development troubleshooting',
        'User support',
        'Error monitoring',
      ],
      example: {
        query: 'Decode error: InsufficientGas with code 65537',
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
- Complex DeFi operations: ~10M+ gas units`,
      },
    },
    {
      id: 'ecosystem-search',
      name: 'Ecosystem Documentation',
      icon: Search,
      category: 'Research',
      description:
        'Search across the entire Sui ecosystem documentation including major protocols and tools',
      features: [
        'Multi-protocol search',
        'Real-time ecosystem updates',
        'Integration examples',
        'Protocol comparisons',
        'API cross-references',
      ],
      useCases: [
        'Research DeFi protocols',
        'Find integration patterns',
        'Compare implementations',
        'Discover new tools',
      ],
      example: {
        query: 'How to integrate with Sui DEXs?',
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
\`\`\``,
      },
    },
    {
      id: 'ai-assistant',
      name: 'AI Development Assistant',
      icon: Bot,
      category: 'AI',
      description: 'Conversational AI assistant for Sui development questions and code generation',
      features: [
        'Natural language queries',
        'Code generation',
        'Architecture advice',
        'Best practices guidance',
        'Learning assistance',
      ],
      useCases: [
        'Learning Sui development',
        'Architecture planning',
        'Code review assistance',
        'Quick problem solving',
      ],
      example: {
        query: 'How should I structure a multi-module DeFi project?',
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
- Plan for multi-sig governance`,
      },
    },
  ]

  const categories = ['All', 'Research', 'Development', 'Integration', 'Debugging', 'AI']

  const [activeCategory, setActiveCategory] = useState('All')

  const filteredTools =
    activeCategory === 'All' ? tools : tools.filter(tool => tool.category === activeCategory)

  return (
    <div className="min-h-screen bg-white font-['Inter',ui-sans-serif,system-ui] text-zinc-900 antialiased">
      {/* Noise texture overlay */}
      <div
        className='pointer-events-none fixed inset-0 z-10 opacity-[0.015]'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <header className='sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-xl'>
        <div className='container mx-auto px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='flex items-center gap-4'>
              <Link
                href='/'
                className='flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900'
              >
                <ArrowLeft className='h-4 w-4' />
                Back to Home
              </Link>
            </div>
            <div className='flex items-center gap-2'>
              <Wrench className='h-5 w-5 text-blue-600' />
              <span className='font-bold text-zinc-900'>MCP Tools</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className='container relative z-20 mx-auto px-6 py-12 lg:px-8'>
        {/* Hero Section */}
        <div className='mb-16 text-center'>
          <h1 className='mb-6 text-5xl font-black tracking-tight text-zinc-900'>
            MCP Development Tools
          </h1>
          <p className='mx-auto max-w-3xl text-xl leading-relaxed text-zinc-600'>
            Powerful AI-driven tools that integrate directly into your IDE to accelerate Sui
            development. Each tool is designed to solve specific challenges in the blockchain
            development workflow.
          </p>
        </div>

        {/* Category Filter */}
        <div className='mb-12 flex flex-wrap justify-center gap-3'>
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'border-zinc-300 text-zinc-700 hover:text-zinc-900'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className='mb-16 grid gap-8 lg:grid-cols-2'>
          {filteredTools.map(tool => (
            <Card
              key={tool.id}
              className='group border-zinc-200/50 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg'
            >
              <CardHeader>
                <div className='flex items-start justify-between'>
                  <div className='flex items-center gap-3'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100'>
                      <tool.icon className='h-6 w-6 text-blue-600' />
                    </div>
                    <div>
                      <CardTitle className='text-xl font-bold text-zinc-900'>{tool.name}</CardTitle>
                      <Badge variant='secondary' className='mt-1'>
                        {tool.category}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => setActiveDemo(activeDemo === tool.id ? null : tool.id)}
                    className='border-zinc-300 text-zinc-700'
                  >
                    <Play className='mr-2 h-4 w-4' />
                    {activeDemo === tool.id ? 'Hide' : 'Demo'}
                  </Button>
                </div>
                <CardDescription className='mt-4 leading-relaxed text-zinc-600'>
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-6'>
                  {/* Features */}
                  <div>
                    <h4 className='mb-3 font-semibold text-zinc-900'>Key Features</h4>
                    <ul className='space-y-2'>
                      {tool.features.map((feature, index) => (
                        <li key={index} className='flex items-start gap-2 text-zinc-700'>
                          <div className='mt-2.5 h-1.5 w-1.5 rounded-full bg-blue-600' />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h4 className='mb-3 font-semibold text-zinc-900'>Use Cases</h4>
                    <div className='flex flex-wrap gap-2'>
                      {tool.useCases.map((useCase, index) => (
                        <Badge key={index} variant='outline' className='text-xs'>
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Demo */}
                  {activeDemo === tool.id && (
                    <div className='rounded-xl border border-zinc-200 bg-zinc-50 p-6'>
                      <h4 className='mb-4 flex items-center gap-2 font-semibold text-zinc-900'>
                        <Terminal className='h-4 w-4' />
                        Interactive Demo
                      </h4>
                      <div className='space-y-4'>
                        <div>
                          <p className='mb-2 text-sm text-zinc-600'>Query:</p>
                          <div className='rounded-lg border bg-white p-3 font-mono text-sm'>
                            {tool.example.query}
                          </div>
                        </div>
                        <div>
                          <p className='mb-2 text-sm text-zinc-600'>Response:</p>
                          <div className='overflow-x-auto rounded-lg bg-zinc-900 p-4 font-mono text-sm text-zinc-300'>
                            <pre className='whitespace-pre-wrap'>{tool.example.response}</pre>
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
        <Card className='mb-16 border-blue-200/50 bg-gradient-to-r from-blue-50 to-indigo-50'>
          <CardHeader>
            <CardTitle className='flex items-center gap-3 text-2xl font-bold text-zinc-900'>
              <Zap className='h-6 w-6 text-blue-600' />
              How to Use These Tools
            </CardTitle>
            <CardDescription className='text-lg text-zinc-700'>
              Get started with MCP tools in your development environment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-6 md:grid-cols-3'>
              <div className='text-center'>
                <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white'>
                  1
                </div>
                <h3 className='mb-2 font-semibold text-zinc-900'>Install MCP Server</h3>
                <p className='text-sm text-zinc-600'>
                  Set up the Sui Developer MCP server in your IDE following our installation guide
                </p>
              </div>
              <div className='text-center'>
                <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white'>
                  2
                </div>
                <h3 className='mb-2 font-semibold text-zinc-900'>Ask Questions</h3>
                <p className='text-sm text-zinc-600'>
                  Use natural language to ask questions and request code examples directly in your
                  IDE
                </p>
              </div>
              <div className='text-center'>
                <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white'>
                  3
                </div>
                <h3 className='mb-2 font-semibold text-zinc-900'>Get AI Assistance</h3>
                <p className='text-sm text-zinc-600'>
                  Receive intelligent responses with code, documentation, and best practices
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Stats */}
        <div className='mb-16 grid gap-6 md:grid-cols-4'>
          <Card className='border-zinc-200/50 bg-white/80 text-center backdrop-blur-sm'>
            <CardContent className='pt-6'>
              <Database className='mx-auto mb-4 h-8 w-8 text-blue-600' />
              <div className='mb-2 text-2xl font-bold text-zinc-900'>10M+</div>
              <p className='text-sm text-zinc-600'>Documentation entries indexed</p>
            </CardContent>
          </Card>
          <Card className='border-zinc-200/50 bg-white/80 text-center backdrop-blur-sm'>
            <CardContent className='pt-6'>
              <Cpu className='mx-auto mb-4 h-8 w-8 text-blue-600' />
              <div className='mb-2 text-2xl font-bold text-zinc-900'>&lt;100ms</div>
              <p className='text-sm text-zinc-600'>Average response time</p>
            </CardContent>
          </Card>
          <Card className='border-zinc-200/50 bg-white/80 text-center backdrop-blur-sm'>
            <CardContent className='pt-6'>
              <Eye className='mx-auto mb-4 h-8 w-8 text-blue-600' />
              <div className='mb-2 text-2xl font-bold text-zinc-900'>95%</div>
              <p className='text-sm text-zinc-600'>Code analysis accuracy</p>
            </CardContent>
          </Card>
          <Card className='border-zinc-200/50 bg-white/80 text-center backdrop-blur-sm'>
            <CardContent className='pt-6'>
              <GitBranch className='mx-auto mb-4 h-8 w-8 text-blue-600' />
              <div className='mb-2 text-2xl font-bold text-zinc-900'>50+</div>
              <p className='text-sm text-zinc-600'>Supported protocols</p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <Card className='mx-auto max-w-2xl bg-zinc-900 text-white'>
            <CardContent className='pt-8'>
              <h3 className='mb-4 text-2xl font-bold'>Ready to Accelerate Your Development?</h3>
              <p className='mb-6 leading-relaxed text-zinc-300'>
                Install the Sui Developer MCP server and start building with AI-powered assistance
              </p>
              <div className='flex justify-center gap-3'>
                <Link href='/docs'>
                  <Button className='bg-white text-zinc-900 hover:bg-zinc-100'>Get Started</Button>
                </Link>
                <Link href='/examples'>
                  <Button
                    variant='outline'
                    className='border-zinc-600 text-white hover:bg-zinc-800'
                  >
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

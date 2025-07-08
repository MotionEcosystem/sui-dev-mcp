'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  BookOpen,
  Code2,
  Copy,
  Check,
  ChevronRight,
  ArrowLeft,
  AlertCircle,
  CheckCircle,
  Info,
  Zap,
  Settings,
  FileText,
  Package,
} from 'lucide-react'
import Link from 'next/link'

export default function DocsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState('getting-started')

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const navigationItems = [
    { id: 'getting-started', title: 'Getting Started', icon: Zap },
    { id: 'installation', title: 'Installation', icon: Package },
    { id: 'configuration', title: 'Configuration', icon: Settings },
    { id: 'api-reference', title: 'API Reference', icon: Code2 },
    { id: 'examples', title: 'Examples', icon: FileText },
    { id: 'troubleshooting', title: 'Troubleshooting', icon: AlertCircle },
  ]

  const installationCode = `# Install via npm
npm install -g @sui-dev/mcp-server

# Or install via pnpm
pnpm add -g @sui-dev/mcp-server

# Or install via yarn
yarn global add @sui-dev/mcp-server`

  const mcpConfigCode = `{
  "mcpServers": {
    "sui-developer": {
      "command": "npx",
      "args": ["@sui-dev/mcp-server"],
      "env": {
        "SUI_NETWORK": "mainnet",
        "LOG_LEVEL": "info"
      }
    }
  }
}`

  const claudeConfigCode = `{
  "mcpServers": {
    "sui-developer": {
      "command": "sui-mcp-server",
      "args": [],
      "env": {
        "SUI_NETWORK": "devnet"
      }
    }
  }
}`

  const windSurfConfigCode = `// windsurf.config.json
{
  "mcp": {
    "servers": {
      "sui-developer": {
        "command": "npx @sui-dev/mcp-server",
        "environment": {
          "SUI_NETWORK": "testnet"
        }
      }
    }
  }
}`

  const moveCodeExample = `module nft_marketplace::marketplace {
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use sui::coin::{Self, Coin};
    use sui::sui::SUI;
    use sui::event;

    struct Marketplace has key {
        id: UID,
        admin: address,
        fee_rate: u64, // Fee in basis points (100 = 1%)
    }

    struct Listing has key, store {
        id: UID,
        item_id: address,
        seller: address,
        price: u64,
        active: bool,
    }

    struct ListingCreated has copy, drop {
        listing_id: address,
        item_id: address,
        seller: address,
        price: u64,
    }

    public entry fun create_marketplace(ctx: &mut TxContext) {
        let marketplace = Marketplace {
            id: object::new(ctx),
            admin: tx_context::sender(ctx),
            fee_rate: 250, // 2.5% default fee
        };
        transfer::share_object(marketplace);
    }
}`

  const typescriptExample = `import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';

// Initialize Sui client
const client = new SuiClient({
  url: getFullnodeUrl('devnet')
});

// Create a new NFT
async function mintNFT(
  packageId: string,
  keypair: Ed25519Keypair,
  name: string,
  description: string,
  imageUrl: string
) {
  const txb = new TransactionBlock();
  
  txb.moveCall({
    target: \`\${packageId}::nft::mint\`,
    arguments: [
      txb.pure(name),
      txb.pure(description),
      txb.pure(imageUrl),
    ],
  });

  const result = await client.signAndExecuteTransactionBlock({
    signer: keypair,
    transactionBlock: txb,
    options: {
      showEffects: true,
      showObjectChanges: true,
    },
  });

  return result;
}`

  const apiMethods = [
    {
      name: 'sui_docs_search',
      description: 'Search through Sui documentation',
      parameters: [
        { name: 'query', type: 'string', description: 'Search query for documentation' },
        { name: 'limit', type: 'number', description: 'Maximum number of results (optional)' },
      ],
      example: `// Search for object ownership documentation
await mcp.call('sui_docs_search', {
  query: 'object ownership transfer',
  limit: 5
});`,
    },
    {
      name: 'move_analyzer',
      description: 'Analyze Move smart contracts',
      parameters: [
        { name: 'code', type: 'string', description: 'Move source code to analyze' },
        {
          name: 'check_security',
          type: 'boolean',
          description: 'Enable security analysis (optional)',
        },
      ],
      example: `// Analyze Move contract for issues
await mcp.call('move_analyzer', {
  code: contractSource,
  check_security: true
});`,
    },
    {
      name: 'sdk_helper',
      description: 'Generate SDK integration examples',
      parameters: [
        {
          name: 'operation',
          type: 'string',
          description: 'Type of operation (mint, transfer, etc.)',
        },
        {
          name: 'language',
          type: 'string',
          description: 'Programming language (typescript, rust)',
        },
      ],
      example: `// Generate TypeScript SDK example
await mcp.call('sdk_helper', {
  operation: 'mint_nft',
  language: 'typescript'
});`,
    },
    {
      name: 'error_decoder',
      description: 'Decode and explain Sui errors',
      parameters: [
        { name: 'error', type: 'string', description: 'Error message or code' },
        { name: 'context', type: 'string', description: 'Additional context (optional)' },
      ],
      example: `// Decode transaction error
await mcp.call('error_decoder', {
  error: 'InsufficientGas',
  context: 'NFT minting transaction'
});`,
    },
  ]

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
              <BookOpen className='h-5 w-5 text-blue-600' />
              <span className='font-bold text-zinc-900'>Documentation</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className='container relative z-20 mx-auto px-6 py-12 lg:px-8'>
        <div className='grid gap-12 lg:grid-cols-4'>
          {/* Sidebar Navigation */}
          <div className='lg:col-span-1'>
            <div className='sticky top-32'>
              <h3 className='mb-4 font-bold text-zinc-900'>Contents</h3>
              <nav className='space-y-1'>
                {navigationItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                      activeSection === item.id
                        ? 'border-l-2 border-blue-600 bg-blue-50 text-blue-700'
                        : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                    }`}
                  >
                    <item.icon className='h-4 w-4' />
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className='space-y-12 lg:col-span-3'>
            {/* Getting Started */}
            {activeSection === 'getting-started' && (
              <section>
                <div className='mb-8'>
                  <h1 className='mb-4 text-4xl font-black text-zinc-900'>Getting Started</h1>
                  <p className='text-xl leading-relaxed text-zinc-600'>
                    Welcome to Sui Developer MCP! This guide will help you set up and start using
                    the AI-powered development tools.
                  </p>
                </div>

                <div className='space-y-8'>
                  <Card className='border-blue-200/50 bg-blue-50/50'>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2 text-blue-700'>
                        <Info className='h-5 w-5' />
                        What is MCP?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='leading-relaxed text-blue-700'>
                        Model Context Protocol (MCP) is a standard for connecting AI assistants with
                        external tools and data sources. Our Sui Developer MCP provides specialized
                        tools for Sui blockchain development directly in your IDE.
                      </p>
                    </CardContent>
                  </Card>

                  <div className='grid gap-6 md:grid-cols-2'>
                    <Card className='border-zinc-200/50 bg-white/80 backdrop-blur-sm'>
                      <CardHeader>
                        <CardTitle className='text-zinc-900'>Prerequisites</CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-3'>
                        <div className='flex items-center gap-2'>
                          <CheckCircle className='h-4 w-4 text-green-600' />
                          <span className='text-zinc-700'>Node.js 18+ installed</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <CheckCircle className='h-4 w-4 text-green-600' />
                          <span className='text-zinc-700'>
                            Compatible IDE (Claude, Cursor, or Windsurf)
                          </span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <CheckCircle className='h-4 w-4 text-green-600' />
                          <span className='text-zinc-700'>Basic knowledge of Sui and Move</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className='border-zinc-200/50 bg-white/80 backdrop-blur-sm'>
                      <CardHeader>
                        <CardTitle className='text-zinc-900'>Quick Start</CardTitle>
                      </CardHeader>
                      <CardContent className='space-y-3'>
                        <div className='flex items-start gap-2'>
                          <div className='mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs text-white'>
                            1
                          </div>
                          <span className='text-zinc-700'>Install the MCP server</span>
                        </div>
                        <div className='flex items-start gap-2'>
                          <div className='mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs text-white'>
                            2
                          </div>
                          <span className='text-zinc-700'>Configure your IDE</span>
                        </div>
                        <div className='flex items-start gap-2'>
                          <div className='mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs text-white'>
                            3
                          </div>
                          <span className='text-zinc-700'>Start developing</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>
            )}

            {/* Installation */}
            {activeSection === 'installation' && (
              <section>
                <div className='mb-8'>
                  <h1 className='mb-4 text-4xl font-black text-zinc-900'>Installation</h1>
                  <p className='text-xl leading-relaxed text-zinc-600'>
                    Install the Sui Developer MCP server using your preferred package manager.
                  </p>
                </div>

                <div className='space-y-8'>
                  <Card className='border-zinc-200/50 bg-white/80 backdrop-blur-sm'>
                    <CardHeader>
                      <CardTitle className='text-zinc-900'>Package Manager Installation</CardTitle>
                      <CardDescription>Choose your preferred package manager</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='relative rounded-xl bg-zinc-900 p-6'>
                        <Button
                          size='sm'
                          variant='ghost'
                          onClick={() => copyCode(installationCode, 'install')}
                          className='absolute right-4 top-4 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                        >
                          {copiedCode === 'install' ? (
                            <Check className='h-4 w-4' />
                          ) : (
                            <Copy className='h-4 w-4' />
                          )}
                        </Button>
                        <pre className='overflow-x-auto font-mono text-sm leading-relaxed text-zinc-300'>
                          {installationCode}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className='border-zinc-200/50 bg-white/80 backdrop-blur-sm'>
                    <CardHeader>
                      <CardTitle className='text-zinc-900'>Verify Installation</CardTitle>
                      <CardDescription>Check if the installation was successful</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='relative rounded-xl bg-zinc-900 p-6'>
                        <Button
                          size='sm'
                          variant='ghost'
                          onClick={() => copyCode('sui-mcp-server --version', 'verify')}
                          className='absolute right-4 top-4 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                        >
                          {copiedCode === 'verify' ? (
                            <Check className='h-4 w-4' />
                          ) : (
                            <Copy className='h-4 w-4' />
                          )}
                        </Button>
                        <pre className='font-mono text-sm leading-relaxed text-zinc-300'>
                          sui-mcp-server --version
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            )}

            {/* Configuration */}
            {activeSection === 'configuration' && (
              <section>
                <div className='mb-8'>
                  <h1 className='mb-4 text-4xl font-black text-zinc-900'>Configuration</h1>
                  <p className='text-xl leading-relaxed text-zinc-600'>
                    Configure the MCP server for your IDE and development environment.
                  </p>
                </div>

                <div className='space-y-8'>
                  <Card className='border-zinc-200/50 bg-white/80 backdrop-blur-sm'>
                    <CardHeader>
                      <CardTitle className='text-zinc-900'>Claude Desktop</CardTitle>
                      <CardDescription>
                        Configuration for Claude Desktop application
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='space-y-4'>
                        <p className='text-zinc-700'>
                          Add the following configuration to your Claude Desktop settings file:
                        </p>
                        <div className='relative rounded-xl bg-zinc-900 p-6'>
                          <Button
                            size='sm'
                            variant='ghost'
                            onClick={() => copyCode(claudeConfigCode, 'claude')}
                            className='absolute right-4 top-4 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                          >
                            {copiedCode === 'claude' ? (
                              <Check className='h-4 w-4' />
                            ) : (
                              <Copy className='h-4 w-4' />
                            )}
                          </Button>
                          <pre className='overflow-x-auto font-mono text-sm leading-relaxed text-zinc-300'>
                            {claudeConfigCode}
                          </pre>
                        </div>
                        <p className='text-sm text-zinc-600'>
                          Location:{' '}
                          <code className='rounded bg-zinc-100 px-2 py-1'>
                            ~/.config/claude/mcp_settings.json
                          </code>
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className='border-zinc-200/50 bg-white/80 backdrop-blur-sm'>
                    <CardHeader>
                      <CardTitle className='text-zinc-900'>Cursor IDE</CardTitle>
                      <CardDescription>Configuration for Cursor IDE</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='space-y-4'>
                        <p className='text-zinc-700'>
                          Add the MCP server configuration to your Cursor settings:
                        </p>
                        <div className='relative rounded-xl bg-zinc-900 p-6'>
                          <Button
                            size='sm'
                            variant='ghost'
                            onClick={() => copyCode(mcpConfigCode, 'cursor')}
                            className='absolute right-4 top-4 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                          >
                            {copiedCode === 'cursor' ? (
                              <Check className='h-4 w-4' />
                            ) : (
                              <Copy className='h-4 w-4' />
                            )}
                          </Button>
                          <pre className='overflow-x-auto font-mono text-sm leading-relaxed text-zinc-300'>
                            {mcpConfigCode}
                          </pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className='border-zinc-200/50 bg-white/80 backdrop-blur-sm'>
                    <CardHeader>
                      <CardTitle className='text-zinc-900'>Windsurf IDE</CardTitle>
                      <CardDescription>Configuration for Windsurf IDE</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='space-y-4'>
                        <p className='text-zinc-700'>
                          Configure Windsurf with the following settings:
                        </p>
                        <div className='relative rounded-xl bg-zinc-900 p-6'>
                          <Button
                            size='sm'
                            variant='ghost'
                            onClick={() => copyCode(windSurfConfigCode, 'windsurf')}
                            className='absolute right-4 top-4 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                          >
                            {copiedCode === 'windsurf' ? (
                              <Check className='h-4 w-4' />
                            ) : (
                              <Copy className='h-4 w-4' />
                            )}
                          </Button>
                          <pre className='overflow-x-auto font-mono text-sm leading-relaxed text-zinc-300'>
                            {windSurfConfigCode}
                          </pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            )}

            {/* API Reference */}
            {activeSection === 'api-reference' && (
              <section>
                <div className='mb-8'>
                  <h1 className='mb-4 text-4xl font-black text-zinc-900'>API Reference</h1>
                  <p className='text-xl leading-relaxed text-zinc-600'>
                    Complete reference for all available MCP tools and methods.
                  </p>
                </div>

                <div className='space-y-8'>
                  {apiMethods.map((method, index) => (
                    <Card key={index} className='border-zinc-200/50 bg-white/80 backdrop-blur-sm'>
                      <CardHeader>
                        <CardTitle className='flex items-center gap-2 text-zinc-900'>
                          <Code2 className='h-5 w-5 text-blue-600' />
                          {method.name}
                        </CardTitle>
                        <CardDescription>{method.description}</CardDescription>
                      </CardHeader>
                      <CardContent className='space-y-6'>
                        <div>
                          <h4 className='mb-3 font-semibold text-zinc-900'>Parameters</h4>
                          <div className='space-y-2'>
                            {method.parameters.map((param, paramIndex) => (
                              <div
                                key={paramIndex}
                                className='flex items-start gap-4 rounded-lg bg-zinc-50 p-3'
                              >
                                <Badge variant='outline' className='font-mono text-xs'>
                                  {param.type}
                                </Badge>
                                <div>
                                  <span className='font-medium text-zinc-900'>{param.name}</span>
                                  <p className='text-sm text-zinc-600'>{param.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className='mb-3 font-semibold text-zinc-900'>Example</h4>
                          <div className='relative rounded-xl bg-zinc-900 p-6'>
                            <Button
                              size='sm'
                              variant='ghost'
                              onClick={() => copyCode(method.example, `api-${index}`)}
                              className='absolute right-4 top-4 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                            >
                              {copiedCode === `api-${index}` ? (
                                <Check className='h-4 w-4' />
                              ) : (
                                <Copy className='h-4 w-4' />
                              )}
                            </Button>
                            <pre className='overflow-x-auto font-mono text-sm leading-relaxed text-zinc-300'>
                              {method.example}
                            </pre>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Examples */}
            {activeSection === 'examples' && (
              <section>
                <div className='mb-8'>
                  <h1 className='mb-4 text-4xl font-black text-zinc-900'>Examples</h1>
                  <p className='text-xl leading-relaxed text-zinc-600'>
                    Practical examples and code snippets for common Sui development tasks.
                  </p>
                </div>

                <div className='space-y-8'>
                  <Card className='border-zinc-200/50 bg-white/80 backdrop-blur-sm'>
                    <CardHeader>
                      <CardTitle className='text-zinc-900'>
                        Move Smart Contract: NFT Marketplace
                      </CardTitle>
                      <CardDescription>
                        A complete example of an NFT marketplace contract in Move
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='relative rounded-xl bg-zinc-900 p-6'>
                        <Button
                          size='sm'
                          variant='ghost'
                          onClick={() => copyCode(moveCodeExample, 'move-example')}
                          className='absolute right-4 top-4 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                        >
                          {copiedCode === 'move-example' ? (
                            <Check className='h-4 w-4' />
                          ) : (
                            <Copy className='h-4 w-4' />
                          )}
                        </Button>
                        <pre className='overflow-x-auto font-mono text-sm leading-relaxed text-zinc-300'>
                          {moveCodeExample}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className='border-zinc-200/50 bg-white/80 backdrop-blur-sm'>
                    <CardHeader>
                      <CardTitle className='text-zinc-900'>TypeScript SDK: Minting NFTs</CardTitle>
                      <CardDescription>
                        How to interact with Sui using the TypeScript SDK
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='relative rounded-xl bg-zinc-900 p-6'>
                        <Button
                          size='sm'
                          variant='ghost'
                          onClick={() => copyCode(typescriptExample, 'ts-example')}
                          className='absolute right-4 top-4 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                        >
                          {copiedCode === 'ts-example' ? (
                            <Check className='h-4 w-4' />
                          ) : (
                            <Copy className='h-4 w-4' />
                          )}
                        </Button>
                        <pre className='overflow-x-auto font-mono text-sm leading-relaxed text-zinc-300'>
                          {typescriptExample}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            )}

            {/* Troubleshooting */}
            {activeSection === 'troubleshooting' && (
              <section>
                <div className='mb-8'>
                  <h1 className='mb-4 text-4xl font-black text-zinc-900'>Troubleshooting</h1>
                  <p className='text-xl leading-relaxed text-zinc-600'>
                    Common issues and their solutions when using Sui Developer MCP.
                  </p>
                </div>

                <div className='space-y-6'>
                  <Card className='border-zinc-200/50 bg-white/80 backdrop-blur-sm'>
                    <CardHeader>
                      <CardTitle className='text-zinc-900'>MCP Server Not Starting</CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                      <p className='text-zinc-700'>
                        If the MCP server fails to start, try these solutions:
                      </p>
                      <ul className='space-y-2 text-zinc-700'>
                        <li className='flex items-start gap-2'>
                          <ChevronRight className='mt-1 h-4 w-4 text-blue-600' />
                          Ensure Node.js 18+ is installed
                        </li>
                        <li className='flex items-start gap-2'>
                          <ChevronRight className='mt-1 h-4 w-4 text-blue-600' />
                          Check if the package is installed globally
                        </li>
                        <li className='flex items-start gap-2'>
                          <ChevronRight className='mt-1 h-4 w-4 text-blue-600' />
                          Verify your IDE configuration is correct
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className='border-zinc-200/50 bg-white/80 backdrop-blur-sm'>
                    <CardHeader>
                      <CardTitle className='text-zinc-900'>Connection Issues</CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                      <p className='text-zinc-700'>If you can&apos;t connect to the Sui network:</p>
                      <ul className='space-y-2 text-zinc-700'>
                        <li className='flex items-start gap-2'>
                          <ChevronRight className='mt-1 h-4 w-4 text-blue-600' />
                          Check your internet connection
                        </li>
                        <li className='flex items-start gap-2'>
                          <ChevronRight className='mt-1 h-4 w-4 text-blue-600' />
                          Verify the SUI_NETWORK environment variable
                        </li>
                        <li className='flex items-start gap-2'>
                          <ChevronRight className='mt-1 h-4 w-4 text-blue-600' />
                          Try switching to a different network (mainnet, testnet, devnet)
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className='border-zinc-200/50 bg-white/80 backdrop-blur-sm'>
                    <CardHeader>
                      <CardTitle className='text-zinc-900'>Performance Issues</CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                      <p className='text-zinc-700'>If the MCP server is running slowly:</p>
                      <ul className='space-y-2 text-zinc-700'>
                        <li className='flex items-start gap-2'>
                          <ChevronRight className='mt-1 h-4 w-4 text-blue-600' />
                          Increase memory allocation for Node.js
                        </li>
                        <li className='flex items-start gap-2'>
                          <ChevronRight className='mt-1 h-4 w-4 text-blue-600' />
                          Clear cache and restart the server
                        </li>
                        <li className='flex items-start gap-2'>
                          <ChevronRight className='mt-1 h-4 w-4 text-blue-600' />
                          Use a local Sui node for better performance
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  AlertCircle,
  ArrowLeft,
  BookOpen,
  CheckCircle,
  Copy,
  ExternalLink,
  Monitor,
  Terminal,
  Wrench,
  Zap
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function DocsPage() {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(label)
    setTimeout(() => setCopiedText(null), 2000)
  }

  const CodeBlock = ({ children, language = 'bash', copyLabel }: { children: string; language?: string; copyLabel?: string }) => (
    <div className="relative">
      <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-300">
        <code className={`language-${language}`}>{children}</code>
      </pre>
      {copyLabel && (
        <Button
          variant="outline"
          size="sm"
          className="absolute right-2 top-2 h-8 w-8 p-0 border-zinc-600 bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
          onClick={() => copyToClipboard(children, copyLabel)}
        >
          {copiedText === copyLabel ? (
            <CheckCircle className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      )}
    </div>
  )

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
              <span className='font-bold text-zinc-900'>Setup Guide</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className='container relative z-20 mx-auto px-6 py-12 lg:px-8'>
        {/* Hero Section */}
        <div className='mb-16 text-center'>
          <h1 className='mb-6 text-5xl font-black tracking-tight text-zinc-900'>
            Setup Guide
          </h1>
          <p className='mx-auto max-w-3xl text-xl leading-relaxed text-zinc-600'>
            Add the Sui Developer MCP server to your IDE in just a few steps. Support for Claude Desktop,
            Cursor, and Windsurf with detailed platform-specific instructions.
          </p>
        </div>

        {/* Quick Start */}
        <Card className='mb-12 border-green-200/50 bg-gradient-to-r from-green-50 to-emerald-50'>
          <CardHeader>
            <CardTitle className='flex items-center gap-3 text-2xl font-bold text-zinc-900'>
              <Zap className='h-6 w-6 text-green-600' />
              Quick Start
            </CardTitle>
            <CardDescription className='text-lg text-zinc-700'>
              Get up and running in under 2 minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4 md:grid-cols-3'>
              <div className='text-center'>
                <div className='mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 font-bold text-white'>
                  1
                </div>
                <h3 className='mb-2 font-semibold text-zinc-900'>Install Dependency</h3>
                <CodeBlock copyLabel="pnpm-install">pnpm add -g mcp-remote</CodeBlock>
              </div>
              <div className='text-center'>
                <div className='mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 font-bold text-white'>
                  2
                </div>
                <h3 className='mb-2 font-semibold text-zinc-900'>Add Configuration</h3>
                <p className='text-sm text-zinc-600'>
                  Choose your IDE below for specific setup instructions
                </p>
              </div>
              <div className='text-center'>
                <div className='mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 font-bold text-white'>
                  3
                </div>
                <h3 className='mb-2 font-semibold text-zinc-900'>Restart & Test</h3>
                <p className='text-sm text-zinc-600'>
                  Restart your IDE and ask: &quot;What Sui tools are available?&quot;
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* IDE Setup Tabs */}
        <Tabs defaultValue="claude" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="claude" className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              Claude Desktop
            </TabsTrigger>
            <TabsTrigger value="cursor" className="flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              Cursor
            </TabsTrigger>
            <TabsTrigger value="windsurf" className="flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              Windsurf
            </TabsTrigger>
          </TabsList>

          {/* Claude Desktop Setup */}
          <TabsContent value="claude">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Monitor className="h-6 w-6 text-blue-600" />
                  Claude Desktop Setup
                </CardTitle>
                <CardDescription>
                  Configure the Sui Developer MCP server in Claude Desktop
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">1</span>
                    Locate Configuration File
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-medium text-zinc-800">MacOS:</h4>
                      <CodeBlock language="bash" copyLabel="macos-path">
{`# Open the folder in Finder
open ~/Library/Application\\ Support/Claude/

# Or edit directly with nano
nano ~/Library/Application\\ Support/Claude/claude_desktop_config.json`}
                      </CodeBlock>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-zinc-800">Windows:</h4>
                      <CodeBlock language="bash" copyLabel="windows-path">
{`# Navigate to the folder
%APPDATA%\\Claude\\

# Or edit directly
notepad %APPDATA%\\Claude\\claude_desktop_config.json`}
                      </CodeBlock>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-zinc-800">Linux:</h4>
                      <CodeBlock language="bash" copyLabel="linux-path">
{`# Edit directly
nano ~/.config/Claude/claude_desktop_config.json`}
                      </CodeBlock>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">2</span>
                    Add MCP Configuration
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-medium text-zinc-800">If the file doesn&apos;t exist, create it with this content:</h4>
                      <CodeBlock language="json" copyLabel="claude-new-config">
{`{
  "mcpServers": {
    "sui-developer": {
      "command": "npx",
      "args": ["mcp-remote", "https://sui-developer-mcp.vercel.app/mcp"]
    }
  }
}`}
                      </CodeBlock>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-zinc-800">If you already have MCP servers, add the sui-developer entry:</h4>
                      <CodeBlock language="json" copyLabel="claude-existing-config">
{`{
  "mcpServers": {
    "existing-server": {
      "command": "your-existing-command",
      "args": ["your-existing-args"]
    },
    "sui-developer": {
      "command": "npx",
      "args": ["mcp-remote", "https://sui-developer-mcp.vercel.app/mcp"]
    }
  }
}`}
                      </CodeBlock>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">3</span>
                    Install Dependencies & Test
                  </h3>
                  <div className="space-y-4">
                    <CodeBlock language="bash" copyLabel="install-mcp-remote">
pnpm add -g mcp-remote
                    </CodeBlock>
                    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                      <p className="flex items-center gap-2 text-sm text-amber-800">
                        <AlertCircle className="h-4 w-4" />
                        <strong>Important:</strong> Completely quit and restart Claude Desktop for changes to take effect.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-zinc-800">Test the integration:</h4>
                      <div className="space-y-2">
                        <div className="rounded-lg border bg-zinc-50 p-3">
                          <p className="text-sm text-zinc-600">Ask Claude:</p>
                          <code className="text-sm">What Sui development tools do you have available?</code>
                        </div>
                        <div className="rounded-lg border bg-zinc-50 p-3">
                          <p className="text-sm text-zinc-600">Then try:</p>
                          <code className="text-sm">How do I create an NFT collection in Sui Move?</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cursor Setup */}
          <TabsContent value="cursor">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Terminal className="h-6 w-6 text-blue-600" />
                  Cursor Setup
                </CardTitle>
                <CardDescription>
                  Configure the Sui Developer MCP server in Cursor IDE
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">1</span>
                    Open Cursor Settings
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-medium text-zinc-800">Via Keyboard Shortcut:</h4>
                      <CodeBlock language="text" copyLabel="cursor-shortcut">
Cmd/Ctrl + ,
                      </CodeBlock>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-zinc-800">Via Menu:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700">
                        <li><strong>Mac:</strong> Cursor → Settings</li>
                        <li><strong>Windows/Linux:</strong> File → Preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">2</span>
                    Configure MCP
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-zinc-700">
                    <li>In Settings, go to <strong>&quot;Features&quot;</strong></li>
                    <li>Find <strong>&quot;Model Context Protocol&quot;</strong></li>
                    <li>Click <strong>&quot;Edit in settings.json&quot;</strong></li>
                  </ol>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">3</span>
                    Add Configuration
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm text-zinc-600">Add this to your Cursor settings:</p>
                    <CodeBlock language="json" copyLabel="cursor-config">
{`{
  "mcp": {
    "servers": {
      "sui-developer": {
        "command": "npx",
        "args": ["mcp-remote", "https://sui-developer-mcp.vercel.app/mcp"]
      }
    }
  }
}`}
                    </CodeBlock>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">4</span>
                    Install Dependencies & Test
                  </h3>
                  <div className="space-y-4">
                    <CodeBlock language="bash" copyLabel="cursor-install">
# Install mcp-remote globally
pnpm add -g mcp-remote
                    </CodeBlock>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-zinc-700">
                      <li><strong>Save settings</strong> and <strong>restart Cursor</strong></li>
                      <li><strong>Test in Cursor Chat:</strong></li>
                    </ol>
                    <div className="rounded-lg border bg-zinc-50 p-3">
                      <code className="text-sm">Help me understand Sui object ownership patterns</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Windsurf Setup */}
          <TabsContent value="windsurf">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Wrench className="h-6 w-6 text-blue-600" />
                  Windsurf Setup
                </CardTitle>
                <CardDescription>
                  Configure the Sui Developer MCP server in Windsurf IDE
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">1</span>
                    Open MCP Configuration
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-medium text-zinc-800">Method 1: Command Palette</h4>
                      <CodeBlock language="text" copyLabel="windsurf-command">
Cmd/Ctrl + Shift + P → type &quot;MCP&quot;
                      </CodeBlock>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-zinc-800">Method 2: Direct Settings File</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700">
                        <li><strong>Mac:</strong> ~/Library/Application Support/Windsurf/settings.json</li>
                        <li><strong>Windows:</strong> %APPDATA%\Windsurf\settings.json</li>
                        <li><strong>Linux:</strong> ~/.config/Windsurf/settings.json</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">2</span>
                    Add MCP Server
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm text-zinc-600">In the MCP settings or settings.json file, add:</p>
                    <CodeBlock language="json" copyLabel="windsurf-config">
{`{
  "mcp.servers": {
    "sui-developer": {
      "command": "npx",
      "args": ["mcp-remote", "https://sui-developer-mcp.vercel.app/mcp"]
    }
  }
}`}
                    </CodeBlock>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">3</span>
                    Install Dependencies & Test
                  </h3>
                  <div className="space-y-4">
                    <CodeBlock language="bash" copyLabel="windsurf-install">
# Install mcp-remote globally
pnpm add -g mcp-remote
                    </CodeBlock>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-zinc-700">
                      <li><strong>Save configuration</strong> and <strong>restart Windsurf</strong></li>
                      <li><strong>Test in a new chat:</strong></li>
                    </ol>
                    <div className="rounded-lg border bg-zinc-50 p-3">
                      <code className="text-sm">Show me how to implement a marketplace smart contract in Sui Move</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Available Tools */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Wrench className="h-6 w-6 text-blue-600" />
              Available Tools
            </CardTitle>
            <CardDescription>
              Once configured, you&apos;ll have access to these specialized Sui development tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-semibold text-zinc-900">
                  🧠 Ask Sui Move Expert
                </h3>
                <div className="rounded-lg border bg-zinc-50 p-3">
                  <code className="text-sm text-zinc-700">
                    How do I implement a staking mechanism with time-locked rewards?
                  </code>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-semibold text-zinc-900">
                  📚 Sui Documentation Search
                </h3>
                <div className="rounded-lg border bg-zinc-50 p-3">
                  <code className="text-sm text-zinc-700">
                    Find information about dynamic fields and object composition
                  </code>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-semibold text-zinc-900">
                  🔧 Ask Sui SDK Expert
                </h3>
                <div className="rounded-lg border bg-zinc-50 p-3">
                  <code className="text-sm text-zinc-700">
                    Show me how to create and sign a programmable transaction in TypeScript
                  </code>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-semibold text-zinc-900">
                  🐛 Sui Error Explainer
                </h3>
                <div className="rounded-lg border bg-zinc-50 p-3">
                  <code className="text-sm text-zinc-700">
                    Explain &apos;InvalidObjectOwner&apos; error and how to fix it
                  </code>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-semibold text-zinc-900">
                  ⚡ Sui Best Practices Guide
                </h3>
                <div className="rounded-lg border bg-zinc-50 p-3">
                  <code className="text-sm text-zinc-700">
                    What are security best practices for DeFi protocols on Sui?
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <AlertCircle className="h-6 w-6 text-amber-600" />
              Troubleshooting
            </CardTitle>
            <CardDescription>
              Common issues and solutions for MCP server setup
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-semibold text-red-700">❌ &quot;MCP server not found&quot;</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700">
                  <li>✅ Install mcp-remote: <code className="rounded bg-zinc-100 px-1 text-xs">pnpm add -g mcp-remote</code></li>
                  <li>✅ Restart your IDE completely</li>
                  <li>✅ Check JSON syntax in config file</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-semibold text-red-700">❌ &quot;Connection failed&quot;</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700">
                  <li>✅ Verify internet connection</li>
                  <li>✅ Test server: <code className="rounded bg-zinc-100 px-1 text-xs">curl https://sui-developer-mcp.vercel.app/mcp</code></li>
                  <li>✅ Check firewall settings</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-semibold text-red-700">❌ &quot;No tools available&quot;</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700">
                  <li>✅ Wait a few seconds after restart</li>
                  <li>✅ Try asking: &quot;What tools do you have available?&quot;</li>
                  <li>✅ Verify the configuration JSON is properly formatted</li>
                </ul>
              </div>

              <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                <h3 className="mb-3 font-semibold text-green-700">✅ Success Indicators:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-green-700">
                  <li>AI mentions using &quot;Sui Developer MCP&quot; tools</li>
                  <li>You get detailed Sui-specific responses</li>
                  <li>Code examples include Sui Move syntax</li>
                  <li>Error explanations are Sui-specific</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pro Tips */}
        <Card className="mb-16 border-blue-200/50 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Zap className="h-6 w-6 text-blue-600" />
              Pro Tips
            </CardTitle>
            <CardDescription>
              Get the most out of your Sui Developer MCP setup
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  <div>
                    <h4 className="font-medium text-zinc-900">Always install mcp-remote globally</h4>
                    <p className="text-sm text-zinc-600">before testing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  <div>
                    <h4 className="font-medium text-zinc-900">Restart your IDE completely</h4>
                    <p className="text-sm text-zinc-600">after configuration changes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  <div>
                    <h4 className="font-medium text-zinc-900">Start with simple questions</h4>
                    <p className="text-sm text-zinc-600">to verify the connection</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  <div>
                    <h4 className="font-medium text-zinc-900">Be specific in your questions</h4>
                    <p className="text-sm text-zinc-600">for better responses</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  <div>
                    <h4 className="font-medium text-zinc-900">Provide code context</h4>
                    <p className="text-sm text-zinc-600">when asking about errors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  <div>
                    <h4 className="font-medium text-zinc-900">Test server availability</h4>
                    <p className="text-sm text-zinc-600">if experiencing connection issues</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className='text-center'>
          <Card className='mx-auto max-w-2xl bg-zinc-900 text-white'>
            <CardContent className='pt-8'>
              <h3 className='mb-4 text-2xl font-bold'>Ready to Start Building?</h3>
              <p className='mb-6 leading-relaxed text-zinc-300'>
                Your Sui Developer MCP server is configured and ready. Start building with AI assistance!
              </p>
              <div className='flex justify-center gap-3'>
                <Link href='/tools'>
                  <Button className='bg-white text-zinc-900 hover:bg-zinc-100'>
                    <Wrench className='mr-2 h-4 w-4' />
                    View Tools
                  </Button>
                </Link>
                <Link href='https://sui-developer-mcp.vercel.app/mcp' target='_blank'>
                  <Button
                    variant='outline'
                    className='border-zinc-600 text-white hover:bg-zinc-800'
                  >
                    <ExternalLink className='mr-2 h-4 w-4' />
                    MCP Server
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

'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Search,
  CodeXml,
  ArrowRight,
  BookOpen,
  Github,
  Wrench,
  Terminal,
  Mail,
  ExternalLink,
  Atom,
  Orbit,
  Sparkles,
  Circle,
  Zap,
  Code,
  Shield
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter',ui-sans-serif,system-ui] antialiased overflow-hidden relative">
      {/* Enhanced background with Motion branding */}
      <div className="fixed inset-0 gradient-mesh"></div>
      <div className="fixed inset-0 hero-glow"></div>
      <div className="fixed inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none z-10"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
           }}>
      </div>

      {/* Enhanced physics animations with Motion branding */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {/* Large orbital systems */}
        <div className="absolute top-10 right-10 w-96 h-96 opacity-20 dark:opacity-30">
          <div className="absolute inset-0 border-2 border-motion-blue/40 rounded-full physics-orbit"></div>
          <div className="absolute inset-8 border border-purple-500/30 rounded-full physics-orbit" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
          <div className="absolute inset-16 border-2 border-pink-500/20 rounded-full physics-orbit" style={{animationDuration: '25s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-motion-blue/60 rounded-full transform -translate-x-1/2 -translate-y-1/2 physics-pulse"></div>
        </div>

        <div className="absolute bottom-20 left-10 w-80 h-80 opacity-15 dark:opacity-25">
          <div className="absolute inset-0 border border-green-500/40 rounded-full physics-orbit" style={{animationDuration: '30s'}}></div>
          <div className="absolute inset-12 border-2 border-motion-blue/30 rounded-full physics-orbit" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-green-500/60 rounded-full transform -translate-x-1/2 -translate-y-1/2 physics-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Motion-branded floating elements */}
        <div className="absolute top-32 left-32 w-16 h-16 border-2 border-motion-blue/30 rounded-lg physics-drift">
          <div className="w-full h-full bg-motion-blue/10 rounded-lg"></div>
        </div>

        {/* Enhanced physics shapes with Motion branding */}
        <div className="absolute top-48 right-48 w-12 h-12 opacity-40 dark:opacity-60">
          <Atom className="w-full h-full text-motion-blue physics-float" style={{animationDelay: '0s'}} />
        </div>

        <div className="absolute bottom-40 right-40 w-20 h-20 opacity-30 dark:opacity-50">
          <Orbit className="w-full h-full text-pink-500 physics-drift" style={{animationDelay: '2s'}} />
        </div>

        <div className="absolute top-2/3 left-1/4 w-14 h-14 opacity-35 dark:opacity-55">
          <Sparkles className="w-full h-full text-yellow-500 physics-float" style={{animationDelay: '1.5s'}} />
        </div>

        {/* Motion logo as floating element */}
        <div className="absolute top-1/4 right-1/3 w-16 h-16 opacity-20 dark:opacity-30">
          <Image
            src="/motion/Frame2.svg"
            alt="Motion Labs"
            width={64}
            height={64}
            className="w-full h-full motion-spin"
          />
        </div>

        {/* Additional sparkle elements */}
        <Circle className="absolute top-48 left-48 w-4 h-4 text-motion-blue/60 fill-current physics-pulse" />
        <Circle className="absolute bottom-32 left-32 w-3 h-3 text-purple-400/60 fill-current physics-pulse" style={{animationDelay: '0.5s'}} />
        <Circle className="absolute top-40 right-60 w-2 h-2 text-pink-400/60 fill-current physics-pulse" style={{animationDelay: '1.5s'}} />
        <Circle className="absolute top-60 left-60 w-5 h-5 text-motion-blue/60 fill-current physics-pulse" style={{animationDelay: '2s'}} />
      </div>

      {/* Header with Motion Labs branding */}
      <header className="sticky top-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="motion-logo">
                <Image
                  src="/motion/Frame2.svg"
                  alt="Motion Labs"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-foreground text-sm">Sui Developer MCP</span>
                <span className="text-xs text-muted-foreground">by Motion Labs</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link href="/examples" className="text-muted-foreground hover:text-foreground transition-colors">
                Examples
              </Link>
              <Link href="/tools" className="text-muted-foreground hover:text-foreground transition-colors">
                Tools
              </Link>
              <Link href="https://github.com/MotionEcosystem/sui-dev-mcp" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 lg:px-8 py-12 relative z-20">
        {/* Enhanced hero section */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <Badge className="bg-motion-blue/10 text-motion-blue border-motion-blue/20 mb-6">
              <Zap className="w-3 h-3 mr-1" />
              AI-Powered Development Tools
            </Badge>

            <h1 className="text-6xl font-black mb-6 text-foreground tracking-tight">
              Sui Developer<br/>
              <span className="text-motion-blue">MCP Server</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
              Transform your Sui development experience with AI-powered tools that provide intelligent code assistance,
              documentation search, and debugging help directly in your IDE.
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
              <span>Powered by</span>
              <Image
                src="/motion/Frame2.svg"
                alt="Motion Labs"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span className="font-semibold text-motion-blue">Motion Labs</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/docs">
              <Button className="bg-motion-blue hover:bg-motion-blue/90 text-white px-8 py-3">
                Get Started
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>

            <Link href="/examples">
              <Button variant="outline" className="px-8 py-3">
                <CodeXml className="h-4 w-4 mr-2" />
                View Examples
              </Button>
            </Link>

            <Link href="/tools">
              <Button variant="outline" className="px-8 py-3">
                <Wrench className="h-4 w-4 mr-2" />
                Explore Tools
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature cards with enhanced Motion branding */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <Card className="glass hover:shadow-lg transition-all duration-500 group border-border/50 hover:border-motion-blue/30">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-motion-blue/10 flex items-center justify-center mb-4 group-hover:bg-motion-blue/15 transition-colors duration-300">
                <Search className="h-6 w-6 text-motion-blue" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">Smart Documentation Search</CardTitle>
              <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                AI-powered semantic search across Sui documentation, ecosystem docs, and community resources.
                Get contextual answers with code examples.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/docs#documentation-search">
                <Button variant="ghost" className="text-motion-blue hover:text-motion-blue/80 p-0">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="glass hover:shadow-lg transition-all duration-500 group border-border/50 hover:border-motion-blue/30">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-motion-blue/10 flex items-center justify-center mb-4 group-hover:bg-motion-blue/15 transition-colors duration-300">
                <Code className="h-6 w-6 text-motion-blue" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">Code Analysis & Generation</CardTitle>
              <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                Advanced Move code analysis, security auditing, and TypeScript SDK generation.
                Optimize your smart contracts and frontend integration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/tools#move-analyzer">
                <Button variant="ghost" className="text-motion-blue hover:text-motion-blue/80 p-0">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="glass hover:shadow-lg transition-all duration-500 group border-border/50 hover:border-motion-blue/30">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-motion-blue/10 flex items-center justify-center mb-4 group-hover:bg-motion-blue/15 transition-colors duration-300">
                <Shield className="h-6 w-6 text-motion-blue" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">Error Debugging</CardTitle>
              <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                Decode complex Sui transaction errors with intelligent explanations and actionable solutions.
                Reduce debugging time significantly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/tools#error-decoder">
                <Button variant="ghost" className="text-motion-blue hover:text-motion-blue/80 p-0">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Quick Setup section with Motion branding */}
        <Card className="glass border-border/50 mb-20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
              <Terminal className="h-6 w-6 text-motion-blue" />
              Quick Setup
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Get started in under 2 minutes with Claude Desktop or compatible MCP clients
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">1. Add to MCP Settings</h4>
                <div className="bg-zinc-950 dark:bg-zinc-900 rounded-xl p-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <span className="ml-2 text-sm text-zinc-400 font-mono">claude_desktop_config.json</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white hover:bg-zinc-800">
                      <Circle className="h-4 w-4" />
                    </Button>
                  </div>
                  <pre className="text-sm text-zinc-300 font-mono leading-relaxed">
                    <div className="text-purple-400">module</div>
                    <div className="text-blue-400 ml-4">nft_collection::collection {`{`}</div>
                    <div className="text-gray-400 ml-8"></div>
                    <div className="text-green-400 ml-8">use sui::object::{`{`}self, UID{`}`};</div>
                    <div className="text-green-400 ml-8">use sui::transfer;</div>
                    <div className="text-green-400 ml-8">use sui::tx_context::{`{`}TxContext{`}`};</div>
                    <div className="text-white ml-8 mt-4">struct NFT has key, store {`{`}</div>
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
                  <h4 className="font-semibold text-foreground mb-3">2. Restart Claude Desktop</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Restart your Claude Desktop application to load the new MCP server configuration.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">3. Start Developing</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ask questions about Sui development, request code examples, or get help debugging issues.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example usage cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <Card className="glass border-border/50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">Smart Contract Help</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-motion-blue/5 p-4 rounded-lg border-l-4 border-motion-blue/40">
                  <p className="text-sm font-mono text-foreground">&quot;How do I create a liquidity pool in Move?&quot;</p>
                </div>
                <div className="text-muted-foreground text-sm leading-relaxed">
                  Get detailed explanations with complete code examples, security considerations, and best practices.
                </div>
                <Link href="/examples">
                  <Button variant="outline" size="sm" className="text-motion-blue border-motion-blue/30">
                    View More Examples
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-border/50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">Ecosystem Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-500/5 p-4 rounded-lg border-l-4 border-green-500/40">
                  <p className="text-sm font-mono text-foreground">&quot;Show me how to integrate with Cetus DEX&quot;</p>
                </div>
                <div className="text-muted-foreground text-sm leading-relaxed">
                  Search across the entire Sui ecosystem documentation with real-time updates and integration guides.
                </div>
                <Link href="/tools">
                  <Button variant="outline" size="sm" className="text-motion-blue border-motion-blue/30">
                    Explore Tools
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced CTA section */}
        <div className="text-center mb-20">
          <Card className="bg-motion-blue text-white max-w-3xl mx-auto border-0">
            <CardContent className="pt-12 pb-12">
              <div className="flex items-center justify-center mb-6">
                <Image
                  src="/motion/Frame2.svg"
                  alt="Motion Labs"
                  width={48}
                  height={48}
                  className="w-12 h-12 mr-3"
                />
                <h3 className="text-3xl font-bold">Ready to Accelerate Your Sui Development?</h3>
              </div>

              <p className="text-blue-100 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                Join thousands of developers using Motion Labs&apos; AI-powered tools to build faster,
                more secure, and better documented Sui applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs">
                  <Button className="bg-white text-motion-blue hover:bg-white/90 px-8 py-3">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Read Documentation
                  </Button>
                </Link>

                <Link href="https://github.com/MotionEcosystem/sui-dev-mcp" className="inline-block">
                  <Button variant="outline" className="border-white/20 text-primary hover:bg-white/10 px-8 py-3">
                    <Github className="h-5 w-5 mr-2" />
                    Star on GitHub
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Enhanced footer with Motion Labs branding */}
      <footer className="bg-card border-t border-border/50 relative z-20">
        <div className="container mx-auto px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/motion/Frame2.svg"
                  alt="Motion Labs"
                  width={32}
                  height={32}
                  className="w-8 h-8 motion-logo"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-foreground">Sui Developer MCP</span>
                  <span className="text-xs text-motion-blue">by Motion Labs</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                AI-powered development tools for the Sui blockchain ecosystem.
                Build faster, debug smarter, and deploy with confidence.
              </p>
              <div className="flex gap-3">
                <Button variant="ghost" size="sm">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
                <li><Link href="/examples" className="text-muted-foreground hover:text-foreground transition-colors">Examples</Link></li>
                <li><Link href="/tools" className="text-muted-foreground hover:text-foreground transition-colors">Tools</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">API Reference</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Changelog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://sui.io" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                    Sui Documentation <ExternalLink className="h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/MystenLabs" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                    Sui GitHub <ExternalLink className="h-3 w-3" />
                  </Link>
                </li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Community</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Status</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Motion Labs</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="mailto:hello@motionecosystem.com" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    hello@motionecosystem.com
                  </Link>
                </li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Motion Labs</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Motion Labs. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

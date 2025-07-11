'use client'

import { ThemeToggle } from '@/components/theme-toggle'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ArrowRight,
  Atom,
  BookOpen,
  Circle,
  Code,
  CodeXml,
  ExternalLink,
  Github,
  Mail,
  Orbit,
  Search,
  Shield,
  Sparkles,
  Terminal,
  Wrench,
  Zap,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-['Inter',ui-sans-serif,system-ui] text-foreground antialiased">
      {/* Enhanced background with Motion branding */}
      <div className='gradient-mesh fixed inset-0'></div>
      <div className='hero-glow fixed inset-0'></div>
      <div
        className='pointer-events-none fixed inset-0 z-10 opacity-[0.02] dark:opacity-[0.03]'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Enhanced physics animations with Motion branding */}
      <div className='z-5 pointer-events-none fixed inset-0'>
        {/* Large orbital systems */}
        <div className='absolute right-10 top-10 h-96 w-96 opacity-20 dark:opacity-30'>
          <div className='physics-orbit absolute inset-0 rounded-full border-2 border-motion-blue/40'></div>
          <div
            className='physics-orbit absolute inset-8 rounded-full border border-purple-500/30'
            style={{ animationDuration: '15s', animationDirection: 'reverse' }}
          ></div>
          <div
            className='physics-orbit absolute inset-16 rounded-full border-2 border-pink-500/20'
            style={{ animationDuration: '25s' }}
          ></div>
          <div className='physics-pulse absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-motion-blue/60'></div>
        </div>

        <div className='absolute bottom-20 left-10 h-80 w-80 opacity-15 dark:opacity-25'>
          <div
            className='physics-orbit absolute inset-0 rounded-full border border-green-500/40'
            style={{ animationDuration: '30s' }}
          ></div>
          <div
            className='physics-orbit absolute inset-12 rounded-full border-2 border-motion-blue/30'
            style={{ animationDuration: '20s', animationDirection: 'reverse' }}
          ></div>
          <div
            className='physics-pulse absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-green-500/60'
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        {/* Motion-branded floating elements */}
        <div className='physics-drift absolute left-32 top-32 h-16 w-16 rounded-lg border-2 border-motion-blue/30'>
          <div className='h-full w-full rounded-lg bg-motion-blue/10'></div>
        </div>

        {/* Enhanced physics shapes with Motion branding */}
        <div className='absolute right-48 top-48 h-12 w-12 opacity-40 dark:opacity-60'>
          <Atom
            className='physics-float h-full w-full text-motion-blue'
            style={{ animationDelay: '0s' }}
          />
        </div>

        <div className='absolute bottom-40 right-40 h-20 w-20 opacity-30 dark:opacity-50'>
          <Orbit
            className='physics-drift h-full w-full text-pink-500'
            style={{ animationDelay: '2s' }}
          />
        </div>

        <div className='absolute left-1/4 top-2/3 h-14 w-14 opacity-35 dark:opacity-55'>
          <Sparkles
            className='physics-float h-full w-full text-yellow-500'
            style={{ animationDelay: '1.5s' }}
          />
        </div>

        {/* Motion logo as floating element */}
        <div className='absolute right-1/3 top-1/4 h-16 w-16 opacity-20 dark:opacity-30'>
          <Image
            src='/motion/Frame2.svg'
            alt='Motion Labs'
            width={64}
            height={64}
            className='motion-spin h-full w-full'
          />
        </div>

        {/* Additional sparkle elements */}
        <Circle className='physics-pulse absolute left-48 top-48 h-4 w-4 fill-current text-motion-blue/60' />
        <Circle
          className='physics-pulse absolute bottom-32 left-32 h-3 w-3 fill-current text-purple-400/60'
          style={{ animationDelay: '0.5s' }}
        />
        <Circle
          className='physics-pulse absolute right-60 top-40 h-2 w-2 fill-current text-pink-400/60'
          style={{ animationDelay: '1.5s' }}
        />
        <Circle
          className='physics-pulse absolute left-60 top-60 h-5 w-5 fill-current text-motion-blue/60'
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Header with Motion Labs branding */}
      <header className='glass sticky top-0 z-50 border-b border-border/50'>
        <div className='container mx-auto px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='motion-logo'>
                <Image
                  src='/motion/Frame2.svg'
                  alt='Motion Labs'
                  width={32}
                  height={32}
                  className='h-8 w-8'
                />
              </div>
              <div className='flex flex-col'>
                <span className='text-sm font-black text-foreground'>Sui Developer MCP</span>
                <span className='text-xs text-muted-foreground'>by Motion Labs</span>
              </div>
            </div>
            <nav className='hidden items-center gap-6 md:flex'>
              <Link
                href='/docs'
                className='text-muted-foreground transition-colors hover:text-foreground'
              >
                Documentation
              </Link>
              <Link
                href='/examples'
                className='text-muted-foreground transition-colors hover:text-foreground'
              >
                Examples
              </Link>
              <Link
                href='/tools'
                className='text-muted-foreground transition-colors hover:text-foreground'
              >
                Tools
              </Link>
              <Link
                href='https://github.com/MotionEcosystem/sui-dev-mcp'
                className='text-muted-foreground transition-colors hover:text-foreground'
              >
                <Github className='h-5 w-5' />
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      <div className='container relative z-20 mx-auto px-6 py-12 lg:px-8'>
        {/* Enhanced hero section */}
        <div className='mb-20 text-center'>
          <div className='mb-8'>
            <Badge className='mb-6 border-motion-blue/20 bg-motion-blue/10 text-motion-blue'>
              <Zap className='mr-1 h-3 w-3' />
              AI-Powered Development Tools
            </Badge>

            <h1 className='mb-6 text-6xl font-black tracking-tight text-foreground'>
              Sui Developer
              <br />
              <span className='text-motion-blue'>MCP Server</span>
            </h1>

            <p className='mx-auto mb-4 max-w-3xl text-xl leading-relaxed text-muted-foreground'>
              Transform your Sui development experience with AI-powered tools that provide
              intelligent code assistance, documentation search, and debugging help directly in your
              IDE.
            </p>

            <div className='mb-8 flex items-center justify-center gap-2 text-sm text-muted-foreground'>
              <span>Powered by</span>
              <Image
                src='/motion/Frame2.svg'
                alt='Motion Labs'
                width={16}
                height={16}
                className='h-4 w-4'
              />
              <span className='font-semibold text-motion-blue'>Motion Labs</span>
            </div>
          </div>

          <div className='mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Link href='/docs'>
              <Button className='bg-motion-blue px-8 py-3 text-white hover:bg-motion-blue/90'>
                Get Started
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </Link>

            <Link href='/examples'>
              <Button variant='outline' className='px-8 py-3'>
                <CodeXml className='mr-2 h-4 w-4' />
                View Examples
              </Button>
            </Link>

            <Link href='/tools'>
              <Button variant='outline' className='px-8 py-3'>
                <Wrench className='mr-2 h-4 w-4' />
                Explore Tools
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature cards with enhanced Motion branding */}
        <div className='mb-20 grid gap-8 lg:grid-cols-3'>
          <Card className='glass group border-border/50 transition-all duration-500 hover:border-motion-blue/30 hover:shadow-lg'>
            <CardHeader>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-motion-blue/10 transition-colors duration-300 group-hover:bg-motion-blue/15'>
                <Search className='h-6 w-6 text-motion-blue' />
              </div>
              <CardTitle className='text-xl font-bold text-foreground'>
                Smart Documentation Search
              </CardTitle>
              <CardDescription className='text-sm leading-relaxed text-muted-foreground'>
                AI-powered semantic search across Sui documentation, ecosystem docs, and community
                resources. Get contextual answers with code examples.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href='/docs#documentation-search'>
                <Button variant='ghost' className='p-0 text-motion-blue hover:text-motion-blue/80'>
                  Learn more <ArrowRight className='ml-1 h-4 w-4' />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className='glass group border-border/50 transition-all duration-500 hover:border-motion-blue/30 hover:shadow-lg'>
            <CardHeader>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-motion-blue/10 transition-colors duration-300 group-hover:bg-motion-blue/15'>
                <Code className='h-6 w-6 text-motion-blue' />
              </div>
              <CardTitle className='text-xl font-bold text-foreground'>
                Code Analysis & Generation
              </CardTitle>
              <CardDescription className='text-sm leading-relaxed text-muted-foreground'>
                Advanced Move code analysis, security auditing, and TypeScript SDK generation.
                Optimize your smart contracts and frontend integration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href='/tools#move-analyzer'>
                <Button variant='ghost' className='p-0 text-motion-blue hover:text-motion-blue/80'>
                  Learn more <ArrowRight className='ml-1 h-4 w-4' />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className='glass group border-border/50 transition-all duration-500 hover:border-motion-blue/30 hover:shadow-lg'>
            <CardHeader>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-motion-blue/10 transition-colors duration-300 group-hover:bg-motion-blue/15'>
                <Shield className='h-6 w-6 text-motion-blue' />
              </div>
              <CardTitle className='text-xl font-bold text-foreground'>Error Debugging</CardTitle>
              <CardDescription className='text-sm leading-relaxed text-muted-foreground'>
                Decode complex Sui transaction errors with intelligent explanations and actionable
                solutions. Reduce debugging time significantly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href='/tools#error-decoder'>
                <Button variant='ghost' className='p-0 text-motion-blue hover:text-motion-blue/80'>
                  Learn more <ArrowRight className='ml-1 h-4 w-4' />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Quick Setup section with Motion branding */}
        <Card className='glass mb-20 border-border/50'>
          <CardHeader>
            <CardTitle className='flex items-center gap-3 text-2xl font-bold text-foreground'>
              <Terminal className='h-6 w-6 text-motion-blue' />
              Quick Setup
            </CardTitle>
            <CardDescription className='text-lg text-muted-foreground'>
              Get started in under 2 minutes with Claude Desktop or compatible MCP clients
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-6'>
              <div>
                <h4 className='mb-3 font-semibold text-foreground'>1. Add to MCP Settings</h4>
                <div className='relative rounded-xl bg-zinc-950 p-6 dark:bg-zinc-900'>
                  <div className='mb-4 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-red-400'></div>
                      <div className='h-3 w-3 rounded-full bg-yellow-400'></div>
                      <div className='h-3 w-3 rounded-full bg-green-400'></div>
                      <span className='ml-2 font-mono text-sm text-zinc-400'>
                        claude_desktop_config.json
                      </span>
                    </div>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='text-zinc-400 hover:bg-zinc-800 hover:text-white'
                    >
                      <Circle className='h-4 w-4' />
                    </Button>
                  </div>
                  <pre className='font-mono text-sm leading-relaxed text-zinc-300'>
                    <div className='text-purple-400'>module</div>
                    <div className='ml-4 text-blue-400'>nft_collection::collection {`{`}</div>
                    <div className='ml-8 text-gray-400'></div>
                    <div className='ml-8 text-green-400'>
                      use sui::object::{`{`}self, UID{`}`};
                    </div>
                    <div className='ml-8 text-green-400'>use sui::transfer;</div>
                    <div className='ml-8 text-green-400'>
                      use sui::tx_context::{`{`}TxContext{`}`};
                    </div>
                    <div className='ml-8 mt-4 text-white'>struct NFT has key, store {`{`}</div>
                    <div className='ml-12 text-white'>id: UID,</div>
                    <div className='ml-12 text-white'>name: String,</div>
                    <div className='ml-12 text-white'>description: String,</div>
                    <div className='ml-8 text-white'>{`}`}</div>
                    <div className='ml-4 text-blue-400'>{`}`}</div>
                  </pre>
                </div>
              </div>

              <div className='grid gap-6 md:grid-cols-2'>
                <div>
                  <h4 className='mb-3 font-semibold text-foreground'>2. Restart Claude Desktop</h4>
                  <p className='text-sm leading-relaxed text-muted-foreground'>
                    Restart your Claude Desktop application to load the new MCP server
                    configuration.
                  </p>
                </div>
                <div>
                  <h4 className='mb-3 font-semibold text-foreground'>3. Start Developing</h4>
                  <p className='text-sm leading-relaxed text-muted-foreground'>
                    Ask questions about Sui development, request code examples, or get help
                    debugging issues.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example usage cards */}
        <div className='mb-20 grid gap-8 lg:grid-cols-2'>
          <Card className='glass border-border/50'>
            <CardHeader>
              <CardTitle className='text-xl font-bold text-foreground'>
                Smart Contract Help
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div className='rounded-lg border-l-4 border-motion-blue/40 bg-motion-blue/5 p-4'>
                  <p className='font-mono text-sm text-foreground'>
                    &quot;How do I create a liquidity pool in Move?&quot;
                  </p>
                </div>
                <div className='text-sm leading-relaxed text-muted-foreground'>
                  Get detailed explanations with complete code examples, security considerations,
                  and best practices.
                </div>
                <Link href='/examples'>
                  <Button
                    variant='outline'
                    size='sm'
                    className='border-motion-blue/30 text-motion-blue'
                  >
                    View More Examples
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className='glass border-border/50'>
            <CardHeader>
              <CardTitle className='text-xl font-bold text-foreground'>
                Ecosystem Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div className='rounded-lg border-l-4 border-green-500/40 bg-green-500/5 p-4'>
                  <p className='font-mono text-sm text-foreground'>
                    &quot;Show me how to integrate with Cetus DEX&quot;
                  </p>
                </div>
                <div className='text-sm leading-relaxed text-muted-foreground'>
                  Search across the entire Sui ecosystem documentation with real-time updates and
                  integration guides.
                </div>
                <Link href='/tools'>
                  <Button
                    variant='outline'
                    size='sm'
                    className='border-motion-blue/30 text-motion-blue'
                  >
                    Explore Tools
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced CTA section */}
        <div className='mb-20 text-center'>
          <Card className='mx-auto max-w-3xl border-0 bg-motion-blue text-white'>
            <CardContent className='pb-12 pt-12'>
              <div className='mb-6 flex items-center justify-center'>
                <Image
                  src='/motion/Frame2.svg'
                  alt='Motion Labs'
                  width={48}
                  height={48}
                  className='mr-3 h-12 w-12'
                />
                <h3 className='text-3xl font-bold'>Ready to Accelerate Your Sui Development?</h3>
              </div>

              <p className='mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-blue-100'>
                Join thousands of developers using Motion Labs&apos; AI-powered tools to build
                faster, more secure, and better documented Sui applications.
              </p>

              <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                <Link href='/docs'>
                  <Button className='bg-white px-8 py-3 text-motion-blue hover:bg-white/90'>
                    <BookOpen className='mr-2 h-5 w-5' />
                    Read Documentation
                  </Button>
                </Link>

                <Link
                  href='https://github.com/MotionEcosystem/sui-dev-mcp'
                  className='inline-block'
                >
                  <Button
                    variant='outline'
                    className='border-white/20 px-8 py-3 text-primary hover:bg-white/10'
                  >
                    <Github className='mr-2 h-5 w-5' />
                    Star on GitHub
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Enhanced footer with Motion Labs branding */}
      <footer className='relative z-20 border-t border-border/50 bg-card'>
        <div className='container mx-auto px-6 py-12 lg:px-8'>
          <div className='mb-8 grid gap-8 md:grid-cols-4'>
            <div>
              <div className='mb-4 flex items-center gap-3'>
                <Image
                  src='/motion/Frame2.svg'
                  alt='Motion Labs'
                  width={32}
                  height={32}
                  className='motion-logo h-8 w-8'
                />
                <div className='flex flex-col'>
                  <span className='font-bold text-foreground'>Sui Developer MCP</span>
                  <span className='text-xs text-motion-blue'>by Motion Labs</span>
                </div>
              </div>
              <p className='mb-4 text-sm leading-relaxed text-muted-foreground'>
                AI-powered development tools for the Sui blockchain ecosystem. Build faster, debug
                smarter, and deploy with confidence.
              </p>
              <div className='flex gap-3'>
                <Button variant='ghost' size='sm'>
                  <Github className='h-4 w-4' />
                </Button>
                <Button variant='ghost' size='sm'>
                  <ExternalLink className='h-4 w-4' />
                </Button>
                <Button variant='ghost' size='sm'>
                  <Mail className='h-4 w-4' />
                </Button>
              </div>
            </div>

            <div>
              <h3 className='mb-3 font-semibold text-foreground'>Product</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    href='/docs'
                    className='text-muted-foreground transition-colors hover:text-foreground'
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href='/examples'
                    className='text-muted-foreground transition-colors hover:text-foreground'
                  >
                    Examples
                  </Link>
                </li>
                <li>
                  <Link
                    href='/tools'
                    className='text-muted-foreground transition-colors hover:text-foreground'
                  >
                    Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground transition-colors hover:text-foreground'
                  >
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground transition-colors hover:text-foreground'
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='mb-3 font-semibold text-foreground'>Resources</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    href='https://sui.io'
                    className='flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground'
                  >
                    Sui Documentation <ExternalLink className='h-3 w-3' />
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://github.com/MystenLabs'
                    className='flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground'
                  >
                    Sui GitHub <ExternalLink className='h-3 w-3' />
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground transition-colors hover:text-foreground'
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground transition-colors hover:text-foreground'
                  >
                    Status
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='mb-3 font-semibold text-foreground'>Motion Labs</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    href='mailto:hello@motionecosystem.com'
                    className='flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground'
                  >
                    <Mail className='h-4 w-4' />
                    hello@motionecosystem.com
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground transition-colors hover:text-foreground'
                  >
                    About Motion Labs
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground transition-colors hover:text-foreground'
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row'>
            <p className='text-sm text-muted-foreground'>
              © 2024 Motion Labs. All rights reserved.
            </p>
            <div className='flex gap-6 text-sm'>
              <Link
                href='#'
                className='text-muted-foreground transition-colors hover:text-foreground'
              >
                Privacy Policy
              </Link>
              <Link
                href='#'
                className='text-muted-foreground transition-colors hover:text-foreground'
              >
                Terms of Service
              </Link>
              <Link
                href='#'
                className='text-muted-foreground transition-colors hover:text-foreground'
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

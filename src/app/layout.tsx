import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Sui Developer MCP Server | AI-Powered Blockchain Development Tools',
    template: '%s | Sui Developer MCP Server',
  },
  description:
    'AI-powered development tools for the Sui blockchain ecosystem by Motion Labs. Get intelligent code assistance, documentation search, debugging help, and smart contract analysis directly in your IDE.',
  keywords: [
    'Sui',
    'blockchain',
    'MCP',
    'AI',
    'development tools',
    'smart contracts',
    'Move',
    'Motion Labs',
    'TypeScript',
    'developer tools',
    'Claude Desktop',
    'AI assistant',
    'Web3',
    'DeFi',
  ],
  authors: [
    {
      name: 'Motion Labs',
      url: 'https://motionecosystem.com',
    },
  ],
  creator: 'Motion Labs',
  publisher: 'Motion Labs',
  metadataBase: new URL('https://sui-dev-mcp.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sui Developer MCP Server | AI-Powered Blockchain Development Tools',
    description:
      'Transform your Sui development experience with AI-powered tools by Motion Labs. Intelligent code assistance, documentation search, and debugging help.',
    url: 'https://sui-dev-mcp.vercel.app',
    siteName: 'Sui Developer MCP Server',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Sui Developer MCP Server - AI-Powered Development Tools by Motion Labs',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sui Developer MCP Server | AI-Powered Blockchain Development Tools',
    description:
      'Transform your Sui development experience with AI-powered tools by Motion Labs. Intelligent code assistance, documentation search, and debugging help.',
    images: ['/banner.png'],
    creator: '@MotionLabs',
    site: '@MotionLabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: 'technology',
  classification: 'Developer Tools',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

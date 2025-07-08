import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sui Developer MCP Server",
  description: "AI-powered development tools for Sui blockchain developers. Get intelligent code assistance, documentation search, and debugging help directly in your IDE.",
  keywords: ["Sui", "blockchain", "MCP", "AI", "development", "smart contracts", "Move"],
  authors: [{ name: "Motion Ecosystem" }],
  openGraph: {
    title: "Sui Developer MCP Server",
    description: "Transform your Sui development experience with AI-powered tools",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}

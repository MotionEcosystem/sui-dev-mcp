import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sui Developer MCP Server - AI-Powered Blockchain Development Tools',
    short_name: 'Sui Dev MCP',
    description: 'AI-powered development tools for the Sui blockchain ecosystem by Motion Labs',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#215FF6',
    orientation: 'portrait',
    categories: ['developer-tools', 'productivity', 'education'],
    lang: 'en',
    icons: [
      {
        src: '/motion/Frame2.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any maskable',
      },
    ],
    screenshots: [
      {
        src: '/banner.png',
        sizes: '1200x630',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Sui Developer MCP Server Banner',
      },
    ],
    shortcuts: [
      {
        name: 'Documentation',
        short_name: 'Docs',
        description: 'View documentation and guides',
        url: '/docs',
        icons: [{ src: '/motion/Frame2.svg', sizes: '96x96' }],
      },
      {
        name: 'Development Tools',
        short_name: 'Tools',
        description: 'Explore MCP development tools',
        url: '/tools',
        icons: [{ src: '/motion/Frame2.svg', sizes: '96x96' }],
      },
      {
        name: 'Code Examples',
        short_name: 'Examples',
        description: 'Browse code examples and tutorials',
        url: '/examples',
        icons: [{ src: '/motion/Frame2.svg', sizes: '96x96' }],
      },
    ],
  }
}

# 🚀 Sui Developer MCP

<div align="center">

![Motion Labs](public/motion/Frame2.svg)

**AI-Powered Development Tools for the Sui Blockchain Ecosystem**

_Built with ❤️ by [Motion Labs](https://motionecosystem.com)_

[![CI/CD Pipeline](https://github.com/MotionEcosystem/sui-dev-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/MotionEcosystem/sui-dev-mcp/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)](https://nextjs.org/)

[🌐 Live Demo](https://sui-dev-mcp.motion.com) • [📚 Documentation](https://sui-dev-mcp.motion.com/docs) • [🛠️ Tools](https://sui-dev-mcp.motion.com/tools) • [🤝 Contributing](#contributing)

</div>

## ✨ Features

### 🔍 Smart Documentation Search

- **AI-powered semantic search** across Sui documentation and ecosystem docs
- **Contextual answers** with relevant code examples
- **Real-time updates** from the latest Sui documentation

### 💻 Code Analysis & Generation

- **Advanced Move code analysis** with security auditing
- **TypeScript SDK generation** for seamless frontend integration
- **Smart contract optimization** recommendations

### 🐛 Intelligent Error Debugging

- **Decode complex Sui transaction errors** with clear explanations
- **Actionable solutions** to reduce debugging time
- **Pattern recognition** for common issues

### 🎨 Modern UI/UX

- **Motion Labs branded** interface with `#215FF6` signature blue
- **Dark/Light mode** support with smooth transitions
- **Responsive design** optimized for all devices
- **Physics-based animations** for engaging user experience

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0
- **Claude Desktop** or compatible MCP client

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MotionEcosystem/sui-dev-mcp.git
   cd sui-dev-mcp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### MCP Setup

Add to your Claude Desktop configuration:

```json
{
  "mcpServers": {
    "sui-dev-mcp": {
      "command": "node",
      "args": ["path/to/sui-dev-mcp/server.js"]
    }
  }
}
```

## 🛠️ Development

### Available Scripts

| Script               | Description                  |
| -------------------- | ---------------------------- |
| `npm run dev`        | Start development server     |
| `npm run build`      | Build for production         |
| `npm run start`      | Start production server      |
| `npm run lint`       | Run ESLint                   |
| `npm run lint:fix`   | Fix ESLint issues            |
| `npm run type-check` | Run TypeScript type checking |
| `npm run test`       | Run unit tests               |
| `npm run test:e2e`   | Run E2E tests                |
| `npm run format`     | Format code with Prettier    |

### Project Structure

```
sui-dev-mcp/
├── .github/workflows/     # GitHub Actions CI/CD
├── .husky/               # Git hooks
├── .vscode/              # VS Code settings
├── public/               # Static assets
│   └── motion/           # Motion Labs branding
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   └── lib/              # Utilities
├── tests/
│   ├── e2e/              # Playwright E2E tests
│   └── unit/             # Jest unit tests
└── docs/                 # Documentation
```

### Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Jest](https://jestjs.io/) + [Playwright](https://playwright.dev/)
- **Linting**: [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- **Git Hooks**: [Husky](https://typicode.github.io/husky/)

## 🏗️ Architecture

### Motion Labs Branding

The application features comprehensive Motion Labs branding:

- **Primary Color**: `#215FF6` (Motion Blue)
- **Logo Integration**: Motion Labs logo throughout the interface
- **Consistent Theming**: Light/dark mode support with Motion brand colors
- **Professional Attribution**: "by Motion Labs" branding

### AI Integration

- **MCP Protocol**: Model Context Protocol for AI integration
- **Semantic Search**: Vector-based documentation search
- **Code Analysis**: AI-powered Move code review
- **Error Decoding**: Intelligent transaction error interpretation

## 🧪 Testing

### Unit Tests

```bash
npm run test
npm run test:watch  # Watch mode
npm run test:ci     # CI mode with coverage
```

### E2E Tests

```bash
npm run test:e2e
npm run test:e2e:ui  # Interactive UI mode
```

### Performance Testing

```bash
npx lhci autorun  # Lighthouse CI
```

## 🚀 Deployment

### Production Build

```bash
npm run build
npm start
```

### Environment Variables

```bash
# Optional: Analytics and monitoring
NEXT_PUBLIC_GA_ID=your_google_analytics_id
VERCEL_URL=your_production_url
```

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to `main`

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feat/amazing-feature
   ```
3. **Make your changes**
4. **Run tests**
   ```bash
   npm run test
   npm run test:e2e
   ```
5. **Commit with conventional commits**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
6. **Push and create PR**

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test changes
- `chore:` Maintenance tasks

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Sui Foundation** for the amazing blockchain platform
- **Mysten Labs** for comprehensive documentation
- **The Sui Community** for ecosystem contributions
- **Motion Labs Team** for making this project possible

## 📞 Contact

- **Website**: [motionecosystem.com](https://motionecosystem.com)
- **Email**: [hello@motionecosystem.com](mailto:hello@motionecosystem.com)
- **GitHub**: [@MotionEcosystem](https://github.com/MotionEcosystem)

---

<div align="center">

**Built with ⚡ by Motion Labs**

_Accelerating the future of blockchain development_

</div>

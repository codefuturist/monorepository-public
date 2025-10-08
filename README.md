# Monorepository Public

A comprehensive monorepo implementation with modern development practices, automated workflows, and scalable architecture.

## 🎯 Overview

This project demonstrates a production-ready monorepo structure featuring:

- **Multi-platform applications** (Web, Mobile, Admin, Desktop)
- **Shared component libraries** and utilities
- **Microservices architecture** with API, GraphQL, WebSocket services
- **Advanced branching strategy** with automated CI/CD
- **Comprehensive testing** and security scanning
- **Infrastructure as Code** with Docker, Kubernetes, Terraform

## 🏗️ Architecture

### Applications

- **`apps/web/`** - Next.js web application
- **`apps/mobile/`** - React Native mobile app
- **`apps/admin/`** - Admin dashboard
- **`apps/desktop/`** - Electron desktop application

### Shared Packages

- **`packages/ui/`** - Component library with Storybook
- **`packages/utils/`** - Utility functions
- **`packages/types/`** - Shared TypeScript definitions
- **`packages/config/`** - Shared configurations
- **`packages/logger/`** - Logging utilities
- **`packages/analytics/`** - Analytics package

### Backend Services

- **`services/api/`** - REST API service
- **`services/graphql/`** - GraphQL API
- **`services/websocket/`** - Real-time WebSocket service
- **`services/worker/`** - Background job processor
- **`services/scheduler/`** - Cron job scheduler
- **`services/gateway/`** - API Gateway

## 🌳 Branching Strategy

We use a **Git Flow-inspired strategy** optimized for continuous integration:

### Core Branches

- **`main`** - Production-ready code (🔒 Protected)
- **`develop`** - Integration branch for staging (🛡️ Protected)

### Supporting Branches

- **`feature/[scope]/[TICKET]-[description]`** - New features
- **`bugfix/[scope]/[TICKET]-[description]`** - Bug fixes
- **`hotfix/[TICKET]-[description]`** - Critical production fixes
- **`release/[version]`** - Release preparation

**Example branch names:**

```
feature/web/JIRA-123-add-user-authentication
bugfix/api/JIRA-456-fix-memory-leak
hotfix/JIRA-789-critical-security-patch
release/1.2.0
```

### Automated Workflows

- ✅ Branch naming validation
- ✅ Conventional commit enforcement
- ✅ Automated testing on affected packages
- ✅ Preview deployments for feature branches
- ✅ Security scanning and dependency audits
- ✅ Branch health monitoring

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+
- Git
- Docker (optional)

### Development Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/codefuturist/monorepository-rework.git
   cd monorepository-rework
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up development environment**

   ```bash
   pnpm run dev:setup
   ```

4. **Start development servers**

   ```bash
   # Start all apps
   pnpm run dev

   # Start specific app
   pnpm run dev --filter=web
   ```

### Creating a Feature Branch

```bash
# Start from develop
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/web/JIRA-123-add-user-auth

# Make changes and commit
git add .
git commit -m "feat(web): add user authentication

- Implement login/logout functionality
- Add JWT token management
- Create auth context provider

JIRA-123"

# Push and create PR
git push origin feature/web/JIRA-123-add-user-auth
```

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests for affected packages
pnpm turbo run test --affected

# Run specific package tests
pnpm run test --filter=ui

# Run E2E tests
pnpm run test:e2e
```

## 📦 Building

```bash
# Build all packages
pnpm build

# Build affected packages
pnpm turbo run build --affected

# Build specific package
pnpm run build --filter=web
```

## 🔧 Available Scripts

### Development

- `pnpm run dev` - Start all development servers
- `pnpm run dev:setup` - Setup development environment
- `pnpm run type-check` - Run TypeScript type checking
- `pnpm run lint` - Lint all packages
- `pnpm run format` - Format code with Prettier

### Testing

- `pnpm test` - Run all tests
- `pnpm run test:unit` - Run unit tests
- `pnpm run test:integration` - Run integration tests
- `pnpm run test:e2e` - Run end-to-end tests

### Build & Deploy

- `pnpm build` - Build all packages
- `pnpm run build:affected` - Build affected packages
- `pnpm run deploy:staging` - Deploy to staging
- `pnpm run deploy:production` - Deploy to production

### Branch Management

- `pnpm run branch:health` - Check branch health
- `pnpm run branch:cleanup` - Get cleanup suggestions

### Release Management

- `pnpm run release:prepare <version>` - Prepare release
- `pnpm run changeset` - Create changeset
- `pnpm run changeset:version` - Update versions

## 📖 Documentation

- **[Branching Strategy](docs/guides/development/branching-strategy.md)** - Detailed branching workflow
- **[Architecture](docs/architecture/overview.md)** - System architecture overview
- **[API Documentation](docs/api/)** - REST, GraphQL, and WebSocket APIs
- **[Component Library](packages/ui/README.md)** - UI component documentation

## 🤝 Contributing

Please read our [Branching Strategy Guide](docs/guides/development/branching-strategy.md) before contributing.

1. Create a feature branch following our naming convention
2. Make your changes with appropriate tests
3. Ensure all CI checks pass
4. Submit a pull request with a clear description

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

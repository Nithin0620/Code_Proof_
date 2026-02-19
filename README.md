<div align="center">

# 🔒 CodeProof

**AI-powered pre-commit security enforcement that prevents secrets and risky patterns before they reach your repository.**

[![npm version](https://img.shields.io/npm/v/codeproof?style=for-the-badge&color=blue)](https://www.npmjs.com/package/codeproof)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18-brightgreen?style=for-the-badge)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)

[Features](#-features) • [Installation](#-installation) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Dashboard](#-dashboard)

</div>

---

## 🎯 Overview

CodeProof is a comprehensive security tool that enforces pre-commit hooks to scan your codebase for secrets, API keys, credentials, and other risky patterns. With a **regex baseline + AI escalation** approach, it provides high-confidence detection while maintaining developer productivity.

### Why CodeProof?

- 🛡️ **Hard-stop enforcement** - Blocks risky commits before they reach your repository
- 🤖 **AI-powered analysis** - Context-aware detection beyond simple pattern matching
- 📊 **Audit-ready reporting** - Persistent logs for compliance and forensic review
- ⚡ **Fail-open design** - Developer workflows stay online even during degraded states
- 🔐 **Zero secrets in frontend** - Sensitive content never touches the dashboard UI

---

## ✨ Features

### Core Capabilities

- **🔍 Multi-layer Detection**
  - Regex-based baseline patterns for common secrets
  - AI escalation for high-confidence findings
  - Customizable rule sets per project

- **🚫 Pre-commit Enforcement**
  - Automatic git hook installation
  - Blocks commits with detected secrets
  - Configurable severity levels (block/warn/allow)

- **📈 Dashboard Analytics**
  - Real-time security posture visualization
  - Project-level metrics and trends
  - Usage tracking and limits

- **🔧 Developer-Friendly**
  - Clear, actionable remediation steps
  - Safe secret migration tools
  - Minimal false positives

### Security Philosophy

- **ClientId is identity, not security** - Identifiers help routing, never replace authentication
- **Fail-open design** - Developers keep shipping while system records degraded states
- **No secrets stored in frontend** - Sensitive content never lives in the dashboard UI
- **Authentication separate from ingestion** - Event intake and user identity run on isolated paths

---

## 📦 Installation

### Prerequisites

- Node.js >= 18
- npm or yarn
- Git repository

### Install via npm

```bash
npm install -g codeproof
```

Or use locally in your project:

```bash
npm install codeproof --save-dev
npx codeproof init
```

---

## 🚀 Quick Start

### 1. Initialize CodeProof

Navigate to your project directory and run:

```bash
codeproof init
```

This will:
- Create a `codeproof.config.json` configuration file
- Install a pre-commit git hook
- Set up scanning rules for your project type

### 2. Run Your First Scan

```bash
codeproof run
```

### 3. View Reports

```bash
codeproof report@dashboard
```

Or visit the [web dashboard](https://code-proof.vercel.app) to view detailed analytics.

---

## 📚 Documentation

### CLI Commands

| Command | Description |
|---------|-------------|
| `codeproof init` | Initialize CodeProof in your repository |
| `codeproof run` | Manually run security checks |
| `codeproof report@dashboard` | Open dashboard with reports |
| `codeproof move-secret` | Safely move detected secrets (experimental) |
| `codeproof ignore` | Add patterns to ignore list |
| `codeproof apply` | Apply configuration changes |
| `codeproof whoami` | Show current client configuration |
| `codeproof help` | Display help information |

### Configuration

CodeProof uses `codeproof.config.json` for project-specific settings:

```json
{
  "projectId": "uuid-here",
  "projectType": "Node",
  "scanMode": "full",
  "enforcement": "enabled",
  "features": {
    "reporting": true,
    "integration": true,
    "aiEscalation": true,
    "secretRemediation": false
  },
  "severityRules": {
    "block": [],
    "warn": [],
    "allow": []
  }
}
```

### Scan Modes

- **`full`** - Complete scan of all files
- **`staged`** - Only scan staged files (default for pre-commit)
- **`diff`** - Scan only changed files

---

## 🏗️ Architecture

CodeProof consists of three main components:

### 1. CLI Tool (`cli/`)
- Pre-commit hook enforcement
- Local scanning engine
- Rule-based detection with AI escalation
- Report generation and upload

**Tech Stack:** Node.js, ES Modules

### 2. Backend API (`server/`)
- RESTful API for report ingestion
- JWT-based authentication
- MongoDB for persistent storage
- Usage tracking and analytics

**Tech Stack:** Express.js, TypeScript, MongoDB, Mongoose

### 3. Web Dashboard (`dashboard/`)
- Real-time security analytics
- Project and report visualization
- Usage metrics and trends
- Interactive charts and graphs

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS

---

## 🌐 Dashboard

Access the live dashboard at: **[https://code-proof.vercel.app](https://code-proof.vercel.app)**

### Features

- 📊 **Security Analytics** - Visual summary of project activity and risk signals
- 📈 **Usage Tracking** - Monthly run limits and daily usage volume
- 🔍 **Report Browser** - Detailed view of all security scans
- 📋 **Project Management** - Track multiple projects and repositories

### Authentication

The dashboard uses clientId-based authentication. Get your clientId from the CodeProof CLI:

```bash
codeproof whoami
```

---

## 🔧 Development

### Prerequisites

- Node.js >= 18
- MongoDB (for backend)
- npm or yarn

### Setup

1. **Clone the repository**

```bash
git clone https://github.com/Nithin0620/code_proof.git
cd code_proof
```

2. **Install dependencies**

```bash
# Root dependencies
npm install

# CLI
cd cli && npm install

# Server
cd ../server && npm install

# Dashboard
cd ../dashboard && npm install
```

3. **Configure environment variables**

**Server** (`.env`):
```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/codeproof
JWT_SECRET=your-secret-key
```

**Dashboard** (`.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

4. **Start development servers**

```bash
# Terminal 1: Backend API
cd server
npm run dev

# Terminal 2: Dashboard
cd dashboard
npm run dev

# Terminal 3: CLI (for testing)
cd cli
npm link
```

---

## 📁 Project Structure

```
code_proof/
├── cli/                 # Command-line tool
│   ├── bin/             # Executable entry point
│   ├── commands/        # CLI commands
│   ├── core/            # Core functionality
│   ├── engine/          # Detection engine
│   ├── hooks/           # Git hooks
│   ├── rules/           # Security rules
│   └── utils/           # Utilities
├── server/              # Backend API
│   └── src/
│       ├── config/      # Configuration
│       ├── controllers/ # API controllers
│       ├── models/      # Database models
│       ├── routes/      # API routes
│       └── services/    # Business logic
├── dashboard/           # Web dashboard
│   └── src/
│       ├── app/         # Next.js app router
│       ├── components/  # React components
│       └── lib/         # Utilities
└── AI/                  # AI analysis models
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- **npm Package:** [codeproof](https://www.npmjs.com/package/codeproof)
- **GitHub Repository:** [code_proof](https://github.com/Nithin0620/code_proof)
- **Dashboard:** [code-proof.vercel.app](https://code-proof.vercel.app)
- **API:** [code-proof.onrender.com](https://code-proof.onrender.com)

---

## 🙏 Acknowledgments

Built with ❤️ by the CodeProof team.

Special thanks to all contributors and the open-source community.

---

<div align="center">

**Made with 🔒 security and ⚡ speed in mind**

[⬆ Back to Top](#-codeproof)

</div>

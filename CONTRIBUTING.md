# Contributing to Hackerspace Mangaluru Website

Thank you for your interest in contributing to the Hackerspace Mangaluru website! 🎉

Whether you're fixing a typo, adding content, or building a new feature — every contribution matters. This guide will help you get started.

## 📋 Table of Contents

- [Getting Started](#-getting-started)
- [Development Setup](#-development-setup)
- [Making Changes](#-making-changes)
- [Pull Request Process](#-pull-request-process)
- [Code Style](#-code-style)
- [Reporting Issues](#-reporting-issues)
- [Need Help?](#-need-help)

## 🚀 Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/<your-username>/hackersmang.org.git
   cd hackersmang.org
   ```
3. **Add the upstream remote** to stay in sync:
   ```bash
   git remote add upstream https://github.com/HackersMang/hackersmang.org.git
   ```

## 💻 Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Install and Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Making Changes

1. **Sync your fork** with the latest upstream changes:
   ```bash
   git fetch upstream
   git checkout master
   git merge upstream/master
   ```

2. **Create a feature branch** with a descriptive name:
   ```bash
   git checkout -b <type>/<short-description>
   ```
   
   Branch naming examples:
   - `fix/copyright-year`
   - `feat/about-page`
   - `docs/contributing-guide`
   - `a11y/focus-indicators`

3. **Make your changes** and commit with clear messages:
   ```bash
   git add .
   git commit -m "fix: update copyright year to be dynamic"
   ```
   
   Use [Conventional Commits](https://www.conventionalcommits.org/) format:
   - `feat:` — A new feature
   - `fix:` — A bug fix
   - `docs:` — Documentation changes
   - `a11y:` — Accessibility improvements
   - `refactor:` — Code changes that neither fix a bug nor add a feature
   - `ci:` — CI/CD changes

4. **Push** your branch to your fork:
   ```bash
   git push origin <your-branch-name>
   ```

## 📬 Pull Request Process

1. Go to the [upstream repository](https://github.com/HackersMang/hackersmang.org) and click **"New Pull Request"**
2. Select your fork and branch as the source
3. Write a clear PR description:
   - What does this PR do?
   - Link to the related issue (use `Closes #XX` to auto-close)
   - Screenshots if there are UI changes
4. Wait for a maintainer to review your PR
5. Address any feedback and push updates to the same branch

## 🎨 Code Style

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Components**: Reusable React components in `components/`
- **Formatting**: Run `npm run lint` before submitting
- Keep components focused and reusable
- Use semantic HTML elements where possible
- Follow existing patterns in the codebase

## 📝 Project Structure

```
hackersmang.org/
├── app/                    # Next.js pages and routes
│   ├── page.tsx           # Homepage
│   ├── events/            # Events listing page
│   ├── hmjun26/           # Individual event pages
│   └── ...
├── components/
│   ├── hackersmang/       # Homepage components
│   └── eventpage/         # Shared event page components
├── lib/                   # Utilities, types, event data
├── assets/                # Fonts and static CSS
└── public/                # Static assets (images, icons)
```

## 🐛 Reporting Issues

Found a bug or have a feature idea? [Open an issue](https://github.com/HackersMang/hackersmang.org/issues/new) with:

- A clear, descriptive title
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots if applicable

## 🤝 Need Help?

- Check out the [README](README.md) for setup instructions
- Browse [existing issues](https://github.com/HackersMang/hackersmang.org/issues) for ideas
- Reach out to the community on our [social channels](https://hackersmang.org)
- New to Git? Check out [gitme.js.org](https://gitme.js.org) for a beginner-friendly guide

## 📜 Code of Conduct

Please read our [Code of Conduct](COC.md) before contributing. We are committed to fostering an inclusive and welcoming environment for everyone.

---

Happy contributing! 💻🎉

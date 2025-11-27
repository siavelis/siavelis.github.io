# Contributing Guide

This document provides guidelines for contributing to this repository, with a focus on effective collaboration with AI coding agents.

## Working with AI Agents

### Getting the Best Results

When working with AI agents (like GitHub Copilot), follow these practices for better outcomes:

#### 1. Be Specific in Your Requests

- **Good**: "Update the README.md to reflect the current Node.js version used in package.json"
- **Less effective**: "Fix the documentation"

#### 2. Provide Context

- Reference specific files, line numbers, or code snippets
- Link to related issues, PRs, or external documentation
- Explain the "why" behind the request, not just the "what"

#### 3. Break Down Complex Tasks

Instead of asking for large changes at once:
- Split requests into smaller, focused tasks
- Wait for confirmation before moving to the next step
- Review intermediate results

#### 4. Reference Existing Patterns

- Point to similar implementations in the codebase
- Specify coding conventions to follow
- Link to design documents or style guides

### Example Prompts

#### For Bug Fixes
```
Fix the broken link in README.md line 73. The correct URL should be https://example.com/guide
```

#### For New Features
```
Add a new component called `ContactForm` in src/components/ that:
1. Has fields for name, email, and message
2. Uses React Bootstrap for styling (matching existing components)
3. Includes basic form validation
```

#### For Refactoring
```
Refactor the NavigationBar component to use TypeScript interfaces for props. 
Follow the pattern used in DarkModeToggle.tsx.
```

#### For Documentation
```
Update the README.md Requirements section to match the actual versions in package.json.
Current versions are Node.js 20.x, npm 10.x, and Next.js 16.x.
```

## Development Workflow

### Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

### Before Submitting Changes

1. **Type Check**: Run `npx tsc --noEmit` to verify TypeScript types
2. **Build**: Run `npm run build` to ensure the project builds successfully
3. **Test Locally**: Serve the production build with `serve -d production`

### Code Style

- Use TypeScript for all new components
- Follow existing naming conventions (PascalCase for components, camelCase for functions)
- Keep components focused and single-purpose
- Use React Bootstrap for UI components (already used in the project)

## Project Structure

```
src/
├── components/     # Reusable React components
├── data/           # Static data files (JSON)
├── pages/          # Next.js pages
└── public/         # Public assets (CSS)
public/             # Static assets (images)
```

## Getting Help

- Check existing [issues](https://github.com/siavelis/siavelis.github.io/issues) for similar problems
- Review the [README.md](./README.md) for setup and deployment instructions
- Look at recent PRs for examples of accepted changes

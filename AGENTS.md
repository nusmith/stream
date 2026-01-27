# AGENTS.md

## Purpose
This file provides guidelines for AI agents working on the Stream music streaming application. It helps maintain consistency, safety, and quality across the codebase.

## Project Overview
Stream is a music streaming application built with Next.js, React, TypeScript, and Material-UI (MUI). The app features:
- Home page with music discovery
- Discover page with vibe selection and recommendations
- Social page for connecting with friends
- Create page for playlists and music creation

## Tech Stack
- **Framework**: Next.js 16.1.3
- **UI Library**: Material-UI (MUI) v7.3.7
- **Styling**: Tailwind CSS v4 (with MUI sx prop for component styling)
- **Language**: TypeScript
- **State Management**: React hooks (useState)

## Code Style Guidelines

### Component Structure
- Use MUI components (`Box`, `Button`, `Typography`) instead of native HTML elements
- Prefer `sx` prop for styling over Tailwind classes when using MUI components
- Keep components focused and single-purpose
- When possible, refactor repeated code into a shared component that can be reused in many files or places within a file

### File Organization
- Pages are located in `app/[route]/page.tsx`
- Shared components should be in a `components/` directory (if needed)
- Utilities and helpers can be in a `utils/` or `lib/` directory

### Naming Conventions
- Use PascalCase for component names
- Use camelCase for variables and functions
- Use descriptive, meaningful names

## Global Safety Rules
- **Never commit secrets**: API keys, tokens, `.env*` files, credentials
- **No destructive operations**: Don't run destructive commands unless explicitly requested
- **Read-first approach**: Prefer read-only exploration; propose changes as diffs or clear steps
- **Backup before major changes**: Ensure changes are reversible

## Change Management
- When possible, resuse existing code 
- Maintain backwards compatibility when possible
- Document breaking changes clearly

## Quality Standards
- **Small, focused changes**: Break large features into smaller, testable pieces
- **Type safety**: Leverage TypeScript for type checking
- **Accessibility**: Ensure UI components are accessible
- **Performance**: Consider performance implications of changes

## Component Patterns

### Page Structure
Each page typically includes:
1. Header with navigation
2. Main content area
3. Now Playing bar (fixed at bottom)

### Styling Approach
- Use MUI's `sx` prop for component-specific styles
- Use theme values and breakpoints from MUI
- Maintain consistent spacing using MUI's spacing system

### State Management
- Use React hooks (`useState`, `useEffect`) for local component state
- Consider context or state management library for global state if needed

## Communication Guidelines
- Ask clarifying questions only when blocked or when requirements are ambiguous
- Otherwise, proceed with a best-effort plan and highlight assumptions
- Provide clear explanations of changes and reasoning
- Document complex logic or non-obvious decisions

## Notes
- The app uses a dark theme with gradient accents
- Navigation is consistent across all pages
- The Now Playing bar is present on all pages
- Gradient helpers are used for converting Tailwind gradient classes to CSS


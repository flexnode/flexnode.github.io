# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Studio** - a Tailwind Plus site template built with Next.js, TypeScript, and Tailwind CSS. It's a commercial portfolio/agency website template showcasing work, blog posts, and company information.

## Key Technologies

- **Next.js 15** with App Router and MDX support
- **Tailwind CSS 4** with custom design system
- **TypeScript** with strict configuration
- **Framer Motion** for animations
- **MDX** for content management
- **Shiki** for syntax highlighting

## Architecture

### Content Structure
- **Static Pages**: `src/app/(page)/page.tsx` - About, Contact, Process
- **Blog**: `src/app/blog/` with MDX files and wrapper components
- **Work/Case Studies**: `src/app/work/` with MDX files and wrapper components
- **Components**: Reusable UI components in `src/components/`

### MDX Configuration
- Custom MDX processing in `next.config.mjs` with:
  - Automatic layout wrapping for blog posts and case studies
  - Shiki syntax highlighting
  - Image imports via `recma-import-images`
  - GFM (GitHub Flavored Markdown) support

### Design System
- Custom Tailwind configuration with neutral color palette
- Responsive-first design with mobile-first approach
- Animation system using Framer Motion
- Typography system in `src/styles/`
- Grid patterns and visual effects via `GridPattern` component

## Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Linting
npm run lint

# Type checking
npx tsc --noEmit
```

## Key File Locations

- **Layout**: `src/app/layout.tsx` (root) + `src/components/RootLayout.tsx` (navigation)
- **Styles**: `src/styles/` - base.css, tailwind.css, typography.css
- **Components**: `src/components/` - reusable UI components
- **Content**: MDX files in `src/app/blog/` and `src/app/work/`
- **Fonts**: `src/fonts/Mona-Sans.var.woff2`
- **Images**: `src/images/` - organized by clients, team, and general

## Content Management

- Blog posts use `wrapper.tsx` for consistent layout
- Case studies use `wrapper.tsx` for work section
- Images are automatically imported and optimized
- MDX supports custom components via `MDXComponents.tsx`

## Navigation Structure

Main navigation sections:
- `/work` - Case studies portfolio
- `/about` - Company information
- `/process` - Development process
- `/blog` - Technical blog posts
- `/contact` - Contact form/information
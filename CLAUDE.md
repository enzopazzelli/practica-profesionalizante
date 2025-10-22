# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application documenting a professional practice (Práctica Profesionalizante) for ITSE, focused on the Subsecretaría de Promoción Humana y Relaciones Institucionales con la Comunidad in Santiago del Estero, Argentina. The project presents an interactive documentation platform analyzing social development programs, particularly housing initiatives and community development.

## Key Commands

### Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Technology Stack

- **Framework:** Next.js 15.5.6 with App Router
- **React:** 19.1.0 (React Server Components enabled)
- **Styling:** Tailwind CSS 4 with custom color system
- **UI Components:** lucide-react for icons, recharts for data visualization
- **Utilities:** class-variance-authority, clsx, tailwind-merge for className management

## Architecture

### App Structure

This project uses Next.js App Router with a page-based routing structure. Each major section has its own route:

- `/` - Home page with Timeline component
- `/santiago` - Information about Santiago del Estero
- `/organizacion` - Organization details
- `/entrevistas` - Interview documentation
- `/problematica` - Problem statement
- `/analisis` - Data analysis with charts (uses "use client" for Recharts)
- `/conclusiones` - Conclusions

### Component Organization

- `src/components/` - Shared components (Navbar, Footer, Timeline, Card)
- `src/lib/utils.js` - Utility functions, primarily the `cn()` helper for merging Tailwind classes
- `src/app/` - App Router pages and layouts

### Color System

The project uses a dual color system:

1. **Brand colors** (Santiago del Estero provincial colors):
   - `red-main`: #c32026
   - `blue-main`: #0093d3
   - `yellow-accent`: #fdb813
   - `black-main`: #000000
   - `white-main`: #FFFFFF

2. **Semantic color scales** using CSS custom properties:
   - `primary` (50-900 scale)
   - `secondary` (50-900 scale)
   - `accent` (50-900 scale)
   - `neutral` (50-900 scale)

These are defined in `src/app/globals.css` and mapped in `tailwind.config.js`.

## Important Context

### Domain Knowledge

The application documents a social housing program that:
- Originated to combat Chagas disease through improved housing
- Provides dignified housing and eliminates precarious structures
- Works with municipalities and NGOs to execute projects
- Uses geographic coordinates for precise tracking
- Classifies housing types (1A standard, 2A precarious, derrumbe, etc.)

### Data Systems Mentioned

- **GEDO**: Official electronic system (non-editable once entered)
- **VISOC**: Local operational database (editable)
- Manual data entry processes that the organization wants to automate

## Development Notes

### When Working with Pages

- Most pages are Server Components by default
- Pages requiring client-side interactivity (like charts) need `"use client"` directive
- All pages include `<Navbar />` and `<Footer />` wrapper components
- Font is Inter, loaded via next/font/google in layout.js

### When Working with Styling

- Use the `cn()` utility from `src/lib/utils.js` for conditional classes
- Prefer brand colors (`red-main`, `blue-main`, `yellow-accent`) for thematic consistency
- Use `neutral` scale for backgrounds and text
- Images are stored in `public/` directory (logo.png, hero.jpg, sde.png, etc.)

### shadcn/ui Configuration

The project has `components.json` configured for shadcn/ui components with:
- New York style
- JavaScript (not TypeScript)
- React Server Components enabled
- Path aliases: @/components, @/lib, @/ui

If adding shadcn/ui components, they should be JavaScript files in the New York style.

### Documentation Files

The repository includes markdown documentation files that provide context:
- `entrevista.md` - Raw interview transcript
- `resumen-entrevista.md` - Interview summary
- `resumen_de_cambios.md` - Change log (if present)
- `documentación/` - Additional documentation folder

These files provide domain context but are not rendered in the application.

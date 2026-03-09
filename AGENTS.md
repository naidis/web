# Naidis Web — Agent Rules

## CRITICAL — Branding

- **Catchphrase / Tagline**: "Ultimate Plugin for Obsidian"
- **NEVER use "Raycast for Obsidian"** or any Raycast reference. Zero exceptions.
- **Domain**: `naidis.dev` (NOT `naidis.app`). All URLs, meta tags, emails must use `naidis.dev`.
- ALL text MUST use "Ultimate Plugin for Obsidian".

## Tech Stack

- Next.js 16 + Tailwind CSS v4 (no tailwind.config.js; `@theme inline` in globals.css)
- Static export: `output: 'export'` in next.config.ts
- Fumadocs for docs
- `images.unoptimized: true` — use `<img>` not `next/image`
- Build: `bun run build`

## Logo

- Logomark: `public/logo.svg` (violet gradient diamond, transparent bg)
- App icon: `public/icons/icon.svg` (gradient bg + white diamond)
- Use `<img src="/logo.svg">` in components, NOT unicode `◆`

## Tailwind v4

- DO NOT use `@theme inline` for utility classes — it only defines CSS custom properties
- Use `@utility` directive for custom utilities (e.g. fluid typography)

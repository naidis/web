# Naidis Web

Official website and documentation site for Naidis.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Documentation**: Fumadocs
- **Package Manager**: Bun

## Getting Started

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Build for production
bun run build

# Run linting
bun run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
web/
├── content/
│   └── docs/           # MDX documentation files
│       ├── index.mdx
│       ├── prd.mdx
│       └── design-system.mdx
├── src/
│   ├── app/
│   │   ├── page.tsx           # Landing page
│   │   ├── layout.tsx         # Root layout
│   │   └── docs/              # Docs pages
│   └── lib/
│       └── source.ts          # Fumadocs source config
├── source.config.ts           # Fumadocs MDX config
└── next.config.ts             # Next.js config
```

## Documentation

Documentation is written in MDX and located in `content/docs/`. The docs site uses [Fumadocs](https://fumadocs.vercel.app/) for rendering.

To add new documentation:

1. Create a new `.mdx` file in `content/docs/`
2. Add frontmatter with `title` and `description`
3. Update `content/docs/meta.json` to add the page to navigation

## License

This project is part of the Naidis ecosystem.

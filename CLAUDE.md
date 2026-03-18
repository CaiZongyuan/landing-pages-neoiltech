## Build & Development Commands

```bash
bun install                    # Install dependencies
bun --bun run dev              # Start dev server on port 3000
bun --bun run build            # Production build
bun --bun run test             # Run tests with Vitest
bun --bun run lint             # Run ESLint
bun --bun run format           # Check formatting with Prettier
bun --bun run check            # Format and fix lint issues
bun run deploy                 # Build and deploy to Cloudflare
```

## Architecture

**Stack**: TanStack Start (SSR React framework) with file-based routing, deployed to Cloudflare Workers.

**Key Technologies**:
- React 19 with React Compiler (babel-plugin-react-compiler)
- TanStack Router with file-based routing in `src/routes/`
- Tailwind CSS 4 with `@tailwindcss/vite` plugin
- Shadcn UI (new-york style) - add components via `pnpm dlx shadcn@latest add <component>`
- Paraglide JS for i18n with URL-based locale detection

**Path Aliases**: `#/*` and `@/*` both resolve to `./src/*`

## Routing

File-based routing via TanStack Router. Routes are defined in `src/routes/`:
- `__root.tsx` - Root layout with shellComponent wrapping all pages
- `index.tsx` - Home page (`/`)
- Route files auto-generate `routeTree.gen.ts` on build/dev

Use `Link` from `@tanstack/react-router` for client-side navigation.

## Internationalization (i18n)

Paraglide JS with URL-based locale strategy:
- Base locale: `en`, additional: `de`
- Messages stored in `messages/{locale}.json`
- Paraglide outputs generated to `src/paraglide/` on dev/build
- Access locale via `getLocale()` from `#/paraglide/runtime`
- Use `m` function from `#/paraglide/messages` for translated strings

## Styling

- Tailwind CSS 4 with CSS variables for theming
- Theme toggle supports `light`, `dark`, and `auto` modes
- Theme initialization script in `__root.tsx` prevents flash
- Global styles in `src/styles.css`
- CSS variables use `--` prefix (e.g., `--header-bg`, `--sea-ink`)

## Deployment

Cloudflare Workers via Wrangler. Configuration in `wrangler.jsonc`. The deploy script builds and deploys in one command.

## Component Structure

- `src/components/` - Shared components (Header, Footer, ThemeToggle, LocaleSwitcher)
- `src/components/ui/` - Shadcn UI components
- `src/lib/utils.ts` - `cn()` utility for class merging with clsx + tailwind-merge

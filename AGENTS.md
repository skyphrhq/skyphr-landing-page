Before doing ANY task in this project, read PROJECT_CONVENTIONS.md and follow it strictly. If a change requires breaking a convention, ask first. If you add a new convention (new color variable, new folder), update PROJECT_CONVENTIONS.md in the same change.

# Agent instructions (Cursor, Codex, Copilot, Claude, etc.)

This repo is the Skyphr marketing site: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, GSAP, pnpm.

[PROJECT_CONVENTIONS.md](PROJECT_CONVENTIONS.md) is the single source of truth for folder placement, design tokens, naming, component templates and known inconsistencies. [CLAUDE.md](CLAUDE.md) has a one-screen summary of the most critical rules.

Short version:
- Colors only from `:root` in `app/styles/globals.css`, written as `text-(--text-main-color)` / `bg-(--cta-button-background)`. No hex, no `text-gray-*`, no undeclared variables.
- Pages in `app/(page)/`, sections in `app/screens/`, cards/pieces in `app/components/` (one component per file), copy in `app/content/pageContent/`, interfaces in `app/utils/interface/`, images as `.webp` in `app/assets/webp/`.
- camelCase files, PascalCase components, `<Name>Interface` props, `function Name(...)` + `export default Name;`, `@/app/...` imports, `twMerge` for classes.
- Don't refactor or rename existing files unless asked.

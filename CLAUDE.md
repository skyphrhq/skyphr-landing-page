Before doing ANY task in this project, read PROJECT_CONVENTIONS.md and follow it strictly. If a change requires breaking a convention, ask first. If you add a new convention (new color variable, new folder), update PROJECT_CONVENTIONS.md in the same change.

# Skyphr Landing Page

Before adding or editing any page copy/data in `app/content/`, read [PAGE_CONTENT_RULES.md](PAGE_CONTENT_RULES.md) and follow it strictly: change values only, never the structure, and split titles exactly like the current file.

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + GSAP. Package manager: pnpm. Full rules: [PROJECT_CONVENTIONS.md](PROJECT_CONVENTIONS.md).

## Critical rules (summary)

**Colors**
- Only use the `:root` tokens in `app/styles/globals.css`, via Tailwind v4 shorthand: `text-(--text-main-color)`, `text-(--text-secondary-color)`, `bg-(--root-white-color)`, `bg-(--cta-button-background)` (brand blue `#3846da`), `border-(--border-color)`, `bg-(--about-us-card-bg)`, `--skyai-*` for the SkyAI page.
- Never hardcode hex/rgb (`bg-[#5b45f4]`) or Tailwind palette colors (`text-gray-800`, `bg-white`) in components/screens. Never use a variable that isn't declared in `:root` (`--primary-color`, `--brand-color`, `--muted-color`, `--text-black-color` do NOT exist).
- New color → add to `:root` + the token table in PROJECT_CONVENTIONS.md.

**Where things go**
- Pages: `app/(page)/<kebab-route>/page.tsx` (thin: data + sections + metadata + JSON-LD).
- Sections: `app/screens/` (shared ones in `app/screens/common/`).
- Cards/small pieces: `app/components/` (generic primitives in `app/components/common/`). Every sub-component gets its own file.
- Copy/data: `app/content/pageContent/pageData/<name>.data.ts` (`<NAME>_PAGE_DATA`). Markdown mirror in `app/content/markdown/`.
- Interfaces: `app/utils/interface/` (`common.interface.ts` for components, `section.interface.ts` for sections, `page.interface.ts` / `data.interface.ts` for data shapes).
- Images: `.webp` in `app/assets/webp/` (subfolder per page), imported and rendered with `next/image`. OG images: `public/og-image/<route>.png`.

**Naming & code style**
- camelCase file names (`skyAiLensCard.tsx`), PascalCase components (`SkyAiLensCard`), props interface `<Name>Interface`.
- `function Name({ data, className }: NameInterface) { ... }` then `export default Name;` at the bottom.
- `@/app/...` imports only; sorted by path. `twMerge` for class merging. Sections take `classNames`, components take `className`.
- Reuse `COMMON_SECTION_PADDING`, `COMMON_BORDER_RADIUS`, `CTAButton`/`GET_BUTTON_STYLE`, `.skyphr-container`, `COMMON_SCROLL_TRIGGER_ANIMATION`; import GSAP from `@/app/lib/gsap`.
- Commits: conventional commits, lower-case, header ≤ 72 chars (commitlint via Husky).

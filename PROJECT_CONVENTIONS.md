# Skyphr Landing Page: Project Conventions

This file is the single source of truth for how code is written in this repo. Everything here is taken from the code as it is today (audited 27 Sep 2026). Where the code is inconsistent, the rule below is the **dominant** pattern, and section 9 lists the exceptions.

> **Content work** (copy, titles, FAQs, metadata in `app/content/`) follows [PAGE_CONTENT_RULES.md](PAGE_CONTENT_RULES.md). Read it before every content change.

> If a change needs to break a convention, ask first. If you add a convention (a new color variable, a new folder, a new file type), update this file in the same change.

---

## 1. Project Overview

Marketing site for **Skyphr** (AI, SaaS and custom software studio) at https://skyphr.com, including the SkyAI sub-brand page (`/sky-ai`).

| Area | What the project uses |
|---|---|
| Framework | Next.js **16.2.2**, App Router, React **19.2.4** |
| Language | TypeScript (`strict: true`) in `.ts` / `.tsx` only |
| Styling | **Tailwind CSS v4** (via `@tailwindcss/postcss`, no `tailwind.config`) + a single global stylesheet with `:root` CSS variables |
| Class merging | `tailwind-merge` (`twMerge`) |
| Animation | GSAP 3 + `@gsap/react` (`useGSAP`), ScrollTrigger / ScrollToPlugin registered in `app/lib/gsap.ts` |
| Smooth scroll | `lenis` (`app/components/smoothScrollProvider.tsx`) |
| Slider | `keen-slider` |
| Icons | `react-icons` (`fa`, `fa6`, `hi2`, `lu`, `pi`, `si`, ...) |
| Forms | `cleave.js` for phone formatting, Cloudflare Turnstile, IPInfo Lite (see `app/components/commonContatcUsForm.tsx`) |
| Package manager | **pnpm** (`pnpm-lock.yaml`) |
| Lint | ESLint 9 flat config: `eslint-config-next` core-web-vitals + typescript (`eslint.config.mjs`) |
| Formatter | No Prettier config in the repo. Match existing formatting: double quotes, semicolons, trailing commas, 2-space indent, long lines (~120 chars) |
| Commits | Husky `commit-msg` hook runs commitlint (`commitlint.config.cjs`): conventional commits, lower-case type/scope, header ≤ 72 chars, no trailing period. Allowed types: `build chore ci docs feat feature fix perf refactor revert style test` |
| Content | Hardcoded TypeScript data objects in `app/content/pageContent/` (no API; blog blocks are edited through the local blog CMS, see "Blog CMS" below) + Markdown mirrors of pages in `app/content/markdown/` for AI agents |

Scripts: `pnpm dev` (site on **http://localhost:3000** + blog CMS on **http://localhost:5175**), `pnpm dev:site` (site only), `pnpm dev:cms` (CMS only), `pnpm build`, `pnpm start`, `pnpm lint`.

### Blog CMS
- `pnpm dev` runs `blog-cms/dev.mjs`, which starts both servers and stops both when either exits (Ctrl+C included).
- `blog-cms/` holds the prebuilt blog CMS (`index.html` + `assets/`), its API (`services/`, a Vite plugin) and `server.mjs`, which serves the UI and runs the plugin's `/api/*` handler (port 5175, override with `CMS_PORT`). The CMS code itself is maintained in its own repo; only `server.mjs`, `dev.mjs` and `package.json` (`"type": "module"`) are ours. It is **local-only**: excluded from `tsconfig.json`, ESLint, Next output tracing (`outputFileTracingExcludes` in `next.config.ts`) and the Vercel upload (`.vercelignore`). Never import from `blog-cms/` in `app/`.
- The CMS API needs the devDependencies `vite`, `formidable`, `sharp` and `chokidar`. If it fails with "Cannot find native binding" (rolldown), run `pnpm install --force`.
- `skyphr-cms-config/blog.config.json` registers blog blocks. The CMS aliases `@` to `baseEntryPoint`, so it must be `.` (the repo root, same as `tsconfig` `@/*`) for the blocks' `@/app/...` imports to resolve; section `module` paths are therefore `./app/components/blog/<block>`. Saved posts are JSON in `data/blogs/<slug>.json`; uploaded images go to `public/blog/images/` (`hero/` for Blog Hero; the `assets` key is the lower-cased section name) so they're servable by URL. The saved image `url` is a file path (`./public/blog/images/...`): strip `./public` to get the site URL.
- CMS field types (`STRING`, `TEXTAREA`, `RICH_TEXT`, `NUMBER`, `BOOLEAN`, `IMAGE`, `ARRAY`) and `CMSImageData` (the saved IMAGE value: `url`, `alt?`, `width`, `height`) live in `types/type.ts`.

---

## 2. Folder Structure

```
LandingPage/
├── app/
│   ├── layout.tsx              # Root layout: fonts, GTM, JSON-LD, NavBar, Footer, providers
│   ├── not-found.tsx           # 404 page
│   ├── sitemap.ts              # Built from NAVBAR_LINKS_DATA + EXTRA_PAGE_LINKS_DATA + blog posts
│   ├── favicon.ico
│   ├── (page)/                 # Route group: every public page lives here
│   │   ├── page.tsx            # Home "/"
│   │   ├── about-us/page.tsx
│   │   ├── blog/page.tsx  +  blog/[slug]/page.tsx   # listing + one post
│   │   ├── contact/page.tsx
│   │   ├── hire/page.tsx  +  hire/[slug]/page.tsx
│   │   ├── services/page.tsx  +  services/[slug]/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── sitemap/page.tsx
│   │   └── sky-ai/page.tsx
│   ├── agent/[[...slug]]/route.ts  # Serves app/content/markdown/*.md as text/markdown
│   ├── screens/                # Page SECTIONS (full-width blocks composed by pages)
│   │   ├── common/             # Sections reused on 2+ pages (FAQ, footer, contact, process...)
│   │   ├── blogs/              # Blog article screen
│   │   └── *.tsx               # Page-specific sections (heroSectionEle, skyAiHeroSection...)
│   ├── components/             # Smaller building blocks: cards, pills, modals, providers
│   │   ├── common/             # Generic UI primitives (button, ctaButton, inputField, commonSectionHeader...)
│   │   ├── navbar/             # navBar, skyAiNavPill, dropdowns: navMegaPanel (grouped links: category tabs + pane on desktop, stacked on mobile) / navCompactPanel (flat list), picked from the data
│   │   ├── blog/               # CMS-style blog blocks (UIComponent + Schema pattern)
│   │   └── *.tsx               # Cards/pieces (testimonialCard, skyAiLensCard...)
│   ├── content/
│   │   ├── pageContent/        # All copy/data as typed TS objects
│   │   │   ├── *.data.tsx      # Shared data (faq, navbar, testimonial, common...)
│   │   │   └── pageData/       # One data file per page (+ hire/, service/, blog/ for slug pages)
│   │   └── markdown/           # Markdown version of each page (for /agent route + llms)
│   ├── assets/                 # Images imported into code (bundled by next/image)
│   │   ├── logo/               # Skyphr logos (.webp)
│   │   ├── svg/                # SVG icons (quote.svg)
│   │   └── webp/               # Photos/illustrations; subfolders per page (sky-ai/) or density (4x/)
│   ├── lib/gsap.ts             # GSAP + plugin registration. Always import gsap from here
│   ├── styles/
│   │   ├── globals.css         # Tailwind import, @theme breakpoints, :root tokens, navbar CSS
│   │   ├── animation.css       # Keyframes + animation helper classes
│   │   └── skyVoice.css        # /ai-voice-agent visuals: hero + shared shells (`.skyai-voice-panel`, `-card`, `-raised`, `-bubble-sky`), call flow (`.skyai-voice-flow-*`), who it's for (`.skyai-voice-who-*`), after the call integrations (`.skyai-voice-integration-card`)
│   └── utils/
│       ├── constants/          # *.constant(s).ts — shared class strings, animation presets, config
│       ├── helpers/helper.ts   # Pure helper functions
│       ├── interface/          # All TS interfaces/types (4 files, see below)
│       └── seo/                # metadata.ts (Next Metadata builders), schema.ts (JSON-LD builders)
├── types/type.ts               # SectionSchema + CMSImageData types for blog blocks
├── blog-cms/                   # Prebuilt local blog CMS + server.mjs (port 5175). Never deployed
├── skyphr-cms-config/          # blog.config.json: blog block registry for the CMS
├── public/                     # Static files served by URL
│   ├── favicon/  og-image/  .well-known/  skills/
│   ├── robots.txt  llms.txt  site.webmanifest  auth.md
└── next.config.ts              # Redirects + headers for /.well-known files
```

### Where does X go?

| I'm adding... | Put it in | Example |
|---|---|---|
| A new page / route | `app/(page)/<kebab-route>/page.tsx` | `app/(page)/sky-ai/page.tsx` |
| A slug page family | `app/(page)/<route>/[slug]/page.tsx` + data map in `pageData/<route>/index.ts` | `services/[slug]` + `pageData/service/index.ts` |
| A full-width section used on one page | `app/screens/<camelName>Section.tsx` | `app/screens/skyAiHeroSection.tsx` |
| A section used on 2+ pages | `app/screens/common/` | `app/screens/common/frequentlyAskedQuestions.tsx` |
| A card, pill, badge, modal, small piece | `app/components/<camelName>.tsx` (its **own file**, never inline in the section) | `app/components/skyAiChallengeCard.tsx` |
| A centered section heading (title rows + subline) | reuse `CommonSectionHeader`; pass `isSingleHeading` when the title has several lines so they stay one `<h2>` | `skyVoiceTrustSection.tsx` |
| A generic reusable UI primitive | `app/components/common/` | `app/components/common/ctaButton.tsx` |
| Page copy / data | `app/content/pageContent/pageData/<camelName>.data.ts` | `skyAi.data.ts` |
| Data shared across pages | `app/content/pageContent/<name>.data.tsx` | `faq.data.tsx` |
| Markdown mirror of a page | `app/content/markdown/<route>.md` | `markdown/services/ui-ux-design.md` |
| Props interface for a component | `app/utils/interface/common.interface.ts` | `SkyAiLensCardInterface` |
| Props interface for a section | `app/utils/interface/section.interface.ts` | `SkyAiChallengesSectionInterface` |
| Data shape for page content | `page.interface.ts` (shared page blocks) or `data.interface.ts` (navbar, hire, SkyAI) | `CommonPageDataInterface`, `SkyAiPageDataInterface` |
| Shared Tailwind class string / animation preset | `app/utils/constants/common.constant.ts` / `animation.constant.ts` | `COMMON_SECTION_PADDING` |
| Helper function | `app/utils/helpers/helper.ts` | `NormalizePath` |
| SEO metadata / JSON-LD | `app/utils/seo/metadata.ts` / `schema.ts` | `normalizePageMetadata`, `generateFaqSchema` |
| Color / design token | `:root` in `app/styles/globals.css` | `--skyai-lavender-bg` |
| Keyframes / animation classes | `app/styles/animation.css` | `skyai-sparkle-spin` |
| Page-specific complex CSS (too big for utilities) | its own file in `app/styles/`, `@import`ed from `globals.css`, classes prefixed | `app/styles/skyVoice.css` (`.skyai-voice-*`) |
| HTML from a CMS `RICH_TEXT` field | render it in an element with `.skyphr-blog-rich-text` (`app/styles/blogRichText.css`), which restores spacing/lists/headings that Tailwind's preflight removes | `blog/textSection.tsx` |
| 3D scene (Spline `.splinecode`) | `public/spline/<kebab-name>.splinecode`, URL in a `common.constant.ts` constant | `SKY_VOICE_ORB_SCENE_URL` → `/spline/sky-voice-orb.splinecode` |
| Indexable page that isn't in the header nav | `EXTRA_PAGE_LINKS_DATA` in `navbar.data.tsx` (feeds `app/sitemap.ts`, the `/sitemap` page and the footer "Company" column) | `/sky-ai` |
| Dropdown link description / mega panel promo card | `description` / `featured` on the item in `navbar.data.tsx` (`NavFeaturedCard`); external `href`s are skipped by `app/sitemap.ts` | `our-products`, `hire.featured` |
| Image used in a component | `app/assets/webp/` (subfolder per page if > 2 images) | `app/assets/webp/sky-ai/` |
| OG image | `public/og-image/<route-slug>.png` | `public/og-image/hire-nextjs-developers.png` |
| Env variable | `.env` (git-ignored) + document it in `.env.example`; must be `NEXT_PUBLIC_*` if used client-side | `NEXT_PUBLIC_BASE_URL` |

There is **no** `hooks/`, `services/` or `api/` folder. No custom hooks exist today; API calls (`fetch`) live inside the component that uses them (`commonContatcUsForm.tsx`, `webMcpProvider.tsx`). If you need a reusable hook or service, ask first and add the folder here.

---

## 3. Styling & Design Tokens

### 3.1 Where styles live

- `app/styles/globals.css` is imported once in `app/layout.tsx`. It does `@import "tailwindcss"` and `@import "./animation.css"`, declares `@theme` breakpoints, declares all `:root` tokens, and holds the navbar / SkyAI-pill CSS that is too complex for utilities.
- Everything else is **Tailwind utility classes inline in JSX**. There are no CSS Modules, no SCSS, no styled-components.
- There is **no dark mode** (no `dark:` variants, no `prefers-color-scheme`). Dark sections (footer, `CTA_SECONDARY` with `theme="DARK"`) are just explicit dark backgrounds.

### 3.2 Color tokens (`:root` in `app/styles/globals.css`)

| Variable | Value | Usage (uses in TSX) |
|---|---|---|
| `--text-main-color` | `#0f0f0f` | Primary text, headings (≈100) |
| `--text-secondary-color` | `#5f5f5f` | Body / secondary text, dividers (≈60) |
| `--text-white-color` | `#f2f2f2` | Off-white text on dark or brand backgrounds (≈15) |
| `--root-white-color` | `#ffffff` | White backgrounds, white text (≈80) |
| `--root-black-color` | `#000000` | Black backgrounds, black text, black rings on secondary CTA (≈45) |
| `--cta-button-background` | `#3846da` | **Brand primary blue**: CTA backgrounds, brand text highlights, focus outlines (≈55) |
| `--bg-blue-shade` | `#6974e2` | Lighter brand blue: gradients, hero glow, accent text |
| `--active-link-bg` | `#3846da` | Active nav dropdown item background (same value as CTA) |
| `--active-hover-link-bg` | `#e3e3e3` | Grey pill on top-level nav hover/active |
| `--border-color` | `#dddddd` | Default borders (≈40) |
| `--about-us-card-bg` | `#f5f5f5` | Light grey card/surface background (≈15) |
| `--placeholder-color` | `#9ca3af` | Input placeholders |
| `--footer-links-color` | `#707070` | Footer link text |
| `--skyai-lavender-bg` | `#f6f7fe` | SkyAI page section/surface background |
| `--skyai-lavender-soft` | `#eef0fd` | SkyAI soft chips, pill gradient |
| `--skyai-lavender-border` | `#e5e8fb` | SkyAI borders, pill gradient |
| `--skyai-night-start` | `#15143a` | SkyAI dark gradient start |
| `--skyai-night-end` | `#3a3f9c` | SkyAI dark gradient end |
| `--skyai-periwinkle-light` | `#c9ccff` | SkyAI light accent border/text on dark |
| `--skyai-navy` | `#1a1e63` | Sky voice agent: deep navy (headline gradient start, Sky avatar, shadows) |
| `--skyai-voice-muted` | `#5e6178` | Sky voice agent: secondary text (bluish grey) |
| `--skyai-voice-body` | `#2a2c3f` | Sky voice agent: transcript body text |
| `--skyai-voice-subtle` | `#8c8fa6` | Sky voice agent: timestamps, caller waveform, footnote |
| `--skyai-voice-idle` | `#c4c6d6` | Sky voice agent: idle status/transcript dots |
| `--skyai-voice-indigo` | `#5560f0` | Sky voice agent: glow behind the orb |
| `--skyai-voice-periwinkle` | `#7f89ff` | Sky voice agent: headline gradient end, Sky avatar highlight |
| `--skyai-voice-haze` | `#b9beff` | Sky voice agent: background glow, orb placeholder highlight |
| `--skyai-voice-lilac` | `#e3d9ff` | Sky voice agent: corner glow, placeholder rim |
| `--skyai-voice-bg-mid` / `--skyai-voice-bg-end` | `#f7f6ff` / `#efeeff` | Sky voice agent: hero background gradient |
| `--skyai-voice-avatar-grey` | `#e7e8f3` | Sky voice agent: caller avatar gradient |
| `--skyai-voice-green` / `-green-bright` / `-green-light` | `#16a34a` / `#22c55e` / `#4ade80` | Sky voice agent: live dot, start-call button, booked icon |
| `--skyai-voice-red` / `-red-light` | `#ef4444` / `#f87171` | Sky voice agent: end-call button, "who it's for" important note |
| `--skyai-voice-success-bg` / `-bg-end` / `-border` / `-text` | `#f0fbf4` / `#e6f7ec` / `#cbebd6` / `#3f5b48` | Sky voice agent: "Consultation booked" card |
| `--skyai-voice-orb-cyan` / `-orb-magenta` / `-orb-orange` | `#22b8f0` / `#e0409a` / `#f5692a` | Sky voice agent: orb loading placeholder (matches the Spline scene) |

Naming rule for new tokens: kebab-case, **role-based** (`--text-*-color`, `--*-bg`, `--*-border`), and prefix page-specific tokens with the page/brand (`--skyai-*`).

### 3.3 Other tokens

| Kind | Where | Values |
|---|---|---|
| Breakpoints | `@theme` in `globals.css` + Tailwind defaults | `xs` = 491px (custom), `sm` 640, `md` 768, `xmd` = 991px (custom), `lg` 1024, `xl` 1280, `2xl` 1536. Raw CSS uses `max-width: 991px` / `1199px` / `min-width: 1200px` |
| Fonts | CSS vars set by `next/font` in `layout.tsx` | `--font-instrument-sans`, `--font-inter`, `--font-playfair-display` |
| Container | `.skyphr-container` in `globals.css` | 100% width, 16px side padding below 1200px, `min(100% - 150px, 1540px)` from 1200px |
| Section padding | `COMMON_SECTION_PADDING` in `common.constant.ts` | `"py-15! md:py-20! xl:py-37.5!"` |
| Card radius | `COMMON_BORDER_RADIUS` in `common.constant.ts` | `"rounded-lg md:rounded-xl lg:rounded-2xl"` |
| Buttons | `GET_BUTTON_STYLE(btnStyle, theme)` in `common.constant.ts`, used by `CTAButton` | `CTA_PRIMARY`, `CTA_SECONDARY` × `LIGHT` / `DARK` |
| SkyAI card base | `SKYAI_SERVICE_CARD_BASE` in `common.constant.ts` | Shared class string for SkyAI service cards |
| Scroll reveal | `COMMON_SCROLL_TRIGGER_ANIMATION` / `COMMON_REVEL_ANIMATION` in `animation.constant.ts` | y 50 → 0, blur 10px → 0, 1s `power3.out`, stagger 0.1 |
| Above-the-fold hero reveal | `HERO_REVEAL_ANIMATION` in `animation.constant.ts` + start-state classes `.skyphr-hero-rise` / `.skyphr-hero-fade` in `app/styles/animation.css` | GSAP `to()` only (no `from`/`fromTo`, so there's no flash on hydration), opacity + y only, no blur. The LCP element (the hero `<h1>` rows) gets `.skyphr-hero-rise`, which never hides it; everything else gets `.skyphr-hero-fade` |
| Spacing / shadow / radius / transition vars | none | There are **no** spacing, shadow, radius or transition CSS variables. Use Tailwind's scale; transitions are `duration-200` / `duration-300` in utilities and `0.2s ease` in CSS |

### 3.4 How to consume tokens

Use the **Tailwind v4 CSS-variable shorthand** `utility-(--token)`. This is used ~500 times; `var()` in TSX is used only ~5 times.

```tsx
<p className="text-(--text-secondary-color)">...</p>
<div className="bg-(--about-us-card-bg) border border-(--border-color)">...</div>
<span className="bg-(--primary-color)/10" />   // opacity modifier works too (but see 9: --primary-color is undefined)
<div className="bg-linear-to-br from-(--skyai-night-start) to-(--skyai-night-end)" />
```

- In `globals.css`, use `var(--token)`.
- Inside `style={{}}` / SVG attributes, use `"var(--token)"` (e.g. `stroke="var(--cta-button-background)"`).
- Do **not** write `text-[var(--x)]` (old v3 form) or `bg-[#hex]`.
- Fonts: use the global classes `font-instrument-sans` (default UI/headings, ~145 uses), `font-inter` (small labels/meta, ~47), `font-playfair-display` (italic serif accents, ~23). They're defined in `globals.css`, not as Tailwind theme fonts.
- Gradients: use Tailwind v4 `bg-linear-to-*` (6 uses), not v3 `bg-gradient-to-*` (2 uses).
- Merge classes with `twMerge(...)`, never string concatenation, when a component accepts `className` / `classNames`.
- Important modifier is the v4 **suffix** form: `py-0!`, `px-0!` (used to override section padding from the page).

### 3.5 Responsive

Mobile-first Tailwind prefixes. Frequency: `md:` 320, `lg:` 169, `xl:` 128, `sm:` 72, `xs:` 15, `2xl:` 13, `xmd:` 2. The mobile navbar switches at **991px** (`globals.css`). Wrap content in `.skyphr-container` for horizontal gutters.

### 3.6 Hardcoded colors that bypass tokens (do not copy these)

| File | What |
|---|---|
| `app/components/blog/quoteBlock.tsx`, `blogHero.tsx`, `authorCard.tsx`, `featuredVisual.tsx` | `#5b45f4`, `#edeaff`, `#4f3ff0`, `bg-white`, `rgba(...)` shadow |
| `app/components/processStepCard.tsx` | `bg-[#8b95f6]` (x2) |
| `app/components/navbar/skyAiNavPill.tsx` | SVG `stopColor="#3846da"` / `"#6974e2"` (= CTA / blue-shade tokens) |
| `app/components/heroBgAbstract.tsx` | `#6974e2`, `rgba(105,116,226,…)` (= `--bg-blue-shade`) |
| `app/screens/contactUsSection.tsx` | `from-[#3846da] via-[#4f5de8] to-[#6d7bfa]` (+ v3 `bg-gradient-to-br`) |
| `app/screens/skyAiHeroSection.tsx` | `from-[#9aa1f5] … to-[#6d3fe0]`, rgba glows |
| `app/screens/common/ourServiceSection.tsx` | `to-[#a7a7a7]` |
| `app/screens/common/ourApproachSec.tsx` | conic gradient `#d8b4fe,#fef08a,#fbcfe8,#c4b5fd`, `bg-white`, rgba shadows |
| `app/screens/common/footerScreen.tsx` | `text-neutral-300/500`, `border-white/20`, `bg-white/5` |
| `app/components/common/inputField.tsx`, `commonContatcUsForm.tsx` | `text-gray-*`, `border-gray-*`, `text-red-500` |
| `app/content/pageContent/service-steps.data.tsx` | ~96 Tailwind palette classes (`bg-purple-50`, `text-indigo-800`, …) |
| `app/content/pageContent/our-values.data.tsx` | 64 hex/rgba values (per-card colors) |
| `app/content/pageContent/common.data.tsx` | Card gradients `#0f0c29…`, `baseColor`/`darkColor` hex pairs |
| `app/content/pageContent/pageData/skyAi.data.ts` | `from-[#B8A7FF] via-[#8B7CFF] to-[#6D8BFF]` |
| `app/components/skyAiLensCard.tsx` | `bg-red-500` / `bg-amber-500` severity dots |
| `app/styles/globals.css` | `rgba(56,70,218,…)` (= CTA blue), `#555a78`, `rgba(0,0,0,0.5)` overlay |
| `app/styles/animation.css` | `rgba(15,15,15,0.08)` shadow |

Per-item decorative colors stored in **data files** (card accent colors) are an accepted pattern; hex in **component/screen JSX** is not.

---

## 4. Assets & Images

| Type | Location | How it's referenced |
|---|---|---|
| Content images (photos, illustrations, mockups) | `app/assets/webp/` | `import X from "@/app/assets/webp/x.webp"` → `next/image` `src={X}` |
| Page-specific image sets | `app/assets/webp/<page>/` (e.g. `sky-ai/`) | same, file prefixed with page: `skyai-rising-ai-api-costs.webp` |
| High-res (hero) variants | `app/assets/webp/4x/<name>-4x.webp` | imported in `pageData/service/*.ts` |
| Logos | `app/assets/logo/skyphr-*.webp` | static import |
| SVG icons | `app/assets/svg/` | static import used as `next/image` `src` (`quote.svg`) |
| UI icons | `react-icons` | `import { HiSparkles } from "react-icons/hi2"`; in data files wrap with `createElement(Icon)` |
| Custom inline SVG icons | a component in `app/components/common/` | `sparkleIcon.tsx` |
| OG images | `public/og-image/<route-slug>.png` (1 per page) | string path in page data `metadata.openGraph.images` |
| Favicons, manifest | `public/favicon/`, `public/site.webmanifest` | string paths in `app/layout.tsx` |
| Agent/SEO files | `public/.well-known/`, `public/llms.txt`, `public/robots.txt` | served statically; headers set in `next.config.ts` |

Rules:
- **Format:** `.webp` for all raster images in `app/assets` (the only exception is `Frame 73.png`, see 9). `.png` only for OG images/favicons in `public/`.
- **File names:** kebab-case, descriptive, brand/page-prefixed where relevant: `skyphr-hero-background.webp`, `ai-development-automation.webp`, `skyai-messy-data-not-ready.webp`. No spaces, no `Frame 73`, no `dummy-*` in shipped UI.
- **Import names:** PascalCase describing the image: `import NotFoundImage from "@/app/assets/webp/skyphr-404.webp"`. (Service data files use SCREAMING_CASE `…_4X_IMG`; prefer PascalCase for new code.)
- **Timed / looping section animations** (e.g. the /ai-voice-agent call flow): one GSAP master timeline in the section drives every progress indicator (no CSS keyframes, no manual rAF loop, no React state per frame). Pause it with `timeline.pause()` / `resume()` from a ScrollTrigger, `visibilitychange` and hover/keyboard focus; use `gsap.matchMedia()` for reduced motion. See `skyVoiceCallFlowSection.tsx`.
- **3D / WebGL:** use Spline (`@splinetool/react-spline`, the client import, not `/next`, which can't load local files). Load it through `next/dynamic` with `ssr: false`, show a same-size skeleton while it loads (`skyVoiceOrbSkeleton.tsx`) and a static fallback without WebGL (`skyVoiceOrbPlaceholder.tsx`), fade the canvas edges with a radial `mask-image` so the scene's glow never shows as a square (`.skyai-voice-orb-scene`), and `stop()`/`play()` it from an IntersectionObserver + `visibilitychange` (see `skyVoiceOrb.tsx`). Scene files go in `public/spline/`, because Spline fetches them by URL.
- **Rendering:** always `next/image` (`Image`) with `alt` and `title`; pass `width`/`height` from data (`ImageOptionsInterface` in `page.interface.ts`: `imagePath`, `alt`, `width`, `height`, `loading`, `className`). Default `loading="lazy"`; hero images set it explicitly in data. No raw `<img>` tags exist.
- Images are referenced from **data files**, not hardcoded in the component.
- **Alt / title text:** describe what the image shows and match the page or card it sits on (never copy another page's alt). Purely decorative images (background textures) use `alt=""` + `aria-hidden="true"`. Blog CMS images (`listing.image`, hero `image`, `seo.*.image`) always get a filled `alt`.
- **OG / Twitter images:** OG PNGs are 1200×630. Page metadata goes through `createPageMetadata` / `normalizePageMetadata`, which emit each image via `createOgImage` (`url`, `width`, `height`, `alt` = page title, `type`). Never pass a bare URL string to `openGraph.images` outside those helpers.

---

## 5. Naming Conventions

| Thing | Convention | Real examples |
|---|---|---|
| Route folders | kebab-case | `about-us/`, `privacy-policy/`, `sky-ai/` |
| Route files | Next defaults | `page.tsx`, `route.ts`, `layout.tsx`, `not-found.tsx`, `sitemap.ts` |
| Component / screen **file** | **camelCase** `.tsx`, one component per file, no folder-per-component, no `index.tsx` | `skyAiLensCard.tsx`, `commonSectionHeader.tsx`, `ourValuesSection.tsx` |
| Section (screen) file suffix | `…Section.tsx` | `skyAiChallengesSection.tsx`, `whyChooseSection.tsx` |
| Card file suffix | `…Card.tsx` | `testimonialCard.tsx`, `skyAiServiceCtaCard.tsx` |
| Page-specific prefix | page/brand prefix on file + component | `skyAi*` for SkyAI (`skyAiHeroSection`, `skyAiStatusPill`); `common*` for shared (`commonSectionHeader`) |
| Component function | PascalCase, matches file name | `skyAiLensCard.tsx` → `SkyAiLensCard`; `ctaButton.tsx` → `CTAButton` |
| Page component function | PascalCase + `Page` (home is `Home`) | `SkyAiPage`, `ServicesPage` |
| Props interface | `<ComponentName>Interface` | `SkyAiLensCardInterface`, `SkyAiChallengesSectionInterface`, `CommonButtonInterface` |
| Data-shape interface | PascalCase noun, often no suffix | `HeroSection`, `SkyAiServiceCard`, `CTA`, `SkyAiPageDataInterface` |
| Main content prop | `data` (sometimes `card` for list items) | `<SkyAiHeroSection data={SKY_AI_PAGE_DATA.hero} />` |
| Class override prop | **sections:** `classNames?: string`; **components:** `className?: string` | `FrequentlyAskedQuestions classNames="py-0!"`, `CTAButton className="w-full"` |
| Enum-like string props | SCREAMING_SNAKE string unions | `btnStyle="CTA_PRIMARY"`, `theme="DARK"`, `ANIMATION_DIRECTION` = `"TOP_LEFT"…` |
| Page data file | `<camelCase>.data.ts` (use `.tsx` only if it contains JSX) | `skyAi.data.ts`, `aboutUs.data.ts`, `faq.data.tsx` |
| Slug data files | `pageData/<group>/<kebab-slug>.data.ts` + `index.ts` map | `pageData/hire/nextjs-developer.data.ts`, `pageData/hire/index.ts` |
| Page data export | `SCREAMING_SNAKE` + `_PAGE_DATA` | `SKY_AI_PAGE_DATA`, `HOME_PAGE_DATA`, `SERVICE_PAGE_DATA_BY_SLUG` |
| Shared data export | `SCREAMING_SNAKE` + `_DATA` | `FAQ_DATA`, `NAVBAR_LINKS_DATA` |
| Constants file | `<name>.constant.ts` | `common.constant.ts`, `animation.constant.ts` |
| Constants | `SCREAMING_SNAKE`, incl. class-string constants and factory functions | `COMMON_SECTION_PADDING`, `GET_BUTTON_STYLE`, `SITE_BASE_URL` |
| Interface files | `<scope>.interface.ts` | `common.interface.ts`, `section.interface.ts` |
| Helper functions | PascalCase arrow consts in `helper.ts` (dominant) | `CreateScrollTrigger`, `NormalizePath`, `IsNavItemActive` |
| SEO functions | camelCase `generate*` / `create*` | `generateFaqSchema`, `createPageMetadata`, `normalizePageMetadata` |
| Local variables / handlers | camelCase; refs end in `Ref`; handlers `handle*` | `containerRef`, `handleNavigate`, `titleAnimation` |
| Global CSS classes | kebab-case, prefixed `skyphr-` (site) or `skyai-` (SkyAI) | `.skyphr-container`, `.skyphr-nav-item`, `.skyai-nav-pill-inner` |
| CSS state classes | `is-*` | `.is-active`, `.is-open`, `.is-dropdown-suppressed` |
| GSAP hook classes | fixed names targeted by `gsap.utils.toArray` | `reveal-text-animation` (headings), `reveal-animation` (blocks), `card-text-reveal` (card text) |
| Section anchor ids | kebab-case from data (`data.id`) | `#ai-agents-automation` |
| Markdown files | kebab-case matching the route | `markdown/hire/hire-nextjs-developers.md` |
| OG images | kebab-case matching the route slug | `og-image/saas-development-services.png` |

---

## 6. Component Template

### 6.1 Card / small component (`app/components/<name>.tsx`)

Server component by default. Add `"use client"` only if it uses hooks, GSAP or browser APIs.

```tsx
// app/components/exampleCard.tsx
import CTAButton from "@/app/components/common/ctaButton";
import { COMMON_BORDER_RADIUS } from "@/app/utils/constants/common.constant";
import { ExampleCardInterface } from "@/app/utils/interface/common.interface";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

function ExampleCard({ data, className }: ExampleCardInterface) {
  return (
    <article
      className={twMerge(
        "h-full bg-(--about-us-card-bg) border border-(--border-color) p-5 sm:p-7",
        COMMON_BORDER_RADIUS,
        className,
      )}>
      <Image
        src={data.imageOptions.imagePath}
        alt={data.imageOptions.alt}
        title={data.imageOptions.alt}
        width={data.imageOptions.width}
        height={data.imageOptions.height}
        loading={data.imageOptions.loading || "lazy"}
        className="w-full h-auto object-cover"
      />
      <h3 className="font-instrument-sans text-2xl font-bold text-(--text-main-color) card-text-reveal">{data.title}</h3>
      <p className="font-instrument-sans text-base text-(--text-secondary-color) pt-3 card-text-reveal">
        {data.description}
      </p>
      <CTAButton btnStyle="CTA_SECONDARY" href={data.cta.href} className="w-full xs:w-fit">
        {data.cta.label}
      </CTAButton>
    </article>
  );
}

export default ExampleCard;
```

```ts
// app/utils/interface/common.interface.ts
export interface ExampleCardInterface {
  data: ExampleCard;      // data shape lives in data.interface.ts / page.interface.ts
  className?: string;
}
```

### 6.2 Section (`app/screens/<name>Section.tsx`)

```tsx
"use client";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import ExampleCard from "@/app/components/exampleCard";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { ExampleSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function ExampleSection({ data, classNames }: ExampleSectionInterface) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const titleElements = gsap.utils.toArray(".reveal-text-animation");
      const titleAnimation = COMMON_SCROLL_TRIGGER_ANIMATION({ trigger: containerRef.current, start: "top 70%" });
      gsap.fromTo(titleElements, titleAnimation.FROM, titleAnimation.TO);
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      id={data.id}
      className={twMerge("relative w-full h-auto bg-(--root-white-color)", COMMON_SECTION_PADDING, classNames)}>
      <div className="skyphr-container">
        <CommonSectionHeader header={data?.header} />
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {data.cards.map((card) => (
            <ExampleCard key={card.title} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExampleSection;
```

Structure rules that match the codebase:
- `"use client"` on line 1 when needed, then imports **sorted alphabetically by path** (`@/app/components…`, `@/app/lib…`, `@/app/utils…`, then packages like `@gsap/react`, `next/image`, `react`, `tailwind-merge`). This is the order in almost every file.
- `function Name(props) {}` declaration, then `export default Name;` at the **bottom** (≈70 files). Not arrow functions, not `export default function`.
- Destructure props in the signature; type them with an interface from `app/utils/interface/`.
- Hooks, then GSAP `useGSAP` with `{ scope: containerRef }`, then `return`.
- Brief comments explaining *why* a layout/animation choice was made are common and welcome.

### 6.3 Page (`app/(page)/<route>/page.tsx`)

```tsx
import JsonLd from "@/app/components/JsonLd";
import { EXAMPLE_PAGE_DATA } from "@/app/content/pageContent/pageData/example.data";
import ExampleSection from "@/app/screens/exampleSection";
import { normalizePageMetadata } from "@/app/utils/seo/metadata";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/app/utils/seo/schema";
import type { Metadata } from "next";

const title = typeof EXAMPLE_PAGE_DATA.metadata?.title === "string" ? EXAMPLE_PAGE_DATA.metadata.title : "Example | Skyphr";
const description = EXAMPLE_PAGE_DATA.metadata?.description ?? "…";
const path = "/example";

export const metadata: Metadata = EXAMPLE_PAGE_DATA.metadata
  ? normalizePageMetadata(EXAMPLE_PAGE_DATA.metadata, path)
  : { title, description };

function ExamplePage() {
  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({ title, description, path }),
          generateBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Example", path },
          ]),
        ]}
      />
      {EXAMPLE_PAGE_DATA?.hero && (
        <section className="w-full h-auto">
          <ExampleSection data={EXAMPLE_PAGE_DATA.hero} />
        </section>
      )}
    </>
  );
}

export default ExamplePage;
```

Pages are thin: they only read a data object, render sections conditionally (`DATA?.key && …`), wrap each in `<section className="w-full h-auto">`, and add metadata + JSON-LD.

---

## 7. Checklists

### Add a new page
1. Create `app/(page)/<kebab-route>/page.tsx` using template 6.3.
2. Create `app/content/pageContent/pageData/<camelName>.data.ts` exporting `<NAME>_PAGE_DATA`, typed with an interface (`CommonPageDataInterface` if it reuses standard sections, or a new `<Name>PageDataInterface` in `data.interface.ts`). Include `metadata` (title, description, openGraph, twitter, `alternates.canonical: \`${SITE_BASE_URL}/<route>\``).
   **One data format for every page** (reference: `aboutUs.data.ts`, `contact.data.ts`, `aiVoiceAgent.data.ts`):
   - `metadata` strings are written out inline in `metadata`, `openGraph` and `twitter`, with no `const title` / `const description` at the top of the data file.
   - `hero` always has `header: { title: TextChunk[][], description?: TextChunk[][] }` (one inner array per line; use `variant: "italic"` for the accent word or line) and `ctas: CTA[]`. For page-specific extras, extend `HeroSection` (`SkyAiHeroSection` adds `wordmark`/`tags`, `SkyVoiceHeroSection` adds `chip`/`console`). Don't replace `header` with custom fields like `lineOne` or `primaryCta`.
   - The contact form goes in the page's own data as `contactUs: COMMON_CONTACT_US_SECTION_DATA`, and the page renders `<NAME>_PAGE_DATA.contactUs`, not `HOME_PAGE_DATA.contactUs`.
   - Data that only this page uses (e.g. the voice demo call script) stays inline in the page's data file. Only data used by 2+ pages goes in `app/content/pageContent/<name>.data.ts`.
3. Add `public/og-image/<route-slug>.png`.
4. Add `app/content/markdown/<route>.md` (mirror of the page copy) so `/agent/<route>` works.
5. Add the link to `NAVBAR_LINKS_DATA` in `app/content/pageContent/navbar.data.tsx` (this also feeds `app/sitemap.ts`; set `isLink`, `priority`). If the page is linked from elsewhere instead of the header, add it to `EXTRA_PAGE_LINKS_DATA` in `navbar.data.tsx` so it's still in `sitemap.xml`, the `/sitemap` page and the footer.
6. If relevant, update `public/llms.txt`.
7. Reuse `app/screens/common/*` sections (FAQ, ContactUs, ReadyToScale) before writing new ones.

### Add a slug page (hire / services)
1. Add `pageData/<group>/<slug>.data.ts`, register it in `pageData/<group>/index.ts` under the URL slug.
2. Add matching `markdown/<group>/<slug>.md` and `public/og-image/<slug>.png`.
3. `generateStaticParams` picks it up automatically (`dynamicParams = false`).

### Add a blog post
1. Create and publish it in the blog CMS (`pnpm dev` → http://localhost:5175). It saves `data/blogs/<slug>.json` (`seo`, `listing`, `sections`); that file is the **only** source for the post. Don't write posts as TS data files.
2. `/blog` (listing, newest first), `/blog/<slug>` (`generateStaticParams`, `dynamicParams = false`), the sitemap, metadata (`createBlogPostMetadata`) and JSON-LD (`generateBlogPostSchemas`: the CMS `seo.schema.data` as-is, else generated) all read it through `app/content/pageContent/pageData/blog/index.ts` at build time. Commit the JSON and its images in `public/blog/images/`.
3. Sections render through `BLOG_SECTION_COMPONENTS` in `app/screens/blogs/blogArticleScreen.tsx`, keyed by the section `name` in `blog.config.json`. A new blog block needs both: a `blog.config.json` entry and a registry entry. `Blog Hero` is the only hero block; without one the page renders `BlogHero` from `listing` so every post has its `<h1>`.
4. The markdown mirror is generated by the CMS on save, from the `markdown` block in `blog.config.json`: `app/content/markdown/blog/<slug>.md` (served at `/agent/blog/<slug>`) and the list between the `<!-- cms:posts:start -->` / `<!-- cms:posts:end -->` markers in `app/content/markdown/blog.md`. Don't edit either by hand; commit them with the post. A blog block appears in the markdown only if its `blog.config.json` entry has a `markdown` template (`{{field}}` placeholders; blocks without one, like `Blogs Sidebar`, are skipped). To rebuild everything: `node blog-cms/services/scripts/regenerateMarkdown.js blog`.

### Add a new section
1. Define the data shape in `page.interface.ts` (shared) or `data.interface.ts` (page-specific) and add it as an optional key on the page data interface.
2. Add `<Name>SectionInterface` (`data`, `classNames?`) to `section.interface.ts`.
3. Create `app/screens/<name>Section.tsx` (or `screens/common/` if reused) from template 6.2.
4. Put the copy in the page data file, not in the section.
5. Render it on the page inside `{DATA?.key && (<section className="w-full h-auto">…</section>)}`.

### Add a new component
1. Create `app/components/<camelName>.tsx` (or `components/common/` if generic). **Every sub-component (card, item, pill) gets its own file**; don't define extra components inside a section file.
2. Add `<Name>Interface` to `common.interface.ts`.
3. Use tokens (`text-(--…)`), `twMerge`, `next/image`, and `export default` at the bottom.

### Add a color / token
1. Add it to `:root` in `app/styles/globals.css` with a role-based kebab-case name.
2. Add a row to the table in section 3.2 of this file in the same change.

---

## 8. Do's and Don'ts

**Do**
- Use the `:root` tokens through `text-(--text-main-color)`, `bg-(--cta-button-background)`, etc.
- Use `COMMON_SECTION_PADDING`, `COMMON_BORDER_RADIUS`, `GET_BUTTON_STYLE` / `CTAButton` and `.skyphr-container` instead of re-inventing spacing, radius and buttons.
- Import with the `@/app/...` alias.
- Import GSAP from `@/app/lib/gsap`, animate with `useGSAP` + `COMMON_SCROLL_TRIGGER_ANIMATION`.
- Add `data-lenis-prevent` to any inner scrollable panel, or Lenis will scroll the page instead (see `skyVoiceTranscript.tsx`).
- Pause any continuous animation loop (rAF, WebGL) when it's off-screen or the tab is hidden, and render a still frame for `prefers-reduced-motion`.
- Keep copy, links, image imports and icons in `app/content/pageContent/`.
- Keep all interfaces in `app/utils/interface/`.
- Use `next/image` with `alt` + `title` for every image; `.webp` in `app/assets/`.
- Use `twMerge` to combine class strings.
- Add `aria-hidden="true"` to decorative elements and `sr-only` text where meaning is only visual (existing pattern in SkyAI components).
- Respect `prefers-reduced-motion` for new CSS animations (as `globals.css` does for the SkyAI pill).
- Write conventional commits (`feat(sky-ai): add voice agent card`).

**Don't**
- Never hardcode hex/rgb colors in components or screens (`bg-[#5b45f4]`, `stopColor="#3846da"`). Add or reuse a token.
- Never use Tailwind palette colors (`text-gray-800`, `bg-white`, `text-black`) for brand UI; use `--text-main-color`, `--root-white-color`, `--root-black-color`, etc.
- Never reference a CSS variable that isn't declared in `:root` (see 9).
- Don't use relative imports (`./components/...`).
- Don't create CSS Modules, SCSS files or styled-components.
- Don't put copy strings directly in section JSX.
- Don't use `bg-gradient-to-*` (v3) or `[var(--x)]` syntax.
- Don't add raw `<img>` tags.
- Don't import GSAP directly from `"gsap"` in components.
- Don't add image files with spaces or generic names (`Frame 73.png`, `dummy.webp`).
- Don't create folder-per-component (`Button/index.tsx`).

---

## 9. Known Inconsistencies

| Issue | Where | Follow going forward |
|---|---|---|
| **Undefined CSS variables** used (render as nothing / fallback) | `--primary-color` in `components/ourProcessCard.tsx`; `--brand-color`, `--muted-color` in `screens/servicesSectionHero.tsx`; `--primary-color-variant` in `screens/aboutSection.tsx`; `--text-black-color` in `app/not-found.tsx` | Only use tokens listed in 3.2. The likely intent is `--cta-button-background` (brand), `--text-secondary-color` (muted), `--root-black-color` / `--text-main-color` (black). Fixing needs sign-off |
| Hardcoded colors in components | See table 3.6 | Tokens only |
| `@media only scree and (max-width: 767px)` typo (rule never applies) | `app/styles/globals.css:208` | Write `only screen` |
| `width: 130 !important` missing unit | `app/styles/globals.css:226`, `:292` | Always add units |
| Export style | 70 files use `function X` + `export default X`; 3 use `export default function` (`webMcpProvider`, `smoothScrollProvider`, `trustedPill`); 2 use named exports (`navbar/skyAiNavPill`, `common/navBarCommonLinkComponent`); `common/inputField` is an arrow const | `function X` + `export default X` at the bottom |
| Blog blocks use a different pattern: `export const UIComponent` + `export const Schema: SectionSchema`, local `type …Props` | `app/components/blog/*.tsx` | Keep this pattern **only** inside `components/blog/` (CMS-style blocks). Everywhere else, use section 6. New blocks still use tokens, Tailwind and `next/image` (reference: `blog/blogHero.tsx`), and get registered in `skyphr-cms-config/blog.config.json` |
| Inline prop types instead of an interface | `heroBgAbstract`, `commonBgAbstract`, `ourTeamIntroCard`, `skyAiTechStrip`, `skyAiSubNav`, `common/sparkleIcon`, `testimonialCard`, `screens/common/commonHirePageHeroSection` | Interface in `app/utils/interface/` |
| Sub-component defined inside another file | `LogoGroup` in `components/skyAiTechStrip.tsx` | Own file in `app/components/` |
| Relative imports | `app/layout.tsx`, `app/not-found.tsx`, `components/blogCard.tsx`, `components/ourServiceCardComponent.tsx` | `@/app/...` alias |
| File name casing | `components/JsonLd.tsx` is PascalCase; all others camelCase | camelCase |
| Abbreviated / misspelled file & symbol names | `ourApproachSec.tsx`, `heroSectionEle.tsx`, `ctaServiceBtn.tsx`, `commonContatcUsForm.tsx`, `socilaLinks.data.tsx`, `numberFormate.constants.ts`, `formateAndVerifyPhoneNumber`, `COMMON_REVEL_ANIMATION` | Don't rename existing files without asking; spell new names fully and correctly (`…Section.tsx`, `…Button.tsx`) |
| `ourServiceCardComponent.tsx` has a `Component` suffix | `app/components/` | Don't suffix with `Component` |
| Data file names mix kebab and camel | `our-values.data.tsx`, `service-steps.data.tsx` vs `ourProcess.data.tsx`, `skyAi.data.ts`; slug files are kebab | camelCase for page/shared data files; kebab-case only for slug files under `pageData/<group>/` |
| Service data files lack `.data.ts` | `pageData/service/*.ts` (`ui-ux-service-page.ts`) | Hire files use `<slug>.data.ts`; follow that |
| `.tsx` data files without JSX | some `*.data.tsx` | `.data.ts` unless it contains JSX |
| Constants file suffix | `numberFormate.constants.ts` (plural) vs `*.constant.ts` | `.constant.ts` |
| Helper naming | `CreateScrollTrigger`, `IsOdd` (PascalCase) vs `formateAndVerifyPhoneNumber`, `verifyPhoneNumberLength` (camelCase) in the same file | PascalCase (4 of 6); flag if you disagree |
| Section interfaces end in `Props` instead of `Interface` | `FeaturesIncludeSectionProps`, `WhatWeBuildSectionProps`, `UseCaseSectionProps`, `TechnologyStackSectionProps`, `WhyChooseSectionProps` | `…Interface` (≈25 vs 5) |
| `className` vs `classNames` prop | sections use `classNames`, components use `className` | Keep this split |
| v3 gradient syntax | `bg-gradient-to-br` in `screens/contactUsSection.tsx`, `pageData/skyAi.data.ts` | `bg-linear-to-*` |
| Tailwind palette colors in data | `service-steps.data.tsx` (~96) | Acceptable only for per-item decorative colors in data; never in components |
| Stray / placeholder assets | `app/assets/Frame 73.png` (used in `screens/common/whyChooseSection.tsx`), `dummy.webp`, `dummy-image.webp`, `dummy-testimonial.webp` (used in `trustedPill.tsx`, `testimonial.data.tsx`) | `.webp`, kebab-case, real names, inside `assets/webp/` |
| Duplicate image | `public/varun-patel.webp` == `app/assets/webp/varun-patel.webp` (public copy used by `founder.data.ts` for schema) | Import from `app/assets` for UI; `public/` only for URL-referenced files |
| Page prop type named after wrong page | `services/[slug]/page.tsx` uses `HireFromSkyphrProps` and `hirePageData` | Name props after the page |
| Page data format drift | `skyAi.data.ts` uses `const title` / `const description`; `sky-ai` and `privacy-policy` pages render `HOME_PAGE_DATA.contactUs` | The single format in checklist 7 → "Add a new page" |
| Commented-out sections left in pages | `app/(page)/page.tsx` (testimonials, insights) | Remove or flag rather than adding more |
| Unused env flag | `NEXT_PUBLIC_SHOW_SKYAI_NAV` is in `.env.example` but not read anywhere (pill always renders in `navBar.tsx`) | Check with the team before relying on it |
| Many arbitrary pixel font sizes (`text-[15px]`, `lg:text-[26px]`, ~63 uses) | throughout | Prefer the Tailwind scale; arbitrary sizes only to match a design spec |
| `.gitignore` ignores `*.md` except README | root `.gitignore` | This file, `CLAUDE.md` and `AGENTS.md` are **not tracked by git** until `.gitignore` gets `!PROJECT_CONVENTIONS.md`, `!CLAUDE.md`, `!AGENTS.md` |

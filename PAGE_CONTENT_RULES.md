# Page Content Rules (STRICT)

Read this file **every time** before you add, replace or edit copy in `app/content/`. It is the contract for content work. It was written from an audit of every file in `app/content/pageContent/` and `app/content/markdown/` (3 Oct 2026). Code conventions (folders, tokens, components) are in [PROJECT_CONVENTIONS.md](PROJECT_CONVENTIONS.md); this file only covers **content data**.

> **Your job is to put new words into the existing shape. Never change the shape.**
> If the new content does not fit the existing shape (an extra section, a new field, a card with no matching key), **stop and ask**. Do not invent fields, keys, types or sections.

---

## 1. The Golden Rules

1. **Change values, never structure.** You may replace the string values of `text`, `title`, `description`, `items`, `features`, `reasons`, `question`/`answer`, `metadata` strings. You may add or remove entries **inside an existing array** (cards, items, steps, list items, technologies, FAQ entries) using the exact object shape the neighbouring entries already use.
2. **Never** rename, add, remove or reorder top-level keys (`hero`, `whatWeBuild`, `useCase`, ...) in a page data object. The key order in the file is the order the author chose; keep it.
3. **Never** change: types/interfaces, export names, import paths, `SITE_BASE_URL` canonical paths, slugs in `index.ts`, `variant` values on CTAs, `href`s, `target`/`rel`, `classNames` strings, image imports, `heroImage` objects, shared constants (`COMMON_CONTACT_US_SECTION_DATA`, `CLIENT_TESTIMONIAL_DATA`, `*_VALUES_CARDS`, `*_STEPS_WE_FOLLOW`, `*_FAQ_DATA`) unless the task explicitly says so.
4. **Never** touch files in `app/utils/interface/`, `app/screens/`, `app/components/` or `app/(page)/` during a content task. If the content needs one of them changed, ask first.
5. **Titles are split exactly like the title they replace in the current file** (section 4). This is the most common mistake; read section 4 fully.
6. **Every content change is mirrored** in the page's markdown file in `app/content/markdown/` in the same change (section 9).
7. **Copy is written as given.** Do not rewrite, shorten, "improve", re-capitalise or fix the client's wording unless asked. Do not add marketing copy that was not supplied. If supplied content is missing a field the file needs (e.g. a section description), ask, or leave the existing value and say so in your reply.
8. **No new formatting.** Match the file exactly: double quotes, trailing commas, 2-space indent, long lines (~120 chars). Use a template literal (`` ` ``) only where the existing value already is one; never leave a trailing newline inside a string.
9. **Commented-out blocks** (`// { ... }`) are the author's: don't delete, uncomment or edit them unless asked.
10. **Don't fix existing inconsistencies** while implementing content (section 11). Report them instead.

---

## 2. Where Content Lives

```
app/content/
├── pageContent/
│   ├── faq.data.tsx            # ALL FAQ arrays (JSX answers)            → <PAGE>_FAQ_DATA
│   ├── our-values.data.tsx     # ALL "values" / hiring-model card arrays → <PAGE>_VALUES_CARD(S)_DATA
│   ├── service-steps.data.tsx  # ALL "our approach" step arrays           → <PAGE>_STEPS_WE_FOLLOW
│   ├── testimonial.data.tsx    # CLIENT_TESTIMONIAL_DATA (shared, don't edit for one page)
│   ├── common.data.tsx, navbar.data.tsx, insights.data.tsx, ourProcess.data.tsx, socilaLinks.data.tsx
│   └── pageData/
│       ├── hire/<slug>.data.ts       # one file per /hire/<slug> page   (HirePageDataInterface)
│       ├── hire/index.ts             # URL slug → data map
│       ├── service/<slug>.ts         # one file per /services/<slug>    (CommonPageDataInterface)
│       ├── service/index.ts          # URL slug → data map
│       ├── home.data.ts, aboutUs.data.ts, contact.data.ts, skyAi.data.ts,
│       ├── aiVoiceAgent.data.ts, privacyPolicy.data.ts, blog.data.ts, founder.data.ts
└── markdown/                         # mirror of every page's copy (served at /agent/<route>)
    ├── hire/hire-<x>.md
    ├── services/<slug>.md
    └── <page>.md
```

### Slug → files (keep in sync)

| URL | Data file | Export | Markdown | OG image |
|---|---|---|---|---|
| `/hire/hire-react-js-developers` | `hire/reactjs-developer.data.ts` | `REACTJS_DEVELOPER_HIRE_PAGE_DATA` | `markdown/hire/hire-react-js-developers.md` | `public/og-image/hire-react-js-developers.png` |
| `/hire/hire-nextjs-developers` | `hire/nextjs-developer.data.ts` | `NEXTJS_DEVELOPER_HIRE_PAGE_DATA` | `markdown/hire/hire-nextjs-developers.md` | ✓ |
| `/hire/hire-wordpress-developers` | `hire/wordpress-developer.data.ts` | `WORDPRESS_DEVELOPER_HIRE_PAGE_DATA` | ✓ | ✓ |
| `/hire/hire-gsap-animation-developers` | `hire/gsap-animation-developer.data.ts` | `GSAP_ANIMATION_DEVELOPER_HIRE_PAGE_DATA` | ✓ | ✓ |
| `/hire/hire-full-stack-developers` | `hire/fullstack-developer.data.ts` | `FULLSTACK_DEVELOPER_HIRE_PAGE_DATA` | ✓ | ✓ |
| `/hire/hire-typescript-developers` | `hire/typescript-developer.data.ts` | `TYPESCRIPT_DEVELOPER_HIRE_PAGE_DATA` | ✓ | ✓ |
| `/hire/hire-tailwind-css-developers` | `hire/tailwind-css-developer.data.ts` | `TAILWIND_CSS_DEVELOPER_HIRE_PAGE_DATA` | ✓ | ✓ |
| `/hire/hire-nodejs-developers` | `hire/nodejs-developer.data.ts` | `NODEJS_DEVELOPER_HIRE_PAGE_DATA` | ✓ | ✓ |
| `/hire/hire-fastapi-developers` | `hire/fastapi-developer.data.ts` | `FASTAPI_DEVELOPER_HIRE_PAGE_DATA` | ✓ | ✓ |
| `/hire/hire-python-developers` | `hire/python-developer.data.ts` | `PYTHON_DEVELOPER_HIRE_PAGE_DATA` | ✓ | ✓ |
| `/hire/hire-ui-designers` | `hire/ui-designer.data.ts` | `UI_DESIGNER_HIRE_PAGE_DATA` | ✓ | ✓ |
| `/hire/hire-wireframe-designers` | `hire/wireframe-designer.data.ts` | `WIREFRAME_DESIGNER_HIRE_PAGE_DATA` | ✓ | ✓ |
| `/services/ui-ux-design` | `service/ui-ux-service-page.ts` | `UI_UX_DESIGN_SERVICE_PAGE_DATA` | `markdown/services/ui-ux-design.md` | ✓ |
| `/services/saas-development-services` | `service/saas-app-development.ts` | `SAAS_APP_DEVELOPMENT_SERVICE_PAGE_DATA` | ✓ | ✓ |
| `/services/ai-development-services` | `service/ai-development-automation.ts` | `AI_DEVELOPMENT_AUTOMATION_SERVICE_PAGE_DATA` | ✓ | ✓ |
| `/services/custom-software-development-services` | `service/custom-software-development.ts` | `CUSTOM_SOFTWARE_DEVELOPMENT_SERVICE_PAGE_DATA` | ✓ | ✓ |
| `/services/rag-development-services` | `service/rag-development-services.ts` | `RAG_DEVELOPMENT_SERVICE_PAGE_DATA` | ✓ | ✓ |
| `/services/llm-integration-service` | `service/llm-integration-service.ts` | `LLM_INTEGRATION_SERVICE_PAGE_DATA` | ✓ | ✓ |
| `/services/ai-consulting-services` | `service/ai-consulting-services.ts` | `AI_CONSULTING_SERVICE_PAGE_DATA` | ✓ | ✓ |
| `/services/enterprise-app-development` | `service/enterprise-app-development.ts` | `ENTERPRISE_APP_DEVELOPMENT_SERVICE_PAGE_DATA` | ✓ | ✓ |
| `/services/enterprise-software-development` | `service/enterprise-software-development.ts` | `ENTERPRISE_SOFTWARE_DEVELOPMENT_SERVICE_PAGE_DATA` | ✓ | ✓ |
| `/services/mobile-app-development` | `service/mobile-app-development.ts` | `MOBILE_APP_DEVELOPMENT_SERVICE_PAGE_DATA` | ✓ | ✓ |
| `/services/ai-chatbot-assistant-development` | `service/ai-chatbot-assistant-development.ts` | `AI_CHATBOT_ASSISTANT_SERVICE_PAGE_DATA` | ✓ | ✓ |
| `/services/progressive-web-app-development` | `service/progressive-web-app-development.ts` | `PROGRESSIVE_WEB_APP_DEVELOPMENT_SERVICE_PAGE_DATA` | ✓ | ✓ |
| `/services/wireframe-designer` | `service/wireframe-designer.ts` | `WIREFRAME_DESIGNER_SERVICE_PAGE_DATA` | ✓ | ✓ |

The markdown/OG file name is always the URL slug, not the data file name.

---

## 3. Which Keys Actually Render

A key that exists in the data but is not rendered by the page is **dead content**. Don't spend effort on it, and don't add a key the page doesn't render.

| Key | `/hire/[slug]` | `/services/[slug]` | Section component |
|---|---|---|---|
| `metadata` | ✓ (SEO) | ✓ (SEO) | `generateMetadata` |
| `hero` | ✓ | ✓ | `CommonHirePageHeroSection` / `ServicesSectionHero` |
| `whatWeBuild` | ✓ | ✓ | `WhatWeBuildSection` |
| `featuresInclude` | ✓ | ✓ | `FeaturesIncludeSection` |
| `useCase` | ✓ | ✓ | `UseCaseSection` |
| `technologyStack` | ✓ | ✓ | `TechnologyStackSection` |
| `developmentProcess` | ✓ | ✓ | `DevelopmentProcessSection` |
| `ourApproach` | ✓ | ✓ | `OurApproachSection` |
| `ourValues` | ✓ | ✓ | `OurValuesSection` |
| `deliveryApproach` | ✗ | ✓ | `DeliveryApproachSection` |
| `industriesServe` | ✗ | ✓ | `IndustriesServeSection` |
| `whyChoose` | ✓ | ✓ | `WhyChooseSection` |
| `testimonials` | ✗ (commented out in page) | ✗ | — keep the existing block as is |
| `faq` | ✓ (+ FAQ JSON-LD) | ✓ (+ FAQ JSON-LD) | `FrequentlyAskedQuestions` |
| `readyToScale` | ✓ | ✓ | `ReadyToScaleSection` |
| `contactUs` | ✓ | ✓ | always `COMMON_CONTACT_US_SECTION_DATA` |

**Render order is fixed by the page file**, not by the key order in the data file: hero → whatWeBuild → featuresInclude → useCase → technologyStack → developmentProcess → ourApproach → ourValues → (services: deliveryApproach → industriesServe) → whyChoose → faq → readyToScale → contactUs. Never reorder keys in a data file to "fix" the visual order.

Standalone pages (`home`, `aboutUs`, `contact`, `skyAi`, `aiVoiceAgent`, `privacyPolicy`, `blog`) have their own interfaces in `page.interface.ts` / `data.interface.ts` and their own section sets. Same rules: replace values only, keep every key and shape.

---

## 4. Title Splitting (MANDATORY)

Every heading is `title: TextChunk[][]`:

```ts
title: [
  [ /* row 1: one chunk per word */ ],
  [ /* row 2: one chunk per word, usually the italic accent */ ],
],
```

- Outer array = **rows** (each row renders on its own line; in `CommonSectionHeader` each row is its own `<h2>`).
- Inner array = **chunks**. Section renderers put each chunk in its own flex item with a gap, and `CommonSectionHeader` calls `.trim()`, so the gap supplies the spaces.
- `variant: "italic"` = accent style (Playfair Display, italic, brand blue). It is the **only** variant used in titles. Never use `"bold" | "brand" | "muted"` in a title.

### 4.1 The split algorithm: copy the current title's shape

When you replace a title, read the title that is there **now** for that same section in that same file, then:

1. **Same number of rows** as the current title. 1 row stays 1 row, 2 rows stay 2 rows.
2. **One word per chunk**: `[{ text: "Our" }, { text: "Python" }, { text: "Development" }]`. No trailing spaces in new chunks.
3. **Same italic placement**: if the current row 2 is all italic, every chunk of the new row 2 is italic. If only the last word of row 1 is italic, only the last word of row 1 is italic. If nothing is italic, nothing is italic.
4. **Where to break rows**: row 1 is the lead-in, the last row is the subject (the technology / service name plus its noun). Put the line break in front of the subject phrase, exactly as the current title does.
   - Current: `Why Choose Skyphr for` / `FastAPI* Development?*` → New "Why Choose Skyphr for Django Development?" → `[Why, Choose, Skyphr, for]` / `[Django*, Development?*]`.
   - Current: `Our Next.js Development` / `Process*` → New "Our Django Development Process" → `[Our, Django, Development]` / `[Process*]`.
5. **Multi-word brand names stay one chunk only if the current title already does that** (e.g. `{ text: "Design Tools", variant: "italic" }`, `{ text: "SaaS Product?", variant: "italic" }`). Otherwise split them word by word.
6. **Punctuation stays attached** to its word in the same chunk: `{ text: "Development?", variant: "italic" }`, `{ text: "Faster,", variant: "italic" }`.
7. **Keep `classNames`** on a chunk if the chunk you replace has one (e.g. `classNames: "text-center"`). Don't add `classNames` to new chunks.
8. **Row length**: keep each row to about 5 words or fewer. `ReadyToScaleSection` rows use `flex-row` with **no wrap**, so long rows overflow on mobile there.
9. If the new heading genuinely doesn't fit the current shape (e.g. 3 lines of copy for a 1-row title), ask.

### 4.2 Fixed / near-fixed titles (do not change unless the content says so)

| Section | Hire pages | Service pages |
|---|---|---|
| `faq` | `[[{ text: "Frequently" }], [{ text: "Asked" }, { text: "Questions", variant: "italic" }]]`, `description: []` | `[[{ text: "Got Questions? " }], [{ text: "We've Got " }, { text: "Answers", variant: "italic" }]]` + the "Everything you need to know… **Skyphr**" description (with `variant: "brand", classNames: "font-bold"`) |
| `testimonials` | `[[{ text: "Trusted by Clients " }, { text: "Worldwide", variant: "italic", classNames: "font-bold" }]]` | — |
| `industriesServe` | — | `[[{ text: "Industries" }, { text: "We" }, { text: "Serve", variant: "italic" }]]` |
| `ourValues` (hire pages that show hiring models) | `[[{ text: "Flexible" }, { text: "Hiring" }], [{ text: "Models", variant: "italic" }]]` | — |

### 4.3 Hero titles (different renderers, different rules)

**Hire hero** (`CommonHirePageHeroSection`) renders chunks **inline with no gap**, so spaces inside the string matter. Always exactly:

```ts
hero: {
  header: {
    title: [
      [{ text: "Hire Expert " }, { text: "<Tech> Developers", variant: "italic" }],   // note the trailing space in "Hire Expert "
      [
        {
          text: "<One-line subtitle, Title Case>",
          classNames: "pt-2 lg:pt-4 flex text-lg! lg:text-xl! xl:text-2xl! tracking-wide",
        },
      ],
    ],
    description: [[{ text: "<paragraph 1>" }], [{ text: "<paragraph 2>" }]],
  },
  highlights: [],   // keep as is (only reactjs has values)
},
```

No `ctas` and no `heroImage` on hire heroes. If the current hero has no subtitle row (`reactjs`, `fullstack`), only add one if the content supplies a subtitle.

**Service hero** (`ServicesSectionHero`) uses a gap, like section headers. Row 1 = the H1 words (one word per chunk, keep the current split), row 2 = the italic tagline as **one** chunk:

```ts
[{ text: "<tagline>", variant: "italic", classNames: "pt-2 lg:pt-4 flex text-2xl! xl:text-3xl!" }]
```

Keep `heroImage` and `ctas` exactly as they are.

---

## 5. Descriptions

```ts
description: [
  [{ text: "Paragraph one." }],
  [{ text: "Paragraph two." }],
],
```

- One inner array = one `<p>`. One chunk per paragraph. Don't split a paragraph into word chunks.
- No description → `description: []` (this is how the file already does it; don't delete the key).
- Inline emphasis inside a description only where the current file already does it (the services FAQ "Skyphr" brand chunk). Don't introduce new emphasis.
- No HTML, no markdown (`**`, `\n`) inside strings.

---

## 6. Section Shapes (copy exactly)

Numbers ("01", "02") are added by the renderer from the array index. **Never put numbers in `title` strings.**

**`whatWeBuild`**: `cards: { title, description, list?: { title, items: string[] } }[]`
- `list.title` **ends with a colon on hire pages** (`"Services Include:"`, `"Capabilities:"`) and **has no colon on service pages** (`"Ideal For"`, `"Capabilities"`). Follow the folder.

**`featuresInclude`**: use the field the current file uses. `features: string[]` (plain chips; most files) **or** `items: { title, description }[]` (only `rag-development-services.ts`). Never switch between them, never use both.

**`useCase`**, **`industriesServe`**, **`deliveryApproach`**: `items: { title: string; description: string }[]`.

**`technologyStack`**: `groups: { title: string; technologies: { name: string }[] }[]`. Short groups go on one line (`[{ name: "PostgreSQL" }, { name: "MySQL" }]`), longer ones one object per line, as the file already does. Don't add `logoSrc`/`logoAlt` unless asked.

**`developmentProcess`**: `steps: { title, description, list?: { title, items } }[]`. Same colon rule as `whatWeBuild` (hire: `"Activities:"`, `"Deliverables:"`; services: `"Outcomes"`, `"Deliverables"`).

**`ourApproach`**: header + `heroHighlightedText: { textOne, textTwo, description: TextChunk[] }` (note: `description` here is a **flat** array, not `[][]`) + `steps: <SHARED_CONST>` from `service-steps.data.tsx`. Change step copy in that shared file, not inline. If two pages share one const (`HIRE_REACT_JS_DEVELOPER` is used by both reactjs and nextjs), ask before editing it, or add a new const for the page you're working on (section 8).

**`ourValues`**: header + `valuesCards: <SHARED_CONST>` from `our-values.data.tsx`.

**`whyChoose`**: use the field the current file uses. `reasons: string[]` (most files) **or** `items: { title, description }[]` (`ai-consulting-services.ts`, `rag-development-services.ts`). `description: []` is allowed.

**`faq`**: header + `faqsItems: <SHARED_CONST>` from `faq.data.tsx`.

**`readyToScale`**: header + `ctas`. Keep the CTA object exactly:

```ts
ctas: [
  {
    label: "Book a Free Call",
    href: "https://cal.com/skyphr/30min",
    variant: "CTA_SECONDARY",
    external: true,
    target: "_blank",
    rel: "noopener noreferrer",
    classNames: "min-w-55",
  },
],
```

**`contactUs`**: always `contactUs: COMMON_CONTACT_US_SECTION_DATA,` as the last key.

---

## 7. Metadata

```ts
metadata: {
  title: "<Title> | Skyphr",
  description: "<Description>",
  openGraph: { title: <same>, description: <same>, images: "/og-image/<url-slug>.png", type: "website" },
  twitter: {
    title: <same>, description: <same>,
    card: "summary_large_image", creator: "@skyphrhq", site: "@skyphrhq",
    images: "/og-image/<url-slug>.png",
  },
  alternates: { canonical: `${SITE_BASE_URL}/<hire|services>/<url-slug>` },
},
```

- The same title and description string is written out **three times** (top, `openGraph`, `twitter`). Update all three. No `const title` at the top of the file.
- Titles end with ` | Skyphr` (the breadcrumb JSON-LD strips it).
- Never change `canonical`, `images` or the slug.

---

## 8. Shared Content Files

**`faq.data.tsx`**: `export const <NAME>_FAQ_DATA: FaqCommonCardData[] = [{ question: string, answer: <p>…</p> }]`. Answers are JSX: wrap in `<p>`, use `{" "}` between inline elements, emphasis only as `<span className="font-semibold">`. No colors or new classes in answers.

**`our-values.data.tsx`**: `{ id: number, title, description, icon: <Fi… className="text-2xl" />, color: "#hex", bgColor: "rgba(…, 0.5)" }`. When adding cards, reuse the icons and the color/bgColor pairs already used in that file, in the same order.

**`service-steps.data.tsx`**: `{ num: "01", title, desc, icon, iconBgColor, numBgColor, numTextColor }`. Note the field is `desc`, not `description`. Reuse the existing icon/color sets.

**Adding a new shared const** (only if the page needs its own and none exists): name it like its neighbours (`HIRE_<TECH>_DEVELOPER_FAQ_DATA`, `HIRE_<TECH>_DEVELOPER_VALUES_CARDS`), type it explicitly, place it after the last related const, import it in the page data file with the other `@/app/content/...` imports (sorted by path).

Never edit a shared const that other pages use (`HOME_PAGE_FAQ_DATA`, `CLIENT_TESTIMONIAL_DATA`, `COMMON_CONTACT_US_SECTION_DATA`) for one page's content. Check usage first: `grep -rn "<CONST_NAME>" app/`.

---

## 9. Markdown Mirror (same change, every time)

Every data change is reflected in the page's `.md` (table in section 2). Format, taken from the existing files:

```md
---
title: "<metadata.title>"
description: "<metadata.description>"
---

# <hero title row 1 as plain text>

## <hero subtitle / row 2>

<hero description paragraphs>

## <section title, all rows joined with spaces, no italics>

<section description>

### <card / item / step title>

<description>

<List title>:

- item
- item
```

- Section titles in markdown are the title chunks joined into one plain sentence ("Why Choose Skyphr for FastAPI Development?").
- Keep the numbering style **that markdown file** already uses. It varies: `ai-development-services`, `custom-software-development-services`, `saas-development-services`, `ui-ux-design` and `hire-react-js-developers` number cards/steps as `### 01. Title`; all the others don't.
- Only mirror sections that render on the page (section 3). FAQ entries are `### Question` + plain-text answer.
- Mirror what the page shows, not raw JSX: write FAQ answers as the visible sentence (add the space a JSX line break swallows, e.g. `across{" "}<span>`), skip placeholder data (`CLIENT_TESTIMONIAL_DATA`) and UI-only labels (button states, demo stage widgets). Standalone pages use clean markdown (`#`, `-`), never escaped (`\-`) or bolded (`**# Title**`) headings.
- Don't edit `markdown/blog/*` or the posts list in `markdown/blog.md`; the blog CMS generates them.

---

## 10. Before You Finish

1. `git diff` shows only string values / array entries changed. No key renames, no reordering, no type changes, no new imports except a new shared const you added.
2. Every replaced title follows section 4 (row count, one word per chunk, italic placement).
3. `metadata` title/description match in all three places.
4. The markdown mirror is updated.
5. `pnpm exec tsc --noEmit` and `pnpm lint` pass.
6. In your reply, list anything from the supplied content you could **not** place, and any field you left unchanged because no content was supplied.

---

## 11. Known Inconsistencies (leave as is, report only)

| What | Where |
|---|---|
| Trailing spaces in some existing title chunks (`"What "`, `"How "`, `"Build "`) | many files. Harmless in section headers (trimmed). Don't copy into new chunks; don't strip from untouched ones |
| `nextjs-developer.data.ts` uses React.js titles + shared React data in `ourApproach`, `ourValues`, `whyChoose` | `hire/nextjs-developer.data.ts` |
| Hero description is a template literal with a trailing newline | `hire/nextjs-developer.data.ts` (hero paragraph 2) |
| `HIRE_UI_DESIGNER_FAQ_DATA`, `HIRE_WIREFRAME_DESIGNER_FAQ_DATA` have no type annotation | `faq.data.tsx` |
| RAG hero image imported under the name `SAAS_APP_DEVELOPMENT_4X_IMG`; LLM page reuses the RAG image; AI consulting reuses the AI automation image | `service/rag-development-services.ts`, `service/llm-integration-service.ts`, `service/ai-consulting-services.ts` |
| `skyAi.data.ts` uses `const title` / `const description` for metadata | `pageData/skyAi.data.ts` |
| Service data files lack the `.data.ts` suffix | `pageData/service/*.ts` |
| `service-steps.data.tsx` uses Tailwind palette colors | accepted for per-item decorative data only |
| `testimonials` exists in every hire file but the section is commented out in `hire/[slug]/page.tsx` | keep the data |

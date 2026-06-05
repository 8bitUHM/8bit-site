# 8bit @ UH Mānoa — Design System

A design system for **8bit**, a student software organization at the **University of Hawaiʻi at Mānoa**. 8bit builds real software for clients ranging from UH departments to local Hawaiʻi businesses, giving its student members hands-on, multi-team development experience. Services are offered **free of charge**.

> "We empower our members through immersive, hands-on software development."

This folder lets a design agent produce on-brand interfaces, marketing pages, and assets for 8bit — for production work or throwaway mocks.

---

## Sources

Everything here was reverse-engineered from 8bit's own codebase. If you have access, explore these to go deeper:

- **Marketing site (primary source):** https://github.com/8bitUHM/8bit-site
  - Django 4.2 + React/TypeScript frontend, styled with **Tailwind CSS** + **Flowbite**.
  - Design tokens: `main_app/frontend/tailwind.config.js`
  - Component layer (lifted into this system): `main_app/frontend/src/components/**`
  - Pages: `main_app/frontend/src/pages/{Index,About,Services,Members,Projects,Join}.tsx`
- **8bit GitHub org:** https://github.com/8bituhm — sibling projects (ACM Mānoa site, CompSciHi, client apps) share the playful, rounded, colorful sensibility.

Explore the `8bit-site` repo to build higher-fidelity designs than this system alone captures.

---

## What 8bit makes (product surfaces)

1. **Marketing website** (`8bit-site`) — the public org site: Home, Members, Projects, Services, Join, plus a **Learning Portal** sub-app. This is the main surface the design system models. → see `ui_kits/website/`.
2. **Client project work** — full-stack web apps & static sites built for clients (the org's actual output). These don't share a single brand; they take on each client's identity.

The 8bit *brand* lives in surface #1. This system documents that brand.

---

## CONTENT FUNDAMENTALS

**Voice:** Warm, energetic, student-led, and confident without being corporate. Reads like a capable peer who's excited to build with you.

- **Person:** Collective **"we"** for the org, **"you/your"** for the reader/client. ("We bring software to life…", "…bring your vision to life.")
- **Tone:** Encouraging and momentum-driven. Verbs of making and shipping: *build, learn, ship, launch, empower, collaborate, bring to life.* Recurring triad **"Build, learn, and ship together."**
- **Casing:** **Title Case** for nav, buttons, and short labels ("Meet the Team", "View Projects", "Learning Portal"). **Sentence case** for headings and body ("Build, learn, and ship together", "From idea to launch"). **ALL-CAPS** only for tiny eyebrow labels/badges, always letter-spaced ("WHAT WE DO", "IN DEV", "PAID CLIENT").
- **Headlines:** Short, punchy, often imperative or declarative. "Our Services." "Ready to join our community?" "Students building real software at UH Mānoa."
- **Eyebrow + headline pattern:** Nearly every section opens with a small pill eyebrow ("What we do", "How it works", "Join us") above a big Nunito-Black headline.
- **Body copy:** Full, friendly sentences — not terse. Always set in **semibold** weight, so even body text feels solid and upbeat.
- **CTAs:** Direct and inviting. "Get in Touch", "Send us an Email", "Join Discord", "Meet the Team".
- **Numbers/stats:** Used sparingly as playful "stat chips" (Campus: UHM · Focus: Software · Services: Free) — identity flavor, not dense data.
- **Emoji:** **Not used** in product copy. Personality comes from color, shape, and motion — not emoji.
- **Hawaiʻi context:** Spell **Mānoa** with the ʻokina/macron where possible. The org is proudly local to UH; imagery references campus (Hawaiʻi Hall, palms).

**Sample copy (verbatim from the site):**
- Hero: "We are **8bit** @ UH Manoa" / "We empower our members through immersive, hands-on software development."
- About: "8bit is a group of students passionate about software development and creating impactful software solutions."
- Services: "We charge nothing for our services." / "From idea to launch" / Consult → Build → Launch.
- Join: "Ready to join our community?" / "Connect on Discord, explore our GitHub, or reach out via email."

---

## VISUAL FOUNDATIONS

The 8bit look is **playful, rounded, and saturated** — a candy-bright multi-color palette on generous white space, with big friendly type and soft "pop" shadows. Think modern, optimistic student-energy, not enterprise.

### Color
- **Multi-hue, not monochrome.** Five accent families carry the brand: **teal (primary)**, **sky blue (accent)**, **violet**, **pink (bubble)**, **orange (sunset)**, plus **lime** for highlights. Teal `#14b8a6` is the anchor; the teal-to-sky-to-violet **hero gradient** is the signature.
- **Color bands.** Pages are built as full-width stacked "section bands," each a different solid color or gradient (white → warm → cool → white), separated by a wavy SVG divider. Color drives rhythm.
- **Gradients are core**, not decoration: `hero` (teal→sky→violet), `warm` (orange→pink), `cool` (sky→violet), `mint`, and `fun`. Used as section backgrounds, button fills, and clipped into text.
- Team sub-colors: software = teal, business = sky, design = violet.
- See `colors_and_type.css` for every token.

### Type
- **One family: Nunito** (humanist rounded sans), at two voices:
  - **Display** — **Black (900)** / ExtraBold (800), tight letter-spacing (-0.02em); for all headings, nav, buttons, stat values. Strong and friendly but **less round than a bubbly geometric face** — a deliberate, slightly more grown-up display voice.
  - **Body** — **semibold (600)** by default, sometimes bold, rarely regular. Text feels chunky and confident.
- Big headline scale: hero h1 up to 72px, section h2 ~36–48px. Tight leading (~1.05) on heroes.

> **Note:** the production `8bit-site` pairs **Fredoka** (display) with Nunito (body). This system intentionally consolidates onto **Nunito for both**, per brand direction, for a cleaner, less-round display voice. To match the live site exactly, set `--font-display` back to `'Fredoka'`.

### Backgrounds & texture
- **Solid color bands and gradients**, never photographic full-bleed heroes. White/`primary-50` sections give breathing room between color bands.
- **Floating "blobs":** large, soft, blurred translucent circles (`blur-3xl`, white/20 or pink/40) drift behind hero and colored sections via a slow `float` animation. The main ambient texture.
- **Wavy section dividers:** a curved SVG path transitions one band's color into the next.
- No grain, no noise, no dot-grids. Cleanliness + color + soft blur.

### Imagery
- Bright, warm, sunny photography — **UH Mānoa campus** (Hawaiʻi Hall, palms, blue sky), team/member photos. Cropped into rounded cards. Optimistic, high-key, full-color (never b&w or duotone).
- A 360° panorama embed shows a real team meeting — interactive, experiential.

### Shape language
- **Everything is rounded.** Cards use `rounded-3xl` (24px); buttons, pills, badges, nav links, and stat chips are **fully pill-shaped** (`rounded-full`). Icon tiles are `rounded-2xl`. The hero logo card is `rounded-[2rem]`. Sharp corners essentially never appear.

### Cards
- White (or solid-color) surface, **`rounded-3xl`**, no border, lifted on a soft **`shadow-pop`** (a wide, soft, slightly-blue drop shadow). On hover they **rise** (`-translate-y-1.5`) and the shadow intensifies to a **colored glow** matching the card's accent (`shadow-pop-primary/accent/violet/warm`). Color-filled "bento" tiles use the same shape with white text.

### Shadows / elevation
- One soft-shadow family. `shadow-soft/medium/large` for subtle depth; **`shadow-pop`** is the hero — large, soft, low-opacity slate. Hover/active elements get a **colored pop shadow** (a glow in the element's hue). `shadow-glow` for teal emphasis. No hard or inset shadows; no neumorphism.

### Borders
- Borders are mostly **absent** — separation comes from color and shadow. When present (e.g. ghost/outline elements), they're light gray, 1px. Inputs lean on Flowbite defaults (light gray border, focus ring in primary).

### Transparency & blur
- Used purposefully: **glass nav** (`bg-white/90` + `backdrop-blur-md`), translucent **list/stat chips** on colored bands (`bg-white/20` + `backdrop-blur-sm`), and the blurred blobs. Blur signals "floating glass on color."

### Motion
- Friendly and gentle, never flashy. Entrance: `fade-in` (0.5s) and `slide-up` (0.6s, 20px rise) with **staggered delays** (`delay={index*100}`). Ambient: `float` (6–9s ease-in-out loop) on blobs. Easing is **ease-out / ease-in-out** — no harsh linear, no big bounces.
- **Hover:** lift up 1.5–2px + stronger colored shadow; images scale 105%; links get a tinted pill background. Transitions 200–300ms.
- **Press/focus:** focus rings are `ring-4` in white/40 (on color) or primary. Buttons translate slightly on hover rather than shrinking.

### Layout rules
- Centered container, `max-w-screen-xl`, generous side padding. Fixed **glass navbar** pinned top. Sections stack as full-bleed color bands with `py-16–24` internal padding. Bento/feature grids: 1 col mobile → 2–3 cols desktop, `gap-5/6`. Footer is a `cool` gradient band with blobs.

---

## ICONOGRAPHY

- **System:** No dedicated icon font. Icons are **inline SVGs** drawn in two styles:
  1. **Outline / line icons** — `stroke="currentColor"`, `stroke-width={2}`, 24×24 viewBox, rounded line caps/joins. Used for feature/bento tiles (monitor, book, layers, code). This is essentially the **Heroicons (outline)** vocabulary.
  2. **Solid glyphs** — `fill="currentColor"`, 16×16 viewBox, from **Bootstrap Icons**. Used for service rows and small UI marks.
- **Brand/social icons** are inline SVGs at their official viewBoxes: GitHub (16×16 octocat), Discord, LinkedIn, Instagram, mail/envelope. Colored on hover to each brand's hue (Discord indigo, LinkedIn blue, Instagram pink, GitHub near-black).
- **Icon containers:** icons usually sit in a rounded tile ("icon-blob") — `w-14 h-14 rounded-2xl`, white icon on a translucent `white/25` fill (on color tiles) or a `gradient-cool` fill (on white tiles), with a pop shadow.
- **Emoji:** never used as icons.
- **Unicode chars:** not used as icons. Small dots/bullets are real elements (`<span>` circles), e.g. the 5-color dot row under the hero logo.

**For new work:** use **Heroicons (outline, 2px)** as the default set and **Bootstrap Icons (solid)** for filled glyphs — both are CDN-available and match what's in the codebase. Place them in a `rounded-2xl` icon tile when used as a feature marker. CDN:
```html
<!-- Heroicons via Iconify, or copy individual SVGs -->
<script src="https://cdn.jsdelivr.net/npm/iconify-icon@2/dist/iconify-icon.min.js"></script>
<!-- <iconify-icon icon="heroicons:code-bracket"></iconify-icon> -->
```

---

## Brand assets (`assets/`)

| File | What it is |
|------|------------|
| `8bit-mark.png` | Primary logo mark — white pixel-block "8#" with offset shadow, transparent bg (uploaded). |
| `8bit-logo.webp` | App-icon mark — same "8#" on a teal `rounded-3xl` tile. |
| `8bit-logo-small.webp` | Tiny favicon-scale version of the icon. |
| `8bit-long-logo.png` / `.webp` | Horizontal wordmark "8it solutions" on teal. |
| `about-us-3.webp` | Hawaiʻi Hall, UH Mānoa campus — hero/about photography. |
| `default-member.png` | Placeholder avatar for member/project cards. |
| `uh-logo.png` | University of Hawaiʻi logo (partner/context). |

> The mark is a stylized **"8"** (rounded square with the equals/binary middle bar) followed by a **pixel/hash "#"** — nodding to *8-bit* computing. Always give it room; pair with the teal background or place on white.

---

## Index — what's in this folder

- **`README.md`** — this file. Brand context, content + visual foundations, iconography.
- **`colors_and_type.css`** — all design tokens (colors, gradients, type, radii, shadows, motion) as CSS variables + base element styles. **Start here when building.**
- **`SKILL.md`** — Agent-Skill manifest so this system works as a downloadable Claude skill.
- **`assets/`** — logos, marks, campus photography, placeholder avatar.
- **`preview/`** — small HTML specimen cards powering the Design System tab (colors, type, components, etc.).
- **`ui_kits/website/`** — high-fidelity recreation of the 8bit marketing site: `index.html` (interactive multi-page click-through) + JSX components (`Navbar`, `Hero`, `BentoTile`, `Button`, `SectionBand`, `ServiceRow`, `ProcessStep`, `Card`, `Footer`, …). The best reference for assembling real pages.
- **`main_app/`** — the original imported source from `8bit-site` (TypeScript/React), kept for reference. Read these for ground truth; build from the kit.

### Quick start
1. Link Google Fonts (Nunito) and `colors_and_type.css`.
2. Build pages as stacked full-width **section bands** (alternating white / color / gradient) joined by wavy dividers.
3. Use `rounded-3xl` cards with `shadow-pop`, pill buttons, eyebrow + Nunito-Black headline per section, and floating blobs on colored bands.
4. Pull components and patterns from `ui_kits/website/`.

---

## Caveats / substitutions
- **Fonts:** **Nunito** is loaded from **Google Fonts** (weights 400/600/700/800/900). The system consolidates display + body onto this one family; the production `8bit-site` uses **Fredoka** for display — set `--font-display` to `'Fredoka'` for an exact match to the live site.
- **Icons:** the repo hand-inlines SVGs (Heroicons-outline + Bootstrap-Icons styles). This system recommends the CDN equivalents rather than copying every glyph.

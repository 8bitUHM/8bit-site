# 8bit Website UI Kit

A high-fidelity, interactive recreation of the **8bit @ UH Mānoa** marketing site (`8bitUHM/8bit-site`), rebuilt as lightweight React + plain CSS so it's easy to lift components for new designs and mocks.

## Run it
Open `index.html`. It's a click-through prototype: navigate **Home → Members → Projects → Services** from the glass navbar. All data is fake/sample.

## Files
| File | Contents |
|------|----------|
| `index.html` | App shell — loads fonts, tokens (`../../colors_and_type.css`), `kit.css`, React + Babel, and the component scripts. |
| `kit.css` | All component styles (bands, cards, buttons, nav, bento, etc.), built on the design tokens. |
| `icons.jsx` | `Icon.*` — inline SVGs lifted verbatim from the site (Heroicons-outline + Bootstrap-Icons + brand marks). |
| `primitives.jsx` | `SectionBand`, `SectionDivider` (wavy), `Eyebrow`, `Button`, `IconBlob`, `StatChip`, `LogoCard`, `Blobs`. |
| `chrome.jsx` | `Navbar` (fixed glass), `Footer`. |
| `cards.jsx` | `BentoTile`, `ProcessStep`, `ServiceRow`, `ProjectCard`, `MemberCard`. |
| `pages.jsx` | `HomePage`, `MembersPage`, `ProjectsPage`, `ServicesPage` (+ sample data). |
| `app.jsx` | `App` — routing state + page transitions. |

## Component coverage
Glass navbar · split hero with logo card, blobs & stat chips · color-banded sections joined by wavy dividers · bento feature tiles · process steps · service rows · project cards (status badges, tags, GitHub CTA) · member cards (leadership swoosh, role badges, socials) · join CTAs · footer.

## How to reuse
Each component reads from the shared tokens, so dropping one into a new page Just Works as long as you link `colors_and_type.css` + `kit.css` and the relevant `.jsx`. Components export to `window` (no bundler) — load order matters: `icons → primitives → chrome/cards → pages → app`.

## Notes on fidelity
- This is a **cosmetic** recreation — interactions are faked, no backend.
- Display type uses **Nunito Black/ExtraBold** (per the design-system direction). The production site uses **Fredoka** for display; swap `--font-display` in `colors_and_type.css` to match the live site exactly.
- Gradients are written as **literal** `linear-gradient()` values in `kit.css` (not `var()`) so static snapshots/PDF exports render correctly.
- Member photos use the repo's `default-member.png` placeholder (no real member photos in the public repo).

Source of truth: https://github.com/8bitUHM/8bit-site

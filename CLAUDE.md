# Inara — Social Entrepreneurship & Advocacy Platform (Homepage Demo)

> **Brand:** Inara — "Light for a Better World"
> **Stack:** HTML5 + CSS3 (custom design system) + Vanilla JS (no frameworks)
> **Goal:** Win the $800–1200 USD project by delivering a polished, responsive, multilingual homepage demo.
> **Deploy target:** Netlify (drag-and-drop ready). Build command: none. Publish dir: `.`

---

## Project Structure

```
CMS/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── translations.js
│   ├── audio-player.js
│   └── script.js
├── images/
│   ├── hero/
│   ├── focus-areas/
│   ├── articles/
│   ├── projects/
│   ├── podcast/
│   └── partners/
├── audio/
├── netlify.toml
├── robots.txt
├── sitemap.xml
├── README.md
└── CLAUDE.md
```

---

## Implementation Plan (check off as completed)

### Phase 1 — Project Foundation
- [x] Initialize git repository (local only, no remote)
- [x] Create folder structure (`css/`, `js/`, `images/*`, `audio/`)
- [x] Author CLAUDE.md with full plan + checkboxes
- [x] Create `.gitignore` (node_modules, .DS_Store, .vscode, etc.)
- [x] Create `netlify.toml` with cache headers + security headers
- [x] Create `robots.txt` + `sitemap.xml` stubs for SEO
- [x] Create `README.md` (project overview, features, deploy steps)
- [x] Commit: "chore: project foundation and configuration"

### Phase 2 — HTML Skeleton (`index.html`)
- [x] Document head: charset, viewport, SEO meta, Open Graph, Twitter card, JSON-LD schema
- [x] Preconnect to Google Fonts + Font Awesome CDN
- [x] `<header>` with logo, nav (7 links), language switcher, search trigger, hamburger
- [x] Mobile nav overlay (slide-in)
- [x] `<section class="hero">` with headline, subheadline, dual CTAs, scroll indicator
- [x] `<section class="focus-areas">` with 8 cards (Health, Education, Justice, Environment, Gender Equality, Sustainable Communities, Economic Growth, Peace & Diplomacy)
- [x] `<section class="articles">` with 6 article cards (category tag, thumbnail, title, excerpt, meta, audio icon)
- [x] `<section class="media">` featured podcast player + 4 episode cards
- [x] `<section class="projects">` featured campaign + 3 campaign cards
- [x] `<section class="partners">` 6 partner logo placeholders + CTA
- [x] `<section class="social">` 3 platform feed mockups (Twitter, Facebook, Instagram)
- [x] Floating social share rail (left side, fixed)
- [x] `<section class="newsletter">` heading + form + trust indicators
- [x] `<footer>` 4-column grid (brand+mission, quick links, focus list, connect) + dev credit + admin link
- [x] Back-to-top button
- [x] All translatable text wrapped with `data-i18n="key"` attributes
- [x] Commit: "feat: semantic HTML structure for all homepage sections"

### Phase 3 — CSS Foundation (`css/style.css`)
- [x] CSS reset (margin, padding, box-sizing, font inheritance)
- [x] `:root` design tokens (colors, fonts, sizes, spacing, shadows, radii)
- [x] Base typography + body styles
- [x] Container + section padding utilities
- [x] Button base styles (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`)
- [x] Smooth scroll + scroll-behavior + scroll-padding-top
- [x] Focus-visible outlines for accessibility

### Phase 4 — Component Styles
- [x] Header (sticky, shadow on scroll, blur backdrop)
- [x] Navigation (desktop horizontal, active underline, hover transitions)
- [x] Language switcher dropdown (EN/UR/AR with flag emojis)
- [x] Search bar (icon-button → expandable input)
- [x] Mobile hamburger animation (3 lines → X)
- [x] Hero (full-bleed image, dark overlay, centered content, animated entrance)
- [x] Focus-area cards (4×2 grid, icon + title + desc + link, hover lift)
- [x] Article cards (3×2 grid, thumbnail with hover zoom, category badge, meta row)
- [x] Featured podcast player (image left, custom HTML5 controls right)
- [x] Episode mini-cards (compact 4-column grid)
- [x] Featured project (spans 2 rows, image bg + overlay)
- [x] Project cards (image with bottom gradient + content)
- [x] Partner logo grid (grayscale → color on hover)
- [x] Social feed cards (3-column dark gradient section)
- [x] Floating share rail (vertical, fixed left, circular icons)
- [x] Newsletter (vibrant green section, inline email form)
- [x] Footer (dark, 4-column grid, hover indent on links)
- [x] Back-to-top button (fixed bottom-right, fade in on scroll)
- [x] Commit: "style: complete design system and component styles"

### Phase 5 — Responsive Design
- [x] Mobile-first breakpoints: 576 / 768 / 992 / 1200 / 1400px
- [x] Mobile nav: full-screen overlay, stagger animations
- [x] Grids collapse: 4→2→1 for focus areas, 3→2→1 for articles
- [x] Hero: reduce font sizes, stack CTAs on small screens
- [x] Newsletter form stacks on mobile
- [x] Floating share rail hidden < 992px
- [x] Touch targets minimum 44×44px
- [x] Commit: "style: responsive layouts for mobile, tablet, desktop"

### Phase 6 — JavaScript Behavior
- [x] `script.js`: mobile menu toggle, hamburger animation, body scroll lock
- [x] Sticky header shadow on scroll
- [x] Search expand/collapse + click-outside-to-close
- [x] Smooth-scroll for anchor links
- [x] Intersection Observer scroll-in animations (`.animate-on-scroll`)
- [x] Back-to-top button show/hide + scroll
- [x] Newsletter form validation + success message
- [x] Social share Web Share API + fallback to platform URLs
- [x] Lazy-load images via `loading="lazy"` attribute

### Phase 7 — Multilingual (EN / UR / AR)
- [x] `translations.js` — full key-value object for all 3 languages
- [x] `switchLanguage(lang)` — updates `[data-i18n]` content + `<html lang>` + `dir` attribute
- [x] RTL CSS overrides (`[dir="rtl"]` selectors for flex direction, text-align, logical margins)
- [x] Arabic/Urdu font stack (Noto Naskh Arabic / Noto Nastaliq Urdu)
- [x] Persist preference to `localStorage` + restore on load

### Phase 8 — Audio Player
- [x] `audio-player.js` — custom controls (play/pause, seek, time, volume, speed, download)
- [x] Visual feedback: play icon morphs to pause, progress bar fills
- [x] Multiple players supported (featured + episode cards)
- [x] Sample audio URL (royalty-free CDN sample)
- [x] Commit: "feat: interactive JS — menu, i18n, audio player, animations"

### Phase 9 — SEO & Accessibility Polish
- [x] Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- [x] Logical heading hierarchy (single H1, H2 per section)
- [x] All images have descriptive `alt` text
- [x] ARIA labels on icon-only buttons (search, hamburger, share, audio controls)
- [x] `aria-current="page"`, `aria-expanded`, `aria-label` where needed
- [x] Skip-to-content link
- [x] Color contrast passes WCAG AA (verified against design tokens)
- [x] Open Graph + Twitter card meta
- [x] JSON-LD Organization schema
- [x] `robots.txt` + `sitemap.xml`

### Phase 10 — Final QA & Commits
- [x] Manual review of every section
- [x] No code comments (per project requirement) — verified via grep
- [x] No hardcoded English in JS (all via translations)
- [x] Final commit: "docs: mark all phases complete in CLAUDE.md"

### Phase 11 — Visual Overhaul & Dark Mode (v2)
- [x] Renamed brand: Inara → **Noor** (tagline: "Light the Way")
- [x] Redesign palette: indigo/violet/pink primary gradient with mint/amber/cyan/rose accents
- [x] Typography upgrade: Plus Jakarta Sans (display) + Inter (body)
- [x] Dark mode toggle in nav (sun/moon icon with rotate animation)
- [x] `data-theme="light|dark"` on `<html>`, localStorage persistence (key `noor.theme`)
- [x] Default to system preference via `prefers-color-scheme` (inline pre-load script prevents FOUC)
- [x] Transparent navbar over hero → glass+solid after scroll
- [x] Glassmorphism on nav, share rail, cards, social feeds, hero stats card
- [x] Refined shadows (color-tinted), gradient borders on focus cards
- [x] Higher-quality, topical Unsplash images across all sections
- [x] Animated hero blobs + gradient text on titles
- [x] Smooth `transition` on theme variables (color, background)
- [x] All accent colors re-mapped for both themes
- [x] Commit "style: v2 modern design system + dark mode"

### Phase 12 — Playwright E2E Tests
- [ ] `package.json` with @playwright/test devDependency + scripts
- [ ] `playwright.config.js` with webServer (npx serve) + 3 browsers
- [ ] `tests/home.spec.js` — page loads, sections render, SEO meta present
- [ ] `tests/navigation.spec.js` — nav links scroll, mobile menu opens
- [ ] `tests/theme.spec.js` — toggle dark/light, localStorage persistence
- [ ] `tests/i18n.spec.js` — language switcher updates content + dir attr
- [ ] `tests/forms.spec.js` — newsletter validation, search behaviour
- [ ] `tests/responsive.spec.js` — mobile / tablet / desktop layouts
- [ ] README updated with `npm test` instructions
- [ ] Commit "test: Playwright end-to-end test suite"

---

## ✅ Build Status

Git history (use `git log --oneline`):
1. `chore: project foundation and configuration`
2. `feat: semantic HTML structure for all homepage sections`
3. `style: complete design system, components, and responsive layouts`
4. `feat: interactive JavaScript layer`
5. `docs: mark all phases complete in CLAUDE.md`
6. *(coming)* `style: v2 modern design system + dark mode`
7. *(coming)* `test: Playwright end-to-end test suite`

To preview: `npx serve .` (or open `index.html` directly).
To run tests: `npm install && npm test`.
To deploy: drag the folder to https://app.netlify.com/drop.

---

## Design System (Quick Reference)

| Token | Value |
|---|---|
| `--primary-blue` | `#2C5F8D` |
| `--primary-dark` | `#1a3a52` |
| `--accent-green` | `#2ECC71` (Environment/Sustainability) |
| `--accent-orange` | `#E67E22` (Education/Growth) |
| `--accent-purple` | `#9B59B6` (Justice/Equality) |
| `--accent-red` | `#E74C3C` (Health) |
| `--font-heading` | Poppins |
| `--font-primary` | Inter |
| `--font-arabic` | Noto Naskh Arabic |
| `--container-max` | 1200px |

---

## Developer Credit (in footer)

- **Hamza Memon** — Full-stack developer
- Email: hamza.memon262830@gmail.com
- WhatsApp: +92 3138113962
- Portfolio: https://hamza-memon-0.github.io/my-portfolio/

---

## Notes for Future Sessions

- Code style: **no comments** in HTML/CSS/JS (client requirement)
- All copy is editable via `translations.js` — do not hardcode strings in markup
- To add a new language, extend the `translations` object and add a `<option>` to `.language-switcher`
- To add a new focus area, add a card in `index.html` + entries in `translations.js` for all 3 languages
- Images are hot-linked from Unsplash for the demo; replace with self-hosted assets before production

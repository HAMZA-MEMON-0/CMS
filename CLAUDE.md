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
- [ ] CSS reset (margin, padding, box-sizing, font inheritance)
- [ ] `:root` design tokens (colors, fonts, sizes, spacing, shadows, radii)
- [ ] Base typography + body styles
- [ ] Container + section padding utilities
- [ ] Button base styles (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`)
- [ ] Smooth scroll + scroll-behavior + scroll-padding-top
- [ ] Focus-visible outlines for accessibility

### Phase 4 — Component Styles
- [ ] Header (sticky, shadow on scroll, blur backdrop)
- [ ] Navigation (desktop horizontal, active underline, hover transitions)
- [ ] Language switcher dropdown (EN/UR/AR with flag emojis)
- [ ] Search bar (icon-button → expandable input)
- [ ] Mobile hamburger animation (3 lines → X)
- [ ] Hero (full-bleed image, dark overlay, centered content, animated entrance)
- [ ] Focus-area cards (4×2 grid, icon + title + desc + link, hover lift)
- [ ] Article cards (3×2 grid, thumbnail with hover zoom, category badge, meta row)
- [ ] Featured podcast player (image left, custom HTML5 controls right)
- [ ] Episode mini-cards (compact 4-column grid)
- [ ] Featured project (spans 2 rows, image bg + overlay)
- [ ] Project cards (image with bottom gradient + content)
- [ ] Partner logo grid (grayscale → color on hover)
- [ ] Social feed cards (3-column dark gradient section)
- [ ] Floating share rail (vertical, fixed left, circular icons)
- [ ] Newsletter (vibrant green section, inline email form)
- [ ] Footer (dark, 4-column grid, hover indent on links)
- [ ] Back-to-top button (fixed bottom-right, fade in on scroll)
- [ ] Commit: "style: complete design system and component styles"

### Phase 5 — Responsive Design
- [ ] Mobile-first breakpoints: 576 / 768 / 992 / 1200 / 1400px
- [ ] Mobile nav: full-screen overlay, stagger animations
- [ ] Grids collapse: 4→2→1 for focus areas, 3→2→1 for articles
- [ ] Hero: reduce font sizes, stack CTAs on small screens
- [ ] Newsletter form stacks on mobile
- [ ] Floating share rail hidden < 992px
- [ ] Touch targets minimum 44×44px
- [ ] Commit: "style: responsive layouts for mobile, tablet, desktop"

### Phase 6 — JavaScript Behavior
- [ ] `script.js`: mobile menu toggle, hamburger animation, body scroll lock
- [ ] Sticky header shadow on scroll
- [ ] Search expand/collapse + click-outside-to-close
- [ ] Smooth-scroll for anchor links
- [ ] Intersection Observer scroll-in animations (`.animate-on-scroll`)
- [ ] Back-to-top button show/hide + scroll
- [ ] Newsletter form validation + success message
- [ ] Social share Web Share API + fallback to platform URLs
- [ ] Lazy-load images via `loading="lazy"` attribute

### Phase 7 — Multilingual (EN / UR / AR)
- [ ] `translations.js` — full key-value object for all 3 languages
- [ ] `switchLanguage(lang)` — updates `[data-i18n]` content + `<html lang>` + `dir` attribute
- [ ] RTL CSS overrides (`[dir="rtl"]` selectors for flex direction, text-align, logical margins)
- [ ] Arabic/Urdu font stack (Noto Naskh Arabic / Noto Nastaliq Urdu)
- [ ] Persist preference to `localStorage` + restore on load

### Phase 8 — Audio Player
- [ ] `audio-player.js` — custom controls (play/pause, seek, time, volume, speed, download)
- [ ] Visual feedback: play icon morphs to pause, progress bar fills
- [ ] Multiple players supported (featured + episode cards)
- [ ] Sample audio URL (royalty-free CDN sample)
- [ ] Commit: "feat: interactive JS — menu, i18n, audio player, animations"

### Phase 9 — SEO & Accessibility Polish
- [ ] Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- [ ] Logical heading hierarchy (single H1, H2 per section)
- [ ] All images have descriptive `alt` text
- [ ] ARIA labels on icon-only buttons (search, hamburger, share, audio controls)
- [ ] `aria-current="page"`, `aria-expanded`, `aria-label` where needed
- [ ] Skip-to-content link
- [ ] Color contrast passes WCAG AA (verified against design tokens)
- [ ] Open Graph + Twitter card meta
- [ ] JSON-LD Organization schema
- [ ] `robots.txt` + `sitemap.xml`

### Phase 10 — Final QA & Commits
- [ ] Manual review of every section
- [ ] No code comments (per project requirement)
- [ ] No hardcoded English in JS (all via translations)
- [ ] Final commit: "feat: Inara homepage demo ready for client review"

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

# Noor — Social Entrepreneurship & Advocacy Platform

> **Tagline:** *Light the Way.*

A modern, fully responsive, multilingual homepage demo for a global social entrepreneurship and advocacy platform. Built with zero frameworks — pure HTML5, CSS3, and vanilla JavaScript — featuring a custom design system, dark mode, glassmorphism nav, and Playwright end-to-end tests.

---

## Live Preview

```bash
npx serve .
# then open http://localhost:3000
```

Or simply open `index.html` directly in any modern browser.

---

## Highlights

| Feature | Description |
|---|---|
| **Dark mode** | Sun/moon toggle in nav, system preference detection, localStorage persistence |
| **Transparent nav** | Glass-blur header that solidifies on scroll |
| **Multi-language** | English, Urdu, Arabic with full RTL layout flip |
| **Audio player** | Custom HTML5 controls — play, seek, speed, volume, download |
| **Article CMS** | Categorised cards with hover zoom and audio badges |
| **Social** | 3-platform feed mockups + floating share rail (6 platforms) |
| **Newsletter** | Validated email form with localized success/error messages |
| **Accessibility** | WCAG 2.1 AA — keyboard nav, ARIA, skip link, reduced-motion support |
| **SEO** | Meta + Open Graph + Twitter card + JSON-LD + sitemap + robots |
| **Animations** | Hero blob fade-in, fade-up on scroll, hover micro-interactions |
| **Performance** | Lazy-loaded images, preconnect hints, zero runtime dependencies |

---

## Design System

- **Palette:** Indigo (`#5B47E0`) → Violet (`#8B5CF6`) → Pink (`#EC4899`) primary gradient with mint, amber, cyan, rose accents
- **Typography:** Plus Jakarta Sans (display) + Inter (body) + Noto Naskh Arabic (Arabic/Urdu)
- **Shadows:** Color-tinted, layered shadows with `--shadow-glow` for primary CTAs
- **Radii:** Pill (999px) for buttons, large (20px) for cards
- **Spacing:** 8px grid with fluid `clamp()` scaling
- **Dark mode:** Full token swap via `[data-theme="dark"]` selector on `<html>`

---

## Focus Areas

1. Health · 2. Education · 3. Justice · 4. Environment
5. Gender Equality · 6. Sustainable Communities · 7. Economic Growth · 8. Peace & Diplomacy

---

## Project Structure

```
.
├── index.html              Main entry — semantic HTML, no comments
├── css/style.css           Design system + components + dark mode + responsive
├── js/
│   ├── translations.js     EN / UR / AR dictionaries (window.NOOR_TRANSLATIONS)
│   ├── audio-player.js     Custom HTML5 audio controls
│   └── script.js           Theme, language, nav, animations, forms, share
├── tests/                  Playwright end-to-end tests
│   ├── home.spec.js
│   ├── navigation.spec.js
│   ├── theme.spec.js
│   ├── i18n.spec.js
│   ├── forms.spec.js
│   └── responsive.spec.js
├── package.json            Test scripts + Playwright devDependency
├── playwright.config.js    Test runner configuration
├── netlify.toml            Deploy config with security + cache headers
├── robots.txt              Crawler directives
├── sitemap.xml             SEO sitemap
└── CLAUDE.md               Phase-by-phase implementation log
```

---

## Testing (Playwright)

```bash
npm install                      # install Playwright
npx playwright install           # download browsers (one-time, ~200 MB)
npm test                         # run all tests (Chromium + Firefox + WebKit)
npm run test:headed              # run with browser UI visible
npm run test:ui                  # open Playwright UI for interactive debugging
npm run test:report              # open the HTML test report
```

Tests cover:
- Page loads, all sections render, SEO meta present
- Navigation: links scroll to sections, mobile menu opens/closes
- Theme: dark/light toggle, localStorage persistence, system preference
- i18n: language switcher updates content + `dir` attribute
- Forms: newsletter validation (empty, invalid, valid)
- Responsive: mobile / tablet / desktop layouts

---

## Deployment

### Netlify (drag & drop)
1. Visit https://app.netlify.com/drop
2. Drag the project folder into the browser
3. Site is live in seconds

### Netlify (Git-connected)
1. Push this repo to GitHub
2. `Add new site → Import from Git → select repo`
3. Build settings — Publish directory: `.` — Build command: leave blank

---

## Developer

**Hamza Memon** — Full-stack web developer

- Email: hamza.memon262830@gmail.com
- WhatsApp: +92 313 811 3962
- Portfolio: https://hamza-memon-0.github.io/my-portfolio/

---

## License

This demo is provided for client review. All assets (Unsplash images, Google Fonts, Font Awesome icons) are subject to their respective licenses.

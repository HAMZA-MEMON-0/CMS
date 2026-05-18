# Inara — Social Entrepreneurship & Advocacy Platform

> **Tagline:** *Light for a Better World.*

A modern, fully responsive, multilingual homepage demo for a global social entrepreneurship and advocacy platform. Built with zero frameworks — pure HTML5, CSS3, and vanilla JavaScript — and deploy-ready for Netlify, Vercel, or any static host.

---

## Live Preview

Open `index.html` directly in any modern browser, or serve the directory:

```bash
npx serve .
# then open http://localhost:3000
```

---

## Focus Areas

Inara advocates across eight pillars of global social change:

1. **Health** — Healthcare access and public-health awareness
2. **Education** — Lifelong learning and educational equity
3. **Justice** — Human rights and equitable legal systems
4. **Environment** — Climate action and conservation
5. **Gender Equality** — Empowering women and marginalised genders
6. **Sustainable Communities** — Resilient local development
7. **Economic Growth** — Inclusive prosperity
8. **Peace & Diplomacy** — Conflict resolution and global cooperation

---

## Features

| Feature | Description |
|---|---|
| Responsive design | Mobile-first, tested down to 320px |
| Multi-language | English, Urdu, Arabic with RTL support |
| Audio integration | Custom HTML5 podcast player + text-to-speech indicators |
| Article CMS demo | Categorised cards with thumbnails, excerpts, audio icons |
| Social integration | Live feed mockups + floating share rail |
| Newsletter | Validated email subscription form |
| Search | Expandable header search input |
| Accessibility | WCAG 2.1 AA — keyboard nav, ARIA labels, semantic HTML |
| SEO | Meta tags, Open Graph, Twitter cards, JSON-LD, sitemap, robots.txt |
| Performance | Lazy-loaded images, preconnect hints, no JS frameworks |

---

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom design system with CSS variables, Grid, Flexbox, fluid typography
- **Vanilla JavaScript** — no jQuery, no React, no build step
- **Google Fonts** — Inter, Poppins, Noto Naskh Arabic
- **Font Awesome 6** — iconography
- **Unsplash** — hot-linked imagery for the demo

---

## Project Structure

```
.
├── index.html              Main entry
├── css/style.css           Design system + all component styles
├── js/
│   ├── translations.js     EN / UR / AR copy
│   ├── audio-player.js     Custom HTML5 audio controls
│   └── script.js           Navigation, animations, forms, share
├── images/                 (placeholder — Unsplash URLs used in demo)
├── audio/                  (placeholder — sample MP3 URL used in demo)
├── netlify.toml            Netlify config (headers, cache)
├── robots.txt              Crawler directives
├── sitemap.xml             SEO sitemap
└── CLAUDE.md               Phase-by-phase implementation log
```

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
4. Deploy

### Custom domain
Site Settings → Domain management → Add custom domain → configure DNS

---

## Developer

**Hamza Memon** — Full-stack web developer

- Email: hamza.memon262830@gmail.com
- WhatsApp: +92 3138113962
- Portfolio: https://hamza-memon-0.github.io/my-portfolio/

---

## License

This demo is provided for client review. All assets used (images from Unsplash, fonts from Google Fonts, icons from Font Awesome) are subject to their respective licenses.

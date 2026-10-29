# DJ Dappa — MoonRae Productions website

React 19 + Vite 6 + Tailwind CSS 4. Five pages (Home, DJ Services, Weddings, Parties, Contact) with
shareable URLs (`/#weddings`), a working inquiry form (opens a pre-filled email to book@djdappa.com,
or copies the text), SEO tags, and an automated test suite.

## Run it on your Mac

You need Node.js 18.18 or newer (check with `node -v`; install the LTS from https://nodejs.org if needed).

```bash
cd ~/Desktop/DJDappa-Website
npm install          # first time only
npm run dev          # opens http://localhost:5173 — edits reload instantly
```

Press `Ctrl + C` in Terminal to stop the server.

## Test it

```bash
npm run test:install # first time only — downloads the test browser
npm test             # builds the site, serves it, runs 70+ checks on desktop + phone sizes
```

The tests cover: every page and deep link, nav active states, back/forward buttons, the phone
menu, no sideways scrolling on phones, contact form validation + pre-filled email + copy button,
every image loading with alt text, safe external links, no console errors, and SEO tags.

## Build for hosting

```bash
npm run build        # production files go to dist/
npm run preview      # check the production build at http://localhost:4173
```

Upload the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## Where things live

| What | File |
| --- | --- |
| Email, Instagram, TikTok, location, page titles | `src/data/site.js` |
| Page content | `src/pages/*.jsx` |
| Header / footer | `src/components/` |
| Brand fonts, neon glow, gradients | `src/index.css` |
| Photos (optimized WebP) | `src/assets/images/` |
| SEO description / social tags | `index.html` |
| Inquiry email format | `src/lib/inquiry.js` |

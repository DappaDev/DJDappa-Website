# DJ Dappa — MoonRae Productions website

React 19 + Vite 6 + Tailwind CSS 4. Six pages (Home, DJ Services, Weddings, Parties, Request, Contact) with
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
| Tip amounts + Stripe links, request form rules | `src/lib/request.js` |
| Request page / DJ booth screen | `src/pages/Request.jsx`, `src/pages/Booth.jsx` |
| Database setup script | `supabase/schema.sql` |

## Song requests + tips

- **`/#request`** (in the menu as **Request**): patrons request a song, add a shout-out, leave their
  name + email (phone and socials optional), opt in to promos, and tip $5–$100 through Stripe.
- **`/#booth`** (not in the menu): your private booth screen. Sign in, tap **Turn on alerts**, and every
  new request chimes and pops up within a few seconds. Mark songs Played/Skip, filter shout-outs,
  export contacts to CSV, and save a printable QR code that opens `djdappa.com/#request`.

### Song requests: Supabase setup (one time, about 10 minutes)

1. Create a free account at https://supabase.com and click **New project** (any name, e.g. `djdappa`).
2. Open **SQL Editor → New query**, paste everything from `supabase/schema.sql`, and click **Run**.
3. Create your booth login: **Authentication → Users → Add user → Create new user** with the email
   `book@djdappa.com` and a strong password. Tick **Auto Confirm User**.
   (Using a different email? Change `book@djdappa.com` in the three policies in `schema.sql` and run it again.)
4. Turn off public sign-ups: **Authentication → Sign In / Providers →** switch off **Allow new users to sign up**.
5. Get your keys: **Project Settings → API** (or the **Connect** button). Copy `.env.example` to a new file
   named `.env.local` in this folder and paste in the **Project URL** and the **publishable** key (older projects call it the **anon public** key).
   Never use the `service_role` key here.
6. Restart `npm run dev`. Open `http://localhost:5173/#request`, send a test request, then open
   `http://localhost:5173/#booth`, sign in, and you'll see it.

When you host the site (Netlify, Vercel, Cloudflare Pages), add the same two values
(`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) as environment variables in the host's settings before building.

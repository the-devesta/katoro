# Katoro – katoro.in

Next.js 15 (App Router), fully static. UI/animations are byte-identical to the original static build
(kept in `legacy-static/` for reference).

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure
- `app/layout.tsx` – metadata (title/description/keywords/canonical/OG/Twitter/geo), next/font (Londrina Solid, Andika), JSON-LD, loads `/lenis.min.js` + `/script.js`
- `app/seo.ts` – JSON-LD graph: Organization, WebSite, Restaurant/LocalBusiness (Vadodara), Menu with all ingredients + per-50g offers, WebPage, starter builds ItemList
- `app/page.tsx` – the page markup (JSX conversion of the static HTML)
- `app/globals.css` – the original stylesheet
- `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts` – `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`
- `public/script.js` – all animations (spring carousel, themes, particles, scroll-appear, Lenis)
- `public/assets/` – images, emoji, logo variants · `public/og.jpg` – social share image

## Waitlist (pre-launch mode)
The site is in pre-launch mode: every "order" CTA points to `#Waitlist`, a form that POSTs to
`/api/interest` (`app/api/interest/route.ts`). Leads are forwarded to whichever backend is configured
via environment variables (set them in Vercel → Project → Settings → Environment Variables):

| Variable | What it does |
|---|---|
| `INTEREST_WEBHOOK_URL` | POSTs each lead as JSON to this URL. Works with Google Apps Script (see below), Make, Zapier, n8n, Sheet.best. |
| `RESEND_API_KEY` + `INTEREST_NOTIFY_EMAIL` | Emails each lead to you via Resend. Optional `INTEREST_FROM_EMAIL`. |

Both can be set; either one is enough. If none is set in production the API returns 503 and the form
falls back to a prefilled WhatsApp message so no lead is lost. In `npm run dev` with nothing set, leads
append to `.data/interests.jsonl` (gitignored).

Google Sheet in 3 minutes: new Sheet → Extensions → Apps Script → paste:
```js
function doPost(e){const d=JSON.parse(e.postData.contents);const s=SpreadsheetApp.getActiveSheet();
if(s.getLastRow()===0)s.appendRow(["at","name","phone","area","diet","source","ua"]);
s.appendRow([d.at,d.name,d.phone,d.area,d.diet,d.source,d.ua]);return ContentService.createTextOutput("ok");}
```
Deploy → New deployment → Web app → Execute as *Me*, access *Anyone* → copy the URL into `INTEREST_WEBHOOK_URL`.

Lead payload: `{ name, phone, area, diet ("jain"|"vegan"|"veg"|""), source, ua, at }`. Honeypot field `website` drops bots silently.

Branch `v1-deployed` holds the previous "order now" version of the site.

## Deploy (Vercel recommended)
1. Push to GitHub, import in Vercel, framework auto-detected.
2. Add domain `katoro.in` + `www.katoro.in` (redirect www → apex) in Vercel → Domains, set the DNS records it shows.
3. After DNS is live: Google Search Console → add property `katoro.in` (Domain) → submit `https://katoro.in/sitemap.xml`.
4. Bing Webmaster Tools → import from Search Console.
5. Create Google Business Profile "Katoro" (Vadodara, delivery-only, category: Noodle shop / Vegetarian restaurant), same phone/email/hours as the site, link to katoro.in and Instagram/Facebook @katoro.in.

## Before launch – replace placeholders
- Phone `+91 90000 00000`, WhatsApp link, `hello@katoro.in`, hours, FSSAI number (`app/page.tsx`, `app/seo.ts`)
- Ingredient prices and starter-build prices (`app/page.tsx` and `app/seo.ts` must match)
- `app/seo.ts` → `SAME_AS` social URLs, `postalCode`, `geo` coordinates of the kitchen area

# Project Specs — Gold Coast Helitours Redesign

## What the app does and who uses it
A single-page marketing website for **Gold Coast Helitours**, a helicopter scenic-flight
and charter operator based at Marina Mirage, Gold Coast, Australia. Visitors are
prospective customers who want to learn about flights/charters, see special-occasion
packages, and get in touch / book.

This is a **redesign** of their existing site. The design was mocked up in HTML/CSS/JS
via Claude Design and handed off to be rebuilt for real. The mood is **cinematic, bold,
photography-forward** while preserving the brand identity (orange / black / white).

## Tech stack
- **Language:** TypeScript
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + a ported global stylesheet (the design's hand-crafted CSS)
- **Animation:** GSAP + ScrollTrigger (hero timeline, scroll reveals, parallax, stat counters)
- **Hosting:** Vercel (static — no backend needed for this build)

## Pages and user flows
Single public page (`/`) with anchor-linked sections:
1. Announcement bar
2. Sticky nav (shrinks on scroll) + mobile drawer
3. Hero (full-viewport, cinematic image, animated headline)
4. Special Occasions / Offers (two product cards)
5. GC Cards strip
6. Aeronautical Excellence (copy + animated stats + Queensland badges)
7. Full-bleed photo band (parallax)
8. Recent Events (video frame)
9. Contact (details + form + map)
10. Holiday closures
11. Footer

All navigation is in-page anchor scrolling. No authenticated views.

## Data models / storage
None. All content is static and hard-coded (mirrors the design exactly). The contact
form is presentational only (no submission backend in this build), matching the design.

## Third-party services
- Google Fonts (Space Grotesk, Cormorant Garamond, Inter, Space Mono)
- Google Maps embed (iframe) for the location

## What "done" looks like
- `npm run build` passes with no TypeScript/build errors
- `npm run dev` runs with no console errors
- Every section from the design is present with identical content
- Brand colors/fonts match the design tokens
- GSAP animations are tasteful and refined (reduced-motion respected)
- Layout is responsive (desktop, tablet, mobile drawer)

---

## ADDENDUM — "About Us" section redesign (in progress)

The site has grown past a single page. Charter, Scenic Flights, Special Occasions and
Specialised Operations now have their own routes. This addendum covers the **About Us**
group, which currently only points the nav at `/#aero`. We add a dropdown with 5 premium
sub-pages, redesigned from the legacy site (goldcoasthelitours.com.au) to match our
cinematic design language (hero + scrim + grain, `eyebrow`/`serif-em` headings, reveal
animations, `wrap`/`section` rhythm, orange accent).

### Pages & routes (mirror legacy URLs)
1. **/our-fleet** — "Our Fleet". Hero + an elegant grid of aircraft cards. 7 helicopters
   (3× Eurocopter 350B2 Squirrel H125, 1× Eurocopter 350BA Squirrel H125, 1× Bell 206L
   Long Ranger, 2× Robinson R44 Clipper II) each with photo, model, registration,
   description and a clean spec row (Engine / Range / Cruise Speed). MV Helitours (mobile
   marine helipad) shown as a closing feature panel.
2. **/facilities** — "Facilities". Hero + intro + alternating feature rows using the
   heliport and engineering-hangar photos + a small stats/highlight strip.
3. **/faq** — "FAQ". Hero + premium animated accordion (one-question-open), content from
   the legacy FAQ verbatim.
4. **/booking-policies** — "Booking Policies / Terms & Conditions". Hero + clean policy
   cards (Minimum flight, Deposit & payment, Cancellation, No-show, Weights, Age, Gift
   vouchers, Privacy). Content verbatim from legacy Terms & Conditions.
5. **/privacy-policy** — "Privacy Policy". Hero + readable long-form legal layout.

### Nav change
- Replace the single `About us → /#aero` link with a dropdown (same `nav-dd` pattern as
  Charter) whose parent still links to `/#aero` and whose children are the 5 pages above.
- Add the same group to the mobile drawer (`mm-group`).

### Data / components
- New `components/aboutData.ts` — fleet array, FAQ array, policy sections, privacy blocks.
- New components: `FleetLanding`, `Facilities`, `Faq` (client, accordion), `PolicyPage`
  (reused for booking-policies & privacy-policy, or two thin wrappers).
- New page routes under `/app` wrapping `Nav` + component + `Footer` + `GsapProvider`.
- New CSS appended to `globals.css` (fleet grid/spec, accordion, policy cards).

### Assets to fetch from legacy site
- 8 fleet images (7 helicopters + MV Helitours) → `/public/assets/fleet/`
- 2 facilities images (heliport exterior, engineering hangar) → `/public/assets/facilities/`

### Done =
- 5 pages build & render, responsive, no console errors
- Dropdown works on desktop + mobile, content matches legacy verbatim
- Visual language consistent with the rest of the redesign

---

## ADDENDUM 2 — Contact Us page (done)

New dedicated `/contact-us` route (redesigned from legacy `contact-4`). Nav "Contact Us"
now links here (was `/#aero`-style `/#contact`). The home `#contact` section stays as a
quick-contact for in-page CTAs.

- `components/ContactPage.tsx` (client — form) + `app/contact-us/page.tsx`.
- Sections: compact hero → info cards (address/email/phone/hours) + message form (reuses
  the existing `.form-card`/`.field` styles) → "Getting to the marina" (dark) with the
  annotated aerial map + parking list + how-to-find copy → 9-step visual tour grid →
  Google map embed.
- Assets fetched from legacy `contact-4` → `/public/assets/contact/` (aerial.jpg +
  step1–step9.jpg; steps 6–9 were EXIF-rotated to upright).

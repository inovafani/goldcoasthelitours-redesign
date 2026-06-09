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

# XhinesSystems — Contractor Website Landing Page

A single-page, mobile-first lead generation landing page built for paid social traffic (Facebook / Instagram). Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

Audience: contractors, roofers, HVAC techs, electricians, plumbers, landscapers, painters, and general contractors who need a professional website.

## What this page does

- Drives traffic from paid ads to a single goal: fill out the form.
- No nav, no footer links, no distractions.
- Form POSTs to a GoHighLevel (or any) webhook, then redirects to `/thank-you`.
- `/thank-you` embeds a GHL (or any) calendar widget iframe for booking.

## Tech

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Fonts: Oswald (headlines) + DM Sans (body), loaded via `next/font` for zero-CLS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configure your webhooks

Before going live, open these two files and replace the placeholder strings:

### 1. Form webhook

`components/LeadForm.tsx`

```ts
const webhookURL = "PASTE_YOUR_GHL_WEBHOOK_URL_HERE";
```

The form sends a POST with JSON body:

```json
{
  "name": "...",
  "phone": "...",
  "trade": "...",
  "city": "..."
}
```

### 2. Calendar widget

`app/thank-you/page.tsx`

```ts
const calendarURL = "PASTE_YOUR_GHL_CALENDAR_WIDGET_URL_HERE";
```

### 3. (Optional) Update site metadata

`app/layout.tsx` — update `SITE_URL`, social `images`, and description to match your final domain.

## Replacing mockup screenshots

The Social Proof section currently renders two CSS-drawn phone mockups as placeholders. To swap in real screenshots:

1. Drop images into `public/` (e.g. `public/mockup-roofing.png`).
2. Open `components/SocialProof.tsx` and replace the inline `PhoneMockup` markup with `<img src="/mockup-roofing.png" ... />` wrapped in the same device frame.

## Deployment (Vercel)

```bash
npm i -g vercel
vercel
```

Or push the repo to GitHub and import it at [vercel.com/new](https://vercel.com/new). No environment variables required.

## Project structure

```
app/
  layout.tsx        # Fonts, metadata, OG tags
  page.tsx          # Landing page (composes all sections)
  thank-you/
    page.tsx        # Post-submit calendar booking page
  globals.css       # Tailwind + design tokens
components/
  Hero.tsx
  Problem.tsx
  WhatYouGet.tsx
  SocialProof.tsx
  LeadForm.tsx
  FinalCTA.tsx
public/
  favicon.svg
  robots.txt
```

## Design tokens

| Token      | Value     | Use                 |
| ---------- | --------- | ------------------- |
| `bg`       | `#0A0A0A` | Page background     |
| `bgElev`   | `#121212` | Cards / form bg     |
| `accent`   | `#FF6B00` | CTAs, highlights    |
| `ink`      | `#F5F5F5` | Body text           |
| `muted`    | `#A3A3A3` | Secondary text      |
| `line`     | `#1F1F1F` | Borders / dividers  |

# Webora — Web Design Solutions

A premium, responsive agency website built with Next.js, TypeScript and CSS.

## Stack
- Next.js
- React
- TypeScript
- Lucide React
- CSS with responsive breakpoints

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before launch
Replace the placeholder phone number, WhatsApp number, email, project names, testimonials, pricing and portfolio content with your real business details.

## Brand
- Charcoal: #0D0D0F
- Dark Gray: #1A1D24
- Off White: #F7F7F8
- Electric Blue: #2563FF
- Soft Purple: #8B5CF6
- Primary font: Poppins
- Secondary font: Inter

## Latest refinement
The hero section spacing was adjusted so the feature row no longer sits underneath the trust/statistics bar, with improved desktop and mobile spacing.

## Pricing and quote flow
The pricing page provides package cards and a project enquiry form. The current form prepares a mailto enquiry to `krishna.kr.1302@gmail.com`; replace this with a real email/CRM API before production.

## Production email setup

The quote and contact forms now submit to `/api/contact` instead of opening the visitor's email application. The API sends enquiries through Resend to `krishna.kr.1302@gmail.com`.

For local development:
1. Create a Resend account and API key.
2. Copy `.env.example` to `.env.local`.
3. Set `RESEND_API_KEY`.
4. For production, verify your Webora domain in Resend and set `RESEND_FROM_EMAIL` to an address on that verified domain.
5. Restart `npm run dev`.

## SEO / Production configuration

Before deployment, set the public production URL:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This value is used by the sitemap, robots.txt and structured data. Do not commit `.env.local` or any API keys.

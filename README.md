# RICO Luxury Solar Energy Website

A Next.js starter codebase for the RICO Cape Town solar lead-generation platform.

## Included

- Responsive premium navy/gold UI
- Homepage and core launch pages
- Quick-quote lead form
- Server-side form validation
- n8n webhook integration point
- WhatsApp, email and click-to-call paths
- Rule-based Solar Assistant prototype
- Partner application prototype
- SEO-ready page structure
- Sanity schema starters
- Mobile sticky conversion actions
- UTM capture for lead attribution

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Before production

1. Replace placeholder contact details in `lib/site.ts`.
2. Create the Sanity project and connect the schemas.
3. Connect `/api/leads` to HubSpot or Zoho.
4. Configure n8n for email, CRM, internal alerts and lead routing.
5. Add production email through Resend, Postmark or SendGrid.
6. Add GA4, GTM, Search Console and cookie consent.
7. Replace all placeholder content and imagery with client-approved assets.
8. Add POPIA-reviewed privacy, cookie and terms content.
9. Add spam protection and rate limiting.
10. Test all forms, WhatsApp links, call links and mobile breakpoints.

## Architecture

Browser → Next.js forms → server API route → n8n → CRM + email + internal notification

Sanity CMS → Next.js content rendering → Vercel deployment

Cloudflare → DNS/CDN/security

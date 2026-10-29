# Abhinav Shrestha — Free AI Marketing Consultation

A mobile-first Next.js landing page and thank-you flow for a free one-to-one AI marketing consultation.

## Local setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and add the site URL, Vimeo URL, and WhatsApp number (country code and digits only, without `+`).
3. Confirm `public/logo.png` contains the final 944 × 264 transparent logo.
4. Start the local site with `npm run dev`.
5. Open the local URL shown in the terminal.

## Vercel deployment

1. Push the project to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected Next.js framework settings.
4. Add `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_VIMEO_URL`, and `NEXT_PUBLIC_WHATSAPP_NUMBER` in **Settings → Environment Variables**.
5. Deploy, then update `NEXT_PUBLIC_SITE_URL` to the final production domain and redeploy.

## Before you go live

- Confirm the logo displays correctly on mobile.
- Add the Vimeo URL and WhatsApp number.
- Connect a real form backend in `lib/submitLead.ts`, then set `LEAD_BACKEND_CONNECTED = true` in `lib/config.ts`.
- Test the form and WhatsApp link on a real phone.
- Test at 320 px, 375 px, 390 px, and 430 px widths.

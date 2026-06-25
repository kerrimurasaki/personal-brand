# Kerri Murasaki — Personal Brand Site

Built with Next.js 15 + Tailwind v4, following the **Refined** design skill (`../refined/`).

## Run

```bash
cd site
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/globals.css` — Refined design tokens as CSS custom properties (light + dark via `prefers-color-scheme`)
- `app/layout.tsx` — Newsreader (serif) + Plus Jakarta Sans (sans) via `next/font`
- `app/page.tsx` — assembles all sections
- `components/` — one file per section (Hero, About, Work, Services, Writing, Talks, Testimonials, Contact, Footer)

## TODO before publishing

Search for `TODO:` in the codebase. Mostly:

- Replace Unsplash placeholder images in `components/Hero.tsx`, `components/About.tsx`, `components/Work.tsx` with your own assets
- Verify project links in `components/Work.tsx`
- Confirm social handles in `components/Contact.tsx` and `components/Nav.tsx`
- Wire `Writing` essay links to real posts when you publish them

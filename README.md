# Hotel Klima homepage concept

Modern multilingual Astro website created locally in `C:\SoftwareProjects\HomepageHotelKlima`.

## Stack

- Astro 7
- Static pages for German, English and Italian
- Curated image set copied from `F:\Documents\Klima\Eigene Dateien\Eigene Bilder\KlimaNewWebsite`

## Local development

```powershell
npm install
npm run dev
```

## Production build

```powershell
npm run build
```

The build output is generated in `dist\`.

## Suggested launch workflow

1. Review and adjust texts, prices and contact details locally.
2. Replace or add final photos in `src\assets\hotel`.
3. Push the project to GitHub.
4. Connect the repository to Vercel or Netlify for preview deployments.
5. Point the real domain to the approved production deployment.

## SEO

- Production domain is set in `astro.config.mjs` (`site: 'https://www.hotel-klima.com'`). It is used for canonical URLs, hreflang links, social previews and the sitemap.
- `npm run build` generates `sitemap-index.xml`; `public/robots.txt` points to it.
- Page titles and descriptions live in `src/data/site.ts` (`meta`), structured hotel data (schema.org `Hotel`) in `src/pages/[lang]/index.astro`.
- After going live: add the domain to Google Search Console, submit `https://www.hotel-klima.com/sitemap-index.xml`, and keep the Google Business Profile in sync.

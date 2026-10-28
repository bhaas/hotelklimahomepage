// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production domain: used for canonical URLs, hreflang links, social previews and the sitemap.
export default defineConfig({
  site: 'https://www.hotel-klima.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://www.hotel-klima.com/',
      i18n: {
        defaultLocale: 'de',
        locales: { de: 'de', en: 'en', it: 'it' },
      },
    }),
  ],
});

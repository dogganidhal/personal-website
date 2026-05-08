import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ndogga.com',
  integrations: [
    UnoCSS({ injectReset: true }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          fr: 'fr-FR',
        },
      },
    }),
  ],
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

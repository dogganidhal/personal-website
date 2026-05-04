import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro';

export default defineConfig({
  site: 'https://ndogga.com',
  integrations: [UnoCSS({ injectReset: true })],
});

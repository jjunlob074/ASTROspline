// @ts-check
import { defineConfig } from 'astro/config';


import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  adapter: vercel()
});
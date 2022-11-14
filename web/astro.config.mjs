import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import {defineConfig} from 'astro/config';

// https://astro.build/config
import image from '@astrojs/image';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-moon-landing.netlify.app/',
  integrations: [
    tailwind(),
    react(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    astroI18next(),
  ],
  vite: {
    ssr: {
      external: ['@11ty/eleventy-img', 'svgo'],
    },
  },
});

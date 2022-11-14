import type {AstroI18nextConfig} from 'astro-i18next';

const config: AstroI18nextConfig = {
  defaultLocale: 'en',
  locales: ['en', 'de'],
  i18nextServer: {
    debug: true,
  },
  i18nextClient: {
    debug: true,
  },
  routes: {
    de: {imprint: 'impressum', privacy: 'datenschutz'},
  },
};

export default config;

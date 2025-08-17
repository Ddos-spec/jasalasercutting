// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jasalasercutting.com',
  base: '/jasalasercutting', // Sesuaikan dengan path di kode Anda
  
  integrations: [tailwind(), sitemap()],
  
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@styles': '/src/styles',
        '@utils': '/src/utils'
      }
    }
  },
  
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets'
  },
});
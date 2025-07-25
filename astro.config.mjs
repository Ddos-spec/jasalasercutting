import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // WAJIB: Konfigurasi untuk deploy ke GitHub Pages
  // Ganti 'ddos-spec' dengan username GitHub lu
  // Ganti 'jasalasercutting' dengan nama repository lu
  site: 'https://ddos-spec.github.io',
  base: '/jasalasercutting',
  
  integrations: [tailwind()],
  
  // CRITICAL: Custom routing untuk file di root src/
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
  
  // Custom build configuration
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets'
  },
});
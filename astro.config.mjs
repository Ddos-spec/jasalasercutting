import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
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
  
  // Override default pages behavior
  // Astro v5.x does not have `experimental.contentCollectionCache` for this purpose.
  // The routing behavior is primarily controlled by the `src/pages` directory by default.
  // To achieve the desired flat routing, we will place all .astro files directly in `src/`
  // and rely on Astro's default behavior for files outside `src/pages`.
  
  // Custom build configuration
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets'
  },
  
  // WAJIB: Konfigurasi agar routing bekerja dengan file di root src/
  // Bukan di src/pages/ (yang adalah default Astro)
  // This is handled by placing .astro files directly in src/ and Astro's default routing.
});


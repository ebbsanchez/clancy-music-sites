// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deployed to GitHub Pages (project site). Production lives at
// `${site}${base}`; PR previews rebuild with a nested base so their asset
// URLs resolve correctly under /pr-preview/pr-N/. The base is injected via
// PUBLIC_BASE_PATH by the CI workflows — default is the production base.
const base = process.env.PUBLIC_BASE_PATH ?? '/clancy-music-sites';

// https://astro.build/config
export default defineConfig({
  site: 'https://ebbsanchez.github.io',
  base,
  trailingSlash: 'ignore',
  vite: {
    // Cast avoids a false-positive type clash between Astro's bundled Vite
    // and the top-level Vite install; the plugin works at runtime.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});

// @ts-check
import { defineConfig } from 'astro/config';

// Deployed as a GitHub Pages project site: https://doombuoy.github.io/Portfolio/
export default defineConfig({
  site: 'https://doombuoy.github.io',
  base: '/Portfolio',
  trailingSlash: 'ignore',
});

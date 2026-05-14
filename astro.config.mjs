import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://lgd.khammami.tn',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    mdx(),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

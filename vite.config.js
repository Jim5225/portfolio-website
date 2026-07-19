import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog.html'),
        admin: resolve(__dirname, 'admin.html'),
        blogReduceCpl: resolve(__dirname, 'blog/reduce-cpl-meta-ads-ai.html'),
        blogAiAutomationStack: resolve(__dirname, 'blog/ai-automation-stack-2025.html'),
        blogPortfolioLosingClients: resolve(__dirname, 'blog/portfolio-losing-clients-fix.html'),
      }
    },
    minify: 'terser',
    cssMinify: true,
  },
  server: {
    port: 3000,
    open: true,
  }
});

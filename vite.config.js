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
        blogSeoTips: resolve(__dirname, 'blog/seo-tips-2025.html'),
        blogFacebookAds: resolve(__dirname, 'blog/facebook-ads-guide.html'),
        blogWebPerformance: resolve(__dirname, 'blog/web-performance.html'),
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

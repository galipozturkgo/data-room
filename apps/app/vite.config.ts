/// <reference types='vitest' />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { analyzer } from 'vite-bundle-analyzer';
import { compression } from 'vite-plugin-compression2';
import inspect from 'vite-plugin-inspect';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/app',
  server: {
    port: 4100,
    host: 'localhost',
  },
  preview: {
    port: 4100,
    host: 'localhost',
  },
  plugins: [
    react(),
    compression(),
    inspect({
      build: true,
      outputDir: './inspect',
    }),
    analyzer({
      openAnalyzer: true,
      analyzerMode: 'static',
      fileName: '../inspect/stats.html',
    }),
  ],
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      treeshake: {
        moduleSideEffects: false,
      },
    },
  },
}));

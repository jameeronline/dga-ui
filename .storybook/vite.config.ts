import { defineConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(dirname, '../src'),
      '@/components': path.resolve(dirname, '../src/components'),
      '@/stories': path.resolve(dirname, '../src/stories'),
      '@/styles': path.resolve(dirname, '../src/styles'),
      '@/utils': path.resolve(dirname, '../src/utils'),
      '@/types': path.resolve(dirname, '../src/types'),
      '@/config': path.resolve(dirname, '../src/config'),
      '@/data': path.resolve(dirname, '../src/data'),
    },
  },
});
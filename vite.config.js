import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, join } from "path";
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  plugins: {
    viteStaticCopy: {
      targets: {
        src: 'assets',
        dest: join(__dirname, 'dist')
      }
    }
  }
})

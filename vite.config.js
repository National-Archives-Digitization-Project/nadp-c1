import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";


// https://vitejs.dev/config/
export default defineConfig({
  base: "https://nadpclient.vercel.app/",
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, 'dist'),
    sourcemap: false,
    emptyOutDir: false
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";


// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "./dist",
    sourcemap: false,
    emptyOutDir: false
  },
  resolve: {
    alias: {
      "#": resolve(__dirname, "src/assets"),
      "@": resolve(__dirname, "src"),
    }
  }
})

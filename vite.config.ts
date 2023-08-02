import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // https://vitejs.dev/guide/features.html#typescript
    // https://stackoverflow.com/a/76020900
    checker({
      typescript: true,
    }),
  ],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: "https://localhost:7287",
        changeOrigin: true,
        secure: false,
      }
    }
  }
})

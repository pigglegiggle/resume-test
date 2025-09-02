import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    allowedHosts: ['sinpw.site','localhost'],
    host: true,
    port: 5173,
    watch: {
      usePolling: true
    }
  }
})

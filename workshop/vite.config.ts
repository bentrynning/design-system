import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, '.'),
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Mirror the design system's own `@/` alias so stories can import
      // directly from source without building first.
      '@': path.resolve(__dirname, '../src'),
    },
  },
  server: {
    port: 6006,
    open: true,
  },
})

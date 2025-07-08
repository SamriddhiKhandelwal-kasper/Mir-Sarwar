import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // <-- ADD THIS LINE
  plugins: [
    react({
      include: "**/*.{jsx,tsx,js}",
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  }
})

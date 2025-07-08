import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
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
});

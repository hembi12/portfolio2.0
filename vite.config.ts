import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'  // Importa path de Node

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

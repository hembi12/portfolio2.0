import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    process.env.ANALYZE === 'true' && visualizer({
      filename: 'bundle-report.html',
      open: false, // Solo abrir manualmente cuando sea necesario
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean), // Filtra plugins para evitar errores cuando ANALYZE=false
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-core';
            if (id.includes('framer-motion')) return 'motion';
            if (id.includes('react-toastify')) return 'toastify';
            if (id.includes('react-icons')) return 'icons';
            if (id.includes('i18next') || id.includes('react-i18next')) return 'translations';
            if (id.includes('lodash') || id.includes('date-fns')) return 'utils';
            if (id.includes('@radix-ui')) return 'radix-ui'; // Para tooltips u otros componentes
            return 'vendor'; // Otras dependencias
          }
        },
      },
    },
    chunkSizeWarningLimit: 500, // Mantiene alertas realistas sin ser demasiado permisivo
  },
});

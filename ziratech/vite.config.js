

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  
 
  optimizeDeps: {
    include: ['react-icons'],
  },

  build: {
    rollupOptions: {
      output: {
        
        manualChunks(id) {
          if (id.includes('react-icons')) {
            return 'vendor-icons';
          }
        },
      },
    },
  },
});

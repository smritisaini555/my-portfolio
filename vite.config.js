import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@react-three/drei'], // Ensure Vite pre-bundles this dependency
    esbuildOptions: {
      // Resolve issues with CommonJS dependencies, if needed
      target: 'esnext',
    },
  },
  server: {
    // Adjust server settings to avoid timeouts
    port: 3000, // Optional: Change the port if needed
    strictPort: true, // Prevent port fallback to ensure debugging consistency
    open: true, // Automatically open the app in the browser
    timeout: 60000, // Increase timeout to 60 seconds
  },
  resolve: {
    alias: {
      // Ensure proper resolution of dependencies
      '@': '/src',
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // Fix issues with mixed ESM/CJS modules
    },
  },
});
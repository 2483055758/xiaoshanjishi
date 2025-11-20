import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: This ensures assets are loaded correctly when deployed to GitHub Pages subdirectories
  base: './', 
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
});
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mappingQ/',
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate Three.js and React Three Fiber into their own chunk
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          // Separate React Router
          'router': ['react-router-dom'],
          // React core libraries
          'react-vendor': ['react', 'react-dom']
        }
      }
    },
    // Increase chunk size warning limit to 1000kb (optional, but helps with large libraries)
    chunkSizeWarningLimit: 1000
  }
})


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'harry-potter-microfrontend',
      filename: 'remoteEntry.js',
      exposes: {
        './characterGallery':
          './src/components/characterGallery/characterGallery.tsx',
        './characterDetails':
          './src/components/characterDetails/characterDetails.tsx',
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'styled-components'],
    }),
  ],
  server: {
    port: 3006,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    outDir: 'build',
  },
})

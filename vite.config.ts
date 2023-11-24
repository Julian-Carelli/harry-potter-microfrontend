import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "harry-potter-microfrontend",
      filename: "remoteEntry.js",
      exposes: {
        "./Data2": "./src/Data2.tsx"
      },
      shared: ["react", "react-dom", "styled-components"]
    })
  ],
  server: {
    port: 3006
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    outDir: "build",
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages sirve desde /nombre-del-repo/
  // Cambia 'manero' por el nombre exacto de tu repositorio en GitHub
  base: '/manero/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    allowedHosts: true
  }
})

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { join } from 'path'

export default defineConfig({
  root: join(__dirname, 'src/renderer'),
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@render': join(__dirname, 'src/renderer'),
      '@main': join(__dirname, 'src/main')
    }
  },
  base: './',
  build: {
    outDir: join(__dirname, 'dist/render'),
    emptyOutDir: true
  }
})
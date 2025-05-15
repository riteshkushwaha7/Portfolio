import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync } from 'fs'

export default defineConfig({
  base: '/',
  plugins: [
    tailwindcss(),
    react(),
    {
      name: 'copy-redirects',
      closeBundle() {
        console.log('Copying _redirects file now...')
        copyFileSync('public/_redirects', 'dist/_redirects')
      }
    }
  ]
});


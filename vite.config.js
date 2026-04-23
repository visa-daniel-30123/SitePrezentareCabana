import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const pagesBase = repositoryName ? `/${repositoryName}/` : '/'

export default defineConfig({
  plugins: [react()],
  // Use repository path on GitHub Pages to avoid white screen from missing assets.
  base: pagesBase,
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})

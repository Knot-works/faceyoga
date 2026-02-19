import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages deployment: set base to repo name
  // For user/org pages (username.github.io), use '/'
  // For project pages (username.github.io/repo-name), use '/repo-name/'
  base: command === 'build' ? process.env.BASE_PATH || '/' : '/',
}))

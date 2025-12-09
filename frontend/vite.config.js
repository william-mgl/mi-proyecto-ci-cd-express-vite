import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // ¡Añade esta línea! Es la que soluciona la pantalla en blanco en GitHub Pages.
  base: '/mi-proyecto-ci-cd-express-vite/',
})
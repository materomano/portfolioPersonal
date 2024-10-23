import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mateoromano/', // Asegúrate de usar la ruta correcta de tu proyecto en Vercel
})

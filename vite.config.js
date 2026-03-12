import { defineConfig } from 'react'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portafolio_Michel_Massaad/', // ¡Asegúrate de que tenga las barras al inicio y al final!
})
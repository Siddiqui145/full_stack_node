import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000', //append and also when some one navigates to this then the origin is must from this
    }
  },
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // cho phép network access
    port: 5173,
    // Thêm dòng này public ngrok:
    allowedHosts: ["8eeae0d4b9ea.ngrok-free.app"],
  },
});

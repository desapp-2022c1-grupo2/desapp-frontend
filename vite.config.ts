import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, './src/assets'),
      "@components": path.resolve(__dirname, './src/components'),
      "@models": path.resolve(__dirname, './src/models'),
      "@pages": path.resolve(__dirname, './src/pages'),
      "@router": path.resolve(__dirname, './src/router'),
      "@services": path.resolve(__dirname, './src/services'),
      "@store": path.resolve(__dirname, './src/store'),
      "@adminPages": path.resolve(__dirname, './src/pages/Admin'),
      //"@JtpPages": path.resolve(__dirname, './src/pages/JTP'),
    }
  }
})

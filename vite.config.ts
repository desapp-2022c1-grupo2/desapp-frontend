import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  resolve: {
    alias: [
      { find: '@src', replacement: path.resolve(__dirname, 'src') },
      { find: '@adapters', replacement: path.resolve(__dirname, 'src/adapters') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@const', replacement: path.resolve(__dirname, 'src/const')},
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@models', replacement: path.resolve(__dirname, 'src/models') },
      { find: '@router', replacement: path.resolve(__dirname, 'src/router') },
      { find: '@services', replacement: path.resolve(__dirname, 'src/services') },
      { find: '@store', replacement: path.resolve(__dirname, 'src/store') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@util', replacement: path.resolve(__dirname, 'src/util') },
      //pages
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@adminPages', replacement: path.resolve(__dirname, 'src/pages/Admin') },
      { find: '@LoginPage', replacement: path.resolve(__dirname, 'src/pages/Login') },
    ],
  },
})

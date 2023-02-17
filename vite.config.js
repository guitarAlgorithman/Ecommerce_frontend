import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Ecommerce_frontend/',
  resolve: {
    alias: {
      web3: 'web3/dist/web3.min.js',
    },


  },
})


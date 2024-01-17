import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~bootstrap-icons': path.resolve(__dirname, 'node_modules/bootstrap-icons'),
      '~socicon': path.resolve(__dirname, 'node_modules/socicon'),
      '~@fortawesome': path.resolve(__dirname, 'node_modules/@fortawesome'),
      '~line-awesome': path.resolve(__dirname, 'node_modules/line-awesome'),
      '~prism-themes': path.resolve(__dirname, 'node_modules/prism-themes'),
      '~animate.css': path.resolve(__dirname, 'node_modules/animate.css'),
      '~nouislider': path.resolve(__dirname, 'node_modules/nouislider'),
    }
  }
})

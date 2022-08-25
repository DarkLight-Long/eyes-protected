import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // electron 本地访问时，访问的为3000端口
  server: {
    port: 3000
  },
  // 打包后静态文件访问问题解决
  base: './',
  build: {
   rollupOptions: {
    // webpack分文件打包效果
    output: {
      chunkFileNames: "static/js/[name]-[hash].js",
      entryFileNames: "static/js/[name]-[hash].js",
      assetFileNames: "static/[ext]/[name]-[hash].[ext]"
    }
   }
  }
})

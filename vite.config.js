import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  base: '/GalaxyERP-Home/',
  plugins: [vue()],
  resolve: {
    alias: {
      // 让 modules/img/xxx.png 解析到 src/assets/pod/img/xxx.png
      'modules': fileURLToPath(new URL('./src/assets/pod', import.meta.url)),
    },
  },
})

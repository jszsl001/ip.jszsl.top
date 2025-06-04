import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // 替换为您的 GitHub 仓库名称
  plugins: [vue()],
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  imports: {
    autoImport: true, // 启用自动导入
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt'
  ],
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/pinia.js'
  ],
  css: [
    '@/assets/styles/main.scss',
    '@/assets/styles/tailwind.css',
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/display.css',
    '@/assets/styles/resetElement.scss'
  ],
  ssr: false
})

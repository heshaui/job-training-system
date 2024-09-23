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
    '@/assets/styles/font.css',
    '@/assets/styles/main.scss',
    '@/assets/styles/tailwind.css',
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/display.css',
    '@/assets/styles/resetElement.scss'
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }, // 添加 favicon
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
        { name: 'description', content: '提供最新公职选岗信息，帮助考生快速找到适合的岗位。了解公职考试职位详情、岗位竞争度、岗位要求，为您的职业发展做出最佳选择。' },
        { name: 'keywords', content: '公职选岗, 公职考试, 岗位选择, 职位查询, 岗位匹配, 考公务员, 公职职位, 事业单位招聘, 公务员选岗, 公职岗位要求' }
      ]
    }
  }
})

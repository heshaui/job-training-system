<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>
<script setup>
// 设置全局布局 默认default 可以根据权限修改布局 修改单个页面在单页面修改
// 全局使用图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const nuxtApp = useNuxtApp()
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  nuxtApp.vueApp.component(key, component)
}
</script>
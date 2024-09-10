<template>
	<!-- 页面默认框架结构 -->
    <div class="h-full flex flex-col">
        <!-- 头部 -->
        <PageHead class="shrink-0"></PageHead>
        <!-- 内容 设置最小高度顶满页面-->
        <main class="flex flex-auto">
            <aside class="w-[200px] shrink-0">
				<ul>
				<li @click="goToPage('membership')">会员详情</li>
				<li @click="goToPage('resume')">我的简历</li>
				<li @click="goToPage('subscriptions')">职位订阅</li>
				<li @click="goToPage('favorites')">我的收藏</li>
				<li @click="goToPage('footprints')">我的足迹</li>
				<li @click="goToPage('recommendations')">职位推荐</li>
				</ul>
			</aside>
			<main class="flex-auto">
				<NuxtPage />
			</main>
        </main>
        <!-- 底部 -->
        <PageFooter class="shrink-0"></PageFooter>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const goToPage = (page) => {
	router.push(`/personal/${page}`)
  }
  </script>
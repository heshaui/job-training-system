<template>
	<!-- 页面默认框架结构 -->
    <div class="h-full flex flex-col">
        <!-- 头部 -->
        <PageHead class="shrink-0"></PageHead>
        <!-- 内容 设置最小高度顶满页面-->
        <main class="flex-auto bg-[#F4F5FA]">
            <div class="main-content flex pt-[20px]">
              <aside class="w-[198px] mr-[12px] shrink-0">
                <PersonalMenu />
                <div class="w-[198px] h-[222px] my-[20px] flex flex-col items-center rounded-[8px] py-[18px] bg-[#fff]">
                  <span class="text-[#666] font-bold leading-[22px] text-[16px] mb-[11px]">简历投递实时跟踪</span>
                  <img src="~/assets/images/code.jpg" class="w-[130px] h-[130px] border-[10px] border-solid border-[#fff]" />
                  <span class="text-[#666] leading-[22px] text-[16px]">关注公众号</span>
                </div>
              </aside>
              <main class="flex-auto">
                <NuxtPage />
              </main>
            </div>
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
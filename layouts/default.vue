
<template>
    <!-- 页面默认框架结构 -->
    <div class="h-full flex flex-col">
        <!-- 头部 -->
        <PageHead class="shrink-0"></PageHead>
        <!-- 内容 设置最小高度顶满页面-->
        <main class="flex-auto">
            <!-- 插槽切换路由页面内容 -->
            <NuxtPage />
        </main>
        <!-- 底部 -->
        <PageFooter class="shrink-0"></PageFooter>
    </div>
</template>
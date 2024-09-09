
<template>
    <!-- 页面默认框架结构 -->
    <div>
        <!-- 头部 -->
        <PageHead></PageHead>
        <!-- 内容 设置最小高度顶满页面-->
        <div class="min_h">
            <!-- 插槽切换路由页面内容 -->
            <slot></slot>
        </div>
        <!-- 底部 -->
        <PageFooter></PageFooter>
    </div>
</template>
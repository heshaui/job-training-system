<template>
    <div class="main-content py-[16px]">
        <el-breadcrumb separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) of breadcrumbList" :key="index" :to="{path: item.path}">{{ item.name }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
  
<script setup>
    const props = defineProps({
        breadcrumbList: Array
    })
</script>
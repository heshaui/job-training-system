<template>
    <div class="body">
        <div class="box">
			我是首页
        </div>
    </div>
</template>
<script lang='ts' setup>
useSeoMeta({
    title: '首页',
    description: '网页描述',
    author: '作者',
})
// 引入接口
// import { index } from '~/api'
</script>
<style scoped lang="scss">
.box{
    margin: auto;
    width: 500px;
    height: 500px;
    border: 1px solid #000;
    background-color: pink;
}
</style>
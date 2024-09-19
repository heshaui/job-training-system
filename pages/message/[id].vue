<template>
	<section class="main-bg">
    <Breadcrumb :breadcrumbList="breadcrumbList" />
    <div class="main-content bg-[#fff]">
      <div class="msg-head">
        <h3>{{ msgData.title }}</h3>
        <p>
          <span class="mr-[20px]">发布者：{{ msgData.user }}</span>
          <span>发布时间：{{ msgData.time }}</span>
        </p>
      </div>
      <div class="p-[20px] text-justify text-[#333] text-[16px] leading-[26px]">
        {{ msgData.content }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from '#app'

// 获取路由对象
const route = useRoute()
// 从路由参数中提取 id
const id = route.params.id
// 面包屑
const breadcrumbList = ref([
  { name: "消息列表", path: "/message" },
  { name: "消息详情" }
]);
// 详情数据
const msgData = ref({
		id: 1,
		title: '单位行政职业能力测验资料分析：比重增长单位行政职业能力',
		content: '行测考试当中的资料分析部分应该是令大多数考生又爱又恨的一类题目，爱它相较于数量关系的简单易第一届直直公益“守护大自然的小美好”公益征集活动获选名单公示 第一届直直公益“守护大自然的小美好”公益征集活动在于数量关系的简于数单易…',
		user: '占悟道',
		time: '2024-08-11 10:54:30'
})
</script>

<style lang="scss" scoped>
.msg-head {
  height: 100px;
  border-bottom: 1px solid #ddd;
  padding: 14px 0;
  h3 {
    font-size: 30px;
    line-height: 42px;
    color: #333;
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
  }
  p {
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    color: #999;
  }
}
</style>
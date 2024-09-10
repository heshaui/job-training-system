<template>
	<div>
	  <h1>公司详情</h1>
	  <p>公司ID: {{ id }}</p>
	  <!-- 其他页面内容 -->
	</div>
  </template>
  
  <script setup>
  import { useRoute } from '#app'
  
  // 获取路由对象
  const route = useRoute()
  
  // 从路由参数中提取 id
  const id = route.params.id
  
  // 你可以使用这个 id 做进一步的数据获取或其他操作
  </script>
<template>
	<div>
	  <ul>
		<li v-for="item in items" :key="item.id" @click="goToDetail(item.id)">
		  {{ item.name }}
		</li>
	  </ul>
	</div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const items = [
	{ id: 1, name: '消息1' },
	{ id: 2, name: '消息2' }
  ]
  
  const goToDetail = (id) => {
	router.push(`/message/${id}`)
  }
  </script>
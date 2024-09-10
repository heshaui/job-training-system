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
	{ id: 1, name: '企业1' },
	{ id: 2, name: '企业2' }
  ]
  
  const goToDetail = (id) => {
	router.push(`/company/${id}`)
  }
  </script>
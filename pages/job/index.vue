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
	{ id: 1, name: '职位1' },
	{ id: 2, name: '职位2' }
  ]
  
  const goToDetail = (id) => {
	router.push(`/job/${id}`)
  }
  </script>
<template>
	<header class="h-[60px] bg-[#fff]">
		<div class="w-[1200px] h-[100%] m-auto flex items-center">
			<h3 class="mr-[20px] cursor-pointer" @click="goToHome">WOW</h3>
			<div class="mr-[20px] cursor-pointer" @click="goToCompanyList">找企业</div>
			<div class="mr-[20px] cursor-pointer" @click="goToJobList">找工作</div>
			<div class="cursor-pointer" @click="goToMessageList">我的消息</div>
		</div>	
	</header>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => {
  router.push('/')
}

const goToCompanyList = () => {
  router.push('/company')
}

const goToJobList = () => {
  router.push('/job')
}

const goToMessageList = () => {
  router.push('/message')
}
</script>


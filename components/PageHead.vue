<template>
	<header class="h-[100px] bg-[#fff]">
		<div class="w-[1200px] h-[100%] m-auto flex items-center">
			<img class="mr-[70px] h-[70px]" src="~/assets/images/logo.png" />
			<ul class="nav">
				<li class="nav-item" :class="isJobDatabase ? 'active' : ''" @click="goToJobList">职位库</li>
				<li class="nav-item" :class="routeName === 'jobScreening' ? 'active' : ''" @click="goToJobScreening">岗位筛选</li>
				<li class="nav-item">新闻公告</li>
				<li class="nav-item">个人中心</li>
			</ul>
			<search-bar class="ml-[11px]" isHead />
			<div class="ml-[35px] w-[36px] text-center cursor-pointer">
				<img src="~/assets/images/user.png" alt="用户">
				<span class="text-[14px] text-[#666] leading-[28px] block cursor-pointer">登录</span>
			</div>
		</div>	
	</header>
</template>

<script setup>
import { watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const routeName = ref(route.name)

watch(route, (route) => {
	console.log(route)
	routeName.value = route.name
}, {deep: true})

const isJobDatabase = computed(() => {
	return routeName.value.includes('jobDatabase') || routeName.value.includes('RecruitingJob')
})

const goToHome = () => {
  router.push('/')
}

const goToCompanyList = () => {
  router.push('/company')
}

const goToJobList = () => {
  router.push('/jobDatabase')
}

const goToJobScreening = () => {
	router.push('/jobScreening')
}

const goToMessageList = () => {
  router.push('/message')
}
</script>

<style lang="scss" scoped>
$color: #3CAE91;
.nav {
	display: flex;
	height: 100%;
	padding: 39px 0 26px;
	.nav-item {
		height: 35px;
		line-height: 22px;
		color: #666;
		font-size: 16px;
		margin-right: 24px;
		cursor: pointer;
		&:hover {
			color: $color;
		}
		&.active {
			border-bottom: 2px solid $color;
			color: $color;
		}
	}
}
</style>


<template>
	<header class="h-[100px] bg-[#fff]">
		<div class="w-[1200px] h-[100%] m-auto flex items-center">
			<img class="mr-[70px] h-[70px] cursor-pointer" src="~/assets/images/logo.png" @click="goToHome" />
			<ul class="nav">
				<li class="nav-item" :class="isJobDatabase ? 'active' : ''" @click="goToJobList">职位库</li>
				<li class="nav-item" :class="routeName === 'jobScreening' ? 'active' : ''" @click="goToJobScreening">岗位筛选</li>
				<li class="nav-item" :class="routeName.includes('message') ? 'active' : ''" @click="goToMessageList">消息公告</li>
				<li class="nav-item" :class="routeName.includes('personal') ? 'active' : ''" @click="goToPersonal">个人中心</li>
			</ul>
			<search-bar v-if="routeName === 'index'" class="ml-[11px]" isHead />
			<div v-if="!isLogin" class="ml-auto w-[36px] text-center cursor-pointer mr-[25px]">
				<img src="~/assets/images/user.png" alt="用户">
				<span class="text-[14px] text-[#666] leading-[28px] block cursor-pointer">登录</span>
			</div>
			<el-popover v-else placement="bottom" :width="230" trigger="hover">
				<template #reference>
					<div class="h-[36px] flex items-center cursor-pointer" :class="routeName === 'index' ? 'w-[80px] ml-[10px]' : 'w-auto ml-auto'">
						<img src="~/assets/images/user.png" class="avator" alt="用户头像">
						<p class="user-name" :title="userInfo.name">{{ userInfo.name }}</p>
					</div>
				</template>
				<div class="px-[3px] py-[8px]">
					<div class="flex items-center h-[36px] mb-[20px]">
						<img src="~/assets/images/user.png" class="avator mr-[10px]" />
						<div>
							<p class="text-[#333] text-[14px] mb-[8px] leading-[14px]">hi, {{ userInfo.name }}</p>
							<p class="text-[#999] text-[12px] leading-[12px]">欢迎回来</p>
						</div>
					</div>
					<ul class="card-menu">
						<li @click="goToPersonal">个人中心</li>
						<li @click="goToMyResume">我的简历</li>
						<li @click="logout">退出登录</li>
					</ul>
				</div>
			</el-popover>
		</div>	
	</header>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '~/stores/user'
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

// 路由
const goToHome = () => {
	router.push('/')
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
const goToPersonal = () => {
	router.push('/personal/userCenter')
}
const goToMyResume = () => {
	router.push('/personal/myResume')
}

// 退出
const logout = () => {

}

const userStore = useUserStore()
const isLogin = true // userStore.isLogin
const userInfo = ref({
	name: '占三道'
})
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
.avator {
	width: 36px;
	height: 36px;
	border-radius: 50%;
	margin-right: 6px;
	border: 1px solid #dcdcdc;
}
.user-name {
	font-size: 14px;
	color: #666;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.card-menu {
	li {
		height: 48px;
		border-bottom: 1px solid #ddd;
		font-size: 16px;
		color: #666;
		line-height: 47px;
		cursor: pointer;
		text-align: center;
		&:last-child {
			border: none;
		}
		&:hover {
			background: $color;
			color: #fff;
		}
	}
}
</style>


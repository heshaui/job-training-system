<template>
	<ul class="menu-box">
		<li v-for="(menu, key) of menus" :key="key" :class="routeName.includes(menu.page) ? 'active' : ''" class="menu-item" @click="goToPage(menu.page)">
			<img :src="routeName.includes(menu.page) ? menu.activeIcon : menu.icon" />
			{{ menu.name }}
		</li>
	</ul>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { loadImage } from '~/utils';

// 路由
const router = useRouter()
const goToPage = (page) => {
	router.push(`/personal/${page}`)
}
const route = useRoute()
const routeName = ref('userCenter')
watch(route, route => {
	routeName.value = route.name
}, {deep: true})

// 左侧菜单
const menus = ref([
	{name: '个人中心', page: 'userCenter'},
	{name: '我的简历', page: 'myResume'},
	{name: '职位速配', page: 'recommendations'},
	{name: '简历模板', page: 'resumeTemplate'},
	{name: '职位订阅', page: 'subscriptions'},
	{name: '积分管理', page: 'integraManage'},
	{name: '我的收藏', page: 'favorites'},
	{name: '我的足迹', page: 'footprints'}
])
menus.value.forEach(async (menu, index) => {
	menu.icon = await loadImage(`menu-${index+1}`)
	menu.activeIcon = await loadImage(`menu-${index+1}-a`)
})


</script>

<style lang="scss" scoped>
.menu-box {
	width: 198px;
	height: 435px;
	padding: 15px;
	background: #FFFFFF;
	border-radius: 8px;
	.menu-item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 168px;
		height: 50px;
		color: #666;
		font-size: 16px;
		cursor: pointer;
		img {
			width: 16px;
			height: 16px;
			margin-right: 10px;
		}
		&.active,&:hover {
			background: #E3FFF8;
			border-radius: 8px;
			color: #3CAE91;
		}
	}
}
</style>




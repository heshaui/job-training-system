<template>
	<footer class="h-[250px] bg-[#f0f0f0] text-[#666]">
		<div class="w-[1200px] h-[100%] m-auto flex items-center px-[30px]">
			<img class="mr-[106px] h-[70px]" src="~/assets/images/logo.png" />
			<div>
				<div class="nav-box">
					<span class="nav">职位库</span>
					<span class="nav">岗位筛选</span>
					<span class="nav">新闻公告</span>
					<span class="nav">个人中心</span>
				</div>
				<p v-for="item of infoList" :key="item" class="text-[14px] mb-[11px]">{{ item }}</p>
				<p class="text-[16px] leading-[22px]">科技有限公司版权所有   黑ICP备2023014858号</p>
			</div>
			<div class="ml-auto flex">
				<div v-for="item of codeList" :key="item.src" class="text-center ml-[12px] text-[16px]">
					<img :src="item.src" class="w-[130px] mb-[9px]" />
					<div class="leading-[22px]">扫一扫</div>
					<div class="leading-[22px]">{{ item.label }}</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { useRouter } from 'vue-router'
import codeImage from '~/assets/images/code.jpg'


const router = useRouter()

const infoList = [
	'咨询电话: 188-1223-9910',
	'工作时间：08:00-18:00',
	'网址: www.gongkaoketang.com',
	'地址: 北京市海淀区华杰大厦B座'
]

const codeList = [
	{ src: codeImage, label: '关注小程序'},
	{ src: codeImage, label: '联系我们'}
]

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

<style lang="scss" scoped>
$color: #3CAE91;
.nav-box {
	line-height: 22px;
	margin-bottom: 25px;
	.nav {
		color: #666;
		font-size: 16px;
		margin-right: 24px;
		cursor: pointer;
		font-weight: 500;
		&:hover {
			color: $color;
		}
	}
}
</style>
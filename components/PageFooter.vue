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
				<p class="text-[14px] mb-[11px]">咨询电话: 188-1223-9910</p>
				<p class="text-[14px] mb-[11px]">工作时间：08:00-18:00</p>
				<p class="text-[14px] mb-[11px]">网址: www.gongkaoketang.com</p>
				<p class="text-[14px] mb-[11px]">地址: 北京市海淀区华杰大厦B座</p>
				<p class="text-[16px] leading-[22px]">科技有限公司版权所有   黑ICP备2023014858号</p>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const searchType = ref('1')
const searchValue = ref('')

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
			color: #333;
		}
	}
}
</style>
<template>
	<header class="h-[100px] bg-[#fff]">
		<div class="w-[1200px] h-[100%] m-auto flex items-center">
			<img class="mr-[70px] h-[70px]" src="~/assets/images/logo.png" />
			<span class="nav">职位库</span>
			<span class="nav">岗位筛选</span>
			<span class="nav">新闻公告</span>
			<span class="nav">个人中心</span>
			<div class="search-container ml-[35px]">
				<el-select v-model="searchType" placeholder="请选择" class="custom-select">
					<el-option label="职位" value="1"></el-option>
					<el-option label="岗位" value="2"></el-option>
					<el-option label="新闻" value="3"></el-option>
				</el-select>
				<div class="divider"></div>
				<input v-model="searchValue" type="text" class="search-input" placeholder="请输入关键字" />
				<button class="search-button">搜索</button>
			</div>
			<div class="ml-[35px] w-[36px] text-center cursor-pointer">
				<img src="~/assets/images/user.png" alt="用户">
				<span class="text-[14px] text-[#666] leading-[28px] block cursor-pointer">登录</span>
			</div>
		</div>	
	</header>
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
.nav {
	color: #666;
	font-size: 16px;
	margin-right: 24px;
	cursor: pointer;
	&:hover {
		color: #333;
	}
}

.search-container {
    display: flex;
    align-items: center;
    width: 460px;
    height: 48px;
    border-radius: 2px 1px 1px 2px;
	border: 1px solid #3CAE91;
}


/* 使用 :deep() 覆盖 el-select 的默认样式 */
:deep(.el-select .el-input__inner) {
    height: 100%;
    border: none;
    background: none;
    padding-left: 10px;
    font-size: 16px;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
/* 去除 el-select 聚焦时的蓝色框 */
:deep(.el-select .el-input__inner:focus) {
    outline: none; /* 移除默认的 outline */
    box-shadow: none; /* 移除聚焦时的阴影效果 */
    border-color: transparent; /* 或者设置边框颜色 */
}

:deep(.el-select__wrapper) {
	height: 100%;
	box-shadow: none;
}

:deep(.el-select__wrapper.is-hovering:not(.is-focued)) {
	box-shadow: none;
}

:deep(.el-select) {
    width: 78px;
    height: 100%;
}

:deep(.el-select__selected-item.el-select__placeholder span) {
	font-size: 16px;
	color: #666;
}


.divider {
    width: 1px;
    height: 28px;
    background-color: #ccc;
}

.search-input {
    flex: 1;
    border: none;
    padding: 0 10px;
    font-size: 16px;
	color: #666;
    outline: none;
    height: 100%;
	&::placeholder {
		color: #ccc;
		font-size: 14px;
	}
}

.search-button {
    width: 78px;
    height: 100%;
    background-color: #3CAE91;
    color: white;
    border: none;
    font-size: 16px;
    cursor: pointer;
}

.search-button:hover {
    background-color: #3CAE91;
}

</style>


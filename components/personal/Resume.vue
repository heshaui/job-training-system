<template>
	<div>
		<div v-if="isMyResume" class="w-[100%] h-[60px] leading-[60px] rounded-[8px] bg-[#fff] text-[#333] text-[18px] font-bold pl-[27px] mb-[10px]">我的简历</div>
		<div class="resume-box">
			<h3>我的简历</h3>
			<div class="resume-info">
				<el-avatar :size="80" :src="userInfo.src" />
				<div class="ml-[20px]">
					<h3 class="text-[#333] text-[18px] leading-[25px] font-bold mb-[9px]">
						{{ userInfo.name }}
						<span class="text-[#666] text-[14px] ml-[36px] font-normal">{{ userInfo.jobName }}</span>
					</h3>
					<p class="text-[14px] text-[#666] leading-[20px] mb-[7px]">
						<span>{{ userInfo.age }}</span>
						<el-divider direction="vertical" />
						<span>{{ userInfo.jy }}</span>
						<el-divider direction="vertical" />
						<span>{{ userInfo.xl }}</span>
					</p>
					<p class="text-[#999] text-[14px] leading-[20px]">{{ userInfo.status }}</p>
				</div>
				<div class="ml-[40px]">
					<div class="h-[25px] flex items-center text-[#666] text-[14px] mb-[9px]">
						<span class="mr-[8px]">简历完整度</span>
						<div class="progress-bar">
							<div :style="`width: ${userInfo.progress}`"></div>
						</div>
						<span class="ml-[13px]">{{ userInfo.progress }}</span>
					</div>
					<p class="text-[#666] text-[14px] leading-[20px] mb-[7px]">更新日期：{{ userInfo.time }}</p>
					<p class="text-[#666] text-[14px] leading-[20px]">被浏览：{{ userInfo.viewNum }}</p>
				</div>
			</div>
			<div class="btn-box">
				<button @click="goToEditResume">修改简历</button>
				<button>创建简历</button>
				<button>预览简历</button>
				<button>刷新简历</button>
			</div>
			<div class="remind-box">
				<img src="~/assets/images/user-icon-1.png" />
				<div>
					<h3 class="text-[#333] text-[16px] leading-[22px] font-bold mb-[9px]">你的简历缺少项目经历，会极大影响求职成功率哦!</h3>
					<p class="text-[#666] text-[14px] leading-[20px]">完善项目经历，可以有效提高求职成功率</p>
				</div>
				<button>完善项目经历</button>
			</div>
		</div>
		<div v-if="isMyResume" class="default-resume">
			<div>
				<h3>我的简历</h3>
				<div class="h-[20px] flex items-center text-[#666] text-[14px] mb-[15px]">
					<span class="mr-[8px]">简历完整度</span>
					<div class="progress-bar">
						<div :style="`width: ${userInfo.progress}`"></div>
					</div>
					<span class="ml-[13px]">{{ userInfo.progress }}</span>
				</div>
				<div class="info-box">
					<span>类型：{{ userInfo.type }}</span>
					<span>更新时间：{{ userInfo.time }}</span>
					<span>被浏览：{{ userInfo.viewNum }}</span>
					<span>状态：{{ userInfo.state }}</span>
				</div>
			</div>
			<div class="btn-box">
				<button>设为默认</button>
				<button>修改简历</button>
				<button>预览简历</button>
				<button>删除简历</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import company1 from '~/assets/images/company-1.png'

const props = defineProps({
	isMyResume: Boolean
})

//简历详情
const userInfo = ref({
	src: company1,
	name: '站三道',
	jobName: 'CV工程师',
	age: '30',
	xl: '家里蹲大学',
	jy: '40年工作经验',
	status: '已离职，寻求新工作-不限',
	progress: '80%',
	time: '2024-08-10 20:34:56',
	viewNum: 103,
	type: '标准简历',
	state: '审核中'
})

const router = useRouter()
const goToEditResume = () => {
	router.push('/personal/editResume')
}
</script>

<style lang="scss" scoped>
.resume-box {
	width: 990px;
	height: 318px;
	background: #FFFFFF;
	border-radius: 8px;
	padding: 14px 0 14px 27px;
	h3 {
		color: #333;
		font-size: 18px;
		line-height: 25px;
		font-weight: bold;
		margin-bottom: 13px;
	}
	.resume-info {
		display: flex;
		align-items: center;
		height: 100px;
	}
	.remind-box {
		width: 948px;
		height: 119px;
		background: #E1FAF4;
		border-radius: 8px;
		padding: 0 30px;
		display: flex;
		align-items: center;
		img {
			width: 53px;
			height: 53px;
			margin-right: 14px;
		}
		button {
			width: 120px;
			height: 50px;
			border-radius: 30px;
			margin-left: auto;
			background: linear-gradient(to right, #6FD7C4, #3CAE91);
			text-align: center;
			line-height: 50px;
			color: #fff;
			font-size: 16px;
			font-weight: bold;
			&:hover {
				background: linear-gradient(to right,#3CAE91, #6FD7C4);
			}
		}
	}
}
.progress-bar {
	width: 173px;
	height: 10px;
	background: #ADE9D9;
	border-radius: 6px; 
	div {
		height: 10px;
		border-radius: 6px;
		background: #3CAE91;
	}
}
.btn-box {
	text-align: right;
	padding-right: 40px;
	margin-top: -24px;
	margin-bottom: 30px;
	button {
		width: 66px;
		height: 24px;
		border-radius: 4px;
		border: 1px solid #979797;
		font-size: 14px;
		color: #666;
		line-height: 22px;
		margin-left: 10px;
		&:hover {
			border: 1px solid #85CCBA;
			color: #3CAE91;
		}
	}
}
.default-resume {
	width: 990px;
	height: 133px;
	background: #FFFFFF;
	border-radius: 8px;
	margin-top:10px;
	padding: 0 27px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	h3 {
		font-size: 18px;
		line-height: 25px;
		color: #333;
		font-weight: bold;
		margin-bottom: 12px;
	}
	.info-box {
		line-height: 20px;
		color: #666;
		font-size: 14px;
		span {
			margin-right: 20px;
		}
	}
	.btn-box {
		margin: 0;
		padding: 0;
	}
}
</style>
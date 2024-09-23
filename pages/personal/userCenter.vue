<template>
	<div>
		<ul class="flex justify-between mb-[20px]">
			<li class="card-item">
				<img src="~/assets/images/user-card-4.png" />
				<div>
					<span class="label">面试通知</span>
					<span class="num">{{ userInfo.num1 }}</span>
				</div>
			</li>
			<li class="card-item">
				<img src="~/assets/images/user-card-5.png" />
				<div>
					<span class="label">申请记录</span>
					<span class="num">{{ userInfo.num1 }}</span>
				</div>
			</li>
			<li class="card-item">
				<img src="~/assets/images/user-card-6.png" />
				<div>
					<span class="label">收藏记录</span>
					<span class="num">{{ userInfo.num1 }}</span>
				</div>
			</li>
			<li class="card-item">
				<img src="~/assets/images/user-card-7.png" />
				<div>
					<span class="label">我的关注</span>
					<span class="num">{{ userInfo.num1 }}</span>
				</div>
			</li>
		</ul>
		<PersonalResume />
		<div class="notice-box">
			<img src="~/assets/images/user-icon-2.png" />
			企业动态 你关注的 <span class="text-[#3CAE91] mx-[10px]">{{ companyname }}</span> 发布了职位
		</div>
		<div class="subscribe-box">
			<h3>订阅的企业动态</h3>
			<ul>
				<li v-for="(item, key) of subscribeList" :key="key" class="list-item">
					<span class="font-bold item-title">{{ item.title }}</span>
					<span>{{ item.time }}</span>
				</li>
			</ul>
			<my-pagination :total="subscribeList.length" />
		</div>
	</div>
</template>
<script setup>
definePageMeta({
  layout: 'personal'
})

const userInfo = ref({
	num1: 10,
	num2: 12,
	num3: 13,
	num4: 14
})
const companyname = ref('北京电信雷科技有限公司')
const subscribeList = ref([
	{title: '北京招聘信息技术有限公司招聘简章', time: '2024-09-05'},
	{title: '北京招聘信息技术有限公司招聘简章', time: '2024-09-05'},
	{title: '北京招聘信息技术有限公司招聘简章', time: '2024-09-05'},
	{title: '北京招聘信息技术有限公司招聘简章', time: '2024-09-05'},
	{title: '北京招聘信息技术有限公司招聘简章', time: '2024-09-05'},
	{title: '北京招聘信息技术有限公司招聘简章', time: '2024-09-05'},
	{title: '北京招聘信息技术有限公司招聘简章', time: '2024-09-05'},
	{title: '北京招聘信息技术有限公司招聘简章', time: '2024-09-05'},
	{title: '北京招聘信息技术有限公司招聘简章', time: '2024-09-05'}
])

</script>

<style lang="scss" scoped>
.card-item {
	width: 240px;
	height: 120px;
	background: #FFFFFF;
	border-radius: 8px;
	padding-left: 16px;
	display: flex;
	align-items: center;
	img {
		width: 68px;
		height: 68px;
		margin-right: 21px;
	}
	span {
		display: block;
		font-size: 16px;
		color: #666;
		line-height: 22px;
		&.label {
			margin-bottom: 9px;
		}
		&.num {
			color: #333;
			font-weight: bold;
			font-size: 20px;
			line-height: 28px;
		}
	}
}
.notice-box {
	width: 990px;
	height: 68px;
	background: #FFFFFF;
	border-radius: 8px;
	margin: 20px 0;
	padding-left: 26px;
	display: flex;
	align-items: center;
	color: #666;
	font-size: 16px;
	img {
		width: 30px;
		height: 30px;
		margin-right: 16px;
	}
}
.subscribe-box {
	width: 990px;
	background: #FFFFFF;
	border-radius: 8px;
	padding: 30px 30px 0;
	margin-bottom: 30px;
	h3 {
		font-size: 20px;
		color: #333;
		font-weight: bold;
		line-height: 22px;
		margin-bottom: 20px;
	}
	ul .list-item {
		display: flex;
		justify-content: space-between;
		margin-bottom: 16px;
		color: #666;
		font-size: 16px;
		line-height: 22px;
		list-style: circle;
		.item-title {
			height: 22px;
			display: flex;
			align-items: center;
			cursor: pointer;
			&::before {
				content: '';
				display: block;
				width:5px;
				height: 5px;
				border-radius: 50%;
				background: #666;
				margin-right: 15px;
			}
		}
		&:last-child {
			margin: none;
		}
		&:hover {
			color: #333;
		}
	}
}
</style>
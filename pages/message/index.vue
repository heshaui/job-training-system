<template>
	<section class="main-bg">
		<div class="main-content pt-[15px]">
			<ul>
				<li v-for="(item, key) of msgList" :key="key" class="list-item">
					<h3 class="text-[16px] text-[#3CAE91] leading-[22px] mb-[15px] font-medium cursor-pointer" @click="goToDetail(item.id)">{{ item.title }}</h3>
					<p class="text-[14px] text-[#333] leading-[20px] mb-[15px]">{{ item.content }}</p>
					<p class="user-box">
						<span>
							<img src="~/assets/images/job-icon-8.png" alt="">
							{{ item.user }}
						</span>
						<span>
							<img src="~/assets/images/job-icon-5.png" alt="">
							{{ item.time }}
						</span>
					</p>
				</li>
			</ul>
			<my-pagination :total="msgList.length" />
		</div>
	</section>
</template>

<script setup>
import { useRouter } from 'vue-router'

// 路由
const router = useRouter()
const goToDetail = (id) => {
	router.push(`/message/${id}`)
}

// 消息列表
const msgList = ref([
	{
		id: 1,
		title: '单位行政职业能力测验资料分析：比重增长单位行政职业能力',
		content: '行测考试当中的资料分析部分应该是令大多数考生又爱又恨的一类题目，爱它相较于数量关系的简单易第一届直直公益“守护大自然的小美好”公益征集活动获选名单公示 第一届直直公益“守护大自然的小美好”公益征集活动在于数量关系的简于数单易…',
		user: '占悟道',
		time: '2024-08-11 10:54:30'
	},
	{
		id: 2,
		title: '单位行政职业能力测验资料分析：比重增长单位行政职业能力',
		content: '行测考试当中的资料分析部分应该是令大多数考生又爱又恨的一类题目，爱它相较于数量关系的简单易第一届直直公益“守护大自然的小美好”公益征集活动获选名单公示 第一届直直公益“守护大自然的小美好”公益征集活动在于数量关系的简于数单易…',
		user: '占悟道',
		time: '2024-08-11 10:54:30'
	},
	{
		id: 3,
		title: '单位行政职业能力测验资料分析：比重增长单位行政职业能力',
		content: '行测考试当中的资料分析部分应该是令大多数考生又爱又恨的一类题目，爱它相较于数量关系的简单易第一届直直公益“守护大自然的小美好”公益征集活动获选名单公示 第一届直直公益“守护大自然的小美好”公益征集活动在于数量关系的简于数单易…',
		user: '占悟道',
		time: '2024-08-11 10:54:30'
	},
	{
		id: 4,
		title: '单位行政职业能力测验资料分析：比重增长单位行政职业能力',
		content: '行测考试当中的资料分析部分应该是令大多数考生又爱又恨的一类题目，爱它相较于数量关系的简单易第一届直直公益“守护大自然的小美好”公益征集活动获选名单公示 第一届直直公益“守护大自然的小美好”公益征集活动在于数量关系的简于数单易…',
		user: '占悟道',
		time: '2024-08-11 10:54:30'
	},
	{
		id: 5,
		title: '单位行政职业能力测验资料分析：比重增长单位行政职业能力',
		content: '行测考试当中的资料分析部分应该是令大多数考生又爱又恨的一类题目，爱它相较于数量关系的简单易第一届直直公益“守护大自然的小美好”公益征集活动获选名单公示 第一届直直公益“守护大自然的小美好”公益征集活动在于数量关系的简于数单易…',
		user: '占悟道',
		time: '2024-08-11 10:54:30'
	}
])
</script>

<style lang="scss" scoped>
.list-item {
	background: #fff;
	padding: 20px;
	margin-top: 16px;
	border-radius: 4px;
	&:hover {
        box-shadow: 0px 2px 4px 2px rgba(189,189,189,0.5);
    }
	.user-box {
		color: #999;
		font-size: 14px;
		display: flex;
		span {
			display: flex;
			height: 20px;
			align-items: center;
			margin-right: 20px;
			img {
				width: 16px;
				height: 16px;
				margin-right: 10px;
			}
		}
	}
}
</style>
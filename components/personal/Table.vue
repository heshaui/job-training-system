<template>
	<div>
		<div class="w-[100%] h-[60px] leading-[60px] rounded-[8px] bg-[#fff] text-[#333] text-[18px] font-bold pl-[27px] mb-[10px]">{{ name }}</div>
		<div class="bg-[#fff] px-[10px] pb-[10px] rounded-[8px] mb-[20px]">
			<el-table
				id="m-table"
				:data="tableData"
			>	
				<template #empty>
					<div class="pb-[30px]">
						<el-empty style="padding-bottom: 10px;color: #999;" :description="isSup ? '暂无职位速配' : '暂无数据'" />
						<button v-if="isSup" class="sup-btn hover-bg" @click="goToJobDatabase">去速配</button>
					</div>
				</template>
				<el-table-column label="岗位" prop="name" align="left" min-width="100px">
					<template #default="scope">
						<div class="name-cell">
							<h3>{{ scope.row.name }}</h3>
							<p v-if="isSubscribe">
								<span v-for="(item, key) of scope.row.yq" :key="key">
									{{ item }}
									<el-divider v-if="key !== scope.row.yq.length -1" direction="vertical" />
								</span>
							</p>
							<p v-else>
								<img :src="scope.row.logo" alt="logo" />
								<span>{{ scope.row.companyName }}</span>
							</p>
						</div>
					</template>
				</el-table-column>
				<el-table-column label="薪资" prop="xz" align="center" min-width="100px">
					<template #default="scope">
						<div>
							<h3>{{ scope.row.xz }}</h3>
							<span>{{ scope.row.area }}</span>
						</div>
					</template>
				</el-table-column>
				<template v-if="isSup">
					<el-table-column label="基本要求" prop="yq" align="center" min-width="120px">
						<template #default="scope">
							<span v-for="(item, key) of scope.row.yq" :key="key">
									{{ item }}
								<el-divider v-if="key !== scope.row.yq.length -1" direction="vertical" />
							</span>
						</template>
					</el-table-column>
					<el-table-column label="匹配度" prop="ppd" align="center" width="80px"></el-table-column>
				</template>
				<template v-else>
					<el-table-column :label="isCollection ? '收藏时间' : isFoot ? '浏览时间' : '订阅时间'" prop="time" align="center" width="120px"></el-table-column>
					<el-table-column label="职位状态" prop="status" align="center" width="100px"></el-table-column>
				</template>
				<el-table-column label="操作" align="center" width="120px">
					<template #default="scope">
						<button v-if="isSup || isSubscribe" class="hover-bg" @click="goToJobDetail(scope.row.id)">详情</button>
						<span v-if="isCollection || isFoot" class="delete-text">删除</span>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>
<script setup>
import { defineProps, computed } from 'vue';
import company1 from '~/assets/images/company-1.png'

const props = defineProps({
	name: {
		type: String,
		default: '职位速配'
	},
	tableData: {
		type: Array,
		default: () => []
	}
})
// 页面来源
const isSup = computed(() => props.name === '职位速配')
const isSubscribe = computed(() => props.name === '职位订阅')
const isCollection = computed(() => props.name === '我的收藏')
const isFoot = computed(() => props.name === '我的足迹')

const router = useRouter()
const goToJobDetail = id => {
	router.push(`/RecruitingJob/${2}`)
}
const goToJobDatabase = () => {
	router.push('/jobDatabase')
}
</script>

<style lang="scss" scoped>
:deep(#m-table.el-table) {
	color: #333;
	font-size: 16px;
	thead {
		color: #333;
		font-size: 16px;
	}
	.el-table__cell {
		padding: 20px 0 !important;
	}
	h3 {
		font-size: 20px;
		color: #3CAE91;
		font-weight: bold;
		line-height: 28px;
		margin-bottom: 20px;
	}
	p {
		height: 22px;
		display: flex;
		align-items: center;
		font-size: 16px;
		img {
			width: 16px;
			height: 16px;
			margin-right: 10px;
		}
	}
	button {
		width: 108px;
		height: 44px;
		line-height: 44px;
		background: #3CAE91;
		text-align: center;
		color: #fff;
		font-size: 16px;
		border-radius: 4px;
	}
	.sup-btn {
		height: 40px;
		width: 200px;
		line-height: 40px;
		border-radius: 20px;
	}
	.delete-text {
		font-size: 16px;
		color: #3CAE91;
		cursor: pointer;
	}
}
</style>
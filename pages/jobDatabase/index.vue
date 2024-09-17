<template>
	<section class="main-bg pt-[30px]">
		<search-bar class="mx-auto mb-[30px]" />
		<div class="main-content flex justify-between">
			<div class="w-[900px]">
				<senior-search />
				<job-list />
			</div>
			<div class="w-[290px]">
				<div class="bg-[#fff] px-[10px] py-[16px]">
					<h3 class="r-tit">推荐企业</h3>
					<img 
						v-for="(company, key) of recommendCompanys" 
						:key="key" :src="company" alt=""
						class="company-img"
					>
				</div>
				<div class="bg-[#fff] px-[10px] py-[16px] mt-[16px]">
					<h3 class="r-tit">热门职位</h3>
					<ul>
						<li v-for="(job, key) of hotJobs" :key="key" class="hot-job-item">
							<img :src="job.src" :alt="job.companyName" />
							<div>
								<h3>{{ job.companyName }}</h3>
								<p class="mb-[6px]">
									<span>{{ job.size }}</span>
									<el-divider direction="vertical" />
									<span>{{ job.type }}</span>
								</p>
								<p>
									<span>热招职位：</span>
									<span class="text-[#3CAE91]">{{ job.name }}</span>
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>
  
<script setup>
	import { useRouter } from 'vue-router'
	import gg1 from '~/assets/images/gg-1.png'
	import gg2 from '~/assets/images/gg-2.png'
	import gg3 from '~/assets/images/gg-3.png'
	import tj1 from '~/assets/images/tj-1.png'

	const router = useRouter()
	const items = [
		{ id: 1, name: '职位1' },
		{ id: 2, name: '职位2' }
	]

	const goToDetail = (id) => {
		router.push(`/job/${id}`)
	}

	const recommendCompanys = ref([gg1, gg2, gg3])
	const hotJobs = ref([
		{
			src: tj1,
			companyName: '孔夫子旧书网',
			name: '前端工程师',
			type: '文化教育',
			size: '已上市'
		},
		{
			src: tj1,
			companyName: '孔夫子旧书网',
			name: '前端工程师',
			type: '文化教育',
			size: '已上市'
		},
		{
			src: tj1,
			companyName: '孔夫子旧书网',
			name: '前端工程师',
			type: '文化教育',
			size: '已上市'
		},
		{
			src: tj1,
			companyName: '孔夫子旧书网',
			name: '前端工程师',
			type: '文化教育',
			size: '已上市'
		},
		{
			src: tj1,
			companyName: '孔夫子旧书网',
			name: '前端工程师',
			type: '文化教育',
			size: '已上市'
		},
		{
			src: tj1,
			companyName: '孔夫子旧书网',
			name: '前端工程师',
			type: '文化教育',
			size: '已上市'
		},
		{
			src: tj1,
			companyName: '孔夫子旧书网',
			name: '前端工程师',
			type: '文化教育',
			size: '已上市'
		},
		{
			src: tj1,
			companyName: '孔夫子旧书网',
			name: '前端工程师',
			type: '文化教育',
			size: '已上市'
		}
	])
</script>

<style lang="scss" scoped>
.r-tit{
	margin-bottom: 16px;
    display: flex;
    height: 16px;
    align-items: center;
	font-size: 16px;
	color: #333;
	font-weight: bold;
    &::before {
        content: "";
        display: inline-block;
        border-left: 3px solid #3CAE91;
        height: 16px;
        width: 3px;
        margin-right: 10px;
    }
}
.company-img {
	width: 270px;
	height: 148px;
	object-fit: cover;
	cursor: pointer;
	margin-bottom: 16px;
	&:last-child{
		margin: 0;
	}
}
.hot-job-item {
	height: 80px;
	display: flex;
	align-items: center;
	margin-bottom: 14px;
	img {
		width: 80px;
		height: 80px;
		object-fit: cover;
		margin-right: 12px;
	}
	h3 {
		font-size: 16px;
		line-height: 16px;
		color: #333;
		font-weight: bold;
		margin-bottom: 10px;
		cursor: pointer;
	}
	p {
		font-size: 14px;
		line-height: 16px;
		color: #999;
	}
}
</style>
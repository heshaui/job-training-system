<template>
	<PersonalTable name="职位订阅" :table-data="tableData"/>
</template>
<script setup>
definePageMeta({
  layout: 'personal'
})
const tableData = ref([
	{
		name: '客户经理',
		xz: '2.2-3万*16薪',
		area: '北京-海淀',
		yq: ['2025应届生经验', '本科学历'],
		status: '招聘中',
		time: '2024-08-10'
	},
	{
		name: '客户经理',
		xz: '2.2-3万*16薪',
		area: '北京-海淀',
		yq: ['2025应届生经验', '本科学历'],
		status: '招聘中',
		time: '2024-08-10'
	},
	{
		name: '客户经理',
		xz: '2.2-3万*16薪',
		area: '北京-海淀',
		yq: ['2025应届生经验', '本科学历'],
		status: '招聘中',
		time: '2024-08-10'
	},
	{
		name: '客户经理',
		xz: '2.2-3万*16薪',
		area: '北京-海淀',
		yq: ['2025应届生经验', '本科学历'],
		status: '招聘中',
		time: '2024-08-10'
	},
	{
		name: '客户经理',
		xz: '2.2-3万*16薪',
		area: '北京-海淀',
		yq: ['2025应届生经验', '本科学历'],
		status: '招聘中',
		time: '2024-08-10'
	}
])
</script>
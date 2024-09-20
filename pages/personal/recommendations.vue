<template>
	<PersonalTable name="职位速配" :table-data="tableData"/>
</template>
<script setup>
import company1 from '~/assets/images/company-1.png'
definePageMeta({
  layout: 'personal'
})
const tableData = ref([
	{
		name: '客户经理',
		companyName: '北京招聘信息技术有限公司',
		logo: company1,
		xz: '2.2-3万*16薪',
		area: '北京-海淀',
		yq: ['2025应届生经验', '本科学历'],
		ppd: '70%'
	},
	{
		name: '客户经理',
		companyName: '北京招聘信息技术有限公司',
		logo: company1,
		xz: '2.2-3万*16薪',
		area: '北京-海淀',
		yq: ['2025应届生经验', '本科学历'],
		ppd: '70%'
	},
	{
		name: '客户经理',
		companyName: '北京招聘信息技术有限公司',
		logo: company1,
		xz: '2.2-3万*16薪',
		area: '北京-海淀',
		yq: ['2025应届生经验', '本科学历'],
		ppd: '70%'
	},
	{
		name: '客户经理',
		companyName: '北京招聘信息技术有限公司',
		logo: company1,
		xz: '2.2-3万*16薪',
		area: '北京-海淀',
		yq: ['2025应届生经验', '本科学历'],
		ppd: '70%'
	},
	{
		name: '客户经理',
		companyName: '北京招聘信息技术有限公司',
		logo: company1,
		xz: '2.2-3万*16薪',
		area: '北京-海淀',
		yq: ['2025应届生经验', '本科学历'],
		ppd: '70%'
	}
])
</script>
<template>
	<ul class="bg-[#fff] mt-[10px] px-[46px] py-[24px] flex justify-between flex-wrap mb-[20px]">
		<li v-for="(item, key) of templateList" :key="key" class="card-item">
			<img :src="item.src" class="w-[100%] h-[315px]" />
			<div class="info">
				<p>{{ item.type }}</p>
				<p>模板价格：<span class="text-[#3CAE91] mr-[5px]">{{ item.price }}</span><span v-if="item.price !== '免费'">积分</span></p>
				<div class="btn-box">
					<span v-if="item.status === '使用中'" class="btn used">使用中</span>
					<button v-else class="btn buy">购买</button>
					<button class="btn preview">预览</button>
				</div>
			</div>
			<img v-if="item.status === '使用中'" src="~/assets/images/used.png" class="isUsed" />
		</li>
	</ul>
</template>

<script setup>
import { ref } from 'vue'
const templateList = ref([
	{src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', status:'使用中', type: '默认模板', price: '免费'},
	{src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', status:'', type: '默认模板', price: '免费'},
	{src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', status:'', type: '默认模板', price: '60'},
	{src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', status:'', type: '默认模板', price: '40'},
	{src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', status:'', type: '默认模板', price: '免费'},
	{src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', status:'', type: '默认模板', price: '30'}
])
</script>

<style lang="scss" scoped>
.card-item {
	width: 238px;
	position: relative;
	border: 1px solid #ddd;
	margin-bottom: 15px;
	.isUsed {
		width: 59.25px;
		height: 53.14px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.info {
		height: 104px;
		padding: 10px 13px;
		border-top: 1px solid #ddd;
		p {
			color: #666;
			font-size: 14px;
			line-height: 14px;
			margin-bottom: 10px;
		}
		.btn-box {
			display: flex;
			justify-content: space-between;
			.btn {
				width: 72px;
				height: 30px;
				text-align: center;
				line-height: 30px;
				font-size: 14px;
				border-radius: 2px;
				&.preview {
					border: 1px solid #ddd;
					line-height: 28px;
					color: #333;
					background: #fff;
				}
				&.used {
					background: #D3D3D3;
					color: #fff;
				}
				&.buy {
					background: #3CAE91;
					color: #fff;
				}
			}
		}
	}
}
</style>
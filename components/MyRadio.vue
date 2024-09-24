<template>
	<div>
		<span v-for="(item, key) of data" :key="key" :class="myValue === item.value ? 'active' : ''" @click="onChecked(item.value)">{{ item.label }}</span>
	</div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
	value: String,
	data: Array
})
const emits = defineEmits(['onChecked'])
const myValue = ref(props.value)
const onChecked = val => {
	myValue.value = val
	emits('onChecked', val)
}
</script>

<style lang="scss" scoped>
$color: #3CAE91;
span {
	display: inline-block;
	height: 32px;
	background: #FFFFFF;
	border: 1px solid #CCCCCC;
	padding: 0 30px;
	color: #999;
	font-size: 14px;
	line-height: 30px;
	text-align: center;
	margin-right: 10px;
	cursor: pointer;
	&.active {
		border-color: $color;
		color: $color;
		background-image: url('~/assets/images/checked.png');
		background-repeat: no-repeat;
		background-position: bottom right;
	}
}
</style>
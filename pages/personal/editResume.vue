<template>
	<section>
		<div v-if="isMyResume" class="w-[100%] h-[60px] leading-[60px] rounded-[8px] bg-[#fff] text-[#333] text-[18px] font-bold pl-[27px] mb-[10px]">修改简历</div>
		<div class="bg-[#fff] p-[15px]">
			<h3 class="text-[#333] text-[18px] font-bold leading-[25px] mb-[16px]">我的简历</h3>
			<el-form ref="form1" :model="form1" label-width="100px" class="bg-[#f7f7f7] p-[20px]" >
				<el-form-item label="姓名：">
					<el-input v-model="form1.name" style="width: 230px;" placeholder="请输入姓名" />
				</el-form-item>
				<el-form-item label="性别：">
					<MyRadio :value="form1.sex" :data="sexData" @onChecked="onChecked($event, form1, 'sex')" />
				</el-form-item>
				<el-form-item label="出生年月：">
					<el-date-picker
						v-model="form1.age"
						type="month"
						style="width: 230px;"
						clearable
						placeholder="请选择"
					/>
				</el-form-item>
				<el-form-item label="参加工作时间：">
					<el-date-picker
						v-model="form1.age"
						type="date"
						style="width: 230px;"
						clearable
						placeholder="请选择"
					/>
				</el-form-item>
				<el-form-item label="户口所在地：">
					<cascader-area v-model="form1.val1" placeholder="请选择" style="width: 360px;" />
				</el-form-item>
				<el-form-item label="现居住地：">
					<cascader-area v-model="form1.val2" placeholder="请选择" style="width: 360px;" />
				</el-form-item>
				<el-form-item label="政治面貌：">
					<el-select v-model="form1.val3" style="width: 230px;" placeholder="请选择政治面貌">
                        <el-option v-for="(item, key) of selectData.politicalOptions" :key="key" :label="item.label" :value="item.value" />
                    </el-select>
				</el-form-item>
				<el-form-item label="联系电话：">
					<el-input v-model="form1.val4" style="width: 230px;" placeholder="请输入" />
				</el-form-item>
				<el-form-item label="电子邮箱：">
					<el-input v-model="form1.val5" style="width: 230px;" placeholder="请输入" />
				</el-form-item>
				<el-form-item>
					<el-button class="my-btn">保存并更新</el-button>
					<el-button>取消</el-button>
				</el-form-item>
			</el-form>
		</div>
	</section>
</template>

<script setup>
import selectData from '~/utils/selectData'
definePageMeta({
  layout: 'personal'
})
const form1 = reactive({
	name: '',
	sex: '1',
	age: '',
	val1: ''
})
const form2 = reactive({})
const form3 = reactive({})
const form4 = reactive({})
const form5 = reactive({})
const form6 = reactive({})
const sexData = [
	{label: '男', value: '1'},
	{label: '女', value: '2'}
]

const onChecked = (val, form, file) => {
	form[file] = val
}
</script>

<style lang="scss" scoped>

</style>
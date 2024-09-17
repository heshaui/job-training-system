<template>
    <div class="p-[20px] bg-[#fff]">
        <search-condition v-for="(item, key) of conditionList" :key="key" :data="item" @onSearch="onSearch" />
        <div class="flex items-center mb-【20px">
            <span class="text-[#333] w-[42px] font-medium text-[14px] mr-[6px]">更多：</span>
            <el-select
                v-for="(item, key) of selectList"
                :key="key"
                v-model="item.value"
                :placeholder="item.label"
                size="small"
                style="width: 88px; margin-right: 18px;"
                @change="onChange"
            >
                <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                />
            </el-select>
        </div>
        <!-- <div class="result">

        </div> -->
    </div>
</template>

<script setup>
    const conditionList = ref([
        {
            label: '性质',
            options: ['全部', '国家机关', '事业单位', '央企', '国企', '银行', '上市公司', '民营企业', '外资/合资企业', '军队文职'],
            more: false
        },
        {
            label: '地点',
            options: [
                '全部', '北京', '天津', '上海', '重庆', '河北', '山西', '辽宁', '吉林', '黑龙江', 
                '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', 
                '广西', '海南', '四川', '贵州', '云南', '陕西', '甘肃', '青海', '台湾', '内蒙古', 
                '广西', '宁夏', '新疆', '西藏', '香港', '澳门'
            ],
            showNum: 13, 
            more: true
        },
        {
            label: '规模',
            options: ['全部', '10人以下', '10-50人', '50-200人', '200-500人', '500-1000人', '1000人以上'],
            more: false
        },
        {
            label: '福利',
            options: [
                '全部', '员工体检', '节日慰问', '硕士安家补贴', '博士安家补贴', '商业险补充', 
                '培养津贴', '落户政策', '免费公寓', '超长假期', '签约奖金', '股权激励', 
                '衣食住行（四季工装、工作餐、职工公寓、通勤班车）', '采暖补贴', '通讯补贴', 
                '住宿补贴', '单身补贴', '一次性安家补贴', '节日福利', '生日福利', '工会福利', 
                '三险一金', '五险一金', '综合补贴', '年终奖金', '奖励计划', '销售奖金', 
                '休假制度', '法定节假日', '六险二金', '七险一金', '五险二金'
            ],
            showNum: 9,
            more: true
        }
    ])
    const selectList = ref([
        {
            value: '',
            label: '学历要求',
            options: [
                { label: '不限', value: 0 },
                { label: '高中', value: 1 },
                { label: '中专', value: 2 },
                { label: '大专', value: 3 },
                { label: '本科', value: 4 },
                { label: '硕士', value: 5 },
                { label: '博士', value: 6 }
            ]
        },
        {
            value: '',
            label: '性别要求',
            options: [
                { label: '不限', value: 0 },
                { label: '女', value: 1 },
            ]
        },
        {
            value: '',
            label: '专业大类',
            options: []
        },
        {
            value: '',
            label: '政治面貌',
            options: [
                { label: '不限', value: 0 },
                { label: '中共党员', value: 1 },
                { label: '中共预备党员', value: 2 },
                { label: '共青团员', value: 3 },
                { label: '民主党派成员', value: 4 },
                { label: '无党派人士', value: 5 },
                { label: '群众', value: 6 }
            ]

        },
        {
            value: '',
            label: '更新时间',
            options: [
                { label: '今天', value: 0 },
                { label: '最近3天', value: 1 },
                { label: '最近7天', value: 2 },
                { label: '最近一个月', value: 3 },
                { label: '最近三个月', value: 4 }
            ]
        }
    ])
    const resultList = ref([])
    const onSearch = (data) => {

    }
    const onChange = data => {

    }
</script>

<style lang="scss" scoped>
.result {
    border-top: 1px solid #ccc;
    padding: 10px;
}
</style>
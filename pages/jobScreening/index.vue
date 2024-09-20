<template>
    <section class="main-bg pt-[62px]">
        <h3 class="text-[#333] text-[36px] leading-[50px] mb-[30px] text-center font-medium">筛选适合你的职位</h3>
        <div class="main-content">
            <ul class="tab-list">
                <li class="tab-item mr-[67px]" :class="active === '1' ? 'active' : ''" @click="active = '1'">按照个人条件筛选</li>
                <li class="tab-item" :class="active === '2' ? 'active' : ''" @click="active = '2'">按职位要求筛选</li>
            </ul>
            <div class="flex job-type justify-center mb-[23px]">
                <p>岗位类型：</p>
                <span v-for="(item, key) of jobTypes" :key="key" :class="jobType === key ? 'active' : ''" @click="jobType=key">{{item}}</span>
            </div>
            <div>
                <div v-show="active === '1'" class="flex flex-wrap px-[14px] justify-between content-between h-[148px]">
                    <cascader-area  placeholder="请选择岗位地址"/>
                    <el-select class="my-select" popper-class="my-popper" placeholder="请选择政治面貌">
                        <el-option label="不限" value="0"/>
                        <el-option label="共青团员" value="1"/>
                        <el-option label="中共党员" value="2"/>
                    </el-select>
                    <el-select class="my-select" popper-class="my-popper" placeholder="请选择基层工作最低年限">
                        <el-option label="不限" value=""/>
                        <el-option label="一年" value=""/>
                        <el-option label="二年" value=""/>
                        <el-option label="三年" value=""/>
                        <el-option label="五年以上" value=""/>
                    </el-select>
                    <el-select class="my-select" popper-class="my-popper" placeholder="请选择学位">
                        <el-option label="大专及以上" value=""/>
                        <el-option label="本科及学士学位" value=""/>
                    </el-select>
                    <el-select class="my-select" popper-class="my-popper" placeholder="请选择学历">
                        <el-option label="" value=""/>
                    </el-select>
                    <el-select class="my-select" popper-class="my-popper" placeholder="请选择学科">
                        <el-option label="哲学" value=""/>
                        <el-option label="经济学" value=""/>
                        <el-option label="法学" value=""/>
                        <el-option label="教育学" value=""/>
                        <el-option label="文学" value=""/>
                        <el-option label="历史学" value=""/>
                        <el-option label="理学" value=""/>
                        <el-option label="工学" value=""/>
                        <el-option label="农学" value=""/>
                        <el-option label="医学" value=""/>
                        <el-option label="军事学" value=""/>
                        <el-option label="管理学" value=""/>
                    </el-select>
                    <el-select class="my-select" popper-class="my-popper" placeholder="请选择专业类">
                        <el-option label="" value=""/>
                    </el-select>
                    <el-select class="my-select" popper-class="my-popper" placeholder="请选择专业名称">
                        <el-option label="" value=""/>
                    </el-select>
                </div>
                <div v-show="active === '2'" class="flex px-[14px] justify-center">
                    <cascader-area  class="mr-[15px]" placeholder="请选择报考省份、地区"/>
                    <el-select class="my-select mr-[15px]" popper-class="my-popper" placeholder="年份">
                        <el-option label="不限" value="0"/>
                        <el-option label="共青团员" value="1"/>
                        <el-option label="中共党员" value="2"/>
                    </el-select>
                    <el-select v-show="jobType === 0" popper-class="my-popper" class="my-select mr-[15px]" placeholder="请选择机构性质">
                        <el-option label="不限" value=""/>
                        <el-option label="一年" value=""/>
                        <el-option label="二年" value=""/>
                        <el-option label="三年" value=""/>
                        <el-option label="五年以上" value=""/>
                    </el-select>
                    <el-select v-show="jobType === 0" popper-class="my-popper" class="my-select" placeholder="请选择招录机关">
                        <el-option label="大专及以上" value=""/>
                        <el-option label="本科及学士学位" value=""/>
                    </el-select>
                    <el-select v-show="jobType === 1" popper-class="my-popper" class="my-select" placeholder="请选择考试类型">
                        <el-option label="" value=""/>
                    </el-select>
                    <el-select v-show="jobType === 2" popper-class="my-popper" class="my-select" placeholder="请选择企业类型">
                        <el-option label="" value=""/>
                    </el-select>
                </div>
            </div>
            <div class="searchBtn">检索职位</div>
            <div class="text-[#333] text-[16px] leading-[16px] text-center mb-[20px]">
                <span class="mr-[10px]">职位查询结果</span>
                <span class="text-[14px] text-[#999]">已为您搜索出 {{ tableData.total }} 条数据</span>
            </div>
            <div class="bg-[#fff]">
                <my-table 
                    :data="tableData.records"
                    :table-columns="columns"
                >
                    <template #dataStat>
                        <el-table-column width="100px" align="center" label="数据分析">
                            <template #default="scope">
                                <span class="btn-text" @click="console.log(scope)">数据分析</span>
                            </template>
                        </el-table-column>
                    </template>
                    <template #detail>
                        <el-table-column width="100px" align="center" label="职位详情">
                            <span class="btn-text">详情</span>
                        </el-table-column>
                    </template>
                </my-table>
                <my-pagination :total="tableData.total" />
            </div>
        </div>
    </section>
</template>

<script setup>
const active = ref('1')
const jobType = ref(0)
const jobTypes = ref(['公务员', '事业编', '央国企', '军队文职'])
const tableData = ref({
    records: [
        {area: '北京'},
        {area: '北京'},
        {area: '北京'},
        {area: '北京'}
    ],
    total: 0
})
const columns = ref([
    {prop: 'area', label: '地区'},
    {prop: '', label: '部门'},
    {prop: '', label: '用人司局'},
    {prop: '', label: '职位名称'},
    {prop: '', label: '专业要求'},
    {prop: '', label: '学历'},
    {prop: '', label: '招考人数'},
    {prop: '', label: '考生身份'},
    {prop: '', label: '职位匹配'},
    {slot: 'dataStat'},
    {slot: 'detail'}
])
</script>

<style lang="scss" scoped>
.tab-list {
    display: flex;
    justify-content: center;
    margin-bottom: 23px;
    .tab-item {
        height: 36px;
        line-height: 28px;
        font-size: 20px;
        color: #333;
        cursor: pointer;
        &.active {
            border-bottom: 2px solid #3CAE91;
            color: #3CAE91;
        }
    }
}
.job-type {
    span {
        display: block;
        height: 24px;
        line-height: 24px;
        cursor: pointer;
        padding: 0 9px;
        font-size: 16px;
        color: #333;
        margin: 0 6px 6px;
        &:hover {
            color: #3CAE91;
        }
        &.active {
            background-color: #3CAE91 ;
            color: #fff;
            border-radius: 12px;
            &:hover {
                color: #fff;
            }
        }
    }
}
.searchBtn {
    width: 220px;
    height: 66px;
    border-radius: 33px;
    line-height: 66px;
    color: #fff;
    text-align: center;
    font-size: 20px;
    margin: 30px auto;
    font-weight: bold;
    background: linear-gradient(to right, #6FD7C4, #3CAE91);
    cursor: pointer;
    &:hover {
        background: linear-gradient(to right,#3CAE91, #6FD7C4);
    }
}
.btn-text {
    cursor: pointer;
    color: #3CAE91;
    font-size: 14px;
}
:deep(.el-select__selected-item.el-select__placeholder) {
    color: #333;
    font-size: 16px;
}
</style>
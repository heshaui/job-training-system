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
            <div class="flex flex-wrap px-[14px] justify-between content-between h-[148px]">
                <cascader-area  placeholder="请选择岗位地址"/>
                <el-select class="my-select" placeholder="flajfdsjf">
                    <el-option label="" value=""/>
                </el-select>
                <el-select class="my-select" placeholder="flajfdsjf">
                    <el-option label="" value=""/>
                </el-select>
                <el-select class="my-select" placeholder="flajfdsjf">
                    <el-option label="" value=""/>
                </el-select>
                <el-select class="my-select" placeholder="flajfdsjf">
                    <el-option label="" value=""/>
                </el-select>
                <el-select class="my-select" placeholder="flajfdsjf">
                    <el-option label="" value=""/>
                </el-select>
                <el-select class="my-select" placeholder="flajfdsjf">
                    <el-option label="" value=""/>
                </el-select>
                <el-select class="my-select" placeholder="flajfdsjf">
                    <el-option label="" value=""/>
                </el-select>
            </div>
            <div class="searchBtn">检索职位</div>
            <div></div>
            <my-table />
            <my-pagination />
        </div>
    </section>
</template>

<script setup>
const active = ref('1')
const jobType = ref(0)
const jobTypes = ref(['公务员', '事业编', '央国企', '军队文职'])
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
    margin: 30px auto 20px;
    font-weight: bold;
    background: linear-gradient(to right, #6FD7C4, #3CAE91);
    cursor: pointer;
    &:hover {
        background: linear-gradient(to right,#3CAE91, #6FD7C4);
    }
}
</style>
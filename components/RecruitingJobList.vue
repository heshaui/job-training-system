<template>
    <div class="main-content">
        <ul>
            <li v-for="(item, key) of jobList" :key="key" class="list-item">
                <div class="left flex-auto">
                    <p class="top">
                        <span class="span-1">{{ item.name }}</span>
                        <span class="text-[#3CAE91]">{{ item.gz }}</span>
                    </p>
                    <p class="bottom">
                        <span class="span-1">{{ item.yq }}</span>
                        <span class="span-2">{{ item.area }}</span>
                        <span>{{ item.time }}</span>
                    </p>
                </div>
                <span class="hover-bg btn" @click="goToDetail(item.id)">详情</span>
            </li>
        </ul>
        <my-pagination :total="jobList.length" @current-change="handleCurrentChange" />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const props = defineProps({
    companyId: String
})
const jobList = ref([
    {
        name: '客户经理',
        yq: '2025应届生经验 | 本科学历',
        area: '北京-海淀',
        gz: '2.2-3万*16薪',
        time: '2024-09-15'
    },
    {
        name: '客户经理',
        yq: '2025应届生经验 | 本科学历',
        area: '北京-海淀',
        gz: '2.2-3万*16薪',
        time: '2024-09-15'
    },
    {
        name: '客户经理',
        yq: '2025应届生经验 | 本科学历',
        area: '北京-海淀',
        gz: '2.2-3万*16薪',
        time: '2024-09-15'
    },
    {
        name: '客户经理',
        yq: '2025应届生经验 | 本科学历',
        area: '北京-海淀',
        gz: '2.2-3万*16薪',
        time: '2024-09-15'
    },
    {
        name: '客户经理',
        yq: '2025应届生经验 | 本科学历',
        area: '北京-海淀',
        gz: '2.2-3万*16薪',
        time: '2024-09-15'
    },
    {
        name: '客户经理',
        yq: '2025应届生经验 | 本科学历',
        area: '北京-海淀',
        gz: '2.2-3万*16薪',
        time: '2024-09-15'
    },
    {
        name: '客户经理',
        yq: '2025应届生经验 | 本科学历',
        area: '北京-海淀',
        gz: '2.2-3万*16薪',
        time: '2024-09-15'
    },
    {
        name: '客户经理',
        yq: '2025应届生经验 | 本科学历',
        area: '北京-海淀',
        gz: '2.2-3万*16薪',
        time: '2024-09-15'
    },
    {
        name: '客户经理',
        yq: '2025应届生经验 | 本科学历',
        area: '北京-海淀',
        gz: '2.2-3万*16薪',
        time: '2024-09-15'
    },
    {
        name: '客户经理',
        yq: '2025应届生经验 | 本科学历',
        area: '北京-海淀',
        gz: '2.2-3万*16薪',
        time: '2024-09-15'
    },
    {
        name: '客户经理',
        yq: '2025应届生经验 | 本科学历',
        area: '北京-海淀',
        gz: '2.2-3万*16薪',
        time: '2024-09-15'
    },
    {
        name: '客户经理',
        yq: '2025应届生经验 | 本科学历',
        area: '北京-海淀',
        gz: '2.2-3万*16薪',
        time: '2024-09-15'
    }
])
const handleCurrentChange = currentPage => {
    console.log(currentPage)
}

const router = useRouter()
const goToDetail = id => {
    router.push({path: `/RecruitingJob/${2}`, query: { companyId: props.companyId }})
}
</script>

<style lang="scss" scoped>
.list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 30px 16px 16px;
    height: 108px;
    margin-bottom: 16px;
    background: #fff;
    .left {
        p {
            display: flex;
        }
        p.top {
            font-size: 20px;
            line-height: 28px;
            color: #333;
            margin-bottom: 26px;
            font-weight: bold;
        }
        p.bottom {
            font-size: 16px;
            line-height: 22px;
            color: #333;
        }
        span {
            display: block;
            &.span-1 {
                width: 372px;
            }
            &.span-2 {
                width: 280px;
            }
        }
    }
    .btn {
        display: block;
        width: 108px;
        height: 44px;
        background: #3CAE91;
        line-height: 44px;
        border-radius: 4px;
        text-align: center;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
    }
}
</style>

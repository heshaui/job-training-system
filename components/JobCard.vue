<template>
    <div class="job-card">
        <img :src="data.logo" :alt="data.name" @click="goToDetail" /> 
        <div>
            <h3 @click="goToDetail">{{ data.name }}</h3>
            <p class="mb-[10px]">
                <span>
                    <img src="~/assets/images/job-icon-1.png" />
                    {{ data.location }}
                </span>
                <span>
                    <img src="~/assets/images/job-icon-2.png" />
                    {{ data.size }}
                </span>
                <span>
                    <img src="~/assets/images/job-icon-3.png" />
                    {{ data.type }}
                </span>
            </p>
            <p>
                <span class="job">
                    <img src="~/assets/images/job-icon-4.png" />
                    {{ data.jobName }}
                </span>
                <span class="auto">
                    <img src="~/assets/images/job-icon-5.png" />
                    {{ data.time }}
                </span>
            </p>
        </div>
        <div class="right-box">
            <div class="follow-box">
                <img v-if="!data.isFollow" src="~/assets/images/follow.png" alt="关注">
                <img v-else src="~/assets/images/follow-1.png" alt="已关注">
                <img v-if="!data.isCollection" src="~/assets/images/collection.png" alt="收藏">
                <img v-else src="~/assets/images/collection-1.png" alt="已收藏">
            </div>
            <div class="flex justify-end">
                <span class="btn">详情</span>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    const props = defineProps({
        data: Object
    })
    const router = useRouter()
    const goToDetail = () => {
        router.push(`/jobDatabase/${props.data.id}`)
    }
</script>

<style lang="scss" scoped>
.job-card {
    width: 900px;
    height: 139px;
    padding: 0 21px 0 10px;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    color: #333;
    margin-top: 12px;
    &:hover {
        box-shadow: 0px 2px 4px 2px rgba(189,189,189,0.5);
    }
    img {
        width: 120px;
        height: 107px;
        object-fit: cover;
        margin-right: 20px;
        cursor: pointer;
    }
    h3 {
        font-size: 20px;
        line-height: 28px;
        font-weight: bold;
        margin-bottom: 16px;
        cursor: pointer;
    }
    p {
        height: 22px;
        display: flex;
        align-items: center;
        font-size: 16px;
        span {
            height: 22px;
            display: flex;
            align-items: center;
            margin-right: 20px;
            width: 140px;
            &.job {
                color: #3CAE91;
            }
            &.auto {
                width: auto;
            }
            img {
                width: 16px;
                height: 16px;
                margin-right: 10px;
            }
        }
    }
    .right-box {
        height: 100%;
        width: 170px;
        margin-left: auto;
        padding-top: 14px;
    }
    .follow-box {
        margin-bottom: 25px;
        display: flex;
        justify-content: space-between;
        img {
            width: 80px;
            height: 26px;
            cursor: pointer;
            margin: 0;
        }
    }
    .btn {
        display: block;
        width: 83px;
        height: 30px;
        background: #FFFFFF;
        border-radius: 4px;
        border: 1px solid #B2B2B2;
        line-height: 28px;
        color: #999;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        &:hover {
            background: #3CAE91;
            color: #fff;
            border-color: #3CAE91;
        }
    }
}
</style>
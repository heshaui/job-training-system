<template>
    <div class="user-card">
        <div class="flex items-center h-[36px] mb-[31px]">
            <img :src="userInfo.src" class="avator" />
            <div>
                <p class="text-[#333] text-[14px] mb-[8px] leading-[14px]">hi, {{ userInfo.name }}</p>
                <p class="text-[#999] text-[12px] leading-[12px]">欢迎回来</p>
            </div>
        </div>
        <div class="flex justify-between px-[24px] num-box mb-[25px]">
            <div>
                <span class="num">{{ userInfo.msnum }}</span>
                <span class="label">面试通知</span>
            </div>
            <div>
                <span class="num">{{ userInfo.scnum }}</span>
                <span class="label">收藏记录</span>
            </div>
            <div>
                <span class="num">{{ userInfo.qynum }}</span>
                <span class="label">企业看过</span>
            </div>
        </div>
        <div class="flex justify-between px-[24px] icon-box mb-[21px]">
            <div>
                <img :src="icon1" />
                <span>我的简历</span>
            </div>
            <div>
                <img :src="icon2" />
                <span>创建简历</span>
            </div>
            <div>
                <img :src="icon3" />
                <span>关注记录</span>
            </div>
        </div>
        <div class="btn-box">
            <button class="mr-[25px]">管理中心</button>
            <button class="logout">退出登录</button>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import company1 from '~/assets/images/company-1.png'
import icon1 from '~/assets/images/user-card-1.png'
import icon2 from '~/assets/images/user-card-2.png'
import icon3 from '~/assets/images/user-card-3.png'

const userInfo = ref({
    name: '占三个',
    src: company1,
    msnum: 10,
    scnum: 12,
    qynum: 20
})
</script>

<style lang="scss" scoped>
.user-card {
    width: 330px;
    height: 285px;
    float: right;
    margin-top: 121px;
    margin-right: 15px;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 20px;

}
.avator {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 10px;
    border: 1px solid #dcdcdc;
}
.num-box {
    span {
        display: block;
        text-align: center;
        &.num {
            color: #3CAE91;
            font-weight: bold; 
            font-size: 18px;
            margin-bottom: 2px;
            line-height: 18px;
        }
        &.label {
            color: #666;
            font-size: 12px;
            line-height: 17px;
        }
    }
}
.icon-box {
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        img {
            width: 36px;
            height: 36px;
            margin-bottom: 6px;
        }
        span {
            font-size: 12px;
            color: #666;
            line-height: 12px;
        }
    }
}
.btn-box {
    text-align: center;
    button {
        width: 108px;
        height: 36px;
        background: #3CAE91;
        border-radius: 4px;
        color: #fff;
        line-height: 36px;
        text-align: center;
        font-size: 14px;
        &.logout {
            background: #FF7839;
        }
    }
}
</style>


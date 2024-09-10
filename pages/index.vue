<template>
    <div>
        <div>我是首页</div>
        <button @click="goToPersonal">个人中心</button>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
useSeoMeta({
    title: '岗位培训 - 提升职业技能 | 公司招聘平台',
    description: '我们提供专业的岗位培训课程，帮助提升您的职业技能，找到理想的工作。',
    author: '公司招聘平台'
})

const router = useRouter()

const goToPersonal = () => {
  router.push('/personal/membership')
}

</script>
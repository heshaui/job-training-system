<template>
    <el-form ref="formRef" :model="form" class="login-box" :rules="rules" auto-complete="on" label-position="left">
        <h3>登录账号</h3>
        <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名/手机号/邮箱" type="text" tabindex="1" auto-complete="on" />
        </el-form-item>
        <el-form-item prop="password">
            <el-input ref="passwordRef" v-model="form.password" :type="passwordType" placeholder="请输入密码" tabindex="2" auto-complete="on" @keyup.enter="onLogin">
                <template #suffix>
                    <el-icon class="cursor-pointer" @click="showPassword">
                        <Hide v-if="passwordType === 'password'" />
                        <View v-else />
                    </el-icon>
                </template>
            </el-input>
        </el-form-item>
        <el-button class="btn mt-[2px] hover-bg" :loading="loading" @click="onLogin">登录</el-button>
        <div class="flex justify-between mt-[17px] h-[20px] items-center">
            <span class="text-[14px] text-[#cbcbcb] cursor-pointer">忘记密码</span>
            <span class="text-[14px] text-[#3CAE91] cursor-pointer hover-text">注册账号</span>
        </div>
    </el-form>
</template>

<script setup>
import { ref, reactive } from 'vue';
const formRef = ref(null);
const loading = ref(false)


const form = reactive({
    username: '',
    password: ''
})
const rules = ref({
    username: [
        { required: true, trigger: 'blur', message: '请输入用户名/手机号/邮箱' }
    ],
    password: [
        { required: true, trigger: 'blur', message: '请输入密码' },
        { min: 6, max: 18, trigger: 'blur', message: '密码长度6-18位' }
    ]
})

const passwordType = ref('password')
const passwordRef = ref(null);
const showPassword = () => {
    passwordType.value = passwordType.value === 'password' ? '' : 'password'
}

const onLogin = () => {
    formRef.value.validate(valid => {
        if (valid) {
            loading.value = true
        }
    })
}

</script>

<style lang="scss" scoped>
.login-box {
    width: 330px;
    height: 285px;
    float: right;
    margin-top: 121px;
    margin-right: 15px;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 20px 30px 0;
    h3 {
        font-size: 20px;
        color: #333;
        line-height: 28px;
        text-align: center;
        margin-bottom: 20px;
        font-weight: 600;
    }
    :deep(.el-button) {
        width: 270px;
        height: 44px;
        background-color: #3CAE91;
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
        line-height: 44px;
        border: none;
        span {
            color: #fff;
        }
    }
}
:deep(.el-input) {
    height: 40px;
    border-color: #D5D5D5;
    border-radius: 4px;
}
:deep(.el-input__inner) {
  height: 40px;
  font-size: 16px;
  color: #666;
}

:deep(.el-input__inner::placeholder) {
  font-size: 14px;
  color: #ccc;
}
</style>
import axios from 'axios'
import { ElMessage } from 'element-plus'
export default defineNuxtPlugin((nuxtApp) => {
	const instance = axios.create({
		baseURL: '', // 你的API基础路径
		timeout: 10 * 60 * 1000,
		responseType: 'json'
	})

	// 添加请求拦截器
	instance.interceptors.request.use((config) => {
		// 在请求发送之前做一些处理
		return config
	}, (error) => {
		// 对请求错误做点什么
		return Promise.reject(error)
	})

	// 添加响应拦截器
	instance.interceptors.response.use((response) => {
		if (response.data) {
			if (response.data.msg === 'success') {
				return Promise.resolve(response.data)
			} else if (response.data.message) {
				ElMessage.error(response.data.message)
				return Promise.reject(response.data)
			} else {
				ElMessage.error(response.data.msg)
				return Promise.reject(response.data)
			}
		} else {
			return Promise.resolve(response)
		}
	}, (error) => {
		// 对响应错误做点什么
		return Promise.reject(error)
	})

	// 将 Axios 实例挂载到 Nuxt 应用的全局上下文中
	nuxtApp.provide('axios', instance)
})

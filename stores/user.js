// stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: ''// localSorage.getItem('token') || ''
  }),
  actions: {
    
  },
  getters: {
    isLogin: state => {
      let mark = false
      if (state.token) mark = true
      return mark
    } 
  }
})
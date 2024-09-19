// stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.token || ''
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
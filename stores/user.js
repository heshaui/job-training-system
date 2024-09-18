// stores/counter.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('counter', {
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
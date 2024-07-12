import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref()
    const token = ref()
    //设置用户信息
    const setUser = (data) => {
      user.value = data
      token.value = data.token
    }
    // 清空用户信息
    const clearUser = () => {
      user.value = []
      token.value = ''
    }
    return {
      user,
      token,
      setUser,
      clearUser
    }
  },
  {
    // persist: true, // 持久化存储
    persist: true
  }
)

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
    return {
      user,
      token,
      setUser
    }
  },
  {
    // persist: true, // 持久化存储
    persist: true
  }
)

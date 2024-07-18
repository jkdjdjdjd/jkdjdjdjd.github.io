import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCartStore } from '@/stores'
import { mergeCartService } from '@/apis/cart'

export const useUserStore = defineStore(
  'user',
  () => {
    const cartStore = useCartStore()
    const user = ref()
    const token = ref()
    //设置用户信息
    const setUser = async data => {
      user.value = data
      token.value = data.token
      // 登录时合并购物车数据
      await mergeCartService(
        cartStore.cartList.map(item => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count
          }
        })
      )
    }
    // 清空用户信息
    const clearUser = () => {
      user.value = []
      token.value = ''
      // 退出登录时也要清空购物车
      cartStore.clearCart()
    }
    return {
      user,
      token,
      setUser,
      clearUser
    }
  },
  {
    // 持久化存储
    persist: true
  }
)

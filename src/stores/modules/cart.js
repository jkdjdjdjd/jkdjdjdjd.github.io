import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores'
import {
  addCartService,
  getCartListService,
  deleteCartService
} from '@/apis/cart'
export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()
    const cartList = ref([])
    //添加
    const addCart = async data => {
      if (userStore.token) {
        await addCartService(data)
        const res = await getCartListService()
        cartList.value = res
      } else {
        // 使用find,item是引用数据类型，可以改变原来的值
        const item = cartList.value.find(item => item.skuId === data.skuId)
        if (item) {
          item.count += data.count
        } else {
          cartList.value.push(data)
        }
      }
    }
    //删除
    const delCart = async skuId => {
      if (userStore.token) {
        await deleteCartService([skuId])
        const res = await getCartListService()
        cartList.value = res
      } else {
        cartList.value = cartList.value.filter(item => item.skuId !== skuId)
      }
    }
    //总价，总个数
    const allPrice = computed(() =>
      cartList.value.reduce((pre, cur) => pre + cur.price * cur.count, 0)
    )
    const allCount = computed(() =>
      cartList.value.reduce((pre, cur) => pre + cur.count, 0)
    )
    const selectPrice = computed(() =>
      cartList.value
        .filter(item => item.selected)
        .reduce((pre, cur) => pre + cur.price * cur.count, 0)
    )
    const selectCount = computed(() =>
      cartList.value
        .filter(item => item.selected)
        .reduce((pre, cur) => pre + cur.count, 0)
    )
    //单选功能
    const singleSelect = (skuId, isSelect) => {
      const item = cartList.value.find(item => item.skuId === skuId)
      if (item) {
        item.selected = isSelect
      }
    }
    // 全选功能
    const isAll = computed({
      get: () => {
        // 由其他值计算isAll的值
        return cartList.value.every(item => item.selected)
      },
      set: newValue => {
        // 设置isAll的值，修改其他值
        cartList.value.forEach(item => (item.selected = newValue))
      }
    })

    // 清空购物车
    const clearCart = () => {
      cartList.value = []
    }
    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      singleSelect,
      isAll,
      selectCount,
      selectPrice,
      clearCart
    }
  },
  {
    persist: true
  }
)

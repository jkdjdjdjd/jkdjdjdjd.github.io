import { defineStore } from 'pinia'
import { ref } from 'vue'
import { layoutGetCategoryService } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])
  // 获取分类列表
  const getCategoryList = async () => {
    categoryList.value = await layoutGetCategoryService()
  }
  return {
    categoryList,
    getCategoryList
  }
})

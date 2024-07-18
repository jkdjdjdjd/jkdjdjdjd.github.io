import { onBeforeRouteUpdate } from 'vue-router'
import { useRoute } from 'vue-router'
import { getCategoryDataService } from '@/apis/category'
import { ref, onMounted } from 'vue'
//逻辑函数拆分业务
export const useCategory = () => {
  const route = useRoute()
  const categoryData = ref({})
  // 请求分类页数据
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryDataService(id)
    categoryData.value = res
    // console.log('🚀 ~ getCategory ~ res:', res)
  }
  // 页面加载完成后，请求数据
  onMounted(() => {
    getCategory()
  })
  //路由变化后，请求数据,to包含路由的详细信息
  onBeforeRouteUpdate(to => {
    //轮播图都一样，不需要请求
    getCategory(to.params.id)
  })
  return {
    categoryData
  }
}

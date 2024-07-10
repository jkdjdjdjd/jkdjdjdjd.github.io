import { getHomeBannerService } from '@/apis/home'
import { onMounted, ref } from 'vue'
export const useBanner = () => {
  //获取分类轮播图数据
  const bannerList = ref([])
  const getBannerList = async () => {
    const res = await getHomeBannerService(2)
    bannerList.value = res
    // console.log('🚀 ~ getBannerList ~ res:', res)
  }
  onMounted(() => {
    getBannerList()
  })
  return {
    bannerList
  }
}

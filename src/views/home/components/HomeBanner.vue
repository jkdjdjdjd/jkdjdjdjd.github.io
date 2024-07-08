<script setup>
import { ref, onMounted } from 'vue'
import { getHomeBannerService } from '@/apis/home'
const bannerList = ref([])

const getBannerList = async () => {
  bannerList.value = await getHomeBannerService()
}

onMounted(() => {
  getBannerList()
})
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img @click="$router.push(item.hrefUrl)" :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>

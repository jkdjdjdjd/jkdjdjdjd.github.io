<script setup>
import HomePanel from './HomePanel.vue'
import { getHomeHotGoodsService } from '@/apis/home'
import { ref } from 'vue'
const hotList = ref([])
const getHotList = async () => {
  const res = await getHomeHotGoodsService()
  hotList.value = res
  // console.log('🚀 ~ getHotList ~ hotList.value:', hotList.value)
}
getHotList()
</script>

<template>
  <!-- 图片懒加载，图片进入可视区域才加载 -->
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
    <ul class="goods-list">
      <li v-for="item in hotList" :key="item.id">
        <RouterLink to="/">
          <img v-img-lazy="item.picture" alt="" />
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>

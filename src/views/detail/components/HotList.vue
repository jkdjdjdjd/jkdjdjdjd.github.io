<script setup>
import { getHotListService } from '@/apis/detail'
import { onMounted } from 'vue'
import { ref } from 'vue'
import GoodsItem from '@/views/home/components/GoodsItem.vue'
const props = defineProps({
  queryObj: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
const hotList = ref([])
const getHotList = async () => {
  const res = await getHotListService({ ...props.queryObj, limit: 3 })
  hotList.value = res
}
onMounted(() => {
  getHotList()
})
</script>

<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <GoodsItem v-for="item in hotList" :key="item.id" :good="item"></GoodsItem>
  </div>
</template>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>

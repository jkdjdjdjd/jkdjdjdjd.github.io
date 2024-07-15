<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import GoodsItem from '@/views/home/components/GoodsItem.vue'
import { getCategoryGoodsService, getFinalGoodsService } from '@/apis/category'
const route = useRoute()
const subCategory = ref([])
const isLoading = ref(true)
// 获取子分类商品
const getSubCategory = async () => {
  const res = await getCategoryGoodsService(route.params.id)
  subCategory.value = res
}
// 条件筛选数据
const conditionData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const finalData = ref([])
//获取最终分类的商品
const getFinalCategory = async () => {
  const res = await getFinalGoodsService(conditionData.value)
  finalData.value = res
  isLoading.value = false
}
//更改排序方式逻辑
const handleTab = async (pane) => {
  //更改请求参数后重新发送请求
  conditionData.value.page = 1
  if (pane.props.name === 'orderNum') {
    //重新写逻辑是因为，getFinalGoodsService是异步请求,排序逻辑会先执行
    const res = await getFinalGoodsService(conditionData.value)
    finalData.value = res
    //根据finalData.value.items[0].orderNum降序排序
    finalData.value.items.sort((a, b) => {
      return b.orderNum - a.orderNum
    })
  } else {
    getFinalCategory()
  }
}
// 无限加载逻辑
const disabledInfinite = ref(false)
const infiniteHandler = async () => {
  const newFinalData = ref([])
  conditionData.value.page += 1
  const { items } = await getFinalGoodsService(conditionData.value)
  newFinalData.value = items
  finalData.value.items.push(...newFinalData.value)
  if (items.length <= 0) {
    // console.log('不让你加载了')
    disabledInfinite.value = true
  }
}
onMounted(() => {
  getSubCategory()
  getFinalCategory()
})
</script>

<template>
  <div>
    <div class="container">
      <!-- 面包屑 -->
      <div class="bread-container" v-myLoading="isLoading">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item
            :to="{ path: `/rabbit/category/${subCategory.parentId}` }"
            >{{ subCategory.parentName }}
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{ subCategory.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="sub-container">
        <el-tabs
          @tab-click="handleTab"
          type="card"
          v-model="conditionData.sortField">
          <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
          <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
          <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
        </el-tabs>
        <div
          class="body"
          :infinite-scroll-disabled="disabledInfinite"
          v-infinite-scroll="infiniteHandler">
          <!-- 商品列表-->
          <GoodsItem
            v-for="item in finalData.items"
            :key="item.id"
            :good="item"></GoodsItem>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>

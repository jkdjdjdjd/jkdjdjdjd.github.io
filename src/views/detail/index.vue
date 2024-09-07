<script setup>
import { onMounted, ref } from 'vue'
import { getDetailService } from '@/apis/detail'
import { ElMessage } from 'element-plus'
import { useRoute } from 'vue-router'
import HotList from './components/HotList.vue'
import { useCartStore } from '@/stores'
const cartStore = useCartStore()
const count = ref(1) // 购买数量
const route = useRoute()
const detail = ref({})
const isLoading = ref(true)
const skuObj = ref({})
// 获取商品详情
const getDetail = async () => {
  const res = await getDetailService(route.params.id)
  detail.value = res
  isLoading.value = false
}
const getSku = sku => {
  skuObj.value = sku
  console.log('🚀 ~ getSku ~ sku:', sku)
}
const handleAddCart = () => {
  if (skuObj.value.skuId) {
    //添加操作
    cartStore.addCart({
      id: detail.value.id,
      name: detail.value.name,
      price: detail.value.price,
      picture: detail.value.mainPictures[0],
      count: count.value,
      skuId: skuObj.value.skuId,
      attrsText: skuObj.value.specsText,
      selected: true
    })
    ElMessage.success('添加成功')
    count.value = 1
  } else {
    //提示
    ElMessage.error('请选择商品规格')
  }
}
onMounted(() => {
  getDetail()
})
</script>

<template>
  <div class="xtx-goods-page" v-personLoading="isLoading">
    <div class="container" v-if="detail.id">
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item
            :to="{ path: `/rabbit/category/${detail.categories[1].id}` }"
            >{{ detail.categories[1].name }}
          </el-breadcrumb-item>
          <el-breadcrumb-item
            :to="{ path: `/rabbit/category/sub/${detail.categories[0].id}` }"
            >{{ detail.categories[0].name }}
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{ detail.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 商品信息 -->
      <div class="info-container">
        <div>
          <div class="goods-info">
            <div class="media">
              <!-- 图片预览区 -->
              <XtxPreviewImg :imageList="detail.mainPictures"></XtxPreviewImg>
              <!-- 统计数量 -->
              <ul class="goods-sales">
                <li>
                  <p>销量人气</p>
                  <p>{{ detail.salesCount }}+</p>
                  <p><i class="iconfont icon-task-filling"></i>销量人气</p>
                </li>
                <li>
                  <p>商品评价</p>
                  <p>{{ detail.commentCount }}+</p>
                  <p><i class="iconfont icon-comment-filling"></i>查看评价</p>
                </li>
                <li>
                  <p>收藏人气</p>
                  <p>{{ detail.collectCount }}+</p>
                  <p><i class="iconfont icon-favorite-filling"></i>收藏商品</p>
                </li>
                <li>
                  <p>品牌信息</p>
                  <p>{{ detail.brand.name }}+</p>
                  <p><i class="iconfont icon-dynamic-filling"></i>品牌主页</p>
                </li>
              </ul>
            </div>
            <div class="spec">
              <!-- 商品信息区 -->
              <p class="g-name">{{ detail.name }}</p>
              <p class="g-desc">{{ detail.desc }}</p>
              <p class="g-price">
                <span>{{ detail.price }}</span>
                <span> {{ detail.oldPrice }}</span>
              </p>
              <div class="g-service">
                <dl>
                  <dt>促销</dt>
                  <dd>12月好物放送，App领券购买直降120元</dd>
                </dl>
                <dl>
                  <dt>服务</dt>
                  <dd>
                    <span>无忧退货</span>
                    <span>快速退款</span>
                    <span>免费包邮</span>
                    <a href="javascript:;">了解详情</a>
                  </dd>
                </dl>
              </div>
              <!-- sku组件 -->
              <XtxSku :goods="detail" @getSkuFn="getSku"></XtxSku>
              <!-- 数据组件 -->
              <el-input-number v-model="count" :min="1" />
              <!-- 按钮组件 -->
              <div>
                <el-button size="large" @click="handleAddCart" class="btn">
                  加入购物车
                </el-button>
              </div>
            </div>
          </div>
          <div class="goods-footer">
            <div class="goods-article">
              <!-- 商品详情 -->
              <div class="goods-tabs">
                <nav>
                  <a>商品详情</a>
                </nav>
                <div class="goods-detail">
                  <!-- 属性 -->
                  <ul class="attrs">
                    <li
                      v-for="item in detail.details.properties"
                      :key="item.name">
                      <span class="dt">{{ item.name }}</span>
                      <span class="dd">{{ item.value }}</span>
                    </li>
                  </ul>
                  <!-- 图片 -->
                  <img
                    v-for="item in detail.details.pictures"
                    :key="item"
                    :src="item"
                    alt="" />
                </div>
              </div>
            </div>
            <!-- 24热榜+专题推荐 -->
            <div class="goods-aside">
              <HotList
                :queryObj="{ id: detail.id, type: 1 }"
                title="24小时热销"></HotList>
              <HotList
                :queryObj="{ id: detail.id, type: 2 }"
                title="周热销"></HotList>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.xtx-goods-page {
  .goods-info {
    min-height: 600px;
    background: #fff;
    display: flex;

    .media {
      width: 580px;
      height: 600px;
      padding: 30px 50px;
    }

    .spec {
      flex: 1;
      padding: 30px 30px 30px 0;
    }
  }

  .goods-footer {
    display: flex;
    margin-top: 20px;

    .goods-article {
      width: 940px;
      margin-right: 20px;
    }

    .goods-aside {
      width: 280px;
      min-height: 1000px;
    }
  }

  .goods-tabs {
    min-height: 600px;
    background: #fff;
  }

  .goods-warn {
    min-height: 600px;
    background: #fff;
    margin-top: 20px;
  }

  .number-box {
    display: flex;
    align-items: center;

    .label {
      width: 60px;
      color: #999;
      padding-left: 10px;
    }
  }

  .g-name {
    font-size: 22px;
  }

  .g-desc {
    color: #999;
    margin-top: 10px;
  }

  .g-price {
    margin-top: 10px;

    span {
      &::before {
        content: '¥';
        font-size: 14px;
      }

      &:first-child {
        color: $priceColor;
        margin-right: 10px;
        font-size: 22px;
      }

      &:last-child {
        color: #999;
        text-decoration: line-through;
        font-size: 16px;
      }
    }
  }

  .g-service {
    background: #f5f5f5;
    width: 500px;
    padding: 20px 10px 0 10px;
    margin-top: 10px;

    dl {
      padding-bottom: 20px;
      display: flex;
      align-items: center;

      dt {
        width: 50px;
        color: #999;
      }

      dd {
        color: #666;

        &:last-child {
          span {
            margin-right: 10px;

            &::before {
              content: '•';
              color: $xtxColor;
              margin-right: 2px;
            }
          }

          a {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .goods-sales {
    display: flex;
    width: 400px;
    align-items: center;
    text-align: center;
    height: 140px;

    li {
      flex: 1;
      position: relative;

      ~ li::after {
        position: absolute;
        top: 10px;
        left: 0;
        height: 60px;
        border-left: 1px solid #e4e4e4;
        content: '';
      }

      p {
        &:first-child {
          color: #999;
        }

        &:nth-child(2) {
          color: $priceColor;
          margin-top: 10px;
        }

        &:last-child {
          color: #666;
          margin-top: 10px;

          i {
            color: $xtxColor;
            font-size: 14px;
            margin-right: 2px;
          }

          &:hover {
            color: $xtxColor;
            cursor: pointer;
          }
        }
      }
    }
  }
}

.goods-tabs {
  min-height: 600px;
  background: #fff;

  nav {
    height: 70px;
    line-height: 70px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;

    a {
      padding: 0 40px;
      font-size: 18px;
      position: relative;

      > span {
        color: $priceColor;
        font-size: 16px;
        margin-left: 10px;
      }
    }
  }
}

.goods-detail {
  padding: 40px;

  .attrs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;

    li {
      display: flex;
      margin-bottom: 10px;
      width: 50%;

      .dt {
        width: 100px;
        color: #999;
      }

      .dd {
        flex: 1;
        color: #666;
      }
    }
  }

  > img {
    width: 100%;
  }
}

.btn {
  margin-top: 20px;
}

.bread-container {
  padding: 25px 0;
}
</style>

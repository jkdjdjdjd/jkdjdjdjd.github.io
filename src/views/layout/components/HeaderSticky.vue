<script setup>
// 使用vueUse库中的useScroll方法，监听页面滚动距离，并返回y轴距离顶部的距离
import { useScroll } from '@vueuse/core'
import { useCategoryStore } from '@/stores'

const categoryStore = useCategoryStore()
// console.log('🚀 ~ categoryStore:', categoryStore.categoryList)

const { y } = useScroll(window)
</script>

<template>
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <!-- 导航区域 -->
      <ul class="app-header-nav">
        <li
          class="home"
          v-for="item in categoryStore.categoryList"
          :key="item.id">
          <!-- 注意这里的模版字符串用法，在双引号里面写 -->
          <RouterLink :to="`/rabbit/category/${item.id}`">{{
            item.name
          }}</RouterLink>
        </li>
      </ul>

      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  transition: all 0.3s linear;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  opacity: 0;
  transform: translateY(-100%);
  // 状态二：移除平移 + 完全不透明
  &.show {
    opacity: 1;
    transform: translateY(0);
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url('@/assets/images/logo.png') no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: $xtxColor;
      }
    }
  }
}

.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;

      &:hover {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
  }
}
a.router-link-active {
  color: $xtxColor;
  border-bottom: 1px solid $xtxColor;
}
</style>

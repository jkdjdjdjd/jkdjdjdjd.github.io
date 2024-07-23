<script setup>
import { onMounted, ref, watch } from 'vue'
import { useMouseInElement } from '@vueuse/core'
defineProps({
  imageList: {
    type: Array
  }
})
const target = ref(null) // 放大镜的目标元素
const slider = ref(null) // 蒙层小滑块
const large = ref(null) // 放大镜大图
const isShowLarge = ref(false) // 是否显示放大镜大图
// 图片列表

const activeIndex = ref(0) // 当前激活的图片索引,传递给详情页，加入购物车时可以传递对应图片

const handleClick = index => {
  activeIndex.value = index
}

onMounted(() => {
  //控制滑块
  //isOutside 鼠标是否在target外面
  const { elementX, elementY, isOutside } = useMouseInElement(target.value)
  watch([elementX, elementY, isOutside], ([newElementX, newElementY]) => {
    isShowLarge.value = false
    if (isOutside.value) return
    isShowLarge.value = true
    // 控制滑块的移动
    slider.value.style.left =
      newElementX < 100
        ? '0px'
        : newElementX > 300
          ? '200px'
          : `${newElementX - 100}px`
    slider.value.style.top =
      newElementY < 100
        ? '0px'
        : newElementY > 300
          ? '200px'
          : `${newElementY - 100}px`
    // 控制大图的移动
    large.value.style.backgroundPositionX =
      newElementX < 100
        ? '0px'
        : newElementX > 300
          ? '-400px'
          : `-${(newElementX - 100) * 2}px`
    large.value.style.backgroundPositionY =
      newElementY < 100
        ? '0px'
        : newElementY > 300
          ? '-400px'
          : `-${(newElementY - 100) * 2}px`
  })
})
</script>

<template>
  <div class="goods-image">
    <!-- 左侧大图-->
    <div class="middle" ref="target">
      <img :src="imageList[activeIndex]" alt="" />
      <!-- 蒙层小滑块 -->
      <div
        ref="slider"
        class="layer"
        :style="{ left: `0px`, top: `0px` }"></div>
    </div>
    <!-- 小图列表 -->
    <ul class="small">
      <li
        :class="{ active: i === activeIndex }"
        @click="handleClick(i)"
        v-for="(img, i) in imageList"
        :key="i">
        <img :src="img" alt="" />
      </li>
    </ul>
    <!-- 放大镜大图 -->
    <div
      ref="large"
      class="large"
      :style="[
        {
          backgroundImage: `url(${imageList[activeIndex]})`
        }
      ]"
      v-show="isShowLarge"></div>
  </div>
</template>

<style scoped lang="scss">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;

  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
    border: 1px solid $xtxColor;
  }

  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    z-index: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    // 背景图:盒子的大小 = 2:1  将来控制背景图的移动来实现放大的效果查看 background-position
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }

  .layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.2);
    // 绝对定位 然后跟随咱们鼠标控制left和top属性就可以让滑块移动起来
    left: 0;
    top: 0;
    position: absolute;
  }

  .small {
    width: 80px;

    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>

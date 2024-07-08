<script setup>
import HeaderSticky from './components/HeaderSticky.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<template>
  <!-- 吸顶导航 -->
  <HeaderSticky></HeaderSticky>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <!-- 二级路由出口 -->
  <router-view></router-view>
  <LayoutFooter></LayoutFooter>
</template>

<style scoped></style>

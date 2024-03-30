<template>
  <view class="tabbar-page-container">
    <scroll-view :scroll-y="true" :style="`height: ${scrollViewHeight}px`">
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
    </scroll-view>
  </view>
  <TabBar path="/pages/home/home" />
</template>

<script setup>
import TabBar from "@/components/tabbar/tabbar.vue";
import { useScrollViewHeight } from "@/hooks/scroll-view-height";
import { useHideTabBar } from "@/hooks/hide-tabbar";

const scrollViewHeight = useScrollViewHeight(130);

useHideTabBar();
</script>

<style lang="scss" scoped></style>

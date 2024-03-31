<template>
  <view class="tabbar-page-container page-style">
    <uv-status-bar />
    <view class="header">
      <uv-search inputAlign="center" height="35" :showAction="false" />
      <view class="header-right-icon">
        <i class="iconfont icon-PlanetOutline"></i>
      </view>
    </view>

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
      <uv-button text="GO" type="primary"></uv-button>
    </scroll-view>
  </view>
  <TabBar path="/pages/home/home" />
</template>

<script setup>
import { ref } from "vue";
import TabBar from "@/components/tabbar/tabbar.vue";
import { useScrollViewHeight } from "@/hooks/scroll-view-height";
import { useHideTabBar } from "@/hooks/hide-tabbar";
import { useThemeColors } from "@/hooks/colors";

const { scrollViewHeight, setOccupiedUpx } = useScrollViewHeight();
// const primaryColor = useThemeColors().primaryColor;
setOccupiedUpx(120 + 100);

useHideTabBar();
</script>

<style lang="scss" scoped>
.header {
  height: 100upx;
  display: flex;
  align-items: center;
  padding: 0 20upx;
  .header-right-icon {
    height: 60upx;
    width: 60upx;
    font-size: 40upx;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20upx;
  }
}
</style>

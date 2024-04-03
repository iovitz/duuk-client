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
      <view style="height: 100rpx; width: 100rpx"></view>
      <h1>Home</h1>
      <uv-button text="GO" type="primary"></uv-button>
    </scroll-view>
  </view>
  <TabBar path="/pages/home/home" />
</template>

<script setup>
import TabBar from "@/components/tabbar/tabbar.vue";
import { useScrollViewHeight } from "@/hooks/scroll-view-height";

const { scrollViewHeight, setOccupiedPx } = useScrollViewHeight();
// const primaryColor = useThemeColors().primaryColor;
setOccupiedPx(50 + 50);
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  padding: 20rpx 30rpx 20rpx 30rpx;
  .header-right-icon {
    height: 60rpx;
    width: 60rpx;
    font-size: 40rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20rpx;
  }
}
</style>

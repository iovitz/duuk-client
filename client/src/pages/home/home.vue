<template>
  <view class="tabbar-page-container page-style">
    <uv-status-bar />
    <view class="header">
      <uv-search inputAlign="center" height="35" :showAction="false" />
      <view class="header-right-icon">
        <i class="iconfont icon-PlanetOutline"></i>
      </view>
    </view>

    <uv-modal ref="modal" title="标题">
      <view class="slot-content"> h1h1 </view>
    </uv-modal>
    <scroll-view :scroll-y="true" :style="`height: ${scrollViewHeight}px`">
      <home-swiper />
      <HomeBookType />
      <Heading title="热销书籍" moreText="查看更多" />
    </scroll-view>
  </view>
  <TabBar path="/pages/home/home" />
</template>

<script setup>
import TabBar from "@/components/tabbar/tabbar.vue";
import HomeSwiper from "@/components/home-swiper/home-swiper";
import Heading from "@/components/heading/heading";
import HomeBookType from "@/components/home-book-type/home-book-type";
import { useScrollViewHeight } from "@/hooks/scroll-view-height";

const { scrollViewHeight, setOccupiedPx } = useScrollViewHeight();
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

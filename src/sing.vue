<template>
  <view class="page-container tabbar sing-page">
    <uv-status-bar />
    <view class="flex align-center search-container">
      <uv-search
        placeholder="搜一搜想唱的内容"
        :showAction="false"
        inputAlign="center"
        height="66rpx"
      >
      </uv-search>
      <i class="dicon dicon-shangchuan upload-icon" @click="goUpload"></i>
    </view>
    <view class="swiper">
      <sing-swiper />
    </view>

    <uv-tabs
      :current="currentSwiperPageIndex"
      :list="tabList"
      lineColor="#ff7e7c"
      @change="handleTabChange"
      :duration="200"
    >
      <template #right>
        <i class="dicon dicon-shangchuan"></i>
      </template>
    </uv-tabs>

    <swiper
      class="page-swiper"
      :current="currentSwiperPageIndex"
      :duration="200"
      @change="handleSwiperScroll"
      :style="{
        height: `${scrollHeight}px`,
      }"
    >
      <swiper-item>
        <scroll-view
          id="推荐"
          :scroll-y="true"
          :style="`height: ${scrollHeight}px`"
          class="scroll-view-item_H uni-bg-red"
        >
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
        </scroll-view>
      </swiper-item>
      <swiper-item>
        <scroll-view
          id="热歌"
          :scroll-y="true"
          :style="`height: ${scrollHeight}px`"
          class="scroll-view-item_H uni-bg-green"
        >
          42424
        </scroll-view>
      </swiper-item>
      <swiper-item>
        <scroll-view
          id="热歌"
          :scroll-y="true"
          :style="`height: ${scrollHeight}px`"
          class="scroll-view-item_H uni-bg-green"
        >
          42424
        </scroll-view>
      </swiper-item>
    </swiper>

    <TabBar path="sing" />
  </view>
</template>

<script setup>
import TabBar from "@/components/tabbar/tabbar.vue";
import { ref } from "vue";
import SingSwiper from "@/components/sing-swiper/sing-swiper.vue";
import { useScrollHeight } from "./hooks/scroll-height";
const { scrollHeight } = useScrollHeight(50 + 35 + 15 + 10 + 130 + 44);

const currentSwiperPageIndex = ref(0);

function handleTabChange(item) {
  currentSwiperPageIndex.value = item.index;
}

function handleSwiperScroll(item) {
  currentSwiperPageIndex.value = item.detail.current;
}

function goUpload() {
  uni.navigateTo({
    url: "/upload",
  });
}

const tabList = [
  {
    name: "推荐",
  },
  {
    name: "热歌",
    badge: {
      isDot: true,
    },
  },
  {
    name: "唱过",
    badge: {
      value: 5,
    },
  },
];
</script>

<style lang="scss" scoped>
.sing-page {
  padding-left: 30rpx;
  padding-right: 30rpx;
}
.search-container {
  margin-top: 30rpx;
}
.upload-icon {
  font-size: 50rpx;
  margin-left: 10rpx;
}

.swiper {
  margin-top: 20rpx;
  border-radius: 20rpx;
  overflow: hidden;
}

.scroll-Y {
  height: 300rpx;
}
.scroll-view_H {
  white-space: nowrap;
  width: 100%;
  font-size: 0;
}
.scroll-view-item {
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
  font-size: 36rpx;
}
.scroll-view-item_H {
  display: inline-block;
  width: 100%;
}
</style>

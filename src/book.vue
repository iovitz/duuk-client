<template>
  <view class="page-container tabbar navbar">
    <uv-navbar title="书籍详情" autoBack>
      <template #right>
        <text class="dicon dicon-share mr-2"></text>
        <text class="dicon dicon-more-horizontal"></text>
      </template>
    </uv-navbar>
    <view class="page">
      <uv-swiper
        :list="imageList"
        height="100vw"
        circular
        :autoplay="false"
        bgColor="#ffffff"
      >
      </uv-swiper>

      <view class="h3 px-2">额尔古纳河右岸（茅盾文学奖获奖作品全集28）</view>
    </view>
  </view>
  <view class="order-options fixed-bottom container">
    <view class="book-channel flex flex-column align-center">
      <text class="icon dicon dicon-talk-reduce"></text>
      <text class="font-xs">图书频道</text>
    </view>
    <uv-button class="ml-auto" type="warning" text="加入购物车"></uv-button>
    <uv-button class="ml-1" type="primary" text="立即购买"></uv-button>
  </view>
</template>

<script setup>
import { ref } from "vue";

const imageList = ref([
  "http://img3m8.ddimg.cn/5/14/27878108-1_u_1703749538.jpg",
  "http://img3m8.ddimg.cn/5/14/27878108-2_u_1703749538.jpg",
  "http://img3m8.ddimg.cn/5/14/27878108-3_u_1703749538.jpg",
]);
</script>

<style lang="scss" scoped>
.order-options {
  height: 100rpx;
  display: flex;
  align-items: center;
}
</style>

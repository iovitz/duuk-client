<template>
  <view class="page-container tabbar navbar">
    <uv-navbar title="书籍详情" :autoBack="true">
      <template #right>
        <text class="dicon dicon-asterism"></text>
        <text class="dicon dicon-asterism"></text>
      </template>
    </uv-navbar>
    <view class="page">aefawefwe </view>
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

<script setup></script>

<style lang="scss" scoped>
.order-options {
  height: 100rpx;
  display: flex;
  align-items: center;
}
</style>

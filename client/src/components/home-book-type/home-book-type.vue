<template>
  <uv-grid :col="4">
    <uv-grid-item
      v-for="(item, index) in bookTypes"
      :key="index"
      class="type-item"
    >
      <view class="icon-wrapper">
        <text :class="`type-icon iconfont icon-${item.icon}`" />
      </view>
      <text class="grid-text">{{ item.name }}</text>
    </uv-grid-item>
  </uv-grid>
</template>

<script setup>
import { reactive } from "vue";

const bookTypes = reactive([
  {
    name: "文学",
    icon: "gas",
  },
  {
    name: "社科",
    icon: "science",
  },
  {
    name: "艺术",
    icon: "drawing",
  },
  {
    name: "教育",
    icon: "book",
  },
]);
</script>

<style lang="scss" scoped>
.type-item {
  color: "#eee";
  padding: 20rpx 0;
  .icon-wrapper {
    height: 80rpx;
    width: 80rpx;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $uv-primary;
    margin-bottom: 10rpx;
    color: #fff;
  }
  .type-icon {
    font-size: 1.5em;
  }
  .grid-text {
    font-size: 28rpx;
  }
}
</style>

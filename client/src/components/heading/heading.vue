<template>
  <view class="title">
    <text class="title-text">{{ props.title }}</text>

    <text class="more">
      {{ props.moreText }}
      <uv-icon name="arrow-right" class="more-icon" :size="12" />
    </text>
  </view>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  moreText: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx 30rpx;
  .title-text {
    font-size: 28rpx;
    font-weight: bold;
  }
  .more {
    display: flex;
    font-size: 24rpx;
  }
  .more-icon {
    display: inline-block;
  }
}
</style>

<template>
  <view class="book-list-item">
    <uv-image
      :src="props.poster"
      :observeLazyLoad="true"
      :width="props.w + 'px'"
      :height="props.h + 'px'"
      mode="widthFix"
    />
    <view class="name uv-line-1">{{ props.name }}</view>
    <view class="book-tag-wrapper">
      <uv-tags
        text="标签"
        class="book-tag"
        plain
        shape="circle"
        size="mini"
      ></uv-tags>
      <uv-tags
        text="标签"
        class="book-tag"
        plain
        shape="circle"
        size="mini"
      ></uv-tags>
    </view>
    <view class="info"> 2000人买过 </view>
  </view>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  poster: String,
  name: String,
  h: Number,
  w: Number,
});

const imageStyle = computed(() => {
  return {
    height: props.h + "px",
    width: props.w + "px",
  };
});
</script>

<style lang="scss" scoped>
.book-list-item {
  border-radius: 10rpx;
  overflow: hidden;
  margin-bottom: 20rpx;
  padding-bottom: 20rpx;
  background-color: #fff;
}
.name {
  font-size: 32rpx;
  font-weight: bold;
  padding: 6rpx 10rpx;
}
.book-tag-wrapper {
  display: flex;
  padding: 0 10rpx;
  .book-tag {
    margin-right: 10rpx;
  }
}
.info {
  padding: 0 6rpx;
  font-size: 24rpx;
}
</style>

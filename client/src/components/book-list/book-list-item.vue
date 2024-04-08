<template>
  <view class="book-list-item">
    <view class="image-wrapper" :style="imageStyle">
      <uv-image
        :src="imageUrl"
        :observeLazyLoad="true"
        :width="props.w + 'px'"
        :height="props.h + 'px'"
        mode="widthFix"
        @error="handleReloadImage"
      >
        <template v-slot:loading>
          <LoadingIcon />
        </template>
      </uv-image>
    </view>
    <view class="book-info">
      <view class="book-name uv-line-1">{{ props.name }}</view>
      <view class="buy">
        <view class="price"> <text class="price-icon">¥</text>13 </view>
        <view class="read">1300人在读</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { computed, ref } from "vue";
import LoadingIcon from "@/components/loading-icon/loading-icon.vue";
import { logger } from "@/utils/logger";
const props = defineProps({
  poster: String,
  name: String,
  h: Number,
  w: Number,
});

const imageStyle = computed(() => {
  return {
    height: props.h + "px",
  };
});

let retryTimes = ref(0);
const imageUrl = computed(() => {
  if (retryTimes.value === 0) {
    return props.poster;
  }
  return props.poster + `?retry=${retryTimes.value}`;
});

function handleReloadImage(e) {
  logger.error("图片加载失败", retryTimes, e);
  if (retryTimes.value === 3) {
    return;
  }
  retryTimes.value++;
}
</script>

<style lang="scss" scoped>
.book-list-item {
  margin-bottom: 20rpx;
  background-color: #fff;
  border-radius: 10rpx;
  overflow: hidden;
  box-shadow: 0px 20rpx 30rpx -6rpx rgba(0, 0, 0, 0.1);
}
.image-wrapper {
  width: 100%;
}
.book-info {
  height: 120rpx;
  display: flex;
  flex-direction: column;
  padding: 0 20rpx;
  justify-content: center;
  .book-name {
    font-size: 32rpx;
    margin-bottom: 10rpx;
  }
  .buy {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .price-icon {
      font-size: 24rpx;
    }
    .price {
      font-size: 32rpx;
    }
    .read {
      font-size: 24rpx;
      color: $uv-tips-color;
    }
  }
}
</style>

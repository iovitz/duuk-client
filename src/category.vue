<template>
  <uv-loading-page
    :loading="!bookStore.category.length"
    loading-mode="spinner"
  ></uv-loading-page>
  <view class="category-page-container">
    <uv-navbar title="图书分类" :placeholder="true" autoBack></uv-navbar>
    <uv-vtabs
      :chain="true"
      :list="bookStore.category"
      :height="scrollHeight"
      hdHeight="44px"
      @change="handleChange"
      class="category-list"
    >
      <view class="p-2 bg-gray">
        <uv-vtabs-item
          v-for="(item, index) in bookStore.category"
          :key="index"
          :index="index"
        >
          <view class="card mb-2">
            <view class="font-bold">
              {{ item.name }}
            </view>
            <view class="item-wrapper">
              <view v-for="(item2, index2) in item.c2s" :key="index2">
                <view class="category-item">
                  <text class="uv-line-1"> {{ item2.name }}</text>
                </view>
              </view>
            </view>
          </view>
        </uv-vtabs-item>
      </view>
    </uv-vtabs>
  </view>
</template>

<script setup>
import { useScrollHeight } from "@/hooks/scroll-height";
import { ref } from "vue";
import { useBookStore } from "./store";
import { logger } from "./utils/logger";

const { scrollHeight } = useScrollHeight(44);
const bookStore = useBookStore();
bookStore.fetchCategory();

function handleChange(e) {
  logger.debug("Change", e);
}
function fetchCategory() {}
</script>

<style lang="scss" scoped>
.header {
  color: red;
}
.category-list {
  font-size: 24rpx;
  :deep(.uv-vtabs__bar) {
    background-color: #fff;
  }
  :deep(.uv-vtabs__bar-item-active) {
    background-color: $uv-bg-color;
    font-weight: bold;
  }
}
.item-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20rpx;
  .category-item {
    width: 100%;
    text-align: center;
    padding: 20rpx 0;
    margin-top: 20rpx;
    background-color: $uv-bg-color;
  }
}
</style>

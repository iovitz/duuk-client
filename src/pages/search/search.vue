<template>
  <view class="page-container">
    <uv-status-bar />
    <view class="p-2 bg-white">
      <view class="flex">
        <uv-icon class="pr-1" name="arrow-left" @click="goBack" :size="20" />
        <uv-search
          height="34"
          :showAction="true"
          :focus="true"
          actionText="搜索"
        ></uv-search>
      </view>
      <uv-tabs
        :list="tabList"
        @click="handleTabClick"
        :scrollable="false"
      ></uv-tabs>
    </view>

    <scroll-view
      :scroll-y="true"
      :style="{
        height: scrollHeight + 'px',
      }"
      :scroll-with-animation="true"
      :show-scrollbar="false"
    >
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
      <view>CONTENT</view>
    </scroll-view>
  </view>
</template>

<script setup>
import { useScrollHeight } from "@/hooks/scroll-height";
import { logger } from "@/utils/logger";
import { ref } from "@vue/runtime-core";

const { scrollHeight } = useScrollHeight(34 + 2 + 44 + 20);

const tabList = ref([
  {
    name: "综合",
  },
  {
    name: "消息",
  },
  {
    name: "文章",
  },
  {
    name: "用户",
  },
  {
    name: "群组",
  },
]);
const handleTabClick = (e) => {
  logger.debug("切换tab", e);
};
const goBack = () => {
  uni.navigateBack();
};
</script>

<style lang="scss" scoped></style>

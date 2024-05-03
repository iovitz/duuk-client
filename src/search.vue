<template>
  <view class="page-container">
    <uv-status-bar />
    <view class="p-2 bg-white">
      <view class="flex align-center">
        <uv-search
          height="34"
          :showAction="false"
          v-model="searchInput"
          :focus="true"
        ></uv-search>
        <view
          v-if="searchInput.length > 0"
          class="action pl-2 font"
          @click="handleSearch"
        >
          搜索
        </view>
        <view v-if="!searchInput" class="action pl-2 font" @click="goBack">
          取消
        </view>
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
      {{ searchInput }}
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
import { ref } from "vue";

const { scrollHeight } = useScrollHeight(34 + 2 + 44 + 20);

const searchInput = ref("");
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
function handleSearch() {
  logger.debug("搜索内容", searchInput.value);
}
</script>

<style lang="scss" scoped></style>

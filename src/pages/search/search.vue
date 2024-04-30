<template>
  <view class="page-container tabbar">
    <uv-status-bar />
    <view class="p-2 bg-white">
      <uv-search :showAction="true" actionText="搜索"></uv-search>
      <uv-tabs
        :list="tabList"
        @click="handleTabClick"
        :scrollable="false"
      ></uv-tabs>
    </view>
  </view>
</template>

<script setup>
import { logger } from "@/utils/logger";
import { ref } from "@vue/runtime-core";

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
</script>

<style lang="scss" scoped></style>

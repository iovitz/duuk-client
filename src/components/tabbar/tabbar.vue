<template>
  <uv-tabbar
    :value="props.path"
    :fixed="true"
    @change="switchTab"
    :placeholder="false"
    activeColor="#EC716E"
  >
    <uv-tabbar-item text="首页" name="/pages/home/home">
      <template #active-icon>
        <text class="icon active dicon dicon-home"></text>
      </template>
      <template #inactive-icon>
        <text class="icon dicon dicon-home"></text>
      </template>
    </uv-tabbar-item>
    <uv-tabbar-item text="广场" name="/pages/square/square">
      <template #active-icon>
        <text class="icon active dicon dicon-aperture"></text>
      </template>
      <template #inactive-icon>
        <text class="icon dicon dicon-aperture"></text>
      </template>
    </uv-tabbar-item>
    <uv-tabbar-item text="聊天" name="/pages/discuss/discuss">
      <template #active-icon>
        <text class="icon active dicon dicon-talk-reduce"></text>
      </template>
      <template #inactive-icon>
        <text class="icon dicon dicon-talk-reduce"></text>
      </template>
    </uv-tabbar-item>
    <uv-tabbar-item text="我的" name="/pages/user/user">
      <template #active-icon>
        <text class="icon active dicon dicon-user"></text>
      </template>
      <template #inactive-icon>
        <text class="icon dicon dicon-user"></text>
      </template>
    </uv-tabbar-item>
  </uv-tabbar>
</template>

<script setup>
import { useHideTabBar } from "@/hooks/hide-tabbar";

useHideTabBar();
function switchTab(path) {
  uni.switchTab({
    url: path,
  });
}

const props = defineProps({
  path: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.icon {
  font-size: 44rpx;
  &.active {
    color: #ec716e;
  }
}
</style>

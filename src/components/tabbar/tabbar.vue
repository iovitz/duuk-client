<template>
  <uv-tabbar
    :value="props.path"
    :fixed="true"
    @change="switchTab"
    :placeholder="false"
    activeColor="#EC716E"
    :border="false"
  >
    <uv-tabbar-item text="首页" name="home">
      <template #active-icon>
        <image class="icon active" src="/static/tabbar/home.svg" />
      </template>
      <template #inactive-icon>
        <image class="icon" src="/static/tabbar/home.svg" />
      </template>
    </uv-tabbar-item>
    <uv-tabbar-item text="点唱" name="sing">
      <template #active-icon>
        <image class="icon active" src="/static/tabbar/music.svg" />
      </template>
      <template #inactive-icon>
        <image class="icon" src="/static/tabbar/music.svg" />
      </template>
    </uv-tabbar-item>
    <uv-tabbar-item text="聊天" name="discuss">
      <template #active-icon>
        <image class="icon active" src="/static/tabbar/message.svg" />
      </template>
      <template #inactive-icon>
        <image class="icon" src="/static/tabbar/message.svg" />
      </template>
    </uv-tabbar-item>
    <uv-tabbar-item text="我的" name="user">
      <template #active-icon>
        <image class="icon active" src="/static/tabbar/mine.svg" />
      </template>
      <template #inactive-icon>
        <image class="icon" src="/static/tabbar/mine.svg" />
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
  height: 50rpx;
  width: 50rpx;
  filter: grayscale(100%);
  &.active {
    color: #ec716e;
    filter: grayscale(0%);
  }
}
</style>

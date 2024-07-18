<template>
  <view class="page-container tabbar">
    <uv-navbar title="点唱" left-icon="">
      <template #right>
        <text class="dicon dicon-shangchuan" @click="goUpload"></text>
      </template>
    </uv-navbar>
    <TabBar path="sing" />
  </view>
</template>

<script setup>
import TabBar from "@/components/tabbar/tabbar.vue";

function goUpload() {
  uni.navigateTo({
    url: "/upload",
  });
}
</script>

<style lang="scss" scoped></style>

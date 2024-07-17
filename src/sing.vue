<template>
  <view class="page-container tabbar">
    <uv-navbar title="点唱" left-icon="">
      <template #right>
        <text class="dicon dicon-edit-text"></text>
      </template>
    </uv-navbar>
    <TabBar path="sing" />
  </view>
</template>

<script setup>
import TabBar from "@/components/tabbar/tabbar.vue";
</script>

<style lang="scss" scoped></style>

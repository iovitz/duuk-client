<template>
  <uv-row justify="space-between">
    <uv-col span="3">
      <view class="demo-layout bg-purple"></view>
    </uv-col>
    <uv-col span="3">
      <view class="demo-layout bg-purple-light"></view>
    </uv-col>
    <uv-col span="3">
      <view class="demo-layout bg-purple"></view>
    </uv-col>
    <uv-col span="3">
      <view class="demo-layout bg-purple-light"></view>
    </uv-col>
  </uv-row>
  <uv-cell-group>
    <uv-cell icon="setting-fill" title="个人设置"></uv-cell>
    <uv-cell icon="setting-fill" title="账号设置"></uv-cell>
    <uv-cell icon="integral-fill" title="更新日志" value="已是新版本"></uv-cell>
    <uv-cell icon="setting-fill" title="退出登录"></uv-cell>
  </uv-cell-group>
  <TabBar path="/pages/user/user" />
</template>

<script setup>
import TabBar from "@/components/tabbar/tabbar.vue";
</script>

<style lang="scss" scoped></style>

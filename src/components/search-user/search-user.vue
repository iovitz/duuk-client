<template>
  <uv-list padding="30rpx">
    <uv-list-item v-for="item in searchStore.users" :key="item.user_id">
      <template #header>
        <uv-avatar
          :src="item.avatar"
          shape="circle"
          size="50"
          class="mr-2"
        ></uv-avatar>
      </template>
      <template #body>
        <view class="flex-1 flex-column">
          <uv-text bold size="14" :text="item.nickname"></uv-text>
          <uv-text
            type="info"
            size="12"
            :text="`粉丝数：${item.fans_number} 作品：${item.voice_number}`"
          ></uv-text>
          <uv-text
            type="info"
            size="12"
            :text="`DUUK号：${item.user_id}`"
          ></uv-text>
        </view>
      </template>
      <template #footer>
        <view class="flex align-center">
          <uv-button
            type="primary"
            plain
            shape="circle"
            text="关注"
            :style="{
              height: '2em',
            }"
            v-if="item.followed"
          ></uv-button>
          <uv-button
            type="primary"
            disabled
            shape="circle"
            text="已关注"
            v-else
            :style="{
              height: '2em',
            }"
          ></uv-button>
        </view>
      </template>
    </uv-list-item>
  </uv-list>
</template>

<script setup>
import { useSearchStore } from "@/store";

const searchStore = useSearchStore();
</script>

<style lang="scss" scoped></style>

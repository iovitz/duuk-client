<template>
  <view class="chat-page-container">
    <uv-navbar title="雾凇的雾" :placeholder="true">
      <template #right>
        <text
          class="iconfont icon-user"
          :style="{
            fontSize: '40rpx',
          }"
        ></text>
      </template>
    </uv-navbar>
    <MessageList :height="scrollHeight" :messageList="messageList" />
    <InputEditor />
  </view>
</template>

<script setup>
import { useScrollHeight } from "@/hooks/scroll-height";
import MessageList from "./message-list.vue";
import InputEditor from "@/components/input-editor/input-editor.vue";
const { scrollHeight, setOccupiedPx } = useScrollHeight(44 + 50);
console.log(scrollHeight);
const messageList = [];
</script>

<style lang="scss" scoped></style>

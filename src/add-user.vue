<template>
  <view class="page-container"> add </view>
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

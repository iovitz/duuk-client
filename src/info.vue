<template>
  <view class="page-container">
    <uv-navbar title="个人信息" autoBack placeholder> </uv-navbar>
    <uv-list>
      <uv-gap bgColor="#ffffff" height="10rpx"></uv-gap>
      <uv-list-item title="头像" showArrow clickable>
        <template #footer>
          <uv-avatar
            size="60rpx"
            src="https://via.placeholder.com/200x200.png/2878ff"
            shape="square"
          ></uv-avatar>
        </template>
      </uv-list-item>
      <uv-list-item title="昵称" :rightText="nickname" showArrow clickable />
      <uv-list-item
        title="Duuk号"
        :rightText="userStore.username"
        showArrow
        clickable
      />
      <uv-list-item title="性别" rightText="男" showArrow clickable />
      <uv-list-item
        title="签名"
        rightText="我就是很牛逼...."
        showArrow
        clickable
      />
      <uv-gap bgColor="#ffffff" height="10rpx"></uv-gap>
      <uv-list-item title="收货地址" rightText="雾凇的雾" showArrow clickable />
    </uv-list>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "./store";

const userStore = useUserStore();
const nickname = ref(userStore.nickname);
</script>

<style lang="scss" scoped></style>

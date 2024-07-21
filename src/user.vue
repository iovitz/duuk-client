<template>
  <uv-navbar title="个人中心" :placeholder="true" :autoBack="true" left-icon="">
    <template #right>
      <text class="dicon dicon-shezhi" @click="goInfo"></text>
    </template>
  </uv-navbar>
  <scroll-view :scroll-y="true" :style="`height: ${scrollHeight}px`">
    <uv-gap height="20rpx" bgColor="#ffffff"> </uv-gap>
    <view class="card flex" @click="goInfo">
      <uv-avatar
        size="90rpx"
        :src="
          userStore.avatar ?? 'https://via.placeholder.com/200x200.png/2878ff'
        "
        class="mr-2"
        shape="square"
      ></uv-avatar>
      <view>
        <text class="h3 uv-line-1">
          {{ userStore.isLogined ? userStore.nickname : "点击进行登录" }}
        </text>
        <text class="font-sm uv-line-1">
          杜克号：{{ userStore.isLogined ? userStore.uname : "-" }}
        </text>
      </view>
    </view>
    <uv-gap height="20rpx" bgColor="#ffffff"> </uv-gap>

    <uv-gap height="20rpx" bgColor="#ffffff"></uv-gap>

    <uv-cell-group class="option-menu" :border="false">
      <uv-cell
        icon="setting-fill"
        title="个人设置"
        :clickable="true"
        :border="false"
        @click="goInfo"
      ></uv-cell>
      <uv-cell
        icon="setting-fill"
        title="账号设置"
        :clickable="true"
        :border="false"
      ></uv-cell>
      <uv-cell
        icon="integral-fill"
        title="更新日志"
        value="已是新版本"
        :clickable="true"
        :border="false"
        @click="goUpdate"
      ></uv-cell>
      <uv-cell
        icon="setting-fill"
        title="退出登录"
        :clickable="true"
        :border="false"
        @click="logout"
      ></uv-cell>
    </uv-cell-group>
  </scroll-view>
  <TabBar path="user" />
</template>

<script setup>
import TabBar from "@/components/tabbar/tabbar.vue";
import { useScrollHeight } from "@/hooks/scroll-height";
import { logger } from "@/utils/logger";
import { useUserStore } from "./store";

const userStore = useUserStore();

const { scrollHeight } = useScrollHeight(44 + 50);

function goInfo() {
  if (!userStore.isLogined) {
    showLoginPage();
    return;
  }
  uni.navigateTo({
    url: "info",
  });
}

function goUpdate() {
  uni.navigateTo({
    url: "update",
  });
}

function logout() {
  userStore.logout();
  showLoginPage();
}

function showLoginPage() {
  uni.navigateTo({
    url: "login",
    animationType: "slide-in-bottom",
  });
}
</script>

<style lang="scss" scoped>
.option-menu {
  background: #fff;
}
.order-menu-item {
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  .order-menu-text {
    font-size: 24rpx;
  }
}
.userinfo {
  display: flex;
}
</style>

<template>
  <uv-navbar title="个人中心" :placeholder="true" :autoBack="true" left-icon="">
    <template #right>
      <text class="dicon dicon-asterism"></text>
    </template>
  </uv-navbar>
  <scroll-view :scroll-y="true" :style="`height: ${scrollHeight}px`">
    <uv-gap height="20rpx" bgColor="#f6f7f8"> </uv-gap>
    <view class="card flex">
      <uv-avatar
        size="90rpx"
        src="https://via.placeholder.com/200x200.png/2878ff"
        class="mr-2"
        shape="square"
      ></uv-avatar>
      <view>
        <text class="h3 uv-line-1"> 雾凇的雾 </text>
        <text class="font-sm uv-line-1 mt-1"> 杜克号：fea251251251 </text>
      </view>
    </view>
    <uv-gap height="20rpx" bgColor="#f6f7f8"> </uv-gap>

    <view class="card order-menu">
      <uv-row justify="space-between">
        <uv-col span="2">
          <view class="order-menu-item">
            <text class="editor-icon dicon dicon-truck"></text>
            <text class="order-menu-text">购物车</text>
          </view>
        </uv-col>
        <uv-col span="2">
          <view class="order-menu-item">
            <text class="editor-icon dicon dicon-card"></text>
            <text class="order-menu-text">待付款</text>
          </view>
        </uv-col>
        <uv-col span="2">
          <view class="order-menu-item">
            <text class="editor-icon dicon dicon-packingbag"></text>
            <text class="order-menu-text">待发货</text>
          </view>
        </uv-col>
        <uv-col span="2">
          <view class="order-menu-item">
            <text class="editor-icon dicon dicon-truck"></text>
            <text class="order-menu-text">待收货</text>
          </view>
        </uv-col>
        <uv-col span="2">
          <view class="order-menu-item">
            <text class="editor-icon dicon dicon-talk-control" />
            <text class="order-menu-text">退款/售后</text>
          </view>
        </uv-col>
      </uv-row>
    </view>
    <uv-gap height="20rpx" bgColor="#f6f7f8"></uv-gap>

    <uv-cell-group class="option-menu" :border="false">
      <uv-cell
        icon="setting-fill"
        title="个人设置"
        clickable
        :border="false"
      ></uv-cell>
      <uv-cell
        icon="setting-fill"
        title="账号设置"
        clickable
        :border="false"
      ></uv-cell>
      <uv-cell
        icon="integral-fill"
        title="更新日志"
        value="已是新版本"
        clickable
        :border="false"
      ></uv-cell>
      <uv-cell
        icon="setting-fill"
        title="退出登录"
        clickable
        :border="false"
      ></uv-cell>
    </uv-cell-group>
  </scroll-view>
  <TabBar path="user" />
</template>

<script setup>
import TabBar from "@/components/tabbar/tabbar.vue";
import { useScrollHeight } from "@/hooks/scroll-height";
import { logger } from "@/utils/logger";

const { scrollHeight } = useScrollHeight(44 + 50);
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

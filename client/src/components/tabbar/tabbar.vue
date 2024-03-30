<template>
  <view class="page-tab-bar">
    <view class="tab-bar-item">
      <i class="iconfont icon-HomeOutline" />
    </view>
    <view class="tab-bar-item">
      <i class="iconfont icon-PlanetOutline" />
    </view>
    <view class="tab-bar-item">
      <i class="iconfont icon-AdvisoryOutline" />
    </view>
    <view class="tab-bar-item">
      <i class="iconfont icon-CalendarOutline" />
    </view>
  </view>
</template>

<script setup>
function switchTab(path) {
  uni.switchTab({
    url: path,
  });
}
</script>

<style lang="scss" scoped>
.page-tab-bar {
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 0 60upx;
  left: 0;
  right: 0;
  bottom: 0;
  height: 140upx;
  border-top-left-radius: 30upx;
  border-top-right-radius: 30upx;
  box-shadow: 0px -8px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  .tab-bar-item {
    height: 80upx;
    width: 80upx;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40upx;
    color: #888;
  }
}
</style>

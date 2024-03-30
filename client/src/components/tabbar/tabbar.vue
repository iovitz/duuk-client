<template>
  <view class="page-tab-bar">
    <view
      v-for="itm in tabbarItem"
      :key="itm.path"
      @click="() => switchTab(itm.path)"
      :class="`tab-bar-item ${props.path === itm.path ? 'active' : ''}`"
    >
      <i :class="`iconfont icon-${itm.icon}`" />
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
const tabbarItem = ref([
  {
    path: "/pages/home/home",
    icon: "HomeOutline",
  },
  {
    path: "/pages/events/events",
    icon: "PlanetOutline",
  },
  {
    path: "/pages/message/message",
    icon: "AdvisoryOutline",
  },
  {
    path: "/pages/calendar/calendar",
    icon: "CalendarOutline",
  },
]);

function switchTab(path) {
  uni.switchTab({
    url: path,
  });
}

const props = defineProps({
  path: {
    type: String,
  },
});
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
    height: 100upx;
    width: 100upx;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40upx;
    color: #888;
    transition: all ease 300ms;
    position: relative;
    border-radius: 20upx;
    top: 0;
    &::after {
      display: block;
      content: "";
      height: 6upx;
      width: 6upx;
      border-radius: 3upx;
      background-color: #5c3eea;
      left: 50%;
      margin-left: -3upx;
      bottom: 10upx;
      position: absolute;
      opacity: 0;
      transition: all ease 300ms;
    }
    &.active {
      background-color: #eee;
      color: #5c3eea;
      &::after {
        opacity: 1;
      }
      top: -10upx;
      opacity: 1;
    }
  }
}
</style>

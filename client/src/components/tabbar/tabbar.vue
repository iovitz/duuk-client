<template>
  <view class="page-tab-bar">
    <view
      v-for="itm in tabbarItem"
      :key="itm.path"
      @click="() => switchTab(itm.path)"
      :class="`tab-bar-item ${
        props.path === itm.path && isShow ? 'active' : ''
      }`"
    >
      <i :class="`iconfont icon-${itm.icon}`" />
    </view>
  </view>
</template>

<script setup>
import { onHide, onShow } from "@dcloudio/uni-app";
import { ref } from "vue";

const isShow = ref(false);

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

onHide(() => {
  isShow.value = false;
});
onShow(() => {
  isShow.value = true;
});

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
@keyframes slide-top {
  0% {
    transform: translateY(0);
  }
  100% {
    color: #5c3eea;
    transform: translateY(-10upx);
  }
}

.page-tab-bar {
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 0 60upx;
  left: 0;
  right: 0;
  bottom: 0;
  height: 120upx;
  border-top-left-radius: 20upx;
  border-top-right-radius: 20upx;
  box-shadow: 0px -8px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  .tab-bar-item {
    height: 80upx;
    width: 80upx;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40upx;
    color: #999999;
    transition: all ease 300ms;
    border-radius: 20upx;
    position: relative;
    top: 0;
    .iconfont {
      animation-duration: 3s;
      animation-duration: 0.3s;
      animation-fill-mode: forwards;
    }
    &::after {
      display: block;
      content: "";
      height: 6upx;
      width: 6upx;
      border-radius: 3upx;
      background-color: #5c3eea;
      left: 50%;
      margin-left: -3upx;
      bottom: 15upx;
      position: absolute;
      opacity: 0;
      transition: all ease 300ms;
    }
    &.active {
      color: #5c3eea;
      &::after {
        opacity: 1;
      }
      opacity: 1;
      .iconfont {
        animation-name: slide-top;
      }
    }
  }
}
</style>

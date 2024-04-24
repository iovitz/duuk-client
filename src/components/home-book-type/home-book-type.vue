<template>
  <uv-scroll-list :indicator="false">
    <uv-grid :col="7" class="book-type-wrapper">
      <uv-grid-item
        v-for="(item, index) in bookTypes"
        :key="index"
        class="type-item"
      >
        <view class="icon-wrapper">
          <uv-image :src="item.url" height="50rpx" width="50rpx"></uv-image>
        </view>
        <text class="grid-text">{{ item.name }}</text>
      </uv-grid-item>
    </uv-grid>
  </uv-scroll-list>
</template>

<script setup>
import { reactive } from "vue";

const bookTypes = reactive([
  {
    name: "文学",
    url: "https://duukbook.oss-cn-beijing.aliyuncs.com/static/type-wx.svg",
  },
  {
    name: "艺术",
    url: "https://duukbook.oss-cn-beijing.aliyuncs.com/static/type-ys.svg",
  },
  {
    name: "心理学",
    url: "https://duukbook.oss-cn-beijing.aliyuncs.com/static/type-xlx.svg",
  },
  {
    name: "历史",
    url: "https://duukbook.oss-cn-beijing.aliyuncs.com/static/type-ls.svg",
  },
  {
    name: "社会科学",
    url: "https://duukbook.oss-cn-beijing.aliyuncs.com/static/type-shkx.svg",
  },
  {
    name: "自然科学",
    url: "https://duukbook.oss-cn-beijing.aliyuncs.com/static/type-zrkx.svg",
  },
  {
    name: "宗教",
    url: "https://duukbook.oss-cn-beijing.aliyuncs.com/static/type-zj.svg",
  },
  {
    name: "文化",
    url: "https://duukbook.oss-cn-beijing.aliyuncs.com/static/type-wh.svg",
  },
  {
    name: "计算机",
    url: "https://duukbook.oss-cn-beijing.aliyuncs.com/static/type-jsj.svg",
  },
  {
    name: "建筑",
    url: "https://duukbook.oss-cn-beijing.aliyuncs.com/static/type-jz.svg",
  },
  {
    name: "经济学",
    url: "https://duukbook.oss-cn-beijing.aliyuncs.com/static/type-jjx.svg",
  },
  {
    name: "法律",
    url: "https://duukbook.oss-cn-beijing.aliyuncs.com/static/type-fl.svg",
  },
  {
    name: "管理",
    url: "https://duukbook.oss-cn-beijing.aliyuncs.com/static/type-gl.svg",
  },
  {
    name: "励志",
    url: "https://duukbook.oss-cn-beijing.aliyuncs.com/static/type-lz.svg",
  },
]);
</script>

<style lang="scss" scoped>
.book-type-wrapper {
  background-color: #fff;
  width: 175%;
}
.type-item {
  padding: 20rpx 0;
  .icon-wrapper {
    height: 80rpx;
    width: 80rpx;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10rpx;
    color: #fff;
  }
  .type-icon {
    font-size: 1.5em;
  }
  .grid-text {
    font-size: 28rpx;
  }
}
</style>

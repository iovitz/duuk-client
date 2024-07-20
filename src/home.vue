<template>
  <view class="page-container tabbar">
    <uv-status-bar />
    <scroll-view
      :scroll-y="true"
      :style="`height: ${scrollHeight}px`"
      @scrolltolower="loadBookList"
    >
      <uv-modal ref="modal" title="标题">
        <view class="slot-content"> h1h1 </view>
      </uv-modal>
    </scroll-view>
    <TabBar path="home" />
  </view>
</template>

<script setup>
import { ref } from "vue";
import TabBar from "@/components/tabbar/tabbar.vue";
import Heading from "@/components/heading/heading.vue";
import { useScrollHeight } from "@/hooks/scroll-height";
import { useStickyHeight } from "@/hooks/sticky-height";
import { logger } from "@/utils/logger";
import { onLoad } from "@dcloudio/uni-app";

const { scrollHeight } = useScrollHeight(50 + 44);
const { stickyHeight, statusBarHeight } = useStickyHeight(44);

function getRandomBookItem() {
  const width = 400;
  const randomRate = Math.random() * 1 + 0.8;
  const height = parseInt(`${randomRate * width}`);
  return {
    name: `图书${width}-${height}`,
    width: 150,
    height: 150,
    poster: `http://img3m6.ddimg.cn/87/11/29490306-1_u_8.jpg`,
    price: Math.abs(width - height),
  };
}

function goBookCategory() {
  uni.navigateTo({
    url: "category",
  });
}

const bookListRef = ref(null);
let isLoading = false;
async function loadBookList() {
  if (isLoading) return false;
  isLoading = true;
  logger.debug("加载更多");
  const fetchPromise = new Promise((resolve) => {
    const res = [];
    for (let i = 0; i < 20; i++) {
      res.push(getRandomBookItem());
    }
    setTimeout(() => {
      resolve(res);
    }, 1000);
  });
  const res = await fetchPromise;
  bookListRef.value.addToList(res);
  isLoading = false;
}

function goSearch() {
  uni.navigateTo({
    url: "search",
  });
}

onLoad((options) => {
  loadBookList();
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  background-color: #fff;
  .header-right-icon {
    height: 60rpx;
    width: 60rpx;
    font-size: 40rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20rpx;
  }
}
</style>
@/hooks/scroll-height

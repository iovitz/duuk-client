<template>
  <view class="tabbar-page-container page-style">
    <uv-status-bar />
    <view class="header">
      <uv-search inputAlign="center" height="35" :showAction="false" />
      <view class="header-right-icon">
        <i class="iconfont icon-PlanetOutline"></i>
      </view>
    </view>

    <uv-modal ref="modal" title="标题">
      <view class="slot-content"> h1h1 </view>
    </uv-modal>
    <scroll-view
      :scroll-y="true"
      :style="`height: ${scrollViewHeight}px`"
      @scrolltolower="loadBookList"
    >
      <home-swiper />
      <HomeBookType />
      <Heading title="热销书籍" moreText="查看更多" />
      <!-- LoadMore -->
      <BookList ref="bookListRef" />
      <uv-load-more
        status="loading"
        :customStyle="{
          margin: 0,
          padding: '10px 0',
        }"
      />
    </scroll-view>
  </view>
  <TabBar path="/pages/home/home" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import TabBar from "@/components/tabbar/tabbar.vue";
import HomeSwiper from "@/components/home-swiper/home-swiper.vue";
import Heading from "@/components/heading/heading.vue";
import HomeBookType from "@/components/home-book-type/home-book-type.vue";
import BookList from "@/components/book-list/book-list.vue";
import { useScrollViewHeight } from "@/hooks/scroll-view-height";
import { logger } from "@/utils/logger";

const { scrollViewHeight, setOccupiedPx } = useScrollViewHeight();
setOccupiedPx(50 + 50);

function getRandomBookItem() {
  const width = 400;
  const randomRate = Math.random() * 1 + 0.8;
  const height = parseInt(`${randomRate * width}`);
  return {
    name: `图书${width}-${height}`,
    width,
    height,
    poster: `https://fpoimg.com/${width}x${height}?bg_color=#0000ff`,
    price: Math.abs(width - height),
  };
}

const bookListRef = ref(null);
let isLoading = false;
async function loadBookList() {
  if (isLoading) return false;
  isLoading = true;
  logger.verbose("加载更多图书");
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
onMounted(() => {
  loadBookList();
});
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 30rpx;
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

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
    <scroll-view :scroll-y="true" :style="`height: ${scrollViewHeight}px`">
      <home-swiper />
      <HomeBookType />
      <Heading title="热销书籍" moreText="查看更多" />
      <!-- LoadMore -->
      <BookList ref="bookListRef" />
    </scroll-view>
  </view>
  <TabBar path="/pages/home/home" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import TabBar from "@/components/tabbar/tabbar.vue";
import HomeSwiper from "@/components/home-swiper/home-swiper";
import Heading from "@/components/heading/heading";
import HomeBookType from "@/components/home-book-type/home-book-type";
import BookList from "@/components/book-list/book-list";
import { useScrollViewHeight } from "@/hooks/scroll-view-height";

const { scrollViewHeight, setOccupiedPx } = useScrollViewHeight();
setOccupiedPx(50 + 50);

const bookListRef = ref(null);
onMounted(() => {
  bookListRef.value.addToList([
    {
      poster: "https://via.placeholder.com/100x110.png/3c9cff/fff",
      name: "啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发",
      width: 100,
      height: 110,
    },
    {
      poster: "https://via.placeholder.com/200x220.png/f9ae3d/fff",
      name: "啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发",
      width: 200,
      height: 220,
    },
    {
      poster: "https://via.placeholder.com/300x340.png/5ac725/fff",
      name: "啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发",
      width: 300,
      height: 340,
    },
    {
      poster: "https://via.placeholder.com/400x400.png/f56c6c/fff",
      name: "啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发",
      width: 400,
      height: 400,
    },
    {
      poster: "https://via.placeholder.com/500x510.png/909399/fff",
      name: "啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发",
      width: 500,
      height: 510,
    },
    {
      poster: "https://via.placeholder.com/600x606.png/3c9cff/fff",
      name: "啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发",
      width: 600,
      height: 606,
    },
    {
      poster: "https://via.placeholder.com/310x422.png/f1a532/fff",
      name: "啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发",
      width: 310,
      height: 422,
    },
    {
      poster: "https://via.placeholder.com/320x430.png/3c9cff/fff",
      name: "啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发",
      width: 320,
      height: 430,
    },
    {
      poster: "https://via.placeholder.com/330x424.png/f9ae3d/fff",
      name: "啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发",
      width: 330,
      height: 424,
    },
    {
      poster: "https://via.placeholder.com/340x435.png/5ac725/fff",
      name: "啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发",
      width: 340,
      height: 435,
    },
    {
      poster: "https://via.placeholder.com/350x440.png/f56c6c/fff",
      name: "啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发",
      width: 350,
      height: 440,
    },
    {
      poster: "https://via.placeholder.com/380x470.png/909399/fff",
      name: "啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发啊额发额发",
      width: 380,
      height: 470,
    },
  ]);
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

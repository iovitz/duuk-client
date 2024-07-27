<template>
  <view class="page-container">
    <uv-status-bar />
    <view class="p-2 bg-white">
      <view class="flex align-center">
        <uv-search
          height="34"
          :showAction="false"
          v-model="searchInput"
          :focus="true"
        ></uv-search>
        <view
          v-if="searchInput.length > 0"
          class="action pl-2 font"
          @click="handleSearch"
        >
          搜索
        </view>
        <view v-if="!searchInput" class="action pl-2 font" @click="goBack">
          取消
        </view>
      </view>
      <uv-tabs
        :list="tabList"
        :scrollable="false"
        :current="currentTabIndex"
        lineColor="#ff7e7c"
        @change="handleTabChange"
      ></uv-tabs>
    </view>

    <swiper
      class="page-swiper"
      :current="currentSwiperPageIndex"
      :duration="200"
      @change="handleSwiperScroll"
      :style="{
        height: `${scrollHeight}px`,
      }"
    >
      <swiper-item>
        <scroll-view :scroll-y="true" :style="`height: ${scrollHeight}px`">
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
          <view>124</view>
        </scroll-view>
      </swiper-item>
      <swiper-item>
        <scroll-view
          :scroll-y="true"
          :style="`height: ${scrollHeight}px`"
          class="scroll-view-item_H uni-bg-green"
        >
          42424
        </scroll-view>
      </swiper-item>
      <swiper-item>
        <scroll-view
          :scroll-y="true"
          :style="`height: ${scrollHeight}px`"
          class="scroll-view-item_H uni-bg-green"
        >
          42424
        </scroll-view>
      </swiper-item>
      <swiper-item>
        <scroll-view
          :scroll-y="true"
          :style="`height: ${scrollHeight}px`"
          class="scroll-view-item_H uni-bg-green"
        >
          <search-user />
        </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup>
import { useScrollHeight } from "@/hooks/scroll-height";
import { logger } from "@/utils/logger";
import { ref } from "vue";
import SearchUser from "./components/search-user/search-user.vue";
import { useRouteQuery } from "./hooks/use-route-query";
import { onLoad } from "@dcloudio/uni-app";

const { scrollHeight } = useScrollHeight(34 + 2 + 44 + 20);

const currentTabIndex = ref(0);
const searchInput = ref("");

const currentSwiperPageIndex = ref(0);

onLoad((query) => {
  query = query ?? {};
  currentTabIndex.value = Number(query.index ?? 0);
  currentSwiperPageIndex.value = currentTabIndex.value;
});

function handleTabChange(item) {
  currentSwiperPageIndex.value = item.index;
  currentTabIndex.value = currentSwiperPageIndex.value;
}

function handleSwiperScroll(item) {
  currentSwiperPageIndex.value = item.detail.current;
  currentTabIndex.value = currentSwiperPageIndex.value;
}

const tabList = ref([
  {
    name: "综合",
  },
  {
    name: "声音",
  },
  {
    name: "歌词",
  },
  {
    name: "用户",
  },
]);
const goBack = () => {
  uni.navigateBack();
};
function handleSearch() {
  logger.debug("搜索内容", searchInput.value);
}
</script>

<style lang="scss" scoped></style>

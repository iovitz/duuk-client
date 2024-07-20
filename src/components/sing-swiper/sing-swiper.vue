<template>
  <uv-swiper
    :list="list"
    keyName="image"
    showTitle
    :title-style="{ textAlign: 'center' }"
    :autoplay="false"
    circular
  ></uv-swiper>
</template>

<script setup>
import { reactive } from "vue";
const list = reactive([
  {
    image: "https://cdn.uviewui.com/uview/swiper/swiper2.png",
    title: "丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由",
  },
  {
    image: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
    title: "明月几时有？把酒问青天",
  },
  {
    image: "https://cdn.uviewui.com/uview/swiper/swiper3.png",
    title: "不知天上宫阙，今夕是何年",
  },
]);
</script>

<style lang="scss" scoped></style>

<template>
  <view class="book-list-item">
    <uv-image
      :src="props.poster"
      :observeLazyLoad="true"
      :width="props.w + 'px'"
      :height="props.h + 'px'"
      mode="widthFix"
    />
    <view class="name">{{ props.name }}</view>
    <view class="desc">{{ props.desc }}</view>
  </view>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  poster: String,
  name: String,
  h: Number,
  w: Number,
});

const imageStyle = computed(() => {
  console.log({
    height: props.h + "px",
    width: props.w + "px",
  });
  return {
    height: props.h + "px",
    width: props.w + "px",
  };
});
</script>

<style lang="scss"></style>

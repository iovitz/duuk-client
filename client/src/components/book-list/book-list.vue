<template>
  <view class="book-list-container">
    <view
      class="l-side"
      :style="{
        width: `${waterFlowColumnWidth}px`,
      }"
    >
      <BookListItem
        v-for="item in list1"
        :key="item.id"
        :name="item.name"
        :poster="item.poster"
        :w="item.w"
        :h="item.h"
      />
    </view>
    <view
      class="r-side"
      :style="{
        width: `${waterFlowColumnWidth}px`,
      }"
    >
      <BookListItem
        v-for="item in list2"
        :key="item.id"
        :name="item.name"
        :poster="item.poster"
        :w="item.w"
        :h="item.h"
      />
    </view>
  </view>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import BookListItem from "./book-list-item";
import { useWaterFlowColumnWidth } from "./waterflow.hook.js";
import { nanoid } from "nanoid";

const waterFlowColumnWidth = useWaterFlowColumnWidth(15 * 2 + 15, 2);
const list1 = reactive([]);
const list2 = reactive([]);
const list1Height = ref(0);
const list2Height = ref(0);

const containerHeight = computed(() => {
  const height =
    list1Height.value > list2Height.value
      ? list1Height.value
      : list2Height.value;
  return height + "px";
});

defineExpose({
  addToList(books) {
    for (let book of books) {
      const scaleRate = waterFlowColumnWidth.value / book.width;
      const height = book.height * scaleRate;
      if (list1Height.value <= list2Height.value) {
        list1Height.value += height;
        list1.push({
          id: nanoid(),
          ...book,
          w: waterFlowColumnWidth.value,
          h: height,
        });
      } else {
        list2Height.value += height;
        list2.push({
          id: nanoid(),
          ...book,
          w: waterFlowColumnWidth.value,
          h: height,
        });
      }
    }
  },
});
</script>

<style lang="scss" scoped>
.book-list-container {
  padding: 30rpx 30rpx 0 30rpx;
  display: flex;
  .l-side {
    margin-right: 30rpx;
  }
}
</style>

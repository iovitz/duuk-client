<template>
  <h1>Shoppingcard</h1>
  <TabBar path="/pages/shoppingcard/shoppingcard" />
</template>

<script setup>
import TabBar from "@/components/tabbar/tabbar.vue";
import { onLoad } from "@dcloudio/uni-app";

onLoad((options) => {
  console.log("###shop", options);
});
</script>

<style lang="scss" scoped></style>

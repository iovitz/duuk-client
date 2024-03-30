<template>
  <h1>Calendar</h1>
  <TabBar />
</template>

<script setup>
import TabBar from "@/components/tabbar/tabbar.vue";
import { useHideTabBar } from "@/hooks/hide-tabbar";

useHideTabBar();
console.log("###");
</script>

<style lang="scss" scoped></style>
@/hooks/hide-tabbar

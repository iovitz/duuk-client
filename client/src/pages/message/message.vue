<template>
  <h1>Message</h1>
  <TabBar />
</template>

<script setup>
import TabBar from "@/components/tabbar/tabbar.vue";
import { useHideTabBar } from "@/hooks/hide-tabbar";

useHideTabBar();
</script>

<style lang="scss" scoped></style>
@/hooks/hide-tabbar

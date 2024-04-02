<template>
  <h1>Calendar</h1>
  <TabBar path="/pages/message/message" />
</template>

<script setup>
import TabBar from "@/components/tabbar/tabbar.vue";
import { useHideTabBar } from "@/hooks/hide-tabbar";

useHideTabBar();
</script>

<style lang="scss" scoped></style>

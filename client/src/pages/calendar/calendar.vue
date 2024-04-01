<template>
  <h1>Calendar</h1>
  <TabBar path="/pages/calendar/calendar" />
  <canvas
    canvas-id="canvas"
    class="canvas"
    :start="startStatus"
    :change:start="animate.start"
    :data-width="canvasWidth"
    :data-height="canvasWidth"
  ></canvas>
</template>

<script setup>
import TabBar from "@/components/tabbar/tabbar.vue";
import { useHideTabBar } from "@/hooks/hide-tabbar";

useHideTabBar();
console.log("###");
</script>

<style lang="scss" scoped></style>

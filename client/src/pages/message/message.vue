<template>
  <uv-status-bar />
  <view class="header block-container"> 消息 </view>
  <view class="block-container">
    <uv-search
      inputAlign="center"
      placeholder="搜索历史消息"
      height="35"
      :showAction="false"
    />
  </view>
  <uv-list>
    <uv-list-item
      title="列表左侧带略缩图"
      note="列表描述信息"
      thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
      thumb-size="lg"
      clickable
      rightText="右侧文字"
    >
    </uv-list-item>
  </uv-list>
  <TabBar path="/pages/message/message" />
</template>

<script setup>
import TabBar from "@/components/tabbar/tabbar.vue";
</script>

<style lang="scss" scoped>
.header {
  margin-top: var();
}
</style>

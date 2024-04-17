<template>
  <uv-status-bar />
  <view class="header block-container"> 讨论 </view>
  <view class="block-container">
    <uv-search
      inputAlign="center"
      placeholder="讨论内容"
      height="35"
      :showAction="false"
    />
  </view>
  <uv-list>
    <uv-swipe-action>
      <uv-swipe-action-item :options="swipeActionOptions">
        <view class="swipe-action uv-border-top uv-border-bottom">
          <view class="swipe-action__content">
            <uv-list-item
              title="列表左侧带略缩图"
              note="列表描述信息"
              thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
              thumb-size="lg"
              clickable
              rightText="右侧文字"
            >
            </uv-list-item>
          </view>
        </view>
      </uv-swipe-action-item>
    </uv-swipe-action>
  </uv-list>
  <TabBar path="/pages/discuss/discuss" />
</template>

<script setup>
import { ref } from "vue";
import TabBar from "@/components/tabbar/tabbar.vue";
import { nanoid } from "nanoid";

const swipeActionOptions = ref([
  {
    text: "删除",
  },
]);
const discussList = [
  {
    id: nanoid(),
    book: "千与千寻",
    c_note: "1000",
    r_user: "1200",
  },
];
</script>

<style lang="scss" scoped>
.header {
  margin-top: var();
}
</style>

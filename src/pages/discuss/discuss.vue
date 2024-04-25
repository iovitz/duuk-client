<template>
  <uv-navbar title="聊天列表" :placeholder="true">
    <template #left>
      <text class="dicon dicon-user-group"></text>
    </template>
    <template #right>
      <text class="dicon dicon-menu" @tap="handleOpenPopup"></text>
    </template>
  </uv-navbar>
  <view class="block-container">
    <uv-search
      inputAlign="center"
      placeholder="讨论内容"
      height="35"
      :showAction="false"
    />
  </view>

  <uv-action-sheet
    ref="actionSheetRef"
    :actions="list"
    title="标题"
    @select="actionSheetSelect"
    cancelText="取消"
  >
  </uv-action-sheet>
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
              @click="goChat"
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
import { logger } from "@/utils/logger";

const actionSheetRef = ref(null);

const list = ref([
  {
    name: "开放能力-分享",
    openType: "share",
  },
  {
    name: "开放能力-获取用户信息",
    openType: "getUserInfo",
  },
  {
    name: "开放能力-客服会话",
    openType: "contact",
  },
]);
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

function goChat() {
  uni.navigateTo({
    url: "/pages/chat/chat",
  });
}

function handleOpenPopup() {
  logger.verbose("#", actionSheetRef);
  actionSheetRef.value?.open();
}

function actionSheetSelect(e) {
  logger.verbose("Popup Change", e);
}
</script>

<style lang="scss" scoped></style>

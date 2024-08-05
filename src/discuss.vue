<template>
  <uv-navbar title="聊天列表" :placeholder="true">
    <template #left>
      <text class="dicon dicon-tuandui" @tap="handleGoContact"></text>
    </template>
    <template #right>
      <text class="dicon dicon-gengduo1" @tap="handleOpenPopup"></text>
    </template>
  </uv-navbar>

  <uv-action-sheet
    ref="actionSheetRef"
    :actions="actionList"
    @select="actionSheetSelect"
    cancelText="取消"
  >
  </uv-action-sheet>
  <uv-list :border="false">
    <uv-swipe-action>
      <uv-swipe-action-item :options="swipeActionOptions">
        <view class="swipe-action">
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
  <TabBar path="discuss" />
</template>

<script setup>
import { ref } from "vue";
import TabBar from "@/components/tabbar/tabbar.vue";
import { nanoid } from "nanoid";
import { logger } from "@/utils/logger";

const actionSheetRef = ref(null);

const actionList = ref([
  {
    name: "添加用户",
    openType: "add",
  },
  {
    name: "发起讨论",
    openType: "create",
  },
  {
    name: "扫描二维码",
    openType: "scan",
  },
]);
const swipeActionOptions = ref([
  {
    text: "置顶",
    style: {
      backgroundColor: "#3c9cff",
    },
  },
  {
    text: "删除",
    style: {
      backgroundColor: "#f56c6c",
    },
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
    url: "chat",
  });
}

function handleOpenPopup() {
  logger.debug("#", actionSheetRef);
  actionSheetRef.value?.open();
}

function actionSheetSelect(e) {
  logger.debug("Sheet Action Select", e);
  switch (e.openType) {
    case "add":
      logger.debug("添加用户");
      uni.navigateTo({
        url: "search?index=3",
      });

      break;
    case "create":
      logger.debug("创建群组");
      break;
    case "scan":
      logger.debug("扫描二维码");
      break;
  }
}

function handleGoContact(e) {
  uni.navigateTo({
    url: "contact",
  });
}
</script>

<style lang="scss" scoped></style>

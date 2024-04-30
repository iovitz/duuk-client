<template>
  <uv-navbar title="聊天列表" :placeholder="true">
    <template #left>
      <text class="dicon dicon-user-group"></text>
    </template>
    <template #right>
      <text class="dicon dicon-menu" @tap="handleOpenPopup"></text>
    </template>
  </uv-navbar>
  <view class="search-container">
    <uv-search
      inputAlign="center"
      placeholder="讨论内容"
      height="35"
      :showAction="false"
    />
  </view>

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
  <TabBar path="/pages/discuss/discuss" />
</template>

<script setup>
import { ref } from "vue";
import TabBar from "@/components/tabbar/tabbar.vue";
import { nanoid } from "nanoid";
import { logger } from "@/utils/logger";

const actionSheetRef = ref(null);

const actionList = ref([
  {
    name: "添加用户 / 加入讨论",
    openType: "add",
  },
  {
    name: "扫描二维码",
    openType: "scan",
  },
  {
    name: "创建讨论",
    openType: "create",
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
    url: "/pages/chat/chat",
  });
}

function handleOpenPopup() {
  logger.debug("#", actionSheetRef);
  actionSheetRef.value?.open();
}

function actionSheetSelect(e) {
  logger.debug("Popup Change", e);
}
</script>

<style lang="scss" scoped>
.search-container {
  padding: 10rpx;
  background-color: #fff;
}
</style>

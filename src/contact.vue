<template>
  <view class="page-container">
    <uv-navbar title="联系人列表" :placeholder="true">
      <template #left>
        <text class="dicon dicon-user-group"></text>
      </template>
      <template #right>
        <text class="dicon dicon-search mr-2" @tap="handleGoSearch"></text>
        <text class="dicon dicon-add"></text>
      </template>
    </uv-navbar>
    <uv-index-list :index-list="indexList" customNavHeight="100rpx">
      <template v-slot:header>
        <view style="height: 100rpx; width: 750rpx; background-color: #3c9cff">
          头部内容
        </view>
      </template>
      <template v-for="(item, index) in itemArr">
        <!-- #ifdef APP-NVUE -->
        <uv-index-anchor :text="indexList[index]"></uv-index-anchor>
        <!-- #endif -->
        <uv-index-item>
          <!-- #ifndef APP-NVUE -->
          <uv-index-anchor :text="indexList[index]"></uv-index-anchor>
          <!-- #endif -->
          <uv-list>
            <uv-list-item
              v-for="(cell, index) in item"
              :title="cell"
              note="列表描述信息"
              thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
              thumb-size="lg"
              rightText="右侧文字"
              :clickable="true"
            >
            </uv-list-item>
          </uv-list>
        </uv-index-item>
      </template>
    </uv-index-list>
  </view>
</template>

<script setup>
import { ref } from "vue";

const indexList = ref(["A", "B", "C", "D", "E", "F", "G"]);
const itemArr = ref([
  ["列表A1", "列表A2", "列表A3"],
  ["列表B1", "列表B2", "列表B3"],
  ["列表C1", "列表C2", "列表C3"],
  ["列表D1", "列表D2", "列表D3"],
  ["列表E1", "列表E2", "列表E3"],
  ["列表F1", "列表F2", "列表F3"],
  ["列表G1", "列表G2", "列表G3"],
]);

function handleGoSearch() {
  uni.navigateTo({
    url: "search",
  });
}
</script>

<style lang="scss" scoped>
.list-cell {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 24rpx;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  background-color: #fff;
}
</style>

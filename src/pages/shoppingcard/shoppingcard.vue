<template>
  <view class="tabbar-page-container page-style">
    <uv-navbar
      :placeholder="true"
      title="购物车"
      height="50"
      leftIcon=""
    ></uv-navbar>
    <scroll-view
      :scroll-y="true"
      class="book-list"
      :style="`height: ${scrollHeight}px`"
    >
      <uv-radio-group>
        <view class="book-item" v-for="i in 10" :key="i">
          <uv-radio> </uv-radio>
          <uv-image
            src="https://img3m6.ddimg.cn/22/15/29671906-1_u_1705306909.jpg"
            radius="10"
            height="220rpx"
            width="220rpx"
          />
          <view class="book-info">
            <text class="uv-line-2 book-name">
              跟着诗词去旅行 少年游学地理百科
            </text>
            <view class="book-buy-info">
              <view class="price">
                <text class="small">￥</text>
                <text class="price-number">38</text>
              </view>
              <uv-number-box :min="1" :max="100"></uv-number-box>
            </view>
          </view>
        </view>
      </uv-radio-group>
    </scroll-view>
    <view class="balance-container">
      <uv-radio-group>
        <uv-radio label="全选"> </uv-radio>
      </uv-radio-group>
      <uv-button type="primary" text="结算书单"></uv-button>
    </view>
  </view>
  <TabBar path="/pages/shoppingcard/shoppingcard" />
</template>

<script setup>
import TabBar from "@/components/tabbar/tabbar.vue";
import { useAppStore } from "@/store";
import { onLoad } from "@dcloudio/uni-app";
import { useScrollHeight } from "@/hooks/scroll-height";

const appStore = useAppStore();

const { scrollHeight } = useScrollHeight(50 + 50 + 70);

onLoad((options) => {
  console.log(appStore.ready);
});
</script>

<style lang="scss" scoped>
.book-item {
  height: 260rpx;
  box-sizing: border-box;
  padding: 20rpx 30rpx;
  display: flex;
  border-radius: 20rpx;
  padding: 20rpx;
  background-color: #fff;
  margin: 10rpx 20rpx;
}
.book-list {
  background-color: #f2f2f2;
}
.book-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.book-name {
  font-size: 32rpx;
  font-weight: bold;
}

.book-buy-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.price {
  color: red;
  .price-number {
    font-size: 40rpx;
  }
}

.balance-container {
  height: 140rpx;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20rpx;
}
</style>
@/hooks/scroll-height

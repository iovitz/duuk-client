<template>
  <uv-list padding="30rpx">
    <uv-list-item v-for="i in 30" :key="i">
      <template #header>
        <uv-avatar
          src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
          shape="circle"
          size="50"
          class="mr-2"
        ></uv-avatar>
      </template>
      <template #body>
        <view class="flex-1 flex-column">
          <uv-text bold size="14" text="雾凇的雾"></uv-text>
          <uv-text type="info" size="12" text="粉丝数：18 作品：4"></uv-text>
          <uv-text type="info" size="12" text="DUUK号：28381388"></uv-text>
        </view>
      </template>
      <template #footer>
        <view class="flex align-center">
          <uv-button
            type="primary"
            plain
            shape="circle"
            text="关注"
            :style="{
              height: '2em',
            }"
          ></uv-button>
        </view>
      </template>
    </uv-list-item>
  </uv-list>
</template>

<script setup></script>

<style lang="scss" scoped></style>

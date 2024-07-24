<template>
  <view
    class="page-container upload-page-bg"
    :style="{
      background: bgColor,
    }"
  >
  </view>
  <view class="page-container upload-page navbar">
    <uv-toast ref="toastRef" />
    <uv-navbar
      bgColor="#00000000"
      title="上传歌词"
      :autoBack="true"
      leftIconColor="#fff"
      :titleStyle="{ color: '#fff' }"
    >
    </uv-navbar>
    <view class="upload-container">
      <view class="mb-2">
        <uv-input
          placeholder="歌曲名称"
          border="none"
          size="large"
          class="song-title"
          color="#ffffff"
          fontSize="40rpx"
          v-model="songName"
          :customStyle="{
            textAlign: 'center',
          }"
          :disabled="isUploading"
        ></uv-input>
      </view>

      <view class="flex-1" id="words-inputer">
        <uv-textarea
          class="song-words"
          border="none"
          placeholder="请输入歌词"
          color="#050202"
          :height="containerSize.height + 'px'"
          :maxlength="5000"
          v-model="songWords"
          :disabled="isUploading"
        ></uv-textarea>
      </view>
      <uv-button
        type="primary"
        class="upload-button"
        text="上传"
        shape="circle"
        @click="handleUpload"
        :disabled="isUploading"
      ></uv-button>
    </view>
  </view>
</template>

<script setup>
import randomColor from "randomcolor";
import { computed, ref } from "vue";
import { io } from "@/utils/io/io";
import { logger } from "@/utils/logger";
import { useElementSize } from "@/hooks/element-size";

const songName = ref("");
const songWords = ref("");
const toastRef = ref(null);
const isUploading = ref(false);

const containerSize = useElementSize("#words-inputer");

const handleUpload = async () => {
  try {
    isUploading.value = true;
    const res = await io.request("post", "/song_words/upload", {
      name: songName.value,
      lyric: songWords.value,
    });
    toastRef.value.show({
      type: "success",
      message: "注册成功",
      position: "bottom",
      duration: 1000,
      complete() {
        uni.navigateBack();
      },
    });
    logger.success("上传歌词成功", res);
  } catch (e) {
    logger.success("上传歌词失败", e);
  } finally {
    setTimeout(() => {
      isUploading.value = false;
    }, 1000);
  }
};

const bgColorSet = randomColor({
  count: 3,
  luminosity: "dark",
  format: "hex",
});

const bgColor = computed(
  () =>
    `linear-gradient(0deg, ${bgColorSet[0]} 0%, ${bgColorSet[1]} 32%, ${bgColorSet[2]} 100%)`,
);
</script>

<style lang="scss" scoped>
.upload-page-bg {
  background: #000;
  transition: all ease 300ms;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 30;
    backdrop-filter: blur(10px);
  }
}
.upload-page {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  .upload-container {
    padding: 50rpx;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .song-title {
    font-size: 0;
    background-color: #00000000 !important;
    :deep(.uv-input__content__prefix-icon) {
      margin-right: 0;
    }
  }
  .song-words {
    background: inherit;
    padding: 0;
    flex: 1;
    :deep(.uni-textarea-textarea) {
      color: #ffffff;
      line-height: 2em;
    }
  }
  .upload-button {
    margin-top: 40rpx;
  }
}
</style>

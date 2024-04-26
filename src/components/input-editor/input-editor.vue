<template>
  <view
    :class="{
      'input-editor-container': true,
      'edit-mode': !!inputMode,
    }"
    :style="{
      bottom: `${keyboardHeight}px`,
    }"
  >
    <text class="editor-icon dicon dicon-mic1" @click="toggleKeyboardAndMic" />

    <uv-textarea
      v-model="inputValue"
      class="input-textarea"
      border="none"
      placeholder="聊点什么吧"
      :height="inputMode ? '150rpx' : '50rpx'"
      :adjustPosition="false"
      @focus="handleInputFocus"
      @blur="handleInputBlur"
      @keyboardheightchange="handkeKeyboardChange"
      :textStyle="{
        lineHeight: inputMode ? '1.15em' : '50rpx',
      }"
    ></uv-textarea>
    <text class="editor-icon dicon dicon-emot-smile" />
    <text v-show="!inputValue" class="editor-icon dicon dicon-message-add" />

    <uv-button
      class="send-button"
      type="primary"
      @tap="handleSendMessage"
      :disabled="!inputValue"
      v-show="inputValue"
    >
      发送
    </uv-button>
  </view>
</template>

<script setup>
import { logger } from "@/utils/logger";
import { ref } from "vue";

const inputValue = ref("");
const keyboardHeight = ref(0);
const inputMode = ref(false);
// 键盘弹起事件
const handkeKeyboardChange = (res) => {
  keyboardHeight.value = res.detail?.height ?? 0;
};

const handleSendMessage = () => {
  logger.debug("发送消息", inputValue.value);
  inputValue.value = "";
};

const handleInputFocus = () => {
  logger.debug("输入框Focus");
  inputMode.value = true;
};

const handleInputBlur = () => {
  logger.debug("输入框Blur");
  inputMode.value = false;
};

const toggleKeyboardAndMic = () => {
  logger.debug("切换消息类型");
};
</script>

<style lang="scss" scoped>
.input-editor-container {
  height: 100rpx;
  display: flex;
  align-items: center;
  padding: 0 20rpx;
  gap: 20rpx;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  &.edit-mode {
    height: 200rpx;
  }
}
.editor-icon {
  display: inline-block;
  line-height: 70rpx;
  width: 50rpx;
  text-align: center;
}
.input-textarea {
  padding: 10rpx;
  line-height: 100rpx;
  background: $uv-bg-color;
}
.editor-icon,
.send-button {
  height: 70rpx;
  align-self: flex-end;
  margin-bottom: 15rpx;
}
</style>

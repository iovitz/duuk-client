<template>
  <view class="register-page-container">
    <uv-navbar title="重置密码" :placeholder="true" autoBack></uv-navbar>
    <view class="form-container">
      <uv-form labelPosition="left" :model="formData" ref="form">
        <uv-form-item prop="userInfo.phone">
          <uv-input
            placeholder="请输入账号名"
            v-model="phoneNumber"
            maxlength="16"
          />
        </uv-form-item>
        <uv-form-item prop="userInfo.password">
          <uv-input
            placeholder="请输入密码"
            type="password"
            v-model="phoneNumber"
            maxlength="16"
          />
        </uv-form-item>
        <uv-button type="primary" customStyle="margin-top: 10px">
          获取验证码
        </uv-button>
      </uv-form>
      <view class="input-phone-number"> </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { logger } from "@/utils/logger";
const phoneNumber = ref("");

const formData = {
  phone: "",
};

function handleWXLogin() {
  logger.verbose("登录WX");
}

function handleQQLogin() {
  logger.verbose("登录qq");
}
</script>

<style lang="scss" scoped>
.reset-page-container {
  height: 100%;
  width: 100%;
  padding-top: 200rpx;
  box-sizing: border-box;
}
.form-container {
  padding: 30rpx;
}
</style>

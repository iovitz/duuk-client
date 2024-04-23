<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <view class="login-page-container">
    <view class="form-container">
      <view class="logo"> DUUK图书 </view>
      <uv-form
        labelPosition="left"
        :model="formData"
        ref="form"
        labelWidth="6em"
      >
        <uv-form-item prop="username" label="用户名：">
          <uv-input
            placeholder="请输入用户名"
            v-model="formData.username"
            maxlength="16"
          />
        </uv-form-item>
        <uv-form-item prop="password" label="密码：">
          <uv-input
            placeholder="请输入密码"
            type="password"
            v-model="formData.password"
            maxlength="16"
          />
        </uv-form-item>
        <uv-form-item label="验证码：" prop="code">
          <uv-input
            placeholder="请输入验证码"
            type="text"
            v-model="formData.code"
            id="login-verify-code"
            maxlength="4"
            :customStyle="{
              marginRight: '10px',
            }"
          />
          <view
            :style="{ fontSize: 0, width: '120px' }"
            @click="reflashVerifyCode"
            v-html="verifyCode"
          ></view>
        </uv-form-item>
        <uv-button type="primary" customStyle="margin-top: 10px">
          登录
        </uv-button>
        <view class="options">
          <text @click="goRegister">注册</text> |
          <text @click="goReset">忘记密码</text>
        </view>
      </uv-form>
      <view class="input-phone-number"> </view>
    </view>

    <view class="auth-buttons">
      <view class="auth-button wx" @click="handleWXLogin">
        <text class="iconfont icon-wechat-fill" />
      </view>
      <view class="auth-button qq" @click="handleQQLogin">
        <text class="iconfont icon-QQ" />
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { logger } from "@/utils/logger";
import { useVerifyCode } from "@/hooks/verify-code";

const formData = {
  username: "",
  password: "",
  code: "",
};

const { verifyCode, reflashVerifyCode } = useVerifyCode(
  "#login-verify-code",
  120,
  "login",
);

function handleWXLogin() {
  logger.verbose("登录WX");
}

function handleQQLogin() {
  logger.verbose("登录qq");
}

function goRegister() {
  uni.navigateTo({
    url: "/pages/login/register",
  });
}
function goReset() {
  uni.navigateTo({
    url: "/pages/login/reset",
  });
}
</script>

<style lang="scss" scoped>
.logo {
  font-size: 1.6em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1em;
}
.login-page-container {
  height: 100%;
  width: 100%;
  padding-top: 200rpx;
  box-sizing: border-box;
}
.form-container {
  padding: 30rpx;
}
.auth-buttons {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 120rpx;
  display: flex;
  justify-content: center;
}
.auth-button {
  height: 80rpx;
  width: 80rpx;
  border-radius: 80rpx;
  align-items: center;
  justify-content: center;
  display: flex;
  color: #fff;
  text {
    font-size: 50rpx;
  }
  &.wx {
    background-color: #56ab6e;
    margin-right: 60rpx;
  }
  &.qq {
    background-color: #0099ff;
  }
}
.wx-auth {
  margin-right: 60rpx;
}
.options {
  margin-top: 2em;
  text-align: center;
}
</style>

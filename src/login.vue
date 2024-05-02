<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <view class="login-page-container">
    <view class="form-container">
      <view class="logo"> DUUK图书 </view>
      <uv-form
        labelPosition="left"
        :model="formData"
        labelWidth="80px"
        ref="formRef"
        :rules="rules"
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
        <uv-button
          type="primary"
          @click="handleSubmit"
          customStyle="margin-top: 10px"
        >
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
        <uv-icon
          name="wechat-fill"
          custom-prefix="dicon"
          size="30"
          color="#fff"
        />
      </view>
      <view class="auth-button qq" @click="handleQQLogin">
        <uv-icon name="QQ" custom-prefix="dicon" size="30" color="#fff" />
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { logger } from "@/utils/logger";
import { useVerifyCode } from "@/hooks/verify-code";
import { passwordRule, usernameRule, verifyCodeRule } from "./utils/rules";
import { useUserStore } from "./store";

const rules = {
  username: usernameRule,
  password: passwordRule,
  code: verifyCodeRule,
};

const userStore = useUserStore();

const formData = ref({
  username: "",
  password: "",
  code: "",
});

const formRef = ref(null);
const toastRef = ref(null);

const { verifyCode, reflashVerifyCode } = useVerifyCode(
  "#login-verify-code",
  120,
  "login",
);

function handleSubmit() {
  formRef.value
    .validate()
    .then(async (res) => {
      logger.success("表单校验成功", res);
      await userStore.login(formData.value);
      toastRef.value.show({
        type: "success",
        message: "登录成功",
        position: "bottom",
        duration: 1000,
        complete() {
          uni.switchTab({
            url: "home",
          });
        },
      });
    })
    .catch(reflashVerifyCode);
}
function handleWXLogin() {
  logger.debug("登录WX");
}

function handleQQLogin() {
  logger.debug("登录qq");
}

function goRegister() {
  uni.navigateTo({
    url: "register",
  });
}
function goReset() {
  uni.navigateTo({
    url: "reset",
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

<template>
  <view class="register-page-container">
    <view class="form-container">
      <uv-form labelPosition="left" :model="formData" ref="form">
        <uv-form-item label="用户名：" labelWidth="6em" prop="username">
          <uv-input
            placeholder="请输入用户名"
            type="text"
            shape="circle"
            v-model="formData.username"
            maxlength="16"
          />
        </uv-form-item>
        <uv-form-item label="邮箱：" labelWidth="6em" prop="email">
          <uv-input
            placeholder="用于接收验证码的邮箱"
            type="text"
            shape="circle"
            v-model="formData.email"
            maxlength="16"
          />
        </uv-form-item>
        <uv-form-item label="验证码：" labelWidth="6em" prop="code">
          <uv-input
            placeholder="请输入4位验证码"
            type="text"
            shape="circle"
            v-model="formData.code"
            maxlength="4"
            :customStyle="{
              marginRight: '10px',
            }"
          />
          <uv-button type="primary" shape="circle"> 获取验证码 </uv-button>
        </uv-form-item>
        <uv-form-item label="密码：" labelWidth="6em" prop="password">
          <uv-input
            placeholder="请输入密码"
            type="text"
            shape="circle"
            v-model="formData.password"
            maxlength="16"
          />
        </uv-form-item>
        <uv-form-item label="重复密码：" labelWidth="6em" prop="repeat">
          <uv-input
            placeholder="请重复密码"
            type="text"
            shape="circle"
            v-model="formData.repeat"
            maxlength="16"
          />
        </uv-form-item>
        <uv-button type="primary" shape="circle" customStyle="margin-top: 10px">
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

const formData = {
  email: "",
  code: "",
  name: "",
  username: "",
  password: "",
  repeat: "",
};
</script>

<style lang="scss" scoped>
.register-page-container {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
.form-container {
  padding: 30rpx;
}
</style>

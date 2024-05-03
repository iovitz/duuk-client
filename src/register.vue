<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <view class="register-page-container">
    <uv-toast ref="toastRef" />
    <uv-navbar title="加入DUUK" :placeholder="true" autoBack></uv-navbar>
    <view class="form-container">
      <uv-form
        labelPosition="left"
        labelWidth="80px"
        :model="formData"
        ref="formRef"
        :rules="rules"
      >
        <uv-form-item label="用户名：" prop="username">
          <uv-input
            placeholder="请输入用户名"
            type="text"
            v-model="formData.username"
            maxlength="16"
          />
        </uv-form-item>

        <uv-form-item label="密码：" prop="password">
          <uv-input
            placeholder="请输入密码"
            type="password"
            v-model="formData.password"
            maxlength="16"
          />
        </uv-form-item>
        <uv-form-item label="重复密码：" prop="repeat">
          <uv-input
            placeholder="请重复密码"
            type="password"
            v-model="formData.repeat"
            maxlength="16"
          />
        </uv-form-item>
        <uv-form-item label="验证码：" prop="code">
          <uv-input
            placeholder="请输入验证码"
            type="text"
            v-model="formData.code"
            id="register-verify-code"
            maxlength="4"
            :customStyle="{
              marginRight: '10px',
            }"
          />
          <view
            @click="reflashVerifyCode"
            v-html="verifyCode"
            :style="{ fontSize: 0, width: '120px' }"
          ></view>
        </uv-form-item>
        <uv-button
          type="primary"
          @click="handleSubmit"
          customStyle="margin-top: 10px"
        >
          进入Duuk
        </uv-button>
      </uv-form>
      <view class="input-phone-number"> </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useVerifyCode } from "@/hooks/verify-code";
import { logger } from "@/utils/logger";
import { passwordRule, usernameRule, verifyCodeRule } from "@/utils/rules";
import { useUserStore } from "@/store";
const userStore = useUserStore();

const formRef = ref(null);
const toastRef = ref(null);

const formData = ref({
  code: "",
  username: "",
  password: "",
  repeat: "",
});

const rules = {
  username: usernameRule,
  password: passwordRule,
  repeat: {
    validator: (_, value) => {
      if (value !== formData.value.password) {
        return false;
      }
      return true;
    },
    message: "两次密码不一致",
    trigger: ["blur", "change"],
  },
  code: verifyCodeRule,
};

const { verifyCode, reflashVerifyCode } = useVerifyCode(
  "#register-verify-code",
  120,
  "register",
);

function handleSubmit() {
  formRef.value
    .validate()
    .then(async (res) => {
      logger.success("表单校验成功", res);
      await userStore.register(formData.value);
      toastRef.value.show({
        type: "success",
        message: "注册成功",
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

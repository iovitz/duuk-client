<template>
  <view class="page-container navbar">
    <uv-navbar title="更新记录"></uv-navbar>
    <view class="commit-info">
      <uv-steps current="0" direction="column" :dot="true">
        <uv-steps-item v-for="item in commitList" :key="item.sha">
          <template v-slot:title>
            <uv-text :text="item.commit.message"></uv-text>
          </template>
          <template v-slot:desc>
            <view>
              <uv-list padding="5px 10px">
                <uv-list-item>
                  <template #header>
                    <uv-text text="Author：" :size="12" />
                  </template>
                  <template #footer>
                    <view class="flex align-center">
                      <uv-avatar
                        :size="15"
                        :src="item.committer.avatar_url"
                        class="d-inline-block"
                      ></uv-avatar>
                      <uv-text
                        :text="`${item.commit.author.name}(${item.commit.author.email})`"
                        :size="12"
                      />
                    </view>
                  </template>
                </uv-list-item>
                <uv-list-item>
                  <template #header>
                    <uv-text text="Time：" :size="12" />
                  </template>
                  <template #footer>
                    <view class="flex align-center">
                      <uv-text :text="item.commit.author.date" :size="12" />
                    </view>
                  </template>
                </uv-list-item>
              </uv-list>
            </view>
          </template>
        </uv-steps-item>
      </uv-steps>
    </view>
  </view>
</template>

<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { io } from "@/utils/io/io";

const commitList = ref([]);

async function fetchCommitList() {
  const data = await io.request("get", "/github/commits", {
    owner: "iovitz",
    repo: "duuk-client",
    per_page: 15,
    page: commitList.value.length / 15 + 1,
  });
  console.log(data);
  commitList.value.push(...data);
}

onMounted(() => {
  fetchCommitList();
});
</script>

<style lang="scss" scoped>
.commit-info {
  padding: 30rpx;
}
</style>

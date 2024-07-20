<template>
  <view class="page-container navbar">
    <uv-navbar title="更新记录" :autoBack="true"></uv-navbar>
    <view class="commit-info">
      <uv-subsection
        :list="commitType"
        :current="current"
        @change="handleTypeChange"
        activeColor="#ff7e7c"
      ></uv-subsection>
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
import { onMounted, computed } from "vue";
import { ref } from "vue";
import { io } from "@/utils/io/io";

const commitInfo = ref([[], []]);

const commitType = ref(["客户端更新", "服务端更新"]);

const current = ref(0);

function handleTypeChange(type) {
  current.value = type;
  if (commitInfo.value[type].length === 0) {
    fetchCommitList();
  }
}

const commitList = computed(() => {
  return commitInfo.value[current.value];
});

async function fetchCommitList() {
  const list = commitInfo.value[current.value];
  const data = await io.request("get", "/github/commits", {
    owner: "iovitz",
    repo: current.value === 0 ? "duuk-client" : "duuk-server",
    per_page: 15,
    page: list.length / 15 + 1,
  });
  list.push(...data);
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

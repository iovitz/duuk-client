<script setup>
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

onLaunch(async (e) => {});

onShow(() => {});

onHide(() => {});
</script>

<!-- 这里的style不能设置scoped -->
<style lang="scss">
@import "@/uni_modules/uv-ui-tools/index.scss";
@import "@/common/theme.scss";

page {
  height: 100%;
  color: #313234;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Helvetica Neue,
    PingFang SC,
    Microsoft YaHei,
    Source Han Sans SC,
    Noto Sans CJK SC,
    WenQuanYi Micro Hei,
    sans-serif;
}
</style>
./utils/router

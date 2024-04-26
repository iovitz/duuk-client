<script setup>
import { onLaunch, onShow, onHide, onReady } from "@dcloudio/uni-app";
import { preloadTabbarPages } from "./utils/router";
import { useAppStore } from "./store";
import { logger } from "./utils/logger";

onLaunch(async (e) => {
  logger.verbose("App启动参数", e);
  const appStore = useAppStore();
  if (!appStore.ready) {
    // await preloadTabbarPages(e.path, "/pages/shoppingcard/shoppingcard", () => {
    //   logger.verbose("页面加载完成");
    //   appStore.setAppReady();
    // });
    // #ifdef APP-PLUS
    plus.navigator.closeSplashscreen();
    // #endif
  }
});
onShow(() => {});

onHide(() => {});

onReady(() => {});
</script>

<!-- 这里的style不能设置scoped -->
<style lang="scss">
@import "@/uni_modules/uv-ui-tools/index.scss";
@import "@/common/theme.scss";
@import "@/common/style-fix.scss";
@import "@/common/global.scss";
@import "@/common/iconfont.css";

page {
  height: 100%;
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
  background: $uv-bg-color;
}
</style>

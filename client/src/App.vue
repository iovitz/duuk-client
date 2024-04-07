<script setup>
import { onLaunch, onShow, onHide, onReady } from "@dcloudio/uni-app";

onLaunch(async (e) => {
  // uni.switchTab({
  //   url: "/pages/message/message",
  //   success(e) {
  //     uni.switchTab({
  //       url: "/pages/events/events",
  //       success(e) {
  //         uni.switchTab({
  //           url: "/pages/calendar/calendar",
  //           success(e) {
  //             uni.switchTab({
  //               url: "/pages/home/home",
  //               success(e) {
  //                 console.log("###", e);
  //                 plus.navigator.closeSplashscreen();
  //               },
  //             });
  //           },
  //         });
  //       },
  //     });
  //   },
  // });
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
@import "@/common/iconfont/iconfont.css";

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
  background-color: #eff6fc;
}
</style>
./utils/router

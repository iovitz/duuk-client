<template>
  <view class="category-page-container">
    <uv-navbar title="图书分类" :placeholder="true" autoBack></uv-navbar>
    <uv-vtabs
      :chain="true"
      :list="list"
      :height="scrollHeight"
      hdHeight="44px"
      @change="handleChange"
    >
      <template v-for="(item, index) in list" :key="index">
        <uv-vtabs-item :index="index">
          <view
            class="item"
            v-for="(item2, index2) in item.childrens"
            :key="index2"
          >
            <view class="item-title">
              <text class="text">{{ item2.name }}</text>
            </view>
            <view class="item-content">
              <text class="text">{{ item2.desc }}</text>
            </view>
          </view>
        </uv-vtabs-item>
      </template>
    </uv-vtabs>
  </view>
</template>

<script setup>
import { useScrollHeight } from "@/hooks/scroll-height";
import { ref } from "vue";

const { scrollHeight } = useScrollHeight(44);

const list = ref([
  {
    name: "uv-ui简介",
    childrens: [
      {
        name: "uv-ui简介",
        desc: "1. uv-ui最初是在uview2.x的基础上进行改进优化，支持vue3等优化，最重要的是支持单独导入直接使用，无需在main.js中进行配置。\n\n2. uv-ui来源于社区，也回归到社区，正是有一群热爱uni-app生态的同学推着它前行，而我们也一如既往的承诺，uv-ui永久开源，永远免费。但是会在下载处进行广告配置，作为开发团队的研发费用的部分来源，所以希望大家理解。",
      },
    ],
  },
  {
    name: "uv-ui特点",
    childrens: [
      {
        name: "全端兼容",
        desc: "uv-ui支持App（vue）、App（nvue）、H5、小程序、VUE2、VUE3，支持nvue原生渲染。uv-ui的组件都是多端自适应的，底层会抹平很多小程序平台的差异或bug。",
      },
      {
        name: "集成工具",
        desc: "uv-ui中的uv-ui-tools组件集成了强大的网络请求 HTTP 及常用的工具函数，无需自己再去寻找，并且直接挂载在uni上面，方便使用，只需要在mian.js中引入即可，更多工具请参考：https://www.uvui.cn/js/http.html。使用方式请参考：https://www.uvui.cn/components/setting.html。",
      },
      {
        name: "主题扩展",
        desc: "uv-ui中的uv-ui-tools组件下面的theme.scss为主题文件，直接在uni.scss中引入主题即可，可以根据自己的需求进行扩展。下面也有说明具体使用方式。使用方法请参考：https://www.uvui.cn/components/setting.html",
      },
    ],
  },
  {
    name: "更新日志",
    badge: {
      isDot: true,
    },
    childrens: [
      {
        name: "更新日志",
        desc: "uv-ui的重大更新在更新日志中都有所说明，如果在开发的过程中遇到文档不完善，可以提供给我们，我们会持续完善，非常感谢大家的支持。更新日志：https://www.uvui.cn/components/changelog.html",
      },
    ],
  },
  {
    name: "设计规范",
    childrens: [
      {
        name: "设计规范",
        desc: "为了约束合成更多优秀的组件和模板，打造优质的体验，我们拟定了一些UI界面设计和建议。同时部分之间会有依赖，这是为了减少代码冗余的同时提高开发效率，模块化是我们的基础。如果大家有好的建议，可以提出进行改进。",
      },
    ],
  },
  {
    name: "交流反馈",
    childrens: [
      {
        name: "交流反馈",
        desc: "uv-ui为采用MIT许可证的开源项目，使用完全免费。欢迎加QQ群交流反馈，一起学习，共同进步。QQ群： 549833913",
      },
    ],
  },
]);

function handleChange() {
  console.log("Change");
}
</script>

<style lang="scss" scoped>
.header {
  color: red;
}
</style>
@/hooks/scroll-height

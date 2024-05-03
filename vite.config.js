import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default {
	...defineConfig({
		plugins: [uni()],
	}),

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@/common/theme.scss";',
			},
		},
	},
	transpileDependencies: ["@dcloudio/uni-ui"],
	server: {
		proxy: {
			"/api": {
				// target: "http://<server host>[:port]/", // 远程服务器
				target: "http://192.168.1.102:9293", // 本地开发
				changeOrigin: true,
			},
		},
	},
	resolve: {
		alias: {
			util: "util/",
		},
	},
};

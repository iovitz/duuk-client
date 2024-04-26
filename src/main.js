import App from "./App.vue";
import uvUI from "@/uni_modules/uv-ui-tools";
import { createSSRApp } from "vue";
import { pinia } from "./store";
import { io } from "./utils/io/io";

export function createApp() {
	const app = createSSRApp(App);
	app.use(uvUI);
	app.use(pinia);

	app.config.globalProperties.$io = io;

	return {
		app,
	};
}

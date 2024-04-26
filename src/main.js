import App from "./App.vue";
import uvUI from "@/uni_modules/uv-ui-tools";
import { createSSRApp } from "vue";
import { pinia } from "./store";
import { http } from "./utils/http/http";
import { socket } from "./utils/socket";

export function createApp() {
	const app = createSSRApp(App);
	app.use(uvUI);
	app.use(pinia);

	app.config.globalProperties.$http = http;
	app.config.globalProperties.$io = socket;

	return {
		app,
	};
}

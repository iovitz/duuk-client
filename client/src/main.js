import App from "./App.vue";
import uvUI from "@climblee/uv-ui";
import { createSSRApp } from "vue";
import { pinia } from "./store";

export function createApp() {
	const app = createSSRApp(App);
	app.use(uvUI);
	app.use(pinia);
	return {
		app,
	};
}

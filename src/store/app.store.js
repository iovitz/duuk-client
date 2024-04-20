import { defineStore } from "pinia";

/**
 * 一些App运行相关状态
 */
export const useAppStore = defineStore("app", {
	persist: {
		key: "app",
		paths: [],
	},
	state: () => {
		return {
			ready: false,
		};
	},
	actions: {
		setAppReady() {
			this.ready = true;
		},
	},
});

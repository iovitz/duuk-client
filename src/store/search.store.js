import { io } from "@/utils/io/io";
import { storage } from "@/utils/storage";
import { defineStore } from "pinia";

/**
 * 一些App运行相关状态
 */
export const useUserStore = defineStore("search", {
	state: () => {
		return {
			users: [],
			lyrics: [],
			voices: [],
			all: [],
		};
	},
	getters: {},
	actions: {
		searchUsers() {},
	},
});

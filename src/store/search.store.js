import { io } from "@/utils/io/io";
import { storage } from "@/utils/storage";
import { defineStore } from "pinia";

/**
 * 一些App运行相关状态
 */
export const useSearchStore = defineStore("search", {
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
		async searchUsers(content, page = 1) {
			const res = await io.request(
				"post",
				`/search/content?page=${page}&per_page=10`,
				{
					content,
					type: "user",
				},
			);
			this.users.push(...res);
		},
		clear() {
			this.users = [];
			this.lyrics = [];
			this.voices = [];
			this.all = [];
		},
	},
});

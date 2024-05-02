import { io } from "@/utils/io/io";
import { defineStore } from "pinia";

/**
 * 一些App运行相关状态
 */
export const useBookStore = defineStore("book", {
	persist: {
		key: "book",
		paths: [],
	},
	state: () => {
		return {
			category: [],
		};
	},
	actions: {
		async fetchCategory(item) {
			const res = await io.request("get", "/book/category");
			this.category = res;
		},
	},
});

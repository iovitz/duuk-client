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
			bookList: [],
		};
	},
	actions: {
		add(item) {
			this.bookList.push(item);
		},
	},
});

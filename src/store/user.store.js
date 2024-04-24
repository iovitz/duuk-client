import { http } from "@/utils/http/http";
import { storage } from "@/utils/storage";
import { defineStore } from "pinia";

/**
 * 一些App运行相关状态
 */
export const useUserStore = defineStore("user", {
	persist: {
		key: "user",
		paths: [],
	},
	state: () => {
		return {
			logdin: false,
		};
	},
	actions: {
		async register(payload) {
			const regRes = await http.post("/user/register", {
				uname: payload.username,
				pwd: payload.password,
				vcode: payload.code,
			});
			storage.set("token", regRes.token);
			// this.$dispose();
			return regRes.user;
		},
	},
});

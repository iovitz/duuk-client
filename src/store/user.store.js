import { io } from "@/utils/io/io";
import { storage } from "@/utils/storage";
import { defineStore } from "pinia";

/**
 * 一些App运行相关状态
 */
export const useUserStore = defineStore("user", {
	persist: {
		key: "user",
		paths: ["account", "nickname", "avatar", "userId", "username"],
	},
	state: () => {
		return {
			account: "",
			nickname: "",
			avatar: "",
			userId: "",
			username: "",
		};
	},
	getters: {
		isLogined() {
			return !!this.userId;
		},
	},
	actions: {
		loginRouteGuard() {
			if (!this.isLogined) {
				uni.navigateBack();
				uni.navigateTo({
					url: "login",
					animationType: "slide-in-bottom",
				});
			}
		},
		async register(payload) {
			const res = await io.post("/user/register", {
				username: payload.username,
				password: payload.password,
				vcode: payload.code,
			});
			this.handleLoginSuccess(res);
			return res.user;
		},
		async login(payload) {
			const res = await io.post("/user/login", {
				username: payload.username,
				password: payload.password,
				vcode: payload.code,
			});
			this.handleLoginSuccess(res);
			return res.user;
		},
		handleLoginSuccess(res) {
			storage.set("token", res.token);
			this.nickname = res.user.nickname;
			this.userId = res.user.userId;
			this.username = res.user.username;
			this.avatar = res.user.avatar;
		},
		logout() {
			storage.remove("token");
			this.nickname = "";
			this.userId = "";
			this.username = "";
			this.avatar = "";
		},
	},
});

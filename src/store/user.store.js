import { io } from "@/utils/io/io";
import { storage } from "@/utils/storage";
import { defineStore } from "pinia";

/**
 * 一些App运行相关状态
 */
export const useUserStore = defineStore("user", {
	persist: {
		key: "user",
		paths: ["account", "nickname", "avatar", "uid", "uname", "isLogin"],
	},
	state: () => {
		return {
			account: "",
			nickname: "",
			avatar: "",
			uid: "",
			uname: "",
		};
	},
	getters: {
		isLogined() {
			return !!this.uid;
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
				uname: payload.username,
				pwd: payload.password,
				vcode: payload.code,
			});
			this.handleLoginSuccess(res);
			return res.user;
		},
		async login(payload) {
			const res = await io.post("/user/login", {
				uname: payload.username,
				pwd: payload.password,
				vcode: payload.code,
			});
			this.handleLoginSuccess(res);
			return res.user;
		},
		handleLoginSuccess(res) {
			storage.set("token", res.token);
			this.nickname = res.user.nickname;
			this.uid = res.user.uid;
			this.uname = res.user.uname;
			this.avatar = res.user.avatar;
		},
		logout() {
			storage.remove("token");
			this.nickname = "";
			this.uid = "";
			this.uname = "";
			this.avatar = "";
		},
	},
});

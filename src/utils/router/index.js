import { logger } from "../logger";
import { getSession } from "../storage";
// @ts-ignore
import pages from "@/pages.json";

// 未登录路由白名单
const whiteList = ["/pages/entry/entry"];
const launchPageUrl = "/pages/launch/launch";

let launched = false;

export function RouterGaide(url) {
	if (whiteList.includes(url)) {
		return true;
	}
	const session = getSession();
	if (!session) {
		logger.error("找不到Session，跳转登录页..");
		uni.reLaunch({
			url: "/pages/entry/entry",
		});
		return false;
	}
	return true;
}

export function switchTabPromise(url) {
	return new Promise((success, fail) => {
		uni.switchTab({
			url,
			success,
			fail,
		});
	});
}

export function preloadTabbarPages(currentPath, jumpTo, onLoaded) {
	let promise = new Promise((resolve) => resolve());
	pages.tabBar.list.forEach((tabbarItem) => {
		if (tabbarItem.pagePath === currentPath) return;
		promise = promise.then(() => switchTabPromise(`/${tabbarItem.pagePath}`));
	});
	promise
		.then(() => {
			onLoaded();
			switchTabPromise(jumpTo);
		})
		.finally(() => {
			// #ifdef APP-PLUS
			plus.navigator.closeSplashscreen();
			// #endif
		});
	return promise;
}

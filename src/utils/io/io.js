// @ts-nocheck
import socketIO from "@hyoga/uni-socket.io";
import { logger } from "../logger";
import { getConfig } from "../config";
import pako from "@/utils/common/pako.js";
import { Buffer } from "buffer";

export class IO {
	isWatching = true;

	constructor(httpConf, socketConf) {
		this.httpConf = httpConf;
		this.socketConf = socketConf;
		const socket = socketIO(socketConf.path, {
			query: socketConf.query ?? {},
			transports: ["websocket", "polling"],
			timeout: socketConf.timeout ?? 500,
		});
		this.socket = socket;
		this.initSocket();
	}

	ungzip(gzipBase64Str) {
		return JSON.parse(
			pako.ungzip(Buffer.from(gzipBase64Str, "base64"), { to: "string" }),
		);
	}

	gzip(data) {
		return this.strToGzipBase64(JSON.stringify(data));
	}

	strToGzipBase64(str) {
		return Buffer.from(pako.gzip(str, { level: 9 })).toString("base64");
	}

	initSocket() {
		const { socket } = this;
		socket.on("connect", () => {
			console.error(socket.id);
			logger.debug("Socket连接成功", socket.id);
			socket.on(socket.id, (message) => {
				logger.debug("ws 收到服务器消息：", message);
			});
			this.emit("chat", {
				name: "zs",
			});
		});

		this.on("disconnect", (msg) => {
			logger.debug("Socket disconnect", msg);
		});

		this.on("error", (msg) => {
			logger.debug("Socket Error", msg);
		});
	}

	emit(event, payload) {
		if (!this.isWatching) {
			logger.error("Socket Unwatch!");
		}
		const str = this.gzip(payload);
		this.socket.emit(event, str);
	}

	on(event, cb) {
		this.socket.on(event, cb);
		return () => {
			this.socket.removeListener(event, cb);
		};
	}

	off(event, cb) {
		this.socket.off(event, cb);
	}

	watch() {
		this.isWatching = true;
	}

	unwatch() {
		this.isWatching = false;
	}

	request(method, url, data, requestHeader = {}) {
		const { header, baseURL, timeout } = this.httpConf;
		const requestUrl = baseURL + url;
		const startTime = Date.now();
		return new Promise((success, fail) => {
			uni.request({
				url: requestUrl,
				data,
				method,
				success,
				fail,
				timeout,
				header: {
					...header,
					...requestHeader,
				},
			});
		})
			.then(({ data: res, statusCode }) => {
				const endTime = Date.now();
				logger.debug(`${requestUrl}请求结束`, `耗时${endTime - startTime}ms`);
				if (statusCode < 400) {
					// 直接把响应体返回
					return res.data;
				}
				logger.error("请求出错", {
					statusCode,
					res,
				});
				switch (statusCode) {
					case 401:
						uni.reLaunch({
							url: "/pages/entry/entry",
						});
						const title = res.message || "认证已经过期";
						uni.showToast({
							title: title,
							icon: "error",
						});
						break;
					default:
						uni.showToast({
							title: res.message,
							icon: "error",
						});
				}
				return Promise.reject(res);
			})
			.catch((e) => {
				logger.error("请求出错", e);
			});
	}

	get(url, data = {}, header = {}) {
		return this.request("GET", url, data, header);
	}

	createPostLickRequest(method, url, data, header = {}) {
		return this.request(method, url, data, header);
	}

	post(url, data = {}, header = {}) {
		return this.createPostLickRequest("POST", url, data, header);
	}

	put(url, data = {}, header = {}) {
		return this.createPostLickRequest("PUT", url, data, header);
	}

	delete(url, data = {}, header = {}) {
		return this.createPostLickRequest("DELETE", url, data, header);
	}
}

let baseURL = getConfig("VITE_API_PREFIX");
// #ifdef  APP-PLUS
baseURL = getConfig("VITE_BASE_URL") + getConfig("VITE_API_PREFIX");
// #endif

export const io = new IO(
	{
		baseURL,
		timeout: 60000,
		header: {},
	},
	{
		path: getConfig("VITE_SOCKET_URL"),
	},
);

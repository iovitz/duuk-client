import io from "@hyoga/uni-socket.io";
import { logger } from "../logger";
import { getConfig } from "../config";

export class Socket {
	queue = [];

	get connected() {
		return this.socket.connected;
	}

	get id() {
		return this.socket.id;
	}

	constructor(url, query = {}) {
		const socket = io(url, {
			query,
			transports: ["websocket", "polling"],
			timeout: 5000,
		});
		this.socket = socket;
		this.init();
	}

	init() {
		const { socket } = this;
		socket.on("connect", () => {
			logger.verbose("Socket连接成功", socket.id);
			socket.on(socket.id, (message) => {
				console.log("ws 收到服务器消息：", message);
			});
			// 主动向服务器发送数据
			socket.emit("send_data", {
				time: +new Date(),
			});
		});

		// 系统事件
		socket.on("disconnect", (msg) => {
			logger.verbose("#disconnect", msg);
		});

		socket.on("error", (msg) => {
			console.log("ws error", msg);
		});
	}

	emit(event, payload) {
		if (!this.connected) {
			this.queue.push({
				event,
				payload,
			});
		}
	}
}

export const socket = new Socket(getConfig("VITE_SOCKET_URL"));

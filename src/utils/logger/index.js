const LogLevel = {
	verbose: 1,
	log: 2,
	info: 3,
	warn: 4,
	error: 5,
};

export class Logger {
	constructor(level) {
		this.level = Number(level ? level : LogLevel.verbose);
	}

	verbose(message, payload) {
		if (LogLevel.verbose >= this.level) console.log(payload, message);
	}

	info(message, payload) {
		if (LogLevel.info >= this.level) console.info(payload, message);
	}

	warn(message, payload) {
		if (LogLevel.warning >= this.level) console.warn(payload, message);
	}

	error(message, payload) {
		if (LogLevel.error >= this.level) console.error(payload, message);
	}
}

export const logger = new Logger(uni.getStorageSync("app-log-level"));

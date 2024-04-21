import c from "ansi-colors";

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
		if (LogLevel.verbose >= this.level) {
			console.log(c.whiteBright.bold.bgBlack(` [DEBUG] ${message} `), payload);
		}
	}

	dev(message, payload) {
		if (LogLevel.verbose >= this.level) {
			console.log(c.whiteBright.bold.bgBlack(` [DEV] ${message} `), payload);
		}
	}

	success(message, payload) {
		if (LogLevel.info >= this.level) {
			console.info(c.whiteBright.bold.bgCyan(` [SUCC] ${message} `), payload);
		}
	}

	info(message, payload) {
		if (LogLevel.info >= this.level) {
			console.info(c.whiteBright.bold.bgBlue(` [INFO] ${message} `), payload);
		}
	}

	warn(message, payload) {
		if (LogLevel.warn >= this.level) {
			console.warn(
				c.whiteBright.bold.bgMagenta(` [WARN] ${message} `),
				payload,
			);
		}
	}

	error(message, payload) {
		if (LogLevel.error >= this.level) {
			console.error(c.whiteBright.bold.bgRed(` [ERR] ${message} `), payload);
		}
	}
}

export const logger = new Logger(uni.getStorageSync("app-log-level"));

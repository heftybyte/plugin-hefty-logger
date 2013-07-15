"use strict";

module.exports = function setups(options, imports, register) {
	var winston = require('winston');
	var logger = new winston.Logger();

	if (options.console) {
		logger.add(winston.transports.Console, {colorize: true});
	}

	if (options.logFile) {
		logger.add(winston.transports.File, {filename: options.logFile})
	}

	register(null, {
		logger: logger
	});
}

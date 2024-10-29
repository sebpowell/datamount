import { createLogger, format, transports } from "winston";

class LoggerService {
  private logger;

  constructor() {
    this.logger = createLogger({
      level: "info",
      format: format.combine(
        format.timestamp({
          format: "YYYY-MM-DD HH:mm:ss",
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.colorize(),
        format.printf(({ level, message, timestamp }) => {
          return `${timestamp} ${level}: ${message}`;
        }),
      ),
      transports: [
        new transports.Console({
          level: "info",
        }),
      ],
    });
  }

  getClient() {
    return this.logger;
  }
}

const loggerService = new LoggerService();

export { loggerService, LoggerService };

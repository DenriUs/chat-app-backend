const defaultConfig = {
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:yyyy-mm-dd, HH:MM:ss',
      ignore: 'pid,hostname',
    },
  },
};

export const loggerConfig = defaultConfig;

export const httpLoggerConfig = defaultConfig;

import pino from 'pino';
import { pinoHttp } from 'pino-http';

import { loggerConfig, httpLoggerConfig } from 'src/config';

export const logger = pino(loggerConfig);

export const httpLogger = pinoHttp(httpLoggerConfig);

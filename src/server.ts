import { createServer } from 'http';
import { createHttpTerminator } from 'http-terminator';

import { logger, ProcessSignalEnum, shutdownServer } from 'src/core';
import { env } from 'src/config';

import app from './app';

const { PORT } = env;

const server = createServer(app);

const httpTerminator = createHttpTerminator({ server });

server.listen(PORT, () => logger.info('Express application successfully started'));

process.on('SIGTERM', () => shutdownServer(httpTerminator));
process.on('SIGINT', () => shutdownServer(httpTerminator, ProcessSignalEnum.SIGINT));

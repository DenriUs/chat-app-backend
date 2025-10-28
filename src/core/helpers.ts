import { Server } from 'http';
import { createHttpTerminator } from 'http-terminator';

import { ProcessSignalEnum, ProcessExitCodeEnum } from './process';
import { logger } from './logger';

export const sleep = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

export const setupGracefulServerShutdown = async (
  server: Server,
  closeConnectionCallbacks: (() => Promise<void>)[] = [],
) => {
  process.on('SIGTERM', () => shutdownServer(server, closeConnectionCallbacks));
  process.on('SIGINT', () =>
    shutdownServer(server, closeConnectionCallbacks, ProcessSignalEnum.SIGINT),
  );
};

export const shutdownServer = async (
  server: Server,
  closeConnectionCallbacks: (() => Promise<void>)[] = [],
  signal: ProcessSignalEnum = ProcessSignalEnum.SIGTERM,
) => {
  logger.info('Shutting down the server...');

  const httpTerminator = createHttpTerminator({ server });

  try {
    await httpTerminator.terminate();

    for (const closeConnectionCallback of closeConnectionCallbacks) {
      await closeConnectionCallback();
    }

    logger.info('Server stopped gracefully');
    process.exit(
      signal === ProcessSignalEnum.SIGINT
        ? ProcessExitCodeEnum.SIGINT
        : ProcessExitCodeEnum.SUCCESS,
    );
  } catch (error) {
    logger.error(error, 'Error during shutdown: ');
    process.exit(ProcessExitCodeEnum.FAILURE);
  }
};

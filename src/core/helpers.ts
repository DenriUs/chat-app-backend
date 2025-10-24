import { HttpTerminator } from 'http-terminator';

import { ProcessSignalEnum, ProcessExitCodeEnum } from './process';
import { logger } from './logger';

export const shutdownServer = async (
  httpTerminator: HttpTerminator,
  signal: ProcessSignalEnum = ProcessSignalEnum.SIGTERM,
) => {
  logger.info('Shutting down the server...');

  await httpTerminator.terminate().catch((error) => {
    logger.error('Error during shutdown: ', error);
    process.exit(ProcessExitCodeEnum.FAILURE);
  });

  logger.info('Server stopped gracefully');
  process.exit(
    signal === ProcessSignalEnum.SIGINT ? ProcessExitCodeEnum.SIGINT : ProcessExitCodeEnum.SUCCESS,
  );
};

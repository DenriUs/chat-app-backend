import { createServer } from 'http';
import mongoose from 'mongoose';

import { logger, ProcessExitCodeEnum, setupGracefulServerShutdown } from 'src/core';
import { env } from 'src/config';
import { connectDb } from 'src/database';

import app from './app';

const { PORT } = env;

const bootstrap = async () => {
  await connectDb().catch((error) => {
    logger.error(error, "Couldn't connect to the database: ");
    process.exit(ProcessExitCodeEnum.FAILURE);
  });

  const server = createServer(app);

  server.listen(PORT, () => logger.info('Express application successfully started'));

  setupGracefulServerShutdown(server, [() => mongoose.connection.close()]);
};
bootstrap();

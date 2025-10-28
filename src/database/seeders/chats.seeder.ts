import mongoose from 'mongoose';

import { logger, ProcessExitCodeEnum } from 'src/core';
import { connectDb } from 'src/database';
import { ChatInput, ChatModel } from 'src/modules';

const chatsToSeed: ChatInput[] = [
  {
    firstName: 'Alice',
    lastName: 'Freeman',
  },
  {
    firstName: 'Josefina',
    lastName: ' ',
  },
  {
    firstName: 'Velazquez',
    lastName: ' ',
  },
];

const seed = async () => {
  logger.info(`Starting the seeding proccess of ${chatsToSeed.length} chat documents...`);

  await connectDb().catch((error) => {
    logger.error(error, "Couldn't connect to the database");
    process.exit(ProcessExitCodeEnum.FAILURE);
  });

  await ChatModel.insertMany(chatsToSeed).catch((error) => {
    logger.error(error, 'The seeding proccess failed with error: ');
    process.exit(ProcessExitCodeEnum.FAILURE);
  });

  await mongoose.connection.close();

  logger.info('The seeding proccess succesffully completed');
  process.exit(ProcessExitCodeEnum.SUCCESS);
};
seed();

import { ZodError } from 'zod';
import { config } from 'dotenv';

import { logger, NodeEnvEnum, ProcessExitCodeEnum } from 'src/core';

import { envSchema } from './env.schemas';
import { EnvSchemaType } from './env.types';

config({ path: `.env.${process.env.NODE_ENV || NodeEnvEnum.DEVELOPMENT}`, quiet: true });

const getParseErrorMessage = (error: ZodError<EnvSchemaType>) => {
  const envs = [];
  const issues = error.issues;
  for (let i = 0; i < issues.length; i++) {
    envs.push(issues[i].path[0]);
  }
  return `Missed or misconfigured envs: [${envs.join(', ')}]`;
};

const parsedEnv = envSchema.safeParse(process.env);
if (parsedEnv.error) {
  const errorMessage = getParseErrorMessage(parsedEnv.error);
  logger.error(errorMessage);
  process.exit(ProcessExitCodeEnum.FAILURE);
}

export const env = parsedEnv.data;

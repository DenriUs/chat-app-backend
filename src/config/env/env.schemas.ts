import zod from 'zod';

import { NodeEnvEnum } from 'src/core/node-env.enum';

const checkForNaN = (value: number) => !isNaN(value);
const nanErrorMessage = { error: 'Invalid input: expected array, received NaN' };

export const envSchema = zod.object({
  NODE_ENV: zod.enum(Array.from(Object.values(NodeEnvEnum))).optional(),
  PORT: zod.string(),
  CORS_ORIGIN: zod
    .string()
    .transform((value) => JSON.parse(value))
    .pipe(zod.array(zod.string())),
  RATE_LIMIT_WINDOW_MS: zod.string().transform(Number).refine(checkForNaN, nanErrorMessage),
  RATE_LIMIT_MAX: zod.string().transform(Number).refine(checkForNaN, nanErrorMessage),
  MONGO_DB_URL: zod.url(),
});

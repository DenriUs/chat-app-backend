import zod from 'zod';

import { envSchema } from './env.schemas';

export type EnvSchemaType = zod.infer<typeof envSchema>;

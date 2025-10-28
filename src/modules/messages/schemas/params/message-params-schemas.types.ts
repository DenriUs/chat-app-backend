import zod from 'zod';

import { idMessageParamsSchema } from 'src/modules';

export type IdMessageParamsSchemaType = zod.infer<typeof idMessageParamsSchema>;

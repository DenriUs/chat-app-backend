import zod from 'zod';

import { createChatBodySchema, updateChatBodySchema } from 'src/modules';

export type CreateChatBodySchemaType = zod.infer<typeof createChatBodySchema>;

export type UpdateChatBodySchemaType = zod.infer<typeof updateChatBodySchema>;

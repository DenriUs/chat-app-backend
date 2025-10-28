import zod from 'zod';

import { createMessageBodySchema, updateMessageBodySchema } from 'src/modules';

export type CreateMessageBodySchemaType = zod.infer<typeof createMessageBodySchema>;

export type UpdateMessageBodySchemaType = zod.infer<typeof updateMessageBodySchema>;

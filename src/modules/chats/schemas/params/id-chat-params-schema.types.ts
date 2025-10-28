import zod from 'zod';

import { idChatParamsSchema } from './id-chat-params.schema';

export type IdChatParamsSchemaType = zod.infer<typeof idChatParamsSchema>;

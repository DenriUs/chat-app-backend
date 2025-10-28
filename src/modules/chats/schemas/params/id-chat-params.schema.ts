import zod from 'zod';

export const idChatParamsSchema = zod.object({ chatId: zod.string().nonempty() });

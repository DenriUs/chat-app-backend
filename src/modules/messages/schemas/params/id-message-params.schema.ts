import zod from 'zod';

export const idMessageParamsSchema = zod.object({
  chatId: zod.string().nonempty(),
  messageId: zod.string().nonempty(),
});

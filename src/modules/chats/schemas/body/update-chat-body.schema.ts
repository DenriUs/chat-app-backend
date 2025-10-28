import zod from 'zod';

export const updateChatBodySchema = zod.object({
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

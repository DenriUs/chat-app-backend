import zod from 'zod';

export const createChatBodySchema = zod.object({
  firstName: zod.string().nonempty(),
  lastName: zod.string().nonempty(),
});

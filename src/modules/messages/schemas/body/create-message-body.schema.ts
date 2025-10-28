import zod from 'zod';

export const createMessageBodySchema = zod.object({
  text: zod.string().nonempty(),
});

import zod from 'zod';

export const searchQuerySchema = zod.object({ q: zod.string().optional() });

import zod from 'zod';

import { searchQuerySchema } from './search-query.schema';

export type SearchQuerySchemaType = zod.infer<typeof searchQuerySchema>;

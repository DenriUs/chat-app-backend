import { Request, Response, NextFunction } from 'express';

import { BadRequestError, RequestInputValidationSchemas } from 'src/core';

export const validateRequestInputMiddleware =
  (validationSchemas: Partial<RequestInputValidationSchemas>) =>
  (req: Request, _res: Response, next: NextFunction) => {
    for (const [key, schema] of Object.entries(validationSchemas)) {
      const result = schema.safeParse(req[key as keyof Request]);
      if (result.error) {
        throw new BadRequestError();
      }
    }
    next();
  };

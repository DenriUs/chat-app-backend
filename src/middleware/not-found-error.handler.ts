import { NextFunction, Request, Response } from 'express';

import {
  HttpErrorMessageEnum,
  HttpErrorTypeEnum,
  HttpResponseStatusCodeEnum,
  ResponseBody,
} from 'src/core';

export const notFoundErrorHandler = (_req: Request, res: Response, _next: NextFunction) => {
  const responseBody: ResponseBody = {
    success: false,
    errorType: HttpErrorTypeEnum.NOT_FOUND,
    message: HttpErrorMessageEnum.NOT_FOUND,
  };
  return res.status(HttpResponseStatusCodeEnum.NOT_FOUND).json(responseBody);
};

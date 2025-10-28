import { Request, Response, NextFunction } from 'express';

import {
  HttpError,
  HttpErrorMessageEnum,
  HttpErrorTypeEnum,
  HttpResponseStatusCodeEnum,
  logger,
  ResponseBody,
} from 'src/core';

export const globalErrorHandler = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  logger.error(error);
  const responseBody: ResponseBody = {
    success: false,
    errorType: HttpErrorTypeEnum.INTERNAL_SERVER,
    message: HttpErrorMessageEnum.INTERNAL_SERVER,
  };
  if (error instanceof HttpError) {
    responseBody.errorType = error.errorType;
    responseBody.message = error.message;
    return res.status(error.statusCode).json(responseBody);
  }
  return res.status(HttpResponseStatusCodeEnum.INTERNAL_SERVER_ERROR).json(responseBody);
};

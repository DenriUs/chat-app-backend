import {
  HttpErrorTypeEnum,
  HttpErrorMessageEnum,
  HttpErrorNameEnum,
  HttpResponseStatusCodeEnum,
} from 'src/core';

import { HttpError } from './http.error';

export class UnathorizedError extends HttpError {
  constructor(
    errorCode: HttpErrorTypeEnum = HttpErrorTypeEnum.UNAUTHORIZED,
    message: string = HttpErrorMessageEnum.UNAUTHORIZED,
  ) {
    super(
      HttpErrorNameEnum.UNAUTHORIZED,
      HttpResponseStatusCodeEnum.UNAUTHORIZED,
      errorCode,
      message,
    );
  }
}

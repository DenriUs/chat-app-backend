import {
  HttpErrorMessageEnum,
  HttpErrorNameEnum,
  HttpErrorTypeEnum,
  HttpResponseStatusCodeEnum,
} from 'src/core';

import { HttpError } from './http.error';

export class BadRequestError extends HttpError {
  constructor(
    errorCode: HttpErrorTypeEnum = HttpErrorTypeEnum.BAD_REQUEST,
    message: string = HttpErrorMessageEnum.BAD_REQUEST,
  ) {
    super(
      HttpErrorNameEnum.BAD_REQUEST,
      HttpResponseStatusCodeEnum.BAD_REQUEST,
      errorCode,
      message,
    );
  }
}

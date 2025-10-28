import {
  HttpErrorTypeEnum,
  HttpErrorMessageEnum,
  HttpErrorNameEnum,
  HttpResponseStatusCodeEnum,
} from 'src/core';

import { HttpError } from './http.error';

export class NotFoundError extends HttpError {
  constructor(
    errorCode: HttpErrorTypeEnum = HttpErrorTypeEnum.NOT_FOUND,
    message: string = HttpErrorMessageEnum.NOT_FOUND,
  ) {
    super(HttpErrorNameEnum.NOT_FOUND, HttpResponseStatusCodeEnum.NOT_FOUND, errorCode, message);
  }
}

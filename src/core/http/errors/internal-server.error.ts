import {
  HttpErrorTypeEnum,
  HttpErrorMessageEnum,
  HttpErrorNameEnum,
  HttpResponseStatusCodeEnum,
} from 'src/core';

import { HttpError } from './http.error';

export class InternalServerError extends HttpError {
  constructor(message: string = HttpErrorMessageEnum.INTERNAL_SERVER) {
    super(
      HttpErrorNameEnum.INTERNAL_SERVER,
      HttpResponseStatusCodeEnum.INTERNAL_SERVER_ERROR,
      HttpErrorTypeEnum.INTERNAL_SERVER,
      message,
    );
  }
}

import { HttpErrorMessageEnum, HttpErrorNameEnum, HttpStatusCodeEnum } from 'src/core';

import { HttpError } from './http.error';

export class InternalServerError extends HttpError {
  constructor(message: string = HttpErrorMessageEnum.INTERNAL_SERVER) {
    super(HttpErrorNameEnum.INTERNAL_SERVER, HttpStatusCodeEnum.INTERNAL_SERVER_ERROR, message);
  }
}

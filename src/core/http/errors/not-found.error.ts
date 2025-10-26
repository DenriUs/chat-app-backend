import { HttpErrorMessageEnum, HttpErrorNameEnum, HttpStatusCodeEnum } from 'src/core';

import { HttpError } from './http.error';

export class NotFoundError extends HttpError {
  constructor(message: string = HttpErrorMessageEnum.NOT_FOUND) {
    super(HttpErrorNameEnum.NOT_FOUND, HttpStatusCodeEnum.NOT_FOUND, message);
  }
}

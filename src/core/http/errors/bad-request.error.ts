import { HttpErrorMessageEnum, HttpErrorNameEnum, HttpStatusCodeEnum } from 'src/core';

import { HttpError } from './http.error';

export class BadRequestError extends HttpError {
  constructor(message: string = HttpErrorMessageEnum.BAD_REQUEST) {
    super(HttpErrorNameEnum.BAD_REQUEST, HttpStatusCodeEnum.BAD_REQUEST, message);
  }
}

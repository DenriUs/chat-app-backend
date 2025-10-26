import { HttpErrorMessageEnum, HttpErrorNameEnum, HttpStatusCodeEnum } from 'src/core';

import { HttpError } from './http.error';

export class UnathorizedError extends HttpError {
  constructor(message: string = HttpErrorMessageEnum.UNAUTHORIZED) {
    super(HttpErrorNameEnum.UNAUTHORIZED, HttpStatusCodeEnum.UNAUTHORIZED, message);
  }
}

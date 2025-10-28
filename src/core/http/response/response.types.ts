import { HttpErrorTypeEnum } from 'src/core';

export type ResponseBody<T = unknown> = {
  success: boolean;
  errorType?: HttpErrorTypeEnum;
  message?: string;
  data?: T;
};

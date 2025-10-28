import { Response } from 'express';
import { HttpResponseStatusCodeEnum } from '../http-status-code.enum';
import { ResponseBody } from './response.types';

const response = <T = unknown>(
  res: Response,
  statusCode: HttpResponseStatusCodeEnum,
  data?: T,
  message?: string,
) => {
  const responseBody: ResponseBody = {
    success: true,
    data,
    message,
  };
  return res.status(statusCode).json(responseBody);
};

export const ok = <T = unknown>(res: Response, data?: T, message?: string) =>
  response(res, HttpResponseStatusCodeEnum.OK, data, message);

export const created = <T = unknown>(res: Response, data?: T, message?: string) =>
  response(res, HttpResponseStatusCodeEnum.CREATED, data, message);

export const noContent = (res: Response) => response(res, HttpResponseStatusCodeEnum.NO_CONTENT);

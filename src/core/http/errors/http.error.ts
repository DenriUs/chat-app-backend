import { HttpErrorTypeEnum } from './enums/http-error-type.enum';

export class HttpError extends Error {
  name: string;
  statusCode: number;
  errorType: HttpErrorTypeEnum;

  constructor(name: string, statusCode: number, errorType: HttpErrorTypeEnum, message: string) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.errorType = errorType;
  }
}

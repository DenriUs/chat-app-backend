import { Request } from 'express';
import { Schema } from 'zod';

export type Params = Record<string, string>;

export type Body = Record<string, unknown>;

export type Query = Record<string, unknown>;

export type RequestTypedParams<T extends Params> = Request<T>;

export type RequestTypedBody<T extends Body> = Request<unknown, unknown, T>;

export type RequestTypedQuery<T extends Query> = Request<unknown, unknown, unknown, T>;

export type RequestTypedInput<P extends Params, B = Body, Q = Query> = Request<P, unknown, B, Q>;

export type RequestInputValidationSchemas = {
  params: Schema;
  body: Schema;
  query: Schema;
};

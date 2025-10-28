import { Response } from 'express';

import {
  created,
  ok,
  noContent,
  RequestTypedBody,
  RequestTypedParams,
  RequestTypedQuery,
  SearchQuerySchemaType,
  RequestTypedInput,
} from 'src/core';
import {
  IdChatParamsSchemaType,
  CreateChatBodySchemaType,
  UpdateChatBodySchemaType,
} from 'src/modules';

import { chatsService } from './chats.service';
export const chatsController = {
  async createOne(
    req: RequestTypedBody<CreateChatBodySchemaType>,
    res: Response,
  ): Promise<Response> {
    const { firstName, lastName } = req.body;
    const result = await chatsService.createOne({ firstName, lastName });
    return created(res, result);
  },

  async findOne(req: RequestTypedParams<IdChatParamsSchemaType>, res: Response): Promise<Response> {
    const { chatId } = req.params;
    const result = await chatsService.findOne({ _id: chatId });
    return ok(res, result);
  },

  async find(req: RequestTypedQuery<SearchQuerySchemaType>, res: Response): Promise<Response> {
    const { q: query } = req.query;
    const result = await chatsService.find({}, query);
    return ok(res, result);
  },

  async updateOne(
    req: RequestTypedInput<IdChatParamsSchemaType, UpdateChatBodySchemaType>,
    res: Response,
  ): Promise<Response> {
    const { chatId } = req.params;
    const { firstName, lastName } = req.body;
    const result = await chatsService.updateOne({ _id: chatId }, { firstName, lastName });
    return ok(res, result);
  },

  async deleteOne(
    req: RequestTypedParams<IdChatParamsSchemaType>,
    res: Response,
  ): Promise<Response> {
    const { chatId } = req.params;
    await chatsService.deleteOne({ _id: chatId });
    return noContent(res);
  },
};

import { Request, Response } from 'express';

import {
  created,
  ok,
  noContent,
  RequestTypedBody,
  RequestTypedParams,
  RequestTypedInput,
  sleep,
} from 'src/core';
import {
  IdChatParamsSchemaType,
  CreateMessageBodySchemaType,
  UpdateMessageBodySchemaType,
  IdMessageParamsSchemaType,
} from 'src/modules';

import { messagesService } from './messages.service';

export const messgesController = {
  async createOne(
    req: RequestTypedInput<IdChatParamsSchemaType, CreateMessageBodySchemaType>,
    res: Response,
  ): Promise<Response> {
    const { chatId } = req.params;
    const { text } = req.body;
    const sleepMilliseconds = 3000;

    const newUserMessagePromise = messagesService.createOne({ text, isAuthorUser: true }, chatId);
    const newAutoResponseMessagePromise = messagesService.createOne(
      { text: 'random quote' },
      chatId,
    );

    const sleepPromise = sleep(sleepMilliseconds);

    const [userMessage, autoResponseMessage] = await Promise.all([
      newUserMessagePromise,
      newAutoResponseMessagePromise,
      sleepPromise,
    ]);
    const result = { userMessage, autoResponseMessage };
    return created(res, result);
  },

  async find(req: RequestTypedInput<IdMessageParamsSchemaType>, res: Response): Promise<Response> {
    const { chatId } = req.params;
    const result = await messagesService.find({ chatId });
    return ok(res, result);
  },

  async updateOne(
    req: RequestTypedInput<IdMessageParamsSchemaType, UpdateMessageBodySchemaType>,
    res: Response,
  ): Promise<Response> {
    const { chatId, messageId } = req.params;
    const { text } = req.body;
    const result = await messagesService.updateOne({ _id: messageId, chatId }, { text });
    return ok(res, result);
  },

  async deleteOne(
    req: RequestTypedParams<IdMessageParamsSchemaType>,
    res: Response,
  ): Promise<Response> {
    const { chatId, messageId } = req.params;
    await messagesService.deleteOne({ _id: messageId, chatId });
    return noContent(res);
  },
};

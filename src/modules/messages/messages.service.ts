import { FilterQuery } from 'mongoose';

import { BadRequestError, InternalServerError, NotFoundError } from 'src/core';
import { chatsService } from 'src/modules';

import { Message, MessageModel } from './models';

export const messagesService = {
  async createOne(input: Partial<Message>, chatId: string): Promise<Message> {
    await chatsService.findOne({ _id: chatId }).catch(() => {
      throw new BadRequestError();
    });
    const document = await MessageModel.create({ ...input, chatId }).catch(() => {
      throw new InternalServerError();
    });
    return document.toObject();
  },

  async find(filter: FilterQuery<Message> = {}): Promise<Message[]> {
    return MessageModel.find(filter)
      .lean()
      .exec()
      .catch(() => {
        throw new InternalServerError();
      });
  },

  async updateOne(filter: FilterQuery<Message>, input: Partial<Message>): Promise<Message> {
    return MessageModel.findOneAndUpdate(filter, input, { new: true })
      .orFail()
      .lean()
      .exec()
      .catch(() => {
        throw new NotFoundError();
      });
  },

  async deleteOne(filter: FilterQuery<Message>): Promise<Message> {
    return MessageModel.findOneAndDelete(filter)
      .orFail()
      .lean()
      .exec()
      .catch(() => {
        throw new NotFoundError();
      });
  },
};

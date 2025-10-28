import { FilterQuery } from 'mongoose';

import { InternalServerError, NotFoundError } from 'src/core';

import { Chat, ChatModel } from './models';

export const chatsService = {
  async createOne(input: Partial<Chat>): Promise<Chat> {
    const document = await ChatModel.create(input).catch(() => {
      throw new InternalServerError();
    });
    return document.toObject();
  },

  async findOne(filter: FilterQuery<Chat>): Promise<Chat> {
    return ChatModel.findOne(filter)
      .orFail()
      .lean()
      .exec()
      .catch(() => {
        throw new NotFoundError();
      });
  },

  async find(filter: FilterQuery<Chat> = {}, query?: string): Promise<Chat[]> {
    if (query) {
      filter.$or = [
        { firstName: { $regex: `^${query}`, $options: 'i' } },
        { lastName: { $regex: `^${query}`, $options: 'i' } },
      ];
    }
    return ChatModel.find(filter)
      .lean()
      .exec()
      .catch(() => {
        throw new InternalServerError();
      });
  },

  async updateOne(filter: FilterQuery<Chat>, input: Partial<Chat>): Promise<Chat> {
    return ChatModel.findOneAndUpdate(filter, input, { new: true })
      .orFail()
      .lean()
      .exec()
      .catch(() => {
        throw new NotFoundError();
      });
  },

  async deleteOne(filter: FilterQuery<Chat>): Promise<Chat> {
    const document = await ChatModel.findOneAndDelete(filter)
      .orFail()
      .exec()
      .catch(() => {
        throw new NotFoundError();
      });
    return document.toObject();
  },
};

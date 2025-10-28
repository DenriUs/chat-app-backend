import mongoose, { Schema, InferSchemaType, DefaultTimestampProps } from 'mongoose';

const chatSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
    },
    latestMessage: {
      text: {
        type: String,
        required: false,
      },
      createdAt: {
        type: Date,
        required: false,
      },
    },
  },
  { timestamps: true },
);

chatSchema.index({ firstName: 'text', lastName: 'text' });

export type Chat = InferSchemaType<typeof chatSchema>;

export type ChatInput = Omit<Chat, keyof DefaultTimestampProps>;

export const ChatModel = mongoose.model<Chat>('Chat', chatSchema);

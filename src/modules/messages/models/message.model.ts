import mongoose, { Schema, InferSchemaType, DefaultTimestampProps } from 'mongoose';

const messageSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    isAuthorUser: {
      type: Boolean,
      required: true,
      default: false,
    },
    chatId: { type: Schema.Types.ObjectId, ref: 'Chat' },
  },
  { timestamps: true },
);

export type Message = InferSchemaType<typeof messageSchema>;

export type MessageInput = Omit<Message, keyof DefaultTimestampProps>;

export const MessageModel = mongoose.model<Message>('Message', messageSchema);

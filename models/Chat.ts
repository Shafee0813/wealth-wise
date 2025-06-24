import mongoose, { Schema, Document } from "mongoose";

interface IMessageEmbedded {
  role: string;
  reply: string;
  createdAt: Date;
}

export interface IChat extends Document {
  title: string;
  createdAt: Date;
  userId: string; // Clerk user ID
  messages: IMessageEmbedded[];
}

const MessageSchema = new Schema<IMessageEmbedded>(
  {
    role: { type: String, required: true },
    reply: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const ChatSchema = new Schema<IChat>(
  {
    title: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    userId: { type: String, required: true }, // Clerk ID
    messages: [MessageSchema],
  },
  { timestamps: false }
);

const ChatModel =
  mongoose.models.Chat || mongoose.model<IChat>("Chat", ChatSchema);

export default ChatModel;

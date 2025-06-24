import mongoose, { Schema, Document } from "mongoose";

export interface ITransaction extends Document {
  createdAt: Date;
  type: string;
  amount: number;
  currency: string;
  title: string;
  userId: string; // Clerk user ID
}

const TransactionSchema = new Schema<ITransaction>(
  {
    createdAt: { type: Date, default: Date.now },
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    title: { type: String, required: true },
    userId: { type: String, required: true }, // Clerk ID
  },
  { timestamps: false }
);

const TransactionModel =
  mongoose.models.Transaction ||
  mongoose.model<ITransaction>("Transaction", TransactionSchema);

export default TransactionModel;

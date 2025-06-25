import mongoose, { Schema, Document } from "mongoose";

// Allowed currency codes
const allowedCurrencies = ["USD", "INR", "EUR", "GBP", "JPY", "CNY", "AUD", "CAD"] as const;
export type Currency = (typeof allowedCurrencies)[number];

export interface IUser extends Document {
  id: string;         
  currency: Currency; 
}

const UserSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    currency: {
      type: String,
      required: true,
      enum: allowedCurrencies,
    },
  },
  { timestamps: false }
);

const UserModel = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default UserModel;

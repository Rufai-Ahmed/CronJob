import { Document, Schema, model } from "mongoose";

interface iUser {
  email: string;
  planStart: string;
  plan: string;
  planExpires: string;
  expired: boolean;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    email: {
      type: String,
      unique: true,
    },
    plan: {
      type: String,
      default: "free",
    },
    planStart: {
      type: String,
      default: "0/0/0",
    },
    planExpires: {
      type: String,
      default: "0/0/0",
    },
    expired: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("users", userModel);

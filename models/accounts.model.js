import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  accountName: { type: String, required: true },
  accountType: { type: String, required: true },
  currency: { type: String, required: true, default: "INR" },
  currentBalance: { type: Number, required: true, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  description: { type: String, default: "" },
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction",
      category: { type: String, enum: ["income", "expense"], required: true },
      amount: { type: Number, required: true },
    },
  ],
});

const Account = mongoose.model("Accounts", accountSchema, "accounts");
export default Account;

/**
 * @typedef {import('mongoose').Document} AccountDocument
 * @typedef {import('mongoose').Model<AccountDocument>} AccountModel
 */

import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  category: { type: String, enum: ["income", "expense"], required: true },
  accountType: { type: String, required: true, ref: "Accounts" },
  date: { type: Date, required: true },
  tags: [{ type: String }],
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Transaction = mongoose.model(
  "Transaction",
  transactionSchema,
  "transactions"
);
export default Transaction;
/**
 * @typedef {import('mongoose').Document} TransactionDocument
 * @typedef {import('mongoose').Model<TransactionDocument>} TransactionModel
 */

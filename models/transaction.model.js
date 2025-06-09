import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  category: { type: String, enum: ["income", "expense"], required: true },
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
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

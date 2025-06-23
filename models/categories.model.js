import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String, enum: ["income", "expense"], required: true },
  icon: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Category = mongoose.model("Categories", categorySchema, "categories");
export default Category;
/**
 * @typedef {import('mongoose').Document} CategoryDocument
 * @typedef {import('mongoose').Model<CategoryDocument>} CategoryModel
 */

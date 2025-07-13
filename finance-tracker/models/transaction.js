import mongoose, { Schema } from "mongoose";

const TransactionSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category:{
    type:String,
    enum:['Food','Bills','Transport','Entertainment','Shopping','Others'],
    required:true,
    default:'Others',
  },
});

export default mongoose.models?.Transaction || mongoose.model("Transaction", TransactionSchema);

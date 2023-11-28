import mongoose from "mongoose";

export interface AddressTxSchema extends mongoose.Document {
  a_id: string;
  blockindex: number;
  txid: string;
  amount: number;
}

const addressTxSchema = new mongoose.Schema<AddressTxSchema>(
  {
    a_id: { type: String, index: true },
    blockindex: { type: Number, default: 0, index: true },
    txid: { type: String, lowercase: true, index: true },
    // renamed to amount instead of balance for future changes
    amount: { type: Number, default: 0, index: true },
  },
  { id: false }
);

addressTxSchema.index({ a_id: 1, blockindex: -1 });

export default mongoose.model("AddressTx", addressTxSchema);

import mongoose from "mongoose";

export interface TxSchema extends mongoose.Document {
  txid: string;
  vin: any;
  vout: any;
  total: number;
  timestamp: number;
  blockhash: string;
  blockindex: number;
}

const txSchema = new mongoose.Schema<TxSchema>(
  {
    txid: { type: String, lowercase: true, unique: true, index: true },
    vin: { type: Array, default: [] },
    vout: { type: Array, default: [] },
    total: { type: Number, default: 0, index: true },
    timestamp: { type: Number, default: 0, index: true },
    blockhash: { type: String, index: true },
    blockindex: { type: Number, default: 0, index: true },
  },
  { id: false }
);

txSchema.index({ total: 1, blockindex: 1});

export default mongoose.model("Tx", txSchema);

import mongoose from "mongoose";

export interface StatsSchema extends mongoose.Document {
  coin: string;
  count: number;
  last: number;
  supply: number;
  connections: number;
  last_price: number;
}

const statsSchema = new mongoose.Schema<StatsSchema>({
  coin: { type: String },
  count: { type: Number, default: 1 },
  last: { type: Number, default: 1 },
  //difficulty: { type: Object, default: {} },
  //hashrate: { type: String, default: 'N/A' },
  supply: { type: Number, default: 0 },
  //last_txs: { type: Array, default: [] },
  connections: { type: Number, default: 0 },
  last_price: { type: Number, default: 0 },
});

export default mongoose.model("Stats", statsSchema);

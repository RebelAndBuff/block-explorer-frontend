import mongoose from "mongoose";

export interface MarketsSchema extends mongoose.Document {
  market: string;
  summary: object;
  chartdata: any;
  buys: any;
  sells: any;
  history: any;
}

var marketsSchema = new mongoose.Schema<MarketsSchema>({
  market: { type: String, index: true },
  summary: { type: Object, default: {} },
  chartdata: { type: Array, default: [] },
  buys: { type: Array, default: [] },
  sells: { type: Array, default: [] },
  history: { type: Array, default: [] },
});

export default mongoose.model("Markets", marketsSchema);

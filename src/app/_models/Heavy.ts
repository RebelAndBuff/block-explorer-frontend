import mongoose from "mongoose";

export interface HeavySchema extends mongoose.Document {
  coin: string;
  lvote: number;
  reward: number;
  supply: number;
  cap: number;
  estnext: number;
  phase: string;
  maxvote: number;
  nextin: string;
  votes: any;
}

const heavySchema = new mongoose.Schema<HeavySchema>({
  coin: { type: String },
  lvote: { type: Number, default: 0 },
  reward: { type: Number, default: 0 },
  supply: { type: Number, default: 0 },
  cap: { type: Number, default: 0 },
  estnext: { type: Number, default: 0 },
  phase: { type: String, default: "N/A" },
  maxvote: { type: Number, default: 0 },
  nextin: { type: String, default: "N/A" },
  votes: { type: Array, default: [] },
});

export default mongoose.model("Heavy", heavySchema);

/*
votes : [{ count: 0, reward: 0, vote: 0}]
*/

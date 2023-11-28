import mongoose from "mongoose";

export interface PeersSchema extends mongoose.Document {
  createdAt: Date;
  address: string;
  port: string;
  protocol: string;
  version: string;
  country: string;
  country_code: string;
}

const peersSchema = new mongoose.Schema<PeersSchema>({
  createdAt: { type: Date, expires: 86400, default: Date.now() },
  address: { type: String, default: "", index: true },
  port: { type: String, default: "" },
  protocol: { type: String, default: "" },
  version: { type: String, default: "" },
  country: { type: String, default: "" },
  country_code: { type: String, default: "" },
});

export default mongoose.model("Peers", peersSchema);

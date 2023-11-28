import mongoose from "mongoose";

export interface RichListSchema extends mongoose.Document {
  coin: string;
  received: any;
  balance: any;
}

const richListSchema = new mongoose.Schema<RichListSchema>({
  coin: { type: String },
  received: { type: Array, default: [] },
  balance: { type: Array, default: [] },
});

export default mongoose.model("RichList", richListSchema);

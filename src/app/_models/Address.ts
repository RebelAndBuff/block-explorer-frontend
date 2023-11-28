import mongoose from "mongoose";

export interface Address extends mongoose.Document {
  a_id: string;
  name: string;
  received: number;
  sent: number;
  balance: number;
}

const addressSchema = new mongoose.Schema<Address>(
  {
    a_id: { type: String, unique: true, index: true },
    name: { type: String, default: "", index: true },
    received: { type: Number, default: 0, index: true },
    sent: { type: Number, default: 0, index: true },
    balance: { type: Number, default: 0, index: true },
  },
  { id: false }
);

export default mongoose.model("Address", addressSchema);

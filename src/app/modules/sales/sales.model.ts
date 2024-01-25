import { Schema, model } from 'mongoose';
import { TSales } from './sales.interface';

const salesSchema = new Schema<TSales>({
  gift: {
    type: Schema.Types.ObjectId,
    ref: 'Gift',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  buyerName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Sales = model<TSales>('Sales', salesSchema);

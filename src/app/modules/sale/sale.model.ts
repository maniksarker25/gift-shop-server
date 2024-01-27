import { Schema, model } from 'mongoose';
import { TSale } from './sale.interface';

const SaleSchema = new Schema<TSale>(
  {
    giftId: {
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
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Sale = model<TSale>('Sale', SaleSchema);

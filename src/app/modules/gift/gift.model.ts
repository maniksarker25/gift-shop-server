import { Schema, model } from 'mongoose';
import { TGift } from './gift.interface';

const giftSchema = new Schema<TGift>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    occasion: {
      type: String,
      required: true,
    },
    recipient: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Gift = model<TGift>('Gift', giftSchema);

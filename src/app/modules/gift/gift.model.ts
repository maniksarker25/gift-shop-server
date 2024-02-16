import { Schema, model } from 'mongoose';
import { TGift } from './gift.interface';
import { Brands, Categories, Occasions, Themes } from './gift.constant';

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
      enum: Occasions,
      required: true,
    },
    recipient: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: Categories,
      required: true,
    },
    theme: {
      type: String,
      enum: Themes,
      required: true,
    },
    brand: {
      type: String,
      enum: Brands,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Gift = model<TGift>('Gift', giftSchema);

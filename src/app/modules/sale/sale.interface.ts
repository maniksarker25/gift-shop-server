import { Types } from 'mongoose';

export type TSale = {
  giftId: Types.ObjectId;
  seller: Types.ObjectId;
  quantity: number;
  buyerName: string;
  totalPrice: number;
  discountPercentage?: number;
  coupon?: string;
  date: Date;
};

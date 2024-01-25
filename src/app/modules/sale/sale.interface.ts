import { Types } from 'mongoose';

export type TSale = {
  giftId: Types.ObjectId;
  quantity: number;
  buyerName: string;
  date: string;
};

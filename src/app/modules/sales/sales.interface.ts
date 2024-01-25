import { Types } from 'mongoose';

export type TSales = {
  gift: Types.ObjectId;
  quantity: number;
  buyerName: string;
  date: string;
};

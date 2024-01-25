import httpStatus from 'http-status';
import AppError from '../../error/appError';
import { Gift } from '../gift/gift.model';
import { Sale } from './sale.model';
import { TSale } from './sale.interface';

const createSaleIntoDB = async (payload: TSale) => {
  const { giftId, quantity } = payload;
  const gift = await Gift.findById(giftId);
  if (!gift) {
    throw new AppError(httpStatus.BAD_REQUEST, 'gift not found');
  }
  if (gift?.quantity < quantity) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'Sale quantity cannot exceed the current available stock',
    );
  }
  const result = await Sale.create(payload);
  const newQuantity = gift.quantity - payload.quantity;
  await Gift.findByIdAndUpdate(giftId, { quantity: newQuantity });
  return result;
};

export const saleServices = {
  createSaleIntoDB,
};

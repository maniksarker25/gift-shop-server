import httpStatus from 'http-status';
import AppError from '../../error/appError';
import { Gift } from '../gift/gift.model';
import { Sale } from './sale.model';
import { TSale } from './sale.interface';
import { Coupon } from '../coupon/coupon.modal';

const createSaleIntoDB = async (payload: TSale, sellerId: string) => {
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
  let result;
  if (payload?.coupon) {
    const coupon = await Coupon.findOne({ coupon: payload.coupon });
    if (!coupon) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Coupon invalid');
    }
    if (new Date() > coupon?.expireDate) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Coupon is expired');
    }
    const discountPercentage = coupon.discountPercentage;
    const totalPrice = gift?.price * quantity;
    const discount = (totalPrice * discountPercentage) / 100;
    const mainTotalPrice = parseFloat((totalPrice - discount).toFixed(2));
    result = await Sale.create({
      ...payload,
      totalPrice: mainTotalPrice,
      discountPercentage,
      seller: sellerId,
    });
  } else {
    const totalPrice = gift?.price * quantity;
    result = await Sale.create({ ...payload, totalPrice, seller: sellerId });
  }
  const newQuantity = gift.quantity - payload.quantity;
  await Gift.findByIdAndUpdate(giftId, { quantity: newQuantity });
  return result;
};

const getSalesHistoryFromDB = async (query: Record<string, unknown>) => {
  const { filter } = query;
  // console.log(filter);

  let filterDate: Record<string, unknown> = {};

  if (filter) {
    const currentDate = new Date();

    switch (filter) {
      case 'daily':
        filterDate = {
          date: {
            $gte: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate(),
            ),
            $lt: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate() + 1,
            ),
          },
        };
        break;
      case 'weekly':
        filterDate = {
          date: {
            $gte: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate() - currentDate.getDay(),
            ),
            $lt: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate() + (6 - currentDate.getDay()) + 1,
            ),
          },
        };
        break;
      case 'monthly':
        filterDate = {
          date: {
            $gte: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              1,
            ),
            $lt: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth() + 1,
              1,
            ),
          },
        };
        break;
      case 'yearly':
        filterDate = {
          date: {
            $gte: new Date(currentDate.getFullYear(), 0, 1),
            $lt: new Date(currentDate.getFullYear() + 1, 0, 1),
          },
        };
        break;
      default:
        break;
    }
  }

  const result = await Sale.find(filterDate).populate('giftId');
  return result;
};

export const saleServices = {
  createSaleIntoDB,
  getSalesHistoryFromDB,
};

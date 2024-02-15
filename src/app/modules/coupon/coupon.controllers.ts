import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { couponServices } from './coupon.services';

const createCoupon = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await couponServices.createCouponIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Coupon created successfully',
    data: result,
  });
});

export const couponControllers = {
  createCoupon,
};

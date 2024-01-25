import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { giftServices } from './gift.services';

const createGift = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await giftServices.createGiftIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Gift created successfully',
    data: result,
  });
});

export const giftControllers = {
  createGift,
};

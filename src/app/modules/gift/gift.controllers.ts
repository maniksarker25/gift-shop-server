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

// get gifts
const getGifts = catchAsync(async (req, res) => {
  const result = await giftServices.getGiftsFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Gifts retrieved successfully',
    data: result,
  });
});
// update gift
const updateGift = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await giftServices.updateGiftFromDB(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Gift updated successfully',
    data: result,
  });
});

// delete gift
const deleteGift = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await giftServices.deleteGiftFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Gift deleted successfully',
    data: result,
  });
});
export const giftControllers = {
  createGift,
  getGifts,
  updateGift,
  deleteGift,
};

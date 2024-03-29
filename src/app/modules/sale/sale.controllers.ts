import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { saleServices } from './sale.services';

const createSale = catchAsync(async (req, res) => {
  const payload = req.body;
  const sellerId = req.user?._id;
  const result = await saleServices.createSaleIntoDB(payload, sellerId);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Sale created successfully',
    data: result,
  });
});
const getSaleHistory = catchAsync(async (req, res) => {
  // console.log(req.query);
  const result = await saleServices.getSalesHistoryFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Sale history retrieved successfully',
    data: result,
  });
});

export const saleControllers = {
  createSale,
  getSaleHistory,
};

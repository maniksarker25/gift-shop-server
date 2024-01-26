import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { saleServices } from './sale.services';

const createSale = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await saleServices.createSaleIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Sale created successfully',
    data: result,
  });
});

export const saleControllers = {
  createSale,
};
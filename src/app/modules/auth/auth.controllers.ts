import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { authServices } from './auth.services';

const registerUser = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await authServices.registerUserIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

// login user
const loginUser = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await authServices.userLoginIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User login successfully',
    data: result,
  });
});

export const authControllers = {
  registerUser,
  loginUser,
};

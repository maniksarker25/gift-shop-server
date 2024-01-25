import httpStatus from 'http-status';
import AppError from '../../error/appError';
import { TLoginUser, TUser } from './auth.interface';
import { User } from './auth.model';

import config from '../../config';
import { createToken } from './auth.utilis';

const registerUserIntoDB = (payload: TUser) => {
  const result = User.create(payload);
  return result;
};

// user login into db
const userLoginIntoDB = async (payload: TLoginUser) => {
  const { email, password } = payload;
  const user = await User.isUserExists(email);
  // if user is not found then throw error
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User does not exist');
  }
  // checking  password is correct or wrong ----
  if (!(await User.isPasswordMatched(password, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not match');
  }
  // Send Access token
  // create token and send to the client ------------
  const jwtPayload = {
    _id: user?._id,
    fullName: user?.fullName,
    email: user?.email,
  };
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );
  const result = await User.findOne({ email });
  return { user: result, accessToken };
};

export const authServices = {
  registerUserIntoDB,
  userLoginIntoDB,
};

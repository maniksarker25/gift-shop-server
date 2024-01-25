import { TLoginUser, TUser } from './auth.interface';
import { User } from './auth.model';

const registerUserIntoDB = (payload: TUser) => {
  const result = User.create(payload);
  return result;
};

// user login into db
const userLoginIntoDB = (payload: TLoginUser) => {};

export const authServices = {
  registerUserIntoDB,
};

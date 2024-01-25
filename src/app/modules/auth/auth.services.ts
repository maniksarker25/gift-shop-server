import { TUser } from './auth.interface';
import { User } from './auth.model';

const registerUserIntoDB = (payload: TUser) => {
  const result = User.create(payload);
  return result;
};

export const authServices = {
  registerUserIntoDB,
};

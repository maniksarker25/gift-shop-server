/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type TUser = {
  fullName: string;
  email: string;
  role: string;
  password: string;
};

export type TLoginUser = {
  email: string;
  password: string;
};

export interface UserModel extends Model<TUser> {
  isUserExists(email: string): Promise<TUser>;
  isPasswordMatched(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

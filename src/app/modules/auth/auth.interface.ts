/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from './auth.constant';

export type TUser = {
  fullName: string;
  email: string;
  role: 'seller' | 'manager';
  password: string;
};

export type TLoginUser = {
  email: string;
  password: string;
};

export type TUserRole = keyof typeof USER_ROLE;

export interface UserModel extends Model<TUser> {
  isUserExists(email: string): Promise<TUser>;
  isPasswordMatched(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

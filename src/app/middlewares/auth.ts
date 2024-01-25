/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../error/appError';
import httpStatus from 'http-status';
import config from '../config';
import { JwtPayload } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';
import { User } from '../modules/auth/auth.model';

const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req?.headers?.authorization;
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are nto authorized ');
    }
    // check if the token is valid-
    // checking if the given token is valid

    let decoded;

    try {
      decoded = jwt.verify(
        token,
        config.jwt_access_secret as string,
      ) as JwtPayload;
    } catch (err) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Token is expired');
    }
    const { email } = decoded;
    if (!(await User.isUserExists(email))) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }
  });
};

export default auth;

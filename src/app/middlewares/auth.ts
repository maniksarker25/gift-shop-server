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
import { TUserRole } from '../modules/auth/auth.interface';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req?.headers?.authorization;
    if (!token) {
      return res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: 'Unauthorized Access',
        errorMessage:
          'You do not have the necessary permissions to access this resource.',
        errorDetails: null,
        stack: null,
      });
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
      return res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: 'Unauthorized Access',
        errorMessage: 'Token is expired',
        errorDetails: null,
        stack: null,
      });
    }
    const { email, role } = decoded;
    if (!(await User.isUserExists(email))) {
      return res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: 'Unauthorized Access',
        errorMessage:
          'You do not have the necessary permissions to access this resource.',
        errorDetails: null,
        stack: null,
      });
    }
    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Your are not authorized');
    }
    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;

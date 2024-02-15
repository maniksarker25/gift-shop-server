import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../auth/auth.constant';
import validationRequest from '../../middlewares/validationRequest';
import { couponValidations } from './coupon.validation';
import { couponControllers } from './coupon.controllers';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.manager),
  validationRequest(couponValidations.createCouponValidationSchema),
  couponControllers.createCoupon,
);

export const couponRoutes = router;

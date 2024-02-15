import { z } from 'zod';

const createCouponValidationSchema = z.object({
  event: z.string({
    required_error: 'Event is required',
    invalid_type_error: 'Event must be a string',
  }),
  coupon: z.string({
    required_error: 'Coupon is required',
    invalid_type_error: 'Coupon must be a string',
  }),
  discountPercentage: z.number({
    required_error: 'DiscountPercentage is required',
    invalid_type_error: 'DiscountPercentage must be a number',
  }),
  expireDate: z.string({ required_error: 'ExpireDate is required' }),
});

export const couponValidations = {
  createCouponValidationSchema,
};

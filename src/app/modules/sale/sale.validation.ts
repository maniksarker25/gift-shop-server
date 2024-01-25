import { z } from 'zod';

const createSaleValidationSchema = z.object({
  giftId: z.string({
    invalid_type_error: 'GiftId must be string',
    required_error: 'GiftId is required',
  }),
  quantity: z.number({
    invalid_type_error: 'Quantity must be a number',
    required_error: 'Quantity is required',
  }),
  buyerName: z.string({
    invalid_type_error: 'Buyer must be a string',
    required_error: 'Buyer is required',
  }),
  date: z.string({
    invalid_type_error: 'Date must be a string',
    required_error: 'Date is required',
  }),
});

export const SaleValidation = {
  createSaleValidationSchema,
};

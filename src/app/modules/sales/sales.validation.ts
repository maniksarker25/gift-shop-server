import { z } from 'zod';

const createSalesValidationSchema = z.object({
  gift: z.string({
    invalid_type_error: 'Gift must be string',
    required_error: 'Gift is required',
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

export const salesValidation = {
  createSalesValidationSchema,
};

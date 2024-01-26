import { z } from 'zod';
import { Brands, Categories, Occasions, Themes } from './gift.constant';

const createGiftValidationSchema = z.object({
  name: z.string({
    invalid_type_error: 'Name must be string',
    required_error: 'Name is required',
  }),
  price: z.number({
    invalid_type_error: 'Price must be a number',
    required_error: 'Price is required',
  }),
  quantity: z.number({
    invalid_type_error: 'Quantity must be a number',
    required_error: 'Quantity is required',
  }),
  occasion: z.enum([...Occasions] as [string, ...string[]]),
  recipient: z.string({
    invalid_type_error: 'Recipient must be a string',
    required_error: 'Recipient is required',
  }),
  category: z.enum([...Categories] as [string, ...string[]]),
  theme: z.enum([...Themes] as [string, ...string[]]),
  brand: z.enum([...Brands] as [string, ...string[]]),
  color: z.string({
    invalid_type_error: 'Color must be a string',
    required_error: 'Color is required',
  }),
});

// validation schema for update gift
const updateGiftValidationSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'Name must be string',
    })
    .optional(),
  price: z
    .number({
      invalid_type_error: 'Price must be a number',
    })
    .optional(),
  quantity: z
    .number({
      invalid_type_error: 'Quantity must be a number',
    })
    .optional(),
  occasion: z
    .string({
      invalid_type_error: 'Occasion must be a string',
    })
    .optional(),
  recipient: z
    .string({
      invalid_type_error: 'Recipient must be a string',
    })
    .optional(),
  category: z
    .string({
      invalid_type_error: 'Category must be string',
    })
    .optional(),
  theme: z
    .string({
      invalid_type_error: 'Theme must be a string',
    })
    .optional(),
  brand: z
    .string({
      invalid_type_error: 'Brand must be a string',
    })
    .optional(),
  color: z
    .string({
      invalid_type_error: 'Color must be a string',
    })
    .optional(),
});

export const giftValidation = {
  createGiftValidationSchema,
  updateGiftValidationSchema,
};

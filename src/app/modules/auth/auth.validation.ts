import { z } from 'zod';

const userRegisterValidationSchema = z.object({
  fullName: z.string({
    invalid_type_error: 'Full name must be string',
    required_error: 'Full name is required',
  }),
  email: z.string({
    invalid_type_error: 'Email must be string',
    required_error: 'Email is required',
  }),
  password: z.string({
    required_error: 'Password is required',
  }),
});

//
const userLoginValidationSchema = z.object({
  email: z.string({
    invalid_type_error: 'email must be string',
    required_error: 'Email is required',
  }),
  password: z.string({
    required_error: 'Password is required',
  }),
});

export const authValidation = {
  userRegisterValidationSchema,
  userLoginValidationSchema,
};

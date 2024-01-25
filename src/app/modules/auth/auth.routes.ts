import express from 'express';
import validationRequest from '../../middlewares/validationRequest';
import { authValidation } from './auth.validation';
import { authControllers } from './auth.controllers';

const router = express.Router();

router.post(
  '/',
  validationRequest(authValidation.userRegisterValidationSchema),
  authControllers.registerUser,
);

export const authRoutes = router;

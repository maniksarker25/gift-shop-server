import express from 'express';
import validationRequest from '../../middlewares/validationRequest';
import { authValidation } from './auth.validation';
import { authControllers } from './auth.controllers';

const router = express.Router();

router.post(
  '/register',
  validationRequest(authValidation.userRegisterValidationSchema),
  authControllers.registerUser,
);
router.post(
  '/login',
  validationRequest(authValidation.userLoginValidationSchema),
  authControllers.loginUser,
);

export const authRoutes = router;

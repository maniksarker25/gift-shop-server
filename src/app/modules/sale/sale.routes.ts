import express from 'express';
import auth from '../../middlewares/auth';
import validationRequest from '../../middlewares/validationRequest';
import { SaleValidation } from './sale.validation';
import { saleControllers } from './sale.controllers';
import { USER_ROLE } from '../auth/auth.constant';

const router = express.Router();
router.post(
  '/',
  auth(USER_ROLE.seller),
  validationRequest(SaleValidation.createSaleValidationSchema),
  saleControllers.createSale,
);
router.get(
  '/',
  auth(USER_ROLE.manager, USER_ROLE.seller),
  saleControllers.getSaleHistory,
);

export const saleRoutes = router;

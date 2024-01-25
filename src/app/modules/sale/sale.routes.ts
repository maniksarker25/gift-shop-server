import express from 'express';
import auth from '../../middlewares/auth';
import validationRequest from '../../middlewares/validationRequest';
import { SaleValidation } from './sale.validation';
import { saleControllers } from './sale.controllers';

const router = express.Router();
router.post(
  '/',
  auth(),
  validationRequest(SaleValidation.createSaleValidationSchema),
  saleControllers.createSale,
);

export const saleRoutes = router;

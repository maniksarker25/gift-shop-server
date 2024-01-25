import express from 'express';
import auth from '../../middlewares/auth';
import { giftControllers } from './gift.controllers';
import validationRequest from '../../middlewares/validationRequest';
import { giftValidation } from './gift.validation';

const router = express.Router();

router.post(
  '/',
  auth(),
  validationRequest(giftValidation.createGiftValidationSchema),
  giftControllers.createGift,
);
router.get('/', auth(), giftControllers.getGifts);

export const giftRoutes = router;
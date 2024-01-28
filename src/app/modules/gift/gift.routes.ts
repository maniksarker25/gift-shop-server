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
router.put(
  '/:id',
  auth(),
  validationRequest(giftValidation.updateGiftValidationSchema),
  giftControllers.updateGift,
);
router.delete('/:id', auth(), giftControllers.deleteSingleGift);
router.delete('/', auth(), giftControllers.deleteMultipleGift);

export const giftRoutes = router;

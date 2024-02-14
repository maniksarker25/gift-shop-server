import express from 'express';
import auth from '../../middlewares/auth';
import { giftControllers } from './gift.controllers';
import validationRequest from '../../middlewares/validationRequest';
import { giftValidation } from './gift.validation';
import { USER_ROLE } from '../auth/auth.constant';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.manager),
  validationRequest(giftValidation.createGiftValidationSchema),
  giftControllers.createGift,
);
router.post(
  '/delete-gifts',
  auth(USER_ROLE.manager),
  giftControllers.deleteMultipleGift,
);
router.get(
  '/',
  auth(USER_ROLE.manager, USER_ROLE.seller),
  giftControllers.getGifts,
);
router.put(
  '/:id',
  auth(USER_ROLE.manager),
  validationRequest(giftValidation.updateGiftValidationSchema),
  giftControllers.updateGift,
);
router.delete(
  '/:id',
  auth(USER_ROLE.manager),
  giftControllers.deleteSingleGift,
);

export const giftRoutes = router;

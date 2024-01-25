import express from 'express';
import auth from '../../middlewares/auth';
import { giftControllers } from './gift.controllers';

const router = express.Router();

router.post('/', auth, giftControllers.createGift);

export const giftRoutes = router;

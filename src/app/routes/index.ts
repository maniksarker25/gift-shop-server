import express from 'express';
import { authRoutes } from '../modules/auth/auth.routes';
import { giftRoutes } from '../modules/gift/gift.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    router: authRoutes,
  },
  {
    path: '/gift',
    router: giftRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;

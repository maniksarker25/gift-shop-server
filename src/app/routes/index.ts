import express from 'express';
import { authRoutes } from '../modules/auth/auth.routes';
import { giftRoutes } from '../modules/gift/gift.routes';
import { saleRoutes } from '../modules/sale/sale.routes';

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
  {
    path: '/sale',
    router: saleRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;

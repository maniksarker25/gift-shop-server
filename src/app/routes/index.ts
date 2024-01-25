import express from 'express';
import { authRoutes } from '../modules/auth/auth.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    router: authRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;

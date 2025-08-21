import { Router } from 'express';
import {
  createAuth, login
} from './auth.controller.ts';

const router = Router();

router.get('/', createAuth);
router.get('/oauth2callback', login);

export default router;

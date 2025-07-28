import { Router } from 'express';
import {
  createAuth, login
} from './youtubeEditor.controller.ts';

const router = Router();

router.get('/', createAuth);
router.get('/oauth2callback', login);

export default router;

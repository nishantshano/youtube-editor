import { Router } from 'express';
import {
  createAuth
} from './youtubeEditor.controller.ts';

const router = Router();

// GET /example - Get all examples
router.get('/', createAuth);

export default router;

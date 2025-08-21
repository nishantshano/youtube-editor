import { Router } from 'express';
import {
  getYoutubeVideos
} from './youtubeManager.controller.ts';

const router = Router();

router.get('/subscription-list', getYoutubeVideos);

export default router;

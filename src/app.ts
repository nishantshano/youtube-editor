import express from 'express';
import { appRouter } from './app.urls.ts';

const app = express();
app.use('/', appRouter);

export default app;

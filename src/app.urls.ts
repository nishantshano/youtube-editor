import { Router } from 'express';
import exampleRoutes from './apps/example/example.url.ts';
import authRoutes from './apps/YoutubeEditor/youtubeEditor.url.ts';

const appRouter = Router();

// Example route
appRouter.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

// Register app routes
appRouter.use('/example', exampleRoutes);
appRouter.use('/auth', authRoutes);

export { appRouter };

import { Router } from 'express';
import exampleRoutes from './apps/example/example.url.ts';

const appRouter = Router();

// Example route
appRouter.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

// Register app routes
appRouter.use('/example', exampleRoutes);

export { appRouter };

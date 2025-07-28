import express from 'express';
import cookieParser from 'cookie-parser';
import * as path from 'path';

import { appRouter } from './app.urls.ts';
import { getDirName } from './utils/files.utils.ts';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(getDirName(import.meta.url), 'views'));


app.use(cookieParser());
app.use('/', appRouter);

export default app;

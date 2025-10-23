import 'express-async-errors';

import { authRoutes, fileRoutes, folderRoutes } from '@dataroom/api-routes';
import {
  cookieSession,
  cookieSessionSave,
  errorHandler,
  getEnv,
  NotFound,
} from '@dataroom/api-utils';
import { json, urlencoded } from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { createServer } from 'http';
import mongoose from 'mongoose';
import passport from 'passport';

const app = express();
const http = createServer(app);

if (!getEnv('PROD')) {
  app.use((req, res, next) => {
    setTimeout(next, 400);
  });
}

app.use(json());
app.use(helmet());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
app.set('trust proxy', true);
app.use(
  cors({
    credentials: true,
    origin: getEnv('CORS').split(','),
  }),
);
app.use(cookieSession());
app.use(cookieSessionSave);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth/', authRoutes);
app.use('/api/folder/', folderRoutes);
app.use('/api/file/', fileRoutes);

app.all('*', (req) => {
  throw new NotFound(req.path);
});
app.use(errorHandler);

const migrate = async () => {
  console.info('Database migrations done');
};

const setupMongo = async () => {
  try {
    mongoose.set('strictQuery', false);

    await mongoose.connect(getEnv('MONGO_URL'));

    console.info('Database ready');

    await migrate();
  } catch {
    throw new Error('Could not connected to database');
  }
};

const start = async () => {
  setupMongo();
};

const host = getEnv('HOST') ?? 'localhost';
const port = getEnv('PORT') ? getEnv('PORT') : 3000;

console.log('host', host);

console.log('port', port);

start();

http.listen(port, host, async () => {
  console.info(`Server ready http://${host}:${port}`);
});

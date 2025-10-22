import './LoginLocal.strategy';

import { validateRequest } from '@dataroom/api-utils';
import { CurrentUser } from '@dataroom/shared-types';
import express from 'express';
import passport from 'passport';

import schema from './LoginLocal.schema';

const router = express.Router();

router.post<never, CurrentUser>(
  '/login-local',
  validateRequest(schema),
  passport.authenticate('login-local'),
  (req, res) => {
    res.send({ user: req.user });
  },
);

export { router as loginLocalRouter };

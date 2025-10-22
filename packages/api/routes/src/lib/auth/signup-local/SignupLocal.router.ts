import './SignupLocal.strategy';

import { UserModel } from '@dataroom/api-models';
import { IntervalServer, validateRequest } from '@dataroom/api-utils';
import { CurrentUser, Signup } from '@dataroom/shared-types';
import express from 'express';
import passport from 'passport';

import schema from './SignupLocal.schema';

const router = express.Router();

router.post<never, CurrentUser, Signup>(
  '/signup-local',
  validateRequest(schema),
  passport.authenticate('signup-local'),
  async (req, res) => {
    const userId = req.user.id;

    const user = await UserModel.findById(userId);

    if (!user) {
      throw new IntervalServer();
    }

    res.send({ user: req.user });
  },
);

export { router as signupLocalRouter };

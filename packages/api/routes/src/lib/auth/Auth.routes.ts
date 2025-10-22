import { authUserToJSON, UserModel } from '@dataroom/api-models';
import express from 'express';
import passport from 'passport';

import { authUserRouter } from './auth-user/AuthUser.router';
import { loginLocalRouter } from './login-local/LoginLocal.router';
import { logoutRouter } from './logout/Logout.router';
import { signupLocalRouter } from './signup-local/SignupLocal.router';

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user: Express.User, done) =>
  UserModel.findById(user.id).then((user) =>
    done(null, (user && authUserToJSON(user)) || null),
  ),
);

const router = express.Router();

router.use(authUserRouter);
router.use(loginLocalRouter);
router.use(signupLocalRouter);
router.use(logoutRouter);

export { router as authRoutes };

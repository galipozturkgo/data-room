import { authUserToJSON, UserModel } from '@dataroom/api-models';
import { BadRequest, IntervalServer, Password } from '@dataroom/api-utils';
import { ErrorCode, Login } from '@dataroom/shared-types';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

passport.use(
  'login-local',
  new LocalStrategy(
    {
      usernameField: 'email',
      passReqToCallback: true,
    },
    async (req, _, ___, done) => {
      try {
        const { email, password } = req.body as Login;

        const user = await UserModel.findOne({ email });

        if (!user) {
          return done(
            new BadRequest(ErrorCode.AccountNotFoundError),
            undefined,
          );
        }

        if (!user.password) {
          return done(
            new BadRequest(ErrorCode.InvalidCredentialsError),
            undefined,
          );
        }

        const passwordMatched = await Password.compare(user.password, password);

        if (!passwordMatched) {
          return done(
            new BadRequest(ErrorCode.InvalidCredentialsError),
            undefined,
          );
        }

        await user.updateOne({ lastLoginAt: new Date() });

        return done(null, authUserToJSON(user));
      } catch {
        return done(new IntervalServer(), undefined);
      }
    },
  ),
);

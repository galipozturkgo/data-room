import { authUserToJSON, UserModel } from '@dataroom/api-models';
import { BadRequest, IntervalServer } from '@dataroom/api-utils';
import { ErrorCode, Signup } from '@dataroom/shared-types';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

passport.use(
  'signup-local',
  new LocalStrategy(
    {
      usernameField: 'email',
      passReqToCallback: true,
    },
    async (req, _, __, done) => {
      try {
        const { email, password, firstName, lastName } = req.body as Signup;

        const user = await UserModel.findOne({ email });

        if (!user) {
          const user = await UserModel.addEmailUser({
            email,
            password,
            firstName,
            lastName,
          }).save();

          return done(null, authUserToJSON(user));
        } else {
          return done(
            new BadRequest(ErrorCode.AccountAlreadyExistsError),
            undefined,
          );
        }
      } catch {
        return done(new IntervalServer(), undefined);
      }
    },
  ),
);

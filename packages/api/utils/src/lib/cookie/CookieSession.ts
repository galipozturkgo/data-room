import session from 'cookie-session';

import { getEnv } from '../envs/Envs';

export const cookieSession = (
  options?: CookieSessionInterfaces.CookieSessionOptions,
) =>
  session({
    httpOnly: true,
    keys: [getEnv('COOKIE_SECRET_KEY')],
    expires: new Date(2147483647 * 1000),
    ...options,
  });

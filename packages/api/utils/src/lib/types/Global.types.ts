import { AuthUser } from '@dataroom/shared-types';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface User extends AuthUser {
      id: string;
    }

    interface Request {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: override optional `user` from Express to required
      user: User;
    }
  }
}

export {};

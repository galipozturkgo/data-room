import { NextFunction, Request } from 'express';

import { NotAuthorized } from '../error-handler/error-types/NotAuthorized';

export const requireAuth = (req: unknown, res: unknown, next: NextFunction) => {
  if (!(req as Request)?.user) {
    throw new NotAuthorized((req as Request).path);
  }

  next();
};

import { NextFunction, Request, Response } from 'express';

import { NotAuthorized } from '../error-handler/error-types/NotAuthorized';

export const requireAdmin = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!(req as Request).user) {
    throw new NotAuthorized();
  }

  next();
};

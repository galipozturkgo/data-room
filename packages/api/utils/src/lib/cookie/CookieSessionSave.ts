import { NextFunction, Request, Response } from 'express';

export const cookieSessionSave = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req?.session) {
    if (!req.session.regenerate) {
      req.session.regenerate = (cb: () => void) => cb();
    }

    if (!req.session.save) {
      req.session.save = (cb: () => void) => cb();
    }
  }

  next();
};

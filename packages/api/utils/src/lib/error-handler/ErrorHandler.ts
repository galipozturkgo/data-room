import { ErrorCode, ErrorMessage } from '@dataroom/shared-types';
import { NextFunction, Request, Response } from 'express';

import { ErrorBase } from './error-base/ErrorBase';

interface ErrorType {
  error?: ErrorMessage;
  errors?: ErrorMessage[];
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const response: ErrorType = {};

  console.error(`Error: ${req.url}\n`, err);

  if (err instanceof ErrorBase) {
    const error = err.serialize();

    if (Array.isArray(error)) {
      response.errors = error;
    } else {
      response.error = error;
    }

    res.status(err.statusCode).send(response);
  } else {
    response.error = {
      code: ErrorCode.IntervalServerError,
    };

    res.status(500).send(response);
  }

  next();
};

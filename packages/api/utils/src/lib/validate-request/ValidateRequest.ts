import { NextFunction, Request } from 'express';
import * as Yup from 'yup';

import { IntervalServer } from '../error-handler/error-types/IntervalServer';
import { RequestValidation } from '../error-handler/error-types/RequestValidation';

interface ValidateRequestOptions {
  passUser?: boolean;
}

export const validateRequest =
  (schema: Yup.AnySchema, options?: ValidateRequestOptions) =>
  async (req: unknown, res: unknown, next: NextFunction) => {
    try {
      const data = (req as Request).body;

      if (options?.passUser) {
        data.user = (req as Request).user?.id;
      }

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      if (Yup.ValidationError.isError(err)) {
        throw new RequestValidation(err);
      } else {
        throw new IntervalServer();
      }
    }

    next();
  };

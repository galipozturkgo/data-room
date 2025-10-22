import { ErrorCode, ErrorMessage } from '@dataroom/shared-types';
import { ValidationError } from 'yup';

import { ErrorBase } from '../error-base/ErrorBase';

export class RequestValidation extends ErrorBase {
  code = ErrorCode.ValidationError;
  statusCode = 400;

  constructor(public err: ValidationError) {
    super('Request Validation');
    Object.setPrototypeOf(this, RequestValidation.prototype);
  }

  serialize(): ErrorMessage[] {
    const errors: ErrorMessage[] = [];

    this.err.inner?.forEach((error) => {
      const found = errors.find(
        (current) =>
          (current.payload as { field: string }).field === error.path,
      );

      if (error.params) {
        delete error.params['path'];
        delete error.params['label'];
        delete error.params['regex'];
      }

      if (!found) {
        errors.push({
          code: this.code,
          payload: {
            field: error.path,
            type: error.type,
            message: error.message,
            params: error.params,
          },
        });
      }
    });

    return errors;
  }
}

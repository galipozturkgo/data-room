import { ErrorCode, ErrorMessage } from '@dataroom/shared-types';

import { ErrorBase } from '../error-base/ErrorBase';

export class NotFound extends ErrorBase {
  code = ErrorCode.NotFoundError;
  statusCode = 404;

  constructor(message?: string) {
    super(`Not Found ${message}`);
    Object.setPrototypeOf(this, NotFound.prototype);
  }

  serialize(): ErrorMessage {
    return {
      code: this.code,
    };
  }
}

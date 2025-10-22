import { ErrorCode, ErrorMessage } from '@dataroom/shared-types';

import { ErrorBase } from '../error-base/ErrorBase';

export class NotAuthorized extends ErrorBase {
  code = ErrorCode.NotAuthorizedError;
  statusCode = 401;

  constructor(message?: string) {
    super(`Not Authorized  ${message}`);
    Object.setPrototypeOf(this, NotAuthorized.prototype);
  }

  serialize(): ErrorMessage {
    return {
      code: this.code,
    };
  }
}

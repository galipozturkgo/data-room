import { ErrorCode, ErrorMessage } from '@dataroom/shared-types';

import { ErrorBase } from '../error-base/ErrorBase';

export class Forbidden extends ErrorBase {
  code = ErrorCode.ForbiddenError;
  statusCode = 403;

  constructor() {
    super('Forbidden');
    Object.setPrototypeOf(this, Forbidden.prototype);
  }

  serialize(): ErrorMessage {
    return {
      code: this.code,
    };
  }
}

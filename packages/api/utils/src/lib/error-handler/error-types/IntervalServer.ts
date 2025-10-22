import { ErrorCode, ErrorMessage } from '@dataroom/shared-types';

import { ErrorBase } from '../error-base/ErrorBase';

export class IntervalServer extends ErrorBase {
  code = ErrorCode.IntervalServerError;
  statusCode = 500;
  override payload: unknown = undefined;

  constructor(payload?: unknown) {
    super('Interval Server');
    Object.setPrototypeOf(this, IntervalServer.prototype);

    if (payload) {
      this.payload = payload;
    }
  }

  serialize(): ErrorMessage {
    return {
      code: this.code,
      payload: this.payload,
    };
  }
}

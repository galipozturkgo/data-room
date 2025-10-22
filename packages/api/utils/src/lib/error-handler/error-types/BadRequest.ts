import { ErrorCode, ErrorMessage } from '@dataroom/shared-types';

import { ErrorBase } from '../error-base/ErrorBase';

export class BadRequest extends ErrorBase {
  code = ErrorCode.BadRequestError;
  statusCode = 400;
  override payload: unknown = undefined;

  constructor(code?: ErrorCode, payload?: unknown) {
    super(`Bad Request ${code || ''}`);
    Object.setPrototypeOf(this, BadRequest.prototype);

    if (code) {
      this.code = code;
    }

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

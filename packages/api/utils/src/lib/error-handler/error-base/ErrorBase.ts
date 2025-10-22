import { ErrorCode, ErrorMessage } from '@dataroom/shared-types';

export abstract class ErrorBase extends Error {
  abstract code: ErrorCode;
  abstract statusCode: number;
  payload: unknown = undefined;

  constructor(error: string) {
    super(error);
    Object.setPrototypeOf(this, ErrorBase.prototype);
  }

  abstract serialize(): ErrorMessage | ErrorMessage[];
}

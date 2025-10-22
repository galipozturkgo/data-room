import { ErrorCode } from './ErrorCode';

export type ErrorMessage = {
  code: ErrorCode;
  payload?: unknown;
};

export type FieldErrorMessage = {
  code: ErrorCode;
  payload: {
    field: string;
    type: string;
    params: {
      [key: string]: unknown;
    };
    message?: string;
  };
};

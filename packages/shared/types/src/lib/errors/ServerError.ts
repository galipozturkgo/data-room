import { ErrorMessage, FieldErrorMessage } from './ErrorMessages';

export type ServerError = {
  data: {
    error?: ErrorMessage;
    errors?: FieldErrorMessage[];
  };
  status: number;
};

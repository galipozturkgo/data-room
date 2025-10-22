import { ServerError } from '@dataroom/shared-types';

export const isServerError = (error: unknown): error is ServerError => {
  return typeof error === 'object' && error !== null && 'data' in error;
};

import { ErrorCode } from '@dataroom/shared-types';
import { isServerError } from '@dataroom/shared-utils';
import {
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
} from '@reduxjs/toolkit';

import { appSlice } from '../slices/app/App.slice';

export const queryErrorMiddleware: Middleware =
  ({ dispatch }: MiddlewareAPI) =>
  (next) =>
  (action) => {
    if (isRejectedWithValue(action)) {
      const { payload, meta } = action;
      const { changeNetworkError } = appSlice.actions;

      if (isServerError(payload)) {
        if (payload.data.error?.code === ErrorCode.IntervalServerError) {
          dispatch(changeNetworkError('INTERVAL_SERVER_ERROR'));
        }
      } else {
        if (
          (meta?.arg as { endpointName: string })?.endpointName === 'authUser'
        ) {
          dispatch(changeNetworkError('ACCESS_ERROR'));
        } else {
          dispatch(changeNetworkError('REQUEST_ERROR'));
        }
      }
    }

    return next(action);
  };

import { baseApi } from '@dataroom/ui-queries';
import { configureStore } from '@reduxjs/toolkit';

import { queryErrorMiddleware } from '../middleware/QueryError';
import { appRuducer } from '../slices';

export const appStore = configureStore({
  reducer: {
    app: appRuducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(queryErrorMiddleware),
});

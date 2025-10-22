import { Action, ThunkAction } from '@reduxjs/toolkit';

import { adminStore, appStore } from './Store';

declare global {
  type AdminState = ReturnType<typeof adminStore.getState>;
  type AdminDispatch = typeof adminStore.dispatch;

  type AppState = ReturnType<typeof appStore.getState>;
  type AppDispatch = typeof appStore.dispatch;
}

export type States = AppState & AdminState;
export type Dispatches = AdminDispatch & AppDispatch;

export type AdminThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AdminState,
  unknown,
  Action<string>
>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

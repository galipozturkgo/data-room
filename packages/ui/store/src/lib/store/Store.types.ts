import { Action, ThunkAction } from '@reduxjs/toolkit';

import { appStore } from './Store';

declare global {
  type AppState = ReturnType<typeof appStore.getState>;
  type AppDispatch = typeof appStore.dispatch;
}

export type States = AppState;
export type Dispatches = AppDispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

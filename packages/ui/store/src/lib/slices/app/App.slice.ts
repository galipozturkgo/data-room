import {
  bindActionCreators,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { useMemo } from 'react';

import { useStateDispatch } from '../../store/useStateDispatch';
import { AppState, NetworkErrorType, NetworkStatus } from './App.slice.types';

const initialState: AppState = {
  networkStatus: 'online',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeNetworkStatus: (state, { payload }: PayloadAction<NetworkStatus>) => {
      state.networkStatus = payload;
    },
    changeNetworkError: (
      state,
      { payload }: PayloadAction<NetworkErrorType | undefined>,
    ) => {
      state.networkError = payload;
    },
    changeSocketSyncing: (state, { payload }: PayloadAction<boolean>) => {
      state.socketSyncing = payload;
    },
  },
});

export const appRuducer = appSlice.reducer;

export const useAppActions = () => {
  const { dispatch } = useStateDispatch();

  return useMemo(
    () => bindActionCreators(appSlice.actions, dispatch),
    [dispatch],
  );
};

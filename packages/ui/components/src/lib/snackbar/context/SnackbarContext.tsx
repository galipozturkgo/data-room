'use client';

import { createContext, useContext } from 'react';

import { SnackMessage } from '../components/snackbar/Snackbar.types';

interface SnackbarContextProps {
  message?: SnackMessage;
  addMessage: (item: SnackMessage) => void;
  deleteMessage: () => void;
}

export const SnackbarContext = createContext<SnackbarContextProps>({
  addMessage: () => null,
  deleteMessage: () => null,
});

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};

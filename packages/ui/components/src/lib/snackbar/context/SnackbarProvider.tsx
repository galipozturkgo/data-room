'use client';

import { useState } from 'react';

import { Snackbar } from '../components/snackbar/Snackbar';
import { SnackMessage } from '../components/snackbar/Snackbar.types';
import { SnackbarContext } from './SnackbarContext';

interface SnackbarProviderProps {
  children: React.ReactNode;
}

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}) => {
  const [message, setMessage] = useState<SnackMessage>();

  const addMessage = (message: SnackMessage) => {
    const { dismissible, autoDismiss, dismissDelay } = message;
    setMessage({
      dismissDelay: dismissDelay || 4000,
      dismissible: dismissible === undefined ? true : dismissible,
      autoDismiss: autoDismiss === undefined ? true : autoDismiss,
      ...message,
    });
  };

  const deleteMessage = () => setMessage(undefined);

  return (
    <SnackbarContext.Provider value={{ message, addMessage, deleteMessage }}>
      {children}
      <Snackbar />
    </SnackbarContext.Provider>
  );
};

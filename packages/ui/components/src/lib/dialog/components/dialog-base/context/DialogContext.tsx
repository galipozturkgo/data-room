'use client';

import { createContext, useContext } from 'react';

interface DialogContextProps {
  zIndex: number;
  onClose?: () => void;
}

export const DialogContext = createContext<DialogContextProps>(
  {} as DialogContextProps,
);

export const useDialog = () => {
  return useContext(DialogContext);
};

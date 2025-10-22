'use client';

import { DialogContext } from './DialogContext';

interface DialogProviderProps {
  zIndex: number;
  onClose?: () => void;
  children: React.ReactNode;
}

export const DialogProvider: React.FC<DialogProviderProps> = ({
  zIndex = 0,
  onClose,
  children,
}) => {
  return (
    <DialogContext.Provider value={{ zIndex, onClose }}>
      {children}
    </DialogContext.Provider>
  );
};

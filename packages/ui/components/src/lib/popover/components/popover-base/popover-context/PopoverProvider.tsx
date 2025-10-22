'use client';

import { PopoverContext } from './PopoverContext';

interface PopoverProviderProps {
  children: React.ReactNode;
  reference: HTMLElement | null;
  open: boolean;
  close: () => void;
  zIndex: number;
  onClose?: () => void;
}

export const PopoverProvider: React.FC<PopoverProviderProps> = ({
  children,
  ...props
}) => {
  return (
    <PopoverContext.Provider value={{ ...props }}>
      {children}
    </PopoverContext.Provider>
  );
};

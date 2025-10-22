'use client';

import { createContext, useContext } from 'react';

interface PopoverContextProps {
  open: boolean;
  close: () => void;
  reference: HTMLElement | null;
  zIndex: number;
  onClose?: () => void;
}

export const PopoverContext = createContext<PopoverContextProps>({
  open: false,
  close: () => null,
  reference: null,
  zIndex: 0,
});

export const usePopover = () => {
  return useContext(PopoverContext);
};

'use client';

import { createContext, useContext } from 'react';

interface MenuContextProps {
  open: boolean;
  close: () => void;
  defaultreference: HTMLDivElement | null;
}

export const MenuContext = createContext<MenuContextProps>({
  open: false,
  close: () => null,
  defaultreference: null,
});

export const useMenuBase = () => {
  return useContext(MenuContext);
};

'use client';

import { MenuContext } from './MenuContext';

interface MenuProviderProps {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
  defaultreference: HTMLDivElement | null;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({
  open,
  close,
  children,
  defaultreference,
}) => {
  return (
    <MenuContext.Provider value={{ defaultreference, open, close }}>
      {children}
    </MenuContext.Provider>
  );
};

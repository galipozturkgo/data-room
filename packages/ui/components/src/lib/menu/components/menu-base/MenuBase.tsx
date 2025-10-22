'use client';

import {
  Menu as HeadlessMenu,
  MenuButton as HeadlessMenuButton,
  MenuItem as HeadlessMenuItem,
} from '@headlessui/react';
import { useRef } from 'react';

import { MenuItems } from './components/MenuItems';
import { MenuProvider } from './context/MenuProvider';
import { MenuBaseProps } from './MenuBase.types';

const BaseMenuBase: React.FC<MenuBaseProps> & {
  Button: typeof HeadlessMenuButton;
  Item: typeof HeadlessMenuItem;
  Items: typeof MenuItems;
} = ({ children, className, ...props }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <HeadlessMenu as="div" ref={ref} className={className} {...props}>
      {({ open, close }) => (
        <MenuProvider open={open} close={close} defaultreference={ref.current}>
          {typeof children === 'function'
            ? children({ open, close })
            : children}
        </MenuProvider>
      )}
    </HeadlessMenu>
  );
};

BaseMenuBase.Button = HeadlessMenuButton;
BaseMenuBase.Item = HeadlessMenuItem;
BaseMenuBase.Items = MenuItems;

export const BaseMenu = BaseMenuBase;

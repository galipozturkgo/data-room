'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { MenuItems as HeadlessMenuItems } from '@headlessui/react';
import React from 'react';

import { Floating } from '../../../../floating/Floating';
import { useMenuBase } from '../context/MenuContext';
import { MenuItemsProps } from './MenuItems.types';

const MenuItemsBase = (
  { reference, children, floating, className, ...props }: MenuItemsProps,
  ref: React.RefObject<HTMLDivElement>,
) => {
  const { open, close, defaultreference } = useMenuBase();

  return (
    <Floating
      reference={reference || defaultreference}
      open={open}
      className={classNames(styles.root, floating?.className)}
      {...floating}
    >
      <HeadlessMenuItems
        as="div"
        ref={ref}
        className={classNames(styles.items, className)}
        {...props}
      >
        {typeof children === 'function' ? children({ open, close }) : children}
      </HeadlessMenuItems>
    </Floating>
  );
};

const styles = {
  root: classes('z-[1600]'),
  items: classes('relative', 'p-1', 'floating-panel'),
};

export const MenuItems = React.forwardRef(MenuItemsBase);

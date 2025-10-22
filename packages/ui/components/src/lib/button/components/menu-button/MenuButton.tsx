'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import React from 'react';

import { Button } from '../button/Button';
import { MenuButtonProps } from './MenuButton.types';

const MenuButtonBase = (
  { icon, className, spinner = {}, startIcon, ...props }: MenuButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) => {
  return (
    <Button
      ref={ref}
      color="primary"
      className={classNames(styles.button, className)}
      spinner={spinner}
      startIcon={icon}
      {...props}
    />
  );
};

const styles = {
  button: classes('w-full', 'justify-start', 'px-1.5'),
};

export const MenuButton = React.memo(React.forwardRef(MenuButtonBase));

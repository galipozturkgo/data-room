'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import React from 'react';

import { IconButton } from '../icon-button/IconButton';
import { MiniIconButtonProps } from './MiniIconButton.types';

const MiniIconButtonBase = (
  { className, icon, ...props }: MiniIconButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) => {
  const iconSize = icon?.props.size ?? 'sm';

  const Icon =
    icon &&
    React.cloneElement(icon, {
      ...icon.props,
      size: iconSize,
    });

  return (
    <IconButton
      ref={ref}
      variant="text"
      className={classNames(styles.button, className)}
      icon={Icon}
      spinner={{
        size: iconSize,
      }}
      {...props}
    />
  );
};

const styles = {
  button: classes('h-6', 'w-6', 'rounded-lg'),
};

export const MiniIconButton = React.memo(React.forwardRef(MiniIconButtonBase));

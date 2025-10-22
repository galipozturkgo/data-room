'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import React from 'react';

import { BaseButton } from '../button-base/ButtonBase';
import { IconButtonProps } from './IconButton.types';

const IconButtonBase = (
  {
    as,
    className,
    icon,
    spinner,
    type = 'button',
    children,
    ...props
  }: IconButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) => {
  return (
    <BaseButton
      as={as}
      ref={ref}
      type={type}
      className={classNames(styles.button, className)}
      {...props}
    >
      {({ loading }) => {
        return loading ? (
          <BaseButton.Spinner {...spinner} />
        ) : (
          children || (icon && <BaseButton.Icon icon={icon} />)
        );
      }}
    </BaseButton>
  );
};

const styles = {
  button: classes('h-8', 'w-8', 'rounded-xl'),
};

export const IconButton = Object.assign(
  React.memo(React.forwardRef(IconButtonBase)),
  {
    Icon: BaseButton.Icon,
  },
);

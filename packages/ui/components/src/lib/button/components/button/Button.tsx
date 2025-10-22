'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import React, { Fragment } from 'react';

import { BaseButton } from '../button-base/ButtonBase';
import { ButtonProps } from './Button.types';

const ButtonBase = (
  {
    children,
    className,
    startIcon,
    endIcon,
    spinner,
    text,
    type = 'button',
    ...props
  }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) => {
  return (
    <BaseButton
      ref={ref}
      type={type}
      className={classNames(styles.button, className)}
      {...props}
    >
      {({ loading }) => {
        return (
          <Fragment>
            {loading && <BaseButton.Spinner {...spinner} />}
            {!loading && startIcon && <BaseButton.Icon icon={startIcon} />}
            {children || text}
            {endIcon && <BaseButton.Icon icon={endIcon} />}
          </Fragment>
        );
      }}
    </BaseButton>
  );
};

const styles = {
  button: classes('px-3', 'rounded-xl'),
};

export const Button = React.memo(React.forwardRef(ButtonBase));

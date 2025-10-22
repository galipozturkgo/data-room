'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import React, { Fragment } from 'react';

import { BaseButton } from '../button-base/ButtonBase';
import { LinkButtonProps } from './LinkButton.types';

const LinkButtonBase = (
  {
    variant = 'text',
    href,
    onClick,
    disabled,
    children,
    className,
    startIcon,
    endIcon,
    spinner,
    text,
    ...props
  }: LinkButtonProps,
  ref: React.Ref<HTMLAnchorElement>,
) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!disabled) {
      onClick?.(e);
    } else {
      e.preventDefault();
    }
  };

  return (
    <BaseButton
      as="a"
      ref={ref}
      href={href}
      onClick={handleClick}
      variant={variant}
      disabled={disabled}
      className={classNames(
        styles.button,
        variant === 'text' && styles.link,
        className,
      )}
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
  button: classes('h-6', 'px-1.5', 'rounded-lg', 'inline-flex'),
  link: classes('hover:underline hover:duration-300'),
};

export const LinkButton = React.forwardRef(LinkButtonBase);

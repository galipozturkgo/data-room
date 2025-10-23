'use client';

import { classes, classNames, Color, COLORS } from '@dataroom/ui-utils';
import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';

import {
  ButtonColor,
  ButtonVariant,
  InnerBaseButtonProps,
} from './ButtonBase.types';
import { ButtonIcon } from './components/button-icon/ButtonIcon';
import { ButtonSpinner } from './components/button-spinner/ButtonSpinner';

const BaseButtonBase = <T extends React.ElementType = 'button'>(
  {
    as,
    children,
    onClick,
    variant = 'default',
    color = 'primary',
    loading,
    disabled,
    readOnly,
    hidden,
    className,
    ...props
  }: InnerBaseButtonProps<T>,
  ref: AsRef<T>,
) => {
  const Component = as || 'button';
  const [executing, setExecuting] = useState<boolean>(false);
  const innerLoading = loading || executing;
  const isDisabled = innerLoading || disabled || false;

  const handleClick = async (event: React.MouseEvent<Element, MouseEvent>) => {
    if (innerLoading) {
      return event.preventDefault();
    }

    if (onClick) {
      if (onClick.constructor.name === 'AsyncFunction') {
        setExecuting(true);
        await onClick(event);
        setExecuting(false);
      } else {
        onClick(event);
      }
    }
  };

  if (hidden) {
    return <span />;
  }

  return (
    <Component
      ref={ref}
      onClick={handleClick}
      disabled={disabled}
      className={classNames(
        styles.default(variant, color),
        !isDisabled && styles.enabled(variant, color),
        isDisabled && styles.disabled,
        readOnly && styles.readOnly,
        hidden && styles.hidden,
        className,
      )}
      {...props}
    >
      {typeof children === 'function'
        ? children({ loading: innerLoading })
        : children}
    </Component>
  );
};

const bgStyles = (color: Color) => ({
  default: null,
  contained: classes(COLORS.background.default[color]),
  outlined: classes(COLORS.border[color]),
  text: null,
});

const bgHoverStyles = (color: Color) => ({
  default: classes(COLORS.background.hover[color]),
  contained: classes(COLORS.background.contained.hover[color]),
  outlined: classes(COLORS.background.hover[color]),
  text: null,
});

const bgActiveStyles = (color: Color) => ({
  default: classes(COLORS.background.active[color]),
  contained: classes(COLORS.background.contained.active[color]),
  outlined: classes(COLORS.background.active[color]),
  text: null,
});

const textStyles = (color: Color) => ({
  default: classes(COLORS.text.default[color]),
  contained: classes(COLORS.text.contained[color]),
  outlined: classes(COLORS.text.default[color]),
  text: classes(COLORS.text.default[color]),
});

const textHoverStyles = (color: Color) => ({
  default: null,
  contained: null,
  outlined: null,
  text: classes(COLORS.text.hover[color]),
});

const textActiveStyles = (color: Color) => ({
  default: null,
  contained: null,
  outlined: null,
  text: classes(COLORS.text.active[color]),
});

const borderStyles = (color: Color) => ({
  default: null,
  contained: null,
  outlined: classes('border', COLORS.border[color]),
  text: null,
});

const styles = {
  default: (variant: ButtonVariant, color: ButtonColor) =>
    classes(
      'h-8',
      'flex',
      'items-center',
      'justify-center',
      'gap-2',
      'min-w-max',
      'text-sm',
      'cursor-pointer',
      'transition-colors',
      'overflow-hidden',
      bgStyles(color)[variant],
      textStyles(color)[variant],
      borderStyles(color)[variant],
    ),
  disabled: classes(
    'opacity-70',
    'cursor-default',
    'disabled:opacity-70',
    'disabled:cursor-default',
  ),
  readOnly: classes(
    'opacity-100',
    'disabled:opacity-100',
    'pointer-events-none',
  ),
  enabled: (variant: ButtonVariant, color: ButtonColor) =>
    classes(
      'focus-visible',
      'duration-300',
      'hover:duration-300',
      !isMobile && bgHoverStyles(color)[variant],
      bgActiveStyles(color)[variant],
      !isMobile && textHoverStyles(color)[variant],
      textActiveStyles(color)[variant],
    ),
  hidden: classes('hidden'),
};

export const BaseButton = Object.assign(React.forwardRef(BaseButtonBase), {
  Spinner: ButtonSpinner,
  Icon: ButtonIcon,
});

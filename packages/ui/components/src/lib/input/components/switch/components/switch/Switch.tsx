'use client';

import { Switch as HeadlessSwitch } from '@headlessui/react';
import { classes, classNames } from '@dataroom/ui-utils';
import React from 'react';

import { Input } from '../../../input/components/input/Input';
import { SwitchOptions } from '../switch-options/SwitchOptions';
import { SwitchProps } from './Switch.types';

const SwitchBase = (
  { input, className, checked, value, disabled, ...props }: SwitchProps,
  ref: React.Ref<HTMLButtonElement>,
) => {
  const { disable, ...inputProps } = input || {};

  return (
    <Input disable={disabled || disable} {...inputProps}>
      {({
        backgroundClasses,
        borderClasses,
        disabledClasses,
        focusVisibleClasses,
        errorClasses,
        passedClasses,
      }) => (
        <HeadlessSwitch
          ref={ref}
          checked={checked || false}
          disabled={disabled}
          value={value}
          className={classNames(
            backgroundClasses,
            borderClasses,
            disabledClasses,
            errorClasses,
            focusVisibleClasses,
            passedClasses,
            styles.switch,
            className,
          )}
          {...props}
        >
          <span
            className={classNames(styles.tomb, checked && styles.checkedTomb)}
          />
        </HeadlessSwitch>
      )}
    </Input>
  );
};

const styles = {
  switch: classes(
    'h-6',
    'w-10',
    'min-h-0',
    'flex',
    'items-center',
    'rounded-full',
    'duration-200',
    'cursor-pointer',
    'disabled:cursor-default',
  ),
  tomb: classes(
    'bg-skin-muted',
    'pointer-events-none',
    'inline-block',
    'h-5',
    'w-5',
    'rounded-full',
    'ring-0',
    'duration-200',
    'transition',
    'ease-in-out',
    'translate-x-px',
  ),
  checkedTomb: classes('translate-x-[1.0625rem]', 'bg-skin-accent'),
};

export const Switch = Object.assign(React.forwardRef(SwitchBase), {
  Options: SwitchOptions,
});

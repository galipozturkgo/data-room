'use client';

import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react';
import { classes, classNames } from '@dataroom/ui-utils';
import React from 'react';

import { Input } from '../../../input/components/input/Input';
import { RadioOption } from '../radio-option/RadioOption';
import { RadioProps } from './Radio.types';

const RadioBase = (
  {
    input,
    value,
    children,
    disabled,
    onChange,
    className,
    ...props
  }: RadioProps,
  ref: React.Ref<HTMLUListElement>,
) => {
  const { disable, ...inputProps } = input || {};

  return (
    <Input disable={disabled || disable} {...inputProps}>
      {({ disabledClasses, errorClasses, passedClasses }) => (
        <HeadlessRadioGroup
          as="ul"
          ref={ref}
          value={value}
          onChange={onChange}
          tabIndex={-1}
          disabled={disabled}
          className={classNames(
            disabledClasses,
            errorClasses,
            passedClasses,
            styles.options,
            className,
          )}
          {...props}
        >
          {children}
        </HeadlessRadioGroup>
      )}
    </Input>
  );
};

const styles = {
  options: classes('flex', 'gap-1.5'),
};

export const Radio = Object.assign(React.forwardRef(RadioBase), {
  Option: RadioOption,
});

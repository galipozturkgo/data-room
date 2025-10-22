'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import React from 'react';

import { SwitchOptionsProps } from './SwitchOptions.types';

const SWITCH_LOCALES = {
  'active-passive': { false: 'Passive', true: 'Active' },
  'enable-disable': { false: 'Disable', true: 'Enable' },
  'open-closed': { false: 'Closed', true: 'Open' },
  'true-false': { false: 'False', true: 'True' },
  'yes-no': { false: 'No', true: 'Yes' },
};

export const SwitchOptions: React.FC<SwitchOptionsProps> = ({
  option = 'true-false',
  selected = true,
  icon,
  className,
  htmlFor,
  disable,
}) => {
  const current = selected.toString() as 'true' | 'false';

  const TrueIcon =
    icon?.true &&
    React.cloneElement(icon.true, {
      size: icon.true.props.size ?? 'sm',
      ...icon.true.props,
    });

  const FalseIcon =
    icon?.false &&
    React.cloneElement(icon.false, {
      size: icon.false.props.size ?? 'sm',
      ...icon.false.props,
    });

  return (
    <div
      className={classNames(
        styles.root,
        styles[current],
        disable && styles.disable,
        className,
      )}
    >
      <label
        htmlFor={htmlFor}
        className={classNames(styles.label, disable && styles.labelDisable)}
      >
        {SWITCH_LOCALES[option][current]}
      </label>
      {icon && (selected ? TrueIcon : FalseIcon)}
    </div>
  );
};

const styles = {
  root: classes('flex', 'items-center', 'gap-2', 'w-20'),
  true: classes('text-skin-green'),
  false: classes('text-skin-red'),
  disable: classes('opacity-70'),
  label: classes('cursor-pointer', 'select-none'),
  labelDisable: classes('cursor-default'),
};

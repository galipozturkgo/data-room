'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import React from 'react';

import { ButtonIconProps } from './ButtonIcon.types';

const ButtonIconBase: React.FC<ButtonIconProps> = ({ icon }) => {
  const Icon = React.cloneElement(icon, {
    ...icon.props,
    size: icon.props.size ?? 'base',
    className: classNames(styles.icon, icon.props.className),
  });

  return Icon;
};

const styles = {
  icon: classes('flex-none'),
};

export const ButtonIcon = ButtonIconBase;

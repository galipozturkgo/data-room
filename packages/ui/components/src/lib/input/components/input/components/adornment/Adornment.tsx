'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import React from 'react';

import { AdornmentProps } from './Adornment.types';

const AdornmentBase = (
  { className, component }: AdornmentProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  if (!component) {
    return undefined;
  }

  return (
    <div ref={ref} className={classNames(styles.root, className)}>
      {component}
    </div>
  );
};

const styles = {
  root: classes('px-1'),
};

export const Adornment = React.memo(React.forwardRef(AdornmentBase));

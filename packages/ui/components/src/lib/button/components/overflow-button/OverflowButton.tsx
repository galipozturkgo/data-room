'use client';

import { classes, classNames } from '@dataroom/ui-utils';
import { animated, useTransition } from '@react-spring/web';
import React from 'react';

import { MenuIcon } from '../../../icon/components/Menu';
import { UpIcon } from '../../../icon/components/Up';
import { OverflowButtonProps } from './OverflowButton.types';

const OverflowButtonBase: React.FC<OverflowButtonProps> = ({
  onClick,
  visible,
  overflowOpen,
  className,
}) => {
  const transitions = useTransition(visible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return transitions((style, open) => {
    if (!open) {
      return;
    }

    return (
      <animated.div
        style={style}
        className={classNames(styles.root, className)}
        onClick={onClick}
      >
        <div className={styles.container}>
          {overflowOpen ? <UpIcon /> : <MenuIcon />}
        </div>
      </animated.div>
    );
  });
};

const styles = {
  root: classes(
    'z-30',
    'rounded-lg',
    'h-2.5',
    'w-12',
    'border',
    'border-skin-silent',
    'bg-skin-primary',
    'text-skin-accent',
    'grid',
    'place-content-center',
    'cursor-pointer',
    'absolute',
    'left-[50%]',
    '-translate-x-[50%]',
    '-bottom-[0.3125rem]',
  ),
  container: classes('h-6', 'w-8', 'grid', 'place-content-center'),
};

export const OverflowButton = React.memo(OverflowButtonBase);

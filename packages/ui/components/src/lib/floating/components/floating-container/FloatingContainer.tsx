'use client';

import { animated, useTransition } from '@react-spring/web';
import React from 'react';

import { FloatingContainerProps } from './FloatingContainer.types';

const FloatingContainerBase = (
  {
    open,
    style,
    className,
    immediate,
    children,
    ...props
  }: FloatingContainerProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const transitions = useTransition(open, {
    immediate,
    config: {
      mass: 0.1,
      tension: 500,
      friction: 40,
      velocity: -0.05,
    },
    from: {
      opacity: 0,
      scale: 0.9,
    },
    enter: {
      opacity: 1,
      scale: 1,
    },
    leave: {
      opacity: 0,
      scale: 1,
    },
  });

  return transitions((trans, open) => {
    if (!open) {
      return;
    }

    return (
      <animated.div
        ref={ref}
        style={{ ...style, ...trans }}
        className={className}
        {...props}
      >
        {children}
      </animated.div>
    );
  });
};

export const FloatingContainer = React.memo(
  React.forwardRef(FloatingContainerBase),
);

'use client';

import {
  autoUpdate as autoUpdater,
  flip as flipMiddleware,
  offset as offsetMiddleware,
  shift as shiftMiddleware,
  size as sizeMiddleware,
  useFloating,
} from '@floating-ui/react';
import { useEffect, useState } from 'react';
import React from 'react';

import { FloatingContainer } from './components/floating-container/FloatingContainer';
import { FloatingWrapper } from './components/floating-wrapper/FloatingWrapper';
import { FloatingProps } from './Floating.types';

const isServer = typeof window === 'undefined';

const FloatingBase: React.FC<FloatingProps> = ({
  open = false,
  onClose,
  portal = true,
  immediate,
  className,
  style,
  children,
  reference,
  placement = 'bottom',
  strategy = 'absolute',
  shift = {},
  offset = 4,
  autoUpdate,
  dependencies,
  sameWidth,
}) => {
  const [floating, setFloating] = useState<HTMLDivElement | null>(null);

  const { update, floatingStyles } = useFloating({
    middleware: [
      flipMiddleware(),
      shiftMiddleware({ padding: 6, crossAxis: true, ...shift }),
      offsetMiddleware(offset),
      sizeMiddleware({
        apply: ({ rects, elements }) => {
          sameWidth &&
            Object.assign(elements.floating.style, {
              width: `${rects.reference.width}px`,
            });
        },
      }),
    ],
    whileElementsMounted: autoUpdate ? autoUpdater : undefined,
    strategy,
    placement,
    open,
    elements: {
      floating,
      reference,
    },
  });

  useEffect(() => {
    if (dependencies) {
      update && update();
    }
  }, [dependencies]);

  useEffect(() => {
    return () => onClose && onClose();
  }, [onClose]);

  if (isServer) {
    return null;
  }

  return (
    <FloatingWrapper portal={portal}>
      <FloatingContainer
        ref={setFloating}
        open={open}
        immediate={immediate}
        className={className}
        style={{
          ...floatingStyles,
          ...{ ...(style && style) },
        }}
      >
        {children}
      </FloatingContainer>
    </FloatingWrapper>
  );
};

export const Floating = React.memo(FloatingBase);

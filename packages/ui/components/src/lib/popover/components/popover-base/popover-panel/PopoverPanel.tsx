'use client';

import { PopoverPanel as HeadlessPopover } from '@headlessui/react';
import { classes, classNames } from '@dataroom/ui-utils';
import React from 'react';

import { Floating } from '../../../../floating/Floating';
import { usePopover } from '../popover-context/PopoverContext';
import { PopoverPanelProps } from './PopoverPanel.types';

const PopoverPanelBase = (
  { className, children, style, floating, ...props }: PopoverPanelProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const { open, reference, zIndex, onClose } = usePopover();

  return (
    <Floating
      open={open}
      onClose={onClose}
      reference={reference}
      style={{ zIndex, ...style }}
      {...floating}
    >
      <HeadlessPopover
        as="div"
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        className={styles.container}
        {...props}
      >
        {({ close, open }) => (
          <div className={classNames(styles.content, className)}>
            {typeof children === 'function'
              ? children({ open, close })
              : children}
          </div>
        )}
      </HeadlessPopover>
    </Floating>
  );
};

const styles = {
  container: classes('floating-panel', 'p-1.5'),
  content: classes('p-1', 'overflow-auto', 'max-h-[94dvh]', 'max-w-[94dvw]'),
};

export const PopoverPanel = React.forwardRef(PopoverPanelBase);
